import { notFound } from "next/navigation"
import { ToolLayout } from "@/components/tool-layout"
import { JwtDecoderTool } from "@/components/tools/jwt-decoder-tool"
import type { Locale } from "@/lib/i18n/config"
import { getMessages } from "@/lib/i18n"
import { getToolOrNotFound } from "@/lib/tool-metadata"

export function JwtDecoderPageContent({ locale }: { locale: Locale }) {
  const tool = getToolOrNotFound("jwt-decoder")
  if (!tool) notFound()

  const page = getMessages(locale).jwtDecoderPage

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
      <JwtDecoderTool locale={locale} />
    </ToolLayout>
  )
}
