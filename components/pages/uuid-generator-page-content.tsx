import { notFound } from "next/navigation"
import { ToolLayout } from "@/components/tool-layout"
import { UuidGeneratorTool } from "@/components/tools/uuid-generator-tool"
import type { Locale } from "@/lib/i18n/config"
import { getMessages } from "@/lib/i18n"
import { getToolOrNotFound } from "@/lib/tool-metadata"

export function UuidGeneratorPageContent({ locale }: { locale: Locale }) {
  const tool = getToolOrNotFound("uuid-generator")
  if (!tool) notFound()

  const page = getMessages(locale).uuidGeneratorPage

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
      <UuidGeneratorTool locale={locale} />
    </ToolLayout>
  )
}
