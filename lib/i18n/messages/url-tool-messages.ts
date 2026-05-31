import type { UrlEncodeMode } from "@/lib/url-utils"
import type { FaqItem } from "@/lib/i18n/messages/types"

export interface UrlToolMessages {
  modes: Record<UrlEncodeMode, string>
  swapDirection: string
  example: string
  input: string
  output: string
  clear: string
  copy: string
  inputPlaceholder: string
  inputPlaceholderQuery: string
  inputPlaceholderJson: string
  outputPlaceholder: string
  hint: string
  notify: {
    nothingToCopy: string
    copied: string
  }
  errors: {
    invalidJsonObject: string
    processFailed: string
  }
  examples: Record<string, { label: string; description: string }>
}

export interface UrlEncoderPageMessages {
  metaTitle: string
  metaDescription: string
  instructions: string[]
  faq: FaqItem[]
}

export const urlToolZh: UrlToolMessages = {
  modes: {
    "component-encode": "encodeURIComponent（参数编码）",
    "component-decode": "decodeURIComponent（参数解码）",
    "uri-encode": "encodeURI（完整 URL）",
    "uri-decode": "decodeURI（完整 URL）",
    "query-parse": "Query 解析 → JSON",
    "query-build": "JSON → Query 字符串",
  },
  swapDirection: "切换方向",
  example: "示例",
  input: "输入",
  output: "结果",
  clear: "清空",
  copy: "复制",
  inputPlaceholder: "输入待编码或解码的文本...",
  inputPlaceholderQuery: "name=value&key=value",
  inputPlaceholderJson: '{"key": "value"}',
  outputPlaceholder: "结果将显示在这里...",
  hint: "encodeURIComponent 用于 Query 参数值；encodeURI 用于完整 URL。解码时 + 号会按空格处理。",
  notify: { nothingToCopy: "没有可复制的内容", copied: "已复制到剪贴板" },
  errors: {
    invalidJsonObject: "请输入 JSON 对象，如 {\"key\": \"value\"}",
    processFailed: "处理失败",
  },
  examples: {
    "component-encode": { label: "参数编码", description: "encodeURIComponent" },
    "component-decode": { label: "参数解码", description: "decodeURIComponent" },
    "uri-encode": { label: "完整 URL 编码", description: "encodeURI" },
    "query-parse": { label: "Query 解析", description: "转为 JSON" },
    "query-build": { label: "Query 构建", description: "JSON 转 Query" },
  },
}

export const urlToolEn: UrlToolMessages = {
  modes: {
    "component-encode": "encodeURIComponent (param)",
    "component-decode": "decodeURIComponent (param)",
    "uri-encode": "encodeURI (full URL)",
    "uri-decode": "decodeURI (full URL)",
    "query-parse": "Query parse → JSON",
    "query-build": "JSON → Query string",
  },
  swapDirection: "Swap direction",
  example: "Example",
  input: "Input",
  output: "Output",
  clear: "Clear",
  copy: "Copy",
  inputPlaceholder: "Text to encode or decode...",
  inputPlaceholderQuery: "name=value&key=value",
  inputPlaceholderJson: '{"key": "value"}',
  outputPlaceholder: "Result appears here...",
  hint: "encodeURIComponent is for query values; encodeURI is for full URLs. + is treated as space when decoding.",
  notify: { nothingToCopy: "Nothing to copy", copied: "Copied to clipboard" },
  errors: {
    invalidJsonObject: "Enter a JSON object, e.g. {\"key\": \"value\"}",
    processFailed: "Processing failed",
  },
  examples: {
    "component-encode": { label: "Param encode", description: "encodeURIComponent" },
    "component-decode": { label: "Param decode", description: "decodeURIComponent" },
    "uri-encode": { label: "Full URL encode", description: "encodeURI" },
    "query-parse": { label: "Query parse", description: "To JSON" },
    "query-build": { label: "Query build", description: "JSON to query" },
  },
}

export const urlToolJa: UrlToolMessages = {
  modes: {
    "component-encode": "encodeURIComponent（パラメータ）",
    "component-decode": "decodeURIComponent（パラメータ）",
    "uri-encode": "encodeURI（URL 全体）",
    "uri-decode": "decodeURI（URL 全体）",
    "query-parse": "Query 解析 → JSON",
    "query-build": "JSON → Query 文字列",
  },
  swapDirection: "方向を切替",
  example: "サンプル",
  input: "入力",
  output: "結果",
  clear: "クリア",
  copy: "コピー",
  inputPlaceholder: "エンコード/デコードするテキスト...",
  inputPlaceholderQuery: "name=value&key=value",
  inputPlaceholderJson: '{"key": "value"}',
  outputPlaceholder: "結果はここに表示...",
  hint: "encodeURIComponent はクエリ値、encodeURI は URL 全体用。デコード時 + はスペースとして扱います。",
  notify: { nothingToCopy: "コピーする内容がありません", copied: "クリップボードにコピーしました" },
  errors: {
    invalidJsonObject: "JSON オブジェクトを入力してください（例: {\"key\": \"value\"}）",
    processFailed: "処理に失敗しました",
  },
  examples: {
    "component-encode": { label: "パラメータエンコード", description: "encodeURIComponent" },
    "component-decode": { label: "パラメータデコード", description: "decodeURIComponent" },
    "uri-encode": { label: "URL 全体エンコード", description: "encodeURI" },
    "query-parse": { label: "Query 解析", description: "JSON へ" },
    "query-build": { label: "Query 生成", description: "JSON から Query" },
  },
}

export const urlEncoderPageZh: UrlEncoderPageMessages = {
  metaTitle: "URL 编解码 - 免费在线工具",
  metaDescription: "URL / URI 编码解码，Query 字符串解析与构建，浏览器内运行。",
  instructions: [
    "支持 encodeURIComponent / decodeURIComponent（Query 参数）、encodeURI / decodeURI（完整 URL），以及 Query 与 JSON 互转。",
    "左侧输入、右侧实时输出。可使用「切换方向」在编码与解码模式间快速互换。",
  ],
  faq: [
    {
      q: "encodeURIComponent 和 encodeURI 有什么区别？",
      a: "encodeURIComponent 会编码 URL 中的特殊字符（如 ?、&、=），适合单个参数值；encodeURI 保留 URL 结构字符，适合编码完整链接。",
    },
    {
      q: "Query 中的 + 号如何处理？",
      a: "在 application/x-www-form-urlencoded 中 + 表示空格。解码参数时会将 + 转为空格。",
    },
  ],
}

export const urlEncoderPageEn: UrlEncoderPageMessages = {
  metaTitle: "URL Encoder/Decoder - Free Online Tool",
  metaDescription: "Encode/decode URLs and URIs, parse and build query strings. Runs in your browser.",
  instructions: [
    "Supports encodeURIComponent, decodeURIComponent, encodeURI, decodeURI, and Query ↔ JSON conversion.",
    "Input on the left, live output on the right. Use Swap direction to toggle encode/decode modes.",
  ],
  faq: [
    {
      q: "What's the difference between encodeURIComponent and encodeURI?",
      a: "encodeURIComponent encodes special characters like ? & = for a single value; encodeURI keeps URL structure for full links.",
    },
    {
      q: "How is + handled in query strings?",
      a: "In application/x-www-form-urlencoded, + means space. Param decoding converts + to spaces.",
    },
  ],
}

export const urlEncoderPageJa: UrlEncoderPageMessages = {
  metaTitle: "URL エンコード/デコード - 無料オンラインツール",
  metaDescription: "URL/URI のエンコード・デコード、Query 文字列の解析と生成。ブラウザ内で動作。",
  instructions: [
    "encodeURIComponent、decodeURIComponent、encodeURI、decodeURI、Query ↔ JSON に対応。",
    "左が入力、右がリアルタイム出力。「方向を切替」でエンコード/デコードを切り替えられます。",
  ],
  faq: [
    {
      q: "encodeURIComponent と encodeURI の違いは？",
      a: "encodeURIComponent は ? & = などを含むパラメータ値向け。encodeURI は URL 構造を保ったまま全体をエンコードします。",
    },
    {
      q: "Query の + はどう扱われますか？",
      a: "application/x-www-form-urlencoded では + はスペースです。デコード時に + はスペースに変換されます。",
    },
  ],
}
