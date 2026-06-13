import { ToolLayoutFrame } from "@/components/tool-layout-frame"
import { defaultLocale, type Locale } from "@/lib/i18n/config"
import type { ToolPageSeoContent } from "@/lib/i18n/messages/tool-page-content-types"

interface ToolLayoutProps {
  toolSlug: string
  locale?: Locale
  children: React.ReactNode
  content: ToolPageSeoContent
}

export function ToolLayout({
  toolSlug,
  locale = defaultLocale,
  children,
  content,
}: ToolLayoutProps) {
  return (
    <ToolLayoutFrame toolSlug={toolSlug} locale={locale} content={content}>
      {children}
    </ToolLayoutFrame>
  )
}
