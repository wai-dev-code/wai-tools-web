import type { Locale } from "@/lib/i18n/config"
import { generateLocalizedSeoMetadataBySlug } from "@/lib/i18n"
import { Base64SeoPageContent, JsonSeoPageContent } from "@/components/pages/seo-page-content"

export function createLocalizedJsonSeoPage(slug: string, locale: Locale) {
  return {
    metadata: generateLocalizedSeoMetadataBySlug(locale, slug),
    Page: function LocalizedJsonSeoPage() {
      return <JsonSeoPageContent locale={locale} slug={slug} />
    },
  }
}

export function createLocalizedBase64SeoPage(slug: string, locale: Locale) {
  return {
    metadata: generateLocalizedSeoMetadataBySlug(locale, slug),
    Page: function LocalizedBase64SeoPage() {
      return <Base64SeoPageContent locale={locale} slug={slug} />
    },
  }
}
