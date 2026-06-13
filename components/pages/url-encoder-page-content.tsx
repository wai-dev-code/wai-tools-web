import { notFound } from "next/navigation"
import { ToolLayout } from "@/components/tool-layout"
import { UrlEncoderTool } from "@/components/tools/url-encoder-tool"
import type { Locale } from "@/lib/i18n/config"
import { getToolOrNotFound } from "@/lib/tool-metadata"
import { getToolPageContent } from "@/lib/tool-page-content"

export function UrlEncoderPageContent({ locale }: { locale: Locale }) {
  const tool = getToolOrNotFound("url-encoder")
  if (!tool) notFound()

  return (
    <ToolLayout toolSlug={tool.slug} locale={locale} content={getToolPageContent("url-encoder", locale)}>
      <UrlEncoderTool locale={locale} />
    </ToolLayout>
  )
}
