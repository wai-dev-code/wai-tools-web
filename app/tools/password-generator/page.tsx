import { PasswordGeneratorPageContent } from "@/components/pages/password-generator-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("en", "password-generator")

export default function PasswordGeneratorPage() {
  return <PasswordGeneratorPageContent locale="en" />
}
