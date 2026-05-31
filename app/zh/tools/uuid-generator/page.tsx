import { UuidGeneratorPageContent } from "@/components/pages/uuid-generator-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("zh", "uuid-generator")

export default function ZhUuidGeneratorPage() {
  return <UuidGeneratorPageContent locale="zh" />
}
