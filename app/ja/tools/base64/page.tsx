import { Base64PageContent } from "@/components/pages/base64-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("ja", "base64")

export default function JaBase64Page() {
  return <Base64PageContent locale="ja" />
}
