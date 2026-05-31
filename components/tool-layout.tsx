import { ToolLayoutFrame } from "@/components/tool-layout-frame"
import { defaultLocale, type Locale } from "@/lib/i18n/config"

interface ToolLayoutProps {
  toolSlug: string
  locale?: Locale
  children: React.ReactNode
  instructions: React.ReactNode
  faq?: { question: string; answer: string }[]
}

export function ToolLayout({
  toolSlug,
  locale = defaultLocale,
  children,
  instructions,
  faq,
}: ToolLayoutProps) {
  return (
    <ToolLayoutFrame
      toolSlug={toolSlug}
      locale={locale}
      instructions={instructions}
      faq={faq}
    >
      {children}
    </ToolLayoutFrame>
  )
}
