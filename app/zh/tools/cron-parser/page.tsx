import { CronParserPageContent } from "@/components/pages/cron-parser-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("zh", "cron-parser")

export default function ZhCronParserPage() {
  return <CronParserPageContent locale="zh" />
}
