import { notFound } from "next/navigation"
import { ToolLayout } from "@/components/tool-layout"
import { QrCodeGeneratorTool } from "@/components/tools/qr-code-generator-tool"
import type { Locale } from "@/lib/i18n/config"
import { getMessages } from "@/lib/i18n"
import { getToolOrNotFound } from "@/lib/tool-metadata"

export function QrCodeGeneratorPageContent({ locale }: { locale: Locale }) {
  const tool = getToolOrNotFound("qr-code-generator")
  if (!tool) notFound()

  const page = getMessages(locale).qrCodeGeneratorPage

  return (
    <ToolLayout
      toolSlug={tool.slug}
      locale={locale}
      instructions={
        <>
          {page.instructions.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </>
      }
      faq={page.faq.map((item) => ({ question: item.q, answer: item.a }))}
    >
      <QrCodeGeneratorTool locale={locale} />
    </ToolLayout>
  )
}
