"use client"

import { useMemo, useState } from "react"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { defaultLocale, type Locale } from "@/lib/i18n/config"
import { getMessages } from "@/lib/i18n"
import { parseCronExpression } from "@/lib/cron-parser-utils"
import { CRON_PRESET_EXPRESSIONS, getCronNextRuns } from "@/lib/cron-schedule-utils"

interface CronParserToolProps {
  locale?: Locale
}

function formatRunTime(date: Date, locale: Locale): string {
  return date.toLocaleString(
    locale === "zh" ? "zh-CN" : locale === "ja" ? "ja-JP" : "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      weekday: "short",
    },
  )
}

export function CronParserTool({ locale = defaultLocale }: CronParserToolProps) {
  const ui = getMessages(locale).cronParserTool
  const [input, setInput] = useState("")

  const labels = useMemo(
    () => ({
      fieldMinute: ui.fieldMinute,
      fieldHour: ui.fieldHour,
      fieldDayOfMonth: ui.fieldDayOfMonth,
      fieldMonth: ui.fieldMonth,
      fieldDayOfWeek: ui.fieldDayOfWeek,
      every: ui.every,
      everyStep: ui.everyStep,
      range: ui.range,
      list: ui.list,
      atMinute: ui.atMinute,
      atHour: ui.atHour,
      onDay: ui.onDay,
      inMonth: ui.inMonth,
      onWeekday: ui.onWeekday,
      summaryPrefix: ui.summaryPrefix,
      invalidFields: ui.invalidFields,
      empty: ui.empty,
    }),
    [ui],
  )

  const result = useMemo(() => parseCronExpression(input, labels), [input, labels])
  const nextRuns = useMemo(
    () => (result.valid && input.trim() ? getCronNextRuns(input, 8) : []),
    [input, result.valid],
  )

  const errorMessage = result.error ? ui.errors.invalidFields : null

  return (
    <div className="space-y-5">
      <section className="space-y-3 rounded-lg border border-border bg-card p-4">
        <Label htmlFor="cron-input">{ui.inputLabel}</Label>
        <Textarea
          id="cron-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={ui.inputPlaceholder}
          rows={2}
          className="font-mono text-sm"
        />
        {!input && <p className="text-sm text-muted-foreground">{ui.emptyHint}</p>}
        {errorMessage && <p className="text-sm text-destructive">{errorMessage}</p>}

        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground">{ui.presetsTitle}</p>
          <div className="flex flex-wrap gap-2">
            {CRON_PRESET_EXPRESSIONS.map((preset) => (
              <Button
                key={preset.id}
                type="button"
                variant="outline"
                size="sm"
                className="h-7 text-xs"
                onClick={() => setInput(preset.expression)}
              >
                {ui.presets[preset.id]}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {result.valid && input && result.fields.length > 0 && (
        <>
          <section className="space-y-2 rounded-lg border border-border bg-card p-4">
            <h3 className="text-sm font-medium text-foreground">{ui.summaryTitle}</h3>
            <p className="text-sm leading-relaxed text-foreground">{result.summary}</p>
          </section>

          <section className="space-y-3 rounded-lg border border-border bg-card p-4">
            <h3 className="text-sm font-medium text-foreground">{ui.nextRunsTitle}</h3>
            {nextRuns.length > 0 ? (
              <ul className="space-y-1.5 font-mono text-sm">
                {nextRuns.map((run, i) => (
                  <li key={i} className="rounded-md bg-muted/30 px-3 py-2 text-foreground">
                    {formatRunTime(run, locale)}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">{ui.nextRunsEmpty}</p>
            )}
          </section>

          <section className="space-y-3 rounded-lg border border-border bg-card p-4">
            <h3 className="text-sm font-medium text-foreground">{ui.fieldsTitle}</h3>
            <ul className="space-y-2">
              {result.fields.map((field) => (
                <li
                  key={field.name}
                  className="rounded-md border border-border bg-muted/30 px-3 py-2 text-sm"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="font-medium text-foreground">{field.name}</span>
                    <code className="font-mono text-xs text-primary">{field.value}</code>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{field.description}</p>
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </div>
  )
}
