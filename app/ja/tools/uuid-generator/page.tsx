import { UuidGeneratorPageContent } from "@/components/pages/uuid-generator-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("ja", "uuid-generator")

export default function JaUuidGeneratorPage() {
  return <UuidGeneratorPageContent locale="ja" />
}
