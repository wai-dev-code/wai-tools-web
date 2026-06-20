import type { Metadata } from "next"
import {
  coreLocalizedPaths,
  defaultLocale,
  isEnglishOnlyPath,
  locales,
  type CoreLocalizedPath,
  type Locale,
} from "@/lib/i18n/config"
import en from "@/lib/i18n/messages/en"
import ja from "@/lib/i18n/messages/ja"
import type { Messages } from "@/lib/i18n/messages/types"
import { getSeoPageKey, seoLocalizedSlugs } from "@/lib/i18n/messages/seo-pages"
import zh from "@/lib/i18n/messages/zh"
import { getBlogPost } from "@/lib/blog-data"
import { getToolBySlug, siteConfig } from "@/lib/tools-data"
import { getToolSeoMeta } from "@/lib/tool-page-seo-meta"
import { ogImageMetadata } from "@/lib/site-og"
import { type LocalizedToolSlug } from "@/lib/i18n/localized-tool-slug"

const catalogs: Record<Locale, Messages> = { zh, en, ja }

export function getMessages(locale: Locale): Messages {
  return catalogs[locale]
}

/** 将路径转为带 locale 前缀的 href（en 无前缀；privacy/terms 始终无前缀） */
export function localizeHref(locale: Locale, path: string): string {
  const normalized = path.replace(/^\//, "")
  if (isEnglishOnlyPath(normalized)) {
    return `/${normalized}`
  }
  if (locale === defaultLocale) {
    return normalized ? `/${normalized}` : "/"
  }
  return normalized ? `/${locale}/${normalized}` : `/${locale}`
}

export function formatMessage(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(vars[key] ?? ""))
}

const hreflangMap: Record<Locale, string> = {
  zh: "zh-CN",
  en: "en",
  ja: "ja",
}

function isLocalizedPath(normalized: string): boolean {
  if (normalized === "") return true
  if (coreLocalizedPaths.includes(normalized as CoreLocalizedPath)) return true
  if (seoLocalizedSlugs.includes(normalized)) return true
  if (normalized.startsWith("blog/")) {
    return !!getBlogPost(normalized.slice(5))
  }
  return false
}

/** 核心页面与 SEO 着陆页的 hreflang 交替链接 */
export function buildLanguageAlternates(path: string): Metadata["alternates"] {
  const normalized = path.replace(/^\//, "")
  if (!isLocalizedPath(normalized)) {
    return undefined
  }

  const languages: Record<string, string> = {}
  for (const locale of locales) {
    languages[hreflangMap[locale]] = `${siteConfig.url}${localizeHref(locale, normalized)}`
  }
  languages["x-default"] = `${siteConfig.url}${localizeHref(defaultLocale, normalized)}`

  return {
    canonical: `${siteConfig.url}${localizeHref(defaultLocale, normalized)}`,
    languages,
  }
}

export function createPageMetadata(
  locale: Locale,
  path: string,
  title: string,
  description: string,
  keywords?: string[]
): Metadata {
  const canonicalPath = localizeHref(locale, path)
  const alternates = buildLanguageAlternates(path)
  const ogLocale = hreflangMap[locale].replace("-", "_")
  const alternateLocales = locales
    .filter((l) => l !== locale)
    .map((l) => hreflangMap[l].replace("-", "_"))

  const fullTitle = `${title} | ${siteConfig.name}`

  return {
    title,
    description,
    keywords,
    alternates: alternates
      ? { ...alternates, canonical: `${siteConfig.url}${canonicalPath}` }
      : { canonical: `${siteConfig.url}${canonicalPath}` },
    openGraph: {
      title: fullTitle,
      description,
      url: `${siteConfig.url}${canonicalPath}`,
      type: "website",
      siteName: siteConfig.name,
      locale: ogLocale,
      alternateLocale: alternateLocales,
      images: [ogImageMetadata],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImageMetadata.url],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

const TOOL_TEXT_KEY: Record<LocalizedToolSlug, keyof Messages["tools"]> = {
  "json-formatter": "jsonFormatter",
  base64: "base64",
  "url-encoder": "urlEncoder",
  "jwt-decoder": "jwtDecoder",
  timestamp: "timestamp",
  "uuid-generator": "uuidGenerator",
  "password-generator": "passwordGenerator",
  "qr-code-generator": "qrCodeGenerator",
  "hash-generator": "hashGenerator",
  "regex-tester": "regexTester",
  "html-encoder": "htmlEncoder",
  "text-diff": "textDiff",
  "cron-parser": "cronParser",
  "color-converter": "colorConverter",
}

const TOOL_PAGE_KEY: Record<
  LocalizedToolSlug,
  | "jsonFormatterPage"
  | "base64Page"
  | "urlEncoderPage"
  | "jwtDecoderPage"
  | "timestampPage"
  | "uuidGeneratorPage"
  | "passwordGeneratorPage"
  | "qrCodeGeneratorPage"
  | "hashGeneratorPage"
  | "regexTesterPage"
  | "htmlEncoderPage"
  | "textDiffPage"
  | "cronParserPage"
  | "colorConverterPage"
> = {
  "json-formatter": "jsonFormatterPage",
  base64: "base64Page",
  "url-encoder": "urlEncoderPage",
  "jwt-decoder": "jwtDecoderPage",
  timestamp: "timestampPage",
  "uuid-generator": "uuidGeneratorPage",
  "password-generator": "passwordGeneratorPage",
  "qr-code-generator": "qrCodeGeneratorPage",
  "hash-generator": "hashGeneratorPage",
  "regex-tester": "regexTesterPage",
  "html-encoder": "htmlEncoderPage",
  "text-diff": "textDiffPage",
  "cron-parser": "cronParserPage",
  "color-converter": "colorConverterPage",
}

export function getLocalizedToolText(slug: LocalizedToolSlug, locale: Locale) {
  const m = getMessages(locale)
  return m.tools[TOOL_TEXT_KEY[slug]]
}

export function getAllLocalizedUrls(path: string): string[] {
  return locales.map((locale) => `${siteConfig.url}${localizeHref(locale, path)}`)
}

/** 从 pathname 去掉 /en、/ja 前缀，得到核心路径 */
export function stripLocalePrefix(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean)
  if (parts.length > 0 && locales.includes(parts[0] as Locale)) {
    const rest = parts.slice(1).join("/")
    return rest ? `/${rest}` : "/"
  }
  return pathname || "/"
}

export function generateLocalizedToolMetadata(
  locale: Locale,
  slug: LocalizedToolSlug
): Metadata {
  const seo = getToolSeoMeta(slug, locale)
  const tool = getToolBySlug(slug)
  return createPageMetadata(
    locale,
    `tools/${slug}`,
    seo.metaTitle,
    seo.metaDescription,
    tool?.keywords
  )
}

export function generateLocalizedSeoMetadataBySlug(locale: Locale, slug: string): Metadata {
  const key = getSeoPageKey(slug)
  if (!key) {
    throw new Error(`Unknown SEO slug: ${slug}`)
  }
  const seo = getMessages(locale).seo[key]
  return createPageMetadata(locale, slug, seo.title, seo.description, seo.keywords)
}

/** @deprecated Use generateLocalizedSeoMetadataBySlug */
export function generateLocalizedSeoMetadata(
  locale: Locale,
  seoKey: "jsonFormatter" | "base64Encoder" | "base64Decoder",
  path: string
): Metadata {
  return generateLocalizedSeoMetadataBySlug(locale, path.replace(/^\//, ""))
}

export { locales, defaultLocale, type Locale } from "@/lib/i18n/config"
