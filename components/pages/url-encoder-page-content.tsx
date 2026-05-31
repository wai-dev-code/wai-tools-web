import { notFound } from "next/navigation"
import { ToolLayout } from "@/components/tool-layout"
import { UrlEncoderTool } from "@/components/tools/url-encoder-tool"
import type { Locale } from "@/lib/i18n/config"
import { getMessages } from "@/lib/i18n"
import { getToolOrNotFound } from "@/lib/tool-metadata"

export function UrlEncoderPageContent({ locale }: { locale: Locale }) {
  const tool = getToolOrNotFound("url-encoder")
  if (!tool) notFound()

  const page = getMessages(locale).urlEncoderPage

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
      <UrlEncoderTool locale={locale} />
    </ToolLayout>
  )
}
