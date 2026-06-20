import type { Locale } from "@/lib/i18n/config"
import type { LocalizedToolSlug } from "@/lib/i18n/localized-tool-slug"

export interface ToolWorkflowStep {
  targetSlug: LocalizedToolSlug
  labels: Record<Locale, string>
}

/** Suggested next-step tools for common developer workflows */
export const TOOL_WORKFLOW_MAP: Partial<Record<LocalizedToolSlug, ToolWorkflowStep[]>> = {
  "jwt-decoder": [
    {
      targetSlug: "json-formatter",
      labels: {
        en: "Format decoded JSON",
        zh: "格式化解码后的 JSON",
        ja: "デコードした JSON を整形",
      },
    },
    {
      targetSlug: "timestamp",
      labels: {
        en: "Convert exp / iat timestamps",
        zh: "转换 exp / iat 时间戳",
        ja: "exp / iat タイムスタンプを変換",
      },
    },
  ],
  "url-encoder": [
    {
      targetSlug: "json-formatter",
      labels: {
        en: "Pretty-print query JSON",
        zh: "美化 Query 解析 JSON",
        ja: "Query JSON を整形",
      },
    },
    {
      targetSlug: "base64",
      labels: {
        en: "Base64 encode result",
        zh: "对结果做 Base64 编码",
        ja: "結果を Base64 エンコード",
      },
    },
  ],
  base64: [
    {
      targetSlug: "json-formatter",
      labels: {
        en: "Format decoded text as JSON",
        zh: "将解码文本格式化为 JSON",
        ja: "デコード結果を JSON 整形",
      },
    },
    {
      targetSlug: "hash-generator",
      labels: {
        en: "Hash the decoded content",
        zh: "对解码内容计算哈希",
        ja: "デコード内容のハッシュを計算",
      },
    },
  ],
  "hash-generator": [
    {
      targetSlug: "base64",
      labels: {
        en: "Base64-encode input text",
        zh: "将输入文本 Base64 编码",
        ja: "入力テキストを Base64 エンコード",
      },
    },
  ],
  "regex-tester": [
    {
      targetSlug: "url-encoder",
      labels: {
        en: "URL-encode matched text",
        zh: "对匹配文本 URL 编码",
        ja: "マッチしたテキストを URL エンコード",
      },
    },
  ],
  "html-encoder": [
    {
      targetSlug: "url-encoder",
      labels: {
        en: "URL-encode HTML entities",
        zh: "对 HTML 实体做 URL 编码",
        ja: "HTML エンティティを URL エンコード",
      },
    },
  ],
  "text-diff": [
    {
      targetSlug: "json-formatter",
      labels: {
        en: "Format text as JSON",
        zh: "将文本格式化为 JSON",
        ja: "テキストを JSON 整形",
      },
    },
  ],
}

export function getToolWorkflowSteps(slug: string): ToolWorkflowStep[] {
  if (!(slug in TOOL_WORKFLOW_MAP)) return []
  return TOOL_WORKFLOW_MAP[slug as LocalizedToolSlug] ?? []
}
