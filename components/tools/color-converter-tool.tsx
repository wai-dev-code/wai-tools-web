"use client"

import { useCallback, useMemo, useState } from "react"
import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { defaultLocale, type Locale } from "@/lib/i18n/config"
import { getMessages } from "@/lib/i18n"
import {
  formatHsl,
  formatRgb,
  parseColorInput,
  rgbToHex,
  rgbToHsl,
  type ColorFormat,
} from "@/lib/color-utils"
import { toolNotify } from "@/lib/tool-notify"

interface ColorConverterToolProps {
  locale?: Locale
}

export function ColorConverterTool({ locale = defaultLocale }: ColorConverterToolProps) {
  const ui = getMessages(locale).colorConverterTool
  const [hex, setHex] = useState("#3b82f6")
  const [rgb, setRgb] = useState("rgb(59, 130, 246)")
  const [hsl, setHsl] = useState("hsl(217, 91%, 60%)")
  const [activeField, setActiveField] = useState<ColorFormat | null>(null)
  const [error, setError] = useState<string | null>(null)

  const previewColor = useMemo(() => {
    const parsed = parseColorInput("hex", hex) ?? parseColorInput("rgb", rgb) ?? parseColorInput("hsl", hsl)
    return parsed ? rgbToHex(parsed) : "#000000"
  }, [hex, rgb, hsl])

  const syncFrom = useCallback(
    (format: ColorFormat, value: string) => {
      const parsed = parseColorInput(format, value)
      if (!parsed) {
        setError(ui.invalidColor)
        if (format === "hex") setHex(value)
        if (format === "rgb") setRgb(value)
        if (format === "hsl") setHsl(value)
        return
      }
      setError(null)
      const nextHex = rgbToHex(parsed)
      const nextRgb = formatRgb(parsed)
      const nextHsl = formatHsl(rgbToHsl(parsed))
      setHex(nextHex)
      setRgb(nextRgb)
      setHsl(nextHsl)
    },
    [ui.invalidColor],
  )

  const handleChange = (format: ColorFormat, value: string) => {
    setActiveField(format)
    if (format === "hex") setHex(value)
    if (format === "rgb") setRgb(value)
    if (format === "hsl") setHsl(value)
    syncFrom(format, value)
  }

  const copyValue = async (value: string) => {
    await navigator.clipboard.writeText(value)
    toolNotify(ui.notify.copied)
  }

  return (
    <div className="space-y-5">
      <section className="flex items-center gap-4 rounded-lg border border-border bg-card p-4">
        <div
          className="h-16 w-16 shrink-0 rounded-lg border border-border shadow-inner"
          style={{ backgroundColor: previewColor }}
          aria-label={ui.preview}
        />
        <div>
          <p className="text-sm font-medium text-foreground">{ui.preview}</p>
          <p className="font-mono text-sm text-muted-foreground">{previewColor}</p>
        </div>
      </section>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <div className="grid gap-4">
        {(
          [
            { format: "hex" as const, label: ui.hexLabel, value: hex, placeholder: ui.hexPlaceholder },
            { format: "rgb" as const, label: ui.rgbLabel, value: rgb, placeholder: ui.rgbPlaceholder },
            { format: "hsl" as const, label: ui.hslLabel, value: hsl, placeholder: ui.hslPlaceholder },
          ] as const
        ).map((field) => (
          <div key={field.format} className="space-y-2 rounded-lg border border-border bg-card p-4">
            <Label htmlFor={`color-${field.format}`}>{field.label}</Label>
            <div className="flex gap-2">
              <Input
                id={`color-${field.format}`}
                value={field.value}
                onChange={(e) => handleChange(field.format, e.target.value)}
                onFocus={() => setActiveField(field.format)}
                placeholder={field.placeholder}
                className="font-mono text-sm"
              />
              <Button
                type="button"
                variant="secondary"
                size="sm"
                className="shrink-0 gap-1"
                onClick={() => copyValue(field.value)}
                disabled={!!error && activeField === field.format}
              >
                <Copy className="h-3.5 w-3.5" />
                {ui.copy}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
