"use client"

import { useState, useCallback, useEffect, useMemo } from "react"
import { Copy, Download, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ToolExampleMenu } from "@/components/tool-example-menu"
import { getUuidGeneratorExamples } from "@/lib/i18n/examples"
import { defaultLocale, type Locale } from "@/lib/i18n/config"
import { formatMessage, getMessages } from "@/lib/i18n"
import type { UuidGeneratorExample } from "@/lib/tool-examples"
import { toolNotify } from "@/lib/tool-notify"
import {
  clampBatchCount,
  downloadUuidFile,
  formatUuid,
  generateUuidV4,
  joinFormattedUuids,
  UUID_MAX_BATCH,
  type UuidCopySeparator,
  type UuidFormatOptions,
} from "@/lib/uuid-utils"
import { cn } from "@/lib/utils"

/** H5：多行依次排开；md+：单行横排可滑动 */
const toolbarRow =
  "flex flex-wrap items-center gap-2 max-md:w-full md:flex-nowrap md:overflow-x-auto md:pb-0.5 md:[scrollbar-width:none] md:[&::-webkit-scrollbar]:hidden"

const toolbarRowEnd =
  "flex flex-wrap items-center justify-end gap-2 max-md:w-full md:flex-nowrap md:overflow-x-auto md:pb-0.5 md:[scrollbar-width:none] md:[&::-webkit-scrollbar]:hidden"

interface UuidGeneratorToolProps {
  locale?: Locale
}

export function UuidGeneratorTool({ locale = defaultLocale }: UuidGeneratorToolProps) {
  const ui = getMessages(locale).uuidTool
  const examples = useMemo(() => getUuidGeneratorExamples(locale), [locale])

  const [primaryUuid, setPrimaryUuid] = useState("")
  const [batchUuids, setBatchUuids] = useState<string[]>([])
  const [count, setCount] = useState(5)
  const [uppercase, setUppercase] = useState(false)
  const [noHyphens, setNoHyphens] = useState(false)
  const [braces, setBraces] = useState(false)
  const [autoCopy, setAutoCopy] = useState(false)
  const [copySeparator, setCopySeparator] = useState<UuidCopySeparator>("newline")

  const formatOpts: UuidFormatOptions = { uppercase, noHyphens, braces }

  const primary = primaryUuid ? formatUuid(primaryUuid, formatOpts) : ""
  const batchFormatted = batchUuids.map((u) => formatUuid(u, formatOpts))

  const copyText = async (text: string, message: string) => {
    if (!text) return
    await navigator.clipboard.writeText(text)
    toolNotify(message)
  }

  useEffect(() => {
    setPrimaryUuid(generateUuidV4())
  }, [])

  const generateBatch = useCallback(
    async (n = count) => {
      const num = clampBatchCount(n)
      setCount(num)
      const next = Array.from({ length: num }, () => generateUuidV4())
      setBatchUuids(next)
      if (autoCopy && next.length > 0) {
        const fmt: UuidFormatOptions = { uppercase, noHyphens, braces }
        const text = joinFormattedUuids(
          next.map((u) => formatUuid(u, fmt)),
          copySeparator
        )
        await copyText(text, formatMessage(ui.notify.copiedAll, { n: num }))
      }
    },
    [count, autoCopy, copySeparator, uppercase, noHyphens, braces, ui.notify.copiedAll]
  )

  const applyExample = (example: UuidGeneratorExample) => {
    generateBatch(example.count)
  }

  const regeneratePrimary = () => {
    const next = generateUuidV4()
    setPrimaryUuid(next)
    if (autoCopy) copyText(formatUuid(next, formatOpts), ui.notify.copiedOne)
  }

  const copyAll = () =>
    copyText(
      joinFormattedUuids(batchFormatted, copySeparator),
      formatMessage(ui.notify.copiedAll, { n: batchFormatted.length })
    )

  const copyOne = (uuid: string) => copyText(uuid, ui.notify.copiedOne)

  const handleDownload = () => {
    if (batchFormatted.length === 0) return
    downloadUuidFile(batchFormatted, copySeparator)
    toolNotify(formatMessage(ui.notify.downloaded, { n: batchFormatted.length }))
  }

  return (
    <div className="space-y-5">
      <section className="space-y-3 rounded-lg border border-border bg-card p-4">
        <div className={cn(toolbarRow, "justify-between max-md:flex-col max-md:items-stretch md:flex-row")}>
          <Label className="shrink-0">{ui.primaryLabel}</Label>
          <div className={toolbarRowEnd}>
            <Button variant="ghost" size="sm" className="h-8 shrink-0 px-2 text-xs" onClick={regeneratePrimary}>
              <RefreshCw className="mr-1 h-3 w-3" />
              {ui.regenerate}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 shrink-0 px-2 text-xs"
              onClick={() => copyOne(primary)}
              disabled={!primary}
            >
              <Copy className="mr-1 h-3 w-3" />
              {ui.copy}
            </Button>
          </div>
        </div>
        <p className="break-all rounded-md bg-secondary/40 px-3 py-3 font-mono text-sm sm:text-base">
          {primary || "—"}
        </p>
      </section>

      <section className="space-y-3 rounded-lg border border-border bg-card p-4">
        <h3 className="text-sm font-semibold text-foreground">{ui.batchTitle}</h3>
        <div className={toolbarRow}>
          <Label htmlFor="count" className="shrink-0 text-xs text-muted-foreground">
            {ui.count}
          </Label>
          <Input
            id="count"
            type="number"
            min={1}
            max={UUID_MAX_BATCH}
            value={count}
            onChange={(e) => setCount(clampBatchCount(Number(e.target.value)))}
            className="h-8 w-20 shrink-0 font-mono"
          />
          <Button size="sm" className="shrink-0" onClick={() => generateBatch()}>
            <RefreshCw className="mr-1.5 h-3.5 w-3.5" />
            {ui.generate}
          </Button>
          <ToolExampleMenu
            examples={examples}
            onApply={applyExample}
            label={ui.example}
            className="h-8 shrink-0 gap-1 px-3 text-sm"
          />
          <span className="mx-0.5 hidden h-4 w-px shrink-0 bg-border md:inline" aria-hidden />
          <Button
            variant={uppercase ? "default" : "outline"}
            size="sm"
            className="shrink-0"
            onClick={() => setUppercase((v) => !v)}
          >
            {ui.uppercase}
          </Button>
          <Button
            variant={noHyphens ? "default" : "outline"}
            size="sm"
            className="shrink-0"
            onClick={() => setNoHyphens((v) => !v)}
          >
            {ui.noHyphens}
          </Button>
          <Button
            variant={braces ? "default" : "outline"}
            size="sm"
            className="shrink-0"
            onClick={() => setBraces((v) => !v)}
          >
            {ui.braces}
          </Button>
          <Button
            variant={autoCopy ? "default" : "outline"}
            size="sm"
            className="shrink-0"
            onClick={() => setAutoCopy((v) => !v)}
          >
            {ui.autoCopy}
          </Button>
          <span className="mx-0.5 hidden h-4 w-px shrink-0 bg-border md:inline" aria-hidden />
          <span className="shrink-0 text-xs text-muted-foreground">{ui.separator}</span>
          <Button
            variant={copySeparator === "newline" ? "default" : "outline"}
            size="sm"
            className="shrink-0"
            onClick={() => setCopySeparator("newline")}
          >
            {ui.sepNewline}
          </Button>
          <Button
            variant={copySeparator === "comma" ? "default" : "outline"}
            size="sm"
            className="shrink-0"
            onClick={() => setCopySeparator("comma")}
          >
            {ui.sepComma}
          </Button>
          {batchFormatted.length > 0 && (
            <>
              <Button variant="outline" size="sm" className="shrink-0" onClick={copyAll}>
                {ui.copyAll}
              </Button>
              <Button variant="outline" size="sm" className="shrink-0" onClick={handleDownload}>
                <Download className="mr-1.5 h-3.5 w-3.5" />
                {ui.download}
              </Button>
            </>
          )}
        </div>
      </section>

      {batchFormatted.length > 0 && (
        <ul className="space-y-1 rounded-md border border-border bg-card p-2">
          {batchFormatted.map((uuid, i) => (
            <li
              key={`${uuid}-${i}`}
              className="group flex items-center justify-between gap-2 rounded px-2 py-1.5 font-mono text-sm hover:bg-secondary/50"
            >
              <span className="break-all">{uuid}</span>
              <Button
                variant="ghost"
                size="sm"
                className={cn("h-7 shrink-0 px-2 opacity-70 group-hover:opacity-100")}
                onClick={() => copyOne(uuid)}
              >
                <Copy className="h-3.5 w-3.5" />
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
