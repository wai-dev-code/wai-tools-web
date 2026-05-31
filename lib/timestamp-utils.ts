export type TimestampUnit = "s" | "ms" | "us" | "ns"
export type TimezoneMode = "utc" | "local"

const UNIT_SCALE: Record<TimestampUnit, bigint> = {
  s: 1n,
  ms: 1_000n,
  us: 1_000_000n,
  ns: 1_000_000_000n,
}

/** JavaScript Date 可表示的毫秒绝对值上限（约 ±275760 年） */
const MAX_MS_ABS = 8640000000000000

export type TimestampErrorCode = "tooLong" | "invalid" | "outOfRange"

export interface TimestampParseResult {
  ms: number | null
  error: TimestampErrorCode | null
  effectiveUnit: TimestampUnit | null
}

/** 按位数自动识别时间戳单位 */
export function detectTimestampUnit(raw: string): TimestampUnit {
  const digits = raw.replace(/\D/g, "")
  if (digits.length <= 10) return "s"
  if (digits.length <= 13) return "ms"
  if (digits.length <= 16) return "us"
  return "ns"
}

function normalizeTimestampDigits(raw: string): string | null {
  const trimmed = raw.trim()
  if (!trimmed) return null
  const negative = trimmed.startsWith("-")
  const digits = trimmed.replace(/\D/g, "")
  if (!digits) return null
  if (digits.length > 19) return null
  return negative ? `-${digits}` : digits
}

/** 将时间戳字符串转为毫秒，大整数用 BigInt 避免精度丢失 */
export function parseTimestampToMs(raw: string, unit: TimestampUnit): TimestampParseResult {
  const normalized = normalizeTimestampDigits(raw)
  if (!normalized) {
    if (raw.trim() && raw.replace(/\D/g, "").length > 19) {
      return { ms: null, error: "tooLong", effectiveUnit: null }
    }
    return { ms: null, error: raw.trim() ? "invalid" : null, effectiveUnit: null }
  }

  const negative = normalized.startsWith("-")
  const digits = negative ? normalized.slice(1) : normalized
  const effectiveUnit =
    unit === "s" && digits.length > 10 ? detectTimestampUnit(digits) : unit

  try {
    let msBig: bigint
    const value = BigInt(negative ? `-${digits}` : digits)

    if (digits.length > 15 || effectiveUnit === "us" || effectiveUnit === "ns") {
      // 16 位以上超出 Number.MAX_SAFE_INTEGER，必须用 BigInt
      msBig = (value * 1000n) / UNIT_SCALE[effectiveUnit]
    } else {
      const n = Number(value)
      if (!Number.isFinite(n)) {
        return { ms: null, error: "invalid", effectiveUnit }
      }
      const ms = (n / Number(UNIT_SCALE[effectiveUnit])) * 1000
      if (!Number.isFinite(ms)) {
        return { ms: null, error: "outOfRange", effectiveUnit }
      }
      return validateMs(ms, effectiveUnit)
    }

    if (msBig > BigInt(MAX_MS_ABS) || msBig < -BigInt(MAX_MS_ABS)) {
      return { ms: null, error: "outOfRange", effectiveUnit }
    }

    const ms = Number(msBig)
    return validateMs(ms, effectiveUnit)
  } catch {
    return { ms: null, error: "invalid", effectiveUnit }
  }
}

function validateMs(ms: number, effectiveUnit: TimestampUnit): TimestampParseResult {
  if (!Number.isFinite(ms)) {
    return { ms: null, error: "invalid", effectiveUnit }
  }
  const d = new Date(ms)
  if (isNaN(d.getTime())) {
    return { ms: null, error: "outOfRange", effectiveUnit }
  }
  return { ms, error: null, effectiveUnit }
}

export function timestampToMs(value: number, unit: TimestampUnit): number {
  return value / Number(UNIT_SCALE[unit]) * 1000
}

export function msToTimestamp(ms: number, unit: TimestampUnit): string {
  if (!Number.isFinite(ms)) return ""
  const scaled = (ms / 1000) * Number(UNIT_SCALE[unit])
  if (!Number.isFinite(scaled)) return ""
  return String(Math.trunc(scaled))
}

/** 安全 ISO 字符串，避免 Invalid Date 抛错 */
export function safeToISOString(ms: number): string {
  if (!Number.isFinite(ms)) return ""
  const d = new Date(ms)
  if (isNaN(d.getTime())) return ""
  try {
    return d.toISOString()
  } catch {
    return ""
  }
}

export function getCurrentEpoch(): Record<TimestampUnit, string> {
  const ms = Date.now()
  return {
    s: msToTimestamp(ms, "s"),
    ms: msToTimestamp(ms, "ms"),
    us: msToTimestamp(ms, "us"),
    ns: msToTimestamp(ms, "ns"),
  }
}

function pad(n: number): string {
  return String(n).padStart(2, "0")
}

export function formatDateTime(
  ms: number,
  mode: TimezoneMode,
  use24h = true
): string {
  const d = new Date(ms)
  if (isNaN(d.getTime())) return ""

  const parts =
    mode === "utc"
      ? {
          y: d.getUTCFullYear(),
          mo: d.getUTCMonth() + 1,
          day: d.getUTCDate(),
          h: d.getUTCHours(),
          mi: d.getUTCMinutes(),
          s: d.getUTCSeconds(),
        }
      : {
          y: d.getFullYear(),
          mo: d.getMonth() + 1,
          day: d.getDate(),
          h: d.getHours(),
          mi: d.getMinutes(),
          s: d.getSeconds(),
        }

  const time =
    use24h
      ? `${pad(parts.h)}:${pad(parts.mi)}:${pad(parts.s)}`
      : format12h(parts.h, parts.mi, parts.s)

  return `${parts.y}-${pad(parts.mo)}-${pad(parts.day)} ${time}`
}

function format12h(h: number, mi: number, s: number): string {
  const ampm = h >= 12 ? "PM" : "AM"
  const h12 = h % 12 || 12
  return `${h12}:${pad(mi)}:${pad(s)} ${ampm}`
}

/** 解析多种常见日期格式；mode 决定无时区字符串按 UTC 还是本地解释 */
export function parseDateInput(raw: string, mode: TimezoneMode): number | null {
  const text = raw.trim()
  if (!text) return null

  // ISO / RFC（含 Z 或 ±offset）
  if (/[zZ]$/.test(text) || /[+-]\d{2}:?\d{2}$/.test(text)) {
    const ms = Date.parse(text)
    return isNaN(ms) ? null : ms
  }

  // Y-M-D [H:M:S]
  const ymd = text.match(
    /^(\d{4})[-/](\d{1,2})[-/](\d{1,2})(?:[ T](\d{1,2}):(\d{2})(?::(\d{2}))?)?$/
  )
  if (ymd) {
    const [, y, mo, d, h = "0", mi = "0", s = "0"] = ymd
    const year = Number(y)
    const month = Number(mo) - 1
    const day = Number(d)
    const hour = Number(h)
    const min = Number(mi)
    const sec = Number(s)
    const ms =
      mode === "utc"
        ? Date.UTC(year, month, day, hour, min, sec)
        : new Date(year, month, day, hour, min, sec).getTime()
    return isNaN(ms) ? null : ms
  }

  // M/D/Y [H:M:S]
  const mdy = text.match(
    /^(\d{1,2})\/(\d{1,2})\/(\d{4})(?:[ T](\d{1,2}):(\d{2})(?::(\d{2}))?)?$/
  )
  if (mdy) {
    const [, mo, d, y, h = "0", mi = "0", s = "0"] = mdy
    const year = Number(y)
    const month = Number(mo) - 1
    const day = Number(d)
    const hour = Number(h)
    const min = Number(mi)
    const sec = Number(s)
    const ms =
      mode === "utc"
        ? Date.UTC(year, month, day, hour, min, sec)
        : new Date(year, month, day, hour, min, sec).getTime()
    return isNaN(ms) ? null : ms
  }

  // D-M-Y
  const dmy = text.match(
    /^(\d{1,2})[-/](\d{1,2})[-/](\d{4})(?:[ T](\d{1,2}):(\d{2})(?::(\d{2}))?)?$/
  )
  if (dmy) {
    const [, d, mo, y, h = "0", mi = "0", s = "0"] = dmy
    const year = Number(y)
    const month = Number(mo) - 1
    const day = Number(d)
    const hour = Number(h)
    const min = Number(mi)
    const sec = Number(s)
    const ms =
      mode === "utc"
        ? Date.UTC(year, month, day, hour, min, sec)
        : new Date(year, month, day, hour, min, sec).getTime()
    return isNaN(ms) ? null : ms
  }

  const fallback = Date.parse(text.includes("T") ? text : text.replace(" ", "T"))
  if (isNaN(fallback)) return null
  // Date.parse 无时区字符串按本地；UTC 模式下需补偿
  if (mode === "utc" && !text.includes("T") && !text.includes("Z")) {
    const local = new Date(text.replace(" ", "T"))
    if (!isNaN(local.getTime())) {
      return Date.UTC(
        local.getFullYear(),
        local.getMonth(),
        local.getDate(),
        local.getHours(),
        local.getMinutes(),
        local.getSeconds()
      )
    }
  }
  return fallback
}

export type Period = "year" | "month" | "day"

export interface PeriodBounds {
  startMs: number
  endMs: number
  startFormatted: string
  endFormatted: string
}

export function getPeriodBounds(ms: number, period: Period, mode: TimezoneMode): PeriodBounds {
  const d = new Date(ms)
  if (isNaN(d.getTime())) {
    return { startMs: 0, endMs: 0, startFormatted: "", endFormatted: "" }
  }

  let startMs: number
  let endMs: number

  if (mode === "utc") {
    const y = d.getUTCFullYear()
    const mo = d.getUTCMonth()
    const day = d.getUTCDate()
    if (period === "year") {
      startMs = Date.UTC(y, 0, 1, 0, 0, 0)
      endMs = Date.UTC(y, 11, 31, 23, 59, 59)
    } else if (period === "month") {
      startMs = Date.UTC(y, mo, 1, 0, 0, 0)
      endMs = Date.UTC(y, mo + 1, 0, 23, 59, 59)
    } else {
      startMs = Date.UTC(y, mo, day, 0, 0, 0)
      endMs = Date.UTC(y, mo, day, 23, 59, 59)
    }
  } else {
    const y = d.getFullYear()
    const mo = d.getMonth()
    const day = d.getDate()
    if (period === "year") {
      startMs = new Date(y, 0, 1, 0, 0, 0).getTime()
      endMs = new Date(y, 11, 31, 23, 59, 59).getTime()
    } else if (period === "month") {
      startMs = new Date(y, mo, 1, 0, 0, 0).getTime()
      endMs = new Date(y, mo + 1, 0, 23, 59, 59).getTime()
    } else {
      startMs = new Date(y, mo, day, 0, 0, 0).getTime()
      endMs = new Date(y, mo, day, 23, 59, 59).getTime()
    }
  }

  return {
    startMs,
    endMs,
    startFormatted: formatDateTime(startMs, mode),
    endFormatted: formatDateTime(endMs, mode),
  }
}

export interface DurationBreakdown {
  years: number
  months: number
  days: number
  hours: number
  minutes: number
  seconds: number
}

/** 将秒数拆解为 年/月/日/时/分/秒（月按 30.437 天，年按 365.25 天） */
export function breakdownSeconds(totalSeconds: number): DurationBreakdown {
  let remaining = Math.abs(Math.trunc(totalSeconds))
  const SECONDS_PER_MINUTE = 60
  const SECONDS_PER_HOUR = 3600
  const SECONDS_PER_DAY = 86400
  const SECONDS_PER_MONTH = 2629743
  const SECONDS_PER_YEAR = 31557600

  const years = Math.floor(remaining / SECONDS_PER_YEAR)
  remaining %= SECONDS_PER_YEAR
  const months = Math.floor(remaining / SECONDS_PER_MONTH)
  remaining %= SECONDS_PER_MONTH
  const days = Math.floor(remaining / SECONDS_PER_DAY)
  remaining %= SECONDS_PER_DAY
  const hours = Math.floor(remaining / SECONDS_PER_HOUR)
  remaining %= SECONDS_PER_HOUR
  const minutes = Math.floor(remaining / SECONDS_PER_MINUTE)
  const seconds = remaining % SECONDS_PER_MINUTE

  return { years, months, days, hours, minutes, seconds }
}

export function getTimezoneLabel(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone
  } catch {
    return "Local"
  }
}
