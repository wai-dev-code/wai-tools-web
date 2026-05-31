import { UuidGeneratorPageContent } from "@/components/pages/uuid-generator-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("en", "uuid-generator")

export default function UuidGeneratorPage() {
  return <UuidGeneratorPageContent locale="en" />
}
