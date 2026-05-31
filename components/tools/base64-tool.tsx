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
import {
  getBase64Examples,
  getBase64ConvertExamples,
  getBase64FileExamples,
} from "@/lib/i18n/examples"
import { defaultLocale, type Locale } from "@/lib/i18n/config"
import { formatMessage, getMessages } from "@/lib/i18n"
import { localizeSmartAction, localizeToolError } from "@/lib/i18n/localize-error"
import type { Base64Example } from "@/lib/tool-examples"
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
  type Base64InputKind,
  type ConvertMode,
} from "@/lib/base64-utils"
import { cn } from "@/lib/utils"

const NOTIFY_ID = "base64-tool"

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
  locale?: Locale
}

export function Base64Tool({ module: lockedModule, locale = defaultLocale }: Base64ToolProps) {
  const ui = getMessages(locale).base64Tool
  const examples = useMemo(() => getBase64Examples(locale), [locale])
  const convertExamples = useMemo(() => getBase64ConvertExamples(locale), [locale])
  const fileExamples = useMemo(() => getBase64FileExamples(locale), [locale])

  const getInputKindLabel = useCallback(
    (kind: Base64InputKind) => {
      const labels: Record<Base64InputKind, string> = {
        empty: ui.inputKinds.empty,
        text: ui.inputKinds.text,
        base64: ui.inputKinds.base64,
        base64url: ui.inputKinds.base64url,
        hex: ui.inputKinds.hex,
        "data-uri": ui.inputKinds.dataUri,
      }
      return labels[kind] ?? kind
    },
    [ui.inputKinds]
  )
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
      const msg = e instanceof Error ? e.message : ui.notify.operationFailed
      toolNotify(localizeToolError(msg, locale), "error", NOTIFY_ID)
    }
  }, [locale, ui.notify.operationFailed])

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
        const msg = localizeToolError(
          e instanceof Error ? e.message : ui.notify.processFailed,
          locale
        )
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

      toolNotify(ui.notify.exampleLoaded, "success", NOTIFY_ID)
    },
    [lockedModule, activeModule, urlSafe, convertMode, locale, ui.notify.exampleLoaded, ui.notify.processFailed]
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
      setConvertError(
        localizeToolError(e instanceof Error ? e.message : ui.notify.convertFailed, locale)
      )
    }
  }, [input, convertMode, currentModule, locale, ui.notify.convertFailed])

  useEffect(() => {
    if (currentModule !== "file") return

    if (!input.trim()) {
      setFileError(null)
      if (uploadMeta && output.trim()) {
        try {
          const result = applyFileAutoProcess(output, urlSafe)
          setOutput(result.output)
          setFileInfo((prev) =>
            prev
              ? {
                  ...prev,
                  label: formatMessage(ui.uploaded, {
                    mime: result.mime ?? "unknown",
                    size: formatByteSize(result.byteSize),
                  }),
                  mime: result.mime,
                  byteSize: result.byteSize,
                }
              : null
          )
        } catch {
          /* 保留上传结果 */
        }
        return
      }
      if (!uploadMeta) {
        setFileInfo(null)
        setOutput("")
      }
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
      setFileError(
        localizeToolError(e instanceof Error ? e.message : ui.notify.processFailed, locale)
      )
    }
  }, [input, output, urlSafe, currentModule, uploadMeta, locale, ui.uploaded, ui.notify.processFailed])

  const doEncode = (useUrlSafe = urlSafe) => {
    runAction(() => {
      if (!input.trim()) throw new Error(ui.notify.emptySource)
      setOutput(useUrlSafe ? encodeBase64Url(input) : encodeBase64(input))
    }, useUrlSafe ? ui.notify.encodeUrlDone : ui.notify.encodeDone)
  }

  const doDecode = (useUrlSafe = urlSafe) => {
    runAction(() => {
      if (!input.trim()) throw new Error(ui.notify.emptySource)
      setOutput(useUrlSafe ? decodeBase64Url(input) : decodeBase64(input))
    }, useUrlSafe ? ui.notify.decodeUrlDone : ui.notify.decodeDone)
  }

  const handleSmart = () => {
    runAction(() => {
      const result = smartConvert(input, urlSafe)
      setOutput(result.output)
      toolNotify(localizeSmartAction(result.action, locale), "success", NOTIFY_ID)
    })
  }

  const handleValidate = () => {
    try {
      const trimmed = input.trim()
      if (!trimmed) {
        toolNotify(ui.notify.emptySource, "warning", NOTIFY_ID)
        return
      }
      if (trimmed.startsWith("data:")) {
        fromDataUri(trimmed)
        toolNotify(ui.notify.validDataUri, "success", NOTIFY_ID)
        return
      }
      if (inputKind === "hex") {
        hexToText(trimmed)
        toolNotify(ui.notify.validHex, "success", NOTIFY_ID)
        return
      }
      if (inputKind === "base64" || inputKind === "base64url") {
        validateBase64(trimmed)
        toolNotify(ui.notify.validBase64, "success", NOTIFY_ID)
        return
      }
      toolNotify(ui.notify.plainText, "info", NOTIFY_ID)
    } catch (e) {
      const msg = e instanceof Error ? e.message : ui.notify.validateFailed
      toolNotify(localizeToolError(msg, locale), "error", NOTIFY_ID)
    }
  }

  const handleClean = () => {
    runAction(() => {
      if (!input.trim()) throw new Error(ui.notify.emptySource)
      setOutput(cleanBase64(input))
    }, ui.notify.cleaned)
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
          label: formatMessage(ui.uploaded, {
            mime,
            size: formatByteSize(bytes.length),
          }),
          mime,
          byteSize: bytes.length,
        })
        setFileError(null)
        toolNotify(ui.notify.fileEncoded, "success", NOTIFY_ID)
      } catch (e) {
        const msg = e instanceof Error ? e.message : ui.notify.fileEncodeFailed
        toolNotify(localizeToolError(msg, locale), "error", NOTIFY_ID)
      }
    }
    reader.onerror = () => toolNotify(ui.notify.fileReadFailed, "error", NOTIFY_ID)
    reader.readAsArrayBuffer(file)
  }

  const handleDownloadFile = () => {
    runAction(() => {
      const raw = input.trim() || output.trim()
      if (!raw) throw new Error(ui.notify.nothingToDownload)
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
    }, ui.notify.downloadStarted)
  }

  const handleDetectInfo = () => {
    toolNotify(
      formatMessage(ui.notify.detected, { kind: getInputKindLabel(inputKind) }),
      "info",
      NOTIFY_ID
    )
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

  const copyText = async (text: string, emptyMessage: string) => {
    if (!text) {
      toolNotify(emptyMessage, "warning", NOTIFY_ID)
      return
    }
    try {
      await navigator.clipboard.writeText(text)
      toolNotify(ui.notify.copied, "success", NOTIFY_ID)
    } catch {
      toolNotify(ui.notify.copyFailed, "error", NOTIFY_ID)
    }
  }

  const handleCopyOutput = async () => {
    if (!output) {
      toolNotify(ui.notify.outputEmpty, "warning", NOTIFY_ID)
      return
    }
    await copyText(output, ui.notify.outputEmpty)
  }

  const handleSaveOutput = () => {
    if (!output) {
      toolNotify(ui.notify.outputEmpty, "warning", NOTIFY_ID)
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
    toolNotify(ui.notify.saved, "success", NOTIFY_ID)
  }

  const handleApplyToInput = () => {
    if (!output) {
      toolNotify(ui.notify.outputEmpty, "warning", NOTIFY_ID)
      return
    }
    setInput(output)
    setUploadMeta(null)
    toolNotify(ui.notify.syncedToSource, "success", NOTIFY_ID)
  }

  const inputBytes = getByteLength(input)
  const outputBytes = getByteLength(output)

  const toolbar = (
    <>
      {currentModule === "core" && (
        <>
          <ToolExampleMenu examples={examples} onApply={applyExample} label={ui.example} className="h-8 gap-1 px-2 text-xs" />
          <ToolbarDivider />
          <ToolbarButton icon={Lock} label={ui.encode} onClick={() => doEncode()} />
          <ToolbarButton icon={Unlock} label={ui.decode} onClick={() => doDecode()} />
          <ToolbarButton icon={Sparkles} label={ui.smart} onClick={handleSmart} title={ui.smartTitle} />
          <ToolbarDivider />
          <ToolbarButton
            icon={Link2}
            label={ui.urlSafe}
            onClick={() => setUrlSafe((v) => !v)}
            active={urlSafe}
            variant="outline"
            title={ui.urlSafeTitle}
          />
        </>
      )}

      {currentModule === "file" && (
        <>
          <ToolExampleMenu examples={fileExamples} onApply={applyExample} label={ui.example} className="h-8 gap-1 px-2 text-xs" />
          <ToolbarDivider />
          <ToolbarButton icon={Upload} label={ui.uploadFile} onClick={() => fileInputRef.current?.click()} />
          <ToolbarButton icon={FileDown} label={ui.downloadFile} onClick={handleDownloadFile} variant="outline" title={ui.downloadFileTitle} />
          {fileInfo && (
            <span className="hidden text-xs text-muted-foreground sm:inline">{fileInfo.label}</span>
          )}
          <ToolbarDivider />
          <ToolbarButton
            icon={Link2}
            label={ui.urlSafe}
            onClick={() => setUrlSafe((v) => !v)}
            active={urlSafe}
            variant="outline"
            title={ui.urlSafeTitle}
          />
        </>
      )}

      {currentModule === "convert" && (
        <>
          <ToolExampleMenu examples={convertExamples} onApply={applyExample} label={ui.example} className="h-8 gap-1 px-2 text-xs" />
          <ToolbarDivider />
          <Select value={convertMode} onValueChange={(v) => setConvertMode(v as ConvertMode)}>
            <SelectTrigger size="sm" className="h-8 min-w-[180px] text-xs">
              <SelectValue placeholder={ui.selectConvert} />
            </SelectTrigger>
            <SelectContent>
              {CONVERT_MODES.map((mode) => (
                <SelectItem key={mode} value={mode} className="text-xs">
                  {ui.convertModes[mode]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {convertMode === "auto" && input.trim() && (
            <span className="hidden text-xs text-muted-foreground sm:inline">
              {formatMessage(ui.identifiedAs, {
                mode: ui.convertModes[effectiveConvertMode as ConvertMode],
              })}
            </span>
          )}
        </>
      )}

      {currentModule === "utils" && (
        <>
          <ToolbarButton icon={CheckCircle2} label={ui.validate} onClick={handleValidate} />
          <ToolbarButton icon={Eraser} label={ui.clean} onClick={handleClean} variant="outline" title={ui.cleanTitle} />
          <ToolbarButton icon={Info} label={ui.detectType} onClick={handleDetectInfo} variant="outline" />
        </>
      )}

      <ToolbarDivider />
      <ToolbarButton
        icon={ListOrdered}
        label={ui.lineNumbers}
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
          title={ui.source}
          meta={
            uploadMeta
              ? uploadMeta
              : `${formatMessage(ui.charsBytes, { chars: input.length, bytes: inputBytes })}${
                  inputKind !== "empty" && inputKind !== "text" ? ` · ${getInputKindLabel(inputKind)}` : ""
                }`
          }
          value={input}
          onChange={setInput}
          showLineNumbers={showLineNumbers}
          placeholder={ui.sourcePlaceholder}
          actions={
            <>
              <MiniButton icon={Trash2} label={ui.clear} onClick={handleClearInput} />
              <MiniButton icon={Copy} label={ui.copy} onClick={() => copyText(input, ui.notify.sourceEmpty)} />
            </>
          }
        />

        <EditorPanel
          title={ui.result}
          meta={
            fileError
              ? `${ui.processFailed}：${fileError}`
              : convertError
                ? `${ui.convertFailed}：${convertError}`
                : output
                  ? currentModule === "file" && fileInfo
                    ? formatMessage(ui.fileOutputMeta, {
                        chars: output.length,
                        size: formatByteSize(fileInfo.byteSize),
                        details: fileInfo.label,
                      })
                    : currentModule === "convert"
                      ? `${formatMessage(ui.charsBytes, { chars: output.length, bytes: outputBytes })} · ${ui.convertModes[effectiveConvertMode as ConvertMode]}`
                      : formatMessage(ui.charsBytes, { chars: output.length, bytes: outputBytes })
                  : (currentModule === "convert" || currentModule === "file") && input.trim()
                    ? ui.processing
                    : uploadMeta
                      ? uploadMeta
                      : ui.waiting
          }
          value={output}
          readOnly
          showLineNumbers={showLineNumbers}
          placeholder={ui.resultPlaceholder}
          actions={
            <>
              <MiniButton icon={Copy} label={ui.copy} onClick={handleCopyOutput} />
              <MiniButton icon={Download} label={ui.save} onClick={handleSaveOutput} />
              <MiniButton icon={ArrowDownToLine} label={ui.syncToSource} onClick={handleApplyToInput} title={ui.syncToSourceTitle} />
              <MiniButton icon={Trash2} label={ui.clear} onClick={handleClearOutput} />
            </>
          }
        />
      </div>

      {previewSrc && currentModule === "file" && (
        <div className="rounded-lg border border-border bg-card/50 p-4">
          <div className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
            <FileImage className="h-4 w-4 text-primary" />
            {ui.imagePreview}
          </div>
          <div className="flex justify-center rounded-md bg-muted/30 p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={previewSrc} alt={ui.imagePreviewAlt} className="max-h-64 max-w-full rounded object-contain" />
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
            {(Object.keys(ui.modules) as Base64Module[]).map((key) => (
              <TabsTrigger key={key} value={key} className="gap-1.5 text-xs sm:text-sm">
                {key === "core" && <RefreshCw className="h-3.5 w-3.5" />}
                {key === "file" && <Upload className="h-3.5 w-3.5" />}
                {key === "convert" && <Binary className="h-3.5 w-3.5" />}
                {key === "utils" && <Wrench className="h-3.5 w-3.5" />}
                {ui.modules[key]}
              </TabsTrigger>
            ))}
          </TabsList>
          {(Object.keys(ui.modules) as Base64Module[]).map((key) => (
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
          ui.convertHint
        ) : currentModule === "file" ? (
          ui.fileHint
        ) : (
          ui.coreHint
        )}
      </p>
    </div>
  )
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
      <div className="flex min-h-[var(--tool-editor-min-h)] flex-1 flex-col">
        <JsonLineEditor
          value={value}
          onChange={readOnly ? () => {} : onChange!}
          readOnly={readOnly}
          showLineNumbers={showLineNumbers}
          placeholder={placeholder}
          className={cn("h-full min-h-[var(--tool-editor-min-h)] rounded-none border-0", readOnly && "bg-muted/20")}
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
