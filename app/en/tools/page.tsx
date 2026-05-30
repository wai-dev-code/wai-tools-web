import { ToolsPageContent } from "@/components/pages/tools-page-content"
import { createPageMetadata, getMessages } from "@/lib/i18n"

const m = getMessages("en")

export const metadata = createPageMetadata("en", "tools", m.toolsPage.metaTitle, m.toolsPage.metaDescription)

export default function EnToolsPage() {
  return <ToolsPageContent locale="en" />
}
