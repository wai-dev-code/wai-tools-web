import { ToolsPageContent } from "@/components/pages/tools-page-content"
import { createPageMetadata, getMessages } from "@/lib/i18n"

const m = getMessages("ja")

export const metadata = createPageMetadata("ja", "tools", m.toolsPage.metaTitle, m.toolsPage.metaDescription)

export default function JaToolsPage() {
  return <ToolsPageContent locale="ja" />
}
