import { QrCodeGeneratorPageContent } from "@/components/pages/qr-code-generator-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("ja", "qr-code-generator")

export default function JaQrCodeGeneratorPage() {
  return <QrCodeGeneratorPageContent locale="ja" />
}
