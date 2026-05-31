import type { FaqItem } from "@/lib/i18n/messages/types"

export interface TimestampToolMessages {
  units: { s: string; ms: string; us: string; ns: string }
  periods: { year: string; month: string; day: string }
  durationUnits: { year: string; month: string; day: string; hour: string; minute: string; second: string }
  example: string
  sections: {
    currentEpoch: string
    converter: string
    periodBounds: string
    durationBreakdown: string
  }
  utc: string
  local: string
  localWithTz: string
  now: string
  timestamp: string
  datetime: string
  copy: string
  clear: string
  h24: string
  h12: string
  iso8601: string
  timestampPlaceholder: string
  datetimePlaceholder: string
  durationPlaceholder: string
  durationHint: string
  periodStart: string
  periodEnd: string
  subMsHint: string
  errors: {
    tooLong: string
    invalid: string
    outOfRange: string
    invalidDate: string
  }
  notify: {
    nothingToCopy: string
    copied: string
    copiedUnit: string
  }
  examples: Record<string, { label: string; description: string }>
}

export interface TimestampPageMessages {
  metaTitle: string
  metaDescription: string
  instructions: string[]
  faq: FaqItem[]
}

export const timestampToolZh: TimestampToolMessages = {
  units: { s: "秒", ms: "毫秒", us: "微秒", ns: "纳秒" },
  periods: { year: "年", month: "月", day: "日" },
  durationUnits: { year: "年", month: "月", day: "日", hour: "时", minute: "分", second: "秒" },
  example: "示例",
  sections: {
    currentEpoch: "当前 Unix 时间戳",
    converter: "时间戳 ↔ 日期互转",
    periodBounds: "年 / 月 / 日的起止时间",
    durationBreakdown: "秒数 → 年 / 月 / 日 / 时 / 分 / 秒",
  },
  utc: "UTC",
  local: "本地",
  localWithTz: "本地 ({tz})",
  now: "当前时间",
  timestamp: "Unix 时间戳",
  datetime: "日期时间",
  copy: "复制",
  clear: "清空",
  h24: "24h",
  h12: "12h",
  iso8601: "ISO 8601",
  timestampPlaceholder: "支持秒 / 毫秒 / 微秒 / 纳秒，按位数自动识别",
  datetimePlaceholder: "Y-M-D、M/D/Y、ISO 8601...",
  durationPlaceholder: "例如 90061",
  durationHint: "输入总秒数，拆解为持续时间（月按 30.437 天、年按 365.25 天）。",
  periodStart: "开始",
  periodEnd: "结束",
  subMsHint: "微秒/纳秒精度超出 JavaScript Date 显示能力，日期按毫秒截断展示。",
  errors: {
    tooLong: "时间戳位数过多（最多 19 位纳秒）",
    invalid: "时间戳格式无效",
    outOfRange: "时间戳超出有效日期范围",
    invalidDate: "无法解析日期，支持 Y-M-D、M/D/Y、ISO 8601 等格式",
  },
  notify: { nothingToCopy: "没有可复制的内容", copied: "已复制 {label}", copiedUnit: "已复制{unit}时间戳" },
  examples: {
    "epoch-seconds": { label: "Unix 秒", description: "2018-01-01 00:00:00 UTC" },
    "epoch-ms": { label: "Unix 毫秒", description: "毫秒级时间戳" },
  },
}

export const timestampToolEn: TimestampToolMessages = {
  units: { s: "Seconds", ms: "Milliseconds", us: "Microseconds", ns: "Nanoseconds" },
  periods: { year: "Year", month: "Month", day: "Day" },
  durationUnits: { year: "Y", month: "M", day: "D", hour: "H", minute: "Min", second: "S" },
  example: "Example",
  sections: {
    currentEpoch: "Current Unix timestamp",
    converter: "Timestamp ↔ Date",
    periodBounds: "Start & end of year / month / day",
    durationBreakdown: "Seconds → Y/M/D/H/Min/S",
  },
  utc: "UTC",
  local: "Local",
  localWithTz: "Local ({tz})",
  now: "Now",
  timestamp: "Unix timestamp",
  datetime: "Date & time",
  copy: "Copy",
  clear: "Clear",
  h24: "24h",
  h12: "12h",
  iso8601: "ISO 8601",
  timestampPlaceholder: "Seconds / ms / μs / ns — auto-detected by length",
  datetimePlaceholder: "Y-M-D, M/D/Y, ISO 8601...",
  durationPlaceholder: "e.g. 90061",
  durationHint: "Enter total seconds to break down (month ≈ 30.437 days, year ≈ 365.25 days).",
  periodStart: "Start",
  periodEnd: "End",
  subMsHint: "Sub-millisecond precision is truncated for date display.",
  errors: {
    tooLong: "Too many digits (max 19 for nanoseconds)",
    invalid: "Invalid timestamp format",
    outOfRange: "Timestamp out of valid date range",
    invalidDate: "Cannot parse date. Try Y-M-D, M/D/Y, or ISO 8601.",
  },
  notify: { nothingToCopy: "Nothing to copy", copied: "Copied {label}", copiedUnit: "Copied {unit} timestamp" },
  examples: {
    "epoch-seconds": { label: "Unix seconds", description: "2018-01-01 00:00:00 UTC" },
    "epoch-ms": { label: "Unix ms", description: "Millisecond timestamp" },
  },
}

export const timestampToolJa: TimestampToolMessages = {
  units: { s: "秒", ms: "ミリ秒", us: "マイクロ秒", ns: "ナノ秒" },
  periods: { year: "年", month: "月", day: "日" },
  durationUnits: { year: "年", month: "月", day: "日", hour: "時", minute: "分", second: "秒" },
  example: "サンプル",
  sections: {
    currentEpoch: "現在の Unix タイムスタンプ",
    converter: "タイムスタンプ ↔ 日時",
    periodBounds: "年/月/日の開始と終了",
    durationBreakdown: "秒数 → 年/月/日/時/分/秒",
  },
  utc: "UTC",
  local: "ローカル",
  localWithTz: "ローカル ({tz})",
  now: "現在時刻",
  timestamp: "Unix タイムスタンプ",
  datetime: "日時",
  copy: "コピー",
  clear: "クリア",
  h24: "24h",
  h12: "12h",
  iso8601: "ISO 8601",
  timestampPlaceholder: "秒/ミリ秒/マイクロ秒/ナノ秒 — 桁数で自動判定",
  datetimePlaceholder: "Y-M-D、M/D/Y、ISO 8601...",
  durationPlaceholder: "例: 90061",
  durationHint: "総秒数を分解（月=30.437日、年=365.25日）。",
  periodStart: "開始",
  periodEnd: "終了",
  subMsHint: "ミリ秒未満の精度は日時表示で切り捨てられます。",
  errors: {
    tooLong: "桁数が多すぎます（ナノ秒は最大19桁）",
    invalid: "タイムスタンプ形式が無効です",
    outOfRange: "有効な日付範囲外です",
    invalidDate: "日付を解析できません。Y-M-D、M/D/Y、ISO 8601 を試してください。",
  },
  notify: { nothingToCopy: "コピーする内容がありません", copied: "{label} をコピーしました", copiedUnit: "{unit} タイムスタンプをコピーしました" },
  examples: {
    "epoch-seconds": { label: "Unix 秒", description: "2018-01-01 00:00:00 UTC" },
    "epoch-ms": { label: "Unix ミリ秒", description: "ミリ秒タイムスタンプ" },
  },
}

export const timestampPageZh: TimestampPageMessages = {
  metaTitle: "时间戳转换 - 免费在线工具",
  metaDescription: "Unix 时间戳与日期互转，支持秒/毫秒/微秒/纳秒、UTC/本地时区。",
  instructions: [
    "实时显示当前 Unix 时间戳（秒/毫秒/微秒/纳秒），时间戳与可读日期双向互转，支持 UTC 与本地时区、24h/12h 制。",
    "还可查看所选日期所在年/月/日的起止时间，以及将总秒数拆解为年、月、日、时、分、秒。",
  ],
  faq: [
    { q: "支持哪些时间戳精度？", a: "支持秒（10 位）、毫秒（13 位）、微秒（16 位）、纳秒（19 位），按输入位数自动识别。" },
    { q: "UTC 和本地时区如何切换？", a: "选择 UTC 时按协调世界时解释；选择本地时使用浏览器系统时区，并展示对照值。" },
    { q: "秒数拆解的规则是什么？", a: "月按 30.437 天、年按 365.25 天计算，适用于持续时间拆解，而非精确日历日期。" },
  ],
}

export const timestampPageEn: TimestampPageMessages = {
  metaTitle: "Timestamp Converter - Free Online Tool",
  metaDescription: "Convert Unix timestamps and dates. Seconds/ms/μs/ns, UTC/local timezone.",
  instructions: [
    "Live Unix timestamps (s/ms/μs/ns), bidirectional timestamp ↔ date conversion, UTC/local, 24h/12h.",
    "View start/end of year/month/day and break total seconds into duration units.",
  ],
  faq: [
    { q: "Which timestamp precisions are supported?", a: "Seconds (10 digits), ms (13), μs (16), ns (19) — auto-detected." },
    { q: "UTC vs local timezone?", a: "UTC uses coordinated universal time; Local uses your browser timezone, with both shown." },
    { q: "Duration breakdown rules?", a: "Month ≈ 30.437 days, year ≈ 365.25 days — for durations, not calendar dates." },
  ],
}

export const timestampPageJa: TimestampPageMessages = {
  metaTitle: "タイムスタンプ変換 - 無料オンラインツール",
  metaDescription: "Unix タイムスタンプと日時の相互変換。秒/ミリ秒/マイクロ秒/ナノ秒、UTC/ローカル。",
  instructions: [
    "現在の Unix タイムスタンプ（秒/ミリ秒/マイクロ秒/ナノ秒）をリアルタイム表示。UTC/ローカル、24h/12h 対応。",
    "年/月/日の開始・終了時刻、秒数の分解も利用できます。",
  ],
  faq: [
    { q: "対応する精度は？", a: "秒（10桁）、ミリ秒（13）、マイクロ秒（16）、ナノ秒（19）— 桁数で自動判定。" },
    { q: "UTC とローカルの違い？", a: "UTC は協定世界時、ローカルはブラウザのタイムゾーン。両方表示します。" },
    { q: "秒数分解のルール？", a: "月=30.437日、年=365.25日 — 期間用でカレンダー日付ではありません。" },
  ],
}
