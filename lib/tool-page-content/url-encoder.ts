import type { ToolPageSeoContent } from "@/lib/i18n/messages/tool-page-content-types"

const en: ToolPageSeoContent = {
  whatIs: {
    title: "What is URL Encode/Decode?",
    paragraphs: [
      "URL Encode/Decode is an online tool that converts special characters in URLs and query strings into percent-encoded format and back. URLs can only contain a limited set of ASCII characters — spaces, Unicode text, and symbols like & and = must be encoded before transmission to prevent parsing errors and security issues.",
      "Web developers use URL encoding when building API requests, OAuth redirect URLs, form submissions, and deep links. encodeURIComponent handles individual parameter values, while encodeURI preserves URL structure characters. Misunderstanding which function to use is a common source of broken links and failed API calls.",
      "WaiHub's URL tool supports component-level encoding (encodeURIComponent), full URL encoding (encodeURI), and bidirectional Query string ↔ JSON conversion. All processing happens in your browser, keeping sensitive redirect URLs and API parameters private.",
    ],
    benefits: [
      "encodeURIComponent for query parameter values",
      "encodeURI for full URL encoding",
      "Query string parse and build from JSON",
      "Swap direction between encode and decode",
      "Handle Unicode and special characters correctly",
      "Privacy-first browser processing",
    ],
  },
  features: {
    title: "Features",
    items: [
      "encodeURIComponent / decodeURIComponent",
      "encodeURI / decodeURI for full URLs",
      "Query string parse → JSON",
      "JSON → Query string builder",
      "Swap encode/decode direction instantly",
      "Live output as you type",
      "Built-in examples for common patterns",
      "Copy result with one click",
      "Handles Unicode and + as space",
      "Works locally in browser",
    ],
  },
  howToUse: {
    title: "How To Use",
    steps: [
      { title: "Select encoding mode", description: "Choose encodeURIComponent for query values, encodeURI for full URLs, or Query parse/build for structured data." },
      { title: "Paste your input", description: "Enter the URL, query string, or JSON in the source panel. Use built-in examples to get started quickly." },
      { title: "Review the output", description: "The result panel updates in real time. Check percent-encoded characters and decoded readable text." },
      { title: "Copy or swap direction", description: "Copy the result, or click Swap Direction to toggle between encode and decode modes." },
    ],
  },
  examples: {
    title: "Examples",
    inputLabel: "Input",
    outputLabel: "Output",
    items: [
      { label: "Parameter encoding", input: "Hello World?name=Tom&age=20", output: "Hello%20World%3Fname%3DTom%26age%3D20" },
      { label: "Parameter decoding", input: "Hello%20World%3Fname%3DTom", output: "Hello World?name=Tom" },
    ],
  },
  faq: [
    { q: "Is this URL encoder free?", a: "Yes. Completely free with no signup required." },
    { q: "Is my data uploaded?", a: "No. All encoding happens in your browser." },
    { q: "encodeURIComponent vs encodeURI?", a: "encodeURIComponent encodes special chars like ? & = for single values; encodeURI keeps URL structure for full links." },
    { q: "How is + handled?", a: "In form-urlencoded data, + represents space. Decoding converts + to spaces." },
    { q: "Can I use it commercially?", a: "Yes. Free for personal and commercial use." },
    { q: "Can I parse query strings to JSON?", a: "Yes. Use Query parse mode to convert name=value&key=value into structured JSON." },
  ],
  relatedToolSlugs: ["json-formatter", "base64", "jwt-decoder", "uuid-generator", "hash-generator"],
}

const zh: ToolPageSeoContent = {
  whatIs: {
    title: "什么是 URL 编解码？",
    paragraphs: [
      "URL 编解码工具将 URL 和查询字符串中的特殊字符转换为百分号编码格式或反向解码。URL 只能包含有限的 ASCII 字符——空格、Unicode 文本和 &、= 等符号必须在传输前编码，以防止解析错误和安全问题。",
      "Web 开发者在构建 API 请求、OAuth 回调 URL、表单提交和深度链接时使用 URL 编码。encodeURIComponent 处理单个参数值，encodeURI 保留 URL 结构字符。混淆两者的用法是导致链接失效和 API 调用失败的常见原因。",
      "WaiHub URL 工具支持参数级编码（encodeURIComponent）、完整 URL 编码（encodeURI）以及 Query 字符串与 JSON 的双向转换。所有处理在浏览器中完成，保护敏感的回调 URL 和 API 参数。",
    ],
    benefits: [
      "encodeURIComponent 处理查询参数值",
      "encodeURI 编码完整 URL",
      "Query 字符串解析与 JSON 构建",
      "编码/解码方向一键切换",
      "正确处理 Unicode 和特殊字符",
      "隐私优先的浏览器处理",
    ],
  },
  features: {
    title: "功能特性",
    items: [
      "encodeURIComponent / decodeURIComponent",
      "encodeURI / decodeURI 完整 URL",
      "Query 字符串解析 → JSON",
      "JSON → Query 字符串构建",
      "即时切换编码/解码方向",
      "输入时实时输出",
      "内置常用模式示例",
      "一键复制结果",
      "处理 Unicode 和 + 号空格",
      "浏览器本地运行",
    ],
  },
  howToUse: {
    title: "使用方法",
    steps: [
      { title: "选择编码模式", description: "参数值用 encodeURIComponent，完整 URL 用 encodeURI，结构化数据用 Query 解析/构建。" },
      { title: "粘贴输入", description: "在源面板输入 URL、查询字符串或 JSON，可使用内置示例快速开始。" },
      { title: "查看输出", description: "结果面板实时更新，检查百分号编码字符和解码后的可读文本。" },
      { title: "复制或切换方向", description: "复制结果，或点击「切换方向」在编码和解码模式间切换。" },
    ],
  },
  examples: {
    title: "示例",
    inputLabel: "输入",
    outputLabel: "输出",
    items: [
      { label: "参数编码", input: "Hello World?name=Tom&age=20", output: "Hello%20World%3Fname%3DTom%26age%3D20" },
      { label: "参数解码", input: "Hello%20World%3Fname%3DTom", output: "Hello World?name=Tom" },
    ],
  },
  faq: [
    { q: "URL 编码工具免费吗？", a: "是的，完全免费，无需注册。" },
    { q: "数据会上传吗？", a: "不会，所有编码在浏览器中完成。" },
    { q: "encodeURIComponent 和 encodeURI 的区别？", a: "encodeURIComponent 编码 ? & = 等特殊字符用于单个值；encodeURI 保留 URL 结构用于完整链接。" },
    { q: "+ 号如何处理？", a: "在 form-urlencoded 中 + 表示空格，解码时会转为空格。" },
    { q: "可以商用吗？", a: "可以，个人和商业用途均免费。" },
    { q: "能把 Query 解析为 JSON 吗？", a: "可以，使用 Query 解析模式将 name=value&key=value 转为结构化 JSON。" },
  ],
  relatedToolSlugs: ["json-formatter", "base64", "jwt-decoder", "uuid-generator", "hash-generator"],
}

const ja: ToolPageSeoContent = {
  whatIs: {
    title: "URL エンコード/デコードとは？",
    paragraphs: [
      "URL エンコード/デコードは、URL とクエリ文字列の特殊文字をパーセントエンコード形式に変換し、逆に復元するオンラインツールです。URL は限られた ASCII 文字のみ使用可能で、スペース、Unicode、& = などは送信前にエンコードが必要です。",
      "Web 開発者は API リクエスト、OAuth リダイレクト、フォーム送信、ディープリンクで URL エンコードを使用します。encodeURIComponent は個別パラメータ値、encodeURI は URL 構造を保持します。",
      "WaiHub の URL ツールはコンポーネントレベルエンコード、完全 URL エンコード、Query ↔ JSON 双方向変換をサポート。すべてブラウザ内で処理し、機密のリダイレクト URL と API パラメータを保護します。",
    ],
    benefits: [
      "クエリパラメータ値用 encodeURIComponent",
      "完全 URL エンコード用 encodeURI",
      "Query 文字列の解析と JSON 構築",
      "エンコード/デコード方向の即時切替",
      "Unicode と特殊文字の正確な処理",
      "プライバシー優先のブラウザ処理",
    ],
  },
  features: {
    title: "機能",
    items: [
      "encodeURIComponent / decodeURIComponent",
      "encodeURI / decodeURI",
      "Query 解析 → JSON",
      "JSON → Query 文字列構築",
      "エンコード/デコード方向の即時切替",
      "入力時のリアルタイム出力",
      "一般的パターンの内蔵例",
      "ワンクリックコピー",
      "Unicode と + スペース処理",
      "ブラウザ内ローカル動作",
    ],
  },
  howToUse: {
    title: "使い方",
    steps: [
      { title: "エンコードモードを選択", description: "パラメータ値は encodeURIComponent、完全 URL は encodeURI、構造化データは Query 解析/構築。" },
      { title: "入力を貼り付け", description: "ソースパネルに URL、クエリ文字列、または JSON を入力。内蔵例で素早く開始。" },
      { title: "出力を確認", description: "結果パネルがリアルタイム更新。パーセントエンコードとデコード後のテキストを確認。" },
      { title: "コピーまたは方向切替", description: "結果をコピー、または「方向切替」でエンコード/デコードを切替。" },
    ],
  },
  examples: {
    title: "例",
    inputLabel: "入力",
    outputLabel: "出力",
    items: [
      { label: "パラメータエンコード", input: "Hello World?name=Tom&age=20", output: "Hello%20World%3Fname%3DTom%26age%3D20" },
      { label: "パラメータデコード", input: "Hello%20World%3Fname%3DTom", output: "Hello World?name=Tom" },
    ],
  },
  faq: [
    { q: "この URL エンコーダーは無料ですか？", a: "はい。登録不要、完全無料です。" },
    { q: "データはアップロードされますか？", a: "いいえ。すべてブラウザ内で処理されます。" },
    { q: "encodeURIComponent と encodeURI の違い？", a: "encodeURIComponent は ? & = をエンコード（単一値用）。encodeURI は URL 構造を保持（完全リンク用）。" },
    { q: "+ の処理方法？", a: "form-urlencoded では + はスペース。デコード時にスペースに変換されます。" },
    { q: "商用利用できますか？", a: "はい。個人・商用ともに無料です。" },
    { q: "Query を JSON に解析できますか？", a: "はい。Query 解析モードで name=value&key=value を構造化 JSON に変換できます。" },
  ],
  relatedToolSlugs: ["json-formatter", "base64", "jwt-decoder", "uuid-generator", "hash-generator"],
}

export const urlEncoderContent = { en, zh, ja }
