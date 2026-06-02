import { notFound } from "next/navigation"
import { ToolLayout } from "@/components/tool-layout"
import { RegexTesterTool } from "@/components/tools/regex-tester-tool"
import type { Locale } from "@/lib/i18n/config"
import { getMessages } from "@/lib/i18n"
import { getToolOrNotFound } from "@/lib/tool-metadata"

export function RegexTesterPageContent({ locale }: { locale: Locale }) {
  const tool = getToolOrNotFound("regex-tester")
  if (!tool) notFound()

  const page = getMessages(locale).regexTesterPage

  return (
    <ToolLayout
      toolSlug={tool.slug}
      locale={locale}
      instructions={
        <>
          {page.instructions.map((text, i) => (
            <p key={`inst-${i}`}>{text}</p>
          ))}
          {page.seoSections.map((section) => (
            <div key={section.title} className="pt-4">
              <h3 className="mb-2 font-medium text-foreground">{section.title}</h3>
              {section.paragraphs.map((para, j) => (
                <p key={`${section.title}-${j}`} className="mt-2">
                  {para}
                </p>
              ))}
            </div>
          ))}
        </>
      }
      faq={page.faq.map((item) => ({ question: item.q, answer: item.a }))}
    >
      <RegexTesterTool locale={locale} />
    </ToolLayout>
  )
}
