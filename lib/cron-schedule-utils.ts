/** Parse cron field into allowed values; returns null if invalid */
export function expandCronField(field: string, min: number, max: number): Set<number> | null {
  const trimmed = field.trim()
  if (!trimmed) return null

  const values = new Set<number>()

  for (const segment of trimmed.split(",")) {
    const part = segment.trim()
    if (!part) return null

    if (part.includes("/")) {
      const slashIdx = part.indexOf("/")
      const base = part.slice(0, slashIdx)
      const step = Number(part.slice(slashIdx + 1))
      if (!Number.isInteger(step) || step < 1) return null

      let start = min
      let end = max
      if (base && base !== "*") {
        if (base.includes("-")) {
          const [a, b] = base.split("-")
          start = Number(a)
          end = Number(b)
        } else {
          start = Number(base)
        }
        if (!Number.isInteger(start) || !Number.isInteger(end)) return null
      }

      for (let i = start; i <= end; i += step) {
        if (i < min || i > max) return null
        values.add(i)
      }
      continue
    }

    if (part.includes("-")) {
      const [a, b] = part.split("-")
      const start = Number(a)
      const end = Number(b)
      if (!Number.isInteger(start) || !Number.isInteger(end) || start > end) return null
      for (let i = start; i <= end; i++) {
        if (i < min || i > max) return null
        values.add(i)
      }
      continue
    }

    if (part === "*") {
      for (let i = min; i <= max; i++) values.add(i)
      continue
    }

    const n = Number(part)
    if (!Number.isInteger(n) || n < min || n > max) return null
    values.add(n)
  }

  return values.size > 0 ? values : null
}

function matchesDowField(field: string, dow: number): boolean {
  if (field.trim() === "*") return true
  const set = expandCronField(field, 0, 7)
  if (!set) return false
  if (set.has(dow)) return true
  if (dow === 0 && set.has(7)) return true
  return false
}

function matchesDay(domField: string, dowField: string, date: Date): boolean {
  const domWildcard = domField.trim() === "*"
  const dowWildcard = dowField.trim() === "*"

  const dom = date.getDate()
  const domSet = domWildcard ? null : expandCronField(domField, 1, 31)
  const domMatch = domWildcard || (domSet?.has(dom) ?? false)
  const dowMatch = matchesDowField(dowField, date.getDay())

  if (domWildcard && dowWildcard) return true
  if (domWildcard) return dowMatch
  if (dowWildcard) return domMatch
  return domMatch || dowMatch
}

export function cronExpressionMatches(expression: string, date: Date): boolean {
  const parts = expression.trim().split(/\s+/)
  if (parts.length !== 5) return false

  const [minuteField, hourField, domField, monthField, dowField] = parts
  const minuteSet = expandCronField(minuteField, 0, 59)
  const hourSet = expandCronField(hourField, 0, 23)
  const monthSet = expandCronField(monthField, 1, 12)

  if (!minuteSet || !hourSet || !monthSet) return false

  const minute = date.getMinutes()
  const hour = date.getHours()
  const month = date.getMonth() + 1

  if (!minuteSet.has(minute)) return false
  if (!hourSet.has(hour)) return false
  if (!monthSet.has(month)) return false
  if (!matchesDay(domField, dowField, date)) return false

  return true
}

function startOfNextMinute(from: Date): Date {
  const next = new Date(from)
  next.setSeconds(0, 0)
  next.setMilliseconds(0)
  next.setMinutes(next.getMinutes() + 1)
  return next
}

const MAX_SCAN_MINUTES = 366 * 24 * 60

/** Return upcoming execution times for a valid 5-field cron expression */
export function getCronNextRuns(expression: string, count = 5, fromDate?: Date): Date[] {
  const trimmed = expression.trim()
  if (!trimmed) return []

  const parts = trimmed.split(/\s+/)
  if (parts.length !== 5) return []

  const runs: Date[] = []
  let cursor = startOfNextMinute(fromDate ?? new Date())
  let scanned = 0

  while (runs.length < count && scanned < MAX_SCAN_MINUTES) {
    if (cronExpressionMatches(trimmed, cursor)) {
      runs.push(new Date(cursor))
    }
    cursor = new Date(cursor.getTime() + 60_000)
    scanned++
  }

  return runs
}

export const CRON_PRESET_EXPRESSIONS = [
  { id: "everyMinute", expression: "* * * * *" },
  { id: "hourly", expression: "0 * * * *" },
  { id: "dailyMidnight", expression: "0 0 * * *" },
  { id: "daily9am", expression: "0 9 * * *" },
  { id: "weekdays9am", expression: "0 9 * * 1-5" },
  { id: "weeklyMonday", expression: "0 9 * * 1" },
  { id: "monthlyFirst", expression: "0 0 1 * *" },
] as const

export type CronPresetId = (typeof CRON_PRESET_EXPRESSIONS)[number]["id"]
