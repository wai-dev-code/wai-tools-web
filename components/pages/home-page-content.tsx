import type { Locale } from "@/lib/i18n/config"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HomeLanding } from "@/components/home-landing"
import { JsonLd } from "@/components/json-ld"
import { getMessages, localizeHref } from "@/lib/i18n"
import { buildOrganizationPublisher } from "@/lib/organization-schema"
import { siteConfig } from "@/lib/tools-data"

export function HomePageContent({ locale }: { locale: Locale }) {
  const m = getMessages(locale)
  const lang = locale === "zh" ? "zh-CN" : locale === "ja" ? "ja" : "en"

  return (
    <div className="min-h-screen bg-background" lang={lang}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.name,
          url: `${siteConfig.url}${localizeHref(locale, "")}`,
          description: m.home.metaDescription,
          inLanguage: lang,
          publisher: buildOrganizationPublisher(),
          potentialAction: {
            "@type": "SearchAction",
            target: `${siteConfig.url}${localizeHref(locale, "tools")}?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        }}
      />
      {m.home.faqs.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: m.home.faqs.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }}
        />
      )}
      <Header locale={locale} />
      <main>
        <HomeLanding locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  )
}
