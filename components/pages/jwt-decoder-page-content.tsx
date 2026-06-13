import { notFound } from "next/navigation"
import { ToolLayout } from "@/components/tool-layout"
import { JwtDecoderTool } from "@/components/tools/jwt-decoder-tool"
import type { Locale } from "@/lib/i18n/config"
import { getToolOrNotFound } from "@/lib/tool-metadata"
import { getToolPageContent } from "@/lib/tool-page-content"

export function JwtDecoderPageContent({ locale }: { locale: Locale }) {
  const tool = getToolOrNotFound("jwt-decoder")
  if (!tool) notFound()

  return (
    <ToolLayout toolSlug={tool.slug} locale={locale} content={getToolPageContent("jwt-decoder", locale)}>
      <JwtDecoderTool locale={locale} />
    </ToolLayout>
  )
}
