import { notFound } from "next/navigation"
import { ToolLayout } from "@/components/tool-layout"
import { PasswordGeneratorTool } from "@/components/tools/password-generator-tool"
import type { Locale } from "@/lib/i18n/config"
import { getToolOrNotFound } from "@/lib/tool-metadata"
import { getToolPageContent } from "@/lib/tool-page-content"

export function PasswordGeneratorPageContent({ locale }: { locale: Locale }) {
  const tool = getToolOrNotFound("password-generator")
  if (!tool) notFound()

  return (
    <ToolLayout toolSlug={tool.slug} locale={locale} content={getToolPageContent("password-generator", locale)}>
      <PasswordGeneratorTool locale={locale} />
    </ToolLayout>
  )
}
