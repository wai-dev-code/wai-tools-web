import { ColorConverterPageContent } from "@/components/pages/color-converter-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("ja", "color-converter")

export default function JaColorConverterPage() {
  return <ColorConverterPageContent locale="ja" />
}
