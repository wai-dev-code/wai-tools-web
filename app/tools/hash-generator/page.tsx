import { HashGeneratorPageContent } from "@/components/pages/hash-generator-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("en", "hash-generator")

export default function HashGeneratorPage() {
  return <HashGeneratorPageContent locale="en" />
}
