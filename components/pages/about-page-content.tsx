import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { formatMessage, getMessages, localizeHref } from "@/lib/i18n"
import { buildOrganizationJsonLd } from "@/lib/organization-schema"
import { getVisibleTools } from "@/lib/tools-data"

export function AboutPageContent({ locale }: { locale: Locale }) {
  const m = getMessages(locale).aboutPage
  const lang = locale === "zh" ? "zh-CN" : locale === "ja" ? "ja" : "en"

  return (
    <div className="min-h-screen bg-background" lang={lang}>
      <JsonLd data={buildOrganizationJsonLd(locale)} />
      <Header locale={locale} />
      <main className="mx-auto max-w-3xl px-4 pt-24 pb-16 lg:px-6">
        <h1 className="mb-8 text-3xl font-bold text-foreground">{m.title}</h1>
        <div className="space-y-6 text-muted-foreground">
          <p className="text-foreground/90">{m.brandDefinition}</p>
          <p>{m.intro}</p>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">{m.principlesTitle}</h2>
            <ul className="ml-6 list-disc space-y-2">
              {m.principles.map((p) => (
                <li key={p.title}>
                  <strong className="text-foreground">{p.title}</strong> — {p.desc}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">{m.toolsTitle}</h2>
            <p className="mb-3">
              {formatMessage(m.toolsDesc, { n: getVisibleTools().length })}
            </p>
            <Link href={localizeHref(locale, "tools")} className="text-primary hover:underline">
              {m.browseTools}
            </Link>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">{m.stackTitle}</h2>
            <p>{m.stackDesc}</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">{m.feedbackTitle}</h2>
            <p>
              {m.feedbackDesc}{" "}
              <Link href={localizeHref(locale, "contact")} className="text-primary hover:underline">
                {m.contactLink}
              </Link>
              {m.feedbackClosing}
            </p>
          </section>
        </div>
      </main>
      <Footer locale={locale} />
    </div>
  )
}
