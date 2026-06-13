import { notFound } from "next/navigation"
import { ToolLayout } from "@/components/tool-layout"
import { TimestampTool } from "@/components/tools/timestamp-tool"
import type { Locale } from "@/lib/i18n/config"
import { getToolOrNotFound } from "@/lib/tool-metadata"
import { getToolPageContent } from "@/lib/tool-page-content"

export function TimestampPageContent({ locale }: { locale: Locale }) {
  const tool = getToolOrNotFound("timestamp")
  if (!tool) notFound()

  return (
    <ToolLayout toolSlug={tool.slug} locale={locale} content={getToolPageContent("timestamp", locale)}>
      <TimestampTool locale={locale} />
    </ToolLayout>
  )
}
