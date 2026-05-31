import { TimestampPageContent } from "@/components/pages/timestamp-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("zh", "timestamp")

export default function ZhTimestampPage() {
  return <TimestampPageContent locale="zh" />
}
