import { notFound } from "next/navigation"
import { ToolLayout } from "@/components/tool-layout"
import { TimestampTool } from "@/components/tools/timestamp-tool"
import type { Locale } from "@/lib/i18n/config"
import { getMessages } from "@/lib/i18n"
import { getToolOrNotFound } from "@/lib/tool-metadata"

export function TimestampPageContent({ locale }: { locale: Locale }) {
  const tool = getToolOrNotFound("timestamp")
  if (!tool) notFound()

  const page = getMessages(locale).timestampPage

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
      <TimestampTool locale={locale} />
    </ToolLayout>
  )
}
