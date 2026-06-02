import { RegexTesterPageContent } from "@/components/pages/regex-tester-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("zh", "regex-tester")

export default function ZhRegexTesterPage() {
  return <RegexTesterPageContent locale="zh" />
}
