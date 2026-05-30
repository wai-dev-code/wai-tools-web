import { JsonFormatterPageContent } from "@/components/pages/json-formatter-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("en", "json-formatter")

export default function EnJsonFormatterPage() {
  return <JsonFormatterPageContent locale="en" />
}
