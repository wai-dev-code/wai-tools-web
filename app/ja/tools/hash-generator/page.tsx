import { HashGeneratorPageContent } from "@/components/pages/hash-generator-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("ja", "hash-generator")

export default function JaHashGeneratorPage() {
  return <HashGeneratorPageContent locale="ja" />
}
