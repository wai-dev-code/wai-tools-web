"use client"

import { Suspense, useEffect, useRef } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { GoogleAnalytics } from "@next/third-parties/google"
import {
  gaMeasurementId,
  isGoogleAnalyticsEnabled,
  trackGaEvent,
  trackGaPageView,
} from "@/lib/google-analytics"

function GoogleAnalyticsPageTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const isFirstPageView = useRef(true)

  useEffect(() => {
    const query = searchParams.toString()
    const pagePath = query ? `${pathname}?${query}` : pathname

    if (isFirstPageView.current) {
      isFirstPageView.current = false
      return
    }

    trackGaPageView(pagePath)
  }, [pathname, searchParams])

  return null
}

function GoogleAnalyticsClickTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest("a")
      if (!anchor?.href) return

      const destination = new URL(anchor.href, window.location.origin)
      const isOutbound = destination.origin !== window.location.origin
      const linkText = (anchor.textContent ?? "").trim().slice(0, 80)

      if (isOutbound) {
        trackGaEvent("click", {
          link_url: anchor.href,
          link_text: linkText,
          outbound: true,
        })
        return
      }

      trackGaEvent("internal_link_click", {
        link_url: destination.pathname + destination.search,
        link_text: linkText,
      })
    }

    document.addEventListener("click", onClick, { capture: true })
    return () => document.removeEventListener("click", onClick, { capture: true })
  }, [])

  return null
}

/** Google 官方 gtag.js，置于 <head> 内 */
export function GoogleAnalyticsHead() {
  if (!isGoogleAnalyticsEnabled()) return null
  return <GoogleAnalytics gaId={gaMeasurementId} />
}

/** 路由与点击等增强统计，置于 <body> */
export function GoogleAnalyticsTrackers() {
  if (!isGoogleAnalyticsEnabled()) return null

  return (
    <>
      <Suspense fallback={null}>
        <GoogleAnalyticsPageTracker />
      </Suspense>
      <GoogleAnalyticsClickTracker />
    </>
  )
}
