import type { ToolPageSeoContent } from "@/lib/i18n/messages/tool-page-content-types"

const en: ToolPageSeoContent = {
  whatIs: {
    title: "What is Regex Tester?",
    paragraphs: [
      "Regex Tester is an online tool for testing, debugging, and learning regular expressions in real time. Regular expressions (regex) are patterns used to match, search, and manipulate text — essential for validation, data extraction, log parsing, and search-and-replace operations in every programming language.",
      "Writing regex without instant feedback leads to subtle bugs: greedy quantifiers matching too much, forgotten anchors causing partial matches, and unescaped special characters breaking patterns. A live tester shows exactly which parts of your text match, with position indices and capture group values.",
      "WaiHub's Regex Tester runs JavaScript RegExp in your browser with real-time match highlighting, capture group display, flag toggles (g, i, m, s, u, y), and a pattern library with proven templates for emails, URLs, phone numbers, and UUIDs. Your test data stays on your device.",
    ],
    benefits: [
      "Real-time match highlighting",
      "Capture group extraction and display",
      "Full JavaScript flag support",
      "Built-in pattern library",
      "Match position and length info",
      "Privacy-first browser testing",
    ],
  },
  features: {
    title: "Features",
    items: [
      "Real-time regex testing as you type",
      "Highlight all matches in test text",
      "Show match index, length, and groups",
      "Toggle flags: g, i, m, s, u, y",
      "Pattern library with common templates",
      "Email, URL, phone, UUID patterns",
      "Syntax error messages with position",
      "Replace mode preview",
      "File upload for large text testing",
      "Works locally in browser",
    ],
  },
  howToUse: {
    title: "How To Use",
    steps: [
      { title: "Enter your regex pattern", description: "Type or paste your regular expression in the pattern field. Toggle flags like g (global) and i (case-insensitive) as needed." },
      { title: "Paste test text", description: "Enter the text you want to test against in the test string panel. Matches highlight in real time as you type." },
      { title: "Review matches and groups", description: "See all matches with their positions. Expand capture groups to inspect extracted values from parentheses." },
      { title: "Use pattern library", description: "Load proven patterns from the library for emails, URLs, phone numbers, and more. Customize loaded patterns for your needs." },
    ],
  },
  examples: {
    title: "Examples",
    inputLabel: "Pattern + Text",
    outputLabel: "Matches",
    items: [
      { label: "Email validation", input: "Pattern: [a-z]+@[a-z]+\\.[a-z]+\nText: contact@example.com", output: "Match: contact@example.com (index 0, length 19)" },
      { label: "Extract numbers", input: "Pattern: \\d+\nText: Order #12345 costs $99", output: "Matches: 12345, 99" },
    ],
  },
  faq: [
    { q: "Is this regex tester free?", a: "Yes. Completely free with no signup." },
    { q: "Is my data uploaded?", a: "No. Regex testing runs entirely in your browser." },
    { q: "What regex engine is used?", a: "JavaScript RegExp, the same engine used in browsers and Node.js." },
    { q: "What does \\d mean?", a: "\\d matches any digit character (0-9) in JavaScript regex." },
    { q: "Can I use it commercially?", a: "Yes. Free for personal and commercial development." },
    { q: "What are capture groups?", a: "Parentheses () in a pattern create capture groups that extract matched substrings. Non-capturing groups use (?:)." },
  ],
  relatedToolSlugs: ["json-formatter", "url-encoder", "hash-generator", "password-generator", "jwt-decoder"],
}

const zh: ToolPageSeoContent = {
  whatIs: {
    title: "什么是正则表达式测试器？",
    paragraphs: [
      "正则表达式测试器用于实时测试、调试和学习正则表达式。正则表达式（Regex）是用于匹配、搜索和处理文本的模式，在每种编程语言中都是验证、数据提取、日志解析和搜索替换的核心工具。",
      "没有即时反馈地编写正则容易导致隐蔽错误：贪婪量词匹配过多、忘记锚点导致部分匹配、未转义特殊字符破坏模式。实时测试器精确显示文本的哪些部分匹配，以及位置索引和捕获组值。",
      "WaiHub 正则测试器在浏览器中运行 JavaScript RegExp，提供实时匹配高亮、捕获组显示、标志切换（g、i、m、s、u、y）以及包含邮箱、URL、手机号、UUID 模板的模式库。测试数据保留在你的设备上。",
    ],
    benefits: [
      "实时匹配高亮",
      "捕获组提取与显示",
      "完整 JavaScript 标志支持",
      "内置模式库",
      "匹配位置与长度信息",
      "隐私优先的浏览器测试",
    ],
  },
  features: {
    title: "功能特性",
    items: [
      "输入时实时正则测试",
      "高亮测试文本中的所有匹配",
      "显示匹配索引、长度和分组",
      "切换标志：g、i、m、s、u、y",
      "常用模板模式库",
      "邮箱、URL、手机、UUID 模式",
      "带位置信息的语法错误提示",
      "替换模式预览",
      "大文本文件上传测试",
      "浏览器本地运行",
    ],
  },
  howToUse: {
    title: "使用方法",
    steps: [
      { title: "输入正则模式", description: "在模式字段输入或粘贴正则表达式，按需切换 g（全局）和 i（忽略大小写）等标志。" },
      { title: "粘贴测试文本", description: "在测试字符串面板输入待匹配文本，输入时实时高亮匹配。" },
      { title: "查看匹配和分组", description: "查看所有匹配及其位置，展开捕获组检查括号提取的值。" },
      { title: "使用模式库", description: "从库中加载邮箱、URL、手机号等成熟模式，按需自定义。" },
    ],
  },
  examples: {
    title: "示例",
    inputLabel: "模式 + 文本",
    outputLabel: "匹配结果",
    items: [
      { label: "邮箱验证", input: "模式: [a-z]+@[a-z]+\\.[a-z]+\n文本: contact@example.com", output: "匹配: contact@example.com (索引 0, 长度 19)" },
      { label: "提取数字", input: "模式: \\d+\n文本: Order #12345 costs $99", output: "匹配: 12345, 99" },
    ],
  },
  faq: [
    { q: "正则测试器免费吗？", a: "是的，完全免费，无需注册。" },
    { q: "数据会上传吗？", a: "不会，正则测试完全在浏览器中运行。" },
    { q: "使用什么正则引擎？", a: "JavaScript RegExp，与浏览器和 Node.js 使用的引擎相同。" },
    { q: "\\d 是什么意思？", a: "\\d 在 JavaScript 正则中匹配任意数字字符（0-9）。" },
    { q: "可以商用吗？", a: "可以，个人和商业开发均免费。" },
    { q: "什么是捕获组？", a: "模式中的括号 () 创建捕获组以提取匹配的子字符串。非捕获组使用 (?:)。" },
  ],
  relatedToolSlugs: ["json-formatter", "url-encoder", "hash-generator", "password-generator", "jwt-decoder"],
}

const ja: ToolPageSeoContent = {
  whatIs: {
    title: "正規表現テスターとは？",
    paragraphs: [
      "正規表現テスターは、正規表現をリアルタイムでテスト・デバッグ・学習するオンラインツールです。正規表現（Regex）はテキストのマッチ、検索、操作に使用するパターンで、すべてのプログラミング言語でバリデーション、データ抽出、ログ解析に不可欠です。",
      "即時フィードバックなしで正規表現を書くと、贪婪量詞の過剰マッチ、錨の忘れによる部分マッチ、エスケープ忘れによるパターン破損などの微妙なバグが生じます。ライブテスターはマッチ部分、位置インデックス、キャプチャグループ値を正確に表示します。",
      "WaiHub の正規表現テスターはブラウザ内で JavaScript RegExp を実行し、リアルタイムマッチハイライト、キャプチャグループ表示、フラグ切替（g、i、m、s、u、y）、メール・URL・電話・UUID テンプレートのパターンライブラリを提供。テストデータはデバイス上に保持されます。",
    ],
    benefits: [
      "リアルタイムマッチハイライト",
      "キャプチャグループの抽出と表示",
      "完全な JavaScript フラグサポート",
      "内蔵パターンライブラリ",
      "マッチ位置と長さ情報",
      "プライバシー優先のブラウザテスト",
    ],
  },
  features: {
    title: "機能",
    items: [
      "入力時のリアルタイム正規表現テスト",
      "テキスト内の全マッチをハイライト",
      "マッチインデックス、長さ、グループ表示",
      "フラグ切替：g、i、m、s、u、y",
      "一般的テンプレートのパターンライブラリ",
      "メール、URL、電話、UUID パターン",
      "位置付き構文エラーメッセージ",
      "置換モードプレビュー",
      "大テキストのファイルアップロードテスト",
      "ブラウザ内ローカル動作",
    ],
  },
  howToUse: {
    title: "使い方",
    steps: [
      { title: "正規表現パターンを入力", description: "パターンフィールドに正規表現を入力または貼り付け。g（グローバル）、i（大文字小文字無視）などのフラグを切替。" },
      { title: "テストテキストを貼り付け", description: "テスト文字列パネルにマッチ対象テキストを入力。入力時にリアルタイムでマッチをハイライト。" },
      { title: "マッチとグループを確認", description: "すべてのマッチと位置を確認。キャプチャグループを展開して括弧で抽出された値を検査。" },
      { title: "パターンライブラリを使用", description: "ライブラリからメール、URL、電話番号などの実績パターンを読み込み。必要に応じてカスタマイズ。" },
    ],
  },
  examples: {
    title: "例",
    inputLabel: "パターン + テキスト",
    outputLabel: "マッチ結果",
    items: [
      { label: "メール検証", input: "パターン: [a-z]+@[a-z]+\\.[a-z]+\nテキスト: contact@example.com", output: "マッチ: contact@example.com (インデックス 0, 長さ 19)" },
      { label: "数字抽出", input: "パターン: \\d+\nテキスト: Order #12345 costs $99", output: "マッチ: 12345, 99" },
    ],
  },
  faq: [
    { q: "この正規表現テスターは無料ですか？", a: "はい。登録不要、完全無料です。" },
    { q: "データはアップロードされますか？", a: "いいえ。すべてブラウザ内でテストされます。" },
    { q: "どの正規表現エンジンを使用？", a: "JavaScript RegExp。ブラウザと Node.js で使用されるエンジンと同じです。" },
    { q: "\\d の意味は？", a: "\\d は JavaScript 正規表現で任意の数字文字（0-9）にマッチします。" },
    { q: "商用利用できますか？", a: "はい。個人・商用開発ともに無料です。" },
    { q: "キャプチャグループとは？", a: "パターン内の括弧 () がキャプチャグループを作成し、マッチした部分文字列を抽出します。非キャプチャグループは (?:) を使用。" },
  ],
  relatedToolSlugs: ["json-formatter", "url-encoder", "hash-generator", "password-generator", "jwt-decoder"],
}

export const regexTesterContent = { en, zh, ja }
