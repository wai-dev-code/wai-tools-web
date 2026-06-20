import { notFound } from "next/navigation"
import { ToolLayout } from "@/components/tool-layout"
import { TextDiffTool } from "@/components/tools/text-diff-tool"
import type { Locale } from "@/lib/i18n/config"
import { getToolOrNotFound } from "@/lib/tool-metadata"
import { getToolPageContent } from "@/lib/tool-page-content"

export function TextDiffPageContent({ locale }: { locale: Locale }) {
  const tool = getToolOrNotFound("text-diff")
  if (!tool) notFound()

  return (
    <ToolLayout toolSlug={tool.slug} locale={locale} content={getToolPageContent("text-diff", locale)}>
      <TextDiffTool locale={locale} />
    </ToolLayout>
  )
}
