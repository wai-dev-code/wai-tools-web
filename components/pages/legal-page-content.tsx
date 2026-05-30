"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLocale, useMessages } from "@/components/locale-provider"
import { localizeHref } from "@/lib/i18n"
import { DocumentTitle } from "@/components/document-lang"
import { siteConfig } from "@/lib/tools-data"
import type { LegalPageContent } from "@/lib/i18n/messages/legal-pages"

function langAttr(locale: ReturnType<typeof useLocale>) {
  return locale === "zh" ? "zh-CN" : locale === "ja" ? "ja" : "en"
}

function LegalBody({
  page,
  showEmail,
}: {
  page: LegalPageContent
  showEmail?: boolean
}) {
  const locale = useLocale()

  return (
    <main className="mx-auto max-w-3xl px-4 pt-24 pb-16 lg:px-6">
      <h1 className="mb-8 text-3xl font-bold text-foreground">{page.title}</h1>
      <div className="prose-legal space-y-6 text-muted-foreground">
        <p className="text-sm">{page.lastUpdated}</p>

        {page.sections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-3 text-xl font-semibold text-foreground">{section.title}</h2>
            {section.paragraphs?.map((p, i) => (
              <p key={i} className={i > 0 ? "mt-2" : ""}>
                {p.replace(/WaiHub/g, siteConfig.name)}
              </p>
            ))}
            {section.bullets && (
              <ul className="ml-6 list-disc space-y-2">
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {showEmail && page.contactBefore && (
          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              {page.contactSectionTitle ?? page.contactLink}
            </h2>
            <p>
              {page.contactBefore}{" "}
              <a href={`mailto:${siteConfig.contactEmail}`} className="text-primary hover:underline">
                {siteConfig.contactEmail}
              </a>
            </p>
          </section>
        )}

        {!showEmail && page.contactBefore && (
          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              {page.contactSectionTitle ?? page.contactLink}
            </h2>
            <p>
              {page.contactBefore}{" "}
              <Link href={localizeHref(locale, "contact")} className="text-primary hover:underline">
                {page.contactLink}
              </Link>
              {page.contactAfter ?? ""}
            </p>
          </section>
        )}
      </div>
    </main>
  )
}

export function PrivacyPageContent() {
  const locale = useLocale()
  const page = useMessages().legal.privacy

  return (
    <div className="min-h-screen bg-background" lang={langAttr(locale)}>
      <DocumentTitle title={`${page.title} | ${siteConfig.name}`} />
      <Header locale={locale} />
      <LegalBody page={page} showEmail />
      <Footer locale={locale} />
    </div>
  )
}

export function TermsPageContent() {
  const locale = useLocale()
  const page = useMessages().legal.terms

  return (
    <div className="min-h-screen bg-background" lang={langAttr(locale)}>
      <DocumentTitle title={`${page.title} | ${siteConfig.name}`} />
      <Header locale={locale} />
      <LegalBody page={page} />
      <Footer locale={locale} />
    </div>
  )
}
