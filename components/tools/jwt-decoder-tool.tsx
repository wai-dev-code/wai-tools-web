"use client"

import { useState, useMemo } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ToolExampleMenu } from "@/components/tool-example-menu"
import { jwtDecoderExamples, type JwtDecoderExample } from "@/lib/tool-examples"

function decodeBase64Url(str: string): string {
  let base64 = str.replace(/-/g, "+").replace(/_/g, "/")
  const pad = base64.length % 4
  if (pad) base64 += "=".repeat(4 - pad)
  return decodeURIComponent(
    escape(atob(base64))
  )
}

function parseJwtPart(part: string): { json: string; error: string | null } {
  try {
    const decoded = decodeBase64Url(part)
    const parsed = JSON.parse(decoded)
    return { json: JSON.stringify(parsed, null, 2), error: null }
  } catch (e) {
    return { json: "", error: e instanceof Error ? e.message : "解析失败" }
  }
}

export function JwtDecoderTool() {
  const [token, setToken] = useState("")

  const applyExample = (example: JwtDecoderExample) => {
    setToken(example.token)
  }

  const decoded = useMemo(() => {
    const parts = token.trim().split(".")
    if (parts.length !== 3) {
      return { error: "JWT 应包含 Header.Payload.Signature 三部分", header: "", payload: "", signature: "" }
    }
    const header = parseJwtPart(parts[0])
    const payload = parseJwtPart(parts[1])
    if (header.error || payload.error) {
      return {
        error: header.error || payload.error,
        header: header.json,
        payload: payload.json,
        signature: parts[2],
      }
    }
    return { error: null, header: header.json, payload: payload.json, signature: parts[2] }
  }, [token])

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <Label htmlFor="jwt">JWT Token</Label>
        <ToolExampleMenu examples={jwtDecoderExamples} onApply={applyExample} />
      </div>
      <Textarea
        id="jwt"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        className="min-h-[100px] font-mono text-sm break-all"
        placeholder="粘贴 JWT..."
      />
      {decoded.error && token.trim() && (
        <p className="text-sm text-destructive">{decoded.error}</p>
      )}
      {decoded.header && (
        <div className="space-y-2">
          <Label>Header</Label>
          <Textarea readOnly value={decoded.header} className="min-h-[80px] font-mono text-sm" />
        </div>
      )}
      {decoded.payload && (
        <div className="space-y-2">
          <Label>Payload</Label>
          <Textarea readOnly value={decoded.payload} className="min-h-[120px] font-mono text-sm" />
        </div>
      )}
      {decoded.signature && (
        <div className="space-y-2">
          <Label>Signature（未验证）</Label>
          <p className="rounded-md border border-border bg-secondary/50 p-3 font-mono text-xs break-all text-muted-foreground">
            {decoded.signature}
          </p>
        </div>
      )}
    </div>
  )
}
