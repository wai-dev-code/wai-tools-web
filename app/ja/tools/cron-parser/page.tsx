import { CronParserPageContent } from "@/components/pages/cron-parser-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("ja", "cron-parser")

export default function JaCronParserPage() {
  return <CronParserPageContent locale="ja" />
}
