import { notFound } from "next/navigation"
import { ToolLayout } from "@/components/tool-layout"
import { Base64Tool } from "@/components/tools/base64-tool"
import type { Locale } from "@/lib/i18n/config"
import { getMessages } from "@/lib/i18n"
import { getToolOrNotFound } from "@/lib/tool-metadata"

export function Base64PageContent({ locale }: { locale: Locale }) {
  const tool = getToolOrNotFound("base64")
  if (!tool) notFound()

  const page = getMessages(locale).base64Page

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
      <Base64Tool locale={locale} />
    </ToolLayout>
  )
}
