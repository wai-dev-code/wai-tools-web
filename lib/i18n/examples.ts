import type { Locale } from "@/lib/i18n/config"
import {
  base64ConvertExamples,
  base64Examples,
  base64FileExamples,
  jsonFormatterExamples,
  type Base64Example,
  type JsonFormatterExample,
  type ToolExampleItem,
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
