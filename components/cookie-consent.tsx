"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  CONSENT_STORAGE_KEY,
  dispatchConsentAccepted,
  hasAdConsent,
} from "@/lib/consent"

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!hasAdConsent()) {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(CONSENT_STORAGE_KEY, "accepted")
    setVisible(false)
    dispatchConsentAccepted()
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 p-4 backdrop-blur-sm">
      <div className="mx-auto flex max-w-4xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          我们使用 Cookie 改善体验并可能展示第三方广告（如 Google AdSense）。
          详见{" "}
          <Link href="/privacy" className="text-primary hover:underline">
            隐私政策
          </Link>
          。
        </p>
        <Button size="sm" onClick={accept} className="shrink-0">
          接受
        </Button>
      </div>
    </div>
  )
}
