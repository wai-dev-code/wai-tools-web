"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function TimestampTool() {
  const [timestamp, setTimestamp] = useState("")
  const [datetime, setDatetime] = useState("")
  const [unit, setUnit] = useState<"s" | "ms">("s")

  useEffect(() => {
    const now = Math.floor(Date.now() / 1000)
    setTimestamp(String(now))
    setDatetime(new Date().toISOString().slice(0, 19))
  }, [])

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
      <div className="flex gap-2">
        <Button variant={unit === "s" ? "default" : "outline"} size="sm" onClick={() => setUnit("s")}>
          秒 (s)
        </Button>
        <Button variant={unit === "ms" ? "default" : "outline"} size="sm" onClick={() => setUnit("ms")}>
          毫秒 (ms)
        </Button>
        <Button variant="outline" size="sm" onClick={useNow}>
          当前时间
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="ts">Unix 时间戳</Label>
          <Input
            id="ts"
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
            className="font-mono"
          />
          <Button onClick={tsToDate} className="w-full">时间戳 → 日期</Button>
        </div>
        <div className="space-y-2">
          <Label htmlFor="dt">日期时间 (YYYY-MM-DD HH:mm:ss)</Label>
          <Input
            id="dt"
            value={datetime}
            onChange={(e) => setDatetime(e.target.value)}
            className="font-mono"
            placeholder="2024-01-15 12:30:00"
          />
          <Button onClick={dateToTs} className="w-full">日期 → 时间戳</Button>
        </div>
      </div>
    </div>
  )
}
