import type { Locale } from "@/lib/i18n/config"
import { getMessages } from "@/lib/i18n"
import { isLocalizedToolSlug, type LocalizedToolSlug } from "@/lib/i18n/localized-tool-slug"
import { categoryLabels, type ToolCategory } from "@/lib/tools-data"

export function getToolCategoryLabel(locale: Locale, cat: ToolCategory): string {
  const m = getMessages(locale).categories
  if (cat === "json") return m.json
  if (cat === "encoding") return m.encoding
  if (cat === "dev") return m.dev
  if (cat === "api") return m.api
  return categoryLabels[cat]
}

export function getToolLabel(locale: Locale, slug: string, fallback: string): string {
  if (isLocalizedToolSlug(slug)) {
    return getMessages(locale).tools[getToolTextKey(slug)].name
  }
  return fallback
}

export function getToolShort(locale: Locale, slug: string, fallback: string): string {
  if (isLocalizedToolSlug(slug)) {
    return getMessages(locale).tools[getToolTextKey(slug)].short
  }
  return fallback
}

function getToolTextKey(slug: LocalizedToolSlug) {
  const map = {
    "json-formatter": "jsonFormatter",
    base64: "base64",
    "url-encoder": "urlEncoder",
    "jwt-decoder": "jwtDecoder",
    timestamp: "timestamp",
    "uuid-generator": "uuidGenerator",
    "password-generator": "passwordGenerator",
    "qr-code-generator": "qrCodeGenerator",
    "regex-tester": "regexTester",
  } as const
  return map[slug]
}

export const toolNavCategories: ToolCategory[] = ["json", "encoding", "dev", "api"]

export { isLocalizedToolSlug, type LocalizedToolSlug }
