import type { FaqItem } from "@/lib/i18n/messages/types"

import type { CronPresetId } from "@/lib/cron-schedule-utils"

export interface CronParserToolMessages {
  inputLabel: string
  inputPlaceholder: string
  summaryTitle: string
  fieldsTitle: string
  nextRunsTitle: string
  nextRunsEmpty: string
  presetsTitle: string
  presets: Record<CronPresetId, string>
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

const cronPresetsZh: CronParserToolMessages["presets"] = {
  everyMinute: "每分钟",
  hourly: "每小时整点",
  dailyMidnight: "每天 0:00",
  daily9am: "每天 9:00",
  weekdays9am: "工作日 9:00",
  weeklyMonday: "每周一 9:00",
  monthlyFirst: "每月 1 日 0:00",
}

export const cronParserToolZh: CronParserToolMessages = {
  inputLabel: "Cron 表达式",
  inputPlaceholder: "0 9 * * 1-5",
  summaryTitle: "可读摘要",
  fieldsTitle: "字段解析",
  nextRunsTitle: "下次执行时间",
  nextRunsEmpty: "无法计算（请检查表达式是否为有效 5 段 Cron）",
  presetsTitle: "常用模板",
  presets: cronPresetsZh,
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

const cronPresetsEn: CronParserToolMessages["presets"] = {
  everyMinute: "Every minute",
  hourly: "Every hour",
  dailyMidnight: "Daily at midnight",
  daily9am: "Daily at 9:00",
  weekdays9am: "Weekdays at 9:00",
  weeklyMonday: "Every Monday 9:00",
  monthlyFirst: "1st of month at midnight",
}

export const cronParserToolEn: CronParserToolMessages = {
  inputLabel: "Cron expression",
  inputPlaceholder: "0 9 * * 1-5",
  summaryTitle: "Human summary",
  fieldsTitle: "Field breakdown",
  nextRunsTitle: "Next run times",
  nextRunsEmpty: "Cannot compute — check that the expression is a valid 5-field cron",
  presetsTitle: "Common presets",
  presets: cronPresetsEn,
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

const cronPresetsJa: CronParserToolMessages["presets"] = {
  everyMinute: "毎分",
  hourly: "毎時 0 分",
  dailyMidnight: "毎日 0:00",
  daily9am: "毎日 9:00",
  weekdays9am: "平日 9:00",
  weeklyMonday: "毎週月曜 9:00",
  monthlyFirst: "毎月 1 日 0:00",
}

export const cronParserToolJa: CronParserToolMessages = {
  inputLabel: "Cron 式",
  inputPlaceholder: "0 9 * * 1-5",
  summaryTitle: "読みやすい要約",
  fieldsTitle: "フィールド解析",
  nextRunsTitle: "次回実行時刻",
  nextRunsEmpty: "計算できません — 有効な 5 フィールド式か確認してください",
  presetsTitle: "よく使うテンプレート",
  presets: cronPresetsJa,
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
    { q: "会计算下次执行时间吗？", a: "会。有效表达式下方会列出未来数次执行时间（基于本地时区）。" },
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
    { q: "Next run time?", a: "Yes — upcoming runs are listed below using your local timezone." },
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
    { q: "次回実行時刻は？", a: "はい。有効な式の下にローカル時区での次回実行時刻を表示します。" },
    { q: "データはアップロードされますか？", a: "いいえ。すべてブラウザ内で処理されます。" },
  ],
}
