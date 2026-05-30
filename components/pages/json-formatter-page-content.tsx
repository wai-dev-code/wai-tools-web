import { notFound } from "next/navigation"
import { ToolLayout } from "@/components/tool-layout"
import { JsonFormatterTool } from "@/components/tools/json-formatter-tool"
import type { Locale } from "@/lib/i18n/config"
import { getMessages } from "@/lib/i18n"
import { getToolOrNotFound } from "@/lib/tool-metadata"

export function JsonFormatterPageContent({ locale }: { locale: Locale }) {
  const tool = getToolOrNotFound("json-formatter")
  if (!tool) notFound()

  const page = getMessages(locale).jsonFormatterPage

  return (
    <ToolLayout
      tool={tool}
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
      <JsonFormatterTool locale={locale} />
    </ToolLayout>
  )
}
