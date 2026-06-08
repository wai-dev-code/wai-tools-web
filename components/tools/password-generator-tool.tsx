"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { Copy, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { defaultLocale, type Locale } from "@/lib/i18n/config"
import { getMessages } from "@/lib/i18n"
import {
  assessPasswordStrength,
  generatePassword,
  PASSWORD_DEFAULT_LENGTH,
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
  type PasswordCharsetOptions,
  type PasswordStrength,
} from "@/lib/password-utils"
import { toolNotify } from "@/lib/tool-notify"
import { cn } from "@/lib/utils"

interface PasswordGeneratorToolProps {
  locale?: Locale
}

const strengthBarClass: Record<PasswordStrength, string> = {
  weak: "[&_[data-slot=progress-indicator]]:bg-destructive",
  average: "[&_[data-slot=progress-indicator]]:bg-amber-500",
  strong: "[&_[data-slot=progress-indicator]]:bg-emerald-500",
}

const strengthTextClass: Record<PasswordStrength, string> = {
  weak: "text-destructive",
  average: "text-amber-600 dark:text-amber-400",
  strong: "text-emerald-600 dark:text-emerald-400",
}

export function PasswordGeneratorTool({ locale = defaultLocale }: PasswordGeneratorToolProps) {
  const ui = getMessages(locale).passwordTool

  const [length, setLength] = useState(PASSWORD_DEFAULT_LENGTH)
  const [uppercase, setUppercase] = useState(true)
  const [lowercase, setLowercase] = useState(true)
  const [numbers, setNumbers] = useState(true)
  const [symbols, setSymbols] = useState(true)
  const [customChars, setCustomChars] = useState("")
  const [excludeChars, setExcludeChars] = useState("")
  const [password, setPassword] = useState("")
  const [poolError, setPoolError] = useState(false)

  const charsetOpts: PasswordCharsetOptions = useMemo(
    () => ({
      uppercase,
      lowercase,
      numbers,
      symbols,
      customChars: customChars || undefined,
      excludeChars: excludeChars || undefined,
    }),
    [uppercase, lowercase, numbers, symbols, customChars, excludeChars],
  )

  const regenerate = useCallback(() => {
    const result = generatePassword(length, charsetOpts)
    if (result.error === "empty_pool") {
      setPoolError(true)
      setPassword("")
      return
    }
    setPoolError(false)
    setPassword(result.password ?? "")
  }, [length, charsetOpts])

  useEffect(() => {
    regenerate()
  }, [regenerate])

  const { level, score } = assessPasswordStrength(password, charsetOpts)

  const strengthLabel =
    level === "weak" ? ui.strengthWeak : level === "average" ? ui.strengthAverage : ui.strengthStrong

  const copyPassword = async () => {
    if (!password) return
    await navigator.clipboard.writeText(password)
    toolNotify(ui.notify.copied)
  }

  const handleLengthInput = (raw: string) => {
    const n = Number.parseInt(raw, 10)
    if (Number.isNaN(n)) return
    setLength(Math.min(PASSWORD_MAX_LENGTH, Math.max(PASSWORD_MIN_LENGTH, n)))
  }

  return (
    <div className="space-y-5">
      <section className="space-y-4 rounded-lg border border-border bg-card p-4">
        <div className="flex min-h-[3.5rem] items-center justify-center rounded-lg border border-border bg-muted/40 px-4 py-3">
          <p
            className={cn(
              "w-full break-all text-center font-mono text-lg font-semibold tracking-wide text-foreground sm:text-xl",
              !password && "text-muted-foreground",
            )}
            aria-live="polite"
          >
            {password || "—"}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button type="button" className="gap-1.5" onClick={regenerate}>
            <RefreshCw className="h-4 w-4" />
            {ui.regenerate}
          </Button>
          <Button
            type="button"
            variant="secondary"
            className="gap-1.5"
            onClick={copyPassword}
            disabled={!password}
          >
            <Copy className="h-4 w-4" />
            {ui.copyPassword}
          </Button>
        </div>

        {poolError ? (
          <p className="text-sm text-destructive">{ui.emptyPool}</p>
        ) : null}

        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2 text-sm">
            <span className="font-medium text-foreground">{ui.strength}</span>
            <span className={cn("font-semibold", strengthTextClass[level])}>{strengthLabel}</span>
          </div>
          <Progress value={score} className={cn("h-2", strengthBarClass[level])} />
        </div>
      </section>

      <section className="space-y-4 rounded-lg border border-border bg-card p-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <Label htmlFor="password-length">{ui.length}</Label>
            <Input
              id="password-length"
              type="number"
              min={PASSWORD_MIN_LENGTH}
              max={PASSWORD_MAX_LENGTH}
              value={length}
              onChange={(e) => handleLengthInput(e.target.value)}
              className="h-8 w-20 text-center"
            />
          </div>
          <Slider
            min={PASSWORD_MIN_LENGTH}
            max={PASSWORD_MAX_LENGTH}
            step={1}
            value={[length]}
            onValueChange={([v]) => setLength(v ?? PASSWORD_DEFAULT_LENGTH)}
            aria-label={ui.length}
          />
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium text-foreground">{ui.charactersUsed}</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="flex cursor-pointer items-center gap-2 text-sm">
              <Checkbox checked={uppercase} onCheckedChange={(v) => setUppercase(v === true)} />
              {ui.uppercase}
            </label>
            <label className="flex cursor-pointer items-center gap-2 text-sm">
              <Checkbox checked={lowercase} onCheckedChange={(v) => setLowercase(v === true)} />
              {ui.lowercase}
            </label>
            <label className="flex cursor-pointer items-center gap-2 text-sm">
              <Checkbox checked={numbers} onCheckedChange={(v) => setNumbers(v === true)} />
              {ui.numbers}
            </label>
            <label className="flex cursor-pointer items-center gap-2 text-sm">
              <Checkbox checked={symbols} onCheckedChange={(v) => setSymbols(v === true)} />
              {ui.symbols}
            </label>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="custom-chars">{ui.customChars}</Label>
          <Input
            id="custom-chars"
            value={customChars}
            onChange={(e) => setCustomChars(e.target.value)}
            placeholder={ui.customCharsPlaceholder}
            className="font-mono text-sm"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="exclude-chars">{ui.excludeChars}</Label>
          <Input
            id="exclude-chars"
            value={excludeChars}
            onChange={(e) => setExcludeChars(e.target.value)}
            placeholder={ui.excludeCharsPlaceholder}
            className="font-mono text-sm"
          />
        </div>
      </section>
    </div>
  )
}
