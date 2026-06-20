import { HtmlEncoderPageContent } from "@/components/pages/html-encoder-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("en", "html-encoder")

export default function HtmlEncoderPage() {
  return <HtmlEncoderPageContent locale="en" />
}
