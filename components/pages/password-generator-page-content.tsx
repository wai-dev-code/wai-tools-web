import { notFound } from "next/navigation"
import { ToolLayout } from "@/components/tool-layout"
import { PasswordGeneratorTool } from "@/components/tools/password-generator-tool"
import type { Locale } from "@/lib/i18n/config"
import { getMessages } from "@/lib/i18n"
import { getToolOrNotFound } from "@/lib/tool-metadata"

export function PasswordGeneratorPageContent({ locale }: { locale: Locale }) {
  const tool = getToolOrNotFound("password-generator")
  if (!tool) notFound()

  const page = getMessages(locale).passwordGeneratorPage

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
      <PasswordGeneratorTool locale={locale} />
    </ToolLayout>
  )
}
