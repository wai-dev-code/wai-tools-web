import type { FaqItem } from "@/lib/i18n/messages/types"

export interface CronParserToolMessages {
  inputLabel: string
  inputPlaceholder: string
  summaryTitle: string
  fieldsTitle: string
  emptyHint: string
  fieldMinute: string
  fieldHour: string
  fieldDayOfMonth: string
  fieldMonth: string
  fieldDayOfWeek: string
  every: string
  everyStep: string
  range: string
  list: string
  atMinute: string
  atHour: string
  onDay: string
  inMonth: string
  onWeekday: string
  summaryPrefix: string
  invalidFields: string
  empty: string
  errors: {
    invalidFields: string
  }
}

export interface CronParserPageMessages {
  metaTitle: string
  metaDescription: string
  instructions: string[]
  faq: FaqItem[]
}

export const cronParserToolZh: CronParserToolMessages = {
  inputLabel: "Cron 表达式",
  inputPlaceholder: "0 9 * * 1-5",
  summaryTitle: "可读摘要",
  fieldsTitle: "字段解析",
  emptyHint: "输入 5 段 Cron 表达式（分 时 日 月 周）",
  fieldMinute: "分钟",
  fieldHour: "小时",
  fieldDayOfMonth: "日",
  fieldMonth: "月",
  fieldDayOfWeek: "星期",
  every: "每一单位",
  everyStep: "每 {step} 单位",
  range: "从 {start} 到 {end}",
  list: "值为 {values}",
  atMinute: "第 {value} 分钟",
  atHour: "第 {value} 小时",
  onDay: "每月第 {value} 日",
  inMonth: "第 {value} 月",
  onWeekday: "星期 {value}",
  summaryPrefix: "计划：",
  invalidFields: "需要恰好 5 个字段（分 时 日 月 周）",
  empty: "输入 Cron 表达式以查看解析结果",
  errors: { invalidFields: "需要恰好 5 个字段（分 时 日 月 周）" },
}

export const cronParserToolEn: CronParserToolMessages = {
  inputLabel: "Cron expression",
  inputPlaceholder: "0 9 * * 1-5",
  summaryTitle: "Human summary",
  fieldsTitle: "Field breakdown",
  emptyHint: "Enter a 5-field cron (minute hour day month weekday)",
  fieldMinute: "Minute",
  fieldHour: "Hour",
  fieldDayOfMonth: "Day of month",
  fieldMonth: "Month",
  fieldDayOfWeek: "Day of week",
  every: "every unit",
  everyStep: "every {step} units",
  range: "from {start} to {end}",
  list: "values {values}",
  atMinute: "at minute {value}",
  atHour: "at hour {value}",
  onDay: "on day {value} of the month",
  inMonth: "in month {value}",
  onWeekday: "on weekday {value}",
  summaryPrefix: "Schedule:",
  invalidFields: "Exactly 5 fields required (minute hour day month weekday)",
  empty: "Enter a cron expression to see the breakdown",
  errors: { invalidFields: "Exactly 5 fields required (minute hour day month weekday)" },
}

export const cronParserToolJa: CronParserToolMessages = {
  inputLabel: "Cron 式",
  inputPlaceholder: "0 9 * * 1-5",
  summaryTitle: "読みやすい要約",
  fieldsTitle: "フィールド解析",
  emptyHint: "5 フィールドの Cron（分 時 日 月 曜）を入力",
  fieldMinute: "分",
  fieldHour: "時",
  fieldDayOfMonth: "日",
  fieldMonth: "月",
  fieldDayOfWeek: "曜日",
  every: "毎単位",
  everyStep: "{step} 単位ごと",
  range: "{start} から {end} まで",
  list: "値 {values}",
  atMinute: "分 {value}",
  atHour: "時 {value}",
  onDay: "毎月 {value} 日",
  inMonth: "月 {value}",
  onWeekday: "曜日 {value}",
  summaryPrefix: "スケジュール：",
  invalidFields: "5 フィールド（分 時 日 月 曜）が必要です",
  empty: "Cron 式を入力して解析結果を表示",
  errors: { invalidFields: "5 フィールド（分 時 日 月 曜）が必要です" },
}

export const cronParserPageZh: CronParserPageMessages = {
  metaTitle: "Cron 解析器 - 在线表达式解读",
  metaDescription:
    "免费在线 Cron 表达式解析工具，解读 5 段标准 Cron 并生成可读摘要。浏览器内运行，不上传数据。",
  instructions: [
    "输入标准 5 段 Cron 表达式（分 时 日 月 周）。",
    "查看各字段含义与整体可读摘要。",
    "适用于定时任务调试与文档说明。",
  ],
  faq: [
    { q: "支持 6 段 Cron 吗？", a: "当前仅支持标准 5 段格式（不含秒字段）。" },
    { q: "会计算下次执行时间吗？", a: "当前版本提供字段解析与摘要，不计算具体执行时间。" },
    { q: "数据会上传吗？", a: "不会，解析完全在浏览器内完成。" },
  ],
}

export const cronParserPageEn: CronParserPageMessages = {
  metaTitle: "Cron Parser - Free Expression Decoder",
  metaDescription:
    "Free online cron expression parser. Decode standard 5-field cron with human-readable summary. Runs in your browser — no upload.",
  instructions: [
    "Enter a standard 5-field cron expression (minute hour day month weekday).",
    "Review each field breakdown and a human-readable summary.",
    "Useful for scheduled job debugging and documentation.",
  ],
  faq: [
    { q: "6-field cron with seconds?", a: "Only standard 5-field format is supported (no seconds field)." },
    { q: "Next run time?", a: "This version provides field parsing and summary, not next execution time." },
    { q: "Is data uploaded?", a: "No. Parsing runs entirely in your browser." },
  ],
}

export const cronParserPageJa: CronParserPageMessages = {
  metaTitle: "Cron パーサー - 式の解読ツール",
  metaDescription:
    "無料のオンライン Cron 式パーサー。標準 5 フィールドを解析し読みやすい要約を表示。ブラウザ内完結。",
  instructions: [
    "標準 5 フィールドの Cron 式（分 時 日 月 曜）を入力。",
    "各フィールドの意味と全体の要約を確認。",
    "スケジュールジョブのデバッグやドキュメントに便利。",
  ],
  faq: [
    { q: "6 フィールド（秒付き）は？", a: "標準 5 フィールドのみ対応（秒フィールドなし）。" },
    { q: "次回実行時刻は？", a: "フィールド解析と要約のみ。次回実行時刻は計算しません。" },
    { q: "データはアップロードされますか？", a: "いいえ。すべてブラウザ内で処理されます。" },
  ],
}
