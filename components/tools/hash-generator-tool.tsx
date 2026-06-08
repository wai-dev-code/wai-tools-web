"use client"

import { useEffect, useMemo, useState } from "react"
import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { defaultLocale, type Locale } from "@/lib/i18n/config"
import { formatMessage, getMessages } from "@/lib/i18n"
import {
  computeAllHashes,
  HASH_ALGORITHMS,
  type HashAlgorithm,
  type HashResults,
} from "@/lib/hash-utils"
import { toolNotify } from "@/lib/tool-notify"
import { cn } from "@/lib/utils"

interface HashGeneratorToolProps {
  locale?: Locale
}

const algorithmLabelKey: Record<
  HashAlgorithm,
  keyof ReturnType<typeof getMessages>["hashTool"]
> = {
  MD5: "algorithmMd5",
  "SHA-1": "algorithmSha1",
  "SHA-256": "algorithmSha256",
  "SHA-512": "algorithmSha512",
}

export function HashGeneratorTool({ locale = defaultLocale }: HashGeneratorToolProps) {
  const ui = getMessages(locale).hashTool
  const [input, setInput] = useState("")
  const [results, setResults] = useState<HashResults | null>(null)
  const [computing, setComputing] = useState(false)

  useEffect(() => {
    if (!input) {
      setResults(null)
      setComputing(false)
      return
    }

    let cancelled = false
    setComputing(true)

    computeAllHashes(input)
      .then((next) => {
        if (!cancelled) {
          setResults(next)
          setComputing(false)
        }
      })
      .catch(() => {
        if (!cancelled) setComputing(false)
      })

    return () => {
      cancelled = true
    }
  }, [input])

  const hasResults = useMemo(() => results && input.length > 0, [results, input])

  const copyHash = async (algo: HashAlgorithm, value: string) => {
    if (!value) return
    await navigator.clipboard.writeText(value)
    toolNotify(formatMessage(ui.notify.copied, { algo: ui[algorithmLabelKey[algo]] as string }))
  }

  const copyAll = async () => {
    if (!results || !input) return
    const text = HASH_ALGORITHMS.map(
      (algo) => `${ui[algorithmLabelKey[algo]]}: ${results[algo]}`,
    ).join("\n")
    await navigator.clipboard.writeText(text)
    toolNotify(ui.notify.copiedAll)
  }

  return (
    <div className="space-y-5">
      <section className="space-y-3 rounded-lg border border-border bg-card p-4">
        <Label htmlFor="hash-input">{ui.inputLabel}</Label>
        <Textarea
          id="hash-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={ui.inputPlaceholder}
          rows={5}
          className="font-mono text-sm"
        />
      </section>

      <section className="space-y-3 rounded-lg border border-border bg-card p-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-sm font-medium text-foreground">{ui.resultsTitle}</h3>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            className="gap-1.5"
            onClick={copyAll}
            disabled={!hasResults}
          >
            <Copy className="h-3.5 w-3.5" />
            {ui.copyAll}
          </Button>
        </div>

        {!input ? (
          <p className="py-6 text-center text-sm text-muted-foreground">{ui.emptyInput}</p>
        ) : (
          <ul className="space-y-3">
            {HASH_ALGORITHMS.map((algo) => {
              const value = results?.[algo] ?? ""
              const label = ui[algorithmLabelKey[algo]] as string
              return (
                <li
                  key={algo}
                  className="rounded-lg border border-border bg-muted/30 p-3"
                >
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                      {label}
                    </span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="h-7 gap-1 px-2 text-xs"
                      onClick={() => copyHash(algo, value)}
                      disabled={!value}
                    >
                      <Copy className="h-3 w-3" />
                      {ui.copy}
                    </Button>
                  </div>
                  <p
                    className={cn(
                      "break-all font-mono text-xs leading-relaxed text-foreground sm:text-sm",
                      computing && !value && "text-muted-foreground",
                    )}
                  >
                    {value || "…"}
                  </p>
                </li>
              )
            })}
          </ul>
        )}
      </section>
    </div>
  )
}
