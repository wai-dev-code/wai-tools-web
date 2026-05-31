"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import {
  adsenseConfig,
  getAdSlot,
  isAdsenseConfigured,
  type AdSlotName,
} from "@/lib/adsense"

interface AdSlotProps {
  name: AdSlotName
  className?: string
  label?: string
  /** 全屏页脚等紧凑场景：减小外边距 */
  compact?: boolean
}

export function AdSlot({ name, className, label = "广告", compact = false }: AdSlotProps) {
  const slotId = getAdSlot(name)
  const pushed = useRef(false)

  useEffect(() => {
    if (!isAdsenseConfigured() || !slotId || pushed.current) return

    const timer = setTimeout(() => {
      try {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
        pushed.current = true
      } catch {
        // script may still be loading
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [slotId])

  if (!isAdsenseConfigured() || !slotId) {
    return null
  }

  return (
    <aside
      className={cn(compact ? "my-0 py-2" : "my-6", className)}
      aria-label={label}
    >
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
