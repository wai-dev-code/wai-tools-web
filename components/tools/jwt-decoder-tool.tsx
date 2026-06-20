"use client"

import { useState, useMemo, useEffect } from "react"
import { Copy, Trash2 } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { ToolExampleMenu } from "@/components/tool-example-menu"
import { getJwtDecoderExamples } from "@/lib/i18n/examples"
import { defaultLocale, type Locale } from "@/lib/i18n/config"
import { getMessages } from "@/lib/i18n"
import type { JwtDecoderExample } from "@/lib/tool-examples"
import { toolNotify } from "@/lib/tool-notify"
import { verifyJwtHs256, type JwtVerifyResult } from "@/lib/jwt-verify"
import { cn } from "@/lib/utils"
import type { JwtToolMessages } from "@/lib/i18n/messages/jwt-tool-messages"

function decodeBase64Url(str: string): string {
  let base64 = str.replace(/-/g, "+").replace(/_/g, "/")
  const pad = base64.length % 4
  if (pad) base64 += "=".repeat(4 - pad)
  const binary = atob(base64)
  const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0))
  return new TextDecoder().decode(bytes)
}

function parseJwtPart(
  part: string,
  parseFailedMessage: string
): { json: string; data: Record<string, unknown> | null; error: string | null } {
  try {
    const decoded = decodeBase64Url(part)
    const parsed = JSON.parse(decoded) as Record<string, unknown>
    return { json: JSON.stringify(parsed, null, 2), data: parsed, error: null }
  } catch {
    return { json: "", data: null, error: parseFailedMessage }
  }
}

function formatUnixClaim(value: unknown): string | null {
  if (typeof value !== "number" || !Number.isFinite(value)) return null
  const ms = value < 1e12 ? value * 1000 : value
  const date = new Date(ms)
  if (isNaN(date.getTime())) return null
  return date.toISOString().replace("T", " ").slice(0, 19) + " UTC"
}

type TimeClaimKey = "exp" | "iat" | "nbf"

interface ClaimInfo {
  key: TimeClaimKey
  label: string
  raw: unknown
  formatted: string
  status?: "expired" | "valid" | "future"
}

function getPayloadClaims(
  data: Record<string, unknown> | null,
  claims: JwtToolMessages["claims"]
): ClaimInfo[] {
  if (!data) return []
  const now = Date.now()
  const result: ClaimInfo[] = []

  const addTimeClaim = (key: TimeClaimKey, checkExpiry?: boolean) => {
    if (!(key in data)) return
    const raw = data[key]
    const formatted = formatUnixClaim(raw)
    if (!formatted) return
    let status: ClaimInfo["status"]
    if (checkExpiry && typeof raw === "number") {
      const ms = raw < 1e12 ? raw * 1000 : raw
      status = ms < now ? "expired" : "valid"
    } else if (key === "nbf" && typeof raw === "number") {
      const ms = raw < 1e12 ? raw * 1000 : raw
      status = ms > now ? "future" : undefined
    }
    result.push({ key, label: claims[key], raw, formatted, status })
  }

  addTimeClaim("exp", true)
  addTimeClaim("iat")
  addTimeClaim("nbf")

  return result
}

interface JwtDecoderToolProps {
  locale?: Locale
}

export function JwtDecoderTool({ locale = defaultLocale }: JwtDecoderToolProps) {
  const ui = getMessages(locale).jwtTool
  const examples = useMemo(() => getJwtDecoderExamples(locale), [locale])
  const [token, setToken] = useState("")
  const [secret, setSecret] = useState("")
  const [verifyResult, setVerifyResult] = useState<JwtVerifyResult>({ status: "skipped" })

  useEffect(() => {
    let cancelled = false
    verifyJwtHs256(token, secret).then((result) => {
      if (!cancelled) setVerifyResult(result)
    })
    return () => {
      cancelled = true
    }
  }, [token, secret])

  const applyExample = (example: JwtDecoderExample) => {
    setToken(example.token)
  }

  const decoded = useMemo(() => {
    const trimmed = token.trim()
    if (!trimmed) {
      return { error: null, header: "", payload: "", signature: "", headerData: null, payloadData: null, alg: null }
    }
    const parts = trimmed.split(".")
    if (parts.length !== 3) {
      return {
        error: ui.errors.invalidStructure,
        header: "",
        payload: "",
        signature: "",
        headerData: null,
        payloadData: null,
        alg: null,
      }
    }
    const header = parseJwtPart(parts[0], ui.errors.parseFailed)
    const payload = parseJwtPart(parts[1], ui.errors.parseFailed)
    if (header.error || payload.error) {
      return {
        error: header.error || payload.error,
        header: header.json,
        payload: payload.json,
        signature: parts[2],
        headerData: header.data,
        payloadData: payload.data,
        alg: typeof header.data?.alg === "string" ? header.data.alg : null,
      }
    }
    return {
      error: null,
      header: header.json,
      payload: payload.json,
      signature: parts[2],
      headerData: header.data,
      payloadData: payload.data,
      alg: typeof header.data?.alg === "string" ? header.data.alg : null,
    }
  }, [token, ui.errors.invalidStructure, ui.errors.parseFailed])

  const claims = useMemo(
    () => getPayloadClaims(decoded.payloadData, ui.claims),
    [decoded.payloadData, ui.claims]
  )
  const isExpired = claims.some((c) => c.key === "exp" && c.status === "expired")

  const verifyMessage = useMemo(() => {
    if (verifyResult.status === "valid") return ui.verifyValid
    if (verifyResult.status === "invalid") return ui.verifyInvalid
    if (verifyResult.status === "unsupported-alg") return ui.verifyUnsupported
    if (verifyResult.status === "skipped" && token.trim() && decoded.alg === "HS256") return ui.verifySkipped
    return null
  }, [verifyResult, ui, token, decoded.alg])

  const verifyTone =
    verifyResult.status === "valid"
      ? "text-green-700 dark:text-green-400 bg-green-500/10"
      : verifyResult.status === "invalid"
        ? "text-destructive bg-destructive/10"
        : "text-muted-foreground bg-muted/30"

  const copySection = async (text: string, kind: "header" | "payload") => {
    if (!text) {
      toolNotify(ui.notify.nothingToCopy, "warning")
      return
    }
    await navigator.clipboard.writeText(text)
    toolNotify(kind === "header" ? ui.notify.copiedHeader : ui.notify.copiedPayload)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <Label htmlFor="jwt">{ui.tokenLabel}</Label>
        <div className="flex items-center gap-1">
          <ToolExampleMenu examples={examples} onApply={applyExample} label={ui.example} />
          <Button variant="ghost" size="sm" className="h-8 px-2 text-xs" onClick={() => setToken("")}>
            <Trash2 className="mr-1 h-3 w-3" />
            {ui.clear}
          </Button>
        </div>
      </div>
      <Textarea
        id="jwt"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        className="min-h-[100px] font-mono text-sm break-all"
        placeholder={ui.placeholder}
      />
      {decoded.error && token.trim() && (
        <p className="text-sm text-destructive">{decoded.error}</p>
      )}
      {decoded.alg && (
        <p className="text-sm text-muted-foreground">
          {ui.algorithm}：<span className="font-mono text-foreground">{decoded.alg}</span>
        </p>
      )}
      <div className="space-y-2">
        <Label htmlFor="jwt-secret">{ui.secretLabel}</Label>
        <Input
          id="jwt-secret"
          type="password"
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
          placeholder={ui.secretPlaceholder}
          className="font-mono text-sm"
        />
        {verifyMessage && (
          <p className={cn("rounded-md px-3 py-2 text-sm", verifyTone)}>{verifyMessage}</p>
        )}
      </div>
      <div className="rounded-md border border-border/60 bg-muted/20 p-3 text-sm">
        <p className="mb-2 font-medium text-foreground">{ui.guideTitle}</p>
        <ul className="space-y-1 text-muted-foreground">
          {Object.entries(ui.algorithms).map(([alg, desc]) => (
            <li key={alg}>
              <span className="font-mono text-foreground">{alg}</span> — {desc}
            </li>
          ))}
        </ul>
        <p className="mb-2 mt-3 font-medium text-foreground">{ui.claimsGuideTitle}</p>
        <ul className="space-y-1 text-muted-foreground">
          {Object.entries(ui.claimsGuide).map(([key, desc]) => (
            <li key={key}>
              <span className="font-mono text-foreground">{key}</span> — {desc}
            </li>
          ))}
        </ul>
      </div>
      {claims.length > 0 && (
        <div className="rounded-md border border-border bg-secondary/30 p-3 space-y-2">
          <p className="text-sm font-medium text-foreground">{ui.timeClaims}</p>
          {claims.map((claim) => (
            <div key={claim.key} className="flex flex-wrap items-center gap-2 text-sm">
              <span className="text-muted-foreground">{claim.label}:</span>
              <span className="font-mono">{claim.formatted}</span>
              {claim.key === "exp" && claim.status === "expired" && (
                <span className="rounded-full bg-destructive/15 px-2 py-0.5 text-xs text-destructive">
                  {ui.status.expired}
                </span>
              )}
              {claim.key === "exp" && claim.status === "valid" && (
                <span className="rounded-full bg-green-500/15 px-2 py-0.5 text-xs text-green-700 dark:text-green-400">
                  {ui.status.valid}
                </span>
              )}
              {claim.key === "nbf" && claim.status === "future" && (
                <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-xs text-amber-700 dark:text-amber-400">
                  {ui.status.notYetValid}
                </span>
              )}
            </div>
          ))}
          {isExpired && (
            <p className="text-xs text-destructive">{ui.expiredWarning}</p>
          )}
        </div>
      )}
      {decoded.header && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label>{ui.header}</Label>
            <Button
              variant="ghost"
              size="sm"
              className="h-7 px-2 text-xs"
              onClick={() => copySection(decoded.header, "header")}
            >
              <Copy className="mr-1 h-3 w-3" />
              {ui.copy}
            </Button>
          </div>
          <Textarea readOnly value={decoded.header} className="min-h-[80px] font-mono text-sm" />
        </div>
      )}
      {decoded.payload && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label>{ui.payload}</Label>
            <Button
              variant="ghost"
              size="sm"
              className="h-7 px-2 text-xs"
              onClick={() => copySection(decoded.payload, "payload")}
            >
              <Copy className="mr-1 h-3 w-3" />
              {ui.copy}
            </Button>
          </div>
          <Textarea readOnly value={decoded.payload} className="min-h-[120px] font-mono text-sm" />
        </div>
      )}
      {decoded.signature && (
        <div className="space-y-2">
          <Label>{ui.signatureHint}</Label>
          <p
            className={cn(
              "rounded-md border border-border bg-secondary/50 p-3 font-mono text-xs break-all text-muted-foreground"
            )}
          >
            {decoded.signature}
          </p>
        </div>
      )}
    </div>
  )
}
