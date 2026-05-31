import { JsonFormatterPageContent } from "@/components/pages/json-formatter-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("zh", "json-formatter")

export default function ZhJsonFormatterPage() {
  return <JsonFormatterPageContent locale="zh" />
}
