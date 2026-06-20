"use client"

import { useMemo, useState } from "react"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { defaultLocale, type Locale } from "@/lib/i18n/config"
import { formatMessage, getMessages } from "@/lib/i18n"
import { diffLines, diffStats } from "@/lib/text-diff-utils"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"

interface TextDiffToolProps {
  locale?: Locale
}

const typeStyles = {
  added: "bg-emerald-500/15 border-emerald-500/30",
  removed: "bg-red-500/15 border-red-500/30",
  changed: "bg-amber-500/15 border-amber-500/30",
  equal: "bg-muted/20 border-border/50",
} as const

export function TextDiffTool({ locale = defaultLocale }: TextDiffToolProps) {
  const ui = getMessages(locale).textDiffTool
  const [left, setLeft] = useState("")
  const [right, setRight] = useState("")
  const [ignoreWhitespace, setIgnoreWhitespace] = useState(false)

  const lines = useMemo(
    () => diffLines(left, right, { ignoreWhitespace }),
    [left, right, ignoreWhitespace],
  )
  const stats = useMemo(() => diffStats(lines), [lines])
  const hasInput = left.length > 0 || right.length > 0

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">{ui.intro}</p>
        <Button
          variant="outline"
          size="sm"
          className="h-8 shrink-0 px-3 text-xs"
          onClick={() => {
            setLeft("")
            setRight("")
          }}
        >
          <Trash2 className="mr-1.5 h-3.5 w-3.5" />
          {ui.clear}
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Switch
          id="diff-ignore-whitespace"
          checked={ignoreWhitespace}
          onCheckedChange={setIgnoreWhitespace}
        />
        <Label htmlFor="diff-ignore-whitespace" className="text-sm text-muted-foreground">
          {ui.ignoreWhitespace}
        </Label>
      </div>

      <div className="grid min-w-0 gap-4 lg:grid-cols-2">
        <div className="min-w-0 space-y-2">
          <Label htmlFor="diff-left" className="text-sm font-medium">
            {ui.leftLabel}
          </Label>
          <Textarea
            id="diff-left"
            value={left}
            onChange={(e) => setLeft(e.target.value)}
            placeholder={ui.leftPlaceholder}
            className="min-h-[180px] font-mono text-sm"
          />
        </div>
        <div className="min-w-0 space-y-2">
          <Label htmlFor="diff-right" className="text-sm font-medium">
            {ui.rightLabel}
          </Label>
          <Textarea
            id="diff-right"
            value={right}
            onChange={(e) => setRight(e.target.value)}
            placeholder={ui.rightPlaceholder}
            className="min-h-[180px] font-mono text-sm"
          />
        </div>
      </div>

      {hasInput && (
        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
          <span>{formatMessage(ui.statsAdded, { count: stats.added })}</span>
          <span>{formatMessage(ui.statsRemoved, { count: stats.removed })}</span>
          <span>{formatMessage(ui.statsChanged, { count: stats.changed })}</span>
          <span>{formatMessage(ui.statsEqual, { count: stats.equal })}</span>
        </div>
      )}

      <div className="flex flex-wrap gap-3 text-xs">
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-sm bg-emerald-500/40" />
          {ui.legendAdded}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-sm bg-red-500/40" />
          {ui.legendRemoved}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-sm bg-amber-500/40" />
          {ui.legendChanged}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-sm bg-muted" />
          {ui.legendEqual}
        </span>
      </div>

      <section className="rounded-lg border border-border bg-card">
        <div className="grid border-b border-border bg-muted/30 text-xs font-medium text-muted-foreground sm:grid-cols-2">
          <div className="px-3 py-2">{ui.leftLabel}</div>
          <div className="border-t border-border px-3 py-2 sm:border-t-0 sm:border-l">
            {ui.rightLabel}
          </div>
        </div>
        {!hasInput ? (
          <p className="py-10 text-center text-sm text-muted-foreground">{ui.emptyHint}</p>
        ) : (
          <ul className="divide-y divide-border font-mono text-xs sm:text-sm">
            {lines.map((line, index) => (
              <li
                key={index}
                className={cn("grid gap-0 border-l-4 sm:grid-cols-2", typeStyles[line.type])}
              >
                <div className="min-w-0 break-all border-b border-border/40 p-3 sm:border-b-0 sm:border-r sm:border-border/40">
                  {line.type === "added" ? (
                    <span className="text-muted-foreground/50">—</span>
                  ) : (
                    <>
                      {line.leftLine != null && (
                        <span className="mr-2 select-none text-muted-foreground">{line.leftLine}</span>
                      )}
                      {line.left ?? ""}
                    </>
                  )}
                </div>
                <div className="min-w-0 break-all p-3">
                  {line.type === "removed" ? (
                    <span className="text-muted-foreground/50">—</span>
                  ) : (
                    <>
                      {line.rightLine != null && (
                        <span className="mr-2 select-none text-muted-foreground">{line.rightLine}</span>
                      )}
                      {line.right ?? ""}
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}
