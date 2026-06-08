import { QrCodeGeneratorPageContent } from "@/components/pages/qr-code-generator-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("zh", "qr-code-generator")

export default function ZhQrCodeGeneratorPage() {
  return <QrCodeGeneratorPageContent locale="zh" />
}
