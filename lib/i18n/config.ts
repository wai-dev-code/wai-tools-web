export const locales = ["zh", "en", "ja"] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "en"

export const localeLabels: Record<Locale, string> = {
  zh: "中文",
  en: "English",
  ja: "日本語",
}

/** 已翻译的核心路由（不含 locale 前缀；SEO 着陆页见 seoLocalizedSlugs） */
export const coreLocalizedPaths = [
  "",
  "tools",
  "tools/json-formatter",
  "tools/base64",
  "about",
  "contact",
  "blog",
] as const

export type CoreLocalizedPath = (typeof coreLocalizedPaths)[number]

/** 仅英文、不带 locale 前缀的固定路径 */
export const englishOnlyPaths = ["privacy", "terms"] as const

export function isEnglishOnlyPath(path: string): boolean {
  const normalized = path.replace(/^\//, "")
  return englishOnlyPaths.includes(normalized as (typeof englishOnlyPaths)[number])
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}
