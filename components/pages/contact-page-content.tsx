import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getMessages, localizeHref } from "@/lib/i18n"
import { siteConfig } from "@/lib/tools-data"

export function ContactPageContent({ locale }: { locale: Locale }) {
  const m = getMessages(locale).contactPage
  const lang = locale === "zh" ? "zh-CN" : locale === "ja" ? "ja" : "en"

  return (
    <div className="min-h-screen bg-background" lang={lang}>
      <Header locale={locale} />
      <main className="mx-auto max-w-3xl px-4 pt-24 pb-16 lg:px-6">
        <h1 className="mb-8 text-3xl font-bold text-foreground">{m.title}</h1>
        <div className="space-y-6 text-muted-foreground">
          <p>{m.intro}</p>

          <section className="rounded-xl border border-border bg-card/50 p-6">
            <h2 className="mb-2 text-lg font-semibold text-foreground">{m.emailTitle}</h2>
            <p>
              <a href={`mailto:${siteConfig.contactEmail}`} className="text-primary hover:underline">
                {siteConfig.contactEmail}
              </a>
            </p>
            <p className="mt-2 text-sm">{m.emailReply}</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">{m.faqTitle}</h2>
            <p>
              {m.faqDesc}{" "}
              <Link href={`${localizeHref(locale, "")}#faq`} className="text-primary hover:underline">
                {m.homeFaq}
              </Link>
              {m.faqSuffix}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">{m.privacyTitle}</h2>
            <p>
              {m.privacyDesc}{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                {m.privacyLink}
              </Link>
              {m.privacySuffix}
            </p>
          </section>
        </div>
      </main>
      <Footer locale={locale} />
    </div>
  )
}
