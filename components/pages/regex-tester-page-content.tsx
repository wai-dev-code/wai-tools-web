import { notFound } from "next/navigation"
import { ToolLayout } from "@/components/tool-layout"
import { RegexTesterTool } from "@/components/tools/regex-tester-tool"
import type { Locale } from "@/lib/i18n/config"
import { getToolOrNotFound } from "@/lib/tool-metadata"
import { getToolPageContent } from "@/lib/tool-page-content"

export function RegexTesterPageContent({ locale }: { locale: Locale }) {
  const tool = getToolOrNotFound("regex-tester")
  if (!tool) notFound()

  return (
    <ToolLayout toolSlug={tool.slug} locale={locale} content={getToolPageContent("regex-tester", locale)}>
      <RegexTesterTool locale={locale} />
    </ToolLayout>
  )
}
