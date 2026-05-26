export const CONSENT_STORAGE_KEY = "waihub-cookie-consent"

export const CONSENT_EVENT = "waihub-consent"

export function hasAdConsent(): boolean {
  if (typeof window === "undefined") return false
  return localStorage.getItem(CONSENT_STORAGE_KEY) === "accepted"
}

export function dispatchConsentAccepted() {
  if (typeof window === "undefined") return
  window.dispatchEvent(new Event(CONSENT_EVENT))
}
