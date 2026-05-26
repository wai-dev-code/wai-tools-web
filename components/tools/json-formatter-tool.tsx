"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function JsonFormatterTool() {
  const [input, setInput] = useState('{\n  "name": "WaiHub",\n  "version": 1\n}')
  const [output, setOutput] = useState("")
  const [error, setError] = useState("")

  const format = useCallback((indent: number | null) => {
    setError("")
    try {
      const parsed = JSON.parse(input)
      setOutput(JSON.stringify(parsed, null, indent))
    } catch (e) {
      setError(e instanceof Error ? e.message : "JSON 解析失败")
      setOutput("")
    }
  }, [input])

  const validate = useCallback(() => {
    setError("")
    try {
      JSON.parse(input)
      setOutput("✓ JSON 格式有效")
    } catch (e) {
      setError(e instanceof Error ? e.message : "JSON 解析失败")
      setOutput("")
    }
  }, [input])

  const copy = () => navigator.clipboard.writeText(output)

  return (
    <div className="space-y-4">
      <Tabs defaultValue="format">
        <TabsList>
          <TabsTrigger value="format">格式化</TabsTrigger>
          <TabsTrigger value="minify">压缩</TabsTrigger>
          <TabsTrigger value="validate">验证</TabsTrigger>
        </TabsList>
        <TabsContent value="format" className="space-y-3">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-[200px] font-mono text-sm"
            placeholder="粘贴 JSON 数据..."
          />
          <div className="flex flex-wrap gap-2">
            <Button onClick={() => format(2)}>格式化 (2 空格)</Button>
            <Button variant="outline" onClick={() => format(4)}>格式化 (4 空格)</Button>
            <Button variant="outline" onClick={copy} disabled={!output}>复制结果</Button>
          </div>
        </TabsContent>
        <TabsContent value="minify" className="space-y-3">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-[200px] font-mono text-sm"
          />
          <Button onClick={() => format(null)}>压缩 JSON</Button>
        </TabsContent>
        <TabsContent value="validate" className="space-y-3">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-[200px] font-mono text-sm"
          />
          <Button onClick={validate}>验证 JSON</Button>
        </TabsContent>
      </Tabs>
      {error && <p className="text-sm text-destructive">{error}</p>}
      {output && (
        <Textarea
          readOnly
          value={output}
          className="min-h-[160px] font-mono text-sm"
        />
      )}
    </div>
  )
}
