export type DiffLineType = "equal" | "added" | "removed" | "changed"

export interface DiffLine {
  type: DiffLineType
  left?: string
  right?: string
  leftLine?: number
  rightLine?: number
}

function lcsTable(a: string[], b: string[]): number[][] {
  const m = a.length
  const n = b.length
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0))
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1] + 1
          : Math.max(dp[i - 1][j], dp[i][j - 1])
    }
  }
  return dp
}

export interface DiffOptions {
  ignoreWhitespace?: boolean
}

function normalizeLine(line: string, ignoreWhitespace: boolean): string {
  if (!ignoreWhitespace) return line
  return line.trim().replace(/\s+/g, " ")
}

export function diffLines(left: string, right: string, options?: DiffOptions): DiffLine[] {
  const ignoreWhitespace = options?.ignoreWhitespace ?? false
  const aOrig = left.split("\n")
  const bOrig = right.split("\n")
  const a = aOrig.map((l) => normalizeLine(l, ignoreWhitespace))
  const b = bOrig.map((l) => normalizeLine(l, ignoreWhitespace))
  const dp = lcsTable(a, b)
  const raw: {
    type: "equal" | "removed" | "added"
    leftIdx?: number
    rightIdx?: number
  }[] = []

  let i = a.length
  let j = b.length
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && a[i - 1] === b[j - 1]) {
      raw.unshift({ type: "equal", leftIdx: i - 1, rightIdx: j - 1 })
      i--
      j--
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      raw.unshift({ type: "added", rightIdx: j - 1 })
      j--
    } else {
      raw.unshift({ type: "removed", leftIdx: i - 1 })
      i--
    }
  }

  const result: DiffLine[] = []
  let idx = 0
  while (idx < raw.length) {
    const current = raw[idx]
    const next = raw[idx + 1]
    if (current.type === "removed" && next?.type === "added") {
      result.push({
        type: "changed",
        left: aOrig[current.leftIdx!],
        right: bOrig[next.rightIdx!],
        leftLine: current.leftIdx! + 1,
        rightLine: next.rightIdx! + 1,
      })
      idx += 2
      continue
    }
    if (current.type === "equal") {
      const li = current.leftIdx!
      result.push({
        type: "equal",
        left: aOrig[li],
        right: bOrig[current.rightIdx!],
        leftLine: li + 1,
        rightLine: current.rightIdx! + 1,
      })
    } else if (current.type === "removed") {
      const li = current.leftIdx!
      result.push({ type: "removed", left: aOrig[li], leftLine: li + 1 })
    } else {
      const ri = current.rightIdx!
      result.push({ type: "added", right: bOrig[ri], rightLine: ri + 1 })
    }
    idx++
  }
  return result
}

export function diffStats(lines: DiffLine[]) {
  return {
    added: lines.filter((l) => l.type === "added").length,
    removed: lines.filter((l) => l.type === "removed").length,
    changed: lines.filter((l) => l.type === "changed").length,
    equal: lines.filter((l) => l.type === "equal").length,
  }
}
