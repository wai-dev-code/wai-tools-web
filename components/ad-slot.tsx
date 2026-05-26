"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import {
  adsenseConfig,
  getAdSlot,
  isAdsenseConfigured,
  type AdSlotName,
} from "@/lib/adsense"
import { CONSENT_EVENT, hasAdConsent } from "@/lib/consent"

interface AdSlotProps {
  name: AdSlotName
  className?: string
  label?: string
}

export function AdSlot({ name, className, label = "广告" }: AdSlotProps) {
  const slotId = getAdSlot(name)
  const pushed = useRef(false)
  const [consented, setConsented] = useState(false)

  useEffect(() => {
    const sync = () => setConsented(hasAdConsent())
    sync()
    window.addEventListener(CONSENT_EVENT, sync)
    return () => window.removeEventListener(CONSENT_EVENT, sync)
  }, [])

  useEffect(() => {
    if (!consented || !isAdsenseConfigured() || !slotId || pushed.current) return

    const timer = setTimeout(() => {
      try {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
        pushed.current = true
      } catch {
        // script may still be loading
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [consented, slotId])

  if (!isAdsenseConfigured() || !slotId) {
    if (process.env.NODE_ENV === "development") {
      return (
        <div
          className={cn(
            "flex min-h-[90px] items-center justify-center rounded-lg border border-dashed border-border bg-muted/30 px-4 text-center text-xs text-muted-foreground",
            className
          )}
          aria-hidden
        >
          广告位 · {name}（配置 NEXT_PUBLIC_ADSENSE_* 后启用）
        </div>
      )
    }
    return null
  }

  if (!consented) return null

  return (
    <aside className={cn("my-6", className)} aria-label={label}>
      <p className="mb-1 text-center text-[10px] uppercase tracking-wider text-muted-foreground/60">
        {label}
      </p>
      <ins
        className="adsbygoogle block"
        style={{ display: "block" }}
        data-ad-client={adsenseConfig.clientId}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  )
}
