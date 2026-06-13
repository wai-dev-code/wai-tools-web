import type { ToolPageSeoContent } from "@/lib/i18n/messages/tool-page-content-types"

const en: ToolPageSeoContent = {
  whatIs: {
    title: "What is Base64 Encode/Decode?",
    paragraphs: [
      "Base64 Encode/Decode is an online tool that converts binary data and text into Base64 strings and back. Base64 encoding represents binary data using only ASCII characters, making it safe to embed images in HTML, transmit data in JSON, or store binary content in text-based formats like XML and email.",
      "Developers encounter Base64 daily: JWT tokens use Base64URL encoding, API responses may include Base64-encoded files, and CSS often embeds small images as data URIs. Understanding when and how to encode and decode Base64 prevents subtle bugs in authentication flows and data pipelines.",
      "WaiHub's Base64 toolkit includes four modules: core encode/decode, file tools with image preview, format conversion (Hex, Data URI), and utilities. Everything runs in your browser — your files and text never leave your device, which is essential when handling credentials or sensitive payloads.",
    ],
    benefits: [
      "Encode and decode text instantly",
      "URL-safe Base64 for JWT and query parameters",
      "File upload with image preview",
      "Convert between Base64, Hex, and Data URI",
      "Smart auto-detect for encode vs decode",
      "Privacy-first — no server upload required",
    ],
  },
  features: {
    title: "Features",
    items: [
      "Encode text to Base64 instantly",
      "Decode Base64 back to readable text",
      "URL-safe Base64 mode (- and _ instead of + and /)",
      "Upload files and encode to Base64",
      "Preview Base64-encoded images inline",
      "Convert Base64 ↔ Hex ↔ Data URI",
      "Smart detect: auto-switch encode/decode",
      "Copy result with one click",
      "Four modules: core, file, convert, utilities",
      "Works locally in browser — no data upload",
    ],
  },
  howToUse: {
    title: "How To Use",
    steps: [
      {
        title: "Enter text or upload a file",
        description: "Paste text in the source panel or upload a file in the File module. Toggle URL-safe mode for JWT-style encoding when needed.",
      },
      {
        title: "Choose encode or decode",
        description: "Click Encode to convert text to Base64, or Decode to reverse the process. Smart Detect automatically picks the right direction.",
      },
      {
        title: "Review the result",
        description: "The result panel shows the output. For images, use the File module to see a live preview of decoded content.",
      },
      {
        title: "Copy or convert further",
        description: "Copy the result, or switch to the Convert module to transform between Base64, Hex, and Data URI formats.",
      },
    ],
  },
  examples: {
    title: "Examples",
    inputLabel: "Input",
    outputLabel: "Output",
    items: [
      {
        label: "Text encoding",
        input: "Hello, WaiHub!",
        output: "SGVsbG8sIFdhaUh1YiE=",
      },
      {
        label: "Text decoding",
        input: "SGVsbG8sIFdhaUh1YiE=",
        output: "Hello, WaiHub!",
      },
    ],
  },
  faq: [
    { q: "Is this Base64 tool free?", a: "Yes. Completely free with no signup or usage limits." },
    { q: "Is my data uploaded to your servers?", a: "No. Encoding and decoding happen entirely in your browser." },
    { q: "Is Base64 encryption?", a: "No. Base64 is encoding, not encryption. Anyone can decode it — do not use it for security." },
    { q: "What is URL-safe Base64?", a: "Uses - and _ instead of + and /, suitable for URL parameters and JWT tokens." },
    { q: "Can I use it commercially?", a: "Yes. Free for personal and commercial use." },
    { q: "How do I preview Base64 images?", a: "Use the File module — paste or upload image Base64 for instant inline preview." },
  ],
  relatedToolSlugs: ["json-formatter", "url-encoder", "jwt-decoder", "hash-generator", "uuid-generator"],
}

const zh: ToolPageSeoContent = {
  whatIs: {
    title: "什么是 Base64 编解码？",
    paragraphs: [
      "Base64 编解码工具将二进制数据和文本转换为 Base64 字符串或反向解码。Base64 编码使用纯 ASCII 字符表示二进制数据，可安全嵌入 HTML 图片、在 JSON 中传输数据，或存储在 XML、邮件等文本格式中。",
      "开发者每天都会遇到 Base64：JWT Token 使用 Base64URL 编码，API 响应可能包含 Base64 文件，CSS 常用 Data URI 嵌入小图片。理解何时以及如何编解码 Base64，能避免认证流程和数据管道中的隐蔽错误。",
      "WaiHub Base64 工具包含四个模块：核心编解码、文件工具（含图片预览）、格式转换（Hex、Data URI）和实用工具。全部在浏览器中运行，文件和文本不会离开你的设备，处理凭证或敏感载荷时尤为重要。",
    ],
    benefits: [
      "即时编码和解码文本",
      "URL 安全 Base64，适用于 JWT 和查询参数",
      "文件上传与图片预览",
      "Base64、Hex、Data URI 互转",
      "智能自动检测编码/解码方向",
      "隐私优先，不上传服务器",
    ],
  },
  features: {
    title: "功能特性",
    items: [
      "即时将文本编码为 Base64",
      "将 Base64 解码为可读文本",
      "URL 安全模式（- 和 _ 替代 + 和 /）",
      "上传文件并编码为 Base64",
      "内联预览 Base64 图片",
      "Base64 ↔ Hex ↔ Data URI 转换",
      "智能检测：自动切换编码/解码",
      "一键复制结果",
      "四模块：核心、文件、转换、实用工具",
      "浏览器本地运行，不上传数据",
    ],
  },
  howToUse: {
    title: "使用方法",
    steps: [
      { title: "输入文本或上传文件", description: "在源面板粘贴文本，或在文件模块上传文件。需要时开启 URL 安全模式进行 JWT 风格编码。" },
      { title: "选择编码或解码", description: "点击「编码」将文本转为 Base64，或「解码」反向操作。智能检测会自动选择正确方向。" },
      { title: "查看结果", description: "结果面板显示输出。图片可使用文件模块实时预览解码内容。" },
      { title: "复制或进一步转换", description: "复制结果，或切换到转换模块在 Base64、Hex、Data URI 之间转换。" },
    ],
  },
  examples: {
    title: "示例",
    inputLabel: "输入",
    outputLabel: "输出",
    items: [
      { label: "文本编码", input: "Hello, WaiHub!", output: "SGVsbG8sIFdhaUh1YiE=" },
      { label: "文本解码", input: "SGVsbG8sIFdhaUh1YiE=", output: "Hello, WaiHub!" },
    ],
  },
  faq: [
    { q: "这个 Base64 工具免费吗？", a: "是的，完全免费，无需注册。" },
    { q: "数据会上传到服务器吗？", a: "不会，编解码完全在浏览器中完成。" },
    { q: "Base64 是加密吗？", a: "不是。Base64 是编码而非加密，任何人都能解码，不可用于安全保护。" },
    { q: "什么是 URL 安全 Base64？", a: "用 - 和 _ 替代 + 和 /，适用于 URL 参数和 JWT Token。" },
    { q: "可以商用吗？", a: "可以，个人和商业用途均免费。" },
    { q: "如何预览 Base64 图片？", a: "使用文件模块，粘贴或上传图片 Base64 即可即时预览。" },
  ],
  relatedToolSlugs: ["json-formatter", "url-encoder", "jwt-decoder", "hash-generator", "uuid-generator"],
}

const ja: ToolPageSeoContent = {
  whatIs: {
    title: "Base64 エンコード/デコードとは？",
    paragraphs: [
      "Base64 エンコード/デコードは、バイナリデータとテキストを Base64 文字列に変換し、逆に復元するオンラインツールです。Base64 は ASCII 文字のみでバイナリを表現し、HTML への画像埋め込み、JSON でのデータ送信、XML やメールなどのテキスト形式への保存が安全です。",
      "開発者は毎日 Base64 に遭遇します。JWT は Base64URL、API レスポンスに Base64 ファイル、CSS の Data URI 画像など。適切なエンコード/デコードの理解は、認証フローやデータパイプラインの微妙なバグを防ぎます。",
      "WaiHub の Base64 ツールはコア、ファイル（画像プレビュー付き）、変換（Hex、Data URI）、ユーティリティの 4 モジュール。すべてブラウザ内で動作し、ファイルとテキストはデバイスから出ません。",
    ],
    benefits: [
      "テキストの即時エンコード・デコード",
      "JWT・クエリ用 URL セーフ Base64",
      "ファイルアップロードと画像プレビュー",
      "Base64・Hex・Data URI 変換",
      "エンコード/デコードの自動検出",
      "プライバシー優先、サーバー非送信",
    ],
  },
  features: {
    title: "機能",
    items: [
      "テキストを即時 Base64 エンコード",
      "Base64 を読みやすいテキストにデコード",
      "URL セーフモード（+ / を - _ に置換）",
      "ファイルアップロードと Base64 エンコード",
      "Base64 画像のインラインプレビュー",
      "Base64 ↔ Hex ↔ Data URI 変換",
      "スマート検出で方向自動切替",
      "ワンクリックコピー",
      "4 モジュール：コア、ファイル、変換、ユーティリティ",
      "ブラウザ内ローカル動作",
    ],
  },
  howToUse: {
    title: "使い方",
    steps: [
      { title: "テキスト入力またはファイルアップロード", description: "ソースパネルに貼り付け、またはファイルモジュールでアップロード。JWT 用に URL セーフモードを切替可能。" },
      { title: "エンコードまたはデコードを選択", description: "「エンコード」で Base64 変換、「デコード」で逆変換。スマート検出が自動で方向を選択。" },
      { title: "結果を確認", description: "結果パネルに出力。画像はファイルモジュールでライブプレビュー。" },
      { title: "コピーまたは変換", description: "結果をコピー、または変換モジュールで Base64・Hex・Data URI 間を変換。" },
    ],
  },
  examples: {
    title: "例",
    inputLabel: "入力",
    outputLabel: "出力",
    items: [
      { label: "テキストエンコード", input: "Hello, WaiHub!", output: "SGVsbG8sIFdhaUh1YiE=" },
      { label: "テキストデコード", input: "SGVsbG8sIFdhaUh1YiE=", output: "Hello, WaiHub!" },
    ],
  },
  faq: [
    { q: "この Base64 ツールは無料ですか？", a: "はい。登録不要、完全無料です。" },
    { q: "データはサーバーに送信されますか？", a: "いいえ。すべてブラウザ内で処理されます。" },
    { q: "Base64 は暗号化ですか？", a: "いいえ。エンコードであり暗号化ではありません。誰でもデコードできます。" },
    { q: "URL セーフ Base64 とは？", a: "+ / の代わりに - _ を使用。URL パラメータと JWT に適しています。" },
    { q: "商用利用できますか？", a: "はい。個人・商用ともに無料です。" },
    { q: "Base64 画像のプレビュー方法？", a: "ファイルモジュールで Base64 を貼り付けまたはアップロードすると即時プレビュー。" },
  ],
  relatedToolSlugs: ["json-formatter", "url-encoder", "jwt-decoder", "hash-generator", "uuid-generator"],
}

export const base64Content = { en, zh, ja }
