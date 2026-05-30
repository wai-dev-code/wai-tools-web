import type { Locale } from "@/lib/i18n/config"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ToolSidebar } from "@/components/tool-sidebar"
import { ToolsList } from "@/components/tools-list"
import { formatMessage, getMessages } from "@/lib/i18n"
import { getVisibleTools } from "@/lib/tools-data"

export function ToolsPageContent({ locale }: { locale: Locale }) {
  const m = getMessages(locale)
  const visibleCount = getVisibleTools().length

  return (
    <div className="min-h-screen bg-background" lang={locale === "zh" ? "zh-CN" : locale === "ja" ? "ja" : "en"}>
      <Header locale={locale} />
      <div className="mx-auto flex max-w-7xl gap-8 px-4 pt-20 pb-16 lg:px-6">
        <ToolSidebar locale={locale} />
        <main className="min-w-0 flex-1">
          <h1 className="mb-2 text-3xl font-bold text-foreground">{m.toolsPage.title}</h1>
          <p className="mb-6 text-muted-foreground">
            {formatMessage(m.toolsPage.subtitle, { n: visibleCount })}
          </p>
          <ToolsList locale={locale} />
        </main>
      </div>
      <Footer locale={locale} />
    </div>
  )
}
