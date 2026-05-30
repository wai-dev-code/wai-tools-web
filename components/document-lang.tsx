"use client"

import { useEffect } from "react"
import { useLocale } from "@/components/locale-provider"

function localeToHtmlLang(locale: ReturnType<typeof useLocale>): string {
  if (locale === "zh") return "zh-CN"
  if (locale === "ja") return "ja"
  return "en"
}

/** 随 locale 同步更新 <html lang> */
export function DocumentLang() {
  const locale = useLocale()

  useEffect(() => {
    document.documentElement.lang = localeToHtmlLang(locale)
  }, [locale])

  return null
}

/** 客户端同步浏览器标签页标题 */
export function DocumentTitle({ title }: { title: string }) {
  useEffect(() => {
    const prev = document.title
    document.title = title
    return () => {
      document.title = prev
    }
  }, [title])

  return null
}
