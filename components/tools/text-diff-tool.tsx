"use client"

import { useMemo, useState } from "react"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { defaultLocale, type Locale } from "@/lib/i18n/config"
import { formatMessage, getMessages } from "@/lib/i18n"
import { diffLines, diffStats } from "@/lib/text-diff-utils"
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

  const lines = useMemo(() => diffLines(left, right), [left, right])
  const stats = useMemo(() => diffStats(lines), [lines])
  const hasInput = left.length > 0 || right.length > 0

  return (
    <div className="space-y-4">
      <div className="grid min-w-0 gap-4 lg:grid-cols-2">
        <div className="min-w-0 space-y-2">
          <div className="flex items-center justify-between gap-2">
            <Label htmlFor="diff-left">{ui.leftLabel}</Label>
            <Button
              variant="ghost"
              size="sm"
              className="h-7 px-2 text-xs"
              onClick={() => {
                setLeft("")
                setRight("")
              }}
            >
              <Trash2 className="mr-1 h-3 w-3" />
              {ui.clear}
            </Button>
          </div>
          <Textarea
            id="diff-left"
            value={left}
            onChange={(e) => setLeft(e.target.value)}
            placeholder={ui.leftPlaceholder}
            className="min-h-[160px] font-mono text-sm"
          />
        </div>
        <div className="min-w-0 space-y-2">
          <Label htmlFor="diff-right">{ui.rightLabel}</Label>
          <Textarea
            id="diff-right"
            value={right}
            onChange={(e) => setRight(e.target.value)}
            placeholder={ui.rightPlaceholder}
            className="min-h-[160px] font-mono text-sm"
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
        {!hasInput ? (
          <p className="py-10 text-center text-sm text-muted-foreground">{ui.emptyHint}</p>
        ) : (
          <ul className="divide-y divide-border font-mono text-xs sm:text-sm">
            {lines.map((line, index) => (
              <li
                key={index}
                className={cn("grid gap-2 border-l-4 p-3 sm:grid-cols-2", typeStyles[line.type])}
              >
                <div className="min-w-0 break-all">
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
                <div className="min-w-0 break-all">
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
