"use client"

import { useState, useCallback } from "react"
import {
  Lock,
  Unlock,
  Trash2,
  Copy,
  Download,
  ArrowDownToLine,
  ArrowLeftRight,
  CheckCircle2,
  Link2,
  Eraser,
  Binary,
  Sparkles,
  ListOrdered,
} from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { JsonLineEditor } from "@/components/tools/json-line-editor"
import {
  encodeBase64,
  decodeBase64,
  encodeBase64Url,
  decodeBase64Url,
  cleanBase64,
  isLikelyBase64,
  validateBase64,
  toDataUri,
  fromDataUri,
  hexToBase64,
  base64ToHex,
  textToHex,
  hexToText,
  getByteLength,
} from "@/lib/base64-utils"

const SAMPLE_TEXT = "Hello, WaiHub! 你好"

const TOAST_ID = "base64-tool-notify"

function notify(
  message: string,
  type: "success" | "error" | "warning" | "info" = "success"
) {
  toast.dismiss(TOAST_ID)
  const opts = { id: TOAST_ID }
  if (type === "error") toast.error(message, opts)
  else if (type === "warning") toast.warning(message, opts)
  else if (type === "info") toast.message(message, opts)
  else toast.success(message, opts)
}

export function Base64Tool() {
  const [input, setInput] = useState(SAMPLE_TEXT)
  const [output, setOutput] = useState("")
  const [showLineNumbers, setShowLineNumbers] = useState(true)
  const [urlSafe, setUrlSafe] = useState(false)

  const runAction = useCallback((fn: () => void, successMsg?: string) => {
    try {
      fn()
      if (successMsg) notify(successMsg)
    } catch (e) {
      notify(e instanceof Error ? e.message : "操作失败", "error")
    }
  }, [])

  const doEncode = (useUrlSafe = urlSafe) => {
    runAction(() => {
      setOutput(useUrlSafe ? encodeBase64Url(input) : encodeBase64(input))
    }, useUrlSafe ? "URL 安全编码完成" : "编码完成")
  }

  const doDecode = (useUrlSafe = urlSafe) => {
    runAction(() => {
      setOutput(useUrlSafe ? decodeBase64Url(input) : decodeBase64(input))
    }, useUrlSafe ? "URL 安全解码完成" : "解码完成")
  }

  const handleSmart = () => {
    runAction(() => {
      const trimmed = input.trim()
      if (trimmed.startsWith("data:")) {
        setOutput(fromDataUri(trimmed))
        notify("已从 Data URI 解码")
        return
      }
      if (/^[0-9a-fA-F\s]+$/.test(trimmed) && trimmed.replace(/\s/g, "").length % 2 === 0 && !isLikelyBase64(trimmed)) {
        setOutput(hexToText(trimmed))
        notify("已从 Hex 解码")
        return
      }
      if (isLikelyBase64(trimmed)) {
        setOutput(urlSafe ? decodeBase64Url(trimmed) : decodeBase64(trimmed))
        notify("已自动解码")
      } else {
        setOutput(urlSafe ? encodeBase64Url(input) : encodeBase64(input))
        notify("已自动编码")
      }
    })
  }

  const handleValidate = () => {
    try {
      const trimmed = input.trim()
      if (!trimmed) {
        notify("输入区为空", "warning")
        return
      }
      if (trimmed.startsWith("data:")) {
        fromDataUri(trimmed)
        notify("✓ 有效的 Data URI")
        return
      }
      if (isLikelyBase64(trimmed)) {
        validateBase64(trimmed)
        notify("✓ 有效的 Base64 字符串")
        return
      }
      notify("输入不像 Base64，可直接编码", "info")
    } catch (e) {
      notify(e instanceof Error ? e.message : "校验失败", "error")
    }
  }

  const handleCleanInput = () => {
    runAction(() => {
      setInput(cleanBase64(input))
    }, "已去除空白字符")
  }

  const handleToDataUri = () => {
    runAction(() => {
      setOutput(toDataUri(input))
    }, "已生成 Data URI")
  }

  const handleFromDataUri = () => {
    runAction(() => {
      setOutput(fromDataUri(input))
    }, "已从 Data URI 提取内容")
  }

  const handleTextToHex = () => {
    runAction(() => {
      setOutput(textToHex(input))
    }, "已转为 Hex")
  }

  const handleHexToBase64 = () => {
    runAction(() => {
      setOutput(hexToBase64(input))
    }, "Hex → Base64 完成")
  }

  const handleBase64ToHex = () => {
    runAction(() => {
      setOutput(base64ToHex(input))
    }, "Base64 → Hex 完成")
  }

  const handleSwap = () => {
    if (!output && !input) return
    const prevInput = input
    setInput(output)
    setOutput(prevInput)
    notify("已交换输入与输出")
  }

  const handleClearInput = () => {
    setInput("")
  }

  const handleClearOutput = () => {
    setOutput("")
  }

  const handleCopyOutput = async () => {
    if (!output) {
      notify("输出区没有内容", "warning")
      return
    }
    try {
      await navigator.clipboard.writeText(output)
      notify("已复制输出")
    } catch {
      notify("复制失败", "error")
    }
  }

  const handleSaveOutput = () => {
    if (!output) {
      notify("输出区没有内容", "warning")
      return
    }
    const blob = new Blob([output], { type: "text/plain;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "base64-result.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    notify("已保存 base64-result.txt")
  }

  const handleApplyToInput = () => {
    if (!output) {
      notify("输出区没有内容", "warning")
      return
    }
    setInput(output)
    notify("已同步到输入区")
  }

  const inputBytes = getByteLength(input)
  const outputBytes = getByteLength(output)

  return (
    <div className="relative z-10 space-y-3">
      <div className="flex flex-wrap items-center gap-1.5 rounded-lg border border-border bg-muted/30 p-2">
        <ToolbarButton icon={Lock} label="编码" onClick={() => doEncode()} />
        <ToolbarButton icon={Unlock} label="解码" onClick={() => doDecode()} />
        <ToolbarButton icon={Sparkles} label="智能" onClick={handleSmart} title="自动识别 Base64/Hex/Data URI 并转换" />

        <span className="mx-0.5 hidden h-5 w-px bg-border sm:inline" />

        <ToolbarButton
          icon={Link2}
          label="URL安全"
          onClick={() => setUrlSafe((v) => !v)}
          active={urlSafe}
          variant="outline"
          title="使用 URL 安全 Base64（- _ 替代 + /）"
        />
        <ToolbarButton icon={Eraser} label="去空白" onClick={handleCleanInput} variant="outline" />
        <ToolbarButton icon={CheckCircle2} label="校验" onClick={handleValidate} variant="outline" />

        <span className="mx-0.5 hidden h-5 w-px bg-border sm:inline" />

        <ToolbarButton icon={Link2} label="Data URI" onClick={handleToDataUri} variant="outline" title="生成 data:...;base64,..." />
        <ToolbarButton icon={Binary} label="Hex" onClick={handleTextToHex} variant="outline" title="文本转 Hex" />
        <ToolbarButton icon={Binary} label="B64→Hex" onClick={handleBase64ToHex} variant="outline" />
        <ToolbarButton icon={Binary} label="Hex→B64" onClick={handleHexToBase64} variant="outline" />

        <span className="mx-0.5 hidden h-5 w-px bg-border sm:inline" />

        <ToolbarButton
          icon={ListOrdered}
          label="行号"
          onClick={() => setShowLineNumbers((v) => !v)}
          active={showLineNumbers}
          variant="outline"
        />
        <ToolbarButton icon={ArrowLeftRight} label="交换" onClick={handleSwap} variant="outline" />
      </div>

      <div className="grid gap-3 lg:grid-cols-2">
        <EditorPanel
          title="原数据"
          meta={`${input.length} 字符 · ${inputBytes} 字节`}
          value={input}
          onChange={setInput}
          showLineNumbers={showLineNumbers}
          placeholder="输入文本、Base64、Hex 或 Data URI..."
          actions={
            <>
              <MiniButton icon={Trash2} label="清空" onClick={handleClearInput} />
              {input.trim().startsWith("data:") && (
                <MiniButton icon={Unlock} label="解析URI" onClick={handleFromDataUri} />
              )}
            </>
          }
        />

        <EditorPanel
          title="结果"
          meta={output ? `${output.length} 字符 · ${outputBytes} 字节` : "等待处理"}
          value={output}
          onChange={setOutput}
          showLineNumbers={showLineNumbers}
          placeholder="编码/解码结果将显示在这里..."
          actions={
            <>
              <MiniButton icon={Copy} label="复制" onClick={handleCopyOutput} />
              <MiniButton icon={Download} label="保存" onClick={handleSaveOutput} />
              <MiniButton icon={ArrowDownToLine} label="同步到输入" onClick={handleApplyToInput} />
              <MiniButton icon={Trash2} label="清空" onClick={handleClearOutput} />
            </>
          }
        />
      </div>

      <p className="text-xs text-muted-foreground">
        左侧保留原文，右侧显示结果。「智能」可自动识别 Base64、Hex、Data URI。Base64 是编码而非加密，不能用于保密。
      </p>
    </div>
  )
}

function EditorPanel({
  title,
  meta,
  value,
  onChange,
  showLineNumbers,
  placeholder,
  actions,
}: {
  title: string
  meta: string
  value: string
  onChange: (v: string) => void
  showLineNumbers: boolean
  placeholder: string
  actions: React.ReactNode
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-border bg-card/50">
      <div className="flex items-center justify-between gap-2 border-b border-border px-3 py-2">
        <div className="min-w-0">
          <div className="text-sm font-medium text-foreground">{title}</div>
          <div className="truncate text-[10px] text-muted-foreground">{meta}</div>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-1">{actions}</div>
      </div>
      <div className="flex min-h-[min(50vh,480px)] flex-1 flex-col">
        <JsonLineEditor
          value={value}
          onChange={onChange}
          showLineNumbers={showLineNumbers}
          placeholder={placeholder}
          className="h-full min-h-[min(50vh,480px)] rounded-none border-0"
        />
      </div>
    </div>
  )
}

function ToolbarButton({
  icon: Icon,
  label,
  onClick,
  active,
  variant = "default",
  title,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  onClick: () => void
  active?: boolean
  variant?: "default" | "outline"
  title?: string
}) {
  return (
    <Button
      type="button"
      size="sm"
      variant={active ? "default" : variant}
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        onClick()
      }}
      title={title ?? label}
      aria-label={label}
      className="h-8 gap-1 px-2 text-xs"
    >
      <Icon className="h-3.5 w-3.5 shrink-0" />
      <span>{label}</span>
    </Button>
  )
}

function MiniButton({
  icon: Icon,
  label,
  onClick,
  title,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  onClick: () => void
  title?: string
}) {
  return (
    <Button
      type="button"
      size="sm"
      variant="ghost"
      onClick={onClick}
      title={title ?? label}
      className="h-7 gap-1 px-2 text-xs text-muted-foreground hover:text-foreground"
    >
      <Icon className="h-3.5 w-3.5" />
      <span className="hidden sm:inline">{label}</span>
    </Button>
  )
}
