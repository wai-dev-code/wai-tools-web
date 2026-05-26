"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export function RegexTesterTool() {
  const [pattern, setPattern] = useState("\\d+")
  const [flags, setFlags] = useState({ g: true, i: false, m: false })
  const [text, setText] = useState("Order 123, price 45.67, id 9999")

  const result = useMemo(() => {
    const flagStr = (flags.g ? "g" : "") + (flags.i ? "i" : "") + (flags.m ? "m" : "")
    try {
      const regex = new RegExp(pattern, flagStr)
      const matches = [...text.matchAll(new RegExp(pattern, flagStr.includes("g") ? flagStr : flagStr + "g"))]
      return { error: null as string | null, matches, regex }
    } catch (e) {
      return { error: e instanceof Error ? e.message : "无效正则", matches: [] as RegExpMatchArray[], regex: null }
    }
  }, [pattern, flags, text])

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="pattern">正则表达式</Label>
          <Input
            id="pattern"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            className="font-mono"
            placeholder="输入正则..."
          />
        </div>
        <div className="space-y-2">
          <Label>Flags</Label>
          <div className="flex gap-4 pt-2">
            {(["g", "i", "m"] as const).map((f) => (
              <label key={f} className="flex items-center gap-2 text-sm">
                <Checkbox
                  checked={flags[f]}
                  onCheckedChange={(c) => setFlags((prev) => ({ ...prev, [f]: !!c }))}
                />
                {f}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="text">测试文本</Label>
        <Textarea
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="min-h-[120px] font-mono text-sm"
        />
      </div>

      {result.error ? (
        <p className="text-sm text-destructive">{result.error}</p>
      ) : (
        <div className="rounded-lg border border-border bg-card/50 p-4">
          <p className="mb-2 text-sm font-medium text-foreground">
            匹配 {result.matches.length} 处
          </p>
          {result.matches.length > 0 ? (
            <ul className="space-y-1 font-mono text-sm text-muted-foreground">
              {result.matches.map((m, i) => (
                <li key={i}>
                  [{m.index}] &quot;{m[0]}&quot;
                  {m.length > 1 && ` → 分组: ${m.slice(1).map((g) => `"${g}"`).join(", ")}`}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">无匹配结果</p>
          )}
        </div>
      )}
    </div>
  )
}
