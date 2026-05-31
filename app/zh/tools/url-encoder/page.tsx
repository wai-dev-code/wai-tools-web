import { UrlEncoderPageContent } from "@/components/pages/url-encoder-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("zh", "url-encoder")

export default function ZhUrlEncoderPage() {
  return <UrlEncoderPageContent locale="zh" />
}
