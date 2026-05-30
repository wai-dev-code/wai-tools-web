import { JsonFormatterPageContent } from "@/components/pages/json-formatter-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("ja", "json-formatter")

export default function JaJsonFormatterPage() {
  return <JsonFormatterPageContent locale="ja" />
}
