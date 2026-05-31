import { UrlEncoderPageContent } from "@/components/pages/url-encoder-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("ja", "url-encoder")

export default function JaUrlEncoderPage() {
  return <UrlEncoderPageContent locale="ja" />
}
