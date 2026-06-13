import { notFound } from "next/navigation"
import { ToolLayout } from "@/components/tool-layout"
import { UuidGeneratorTool } from "@/components/tools/uuid-generator-tool"
import type { Locale } from "@/lib/i18n/config"
import { getToolOrNotFound } from "@/lib/tool-metadata"
import { getToolPageContent } from "@/lib/tool-page-content"

export function UuidGeneratorPageContent({ locale }: { locale: Locale }) {
  const tool = getToolOrNotFound("uuid-generator")
  if (!tool) notFound()

  return (
    <ToolLayout toolSlug={tool.slug} locale={locale} content={getToolPageContent("uuid-generator", locale)}>
      <UuidGeneratorTool locale={locale} />
    </ToolLayout>
  )
}
