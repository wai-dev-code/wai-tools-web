import type { SeoPageText } from "@/lib/i18n/messages/types"

export interface SeoPagesMessages {
  jsonFormatter: SeoPageText
  jsonValidator: SeoPageText
  jsonMinify: SeoPageText
  jsonToXml: SeoPageText
  jsonSort: SeoPageText
  base64Encoder: SeoPageText
  base64Decoder: SeoPageText
  base64File: SeoPageText
  base64Converter: SeoPageText
  base64Utilities: SeoPageText
}

export type SeoPageKey = keyof SeoPagesMessages

export const seoSlugToKey: Record<string, SeoPageKey> = {
  "json-formatter": "jsonFormatter",
  "json-validator": "jsonValidator",
  "json-minify": "jsonMinify",
  "json-to-xml": "jsonToXml",
  "json-sort": "jsonSort",
  "base64-encoder": "base64Encoder",
  "base64-decoder": "base64Decoder",
  "base64-file": "base64File",
  "base64-converter": "base64Converter",
  "base64-utilities": "base64Utilities",
}

export const seoLocalizedSlugs = Object.keys(seoSlugToKey)

export const seoZh: SeoPagesMessages = {
  jsonFormatter: {
    title: "JSON Formatter - 在线 JSON 格式化工具",
    description: "免费在线 JSON Formatter，支持美化、压缩、校验、排序、树形视图与语法高亮。",
    keywords: ["json formatter", "json 格式化", "json beautify", "json 美化"],
    instruction: "粘贴 JSON 后点击「格式化」，右侧显示美化结果。支持树形视图、语法高亮与自动换行。",
  },
  jsonValidator: {
    title: "JSON Validator - 在线 JSON 校验工具",
    description: "免费 JSON Validator，精确定位错误行号与列号，支持错误高亮与详细提示。",
    keywords: ["json validator", "json 校验", "json validate", "json 验证"],
    instruction: "粘贴 JSON 后自动校验；无效时显示行号、列号并高亮错误位置。",
  },
  jsonMinify: {
    title: "JSON Minify - 在线 JSON 压缩工具",
    description: "免费 JSON Minify，一键压缩 JSON 并显示原始与压缩后体积对比。",
    keywords: ["json minify", "json 压缩", "json compress"],
    instruction: "粘贴 JSON 后点击「压缩」，查看 Minified Size 与节省比例。",
  },
  jsonToXml: {
    title: "JSON to XML - 在线 JSON 转 XML",
    description: "免费 JSON to XML 转换器，支持 JSON 与 XML 双向互转。",
    keywords: ["json to xml", "json 转 xml", "xml to json"],
    instruction: "粘贴 JSON 点「转 XML」；粘贴 XML 点「转 JSON」。",
  },
  jsonSort: {
    title: "JSON Sort - 在线 JSON 键排序",
    description: "免费 JSON Sort，按 key 升序或降序递归排序 JSON 对象。",
    keywords: ["json sort", "json 排序", "sort json keys"],
    instruction: "点击「排序」在升序/降序间切换，递归排列所有对象 key。",
  },
  base64Encoder: {
    title: "Base64 Encoder - 在线 Base64 编码工具",
    description: "免费在线 Base64 Encoder，支持 UTF-8 文本编码、URL 安全 Base64 与智能识别。",
    keywords: ["base64 encoder", "base64 编码", "base64 encode"],
    instruction: "左侧输入源数据，右侧显示编码结果。支持标准 Base64、URL 安全 Base64 与智能识别。",
  },
  base64Decoder: {
    title: "Base64 Decoder - 在线 Base64 解码工具",
    description: "免费在线 Base64 Decoder，快速解码 Base64 字符串，支持 URL 安全格式与智能识别。",
    keywords: ["base64 decoder", "base64 解码", "base64 decode"],
    instruction: "粘贴 Base64 到左侧，点击解码或智能识别，右侧显示解码结果。",
  },
  base64File: {
    title: "Base64 File - 文件 Base64 编解码",
    description: "免费 Base64 文件工具，上传文件转 Base64、Base64 还原下载，支持图片预览。",
    keywords: ["base64 file", "file to base64", "base64 to file", "图片 base64"],
    instruction: "上传文件或粘贴 Base64/Data URI，左侧输入后右侧实时输出并识别文件类型，支持图片预览与下载。",
  },
  base64Converter: {
    title: "Base64 Converter - Hex / Data URI 转换",
    description: "免费 Base64 格式转换：Hex ↔ Base64、Data URI 生成与解析。",
    keywords: ["base64 converter", "base64 to hex", "hex to base64", "data uri"],
    instruction: "选择转换方向后，左侧输入、右侧实时显示结果。支持文本/Data URI/Hex/Base64 互转。",
  },
  base64Utilities: {
    title: "Base64 Utilities - 校验与清理工具",
    description: "Base64 实用工具：校验有效性、去除空白、字节统计与格式检测。",
    keywords: ["base64 validator", "base64 校验", "base64 clean", "base64 utilities"],
    instruction: "校验 Base64 有效性、去除空白字符，查看字节统计与输入类型检测。",
  },
}

export const seoEn: SeoPagesMessages = {
  jsonFormatter: {
    title: "JSON Formatter - Online JSON Beautifier",
    description: "Free JSON formatter with beautify, minify, validate, sort, tree view, and syntax highlighting.",
    keywords: ["json formatter", "json beautify", "json prettify", "format json online"],
    instruction: "Paste JSON and click Format. Results appear on the right with optional tree view.",
  },
  jsonValidator: {
    title: "JSON Validator - Validate JSON Online",
    description: "Free JSON validator with precise line/column errors and syntax highlighting.",
    keywords: ["json validator", "validate json", "json syntax check"],
    instruction: "Paste JSON — invalid syntax shows line, column, and highlighted errors automatically.",
  },
  jsonMinify: {
    title: "JSON Minify - Compress JSON Online",
    description: "Free JSON minifier. One-click compress with before/after size comparison.",
    keywords: ["json minify", "json compress", "minify json online"],
    instruction: "Paste JSON and click Minify. See minified size and savings percentage.",
  },
  jsonToXml: {
    title: "JSON to XML - Convert JSON & XML Online",
    description: "Free JSON ↔ XML converter. Bidirectional conversion in your browser.",
    keywords: ["json to xml", "xml to json", "json xml converter"],
    instruction: "Paste JSON and click To XML, or paste XML and click To JSON.",
  },
  jsonSort: {
    title: "JSON Sort - Sort JSON Keys Online",
    description: "Free JSON key sorter. Recursively sort object keys ascending or descending.",
    keywords: ["json sort", "sort json keys", "json key sorter"],
    instruction: "Click Sort to toggle ascending/descending — all nested keys are sorted recursively.",
  },
  base64Encoder: {
    title: "Base64 Encoder - Encode Text Online",
    description: "Free Base64 encoder for UTF-8 text, URL-safe Base64, and smart auto-detect.",
    keywords: ["base64 encoder", "base64 encode", "encode to base64"],
    instruction: "Enter source text on the left. Encoded Base64 appears on the right.",
  },
  base64Decoder: {
    title: "Base64 Decoder - Decode Base64 Online",
    description: "Free Base64 decoder with URL-safe support and smart auto-detect.",
    keywords: ["base64 decoder", "base64 decode", "decode base64"],
    instruction: "Paste Base64 on the left, click Decode or Smart — plain text shows on the right.",
  },
  base64File: {
    title: "Base64 File - Encode & Decode Files",
    description: "Upload files to Base64, decode Base64 to download, with image preview.",
    keywords: ["base64 file", "file to base64", "base64 to file", "image base64"],
    instruction: "Upload a file or paste Base64/Data URI. Results update live with type detection and preview.",
  },
  base64Converter: {
    title: "Base64 Converter - Hex & Data URI",
    description: "Convert between Hex, Base64, Data URI, and plain text — live in browser.",
    keywords: ["base64 converter", "base64 to hex", "hex to base64", "data uri"],
    instruction: "Pick a conversion direction, type on the left — results update on the right in real time.",
  },
  base64Utilities: {
    title: "Base64 Utilities - Validate & Clean",
    description: "Validate Base64, trim whitespace, byte stats, and input type detection.",
    keywords: ["base64 validator", "base64 clean", "base64 utilities"],
    instruction: "Validate Base64, remove whitespace, and inspect byte stats and detected input type.",
  },
}

export const seoJa: SeoPagesMessages = {
  jsonFormatter: {
    title: "JSON Formatter - オンライン JSON 整形",
    description: "無料 JSON フォーマッター。美化、圧縮、検証、ソート、ツリービュー、ハイライト対応。",
    keywords: ["json formatter", "json 整形", "json beautify"],
    instruction: "JSON を貼り付けて「整形」をクリック。右側に結果が表示されます。",
  },
  jsonValidator: {
    title: "JSON Validator - オンライン JSON 検証",
    description: "無料 JSON バリデーター。行/列番号でエラー位置を特定、ハイライト表示。",
    keywords: ["json validator", "json 検証", "json validate"],
    instruction: "JSON を貼り付けると自動検証。無効な場合は行・列とエラー位置を表示。",
  },
  jsonMinify: {
    title: "JSON Minify - オンライン JSON 圧縮",
    description: "無料 JSON 圧縮ツール。ワンクリック圧縮とサイズ比較。",
    keywords: ["json minify", "json 圧縮", "json compress"],
    instruction: "JSON を貼り付けて「圧縮」。圧縮後サイズと削減率を確認。",
  },
  jsonToXml: {
    title: "JSON to XML - オンライン相互変換",
    description: "無料 JSON ↔ XML コンバーター。ブラウザ内で双方向変換。",
    keywords: ["json to xml", "xml to json", "json 変換"],
    instruction: "JSON を貼り付けて XML へ、または XML を貼り付けて JSON へ。",
  },
  jsonSort: {
    title: "JSON Sort - キーソートツール",
    description: "無料 JSON キーソート。オブジェクト key を昇順/降順で再帰ソート。",
    keywords: ["json sort", "json ソート", "sort json keys"],
    instruction: "「ソート」で昇順/降順を切替 — ネストされた key も再帰的にソート。",
  },
  base64Encoder: {
    title: "Base64 Encoder - オンラインエンコード",
    description: "UTF-8 テキストの Base64 エンコード。URL 安全形式と自動判別。",
    keywords: ["base64 encoder", "base64 エンコード"],
    instruction: "左にソースを入力。右に Base64 エンコード結果が表示されます。",
  },
  base64Decoder: {
    title: "Base64 Decoder - オンラインデコード",
    description: "Base64 文字列をデコード。URL 安全形式と自動判別対応。",
    keywords: ["base64 decoder", "base64 デコード"],
    instruction: "左に Base64 を貼り付け、デコードまたはスマート判別 — 右に結果。",
  },
  base64File: {
    title: "Base64 File - ファイル変換",
    description: "ファイルを Base64 に、Base64 をファイルに。画像プレビュー対応。",
    keywords: ["base64 file", "file to base64", "base64 to file"],
    instruction: "ファイルをアップロードまたは Base64/Data URI を貼付。リアルタイムで型判別とプレビュー。",
  },
  base64Converter: {
    title: "Base64 Converter - Hex / Data URI",
    description: "Hex、Base64、Data URI、テキスト間の相互変換。",
    keywords: ["base64 converter", "hex to base64", "data uri"],
    instruction: "変換方向を選び左側に入力 — 右側がリアルタイム更新。",
  },
  base64Utilities: {
    title: "Base64 Utilities - 検証とクリーン",
    description: "Base64 検証、空白除去、バイト統計、入力型検出。",
    keywords: ["base64 validator", "base64 検証", "base64 utilities"],
    instruction: "Base64 の有効性を検証し、空白を除去。バイト統計と型検出。",
  },
}

export function getSeoPageKey(slug: string): SeoPageKey | undefined {
  return seoSlugToKey[slug]
}
