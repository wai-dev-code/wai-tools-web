import type { ToolPageSeoContent } from "@/lib/i18n/messages/tool-page-content-types"

const en: ToolPageSeoContent = {
  whatIs: {
    title: "What is Regex Tester?",
    paragraphs: [
      "Regex Tester is an online tool for testing, debugging, and learning regular expressions in real time. Regular expressions (regex) are patterns used to match, search, and manipulate text — essential for validation, data extraction, log parsing, and search-and-replace operations in every programming language.",
      "Writing regex without instant feedback leads to subtle bugs: greedy quantifiers matching too much, forgotten anchors causing partial matches, and unescaped special characters breaking patterns. A live tester shows exactly which parts of your text match, with position indices and capture group values.",
      "WaiHub's Regex Tester runs JavaScript RegExp in your browser with match, replace, and split modes, live highlighting, capture groups, shareable URLs, pattern history, unit tests, and a library of proven templates. Your data never leaves your device.",
    ],
    benefits: [
      "Match, replace, and split modes",
      "Real-time match highlighting",
      "Capture groups and full-string validation",
      "Shareable links and local history",
      "Pattern library and unit tests",
      "Privacy-first browser testing",
    ],
  },
  features: {
    title: "Features",
    items: [
      "Match / Replace / Split tabs",
      "Real-time regex testing as you type",
      "Highlight all matches in test text",
      "Substitution preview with $1, $& syntax",
      "Split test string by pattern",
      "Show match index, length, and groups",
      "Full-input vs partial match indicator",
      "Toggle flags: g, i, m, s, u, y",
      "Pattern library with searchable templates",
      "Quick-insert tokens and visual breakdown",
      "Share link with encoded state",
      "Save patterns to local history",
      "Unit tests with pass/fail",
      "Export matches as TXT, JSON, CSV",
      "File upload for large text",
      "Works locally in browser",
    ],
  },
  howToUse: {
    title: "How To Use",
    steps: [
      { title: "Enter your regex pattern", description: "Type or paste your regular expression. Use quick-insert chips or the pattern library. Toggle flags like g (global) and i (case-insensitive)." },
      { title: "Paste test text", description: "Enter text in the test string panel. Matches highlight in real time in Match mode." },
      { title: "Switch modes", description: "Use Replace to preview substitutions ($1, $2), or Split to break text by your pattern." },
      { title: "Review matches and groups", description: "See positions, capture groups, and whether the pattern matches the entire input." },
      { title: "Share or save", description: "Copy a share link, save to history, or export match values for your workflow." },
    ],
  },
  examples: {
    title: "Examples",
    inputLabel: "Pattern + Text",
    outputLabel: "Matches",
    items: [
      { label: "Email validation", input: "Pattern: [a-z]+@[a-z]+\\.[a-z]+\nText: contact@example.com", output: "Match: contact@example.com (index 0, length 19)" },
      { label: "Extract numbers", input: "Pattern: \\d+\nText: Order #12345 costs $99", output: "Matches: 12345, 99" },
      { label: "Replace with groups", input: "Pattern: (\\w+)@(\\w+)\nReplace: $1 at $2\nText: user@example.com", output: "user at example.com" },
    ],
  },
  faq: [
    { q: "Is this regex tester free?", a: "Yes. Completely free with no signup." },
    { q: "Is my data uploaded?", a: "No. Regex testing runs entirely in your browser." },
    { q: "What regex engine is used?", a: "JavaScript RegExp, the same engine used in browsers and Node.js." },
    { q: "How do I replace all matches?", a: "Enable the g (global) flag in Replace mode. Without g, only the first match is replaced." },
    { q: "Can I share my pattern?", a: "Yes. Use Copy share link — the URL encodes pattern, text, flags, and mode." },
    { q: "What are capture groups?", a: "Parentheses () create capture groups. Use $1, $2 in replacements. Non-capturing groups use (?:)." },
  ],
  relatedToolSlugs: ["json-formatter", "url-encoder", "hash-generator", "password-generator", "jwt-decoder"],
}

const zh: ToolPageSeoContent = {
  whatIs: {
    title: "什么是正则表达式测试器？",
    paragraphs: [
      "正则表达式测试器用于实时测试、调试和学习正则表达式。正则表达式（Regex）是用于匹配、搜索和处理文本的模式，在每种编程语言中都是验证、数据提取、日志解析和搜索替换的核心工具。",
      "没有即时反馈地编写正则容易导致隐蔽错误：贪婪量词匹配过多、忘记锚点导致部分匹配、未转义特殊字符破坏模式。实时测试器精确显示文本的哪些部分匹配，以及位置索引和捕获组值。",
      "WaiHub 正则测试器在浏览器中运行 JavaScript RegExp，支持匹配、替换、分割三种模式，实时高亮、捕获组、可分享链接、本地历史、单元测试与成熟模式库。数据不会离开你的设备。",
    ],
    benefits: [
      "匹配 / 替换 / 分割三模式",
      "实时匹配高亮",
      "捕获组与整串校验",
      "分享链接与本地历史",
      "模式库与单元测试",
      "隐私优先的浏览器测试",
    ],
  },
  features: {
    title: "功能特性",
    items: [
      "Match / Replace / Split 三模式",
      "输入时实时正则测试",
      "高亮测试文本中的所有匹配",
      "替换预览（支持 $1、$& 等）",
      "按正则分割文本",
      "显示匹配索引、长度和分组",
      "整串匹配 / 部分匹配指示",
      "切换标志：g、i、m、s、u、y",
      "可搜索的常用模板库",
      "快捷插入与可视化拆解",
      "分享链接（URL 编码状态）",
      "保存到本地历史",
      "单元测试 Pass/Fail",
      "导出匹配值为 TXT / JSON / CSV",
      "大文本文件上传",
      "浏览器本地运行",
    ],
  },
  howToUse: {
    title: "使用方法",
    steps: [
      { title: "输入正则模式", description: "输入或粘贴正则，可用快捷插入或模式库。切换 g（全局）、i（忽略大小写）等标志。" },
      { title: "粘贴测试文本", description: "在测试字符串面板输入文本，Match 模式下实时高亮匹配。" },
      { title: "切换模式", description: "Replace 预览替换结果（$1、$2），Split 按模式拆分文本。" },
      { title: "查看匹配与分组", description: "查看位置、捕获组，以及是否匹配整个输入。" },
      { title: "分享或保存", description: "复制分享链接、保存历史，或导出匹配值。" },
    ],
  },
  examples: {
    title: "示例",
    inputLabel: "模式 + 文本",
    outputLabel: "匹配结果",
    items: [
      { label: "邮箱验证", input: "模式: [a-z]+@[a-z]+\\.[a-z]+\n文本: contact@example.com", output: "匹配: contact@example.com (索引 0, 长度 19)" },
      { label: "提取数字", input: "模式: \\d+\n文本: Order #12345 costs $99", output: "匹配: 12345, 99" },
      { label: "分组替换", input: "模式: (\\w+)@(\\w+)\n替换: $1 at $2\n文本: user@example.com", output: "user at example.com" },
    ],
  },
  faq: [
    { q: "正则测试器免费吗？", a: "是的，完全免费，无需注册。" },
    { q: "数据会上传吗？", a: "不会，正则测试完全在浏览器中运行。" },
    { q: "使用什么正则引擎？", a: "JavaScript RegExp，与浏览器和 Node.js 使用的引擎相同。" },
    { q: "如何替换全部匹配？", a: "在 Replace 模式开启 g（全局）标志；未开启时仅替换第一处。" },
    { q: "可以分享模式吗？", a: "可以，使用「复制分享链接」，URL 会编码模式、文本、标志与模式类型。" },
    { q: "什么是捕获组？", a: "括号 () 创建捕获组，替换时可用 $1、$2。非捕获组使用 (?:)。" },
  ],
  relatedToolSlugs: ["json-formatter", "url-encoder", "hash-generator", "password-generator", "jwt-decoder"],
}

const ja: ToolPageSeoContent = {
  whatIs: {
    title: "正規表現テスターとは？",
    paragraphs: [
      "正規表現テスターは、正規表現をリアルタイムでテスト・デバッグ・学習するオンラインツールです。正規表現（Regex）はテキストのマッチ、検索、操作に使用するパターンで、すべてのプログラミング言語でバリデーション、データ抽出、ログ解析に不可欠です。",
      "即時フィードバックなしで正規表現を書くと、贪婪量詞の過剰マッチ、錨の忘れによる部分マッチ、エスケープ忘れによるパターン破損などの微妙なバグが生じます。ライブテスターはマッチ部分、位置インデックス、キャプチャグループ値を正確に表示します。",
      "WaiHub の正規表現テスターはブラウザ内で JavaScript RegExp を実行し、マッチ・置換・分割モード、ハイライト、共有 URL、履歴、ユニットテスト、パターンライブラリを提供。データはデバイス外に送信されません。",
    ],
    benefits: [
      "マッチ / 置換 / 分割モード",
      "リアルタイムハイライト",
      "キャプチャグループと全文検証",
      "共有リンクとローカル履歴",
      "パターンライブラリとユニットテスト",
      "プライバシー優先のブラウザテスト",
    ],
  },
  features: {
    title: "機能",
    items: [
      "Match / Replace / Split タブ",
      "入力時のリアルタイムテスト",
      "テキスト内の全マッチをハイライト",
      "置換プレビュー（$1、$& 対応）",
      "パターンで文字列を分割",
      "インデックス、長さ、グループ表示",
      "全文一致 / 部分一致インジケータ",
      "フラグ切替：g、i、m、s、u、y",
      "検索可能なパターンライブラリ",
      "クイック挿入とビジュアル分解",
      "状態をエンコードした共有リンク",
      "ローカル履歴に保存",
      "ユニットテスト Pass/Fail",
      "TXT / JSON / CSV エクスポート",
      "大テキストのファイルアップロード",
      "ブラウザ内ローカル動作",
    ],
  },
  howToUse: {
    title: "使い方",
    steps: [
      { title: "パターンを入力", description: "正規表現を入力。クイック挿入やライブラリを利用。g、i などのフラグを切替。" },
      { title: "テストテキストを貼り付け", description: "テスト文字列を入力。Match モードでリアルタイムハイライト。" },
      { title: "モードを切替", description: "Replace で置換プレビュー（$1、$2）、Split で分割。" },
      { title: "マッチとグループを確認", description: "位置、キャプチャグループ、入力全体への一致を確認。" },
      { title: "共有または保存", description: "共有リンクをコピー、履歴に保存、またはマッチ値をエクスポート。" },
    ],
  },
  examples: {
    title: "例",
    inputLabel: "パターン + テキスト",
    outputLabel: "マッチ結果",
    items: [
      { label: "メール検証", input: "パターン: [a-z]+@[a-z]+\\.[a-z]+\nテキスト: contact@example.com", output: "マッチ: contact@example.com (インデックス 0, 長さ 19)" },
      { label: "数字抽出", input: "パターン: \\d+\nテキスト: Order #12345 costs $99", output: "マッチ: 12345, 99" },
      { label: "グループ置換", input: "パターン: (\\w+)@(\\w+)\n置換: $1 at $2\nテキスト: user@example.com", output: "user at example.com" },
    ],
  },
  faq: [
    { q: "この正規表現テスターは無料ですか？", a: "はい。登録不要、完全無料です。" },
    { q: "データはアップロードされますか？", a: "いいえ。すべてブラウザ内でテストされます。" },
    { q: "どの正規表現エンジンを使用？", a: "JavaScript RegExp。ブラウザと Node.js と同じエンジンです。" },
    { q: "すべてのマッチを置換するには？", a: "Replace モードで g（グローバル）フラグを有効にしてください。" },
    { q: "パターンを共有できますか？", a: "はい。「共有リンクをコピー」で URL に状態がエンコードされます。" },
    { q: "キャプチャグループとは？", a: "括弧 () がキャプチャグループ。置換で $1、$2 を使用。非キャプチャは (?:)。" },
  ],
  relatedToolSlugs: ["json-formatter", "url-encoder", "hash-generator", "password-generator", "jwt-decoder"],
}

export const regexTesterContent = { en, zh, ja }
