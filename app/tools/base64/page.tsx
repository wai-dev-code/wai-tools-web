import { Base64PageContent } from "@/components/pages/base64-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("zh", "base64")

export default function Base64Page() {
  return <Base64PageContent locale="zh" />
}
