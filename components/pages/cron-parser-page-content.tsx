import { notFound } from "next/navigation"
import { ToolLayout } from "@/components/tool-layout"
import { CronParserTool } from "@/components/tools/cron-parser-tool"
import type { Locale } from "@/lib/i18n/config"
import { getToolOrNotFound } from "@/lib/tool-metadata"
import { getToolPageContent } from "@/lib/tool-page-content"

export function CronParserPageContent({ locale }: { locale: Locale }) {
  const tool = getToolOrNotFound("cron-parser")
  if (!tool) notFound()

  return (
    <ToolLayout toolSlug={tool.slug} locale={locale} content={getToolPageContent("cron-parser", locale)}>
      <CronParserTool locale={locale} />
    </ToolLayout>
  )
}
