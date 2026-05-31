"use client"

import { useEffect, useRef } from "react"
import { useMessages } from "@/components/locale-provider"
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
  /** 覆盖默认 i18n 标签 */
  label?: string
  /** 工具页等场景：广告上方简短说明 */
  disclaimer?: string
  /** 全屏页脚等紧凑场景：减小外边距 */
  compact?: boolean
}

export function AdSlot({ name, className, label, disclaimer, compact = false }: AdSlotProps) {
  const m = useMessages()
  const slotId = getAdSlot(name)
  const pushed = useRef(false)
  const adLabel = label ?? m.common.adLabel

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
      aria-label={adLabel}
    >
      {disclaimer && (
        <p className="mb-2 text-center text-[11px] leading-relaxed text-muted-foreground/80">
          {disclaimer}
        </p>
      )}
      <p className="mb-1 text-center text-[10px] uppercase tracking-wider text-muted-foreground/60">
        {adLabel}
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
