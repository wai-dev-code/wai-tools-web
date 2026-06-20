import { ColorConverterPageContent } from "@/components/pages/color-converter-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("zh", "color-converter")

export default function ZhColorConverterPage() {
  return <ColorConverterPageContent locale="zh" />
}
