import { TimestampPageContent } from "@/components/pages/timestamp-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("en", "timestamp")

export default function EnTimestampPage() {
  return <TimestampPageContent locale="en" />
}
