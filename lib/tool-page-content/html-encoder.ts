import type { ToolPageSeoContent } from "@/lib/i18n/messages/tool-page-content-types"

const en: ToolPageSeoContent = {
  whatIs: {
    title: "What is HTML Encoder/Decoder?",
    paragraphs: [
      "HTML Encoder/Decoder converts special characters into HTML entities and back. Characters like <, >, &, and quotes must be escaped when embedded in HTML to prevent the browser from interpreting them as markup.",
      "Developers use HTML encoding when rendering user-generated content, building email templates, debugging XSS issues, and preparing strings for innerHTML-safe insertion.",
      "WaiHub's HTML tool supports standard entity encoding, optional full non-ASCII encoding, and decoding of named and numeric entities — all in your browser.",
    ],
    benefits: [
      "Encode & < > \" ' instantly",
      "Decode named and numeric entities",
      "Optional non-ASCII encoding",
      "Swap encode/decode direction",
      "Privacy-first browser processing",
      "Real-time output as you type",
    ],
  },
  features: {
    title: "Features",
    items: [
      "HTML entity encode mode",
      "HTML entity decode mode",
      "Encode all non-ASCII characters",
      "Support &#39; and &#x27; numeric entities",
      "Swap direction between modes",
      "Copy result with one click",
      "Dual-panel input and output",
      "Clear input quickly",
      "Works locally in browser",
      "No server upload",
    ],
  },
  howToUse: {
    title: "How To Use",
    steps: [
      { title: "Choose mode", description: "Select HTML Encode to escape characters, or HTML Decode to reverse entities." },
      { title: "Enter text", description: "Paste your HTML snippet or plain text in the input panel." },
      { title: "Review output", description: "The result updates in real time in the output panel." },
      { title: "Copy or swap", description: "Copy the result, or swap direction to toggle between encode and decode." },
    ],
  },
  examples: {
    title: "Examples",
    inputLabel: "Input",
    outputLabel: "Output",
    items: [
      { label: "Encode", input: "<div>Hello & World</div>", output: "&lt;div&gt;Hello &amp; World&lt;/div&gt;" },
      { label: "Decode", input: "&lt;p&gt;WaiHub&lt;/p&gt;", output: "<p>WaiHub</p>" },
    ],
  },
  faq: [
    { q: "Is this HTML encoder free?", a: "Yes. Completely free with no signup." },
    { q: "Is my data uploaded?", a: "No. Processing runs entirely in your browser." },
    { q: "HTML vs URL encoding?", a: "HTML entities escape page content; URL encoding is for addresses and query strings." },
    { q: "Which entities are supported?", a: "Common named entities plus numeric forms like &#123; and &#x7B;." },
    { q: "Can I use it commercially?", a: "Yes. Free for personal and commercial use." },
  ],
  relatedToolSlugs: ["url-encoder", "base64", "json-formatter", "text-diff", "hash-generator"],
}

const zh: ToolPageSeoContent = {
  whatIs: {
    title: "什么是 HTML 编解码？",
    paragraphs: [
      "HTML 编解码将特殊字符转换为 HTML 实体或反向还原。<、>、& 和引号等字符在嵌入 HTML 时必须转义，防止浏览器将其解析为标记。",
      "开发者在渲染用户内容、构建邮件模板、调试 XSS 问题和准备 innerHTML 安全字符串时使用 HTML 编码。",
      "WaiHub HTML 工具支持标准实体编码、可选的全非 ASCII 编码，以及命名与数字实体的解码，全部在浏览器中完成。",
    ],
    benefits: [
      "即时编码 & < > \" '",
      "解码命名与数字实体",
      "可选全非 ASCII 编码",
      "编码/解码方向切换",
      "隐私优先的浏览器处理",
      "输入时实时输出",
    ],
  },
  features: {
    title: "功能特性",
    items: [
      "HTML 实体编码模式",
      "HTML 实体解码模式",
      "编码所有非 ASCII 字符",
      "支持 &#39; 与 &#x27; 数字实体",
      "模式间方向切换",
      "一键复制结果",
      "双栏输入输出",
      "快速清空输入",
      "浏览器本地运行",
      "不上传服务器",
    ],
  },
  howToUse: {
    title: "使用方法",
    steps: [
      { title: "选择模式", description: "选择 HTML 编码转义字符，或 HTML 解码还原实体。" },
      { title: "输入文本", description: "在输入面板粘贴 HTML 片段或纯文本。" },
      { title: "查看输出", description: "输出面板实时显示结果。" },
      { title: "复制或切换", description: "复制结果，或切换方向在编码与解码间互换。" },
    ],
  },
  examples: {
    title: "示例",
    inputLabel: "输入",
    outputLabel: "输出",
    items: [
      { label: "编码", input: "<div>Hello & World</div>", output: "&lt;div&gt;Hello &amp; World&lt;/div&gt;" },
      { label: "解码", input: "&lt;p&gt;WaiHub&lt;/p&gt;", output: "<p>WaiHub</p>" },
    ],
  },
  faq: [
    { q: "HTML 编解码免费吗？", a: "是的，完全免费，无需注册。" },
    { q: "数据会上传吗？", a: "不会，处理完全在浏览器内完成。" },
    { q: "与 URL 编码的区别？", a: "HTML 实体用于页面内容转义，URL 编码用于地址与查询参数。" },
    { q: "支持哪些实体？", a: "常见命名实体及 &#123;、&#x7B; 形式的数字实体。" },
    { q: "可以商用吗？", a: "可以，个人和商业用途均免费。" },
  ],
  relatedToolSlugs: ["url-encoder", "base64", "json-formatter", "text-diff", "hash-generator"],
}

const ja: ToolPageSeoContent = {
  whatIs: {
    title: "HTML エンコード/デコードとは？",
    paragraphs: [
      "HTML エンコード/デコードは特殊文字を HTML エンティティに変換、または逆変換します。<、>、&、引用符は HTML に埋め込む際にエスケープが必要です。",
      "開発者はユーザー生成コンテンツの表示、メールテンプレート、XSS デバッグ、innerHTML 安全な文字列準備に HTML エンコードを使用します。",
      "WaiHub の HTML ツールは標準エンティティエンコード、非 ASCII 一括エンコード、名前付き・数値エンティティのデコードに対応。すべてブラウザ内で処理。",
    ],
    benefits: [
      "& < > \" ' を即時エンコード",
      "名前付き・数値エンティティをデコード",
      "非 ASCII 一括エンコード",
      "エンコード/デコード切り替え",
      "プライバシー優先のブラウザ処理",
      "入力時のリアルタイム出力",
    ],
  },
  features: {
    title: "機能",
    items: [
      "HTML エンティティエンコード",
      "HTML エンティティデコード",
      "非 ASCII 文字の一括エンコード",
      "&#39; &#x27; 数値エンティティ対応",
      "モード間の方向切り替え",
      "ワンクリックコピー",
      "デュアルパネル入出力",
      "入力のクイッククリア",
      "ブラウザ内ローカル動作",
      "サーバー非送信",
    ],
  },
  howToUse: {
    title: "使い方",
    steps: [
      { title: "モードを選択", description: "HTML エンコードで文字をエスケープ、デコードでエンティティを復元。" },
      { title: "テキストを入力", description: "入力パネルに HTML スニペットまたはプレーンテキストを貼り付け。" },
      { title: "出力を確認", description: "出力パネルにリアルタイムで結果を表示。" },
      { title: "コピーまたは切り替え", description: "結果をコピー、または方向切り替えでエンコード/デコードを入れ替え。" },
    ],
  },
  examples: {
    title: "例",
    inputLabel: "入力",
    outputLabel: "出力",
    items: [
      { label: "エンコード", input: "<div>Hello & World</div>", output: "&lt;div&gt;Hello &amp; World&lt;/div&gt;" },
      { label: "デコード", input: "&lt;p&gt;WaiHub&lt;/p&gt;", output: "<p>WaiHub</p>" },
    ],
  },
  faq: [
    { q: "この HTML ツールは無料ですか？", a: "はい。登録不要、完全無料です。" },
    { q: "データはアップロードされますか？", a: "いいえ。すべてブラウザ内で処理されます。" },
    { q: "URL エンコードとの違い？", a: "HTML エンティティはページ内容のエスケープ、URL エンコードはアドレス用です。" },
    { q: "対応エンティティは？", a: "一般的な名前付きエンティティと &#123;、&#x7B; 形式。" },
    { q: "商用利用できますか？", a: "はい。個人・商用ともに無料です。" },
  ],
  relatedToolSlugs: ["url-encoder", "base64", "json-formatter", "text-diff", "hash-generator"],
}

export const htmlEncoderContent = { en, zh, ja }
