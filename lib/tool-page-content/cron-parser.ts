import type { ToolPageSeoContent } from "@/lib/i18n/messages/tool-page-content-types"

const en: ToolPageSeoContent = {
  whatIs: {
    title: "What is Cron Parser?",
    paragraphs: [
      "Cron Parser decodes standard 5-field cron expressions into a human-readable breakdown. Cron schedules are widely used in Linux crontab, Kubernetes jobs, GitHub Actions, and backend task runners.",
      "A cryptic string like 0 9 * * 1-5 is hard to read at a glance. This tool splits each field — minute, hour, day of month, month, and day of week — and explains wildcards, ranges, lists, and step values.",
      "WaiHub's Cron Parser runs entirely in your browser. Paste any cron expression and get an instant field-by-field summary without sending data to a server.",
    ],
    benefits: [
      "Decode 5-field cron expressions",
      "Human-readable field breakdown",
      "Explain *, ranges, lists, steps",
      "Instant validation feedback",
      "Useful for job debugging",
      "Privacy-first browser processing",
    ],
  },
  features: {
    title: "Features",
    items: [
      "Parse minute field",
      "Parse hour field",
      "Parse day of month",
      "Parse month field",
      "Parse day of week",
      "Human-readable summary",
      "Wildcard and step support",
      "Range and list support",
      "Invalid field detection",
      "Runs locally in browser",
    ],
  },
  howToUse: {
    title: "How To Use",
    steps: [
      { title: "Enter cron expression", description: "Type a standard 5-field cron like 0 9 * * 1-5." },
      { title: "Review field breakdown", description: "Each field is listed with its raw value and plain-language description." },
      { title: "Read the summary", description: "The summary line combines all fields into a readable schedule description." },
      { title: "Fix invalid input", description: "If the expression does not have exactly 5 fields, an error message appears." },
    ],
  },
  examples: {
    title: "Examples",
    inputLabel: "Cron",
    outputLabel: "Summary",
    items: [
      { label: "Weekday mornings", input: "0 9 * * 1-5", output: "At 9:00 AM, Monday through Friday" },
      { label: "Every 15 minutes", input: "*/15 * * * *", output: "Every 15 minutes" },
    ],
  },
  faq: [
    { q: "Is this cron parser free?", a: "Yes. Completely free with no signup." },
    { q: "6-field cron with seconds?", a: "Only standard 5-field format is supported (no seconds field)." },
    { q: "Next run time?", a: "This version provides field parsing and summary, not next execution time." },
    { q: "Is my data uploaded?", a: "No. Parsing runs entirely in your browser." },
    { q: "Can I use it commercially?", a: "Yes. Free for personal and commercial use." },
  ],
  relatedToolSlugs: ["timestamp", "json-formatter", "regex-tester", "text-diff", "uuid-generator"],
}

const zh: ToolPageSeoContent = {
  whatIs: {
    title: "什么是 Cron 解析器？",
    paragraphs: [
      "Cron 解析器将标准 5 段 Cron 表达式解码为可读的分段说明。Cron 调度广泛用于 Linux crontab、Kubernetes 任务、GitHub Actions 和后端定时任务。",
      "像 0 9 * * 1-5 这样的字符串难以一眼读懂。本工具拆分分钟、小时、日、月、周各字段，解释通配符、范围、列表与步长值。",
      "WaiHub Cron 解析器完全在浏览器中运行，粘贴表达式即可获得即时字段摘要，无需上传数据。",
    ],
    benefits: [
      "解码 5 段 Cron 表达式",
      "可读的字段分解",
      "解释 *、范围、列表、步长",
      "即时校验反馈",
      "适用于任务调试",
      "隐私优先的浏览器处理",
    ],
  },
  features: {
    title: "功能特性",
    items: [
      "解析分钟字段",
      "解析小时字段",
      "解析日期字段",
      "解析月份字段",
      "解析星期字段",
      "可读摘要",
      "通配符与步长支持",
      "范围与列表支持",
      "无效字段检测",
      "浏览器本地运行",
    ],
  },
  howToUse: {
    title: "使用方法",
    steps: [
      { title: "输入 Cron 表达式", description: "输入标准 5 段 Cron，如 0 9 * * 1-5。" },
      { title: "查看字段分解", description: "每个字段列出原始值与通俗说明。" },
      { title: "阅读摘要", description: "摘要行将所有字段合并为可读的调度描述。" },
      { title: "修正无效输入", description: "若表达式不是恰好 5 段，将显示错误提示。" },
    ],
  },
  examples: {
    title: "示例",
    inputLabel: "Cron",
    outputLabel: "摘要",
    items: [
      { label: "工作日上午", input: "0 9 * * 1-5", output: "周一至周五上午 9:00" },
      { label: "每 15 分钟", input: "*/15 * * * *", output: "每 15 分钟执行一次" },
    ],
  },
  faq: [
    { q: "Cron 解析器免费吗？", a: "是的，完全免费，无需注册。" },
    { q: "支持 6 段 Cron 吗？", a: "当前仅支持标准 5 段格式（不含秒字段）。" },
    { q: "会计算下次执行时间吗？", a: "当前版本提供字段解析与摘要，不计算具体执行时间。" },
    { q: "数据会上传吗？", a: "不会，解析完全在浏览器内完成。" },
    { q: "可以商用吗？", a: "可以，个人和商业用途均免费。" },
  ],
  relatedToolSlugs: ["timestamp", "json-formatter", "regex-tester", "text-diff", "uuid-generator"],
}

const ja: ToolPageSeoContent = {
  whatIs: {
    title: "Cron パーサーとは？",
    paragraphs: [
      "Cron パーサーは標準 5 フィールドの Cron 式を読みやすい分解にデコードします。Cron スケジュールは Linux crontab、Kubernetes ジョブ、GitHub Actions、バックエンドタスクで広く使われます。",
      "0 9 * * 1-5 のような文字列は一目では読みにくい。本ツールは分・時・日・月・曜の各フィールドを分割し、ワイルドカード、範囲、リスト、ステップ値を説明します。",
      "WaiHub の Cron パーサーはすべてブラウザ内で動作。式を貼り付けるだけで即座にフィールド別サマリーを取得、データ送信なし。",
    ],
    benefits: [
      "5 フィールド Cron 式をデコード",
      "読みやすいフィールド分解",
      "*、範囲、リスト、ステップを説明",
      "即時バリデーションフィードバック",
      "ジョブデバッグに便利",
      "プライバシー優先のブラウザ処理",
    ],
  },
  features: {
    title: "機能",
    items: [
      "分フィールドを解析",
      "時フィールドを解析",
      "日フィールドを解析",
      "月フィールドを解析",
      "曜日フィールドを解析",
      "読みやすい要約",
      "ワイルドカード・ステップ対応",
      "範囲・リスト対応",
      "無効フィールド検出",
      "ブラウザ内ローカル動作",
    ],
  },
  howToUse: {
    title: "使い方",
    steps: [
      { title: "Cron 式を入力", description: "0 9 * * 1-5 のような標準 5 フィールド式を入力。" },
      { title: "フィールド分解を確認", description: "各フィールドの生値と平易な説明を表示。" },
      { title: "要約を読む", description: "要約行ですべてのフィールドを読みやすいスケジュール説明に統合。" },
      { title: "無効入力を修正", description: "5 フィールドでない場合はエラーメッセージを表示。" },
    ],
  },
  examples: {
    title: "例",
    inputLabel: "Cron",
    outputLabel: "要約",
    items: [
      { label: "平日の朝", input: "0 9 * * 1-5", output: "月〜金の午前 9 時" },
      { label: "15 分ごと", input: "*/15 * * * *", output: "15 分ごとに実行" },
    ],
  },
  faq: [
    { q: "この Cron パーサーは無料ですか？", a: "はい。登録不要、完全無料です。" },
    { q: "6 フィールド（秒付き）は？", a: "標準 5 フィールドのみ対応（秒フィールドなし）。" },
    { q: "次回実行時刻は？", a: "フィールド解析と要約のみ。次回実行時刻は計算しません。" },
    { q: "データはアップロードされますか？", a: "いいえ。すべてブラウザ内で処理されます。" },
    { q: "商用利用できますか？", a: "はい。個人・商用ともに無料です。" },
  ],
  relatedToolSlugs: ["timestamp", "json-formatter", "regex-tester", "text-diff", "uuid-generator"],
}

export const cronParserContent = { en, zh, ja }
