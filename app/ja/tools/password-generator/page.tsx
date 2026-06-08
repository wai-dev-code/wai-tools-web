import { PasswordGeneratorPageContent } from "@/components/pages/password-generator-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("ja", "password-generator")

export default function JaPasswordGeneratorPage() {
  return <PasswordGeneratorPageContent locale="ja" />
}
