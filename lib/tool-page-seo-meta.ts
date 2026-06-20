import type { Locale } from "@/lib/i18n/config"
import type { LocalizedToolSlug } from "@/lib/i18n/localized-tool-slug"

export interface ToolSeoMeta {
  metaTitle: string
  metaDescription: string
}

/** 工具页 SEO：meta description 控制在 120–160 字符 */
const en: Record<LocalizedToolSlug, ToolSeoMeta> = {
  "json-formatter": {
    metaTitle: "JSON Formatter - Free Online Tool",
    metaDescription:
      "Format, validate and beautify JSON online instantly. Free JSON formatter with syntax highlighting, tree view, and privacy-first browser processing.",
  },
  base64: {
    metaTitle: "Base64 Encode/Decode - Free Online Tool",
    metaDescription:
      "Encode and decode Base64 text and files online. URL-safe mode, Hex/Data URI conversion, image preview. Free, fast, runs in your browser — no upload.",
  },
  "url-encoder": {
    metaTitle: "URL Encoder/Decoder - Free Online Tool",
    metaDescription:
      "Encode and decode URLs and query strings online. encodeURIComponent, encodeURI, Query ↔ JSON. Free URL encoder with privacy-first browser processing.",
  },
  timestamp: {
    metaTitle: "Timestamp Converter - Free Online Tool",
    metaDescription:
      "Convert Unix timestamps to dates and back. Auto-detect seconds/ms, UTC and local time, ISO 8601 output. Free, instant, runs in your browser.",
  },
  "uuid-generator": {
    metaTitle: "UUID Generator - Free Online Tool",
    metaDescription:
      "Generate UUID v4 online instantly. Batch mode, uppercase, no-hyphens, braces format. Copy or download. Crypto-random, browser-based, no upload.",
  },
  "jwt-decoder": {
    metaTitle: "JWT Decoder - Free Online Tool",
    metaDescription:
      "Decode JWT tokens online instantly. View header, payload, exp/iat status. Free JWT decoder with privacy-first browser processing — no server upload.",
  },
  "regex-tester": {
    metaTitle: "Regex Tester - Free Online Tool",
    metaDescription:
      "Test regular expressions online with live match highlighting and capture groups. JavaScript RegExp, pattern library. Free, instant, browser-based.",
  },
  "hash-generator": {
    metaTitle: "Hash Generator - MD5 & SHA256 Online",
    metaDescription:
      "Compute MD5, SHA-1, SHA-256, SHA-512 hashes online instantly. Hex digests with one-click copy. Free hash calculator — runs in your browser.",
  },
  "qr-code-generator": {
    metaTitle: "QR Code Generator - Free Online Tool",
    metaDescription:
      "Create QR codes for text, URLs, email, phone, and WiFi online. Live preview and PNG download. Free QR generator — browser-based, no upload.",
  },
  "password-generator": {
    metaTitle: "Password Generator - Free Online Tool",
    metaDescription:
      "Generate strong random passwords online. Custom length, charset, strength meter, crypto-random. Free password generator — runs in your browser.",
  },
  "html-encoder": {
    metaTitle: "HTML Encoder/Decoder - Free Online Tool",
    metaDescription:
      "Encode and decode HTML entities online. Named and numeric entities, optional non-ASCII. Free HTML encoder — runs in your browser, no upload.",
  },
  "text-diff": {
    metaTitle: "Text Diff - Free Line-by-Line Compare",
    metaDescription:
      "Compare two texts line by line with color highlighting. Free online diff viewer for code and configs — browser-based, no upload.",
  },
  "cron-parser": {
    metaTitle: "Cron Parser - Free Expression Decoder",
    metaDescription:
      "Parse standard 5-field cron expressions with human-readable summary. Free cron decoder — runs in your browser, no upload.",
  },
  "color-converter": {
    metaTitle: "Color Converter - HEX/RGB/HSL Online",
    metaDescription:
      "Convert colors between HEX, RGB, and HSL with live preview. Free online color converter — browser-based, ideal for CSS and design.",
  },
}

const zh: Record<LocalizedToolSlug, ToolSeoMeta> = {
  "json-formatter": {
    metaTitle: "JSON 格式化 - 免费在线工具",
    metaDescription:
      "在线格式化、校验、美化 JSON 数据。语法高亮、树形视图、错误定位。免费 JSON 格式化工具，浏览器内处理，不上传服务器。",
  },
  base64: {
    metaTitle: "Base64 编解码 - 免费在线工具",
    metaDescription:
      "在线 Base64 编码与解码，支持文件、Hex/Data URI 转换与图片预览。URL 安全模式。免费、快速，浏览器内运行，不上传数据。",
  },
  "url-encoder": {
    metaTitle: "URL 编解码 - 免费在线工具",
    metaDescription:
      "在线 URL/URI 编码解码，Query 字符串解析与 JSON 互转。encodeURIComponent、encodeURI 全支持。免费，浏览器内处理，隐私优先。",
  },
  timestamp: {
    metaTitle: "时间戳转换 - 免费在线工具",
    metaDescription:
      "Unix 时间戳与日期在线互转。自动识别秒/毫秒，UTC 与本地时区，ISO 8601 输出。免费、即时，浏览器内运行，不上传数据。",
  },
  "uuid-generator": {
    metaTitle: "UUID 生成器 - 免费在线工具",
    metaDescription:
      "在线批量生成 UUID v4。支持大写、无连字符、花括号格式，一键复制或下载。密码学随机，浏览器内生成，不上传服务器。",
  },
  "jwt-decoder": {
    metaTitle: "JWT 解码器 - 免费在线工具",
    metaDescription:
      "在线解码 JWT Token，查看 Header、Payload 及 exp/iat 过期状态。免费 JWT 解码工具，浏览器内处理，不上传服务器。",
  },
  "regex-tester": {
    metaTitle: "正则表达式测试 - 免费在线工具",
    metaDescription:
      "在线测试正则表达式，实时高亮匹配与捕获组。JavaScript RegExp，内置模式库。免费、即时调试，浏览器内运行，不上传数据。",
  },
  "hash-generator": {
    metaTitle: "哈希生成器 - MD5/SHA256 在线计算",
    metaDescription:
      "在线计算 MD5、SHA-1、SHA-256、SHA-512 哈希值。十六进制摘要，一键复制。免费哈希计算器，浏览器内运行，不上传数据。",
  },
  "qr-code-generator": {
    metaTitle: "二维码生成器 - 免费在线工具",
    metaDescription:
      "在线生成文本、网址、邮箱、电话、WiFi 二维码。实时预览，PNG 下载。免费 QR 生成器，浏览器内生成，不上传服务器。",
  },
  "password-generator": {
    metaTitle: "密码生成器 - 免费在线强密码工具",
    metaDescription:
      "在线生成强随机密码。可调长度与字符集，实时强度检测，crypto 随机。免费密码生成器，浏览器内运行，不上传数据。",
  },
  "html-encoder": {
    metaTitle: "HTML 编解码 - 免费在线工具",
    metaDescription:
      "在线 HTML 实体编码与解码，支持命名与数字实体。免费 HTML 编码器，浏览器内处理，不上传数据。",
  },
  "text-diff": {
    metaTitle: "文本对比 - 免费在线逐行 Diff",
    metaDescription:
      "在线逐行文本对比，高亮新增、删除与修改。免费 diff 工具，适用于代码与配置，浏览器内运行。",
  },
  "cron-parser": {
    metaTitle: "Cron 解析器 - 免费在线解读",
    metaDescription:
      "在线解析标准 5 段 Cron 表达式，生成可读摘要。免费 Cron 解码器，浏览器内运行，不上传数据。",
  },
  "color-converter": {
    metaTitle: "颜色转换器 - HEX/RGB/HSL 在线互转",
    metaDescription:
      "在线 HEX、RGB、HSL 颜色互转，实时预览。免费颜色转换器，浏览器内运行，适合前端与设计开发。",
  },
}

const ja: Record<LocalizedToolSlug, ToolSeoMeta> = {
  "json-formatter": {
    metaTitle: "JSON フォーマッター - 無料オンラインツール",
    metaDescription:
      "JSON をオンラインで整形・検証・美化。シンタックスハイライト、ツリービュー、エラー表示。無料、ブラウザ内処理、サーバー非送信。",
  },
  base64: {
    metaTitle: "Base64 エンコード/デコード - 無料ツール",
    metaDescription:
      "Base64 のオンラインエンコード・デコード。ファイル、Hex/Data URI 変換、画像プレビュー、URL セーフ対応。無料、ブラウザ内で高速処理。",
  },
  "url-encoder": {
    metaTitle: "URL エンコード/デコード - 無料ツール",
    metaDescription:
      "URL/URI のオンラインエンコード・デコード。Query ↔ JSON、encodeURIComponent/encodeURI 対応。無料、ブラウザ内処理、プライバシー優先。",
  },
  timestamp: {
    metaTitle: "タイムスタンプ変換 - 無料オンラインツール",
    metaDescription:
      "Unix タイムスタンプと日時をオンラインで相互変換。秒/ミリ秒自動検出、UTC/ローカル、ISO 8601 出力。無料、ブラウザ内で即時変換。",
  },
  "uuid-generator": {
    metaTitle: "UUID ジェネレーター - 無料オンラインツール",
    metaDescription:
      "UUID v4 をオンラインで一括生成。大文字、ハイフンなし、波括弧形式、コピーとダウンロード。暗号学的ランダム、ブラウザ内生成。",
  },
  "jwt-decoder": {
    metaTitle: "JWT デコーダー - 無料オンラインツール",
    metaDescription:
      "JWT トークンをオンラインでデコード。Header、Payload、exp/iat 状態を表示。無料 JWT デコーダー、ブラウザ内処理、サーバー非送信。",
  },
  "regex-tester": {
    metaTitle: "正規表現テスター - 無料オンラインツール",
    metaDescription:
      "正規表現をオンラインでテスト。リアルタイムハイライトとキャプチャグループ。JavaScript RegExp、パターンライブラリ付き。無料、ブラウザ内実行。",
  },
  "hash-generator": {
    metaTitle: "ハッシュジェネレーター - MD5/SHA256",
    metaDescription:
      "MD5、SHA-1、SHA-256、SHA-512 をオンラインで同時計算。16 進ダイジェスト、ワンクリックコピー。無料ハッシュ計算、ブラウザ内処理。",
  },
  "qr-code-generator": {
    metaTitle: "QR コードジェネレーター - 無料ツール",
    metaDescription:
      "テキスト、URL、メール、電話、WiFi の QR コードをオンライン生成。ライブプレビュー、PNG ダウンロード。無料、ブラウザ内生成、非アップロード。",
  },
  "password-generator": {
    metaTitle: "パスワードジェネレーター - 無料ツール",
    metaDescription:
      "強力なランダムパスワードをオンライン生成。長さ・文字セット調整、強度メーター、crypto ランダム。無料、ブラウザ内実行、非アップロード。",
  },
  "html-encoder": {
    metaTitle: "HTML エンコード/デコード - 無料ツール",
    metaDescription:
      "HTML エンティティのオンラインエンコード・デコード。名前付き・数値エンティティ対応。無料、ブラウザ内処理、非アップロード。",
  },
  "text-diff": {
    metaTitle: "テキスト差分 - 行単位オンライン比較",
    metaDescription:
      "2 つのテキストを行単位で比較、色分けハイライト。コード・設定向け無料 diff ビューア、ブラウザ内完結。",
  },
  "cron-parser": {
    metaTitle: "Cron パーサー - 無料オンライン解読",
    metaDescription:
      "標準 5 フィールド Cron 式を解析し読みやすい要約を表示。無料 Cron デコーダー、ブラウザ内実行、非アップロード。",
  },
  "color-converter": {
    metaTitle: "カラー変換 - HEX/RGB/HSL オンライン",
    metaDescription:
      "HEX・RGB・HSL を相互変換、ライブプレビュー付き。無料オンラインカラー変換、CSS・デザイン向け、ブラウザ内完結。",
  },
}

export const toolPageSeoMeta: Record<Locale, Record<LocalizedToolSlug, ToolSeoMeta>> = {
  en,
  zh,
  ja,
}

export function getToolSeoMeta(slug: LocalizedToolSlug, locale: Locale): ToolSeoMeta {
  return toolPageSeoMeta[locale][slug]
}
