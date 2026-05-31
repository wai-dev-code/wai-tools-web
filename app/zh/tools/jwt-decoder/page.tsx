import { JwtDecoderPageContent } from "@/components/pages/jwt-decoder-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("zh", "jwt-decoder")

export default function ZhJwtDecoderPage() {
  return <JwtDecoderPageContent locale="zh" />
}
