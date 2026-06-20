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
import { defaultLocale, type Locale } from "@/lib/i18n/config"
import { getMessages } from "@/lib/i18n"
import { transformHtmlEntity, type HtmlEntityMode } from "@/lib/html-entity-utils"
import { toolNotify } from "@/lib/tool-notify"

interface HtmlEncoderToolProps {
  locale?: Locale
}

export function HtmlEncoderTool({ locale = defaultLocale }: HtmlEncoderToolProps) {
  const ui = getMessages(locale).htmlEncoderTool
  const [input, setInput] = useState("")
  const [mode, setMode] = useState<HtmlEntityMode>("encode")
  const [encodeAll, setEncodeAll] = useState(false)

  const result = useMemo(() => transformHtmlEntity(input, mode, encodeAll), [input, mode, encodeAll])
  const errorMessage = result.error ? ui.errors[result.error as keyof typeof ui.errors] : null

  const copyOutput = async () => {
    if (!result.output) {
      toolNotify(ui.notify.nothingToCopy, "warning")
      return
    }
    await navigator.clipboard.writeText(result.output)
    toolNotify(ui.notify.copied)
  }

  const swapDirection = () => {
    if (result.output && !result.error) {
      setInput(result.output)
    }
    setMode(mode === "encode" ? "decode" : "encode")
  }

  return (
    <div className="w-full min-w-0 space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <Select value={mode} onValueChange={(v) => setMode(v as HtmlEntityMode)}>
          <SelectTrigger className="h-9 w-full min-w-0 max-w-full sm:max-w-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="encode">{ui.modeEncode}</SelectItem>
            <SelectItem value="decode">{ui.modeDecode}</SelectItem>
          </SelectContent>
        </Select>
        {mode === "encode" && (
          <Button
            type="button"
            variant={encodeAll ? "default" : "outline"}
            size="sm"
            onClick={() => setEncodeAll((v) => !v)}
          >
            {ui.encodeAll}
          </Button>
        )}
        <Button variant="outline" size="sm" onClick={swapDirection}>
          <ArrowLeftRight className="mr-1.5 h-3.5 w-3.5" />
          {ui.swapDirection}
        </Button>
      </div>

      <div className="grid min-w-0 gap-4 lg:grid-cols-2">
        <div className="min-w-0 space-y-2">
          <div className="flex min-w-0 items-center justify-between gap-2">
            <Label htmlFor="html-input" className="shrink-0">
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
            id="html-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-[200px] w-full min-w-0 max-w-full resize-none break-all font-mono text-sm"
            placeholder={ui.inputPlaceholder}
          />
        </div>
        <div className="min-w-0 space-y-2">
          <div className="flex min-w-0 items-center justify-between gap-2">
            <Label htmlFor="html-output" className="shrink-0">
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
            id="html-output"
            readOnly
            value={errorMessage ? "" : result.output}
            className="min-h-[200px] w-full min-w-0 max-w-full resize-none break-all font-mono text-sm"
            placeholder={errorMessage ? "" : ui.outputPlaceholder}
          />
          {errorMessage && <p className="text-sm text-destructive">{errorMessage}</p>}
        </div>
      </div>

      <p className="text-xs text-muted-foreground">{ui.hint}</p>
    </div>
  )
}
