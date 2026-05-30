"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ToolExampleMenu } from "@/components/tool-example-menu"
import { regexTesterExamples, type RegexTesterExample } from "@/lib/tool-examples"

export function RegexTesterTool() {
  const [pattern, setPattern] = useState("")
  const [flags, setFlags] = useState({ g: true, i: false, m: false })
  const [text, setText] = useState("")

  const applyExample = (example: RegexTesterExample) => {
    setPattern(example.pattern)
    setFlags(example.flags)
    setText(example.text)
  }

  const result = useMemo(() => {
    if (!pattern.trim()) {
      return { error: null as string | null, matches: [] as RegExpMatchArray[], regex: null }
    }
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
      <div className="flex justify-end">
        <ToolExampleMenu examples={regexTesterExamples} onApply={applyExample} />
      </div>

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
          placeholder="输入待匹配的文本..."
        />
      </div>

      {result.error && (
        <p className="text-sm text-destructive">{result.error}</p>
      )}

      {!result.error && pattern.trim() && (
        <div className="space-y-2">
          <Label>匹配结果 ({result.matches.length})</Label>
          {result.matches.length === 0 ? (
            <p className="text-sm text-muted-foreground">无匹配</p>
          ) : (
            <ul className="space-y-1 rounded-md border border-border bg-secondary/30 p-3 font-mono text-sm">
              {result.matches.map((m, i) => (
                <li key={i}>
                  <span className="text-primary">{m[0]}</span>
                  {m.index !== undefined && (
                    <span className="ml-2 text-xs text-muted-foreground">@ {m.index}</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
