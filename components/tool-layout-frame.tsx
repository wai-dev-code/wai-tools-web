"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { AdSlot } from "@/components/ad-slot"
import { ToolContentSections } from "@/components/tool-content-sections"
import { ToolWorkflowLinks } from "@/components/tool-workflow-links"
import { recordRecentTool } from "@/lib/recent-tools"
import { trackGaEvent } from "@/lib/google-analytics"
import { isImmersiveBottomAdAllowed } from "@/lib/adsense"
import { ToolContentShell } from "@/components/tool-content-shell"
import { PanelFullscreenProvider, usePanelFullscreenOptional } from "@/components/panel-fullscreen-context"
import { ToolWorkspaceProvider } from "@/components/tool-workspace-provider"
import { getToolBySlug, siteConfig, type ToolDefinition } from "@/lib/tools-data"
import { defaultLocale, type Locale } from "@/lib/i18n/config"
import type { ToolPageSeoContent } from "@/lib/i18n/messages/tool-page-content-types"
import { getLocalizedToolText, getMessages, localizeHref } from "@/lib/i18n"
import { isLocalizedToolSlug } from "@/lib/i18n/localized-tool-slug"
import { cn } from "@/lib/utils"

interface ToolLayoutFrameProps {
  toolSlug: string
  locale?: Locale
  children: React.ReactNode
  content: ToolPageSeoContent
}

function getLocalizedToolInfo(tool: ToolDefinition, locale: Locale) {
  if (isLocalizedToolSlug(tool.slug)) {
    const text = getLocalizedToolText(tool.slug, locale)
    return { name: text.name, description: text.desc }
  }
  return { name: tool.name, description: tool.description }
}

function ToolLayoutBody({ toolSlug, locale = defaultLocale, children, content }: ToolLayoutFrameProps) {
  const tool = getToolBySlug(toolSlug)

  useEffect(() => {
    if (tool) recordRecentTool(tool.slug)
  }, [tool])

  useEffect(() => {
    if (!tool) return
    trackGaEvent("tool_view", { tool_slug: tool.slug, locale })
  }, [tool, locale])

  if (!tool) return null

  const m = getMessages(locale)
  const localized = getLocalizedToolInfo(tool, locale)
  const panelFs = usePanelFullscreenOptional()
  const immersive = panelFs?.isPanelFullscreen ?? false
  const showImmersiveAd = immersive && isImmersiveBottomAdAllowed()
  const toolUrl = `${siteConfig.url}${localizeHref(locale, `tools/${tool.slug}`)}`
  const lang = locale === "zh" ? "zh-CN" : locale === "ja" ? "ja" : "en"

  const sectionLabels = {
    features: content.features.title,
    howToUse: content.howToUse.title,
    examples: content.examples.title,
    faq: m.common.faq,
    relatedTools: m.common.relatedTools,
  }

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
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: m.common.home,
              item: `${siteConfig.url}${localizeHref(locale, "")}`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: m.common.tools,
              item: `${siteConfig.url}${localizeHref(locale, "tools")}`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: localized.name,
              item: toolUrl,
            },
          ],
        }}
      />
      {content.faq.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: content.faq.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
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
              {!immersive && (
                <ToolWorkflowLinks
                  toolSlug={tool.slug}
                  locale={locale}
                  title={m.common.workflowNext}
                />
              )}
              {children}
            </div>
          </ToolContentShell>

          {!immersive && (
            <>
              <AdSlot name="toolBottom" disclaimer={m.common.adDisclaimer} />
              <ToolContentSections content={content} labels={sectionLabels} locale={locale} />
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

export function ToolLayoutFrame(props: ToolLayoutFrameProps) {
  return (
    <ToolWorkspaceProvider>
      <PanelFullscreenProvider>
        <ToolLayoutBody {...props} />
      </PanelFullscreenProvider>
    </ToolWorkspaceProvider>
  )
}
