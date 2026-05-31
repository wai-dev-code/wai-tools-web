import { UrlEncoderPageContent } from "@/components/pages/url-encoder-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("en", "url-encoder")

export default function EnUrlEncoderPage() {
  return <UrlEncoderPageContent locale="en" />
}
