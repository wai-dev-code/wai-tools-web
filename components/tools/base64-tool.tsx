"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Base64Tool() {
  const [encodeInput, setEncodeInput] = useState("Hello, WaiHub!")
  const [decodeInput, setDecodeInput] = useState("SGVsbG8sIFdhaUh1YiE=")
  const [encodeOutput, setEncodeOutput] = useState("")
  const [decodeOutput, setDecodeOutput] = useState("")
  const [error, setError] = useState("")

  const encode = () => {
    setError("")
    try {
      setEncodeOutput(btoa(unescape(encodeURIComponent(encodeInput))))
    } catch (e) {
      setError(e instanceof Error ? e.message : "编码失败")
    }
  }

  const decode = () => {
    setError("")
    try {
      setDecodeOutput(decodeURIComponent(escape(atob(decodeInput.trim()))))
    } catch (e) {
      setError("Base64 解码失败，请检查输入是否有效")
      setDecodeOutput("")
    }
  }

  return (
    <Tabs defaultValue="encode" className="space-y-4">
      <TabsList>
        <TabsTrigger value="encode">编码</TabsTrigger>
        <TabsTrigger value="decode">解码</TabsTrigger>
      </TabsList>
      <TabsContent value="encode" className="space-y-3">
        <Textarea
          value={encodeInput}
          onChange={(e) => setEncodeInput(e.target.value)}
          className="min-h-[120px] font-mono text-sm"
          placeholder="输入要编码的文本..."
        />
        <Button onClick={encode}>Base64 编码</Button>
        {encodeOutput && (
          <Textarea readOnly value={encodeOutput} className="min-h-[80px] font-mono text-sm" />
        )}
      </TabsContent>
      <TabsContent value="decode" className="space-y-3">
        <Textarea
          value={decodeInput}
          onChange={(e) => setDecodeInput(e.target.value)}
          className="min-h-[120px] font-mono text-sm"
          placeholder="输入 Base64 字符串..."
        />
        <Button onClick={decode}>Base64 解码</Button>
        {decodeOutput && (
          <Textarea readOnly value={decodeOutput} className="min-h-[80px] font-mono text-sm" />
        )}
      </TabsContent>
      {error && <p className="text-sm text-destructive">{error}</p>}
    </Tabs>
  )
}
