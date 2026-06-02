import { RegexTesterPageContent } from "@/components/pages/regex-tester-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("ja", "regex-tester")

export default function JaRegexTesterPage() {
  return <RegexTesterPageContent locale="ja" />
}
