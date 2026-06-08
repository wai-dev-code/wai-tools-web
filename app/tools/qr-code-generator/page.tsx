import { QrCodeGeneratorPageContent } from "@/components/pages/qr-code-generator-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("en", "qr-code-generator")

export default function QrCodeGeneratorPage() {
  return <QrCodeGeneratorPageContent locale="en" />
}
