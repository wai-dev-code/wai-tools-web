"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ToolExampleMenu } from "@/components/tool-example-menu"
import { uuidGeneratorExamples, type UuidGeneratorExample } from "@/lib/tool-examples"

function generateUuidV4(): string {
  return crypto.randomUUID()
}

export function UuidGeneratorTool() {
  const [count, setCount] = useState(1)
  const [uuids, setUuids] = useState<string[]>([])

  const generate = useCallback((n = count) => {
    const num = Math.min(Math.max(1, n), 100)
    setCount(num)
    setUuids(Array.from({ length: num }, () => generateUuidV4()))
  }, [count])

  const applyExample = (example: UuidGeneratorExample) => {
    generate(example.count)
  }

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
        <Button onClick={() => generate()}>生成 UUID v4</Button>
        <ToolExampleMenu examples={uuidGeneratorExamples} onApply={applyExample} className="h-9 gap-1 px-3 text-sm" />
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
