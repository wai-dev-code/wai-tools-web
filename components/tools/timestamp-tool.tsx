"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ToolExampleMenu } from "@/components/tool-example-menu"
import { timestampExamples, type TimestampExample } from "@/lib/tool-examples"

export function TimestampTool() {
  const [timestamp, setTimestamp] = useState("")
  const [datetime, setDatetime] = useState("")
  const [unit, setUnit] = useState<"s" | "ms">("s")

  const applyExample = (example: TimestampExample) => {
    setTimestamp(example.timestamp)
    setDatetime(example.datetime)
    setUnit(example.unit)
  }

  const tsToDate = () => {
    let ts = Number(timestamp)
    if (isNaN(ts)) return
    if (unit === "s" && ts < 1e12) ts *= 1000
    else if (unit === "ms" && ts < 1e12) ts *= 1000
    setDatetime(new Date(ts).toISOString().slice(0, 19).replace("T", " "))
  }

  const dateToTs = () => {
    const d = new Date(datetime.replace(" ", "T"))
    if (isNaN(d.getTime())) return
    const ts = unit === "s" ? Math.floor(d.getTime() / 1000) : d.getTime()
    setTimestamp(String(ts))
  }

  const useNow = () => {
    const now = Date.now()
    setTimestamp(String(unit === "s" ? Math.floor(now / 1000) : now))
    setDatetime(new Date(now).toISOString().slice(0, 19).replace("T", " "))
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-2">
        <Button variant={unit === "s" ? "default" : "outline"} size="sm" onClick={() => setUnit("s")}>
          秒 (s)
        </Button>
        <Button variant={unit === "ms" ? "default" : "outline"} size="sm" onClick={() => setUnit("ms")}>
          毫秒 (ms)
        </Button>
        <Button variant="outline" size="sm" onClick={useNow}>
          当前时间
        </Button>
        <ToolExampleMenu examples={timestampExamples} onApply={applyExample} className="h-8 gap-1 px-2 text-xs" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="ts">Unix 时间戳</Label>
          <Input
            id="ts"
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
            className="font-mono"
            placeholder="输入时间戳..."
          />
          <Button variant="outline" size="sm" onClick={tsToDate}>
            转为日期 →
          </Button>
        </div>
        <div className="space-y-2">
          <Label htmlFor="dt">日期时间</Label>
          <Input
            id="dt"
            value={datetime}
            onChange={(e) => setDatetime(e.target.value)}
            className="font-mono"
            placeholder="YYYY-MM-DD HH:mm:ss"
          />
          <Button variant="outline" size="sm" onClick={dateToTs}>
            ← 转为时间戳
          </Button>
        </div>
      </div>
    </div>
  )
}
