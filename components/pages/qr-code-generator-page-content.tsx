import { notFound } from "next/navigation"
import { ToolLayout } from "@/components/tool-layout"
import { QrCodeGeneratorTool } from "@/components/tools/qr-code-generator-tool"
import type { Locale } from "@/lib/i18n/config"
import { getToolOrNotFound } from "@/lib/tool-metadata"
import { getToolPageContent } from "@/lib/tool-page-content"

export function QrCodeGeneratorPageContent({ locale }: { locale: Locale }) {
  const tool = getToolOrNotFound("qr-code-generator")
  if (!tool) notFound()

  return (
    <ToolLayout toolSlug={tool.slug} locale={locale} content={getToolPageContent("qr-code-generator", locale)}>
      <QrCodeGeneratorTool locale={locale} />
    </ToolLayout>
  )
}
