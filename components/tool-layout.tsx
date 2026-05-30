import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ToolSidebar } from "@/components/tool-sidebar"
import { JsonLd } from "@/components/json-ld"
import { AdSlot } from "@/components/ad-slot"
import { ToolContentShell } from "@/components/tool-content-shell"
import {
  getToolBySlug,
  getToolsByCategory,
  siteConfig,
  type ToolDefinition,
} from "@/lib/tools-data"
import { defaultLocale, type Locale } from "@/lib/i18n/config"
import {
  getLocalizedToolText,
  getMessages,
  localizeHref,
} from "@/lib/i18n"

interface ToolLayoutProps {
  tool: ToolDefinition
  locale?: Locale
  children: React.ReactNode
  instructions: React.ReactNode
  faq?: { question: string; answer: string }[]
}

function getLocalizedToolInfo(tool: ToolDefinition, locale: Locale) {
  if (tool.slug === "json-formatter" || tool.slug === "base64") {
    const text = getLocalizedToolText(tool.slug, locale)
    return { name: text.name, description: text.desc }
  }
  return { name: tool.name, description: tool.description }
}

function getCategoryLabel(locale: Locale, category: ToolDefinition["category"]): string {
  const m = getMessages(locale).categories
  if (category === "json") return m.json
  if (category === "encoding") return m.encoding
  return category
}

export function ToolLayout({
  tool,
  locale = defaultLocale,
  children,
  instructions,
  faq,
}: ToolLayoutProps) {
  const m = getMessages(locale)
  const localized = getLocalizedToolInfo(tool, locale)
  const toolUrl = `${siteConfig.url}${localizeHref(locale, `tools/${tool.slug}`)}`
  const lang = locale === "zh" ? "zh-CN" : locale === "ja" ? "ja" : "en"

  return (
    <div className="min-h-screen bg-background" lang={lang}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: localized.name,
          description: localized.description,
          applicationCategory: "DeveloperApplication",
          operatingSystem: "Any",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          url: toolUrl,
          inLanguage: lang,
        }}
      />
      {faq && faq.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }}
        />
      )}
      <Header locale={locale} />
      <div className="mx-auto flex max-w-7xl gap-8 px-4 pt-20 pb-16 lg:px-6">
        <ToolSidebar currentSlug={tool.slug} locale={locale} />
        <main className="min-w-0 flex-1">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1 text-sm text-muted-foreground">
            <Link href={localizeHref(locale, "")} className="hover:text-foreground">
              {m.common.home}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href={localizeHref(locale, "tools")} className="hover:text-foreground">
              {m.common.tools}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{localized.name}</span>
          </nav>

          <div className="mb-6">
            <div className="mb-2 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <tool.icon className="h-5 w-5" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground sm:text-3xl">{localized.name}</h1>
                <p className="text-sm text-muted-foreground">
                  {getCategoryLabel(locale, tool.category)} · {m.common.localRun} · {m.common.free}
                </p>
              </div>
            </div>
            <p className="text-muted-foreground">{localized.description}</p>
          </div>

          <ToolContentShell>
            <div className="mb-6 rounded-xl border border-border bg-card/50 p-4 sm:p-6">{children}</div>
          </ToolContentShell>

          <AdSlot name="toolBottom" />

          <section className="mb-10 rounded-xl border border-border bg-card/50 p-6">
            <h2 className="mb-4 text-lg font-semibold text-foreground">{m.common.instructions}</h2>
            <div className="space-y-3 text-sm text-muted-foreground">{instructions}</div>
          </section>

          {faq && faq.length > 0 && (
            <section className="rounded-xl border border-border bg-card/50 p-6">
              <h2 className="mb-4 text-lg font-semibold text-foreground">{m.common.faq}</h2>
              <dl className="space-y-4">
                {faq.map((item) => (
                  <div key={item.question}>
                    <dt className="font-medium text-foreground">{item.question}</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">{item.answer}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          <RelatedTools currentSlug={tool.slug} locale={locale} />
        </main>
      </div>
      <Footer locale={locale} />
    </div>
  )
}

function RelatedTools({ currentSlug, locale }: { currentSlug: string; locale: Locale }) {
  const m = getMessages(locale)
  const current = getToolBySlug(currentSlug)
  if (!current) return null
  const related = getToolsByCategory(current.category)
    .filter((t) => t.slug !== currentSlug)
    .slice(0, 3)
  if (related.length === 0) return null

  return (
    <section className="mt-10">
      <h2 className="mb-4 text-lg font-semibold text-foreground">{m.common.relatedTools}</h2>
      <div className="grid gap-3 sm:grid-cols-3">
        {related.map((t) => {
          const label =
            t.slug === "json-formatter" || t.slug === "base64"
              ? getLocalizedToolText(t.slug, locale).name
              : t.name
          const short =
            t.slug === "json-formatter" || t.slug === "base64"
              ? getLocalizedToolText(t.slug, locale).short
              : t.shortDescription
          return (
            <Link
              key={t.slug}
              href={localizeHref(locale, `tools/${t.slug}`)}
              className="rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/50 hover:bg-card/80"
            >
              <div className="font-medium text-foreground">{label}</div>
              <div className="mt-1 text-xs text-muted-foreground">{short}</div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
