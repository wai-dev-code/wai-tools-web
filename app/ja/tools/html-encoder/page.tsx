import { HtmlEncoderPageContent } from "@/components/pages/html-encoder-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("ja", "html-encoder")

export default function JaHtmlEncoderPage() {
  return <HtmlEncoderPageContent locale="ja" />
}
