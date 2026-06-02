import { RegexTesterPageContent } from "@/components/pages/regex-tester-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("en", "regex-tester")

export default function RegexTesterPage() {
  return <RegexTesterPageContent locale="en" />
}
