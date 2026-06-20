import { CronParserPageContent } from "@/components/pages/cron-parser-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("en", "cron-parser")

export default function CronParserPage() {
  return <CronParserPageContent locale="en" />
}
