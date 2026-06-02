import type { Locale } from "@/lib/i18n/config"
import { localizeHref } from "@/lib/i18n"
import type { RegexToolMessages } from "@/lib/i18n/messages/regex-tool-messages"

export interface RegexHubLink {
  id: string
  href: string
  label: string
}

export function getRegexHubLinks(locale: Locale, labels: RegexToolMessages["hubLinks"]): RegexHubLink[] {
  const base64 = localizeHref(locale, "tools/base64")
  const urlTool = localizeHref(locale, "tools/url-encoder")
  return [
    { id: "json-formatter", href: localizeHref(locale, "tools/json-formatter"), label: labels.jsonFormatter },
    { id: "json-validator", href: localizeHref(locale, "json-validator"), label: labels.jsonValidator },
    { id: "base64-encoder", href: base64, label: labels.base64Encoder },
    { id: "base64-decoder", href: base64, label: labels.base64Decoder },
    { id: "uuid-generator", href: localizeHref(locale, "tools/uuid-generator"), label: labels.uuidGenerator },
    { id: "timestamp", href: localizeHref(locale, "tools/timestamp"), label: labels.timestampConverter },
    { id: "url-encoder", href: urlTool, label: labels.urlEncoder },
    { id: "url-decoder", href: urlTool, label: labels.urlDecoder },
  ]
}
