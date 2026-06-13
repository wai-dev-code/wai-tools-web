import { notFound } from "next/navigation"
import { ToolLayout } from "@/components/tool-layout"
import { HashGeneratorTool } from "@/components/tools/hash-generator-tool"
import type { Locale } from "@/lib/i18n/config"
import { getToolOrNotFound } from "@/lib/tool-metadata"
import { getToolPageContent } from "@/lib/tool-page-content"

export function HashGeneratorPageContent({ locale }: { locale: Locale }) {
  const tool = getToolOrNotFound("hash-generator")
  if (!tool) notFound()

  return (
    <ToolLayout toolSlug={tool.slug} locale={locale} content={getToolPageContent("hash-generator", locale)}>
      <HashGeneratorTool locale={locale} />
    </ToolLayout>
  )
}
