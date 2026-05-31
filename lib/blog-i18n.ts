import type { Locale } from "@/lib/i18n/config"

export function formatBlogDate(iso: string, locale: Locale = "en"): string {
  const [y, m, d] = iso.split("-").map(Number)
  if (!y || !m || !d) return iso
  if (locale === "en") {
    return new Date(y, m - 1, d).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }
  if (locale === "ja") {
    return `${y}年${m}月${d}日`
  }
  return `${y} 年 ${m} 月 ${d} 日`
}
