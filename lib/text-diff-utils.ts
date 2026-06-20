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

export function diffLines(left: string, right: string): DiffLine[] {
  const a = left.split("\n")
  const b = right.split("\n")
  const dp = lcsTable(a, b)
  const raw: { type: "equal" | "removed" | "added"; value: string; side: "left" | "right"; line: number }[] =
    []

  let i = a.length
  let j = b.length
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && a[i - 1] === b[j - 1]) {
      raw.unshift({ type: "equal", value: a[i - 1], side: "left", line: i })
      i--
      j--
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      raw.unshift({ type: "added", value: b[j - 1], side: "right", line: j })
      j--
    } else {
      raw.unshift({ type: "removed", value: a[i - 1], side: "left", line: i })
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
        left: current.value,
        right: next.value,
        leftLine: current.line,
        rightLine: next.line,
      })
      idx += 2
      continue
    }
    if (current.type === "equal") {
      result.push({ type: "equal", left: current.value, right: current.value, leftLine: current.line, rightLine: current.line })
    } else if (current.type === "removed") {
      result.push({ type: "removed", left: current.value, leftLine: current.line })
    } else {
      result.push({ type: "added", right: current.value, rightLine: current.line })
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
