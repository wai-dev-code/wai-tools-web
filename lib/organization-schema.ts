import type { Locale } from "@/lib/i18n/config"
import { getMessages } from "@/lib/i18n"
import { siteConfig } from "@/lib/tools-data"

/** Organization JSON-LD，供首页、关于页等复用 */
export function buildOrganizationJsonLd(locale: Locale) {
  const m = getMessages(locale)

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/android-chrome-512x512.png`,
    description: m.common.footerTagline,
    email: siteConfig.contactEmail,
  }
}

/** WebSite.publisher 内嵌 Organization（精简字段） */
export function buildOrganizationPublisher() {
  return {
    "@type": "Organization" as const,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/android-chrome-512x512.png`,
  }
}
