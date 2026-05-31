import { JwtDecoderPageContent } from "@/components/pages/jwt-decoder-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("ja", "jwt-decoder")

export default function JaJwtDecoderPage() {
  return <JwtDecoderPageContent locale="ja" />
}
