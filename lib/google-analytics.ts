/** GA4 Measurement ID（可通过环境变量覆盖） */
export const gaMeasurementId = (
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-3GP39KLS1X"
).trim()

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export function isGoogleAnalyticsConfigured(): boolean {
  return /^G-[A-Z0-9]+$/i.test(gaMeasurementId)
}

export function isGoogleAnalyticsEnabled(): boolean {
  return process.env.NODE_ENV === "production" && isGoogleAnalyticsConfigured()
}

export type GaEventParams = Record<string, string | number | boolean>

export function trackGaEvent(eventName: string, params?: GaEventParams): void {
  if (!isGoogleAnalyticsConfigured() || typeof window === "undefined") return
  if (!window.gtag) return

  const cleanParams = params
    ? Object.fromEntries(Object.entries(params).filter(([, value]) => value !== undefined))
    : undefined

  window.gtag("event", eventName, cleanParams ?? {})
}

export function trackGaPageView(pagePath: string): void {
  trackGaEvent("page_view", {
    page_path: pagePath,
    page_location: window.location.href,
    page_title: document.title,
  })
}
