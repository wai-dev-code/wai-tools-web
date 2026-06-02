import type { Locale } from "@/lib/i18n/config"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HomeBlogTeaser } from "@/components/home-blog-teaser"
import { HomeToolHub } from "@/components/home-tool-hub"
import { CompactFAQ } from "@/components/compact-faq"
import { JsonLd } from "@/components/json-ld"
import { getMessages, localizeHref } from "@/lib/i18n"
import { buildOrganizationPublisher } from "@/lib/organization-schema"
import { siteConfig } from "@/lib/tools-data"

export function HomePageContent({ locale }: { locale: Locale }) {
  const m = getMessages(locale)

  return (
    <div className="min-h-screen bg-background" lang={locale === "zh" ? "zh-CN" : locale === "ja" ? "ja" : "en"}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.name,
          url: `${siteConfig.url}${localizeHref(locale, "")}`,
          description: m.home.metaDescription,
          inLanguage: locale === "zh" ? "zh-CN" : locale === "ja" ? "ja" : "en",
          publisher: buildOrganizationPublisher(),
          potentialAction: {
            "@type": "SearchAction",
            target: `${siteConfig.url}${localizeHref(locale, "tools")}?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        }}
      />
      <Header locale={locale} />
      <main>
        <HomeToolHub locale={locale} />
        <HomeBlogTeaser locale={locale} />
        <CompactFAQ locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  )
}
