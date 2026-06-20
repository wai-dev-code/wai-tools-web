import { notFound } from "next/navigation"
import { ToolLayout } from "@/components/tool-layout"
import { ColorConverterTool } from "@/components/tools/color-converter-tool"
import type { Locale } from "@/lib/i18n/config"
import { getToolOrNotFound } from "@/lib/tool-metadata"
import { getToolPageContent } from "@/lib/tool-page-content"

export function ColorConverterPageContent({ locale }: { locale: Locale }) {
  const tool = getToolOrNotFound("color-converter")
  if (!tool) notFound()

  return (
    <ToolLayout toolSlug={tool.slug} locale={locale} content={getToolPageContent("color-converter", locale)}>
      <ColorConverterTool locale={locale} />
    </ToolLayout>
  )
}
