"use client"

import { useEffect } from "react"
import { adsenseConfig, isAdsenseConfigured } from "@/lib/adsense"
import { CONSENT_EVENT, hasAdConsent } from "@/lib/consent"

export function AdSenseScript() {
  useEffect(() => {
    if (!isAdsenseConfigured() || !adsenseConfig.clientId) return

    const loadScript = () => {
      if (!hasAdConsent()) return
      if (document.querySelector('script[data-adsense="true"]')) return

      const script = document.createElement("script")
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseConfig.clientId}`
      script.async = true
      script.crossOrigin = "anonymous"
      script.setAttribute("data-adsense", "true")
      document.head.appendChild(script)
    }

    loadScript()
    window.addEventListener(CONSENT_EVENT, loadScript)
    return () => window.removeEventListener(CONSENT_EVENT, loadScript)
  }, [])

  return null
}
