import type { Locale } from "@/lib/i18n/config"
import type { LocalizedToolSlug } from "@/lib/i18n/localized-tool-slug"
import type { ToolPageSeoContent } from "@/lib/i18n/messages/tool-page-content-types"
import { jsonFormatterContent } from "./json-formatter"
import { base64Content } from "./base64"
import { urlEncoderContent } from "./url-encoder"
import { timestampContent } from "./timestamp"
import { uuidGeneratorContent } from "./uuid-generator"
import { jwtDecoderContent } from "./jwt-decoder"
import { regexTesterContent } from "./regex-tester"
import { hashGeneratorContent } from "./hash-generator"
import { qrCodeGeneratorContent } from "./qr-code-generator"
import { passwordGeneratorContent } from "./password-generator"
import { htmlEncoderContent } from "./html-encoder"
import { textDiffContent } from "./text-diff"
import { cronParserContent } from "./cron-parser"
import { colorConverterContent } from "./color-converter"

const contentBySlug: Record<LocalizedToolSlug, Record<Locale, ToolPageSeoContent>> = {
  "json-formatter": jsonFormatterContent,
  base64: base64Content,
  "url-encoder": urlEncoderContent,
  timestamp: timestampContent,
  "uuid-generator": uuidGeneratorContent,
  "jwt-decoder": jwtDecoderContent,
  "regex-tester": regexTesterContent,
  "hash-generator": hashGeneratorContent,
  "qr-code-generator": qrCodeGeneratorContent,
  "password-generator": passwordGeneratorContent,
  "html-encoder": htmlEncoderContent,
  "text-diff": textDiffContent,
  "cron-parser": cronParserContent,
  "color-converter": colorConverterContent,
}

export function getToolPageContent(slug: LocalizedToolSlug, locale: Locale): ToolPageSeoContent {
  return contentBySlug[slug][locale]
}
