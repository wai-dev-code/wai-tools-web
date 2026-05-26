"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

function generateUuidV4(): string {
  return crypto.randomUUID()
}

export function UuidGeneratorTool() {
  const [count, setCount] = useState(5)
  const [uuids, setUuids] = useState<string[]>([])

  const generate = useCallback(() => {
    const n = Math.min(Math.max(1, count), 100)
    setUuids(Array.from({ length: n }, () => generateUuidV4()))
  }, [count])

  const copyAll = () => navigator.clipboard.writeText(uuids.join("\n"))

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end gap-4">
        <div className="space-y-2">
          <Label htmlFor="count">生成数量 (1-100)</Label>
          <Input
            id="count"
            type="number"
            min={1}
            max={100}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="w-32"
          />
        </div>
        <Button onClick={generate}>生成 UUID v4</Button>
        {uuids.length > 0 && (
          <Button variant="outline" onClick={copyAll}>复制全部</Button>
        )}
      </div>
      {uuids.length > 0 && (
        <Textarea
          readOnly
          value={uuids.join("\n")}
          className="min-h-[200px] font-mono text-sm"
        />
      )}
    </div>
  )
}
