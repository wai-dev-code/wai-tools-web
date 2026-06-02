import type { Locale } from "@/lib/i18n/config"
import {
  base64ConvertExamples,
  base64Examples,
  base64FileExamples,
  jsonFormatterExamples,
  jwtDecoderExamples,
  timestampExamples,
  urlEncoderExamples,
  uuidGeneratorExamples,
  regexTesterExamples,
  type Base64Example,
  type JsonFormatterExample,
  type JwtDecoderExample,
  type TimestampExample,
  type ToolExampleItem,
  type UrlEncoderExample,
  type UuidGeneratorExample,
} from "@/lib/tool-examples"
import { getMessages } from "@/lib/i18n"

export function getJsonFormatterExamples(locale: Locale): ToolExampleItem<JsonFormatterExample>[] {
  const labels = getMessages(locale).jsonTool.examples
  return jsonFormatterExamples.map((ex) => ({
    ...ex,
    label: labels[ex.id]?.label ?? ex.label,
    description: labels[ex.id]?.description ?? ex.description,
  }))
}

function mapBase64Examples(
  locale: Locale,
  list: ToolExampleItem<Base64Example>[]
): ToolExampleItem<Base64Example>[] {
  const labels = getMessages(locale).base64Tool.examples
  return list.map((ex) => ({
    ...ex,
    label: labels[ex.id]?.label ?? ex.label,
    description: labels[ex.id]?.description ?? ex.description,
  }))
}

export function getBase64Examples(locale: Locale) {
  return mapBase64Examples(locale, base64Examples)
}

export function getBase64ConvertExamples(locale: Locale) {
  return mapBase64Examples(locale, base64ConvertExamples)
}

export function getBase64FileExamples(locale: Locale) {
  return mapBase64Examples(locale, base64FileExamples)
}

function mapToolExamples<T>(
  locale: Locale,
  list: ToolExampleItem<T>[],
  examplesKey: "urlTool" | "jwtTool" | "timestampTool" | "uuidTool" | "regexTool"
): ToolExampleItem<T>[] {
  const labels = getMessages(locale)[examplesKey].examples
  return list.map((ex) => ({
    ...ex,
    label: labels[ex.id]?.label ?? ex.label,
    description: labels[ex.id]?.description ?? ex.description,
  }))
}

export function getUrlEncoderExamples(locale: Locale): ToolExampleItem<UrlEncoderExample>[] {
  return mapToolExamples(locale, urlEncoderExamples, "urlTool")
}

export function getJwtDecoderExamples(locale: Locale): ToolExampleItem<JwtDecoderExample>[] {
  return mapToolExamples(locale, jwtDecoderExamples, "jwtTool")
}

export function getTimestampExamples(locale: Locale): ToolExampleItem<TimestampExample>[] {
  return mapToolExamples(locale, timestampExamples, "timestampTool")
}

export function getUuidGeneratorExamples(locale: Locale): ToolExampleItem<UuidGeneratorExample>[] {
  return mapToolExamples(locale, uuidGeneratorExamples, "uuidTool")
}

export function getRegexTesterExamples(locale: Locale): ToolExampleItem<import("@/lib/tool-examples").RegexTesterExample>[] {
  return mapToolExamples(locale, regexTesterExamples, "regexTool")
}
