"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { AdSlot } from "@/components/ad-slot"
import { isImmersiveBottomAdAllowed } from "@/lib/adsense"
import { ToolContentShell } from "@/components/tool-content-shell"
import { PanelFullscreenProvider, usePanelFullscreenOptional } from "@/components/panel-fullscreen-context"
import { ToolWorkspaceProvider } from "@/components/tool-workspace-provider"
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
import { isLocalizedToolSlug } from "@/lib/i18n/localized-tool-slug"
import { cn } from "@/lib/utils"

interface ToolLayoutFrameProps {
  toolSlug: string
  locale?: Locale
  children: React.ReactNode
  instructions: React.ReactNode
  faq?: { question: string; answer: string }[]
}

function getLocalizedToolInfo(tool: ToolDefinition, locale: Locale) {
  if (isLocalizedToolSlug(tool.slug)) {
    const text = getLocalizedToolText(tool.slug, locale)
    return { name: text.name, description: text.desc }
  }
  return { name: tool.name, description: tool.description }
}

function ToolLayoutBody({
  toolSlug,
  locale = defaultLocale,
  children,
  instructions,
  faq,
}: ToolLayoutFrameProps) {
  const tool = getToolBySlug(toolSlug)
  if (!tool) return null

  const m = getMessages(locale)
  const localized = getLocalizedToolInfo(tool, locale)
  const panelFs = usePanelFullscreenOptional()
  const immersive = panelFs?.isPanelFullscreen ?? false
  const showImmersiveAd = immersive && isImmersiveBottomAdAllowed()
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

      {!immersive && <Header locale={locale} />}

      <div
        className={cn(
          "mx-auto w-full max-w-7xl px-4 lg:px-6",
          immersive
            ? "fixed inset-0 z-[150] flex max-w-none flex-col bg-background p-0"
            : "pb-16 pt-20"
        )}
      >
        <main className={cn("min-w-0", immersive && "flex min-h-0 flex-1 flex-col overflow-hidden")}>
          {!immersive && (
            <>
              <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1 text-sm text-muted-foreground">
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

              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <tool.icon className="h-4 w-4" />
                </div>
                <h1 className="text-2xl font-bold text-foreground sm:text-3xl">{localized.name}</h1>
              </div>
            </>
          )}

          <ToolContentShell className={cn(immersive && "flex min-h-0 flex-1 flex-col")}>
            <div
              className={cn(
                immersive
                  ? "flex min-h-0 flex-1 flex-col overflow-hidden p-2 sm:p-3"
                  : "mb-6 rounded-xl border border-border bg-card/50 p-4 sm:p-6"
              )}
            >
              {children}
            </div>
          </ToolContentShell>

          {!immersive && (
            <>
              <AdSlot name="toolBottom" disclaimer={m.common.adDisclaimer} />

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
            </>
          )}
        </main>

        {showImmersiveAd && (
          <AdSlot
            name="toolBottom"
            compact
            disclaimer={m.common.adDisclaimer}
            className="shrink-0 border-t border-border bg-background px-3"
          />
        )}
      </div>

      {!immersive && <Footer locale={locale} />}
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
          const label = isLocalizedToolSlug(t.slug)
            ? getLocalizedToolText(t.slug, locale).name
            : t.name
          const short = isLocalizedToolSlug(t.slug)
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

export function ToolLayoutFrame(props: ToolLayoutFrameProps) {
  return (
    <ToolWorkspaceProvider>
      <PanelFullscreenProvider>
        <ToolLayoutBody {...props} />
      </PanelFullscreenProvider>
    </ToolWorkspaceProvider>
  )
}
