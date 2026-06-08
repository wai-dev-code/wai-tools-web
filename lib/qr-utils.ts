import QRCode from "qrcode"

export type QrContentType = "text" | "url" | "email" | "phone" | "wifi"

export type WifiSecurity = "WPA" | "WEP" | "nopass"

export const QR_DEFAULT_SIZE = 256
export const QR_MIN_SIZE = 128
export const QR_MAX_SIZE = 512

export type QrFormState = {
  text: string
  url: string
  email: string
  emailSubject: string
  emailBody: string
  phone: string
  wifiSsid: string
  wifiPassword: string
  wifiSecurity: WifiSecurity
  wifiHidden: boolean
}

export const defaultQrFormState: QrFormState = {
  text: "",
  url: "https://",
  email: "",
  emailSubject: "",
  emailBody: "",
  phone: "",
  wifiSsid: "",
  wifiPassword: "",
  wifiSecurity: "WPA",
  wifiHidden: false,
}

function escapeWifiField(value: string): string {
  return value.replace(/([\\;,"])/g, "\\$1")
}

function normalizeUrl(raw: string): string {
  const trimmed = raw.trim()
  if (!trimmed) return ""
  if (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(trimmed)) return trimmed
  return `https://${trimmed}`
}

function buildMailto(email: string, subject: string, body: string): string {
  const trimmed = email.trim()
  if (!trimmed) return ""
  const params = new URLSearchParams()
  if (subject.trim()) params.set("subject", subject.trim())
  if (body.trim()) params.set("body", body.trim())
  const query = params.toString()
  return query ? `mailto:${trimmed}?${query}` : `mailto:${trimmed}`
}

function buildTel(phone: string): string {
  const trimmed = phone.trim()
  if (!trimmed) return ""
  const normalized = trimmed.replace(/[^\d+]/g, "")
  return normalized ? `tel:${normalized}` : ""
}

export function buildWifiPayload(
  ssid: string,
  password: string,
  security: WifiSecurity,
  hidden: boolean,
): string {
  const name = ssid.trim()
  if (!name) return ""
  const escapedSsid = escapeWifiField(name)
  const escapedPassword = escapeWifiField(password)
  const hiddenFlag = hidden ? "true" : "false"
  if (security === "nopass") {
    return `WIFI:T:nopass;S:${escapedSsid};H:${hiddenFlag};;`
  }
  return `WIFI:T:${security};S:${escapedSsid};P:${escapedPassword};H:${hiddenFlag};;`
}

export function buildQrPayload(type: QrContentType, form: QrFormState): string {
  switch (type) {
    case "text":
      return form.text.trim()
    case "url":
      return normalizeUrl(form.url)
    case "email":
      return buildMailto(form.email, form.emailSubject, form.emailBody)
    case "phone":
      return buildTel(form.phone)
    case "wifi":
      return buildWifiPayload(
        form.wifiSsid,
        form.wifiPassword,
        form.wifiSecurity,
        form.wifiHidden,
      )
    default:
      return ""
  }
}

export async function generateQrDataUrl(payload: string, size: number): Promise<string> {
  const clamped = Math.min(QR_MAX_SIZE, Math.max(QR_MIN_SIZE, size))
  return QRCode.toDataURL(payload, {
    width: clamped,
    margin: 2,
    errorCorrectionLevel: "M",
  })
}

export function downloadQrPng(dataUrl: string, filename = "qrcode.png"): void {
  const link = document.createElement("a")
  link.href = dataUrl
  link.download = filename
  link.click()
}
