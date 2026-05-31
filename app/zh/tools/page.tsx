import { ToolsPageContent } from "@/components/pages/tools-page-content"
import { createPageMetadata, getMessages } from "@/lib/i18n"

const m = getMessages("zh")

export const metadata = createPageMetadata("zh", "tools", m.toolsPage.metaTitle, m.toolsPage.metaDescription)

export default function ZhToolsPage() {
  return <ToolsPageContent locale="zh" />
}
