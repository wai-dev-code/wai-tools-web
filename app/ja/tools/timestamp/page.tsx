import { TimestampPageContent } from "@/components/pages/timestamp-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("ja", "timestamp")

export default function JaTimestampPage() {
  return <TimestampPageContent locale="ja" />
}
