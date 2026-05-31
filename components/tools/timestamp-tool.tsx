"use client"

import { useState, useEffect, useCallback, useMemo, type ReactNode } from "react"
import { Copy, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ToolExampleMenu } from "@/components/tool-example-menu"
import { getTimestampExamples } from "@/lib/i18n/examples"
import { defaultLocale, type Locale } from "@/lib/i18n/config"
import { formatMessage, getMessages } from "@/lib/i18n"
import type { TimestampExample } from "@/lib/tool-examples"
import { toolNotify } from "@/lib/tool-notify"
import {
  breakdownSeconds,
  detectTimestampUnit,
  formatDateTime,
  getCurrentEpoch,
  getPeriodBounds,
  getTimezoneLabel,
  msToTimestamp,
  parseDateInput,
  parseTimestampToMs,
  safeToISOString,
  type Period,
  type TimestampUnit,
  type TimezoneMode,
} from "@/lib/timestamp-utils"
import { cn } from "@/lib/utils"

interface TimestampToolProps {
  locale?: Locale
}

function CopyBtn({
  text,
  label,
  copyLabel,
  nothingMessage,
  copiedTemplate,
}: {
  text: string
  label: string
  copyLabel: string
  nothingMessage: string
  copiedTemplate: string
}) {
  const copy = async () => {
    if (!text) {
      toolNotify(nothingMessage, "warning")
      return
    }
    await navigator.clipboard.writeText(text)
    toolNotify(formatMessage(copiedTemplate, { label }))
  }
  return (
    <Button variant="ghost" size="sm" className="h-7 px-2 text-xs" onClick={copy}>
      <Copy className="mr-1 h-3 w-3" />
      {copyLabel}
    </Button>
  )
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-3 rounded-lg border border-border bg-card p-4">
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      {children}
    </section>
  )
}

export function TimestampTool({ locale = defaultLocale }: TimestampToolProps) {
  const ui = getMessages(locale).timestampTool
  const examples = useMemo(() => getTimestampExamples(locale), [locale])

  const [timestamp, setTimestamp] = useState("")
  const [datetime, setDatetime] = useState("")
  const [unit, setUnit] = useState<TimestampUnit>("s")
  const [tzMode, setTzMode] = useState<TimezoneMode>("utc")
  const [use24h, setUse24h] = useState(true)
  const [dateError, setDateError] = useState<string | null>(null)
  const [tsError, setTsError] = useState<string | null>(null)
  const [durationInput, setDurationInput] = useState("")
  const [period, setPeriod] = useState<Period>("day")
  const [nowEpoch, setNowEpoch] = useState(getCurrentEpoch)

  useEffect(() => {
    const id = setInterval(() => setNowEpoch(getCurrentEpoch()), 1000)
    return () => clearInterval(id)
  }, [])

  const parsedTimestamp = useMemo(
    () => (timestamp ? parseTimestampToMs(timestamp, unit) : { ms: null, error: null, effectiveUnit: null }),
    [timestamp, unit]
  )

  const currentMs = parsedTimestamp.ms
  const effectiveUnit = parsedTimestamp.effectiveUnit ?? unit

  const mapTsError = useCallback(
    (code: string | null) => (code ? ui.errors[code as keyof typeof ui.errors] ?? code : null),
    [ui.errors]
  )

  const syncFromTimestamp = useCallback(
    (tsStr: string, currentUnit: TimestampUnit, mode: TimezoneMode) => {
      if (!tsStr.trim()) {
        setDatetime("")
        setDateError(null)
        setTsError(null)
        return
      }
      const result = parseTimestampToMs(tsStr, currentUnit)
      if (result.error || result.ms === null) {
        setDatetime("")
        setTsError(mapTsError(result.error))
        return
      }
      setTsError(null)
      setDatetime(formatDateTime(result.ms, mode, use24h))
      setDateError(null)
    },
    [use24h, mapTsError]
  )

  const syncFromDatetime = useCallback(
    (dtStr: string, currentUnit: TimestampUnit, mode: TimezoneMode) => {
      if (!dtStr.trim()) {
        setDateError(null)
        return
      }
      const ms = parseDateInput(dtStr, mode)
      if (ms === null) {
        setDateError(ui.errors.invalidDate)
        return
      }
      setDateError(null)
      setTimestamp(msToTimestamp(ms, currentUnit))
    },
    [ui.errors.invalidDate]
  )

  useEffect(() => {
    if (timestamp) syncFromTimestamp(timestamp, unit, tzMode)
  }, [timestamp, unit, tzMode, syncFromTimestamp])

  useEffect(() => {
    if (currentMs !== null) {
      setDatetime(formatDateTime(currentMs, tzMode, use24h))
    }
  }, [use24h, tzMode, currentMs])

  const applyExample = (example: TimestampExample) => {
    setTimestamp(example.timestamp)
    setUnit(example.unit)
    setTzMode("utc")
    setDateError(null)
    setTsError(null)
  }

  const useNow = () => {
    const epoch = getCurrentEpoch()
    setTimestamp(epoch[unit])
    setDateError(null)
  }

  const handleTimestampChange = (value: string) => {
    setTimestamp(value)
    if (value.trim()) {
      const detected = detectTimestampUnit(value)
      if (detected !== unit && value.replace(/\D/g, "").length >= 10) {
        setUnit(detected)
      }
    } else {
      setTsError(null)
    }
  }

  const handleDatetimeChange = (value: string) => {
    setDatetime(value)
    syncFromDatetime(value, unit, tzMode)
  }

  const clearAll = () => {
    setTimestamp("")
    setDatetime("")
    setDateError(null)
    setTsError(null)
  }

  const iso = currentMs !== null ? safeToISOString(currentMs) : ""
  const altMode: TimezoneMode = tzMode === "utc" ? "local" : "utc"
  const altFormatted = currentMs !== null ? formatDateTime(currentMs, altMode, use24h) : ""
  const periodBounds =
    currentMs !== null && !tsError ? getPeriodBounds(currentMs, period, tzMode) : null
  const duration = useMemo(() => {
    const n = Number(durationInput)
    if (!durationInput || isNaN(n)) return null
    return breakdownSeconds(n)
  }, [durationInput])

  const tzLabel = getTimezoneLabel()
  const localLabel = formatMessage(ui.localWithTz, { tz: tzLabel })
  const altLabel = altMode === "utc" ? ui.utc : ui.local
  const altCopyLabel = altMode === "utc" ? ui.utc : localLabel

  const durationLabels = [
    ui.durationUnits.year,
    ui.durationUnits.month,
    ui.durationUnits.day,
    ui.durationUnits.hour,
    ui.durationUnits.minute,
    ui.durationUnits.second,
  ] as const

  const copyProps = {
    copyLabel: ui.copy,
    nothingMessage: ui.notify.nothingToCopy,
    copiedTemplate: ui.notify.copied,
  }

  return (
    <div className="space-y-5">
      <Section title={ui.sections.currentEpoch}>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {(Object.keys(ui.units) as TimestampUnit[]).map((u) => (
            <div
              key={u}
              className="flex items-center justify-between gap-2 rounded-md bg-secondary/40 px-3 py-2 font-mono text-sm"
            >
              <span className="text-muted-foreground">{ui.units[u]}</span>
              <span className="truncate">{nowEpoch[u]}</span>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 shrink-0 p-0"
                onClick={() => {
                  navigator.clipboard.writeText(nowEpoch[u])
                  toolNotify(formatMessage(ui.notify.copiedUnit, { unit: ui.units[u] }))
                }}
              >
                <Copy className="h-3 w-3" />
              </Button>
            </div>
          ))}
        </div>
      </Section>

      <Section title={ui.sections.converter}>
        <div className="flex flex-wrap items-center gap-2">
          {(Object.keys(ui.units) as TimestampUnit[]).map((u) => (
            <Button
              key={u}
              variant={unit === u ? "default" : "outline"}
              size="sm"
              onClick={() => setUnit(u)}
            >
              {ui.units[u]}
            </Button>
          ))}
          <span className="mx-1 hidden h-4 w-px bg-border sm:inline" />
          <Button
            variant={tzMode === "utc" ? "default" : "outline"}
            size="sm"
            onClick={() => setTzMode("utc")}
          >
            {ui.utc}
          </Button>
          <Button
            variant={tzMode === "local" ? "default" : "outline"}
            size="sm"
            onClick={() => setTzMode("local")}
          >
            {localLabel}
          </Button>
          <Button
            variant={use24h ? "default" : "outline"}
            size="sm"
            onClick={() => setUse24h(true)}
          >
            {ui.h24}
          </Button>
          <Button
            variant={!use24h ? "default" : "outline"}
            size="sm"
            onClick={() => setUse24h(false)}
          >
            {ui.h12}
          </Button>
          <Button variant="outline" size="sm" onClick={useNow}>
            {ui.now}
          </Button>
          <ToolExampleMenu
            examples={examples}
            onApply={applyExample}
            label={ui.example}
            className="h-8 gap-1 px-2 text-xs"
          />
          <Button variant="ghost" size="sm" onClick={clearAll}>
            <Trash2 className="mr-1 h-3 w-3" />
            {ui.clear}
          </Button>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="ts">
                {ui.timestamp} ({ui.units[unit]})
              </Label>
              <CopyBtn text={timestamp} label={ui.timestamp} {...copyProps} />
            </div>
            <Input
              id="ts"
              value={timestamp}
              onChange={(e) => handleTimestampChange(e.target.value)}
              className="font-mono"
              placeholder={ui.timestampPlaceholder}
            />
            {tsError && <p className="text-sm text-destructive">{tsError}</p>}
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="dt">
                {ui.datetime} ({tzMode === "utc" ? ui.utc : ui.local})
              </Label>
              <CopyBtn text={datetime} label={ui.datetime} {...copyProps} />
            </div>
            <Input
              id="dt"
              value={datetime}
              onChange={(e) => handleDatetimeChange(e.target.value)}
              className="font-mono"
              placeholder={ui.datetimePlaceholder}
            />
            {dateError && <p className="text-sm text-destructive">{dateError}</p>}
          </div>
        </div>

        {currentMs !== null && !tsError && (
          <div className="rounded-md bg-secondary/30 p-3 space-y-1.5 text-sm">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-muted-foreground">{ui.iso8601}:</span>
              <span className="font-mono">{iso}</span>
              <CopyBtn text={iso} label={ui.iso8601} {...copyProps} />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-muted-foreground">{altLabel}:</span>
              <span className="font-mono">{altFormatted}</span>
              <CopyBtn text={altFormatted} label={altCopyLabel} {...copyProps} />
            </div>
            {(effectiveUnit === "us" || effectiveUnit === "ns") && (
              <p className="text-xs text-muted-foreground">{ui.subMsHint}</p>
            )}
          </div>
        )}
      </Section>

      {currentMs !== null && !tsError && periodBounds && (
        <Section title={ui.sections.periodBounds}>
          <div className="mb-3 flex flex-wrap gap-2">
            {(Object.keys(ui.periods) as Period[]).map((p) => (
              <Button
                key={p}
                variant={period === p ? "default" : "outline"}
                size="sm"
                onClick={() => setPeriod(p)}
              >
                {ui.periods[p]}
              </Button>
            ))}
          </div>
          <div className="grid gap-3 sm:grid-cols-2 text-sm">
            <div className="rounded-md bg-secondary/40 p-3 space-y-1">
              <p className="text-muted-foreground">{ui.periodStart}</p>
              <p className="font-mono">{periodBounds.startFormatted}</p>
              <p className="font-mono text-xs text-muted-foreground">
                {msToTimestamp(periodBounds.startMs, unit)} ({ui.units[unit]})
              </p>
            </div>
            <div className="rounded-md bg-secondary/40 p-3 space-y-1">
              <p className="text-muted-foreground">{ui.periodEnd}</p>
              <p className="font-mono">{periodBounds.endFormatted}</p>
              <p className="font-mono text-xs text-muted-foreground">
                {msToTimestamp(periodBounds.endMs, unit)} ({ui.units[unit]})
              </p>
            </div>
          </div>
        </Section>
      )}

      <Section title={ui.sections.durationBreakdown}>
        <p className="text-xs text-muted-foreground">{ui.durationHint}</p>
        <Input
          value={durationInput}
          onChange={(e) => setDurationInput(e.target.value)}
          className="max-w-xs font-mono"
          placeholder={ui.durationPlaceholder}
          type="number"
        />
        {duration && (
          <div className={cn("grid grid-cols-3 gap-2 sm:grid-cols-6 text-center text-sm")}>
            {(
              [
                [durationLabels[0], duration.years],
                [durationLabels[1], duration.months],
                [durationLabels[2], duration.days],
                [durationLabels[3], duration.hours],
                [durationLabels[4], duration.minutes],
                [durationLabels[5], duration.seconds],
              ] as const
            ).map(([label, val]) => (
              <div key={label} className="rounded-md bg-secondary/40 px-2 py-2">
                <p className="text-lg font-semibold tabular-nums">{val}</p>
                <p className="text-xs text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        )}
      </Section>
    </div>
  )
}
