import { TextDiffPageContent } from "@/components/pages/text-diff-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("en", "text-diff")

export default function TextDiffPage() {
  return <TextDiffPageContent locale="en" />
}
