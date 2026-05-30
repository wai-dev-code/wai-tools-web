"use client"

import { useState, useCallback, useMemo, useRef, useEffect } from "react"
import {
  Lock,
  Unlock,
  Trash2,
  Copy,
  Download,
  ArrowDownToLine,
  CheckCircle2,
  Link2,
  Eraser,
  Binary,
  Sparkles,
  ListOrdered,
  Upload,
  FileImage,
  FileDown,
  Wrench,
  RefreshCw,
  Info,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toolNotify } from "@/lib/tool-notify"
import { JsonLineEditor } from "@/components/tools/json-line-editor"
import { ToolExampleMenu } from "@/components/tool-example-menu"
import { base64Examples, base64ConvertExamples, base64FileExamples, type Base64Example } from "@/lib/tool-examples"
import type { Base64Module } from "@/lib/base64-tool-pages"
import {
  encodeBase64,
  decodeBase64,
  encodeBase64Url,
  decodeBase64Url,
  cleanBase64,
  validateBase64,
  fromDataUri,
  hexToText,
  getByteLength,
  encodeBytesAsBase64,
  detectBase64Input,
  smartConvert,
  getImagePreviewDataUri,
  formatByteSize,
  sniffMimeFromBytes,
  decodeBase64ToBytes,
  applyFormatConvert,
  applyFileAutoProcess,
  inferConvertMode,
  CONVERT_MODE_LABELS,
  type ConvertMode,
} from "@/lib/base64-utils"
import { cn } from "@/lib/utils"

const NOTIFY_ID = "base64-tool"

const MODULE_LABELS: Record<Base64Module, string> = {
  core: "编解码",
  file: "文件",
  convert: "格式转换",
  utils: "实用工具",
}

const CONVERT_MODES: ConvertMode[] = [
  "auto",
  "text-to-datauri",
  "datauri-to-text",
  "text-to-hex",
  "hex-to-text",
  "text-to-base64",
  "base64-to-text",
  "base64-to-hex",
  "hex-to-base64",
]

interface Base64ToolProps {
  module?: Base64Module
}

export function Base64Tool({ module: lockedModule }: Base64ToolProps) {
  const [activeModule, setActiveModule] = useState<Base64Module>(lockedModule ?? "core")
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [showLineNumbers, setShowLineNumbers] = useState(true)
  const [urlSafe, setUrlSafe] = useState(false)
  const [uploadMeta, setUploadMeta] = useState<string | null>(null)
  const [convertMode, setConvertMode] = useState<ConvertMode>("auto")
  const [convertError, setConvertError] = useState<string | null>(null)
  const [fileError, setFileError] = useState<string | null>(null)
  const [fileInfo, setFileInfo] = useState<{ label: string; mime: string | null; byteSize: number } | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const currentModule = lockedModule ?? activeModule
  const inputKind = useMemo(() => detectBase64Input(input), [input])
  const previewSrc = useMemo(
    () => getImagePreviewDataUri(output) ?? getImagePreviewDataUri(input),
    [input, output]
  )

  const runAction = useCallback((fn: () => void, successMsg?: string) => {
    try {
      fn()
      if (successMsg) toolNotify(successMsg, "success", NOTIFY_ID)
    } catch (e) {
      toolNotify(e instanceof Error ? e.message : "操作失败", "error", NOTIFY_ID)
    }
  }, [])

  const applyExample = useCallback(
    (example: Base64Example) => {
      const newInput = example.input
      const newUrlSafe = example.urlSafe ?? urlSafe
      const newConvertMode = example.convertMode ?? convertMode
      const module = lockedModule ?? activeModule

      if (example.urlSafe !== undefined) setUrlSafe(example.urlSafe)
      if (example.convertMode !== undefined) setConvertMode(example.convertMode)
      setInput(newInput)
      setUploadMeta(null)

      try {
        if (module === "convert") {
          setOutput(applyFormatConvert(newInput, newConvertMode))
          setConvertError(null)
          setFileError(null)
          setFileInfo(null)
        } else if (module === "file") {
          const result = applyFileAutoProcess(newInput, newUrlSafe)
          setOutput(result.output)
          setFileInfo({ label: result.label, mime: result.mime, byteSize: result.byteSize })
          setFileError(null)
          setConvertError(null)
        } else if (module === "core") {
          const result = smartConvert(newInput, newUrlSafe)
          setOutput(result.output)
          setConvertError(null)
          setFileError(null)
          setFileInfo(null)
        } else {
          setOutput("")
          setConvertError(null)
          setFileError(null)
          setFileInfo(null)
        }
      } catch (e) {
        const msg = e instanceof Error ? e.message : "处理失败"
        setOutput("")
        if (module === "convert") {
          setConvertError(msg)
          setFileError(null)
        } else if (module === "file") {
          setFileError(msg)
          setConvertError(null)
        } else {
          setConvertError(null)
          setFileError(null)
        }
        setFileInfo(null)
      }

      toolNotify("已加载示例", "success", NOTIFY_ID)
    },
    [lockedModule, activeModule, urlSafe, convertMode]
  )

  const effectiveConvertMode = useMemo(() => {
    if (convertMode !== "auto" || !input.trim()) return convertMode
    return inferConvertMode(input)
  }, [convertMode, input])

  useEffect(() => {
    if (currentModule !== "convert") return
    if (!input.trim()) {
      setOutput("")
      setConvertError(null)
      return
    }
    try {
      setOutput(applyFormatConvert(input, convertMode))
      setConvertError(null)
    } catch (e) {
      setOutput("")
      setConvertError(e instanceof Error ? e.message : "转换失败")
    }
  }, [input, convertMode, currentModule])

  useEffect(() => {
    if (currentModule !== "file") return

    if (!input.trim()) {
      setFileError(null)
      if (uploadMeta) return
      setFileInfo(null)
      setOutput("")
      return
    }

    setUploadMeta(null)
    try {
      const result = applyFileAutoProcess(input, urlSafe)
      setOutput(result.output)
      setFileInfo({ label: result.label, mime: result.mime, byteSize: result.byteSize })
      setFileError(null)
    } catch (e) {
      setOutput("")
      setFileInfo(null)
      setFileError(e instanceof Error ? e.message : "处理失败")
    }
  }, [input, urlSafe, currentModule, uploadMeta])

  const doEncode = (useUrlSafe = urlSafe) => {
    runAction(() => {
      if (!input.trim()) throw new Error("源数据为空")
      setOutput(useUrlSafe ? encodeBase64Url(input) : encodeBase64(input))
    }, useUrlSafe ? "URL 安全编码完成" : "编码完成")
  }

  const doDecode = (useUrlSafe = urlSafe) => {
    runAction(() => {
      if (!input.trim()) throw new Error("源数据为空")
      setOutput(useUrlSafe ? decodeBase64Url(input) : decodeBase64(input))
    }, useUrlSafe ? "URL 安全解码完成" : "解码完成")
  }

  const handleSmart = () => {
    runAction(() => {
      const result = smartConvert(input, urlSafe)
      setOutput(result.output)
      toolNotify(result.action, "success", NOTIFY_ID)
    })
  }

  const handleValidate = () => {
    try {
      const trimmed = input.trim()
      if (!trimmed) {
        toolNotify("源数据为空", "warning", NOTIFY_ID)
        return
      }
      if (trimmed.startsWith("data:")) {
        fromDataUri(trimmed)
        toolNotify("✓ 有效的 Data URI", "success", NOTIFY_ID)
        return
      }
      if (inputKind === "hex") {
        hexToText(trimmed)
        toolNotify("✓ 有效的 Hex 字符串", "success", NOTIFY_ID)
        return
      }
      if (inputKind === "base64" || inputKind === "base64url") {
        validateBase64(trimmed)
        toolNotify("✓ 有效的 Base64 字符串", "success", NOTIFY_ID)
        return
      }
      toolNotify("输入为普通文本，可直接编码", "info", NOTIFY_ID)
    } catch (e) {
      toolNotify(e instanceof Error ? e.message : "校验失败", "error", NOTIFY_ID)
    }
  }

  const handleClean = () => {
    runAction(() => {
      if (!input.trim()) throw new Error("源数据为空")
      setOutput(cleanBase64(input))
    }, "已去除空白，结果在右侧")
  }

  const handleFileUpload = (file: File) => {
    const reader = new FileReader()
    reader.onload = () => {
      try {
        const buffer = reader.result as ArrayBuffer
        const bytes = new Uint8Array(buffer)
        const mime = file.type || sniffMimeFromBytes(bytes)
        const b64 = encodeBytesAsBase64(bytes, urlSafe)
        setInput("")
        setOutput(b64)
        setUploadMeta(`${file.name} · ${formatByteSize(file.size)} · ${mime}`)
        setFileInfo({
          label: `已上传 · ${mime} · ${formatByteSize(bytes.length)}`,
          mime,
          byteSize: bytes.length,
        })
        setFileError(null)
        toolNotify("文件已编码到结果区", "success", NOTIFY_ID)
      } catch (e) {
        toolNotify(e instanceof Error ? e.message : "文件编码失败", "error", NOTIFY_ID)
      }
    }
    reader.onerror = () => toolNotify("文件读取失败", "error", NOTIFY_ID)
    reader.readAsArrayBuffer(file)
  }

  const handleDownloadFile = () => {
    runAction(() => {
      const raw = input.trim() || output.trim()
      if (!raw) throw new Error("没有可下载的内容")
      const kind = detectBase64Input(raw)
      const base64Payload =
        kind === "data-uri"
          ? raw.match(/^data:([^,]*?),([\s\S]+)$/i)![2].trim()
          : kind === "text"
            ? encodeBase64(raw)
            : raw
      const bytes = decodeBase64ToBytes(base64Payload)
      const mime = sniffMimeFromBytes(bytes)
      const blob = new Blob([bytes], { type: mime })
      const url = URL.createObjectURL(blob)
      const ext = mime.split("/")[1]?.split("+")[0] ?? "bin"
      const a = document.createElement("a")
      a.href = url
      a.download = `decoded.${ext}`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }, "文件已开始下载")
  }

  const handleDetectInfo = () => {
    const kind = inputKind
    const labels: Record<string, string> = {
      empty: "空",
      text: "普通文本",
      base64: "标准 Base64",
      base64url: "URL 安全 Base64",
      hex: "Hex",
      "data-uri": "Data URI",
    }
    toolNotify(`检测到：${labels[kind] ?? kind}`, "info", NOTIFY_ID)
  }

  const handleClearInput = () => {
    setInput("")
    setUploadMeta(null)
    setFileInfo(null)
    setFileError(null)
  }

  const handleClearOutput = () => {
    setOutput("")
  }

  const handleCopyOutput = async () => {
    if (!output) {
      toolNotify("结果区没有内容", "warning", NOTIFY_ID)
      return
    }
    try {
      await navigator.clipboard.writeText(output)
      toolNotify("已复制结果", "success", NOTIFY_ID)
    } catch {
      toolNotify("复制失败", "error", NOTIFY_ID)
    }
  }

  const handleSaveOutput = () => {
    if (!output) {
      toolNotify("结果区没有内容", "warning", NOTIFY_ID)
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
    toolNotify("已保存 base64-result.txt", "success", NOTIFY_ID)
  }

  const handleApplyToInput = () => {
    if (!output) {
      toolNotify("结果区没有内容", "warning", NOTIFY_ID)
      return
    }
    setInput(output)
    setUploadMeta(null)
    toolNotify("已同步到源数据区", "success", NOTIFY_ID)
  }

  const inputBytes = getByteLength(input)
  const outputBytes = getByteLength(output)

  const toolbar = (
    <>
      {currentModule === "core" && (
        <>
          <ToolExampleMenu examples={base64Examples} onApply={applyExample} className="h-8 gap-1 px-2 text-xs" />
          <ToolbarDivider />
          <ToolbarButton icon={Lock} label="编码" onClick={() => doEncode()} />
          <ToolbarButton icon={Unlock} label="解码" onClick={() => doDecode()} />
          <ToolbarButton icon={Sparkles} label="智能" onClick={handleSmart} title="自动识别 Base64/Hex/Data URI 并转换" />
          <ToolbarDivider />
          <ToolbarButton
            icon={Link2}
            label="URL安全"
            onClick={() => setUrlSafe((v) => !v)}
            active={urlSafe}
            variant="outline"
            title="使用 URL 安全 Base64（- _ 替代 + /）"
          />
        </>
      )}

      {currentModule === "file" && (
        <>
          <ToolExampleMenu examples={base64FileExamples} onApply={applyExample} className="h-8 gap-1 px-2 text-xs" />
          <ToolbarDivider />
          <ToolbarButton icon={Upload} label="上传文件" onClick={() => fileInputRef.current?.click()} />
          <ToolbarButton icon={FileDown} label="下载文件" onClick={handleDownloadFile} variant="outline" title="将 Base64 还原为文件下载" />
          {fileInfo && (
            <span className="hidden text-xs text-muted-foreground sm:inline">{fileInfo.label}</span>
          )}
          <ToolbarDivider />
          <ToolbarButton
            icon={Link2}
            label="URL安全"
            onClick={() => setUrlSafe((v) => !v)}
            active={urlSafe}
            variant="outline"
          />
        </>
      )}

      {currentModule === "convert" && (
        <>
          <ToolExampleMenu examples={base64ConvertExamples} onApply={applyExample} className="h-8 gap-1 px-2 text-xs" />
          <ToolbarDivider />
          <Select value={convertMode} onValueChange={(v) => setConvertMode(v as ConvertMode)}>
            <SelectTrigger size="sm" className="h-8 min-w-[180px] text-xs">
              <SelectValue placeholder="选择转换方向" />
            </SelectTrigger>
            <SelectContent>
              {CONVERT_MODES.map((mode) => (
                <SelectItem key={mode} value={mode} className="text-xs">
                  {CONVERT_MODE_LABELS[mode]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {convertMode === "auto" && input.trim() && (
            <span className="hidden text-xs text-muted-foreground sm:inline">
              识别为：{CONVERT_MODE_LABELS[effectiveConvertMode as ConvertMode]}
            </span>
          )}
        </>
      )}

      {currentModule === "utils" && (
        <>
          <ToolbarButton icon={CheckCircle2} label="校验" onClick={handleValidate} />
          <ToolbarButton icon={Eraser} label="去空白" onClick={handleClean} variant="outline" title="去除空白后输出到结果区" />
          <ToolbarButton icon={Info} label="检测类型" onClick={handleDetectInfo} variant="outline" />
        </>
      )}

      <ToolbarDivider />
      <ToolbarButton
        icon={ListOrdered}
        label="行号"
        onClick={() => setShowLineNumbers((v) => !v)}
        active={showLineNumbers}
        variant="outline"
      />
    </>
  )

  const editors = (
    <>
      <div className="grid gap-3 lg:grid-cols-2">
        <EditorPanel
          title="源数据"
          meta={
            uploadMeta
              ? uploadMeta
              : `${input.length} 字符 · ${inputBytes} 字节${inputKind !== "empty" && inputKind !== "text" ? ` · ${inputKind}` : ""}`
          }
          value={input}
          onChange={setInput}
          showLineNumbers={showLineNumbers}
          placeholder="输入文本、Base64、Hex、Data URI，或上传文件..."
          actions={
            <>
              <MiniButton icon={Trash2} label="清空" onClick={handleClearInput} />
              <MiniButton icon={Copy} label="复制" onClick={() => copyText(input, "源数据为空")} />
            </>
          }
        />

        <EditorPanel
          title="结果"
          meta={
            fileError
              ? `处理失败：${fileError}`
              : convertError
                ? `转换失败：${convertError}`
                : output
                  ? currentModule === "file" && fileInfo
                    ? `${output.length} 字符 · ${formatByteSize(fileInfo.byteSize)} · ${fileInfo.label}`
                    : currentModule === "convert"
                      ? `${output.length} 字符 · ${outputBytes} 字节 · ${CONVERT_MODE_LABELS[effectiveConvertMode as ConvertMode]}`
                      : `${output.length} 字符 · ${outputBytes} 字节`
                  : (currentModule === "convert" || currentModule === "file") && input.trim()
                    ? "处理中…"
                    : uploadMeta
                      ? uploadMeta
                      : "等待处理"
          }
          value={output}
          readOnly
          showLineNumbers={showLineNumbers}
          placeholder="编码/解码结果将显示在这里（只读）..."
          actions={
            <>
              <MiniButton icon={Copy} label="复制" onClick={handleCopyOutput} />
              <MiniButton icon={Download} label="保存" onClick={handleSaveOutput} />
              <MiniButton icon={ArrowDownToLine} label="同步到源" onClick={handleApplyToInput} title="将结果写回源数据区以便继续编辑" />
              <MiniButton icon={Trash2} label="清空" onClick={handleClearOutput} />
            </>
          }
        />
      </div>

      {previewSrc && currentModule === "file" && (
        <div className="rounded-lg border border-border bg-card/50 p-4">
          <div className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
            <FileImage className="h-4 w-4 text-primary" />
            图片预览
          </div>
          <div className="flex justify-center rounded-md bg-muted/30 p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={previewSrc} alt="Base64 图片预览" className="max-h-64 max-w-full rounded object-contain" />
          </div>
        </div>
      )}
    </>
  )

  return (
    <div className="space-y-3">
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) handleFileUpload(file)
          e.target.value = ""
        }}
      />

      {lockedModule ? (
        <div className="relative z-20 flex flex-wrap items-center gap-1.5 rounded-lg border border-border bg-muted/30 p-2">
          {toolbar}
        </div>
      ) : (
        <Tabs value={activeModule} onValueChange={(v) => setActiveModule(v as Base64Module)}>
          <TabsList className="mb-2 h-auto w-full flex-wrap justify-start gap-1 bg-muted/30 p-1">
            {(Object.keys(MODULE_LABELS) as Base64Module[]).map((key) => (
              <TabsTrigger key={key} value={key} className="gap-1.5 text-xs sm:text-sm">
                {key === "core" && <RefreshCw className="h-3.5 w-3.5" />}
                {key === "file" && <Upload className="h-3.5 w-3.5" />}
                {key === "convert" && <Binary className="h-3.5 w-3.5" />}
                {key === "utils" && <Wrench className="h-3.5 w-3.5" />}
                {MODULE_LABELS[key]}
              </TabsTrigger>
            ))}
          </TabsList>
          {(Object.keys(MODULE_LABELS) as Base64Module[]).map((key) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="relative z-20 flex flex-wrap items-center gap-1.5 rounded-lg border border-border bg-muted/30 p-2">
                {key === activeModule && toolbar}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      )}

      {editors}

      <p className="text-xs text-muted-foreground">
        {currentModule === "convert" ? (
          <>
            在上方选择转换方向（或使用「自动识别」），左侧输入后右侧<strong className="text-foreground">实时更新</strong>结果。
            例如：普通文本会自动转为 Data URI；Base64 会转为 Hex。
          </>
        ) : currentModule === "file" ? (
          <>
            上传文件，或粘贴 Base64 / Data URI / Hex / 文本，右侧<strong className="text-foreground">自动识别</strong>并输出 Base64。
            图片类文件会显示预览；点击「下载文件」可还原为二进制文件。
          </>
        ) : (
          <>左侧为可编辑源数据，右侧为只读结果。Base64 是编码而非加密，不能用于保密。所有处理在浏览器本地完成。</>
        )}
      </p>
    </div>
  )
}

async function copyText(text: string, emptyMessage: string) {
  if (!text) {
    toolNotify(emptyMessage, "warning", NOTIFY_ID)
    return
  }
  try {
    await navigator.clipboard.writeText(text)
    toolNotify("已复制", "success", NOTIFY_ID)
  } catch {
    toolNotify("复制失败", "error", NOTIFY_ID)
  }
}

function EditorPanel({
  title,
  meta,
  value,
  onChange,
  readOnly = false,
  showLineNumbers,
  placeholder,
  actions,
}: {
  title: string
  meta: string
  value: string
  onChange?: (v: string) => void
  readOnly?: boolean
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
          onChange={readOnly ? () => {} : onChange!}
          readOnly={readOnly}
          showLineNumbers={showLineNumbers}
          placeholder={placeholder}
          className={cn("h-full min-h-[min(50vh,480px)] rounded-none border-0", readOnly && "bg-muted/20")}
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

function ToolbarDivider() {
  return <span className="mx-0.5 hidden h-5 w-px bg-border sm:inline" />
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
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
      title={title ?? label}
      className="h-7 gap-1 px-2 text-xs text-muted-foreground hover:text-foreground"
    >
      <Icon className="h-3.5 w-3.5" />
      <span className="hidden sm:inline">{label}</span>
    </Button>
  )
}
