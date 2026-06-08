import { PasswordGeneratorPageContent } from "@/components/pages/password-generator-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("zh", "password-generator")

export default function ZhPasswordGeneratorPage() {
  return <PasswordGeneratorPageContent locale="zh" />
}
