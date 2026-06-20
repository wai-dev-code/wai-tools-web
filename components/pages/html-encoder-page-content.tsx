import { notFound } from "next/navigation"
import { ToolLayout } from "@/components/tool-layout"
import { HtmlEncoderTool } from "@/components/tools/html-encoder-tool"
import type { Locale } from "@/lib/i18n/config"
import { getToolOrNotFound } from "@/lib/tool-metadata"
import { getToolPageContent } from "@/lib/tool-page-content"

export function HtmlEncoderPageContent({ locale }: { locale: Locale }) {
  const tool = getToolOrNotFound("html-encoder")
  if (!tool) notFound()

  return (
    <ToolLayout toolSlug={tool.slug} locale={locale} content={getToolPageContent("html-encoder", locale)}>
      <HtmlEncoderTool locale={locale} />
    </ToolLayout>
  )
}
