import type { ToolPageSeoContent } from "@/lib/i18n/messages/tool-page-content-types"

const en: ToolPageSeoContent = {
  whatIs: {
    title: "What is Timestamp Converter?",
    paragraphs: [
      "Timestamp Converter is an online tool that converts Unix timestamps to human-readable dates and vice versa. Unix timestamps represent time as the number of seconds or milliseconds since January 1, 1970 (UTC), and are ubiquitous in logs, databases, APIs, and blockchain systems.",
      "Debugging timezone issues, correlating log entries, and verifying API expiration times all require fast timestamp conversion. A 10-digit number might be seconds while a 13-digit number is milliseconds — confusing them leads to dates in 1970 or year 50000. A dedicated converter eliminates manual calculation errors.",
      "WaiHub's Timestamp tool auto-detects second, millisecond, microsecond, and nanosecond precision. It shows UTC and local time side by side, outputs ISO 8601 format, and supports bidirectional conversion. All calculations run in your browser with no data upload.",
    ],
    benefits: [
      "Auto-detect seconds vs milliseconds",
      "UTC and local timezone display",
      "ISO 8601 formatted output",
      "Bidirectional timestamp ↔ date conversion",
      "Support for μs and ns precision",
      "Privacy-first browser processing",
    ],
  },
  features: {
    title: "Features",
    items: [
      "Convert Unix timestamp to readable date",
      "Convert date to Unix timestamp",
      "Auto-detect s / ms / μs / ns precision",
      "UTC and local timezone side by side",
      "ISO 8601 output format",
      "Current timestamp quick reference",
      "Copy any output field instantly",
      "Built-in examples for common dates",
      "Handles timezone offsets correctly",
      "Works locally in browser",
    ],
  },
  howToUse: {
    title: "How To Use",
    steps: [
      { title: "Enter a timestamp or date", description: "Paste a Unix timestamp (e.g. 1704067200) or pick a date/time using the datetime input." },
      { title: "Select unit if needed", description: "The tool auto-detects precision, but you can manually set seconds or milliseconds if auto-detect is ambiguous." },
      { title: "Review all formats", description: "See UTC, local time, and ISO 8601 output simultaneously. Compare timezone differences side by side." },
      { title: "Copy the value you need", description: "Click copy on any output field — timestamp, formatted date, or ISO string — for use in your code or logs." },
    ],
  },
  examples: {
    title: "Examples",
    inputLabel: "Input",
    outputLabel: "Output",
    items: [
      { label: "Seconds to date", input: "1704067200", output: "2024-01-01 00:00:00 UTC" },
      { label: "Milliseconds to date", input: "1704067200000", output: "2024-01-01 00:00:00 UTC" },
    ],
  },
  faq: [
    { q: "Is this timestamp converter free?", a: "Yes. Completely free with no signup." },
    { q: "Is my data uploaded?", a: "No. All conversion happens in your browser." },
    { q: "Seconds vs milliseconds?", a: "10-digit numbers are usually seconds (e.g. 1704067200). 13-digit numbers are milliseconds (e.g. 1704067200000)." },
    { q: "What timezone is used?", a: "UTC is shown alongside your browser's local timezone for easy comparison." },
    { q: "Can I use it commercially?", a: "Yes. Free for personal and commercial use." },
    { q: "What is Unix timestamp?", a: "The count of seconds (or milliseconds) since January 1, 1970 00:00:00 UTC, also called Unix epoch time." },
  ],
  relatedToolSlugs: ["jwt-decoder", "json-formatter", "uuid-generator", "hash-generator", "url-encoder"],
}

const zh: ToolPageSeoContent = {
  whatIs: {
    title: "什么是时间戳转换器？",
    paragraphs: [
      "时间戳转换器将 Unix 时间戳转换为人类可读的日期，或反向转换。Unix 时间戳表示自 1970 年 1 月 1 日（UTC）以来的秒数或毫秒数，广泛应用于日志、数据库、API 和区块链系统。",
      "调试时区问题、关联日志条目、验证 API 过期时间都需要快速的时间戳转换。10 位数字通常是秒，13 位是毫秒——混淆它们会导致日期显示为 1970 年或公元 50000 年。专用转换器消除手动计算错误。",
      "WaiHub 时间戳工具自动检测秒、毫秒、微秒和纳秒精度，并排显示 UTC 和本地时间，输出 ISO 8601 格式，支持双向转换。所有计算在浏览器中完成，不上传数据。",
    ],
    benefits: [
      "自动检测秒与毫秒",
      "UTC 与本地时区并排显示",
      "ISO 8601 格式输出",
      "时间戳与日期双向转换",
      "支持微秒和纳秒精度",
      "隐私优先的浏览器处理",
    ],
  },
  features: {
    title: "功能特性",
    items: [
      "Unix 时间戳转可读日期",
      "日期转 Unix 时间戳",
      "自动检测 s / ms / μs / ns 精度",
      "UTC 与本地时区并排显示",
      "ISO 8601 输出格式",
      "当前时间戳快速参考",
      "一键复制任意输出字段",
      "常用日期内置示例",
      "正确处理时区偏移",
      "浏览器本地运行",
    ],
  },
  howToUse: {
    title: "使用方法",
    steps: [
      { title: "输入时间戳或日期", description: "粘贴 Unix 时间戳（如 1704067200）或使用日期时间选择器。" },
      { title: "必要时选择单位", description: "工具自动检测精度，也可手动设置秒或毫秒。" },
      { title: "查看所有格式", description: "同时查看 UTC、本地时间和 ISO 8601 输出，对比时区差异。" },
      { title: "复制所需值", description: "点击任意输出字段的复制按钮，用于代码或日志。" },
    ],
  },
  examples: {
    title: "示例",
    inputLabel: "输入",
    outputLabel: "输出",
    items: [
      { label: "秒转日期", input: "1704067200", output: "2024-01-01 00:00:00 UTC" },
      { label: "毫秒转日期", input: "1704067200000", output: "2024-01-01 00:00:00 UTC" },
    ],
  },
  faq: [
    { q: "时间戳转换器免费吗？", a: "是的，完全免费，无需注册。" },
    { q: "数据会上传吗？", a: "不会，所有转换在浏览器中完成。" },
    { q: "秒和毫秒如何区分？", a: "10 位通常是秒（如 1704067200），13 位是毫秒（如 1704067200000）。" },
    { q: "使用什么时区？", a: "UTC 与浏览器本地时区并排显示，便于对比。" },
    { q: "可以商用吗？", a: "可以，个人和商业用途均免费。" },
    { q: "什么是 Unix 时间戳？", a: "自 1970 年 1 月 1 日 00:00:00 UTC 以来的秒数（或毫秒数），也称 Unix 纪元时间。" },
  ],
  relatedToolSlugs: ["jwt-decoder", "json-formatter", "uuid-generator", "hash-generator", "url-encoder"],
}

const ja: ToolPageSeoContent = {
  whatIs: {
    title: "タイムスタンプ変換とは？",
    paragraphs: [
      "タイムスタンプ変換は、Unix タイムスタンプを人間が読める日付に変換し、逆に変換するオンラインツールです。Unix タイムスタンプは 1970 年 1 月 1 日（UTC）からの秒数またはミリ秒数で、ログ、データベース、API、ブロックチェーンで広く使用されます。",
      "タイムゾーン問題のデバッグ、ログエントリの相関、API 有効期限の検証には高速なタイムスタンプ変換が必要です。10 桁は秒、13 桁はミリ秒——混同すると 1970 年や西暦 50000 年の日付になります。",
      "WaiHub のタイムスタンプツールは秒・ミリ秒・マイクロ秒・ナノ秒を自動検出し、UTC とローカル時間を並列表示、ISO 8601 出力、双方向変換をサポート。すべてブラウザ内で計算されます。",
    ],
    benefits: [
      "秒とミリ秒の自動検出",
      "UTC とローカルタイムゾーンの並列表示",
      "ISO 8601 形式出力",
      "タイムスタンプ ↔ 日付の双方向変換",
      "μs・ns 精度サポート",
      "プライバシー優先のブラウザ処理",
    ],
  },
  features: {
    title: "機能",
    items: [
      "Unix タイムスタンプを読みやすい日付に変換",
      "日付を Unix タイムスタンプに変換",
      "s / ms / μs / ns 精度の自動検出",
      "UTC とローカルタイムゾーンの並列表示",
      "ISO 8601 出力形式",
      "現在のタイムスタンプクイック参照",
      "任意の出力フィールドを即時コピー",
      "一般的な日付の内蔵例",
      "タイムゾーンオフセットの正確な処理",
      "ブラウザ内ローカル動作",
    ],
  },
  howToUse: {
    title: "使い方",
    steps: [
      { title: "タイムスタンプまたは日付を入力", description: "Unix タイムスタンプ（例: 1704067200）を貼り付け、または日時入力を使用。" },
      { title: "必要に応じて単位を選択", description: "自動検出されますが、秒またはミリ秒を手動設定も可能。" },
      { title: "すべての形式を確認", description: "UTC、ローカル時間、ISO 8601 を同時に表示。タイムゾーン差を比較。" },
      { title: "必要な値をコピー", description: "タイムスタンプ、フォーマット日付、ISO 文字列の任意フィールドをコピー。" },
    ],
  },
  examples: {
    title: "例",
    inputLabel: "入力",
    outputLabel: "出力",
    items: [
      { label: "秒から日付", input: "1704067200", output: "2024-01-01 00:00:00 UTC" },
      { label: "ミリ秒から日付", input: "1704067200000", output: "2024-01-01 00:00:00 UTC" },
    ],
  },
  faq: [
    { q: "このタイムスタンプ変換は無料ですか？", a: "はい。登録不要、完全無料です。" },
    { q: "データはアップロードされますか？", a: "いいえ。すべてブラウザ内で変換されます。" },
    { q: "秒とミリ秒の違い？", a: "10 桁は通常秒（例: 1704067200）。13 桁はミリ秒（例: 1704067200000）。" },
    { q: "どのタイムゾーンを使用？", a: "UTC とブラウザのローカルタイムゾーンを並列表示。" },
    { q: "商用利用できますか？", a: "はい。個人・商用ともに無料です。" },
    { q: "Unix タイムスタンプとは？", a: "1970 年 1 月 1 日 00:00:00 UTC からの秒数（またはミリ秒数）。" },
  ],
  relatedToolSlugs: ["jwt-decoder", "json-formatter", "uuid-generator", "hash-generator", "url-encoder"],
}

export const timestampContent = { en, zh, ja }
