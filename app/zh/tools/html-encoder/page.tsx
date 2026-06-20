import { HtmlEncoderPageContent } from "@/components/pages/html-encoder-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("zh", "html-encoder")

export default function ZhHtmlEncoderPage() {
  return <HtmlEncoderPageContent locale="zh" />
}
