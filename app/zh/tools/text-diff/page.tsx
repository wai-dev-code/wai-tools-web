import { TextDiffPageContent } from "@/components/pages/text-diff-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("zh", "text-diff")

export default function ZhTextDiffPage() {
  return <TextDiffPageContent locale="zh" />
}
