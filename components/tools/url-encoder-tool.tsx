"use client"

import { useMemo, useState } from "react"
import { Copy, Trash2, ArrowLeftRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ToolExampleMenu } from "@/components/tool-example-menu"
import { getUrlEncoderExamples } from "@/lib/i18n/examples"
import { defaultLocale, type Locale } from "@/lib/i18n/config"
import { getMessages } from "@/lib/i18n"
import type { UrlEncoderExample } from "@/lib/tool-examples"
import { transformUrl, type UrlEncodeMode } from "@/lib/url-utils"
import { toolNotify } from "@/lib/tool-notify"

const SWAP_MODE: Partial<Record<UrlEncodeMode, UrlEncodeMode>> = {
  "component-encode": "component-decode",
  "component-decode": "component-encode",
  "uri-encode": "uri-decode",
  "uri-decode": "uri-encode",
  "query-parse": "query-build",
  "query-build": "query-parse",
}

const ALL_MODES: UrlEncodeMode[] = [
  "component-encode",
  "component-decode",
  "uri-encode",
  "uri-decode",
  "query-parse",
  "query-build",
]

interface UrlEncoderToolProps {
  locale?: Locale
  defaultMode?: UrlEncodeMode
}

export function UrlEncoderTool({ locale = defaultLocale, defaultMode = "component-encode" }: UrlEncoderToolProps) {
  const ui = getMessages(locale).urlTool
  const examples = useMemo(() => getUrlEncoderExamples(locale), [locale])

  const [input, setInput] = useState("")
  const [mode, setMode] = useState<UrlEncodeMode>(defaultMode)

  const result = useMemo(() => transformUrl(input, mode), [input, mode])
  const errorMessage = result.error ? ui.errors[result.error] : null

  const queryRows = useMemo(() => {
    if (mode !== "query-parse" || !input.trim()) return []
    const params = new URLSearchParams(input.trim().startsWith("?") ? input.trim().slice(1) : input.trim())
    return Array.from(params.entries()).map(([key, value]) => ({ key, value }))
  }, [mode, input])

  const applyExample = (example: UrlEncoderExample) => {
    setInput(example.input)
    setMode(example.mode)
  }

  const copyOutput = async () => {
    if (!result.output) {
      toolNotify(ui.notify.nothingToCopy, "warning")
      return
    }
    await navigator.clipboard.writeText(result.output)
    toolNotify(ui.notify.copied)
  }

  const swapDirection = () => {
    const next = SWAP_MODE[mode]
    if (!next) return
    if (result.output && !result.error) {
      setInput(result.output)
    }
    setMode(next)
  }

  const inputPlaceholder =
    mode === "query-build"
      ? ui.inputPlaceholderJson
      : mode.startsWith("query")
        ? ui.inputPlaceholderQuery
        : ui.inputPlaceholder

  return (
    <div className="w-full min-w-0 space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <Select value={mode} onValueChange={(v) => setMode(v as UrlEncodeMode)}>
          <SelectTrigger className="h-9 w-full min-w-0 max-w-full sm:max-w-md">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {ALL_MODES.map((key) => (
              <SelectItem key={key} value={key}>
                {ui.modes[key]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <ToolExampleMenu
          examples={examples}
          onApply={applyExample}
          label={ui.example}
          className="h-9 gap-1 px-3 text-sm"
        />
        {SWAP_MODE[mode] && (
          <Button variant="outline" size="sm" onClick={swapDirection}>
            <ArrowLeftRight className="mr-1.5 h-3.5 w-3.5" />
            {ui.swapDirection}
          </Button>
        )}
      </div>

      <div className="grid min-w-0 gap-4 lg:grid-cols-2">
        <div className="min-w-0 space-y-2">
          <div className="flex min-w-0 items-center justify-between gap-2">
            <Label htmlFor="url-input" className="shrink-0">
              {ui.input}
            </Label>
            <Button
              variant="ghost"
              size="sm"
              className="h-7 shrink-0 px-2 text-xs"
              onClick={() => setInput("")}
            >
              <Trash2 className="mr-1 h-3 w-3" />
              {ui.clear}
            </Button>
          </div>
          <Textarea
            id="url-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-[200px] w-full min-w-0 max-w-full resize-none break-all font-mono text-sm"
            placeholder={inputPlaceholder}
          />
        </div>
        <div className="min-w-0 space-y-2">
          <div className="flex min-w-0 items-center justify-between gap-2">
            <Label htmlFor="url-output" className="shrink-0">
              {ui.output}
            </Label>
            <Button
              variant="ghost"
              size="sm"
              className="h-7 shrink-0 px-2 text-xs"
              onClick={copyOutput}
            >
              <Copy className="mr-1 h-3 w-3" />
              {ui.copy}
            </Button>
          </div>
          <Textarea
            id="url-output"
            readOnly
            value={errorMessage ? "" : result.output}
            className="min-h-[200px] w-full min-w-0 max-w-full resize-none break-all font-mono text-sm"
            placeholder={errorMessage ? "" : ui.outputPlaceholder}
          />
          {errorMessage && <p className="text-sm text-destructive">{errorMessage}</p>}
        </div>
      </div>

      {queryRows.length > 0 && (
        <div className="rounded-lg border border-border/60 overflow-hidden">
          <p className="border-b border-border/60 bg-muted/30 px-3 py-2 text-sm font-medium text-foreground">
            {ui.queryTableTitle}
          </p>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/60 bg-muted/20 text-left text-muted-foreground">
                <th className="px-3 py-2 font-medium">{ui.queryTableKey}</th>
                <th className="px-3 py-2 font-medium">{ui.queryTableValue}</th>
              </tr>
            </thead>
            <tbody>
              {queryRows.map((row) => (
                <tr key={row.key} className="border-b border-border/40 last:border-0">
                  <td className="px-3 py-2 font-mono text-foreground">{row.key}</td>
                  <td className="px-3 py-2 font-mono text-muted-foreground">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <p className="text-xs text-muted-foreground">{ui.hint}</p>
    </div>
  )
}
