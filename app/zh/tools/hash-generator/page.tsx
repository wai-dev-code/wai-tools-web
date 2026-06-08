import { HashGeneratorPageContent } from "@/components/pages/hash-generator-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("zh", "hash-generator")

export default function ZhHashGeneratorPage() {
  return <HashGeneratorPageContent locale="zh" />
}
