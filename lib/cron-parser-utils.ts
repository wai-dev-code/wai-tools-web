export interface CronField {
  name: string
  value: string
  description: string
}

export interface CronParseResult {
  fields: CronField[]
  summary: string
  valid: boolean
  error?: string
}

const FIELD_NAMES = ["minute", "hour", "dayOfMonth", "month", "dayOfWeek"] as const

function describeField(
  field: string,
  type: (typeof FIELD_NAMES)[number],
  labels: Record<string, string>,
): string {
  const trimmed = field.trim()
  if (trimmed === "*") return labels.every
  if (trimmed.startsWith("*/")) {
    const step = trimmed.slice(2)
    return labels.everyStep.replace("{step}", step)
  }
  if (trimmed.includes("-") && !trimmed.includes(",")) {
    const [start, end] = trimmed.split("-")
    return labels.range.replace("{start}", start).replace("{end}", end)
  }
  if (trimmed.includes(",")) {
    return labels.list.replace("{values}", trimmed)
  }
  if (type === "minute") return labels.atMinute.replace("{value}", trimmed)
  if (type === "hour") return labels.atHour.replace("{value}", trimmed)
  if (type === "dayOfMonth") return labels.onDay.replace("{value}", trimmed)
  if (type === "month") return labels.inMonth.replace("{value}", trimmed)
  return labels.onWeekday.replace("{value}", trimmed)
}

export function parseCronExpression(
  expression: string,
  labels: {
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
  },
): CronParseResult {
  const trimmed = expression.trim()
  if (!trimmed) {
    return { fields: [], summary: labels.empty, valid: true }
  }

  const parts = trimmed.split(/\s+/)
  if (parts.length !== 5) {
    return {
      fields: [],
      summary: "",
      valid: false,
      error: labels.invalidFields,
    }
  }

  const fieldLabels = [
    labels.fieldMinute,
    labels.fieldHour,
    labels.fieldDayOfMonth,
    labels.fieldMonth,
    labels.fieldDayOfWeek,
  ]

  const fields: CronField[] = parts.map((value, index) => {
    const type = FIELD_NAMES[index]
    return {
      name: fieldLabels[index],
      value,
      description: describeField(value, type, labels),
    }
  })

  const summary = `${labels.summaryPrefix} ${fields.map((f) => f.description).join(", ")}.`

  return { fields, summary, valid: true }
}
