import { notFound } from "next/navigation"
import { ToolLayout } from "@/components/tool-layout"
import { JsonFormatterTool } from "@/components/tools/json-formatter-tool"
import type { Locale } from "@/lib/i18n/config"
import { getToolOrNotFound } from "@/lib/tool-metadata"
import { getToolPageContent } from "@/lib/tool-page-content"

export function JsonFormatterPageContent({ locale }: { locale: Locale }) {
  const tool = getToolOrNotFound("json-formatter")
  if (!tool) notFound()

  return (
    <ToolLayout toolSlug={tool.slug} locale={locale} content={getToolPageContent("json-formatter", locale)}>
      <JsonFormatterTool locale={locale} />
    </ToolLayout>
  )
}
