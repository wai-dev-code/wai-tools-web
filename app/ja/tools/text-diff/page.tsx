import { TextDiffPageContent } from "@/components/pages/text-diff-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("ja", "text-diff")

export default function JaTextDiffPage() {
  return <TextDiffPageContent locale="ja" />
}
