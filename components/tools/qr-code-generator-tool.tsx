"use client"

import { useEffect, useMemo, useState } from "react"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { defaultLocale, type Locale } from "@/lib/i18n/config"
import { getMessages } from "@/lib/i18n"
import {
  buildQrPayload,
  defaultQrFormState,
  downloadQrPng,
  generateQrDataUrl,
  QR_DEFAULT_SIZE,
  QR_MAX_SIZE,
  QR_MIN_SIZE,
  type QrContentType,
  type QrFormState,
  type WifiSecurity,
} from "@/lib/qr-utils"
import { toolNotify } from "@/lib/tool-notify"
import { cn } from "@/lib/utils"

interface QrCodeGeneratorToolProps {
  locale?: Locale
}

export function QrCodeGeneratorTool({ locale = defaultLocale }: QrCodeGeneratorToolProps) {
  const ui = getMessages(locale).qrTool

  const [activeType, setActiveType] = useState<QrContentType>("text")
  const [form, setForm] = useState<QrFormState>(defaultQrFormState)
  const [size, setSize] = useState(QR_DEFAULT_SIZE)
  const [dataUrl, setDataUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const payload = useMemo(() => buildQrPayload(activeType, form), [activeType, form])

  useEffect(() => {
    if (!payload) {
      setDataUrl(null)
      setError(null)
      return
    }

    let cancelled = false
    generateQrDataUrl(payload, size)
      .then((url) => {
        if (!cancelled) {
          setDataUrl(url)
          setError(null)
        }
      })
      .catch(() => {
        if (!cancelled) {
          setDataUrl(null)
          setError(ui.generateError)
        }
      })

    return () => {
      cancelled = true
    }
  }, [payload, size, ui.generateError])

  const updateForm = <K extends keyof QrFormState>(key: K, value: QrFormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const handleDownload = () => {
    if (!dataUrl) return
    downloadQrPng(dataUrl, `qrcode-${activeType}.png`)
    toolNotify(ui.notify.downloaded)
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(220px,280px)]">
      <section className="space-y-4 rounded-lg border border-border bg-card p-4">
        <Tabs
          value={activeType}
          onValueChange={(v) => setActiveType(v as QrContentType)}
          className="w-full"
        >
          <TabsList className="h-auto w-full flex-wrap justify-start gap-1">
            <TabsTrigger value="text">{ui.tabText}</TabsTrigger>
            <TabsTrigger value="url">{ui.tabUrl}</TabsTrigger>
            <TabsTrigger value="email">{ui.tabEmail}</TabsTrigger>
            <TabsTrigger value="phone">{ui.tabPhone}</TabsTrigger>
            <TabsTrigger value="wifi">{ui.tabWifi}</TabsTrigger>
          </TabsList>

          <TabsContent value="text" className="mt-4 space-y-2">
            <Label htmlFor="qr-text">{ui.textLabel}</Label>
            <Textarea
              id="qr-text"
              value={form.text}
              onChange={(e) => updateForm("text", e.target.value)}
              placeholder={ui.textPlaceholder}
              rows={4}
            />
          </TabsContent>

          <TabsContent value="url" className="mt-4 space-y-2">
            <Label htmlFor="qr-url">{ui.urlLabel}</Label>
            <Input
              id="qr-url"
              type="url"
              value={form.url}
              onChange={(e) => updateForm("url", e.target.value)}
              placeholder={ui.urlPlaceholder}
            />
          </TabsContent>

          <TabsContent value="email" className="mt-4 space-y-3">
            <div className="space-y-2">
              <Label htmlFor="qr-email">{ui.emailLabel}</Label>
              <Input
                id="qr-email"
                type="email"
                value={form.email}
                onChange={(e) => updateForm("email", e.target.value)}
                placeholder={ui.emailPlaceholder}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="qr-email-subject">{ui.emailSubject}</Label>
              <Input
                id="qr-email-subject"
                value={form.emailSubject}
                onChange={(e) => updateForm("emailSubject", e.target.value)}
                placeholder={ui.emailSubjectPlaceholder}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="qr-email-body">{ui.emailBody}</Label>
              <Textarea
                id="qr-email-body"
                value={form.emailBody}
                onChange={(e) => updateForm("emailBody", e.target.value)}
                placeholder={ui.emailBodyPlaceholder}
                rows={3}
              />
            </div>
          </TabsContent>

          <TabsContent value="phone" className="mt-4 space-y-2">
            <Label htmlFor="qr-phone">{ui.phoneLabel}</Label>
            <Input
              id="qr-phone"
              type="tel"
              value={form.phone}
              onChange={(e) => updateForm("phone", e.target.value)}
              placeholder={ui.phonePlaceholder}
            />
          </TabsContent>

          <TabsContent value="wifi" className="mt-4 space-y-3">
            <div className="space-y-2">
              <Label htmlFor="qr-wifi-ssid">{ui.wifiSsid}</Label>
              <Input
                id="qr-wifi-ssid"
                value={form.wifiSsid}
                onChange={(e) => updateForm("wifiSsid", e.target.value)}
                placeholder={ui.wifiSsidPlaceholder}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="qr-wifi-password">{ui.wifiPassword}</Label>
              <Input
                id="qr-wifi-password"
                type="password"
                value={form.wifiPassword}
                onChange={(e) => updateForm("wifiPassword", e.target.value)}
                placeholder={ui.wifiPasswordPlaceholder}
                disabled={form.wifiSecurity === "nopass"}
              />
            </div>
            <div className="space-y-2">
              <Label>{ui.wifiSecurity}</Label>
              <Select
                value={form.wifiSecurity}
                onValueChange={(v) => updateForm("wifiSecurity", v as WifiSecurity)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="WPA">{ui.wifiSecurityWpa}</SelectItem>
                  <SelectItem value="WEP">{ui.wifiSecurityWep}</SelectItem>
                  <SelectItem value="nopass">{ui.wifiSecurityNone}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <label className="flex cursor-pointer items-center gap-2 text-sm">
              <Checkbox
                checked={form.wifiHidden}
                onCheckedChange={(v) => updateForm("wifiHidden", v === true)}
              />
              {ui.wifiHidden}
            </label>
          </TabsContent>
        </Tabs>

        <div className="space-y-3 border-t border-border pt-4">
          <div className="flex items-center justify-between gap-3">
            <Label>{ui.size}</Label>
            <span className="text-sm tabular-nums text-muted-foreground">{size}px</span>
          </div>
          <Slider
            min={QR_MIN_SIZE}
            max={QR_MAX_SIZE}
            step={8}
            value={[size]}
            onValueChange={([v]) => setSize(v ?? QR_DEFAULT_SIZE)}
            aria-label={ui.size}
          />
        </div>
      </section>

      <section className="flex flex-col items-center gap-4 rounded-lg border border-border bg-card p-4">
        <p className="w-full text-sm font-medium text-foreground">{ui.preview}</p>
        <div
          className={cn(
            "flex aspect-square w-full max-w-[280px] items-center justify-center rounded-lg border border-dashed border-border bg-muted/30 p-4",
          )}
        >
          {dataUrl ? (
            // eslint-disable-next-line @next/next/no-img-element -- data URL from canvas
            <img
              src={dataUrl}
              alt={ui.preview}
              width={size}
              height={size}
              className="h-auto max-h-full w-auto max-w-full"
            />
          ) : (
            <p className="px-2 text-center text-sm text-muted-foreground">
              {error ?? ui.emptyPayload}
            </p>
          )}
        </div>
        <Button
          type="button"
          className="w-full gap-1.5"
          onClick={handleDownload}
          disabled={!dataUrl}
        >
          <Download className="h-4 w-4" />
          {ui.downloadPng}
        </Button>
      </section>
    </div>
  )
}
