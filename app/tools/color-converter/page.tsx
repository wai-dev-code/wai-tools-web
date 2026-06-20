import { ColorConverterPageContent } from "@/components/pages/color-converter-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("en", "color-converter")

export default function ColorConverterPage() {
  return <ColorConverterPageContent locale="en" />
}
