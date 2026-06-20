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
  urlEncode: SeoPageText
  urlDecode: SeoPageText
  queryStringParser: SeoPageText
  unixTimestamp: SeoPageText
  epochConverter: SeoPageText
  jwtDebugger: SeoPageText
  md5Generator: SeoPageText
  sha256Generator: SeoPageText
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
  "url-encode": "urlEncode",
  "url-decode": "urlDecode",
  "query-string-parser": "queryStringParser",
  "unix-timestamp": "unixTimestamp",
  "epoch-converter": "epochConverter",
  "jwt-debugger": "jwtDebugger",
  "md5-generator": "md5Generator",
  "sha256-generator": "sha256Generator",
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
  urlEncode: {
    title: "URL Encode - 在线 URL 编码工具",
    description: "免费 URL Encode 工具，将文本编码为 URL 安全格式，支持 encodeURIComponent 与 encodeURI。",
    keywords: ["url encode", "url 编码", "encodeURIComponent", "percent encoding"],
    instruction: "左侧输入文本，右侧实时显示 URL 编码结果。可切换编码模式或解析 Query String。",
  },
  urlDecode: {
    title: "URL Decode - 在线 URL 解码工具",
    description: "免费 URL Decode 工具，快速解码 percent-encoded 字符串，支持 + 号与特殊字符。",
    keywords: ["url decode", "url 解码", "decodeURIComponent", "percent decode"],
    instruction: "粘贴已编码的 URL 或参数到左侧，右侧显示解码后的明文。",
  },
  queryStringParser: {
    title: "Query String Parser - URL 参数解析",
    description: "免费 Query String 解析器，将 URL 查询参数转为 JSON 对象，或从 JSON 构建 Query String。",
    keywords: ["query string parser", "url 参数解析", "query params", "url search params"],
    instruction: "选择「解析 Query」模式，粘贴 ?key=value&... 或完整 URL，右侧输出结构化 JSON。",
  },
  unixTimestamp: {
    title: "Unix Timestamp - 在线 Unix 时间戳转换",
    description: "免费 Unix Timestamp 转换器，秒/毫秒时间戳与可读日期双向互转，支持时区与 ISO8601。",
    keywords: ["unix timestamp", "unix 时间戳", "timestamp converter", "epoch time"],
    instruction: "输入 10 位或 13 位时间戳，或选择日期时间，下方显示多种格式输出。",
  },
  epochConverter: {
    title: "Epoch Converter - Unix Epoch 时间转换",
    description: "免费 Epoch Converter，Unix Epoch 与本地/UTC 日期时间互转，自动识别秒与毫秒。",
    keywords: ["epoch converter", "epoch time", "unix epoch", "时间戳转换"],
    instruction: "粘贴 Epoch 数值或日期，工具自动识别单位并显示转换结果，可一键复制。",
  },
  jwtDebugger: {
    title: "JWT Debugger - 在线 JWT 解码调试",
    description: "免费 JWT Debugger，解码 Header 与 Payload、查看 exp/iat 声明，本地运行不上传 Token。",
    keywords: ["jwt debugger", "jwt decode", "jwt 解码", "json web token"],
    instruction: "粘贴 JWT 到输入框，自动解析 Header、Payload 与 Signature，并以 JSON 格式化展示。",
  },
  md5Generator: {
    title: "MD5 Generator - 在线 MD5 哈希生成",
    description: "免费 MD5 Generator，输入文本即时计算 MD5 哈希值，支持 UTF-8，浏览器本地运算。",
    keywords: ["md5 generator", "md5 hash", "md5 生成", "md5 online"],
    instruction: "在输入框键入或粘贴文本，下方实时显示 MD5 及其他哈希算法结果，点击即可复制。",
  },
  sha256Generator: {
    title: "SHA256 Generator - 在线 SHA-256 哈希",
    description: "免费 SHA256 Generator，快速计算 SHA-256 摘要，适用于校验、指纹与开发调试。",
    keywords: ["sha256 generator", "sha256 hash", "sha-256", "sha256 online"],
    instruction: "输入任意文本，工具在本地计算 SHA-256 等哈希值，结果可复制用于比对或存储。",
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
  urlEncode: {
    title: "URL Encode - Encode Text for URLs Online",
    description: "Free URL encoder with encodeURIComponent, encodeURI, and live output in your browser.",
    keywords: ["url encode", "encodeURIComponent", "percent encoding", "url encoder"],
    instruction: "Type text on the left — encoded output updates on the right. Switch modes or parse query strings.",
  },
  urlDecode: {
    title: "URL Decode - Decode Percent-Encoded Strings",
    description: "Free URL decoder for percent-encoded URLs and query values, including + as space.",
    keywords: ["url decode", "decodeURIComponent", "percent decode", "url decoder"],
    instruction: "Paste an encoded URL or parameter on the left. Decoded plain text appears on the right.",
  },
  queryStringParser: {
    title: "Query String Parser - Parse URL Parameters",
    description: "Parse query strings to JSON or build query strings from JSON — bidirectional, in-browser.",
    keywords: ["query string parser", "url params", "query params", "search params"],
    instruction: "Choose Query Parse mode, paste ?key=value&... or a full URL — structured JSON shows on the right.",
  },
  unixTimestamp: {
    title: "Unix Timestamp - Convert Timestamps Online",
    description: "Free Unix timestamp converter: seconds/milliseconds ↔ readable dates with timezone and ISO8601.",
    keywords: ["unix timestamp", "timestamp converter", "epoch time", "unix time"],
    instruction: "Enter a 10- or 13-digit timestamp or pick a date — multiple output formats appear below.",
  },
  epochConverter: {
    title: "Epoch Converter - Unix Epoch Time Tool",
    description: "Convert Unix epoch to local/UTC datetime and back. Auto-detects seconds vs milliseconds.",
    keywords: ["epoch converter", "epoch time", "unix epoch", "timestamp convert"],
    instruction: "Paste an epoch value or datetime — the tool detects the unit and shows conversions you can copy.",
  },
  jwtDebugger: {
    title: "JWT Debugger - Decode JWT Tokens Online",
    description: "Free JWT debugger: decode header & payload, inspect exp/iat claims. Runs locally — no upload.",
    keywords: ["jwt debugger", "jwt decode", "json web token", "jwt parser"],
    instruction: "Paste a JWT — header, payload, and signature are parsed and formatted as JSON automatically.",
  },
  md5Generator: {
    title: "MD5 Generator - MD5 Hash Online",
    description: "Free MD5 generator: hash UTF-8 text instantly in your browser with one-click copy.",
    keywords: ["md5 generator", "md5 hash", "md5 online", "generate md5"],
    instruction: "Type or paste text — MD5 and other hash results update live below. Click to copy any value.",
  },
  sha256Generator: {
    title: "SHA256 Generator - SHA-256 Hash Online",
    description: "Free SHA-256 generator for checksums, fingerprints, and development debugging.",
    keywords: ["sha256 generator", "sha256 hash", "sha-256", "sha256 online"],
    instruction: "Enter any text — SHA-256 and related hashes are computed locally. Copy results for comparison.",
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
  urlEncode: {
    title: "URL Encode - オンライン URL エンコード",
    description: "無料 URL エンコーダー。encodeURIComponent / encodeURI 対応、ブラウザ内でリアルタイム出力。",
    keywords: ["url encode", "url エンコード", "encodeURIComponent"],
    instruction: "左にテキストを入力 — 右にエンコード結果。モード切替や Query 解析も可能。",
  },
  urlDecode: {
    title: "URL Decode - オンライン URL デコード",
    description: "パーセントエンコード文字列をデコード。+ をスペースとして処理。",
    keywords: ["url decode", "url デコード", "decodeURIComponent"],
    instruction: "エンコード済み URL やパラメータを左に貼付 — 右にデコード結果。",
  },
  queryStringParser: {
    title: "Query String Parser - URL パラメータ解析",
    description: "Query String を JSON に変換、または JSON から Query String を生成。双方向対応。",
    keywords: ["query string parser", "url パラメータ", "query params"],
    instruction: "「Query 解析」モードで ?key=value&... または URL を貼付 — 右に JSON 出力。",
  },
  unixTimestamp: {
    title: "Unix Timestamp - オンライン変換ツール",
    description: "Unix タイムスタンプ（秒/ミリ秒）と日時の双方向変換。タイムゾーン・ISO8601 対応。",
    keywords: ["unix timestamp", "タイムスタンプ", "epoch time"],
    instruction: "10 桁または 13 桁のタイムスタンプ、または日時を入力 — 複数形式で表示。",
  },
  epochConverter: {
    title: "Epoch Converter - Unix Epoch 変換",
    description: "Unix Epoch とローカル/UTC 日時の相互変換。秒とミリ秒を自動判別。",
    keywords: ["epoch converter", "epoch time", "unix epoch"],
    instruction: "Epoch 数値または日時を貼付 — 単位を自動判別し、変換結果をコピー可能。",
  },
  jwtDebugger: {
    title: "JWT Debugger - オンライン JWT デコード",
    description: "JWT の Header / Payload をデコード、exp / iat を確認。ローカル実行、アップロードなし。",
    keywords: ["jwt debugger", "jwt decode", "json web token"],
    instruction: "JWT を貼付 — Header、Payload、Signature が JSON 整形で自動表示。",
  },
  md5Generator: {
    title: "MD5 Generator - オンライン MD5 ハッシュ",
    description: "UTF-8 テキストの MD5 ハッシュをブラウザ内で即時計算。ワンクリックコピー。",
    keywords: ["md5 generator", "md5 hash", "md5 生成"],
    instruction: "テキストを入力 — MD5 などのハッシュがリアルタイム表示。クリックでコピー。",
  },
  sha256Generator: {
    title: "SHA256 Generator - オンライン SHA-256",
    description: "SHA-256 ダイジェストを高速計算。チェックサム・フィンガープリントに。",
    keywords: ["sha256 generator", "sha256 hash", "sha-256"],
    instruction: "任意のテキストを入力 — SHA-256 等をローカル計算。結果をコピーして比較。",
  },
}

export function getSeoPageKey(slug: string): SeoPageKey | undefined {
  return seoSlugToKey[slug]
}
