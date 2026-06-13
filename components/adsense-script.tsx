"use client"

import { useEffect } from "react"
import { adsenseConfig, isAdsenseConfigured } from "@/lib/adsense"

export function AdSenseScript() {
  useEffect(() => {
    if (!isAdsenseConfigured() || !adsenseConfig.clientId) return
    if (document.querySelector('script[data-waihub-adsense="true"]')) return

    const script = document.createElement("script")
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseConfig.clientId}`
    script.async = true
    script.crossOrigin = "anonymous"
    script.setAttribute("data-waihub-adsense", "true")
    document.head.appendChild(script)
  }, [])

  return null
}
