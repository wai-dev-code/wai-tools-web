import { JwtDecoderPageContent } from "@/components/pages/jwt-decoder-page-content"
import { generateLocalizedToolMetadata } from "@/lib/i18n"

export const metadata = generateLocalizedToolMetadata("en", "jwt-decoder")

export default function JwtDecoderPage() {
  return <JwtDecoderPageContent locale="en" />
}
