import { notFound } from "next/navigation"
import { ToolLayout } from "@/components/tool-layout"
import { Base64Tool } from "@/components/tools/base64-tool"
import type { Locale } from "@/lib/i18n/config"
import { getToolOrNotFound } from "@/lib/tool-metadata"
import { getToolPageContent } from "@/lib/tool-page-content"

export function Base64PageContent({ locale }: { locale: Locale }) {
  const tool = getToolOrNotFound("base64")
  if (!tool) notFound()

  return (
    <ToolLayout toolSlug={tool.slug} locale={locale} content={getToolPageContent("base64", locale)}>
      <Base64Tool locale={locale} />
    </ToolLayout>
  )
}
