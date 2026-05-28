"use client"

import { useState, useCallback, useMemo } from "react"
import {
  AlignLeft,
  Minimize2,
  FileCode,
  Braces,
  CheckCircle2,
  Copy,
  Download,
  Trash2,
  ListOrdered,
  FolderTree,
  ChevronsDownUp,
  ChevronsUpDown,
  ArrowDownToLine,
  SortAsc,
  FileText,
} from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { JsonLineEditor } from "@/components/tools/json-line-editor"
import { JsonTreeView } from "@/components/tools/json-tree-view"
import {
  formatJson,
  isLikelyXml,
  jsonToXml,
  minifyJson,
  parseInputToJson,
  parseJson,
  sortJsonKeys,
  tryParseJson,
  xmlToJson,
} from "@/lib/json-xml"
import { cn } from "@/lib/utils"

const SAMPLE_JSON = `{
  "name": "WaiHub",
  "version": 1,
  "features": ["format", "compress", "xml"]
}`

type ViewMode = "text" | "tree"
type ContentType = "json" | "xml"
type FoldMode = "default" | "collapsed" | "expanded"

const TOAST_ID = "json-formatter-notify"

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

function detectContentType(text: string): ContentType {
  if (isLikelyXml(text)) return "xml"
  return "json"
}

export function JsonFormatterTool() {
  const [input, setInput] = useState(SAMPLE_JSON)
  const [output, setOutput] = useState("")
  const [inputType, setInputType] = useState<ContentType>("json")
  const [outputType, setOutputType] = useState<ContentType>("json")
  const [showLineNumbers, setShowLineNumbers] = useState(true)
  const [viewMode, setViewMode] = useState<ViewMode>("text")
  const [foldMode, setFoldMode] = useState<FoldMode>("default")
  const [treeKey, setTreeKey] = useState(0)

  const treeData = useMemo(() => {
    return tryParseJson(output) ?? tryParseJson(input)
  }, [input, output])

  const convertLabel = inputType === "xml" ? "转 JSON" : "转 XML"
  const ConvertIcon = inputType === "xml" ? Braces : FileCode

  const runAction = useCallback((fn: () => void, successMsg?: string) => {
    try {
      fn()
      if (successMsg) notify(successMsg)
    } catch (e) {
      notify(e instanceof Error ? e.message : "操作失败", "error")
    }
  }, [])

  const handleInputChange = useCallback((value: string) => {
    setInput(value)
    setInputType(detectContentType(value))
  }, [])

  const handleOutputChange = useCallback((value: string) => {
    setOutput(value)
    setOutputType(detectContentType(value))
  }, [])

  const parseFromInput = useCallback(() => {
    return parseInputToJson(input, inputType)
  }, [input, inputType])

  const handleFormat = () => {
    runAction(() => {
      const parsed = parseFromInput()
      const formatted = formatJson(parsed, 2)
      setOutput(formatted)
      setOutputType("json")
      setViewMode("text")
    }, "已格式化，结果在右侧")
  }

  const handleCompress = () => {
    runAction(() => {
      const parsed = parseFromInput()
      setOutput(minifyJson(parsed))
      setOutputType("json")
      setViewMode("text")
    }, "已压缩")
  }

  const handleConvert = () => {
    const successMsg = inputType === "xml" || isLikelyXml(input) ? "已转为 JSON" : "已转为 XML"
    runAction(() => {
      if (inputType === "xml" || isLikelyXml(input)) {
        const json = xmlToJson(input)
        setOutput(formatJson(json, 2))
        setOutputType("json")
      } else {
        const parsed = parseJson(input)
        setOutput(jsonToXml(parsed))
        setOutputType("xml")
      }
      setViewMode("text")
    }, successMsg)
  }

  const handleSortKeys = () => {
    runAction(() => {
      const parsed = parseFromInput()
      setOutput(formatJson(sortJsonKeys(parsed), 2))
      setOutputType("json")
      setViewMode("text")
    }, "已按 key 排序")
  }

  const handleValidate = () => {
    try {
      const parts: string[] = []
      if (inputType === "xml" || isLikelyXml(input)) {
        xmlToJson(input)
        parts.push("输入 XML 有效")
      } else {
        parseJson(input)
        parts.push("输入 JSON 有效")
      }
      if (output.trim()) {
        if (outputType === "xml" || isLikelyXml(output)) {
          xmlToJson(output)
          parts.push("输出 XML 有效")
        } else {
          parseJson(output)
          parts.push("输出 JSON 有效")
        }
      }
      notify(`✓ ${parts.join("，")}`)
    } catch (e) {
      notify(e instanceof Error ? e.message : "校验失败", "error")
    }
  }

  const handleClearInput = () => {
    setInput("")
    setInputType("json")
  }

  const handleClearOutput = () => {
    setOutput("")
    setOutputType("json")
    setViewMode("text")
  }

  const handleCopyOutput = async () => {
    if (!output) {
      notify("输出区没有内容", "warning")
      return
    }
    try {
      await navigator.clipboard.writeText(output)
      notify("已复制输出内容")
    } catch {
      notify("复制失败", "error")
    }
  }

  const handleSaveOutput = () => {
    if (!output) {
      notify("输出区没有内容", "warning")
      return
    }
    const ext = outputType === "xml" ? "xml" : "json"
    const mime = outputType === "xml" ? "application/xml" : "application/json"
    const blob = new Blob([output], { type: `${mime};charset=utf-8` })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `data.${ext}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    notify(`已保存 data.${ext}`)
  }

  const handleApplyOutputToInput = () => {
    if (!output) {
      notify("输出区没有内容", "warning")
      return
    }
    setInput(output)
    setInputType(outputType)
    notify("已将输出同步到输入区")
  }

  const openTreeView = (fold: FoldMode) => {
    runAction(() => {
      if (treeData === null) {
        parseFromInput()
        throw new Error("JSON 无效，无法显示树形视图")
      }
      setViewMode("tree")
      setFoldMode(fold)
      setTreeKey((k) => k + 1)
    }, fold === "default" ? "已切换树形视图" : fold === "collapsed" ? "已折叠全部节点" : "已展开全部节点")
  }

  const toggleTreeView = () => {
    if (viewMode === "tree") {
      setViewMode("text")
      return
    }
    openTreeView("default")
  }

  return (
    <div className="relative z-10 space-y-3">
      {/* 全局操作栏 */}
      <div className="flex flex-wrap items-center gap-1.5 rounded-lg border border-border bg-muted/30 p-2">
        <ToolbarButton icon={AlignLeft} label="格式化" onClick={handleFormat} />
        <ToolbarButton icon={Minimize2} label="压缩" onClick={handleCompress} />
        <ToolbarButton icon={ConvertIcon} label={convertLabel} onClick={handleConvert} />
        <ToolbarButton icon={SortAsc} label="排序" onClick={handleSortKeys} variant="outline" title="按 key 字母序排序" />
        <ToolbarButton icon={CheckCircle2} label="校验" onClick={handleValidate} variant="outline" />

        <span className="mx-0.5 hidden h-5 w-px bg-border sm:inline" />

        <ToolbarButton
          icon={ListOrdered}
          label="行号"
          onClick={() => setShowLineNumbers((v) => !v)}
          active={showLineNumbers}
          variant="outline"
        />
        <ToolbarButton
          icon={FolderTree}
          label="树形"
          onClick={toggleTreeView}
          active={viewMode === "tree"}
          variant="outline"
        />
        <ToolbarButton
          icon={ChevronsDownUp}
          label="折叠"
          onClick={() => openTreeView("collapsed")}
          variant="outline"
        />
        <ToolbarButton
          icon={ChevronsUpDown}
          label="展开"
          onClick={() => openTreeView("expanded")}
          variant="outline"
        />
      </div>

      {/* 双栏：输入 | 输出 */}
      <div className="grid gap-3 lg:grid-cols-2">
        <EditorPanel
          title="原数据"
          badge={inputType}
          value={input}
          onChange={handleInputChange}
          showLineNumbers={showLineNumbers}
          placeholder="粘贴 JSON 或 XML..."
          actions={
            <>
              <MiniButton icon={Trash2} label="清空" onClick={handleClearInput} />
            </>
          }
        />

        <EditorPanel
          title="结果"
          badge={viewMode === "tree" ? "tree" : outputType}
          showLineNumbers={showLineNumbers}
          actions={
            <>
              <MiniButton icon={Copy} label="复制" onClick={handleCopyOutput} />
              <MiniButton icon={Download} label="保存" onClick={handleSaveOutput} />
              <MiniButton icon={ArrowDownToLine} label="同步到输入" onClick={handleApplyOutputToInput} title="将结果写回左侧输入区" />
              <MiniButton icon={Trash2} label="清空" onClick={handleClearOutput} />
            </>
          }
        >
          {viewMode === "tree" ? (
            treeData !== null ? (
              <JsonTreeView key={`${treeKey}-${foldMode}`} data={treeData} foldMode={foldMode} />
            ) : (
              <EmptyTreeFallback onBack={() => setViewMode("text")} />
            )
          ) : (
            <JsonLineEditor
              value={output}
              onChange={handleOutputChange}
              showLineNumbers={showLineNumbers}
              placeholder="点击上方「格式化」等按钮，结果将显示在这里..."
              className="border-0 rounded-none h-full min-h-[min(50vh,480px)]"
            />
          )}
        </EditorPanel>
      </div>

      <p className="text-xs text-muted-foreground">
        左侧保留原始数据，右侧显示处理结果。需要对比或多次尝试时不必反复粘贴。
      </p>
    </div>
  )
}

function EditorPanel({
  title,
  badge,
  value,
  onChange,
  showLineNumbers,
  placeholder,
  actions,
  children,
}: {
  title: string
  badge: ContentType | "tree"
  value?: string
  onChange?: (v: string) => void
  showLineNumbers?: boolean
  placeholder?: string
  actions: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-border bg-card/50">
      <div className="flex items-center justify-between gap-2 border-b border-border px-3 py-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-foreground">{title}</span>
          <Badge type={badge} />
        </div>
        <div className="flex flex-wrap items-center gap-1">{actions}</div>
      </div>
      <div className="flex min-h-[min(50vh,480px)] flex-1 flex-col">
        {children ?? (
          <JsonLineEditor
            value={value ?? ""}
            onChange={onChange ?? (() => {})}
            showLineNumbers={showLineNumbers}
            placeholder={placeholder}
            className="border-0 rounded-none h-full min-h-[min(50vh,480px)]"
          />
        )}
      </div>
    </div>
  )
}

function Badge({ type }: { type: ContentType | "tree" }) {
  return (
    <span
      className={cn(
        "rounded px-1.5 py-0.5 text-[10px] font-medium uppercase",
        type === "json" && "bg-primary/10 text-primary",
        type === "xml" && "bg-orange-500/10 text-orange-400",
        type === "tree" && "bg-secondary text-muted-foreground"
      )}
    >
      {type === "tree" ? "树形" : type}
    </span>
  )
}

function EmptyTreeFallback({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex h-[min(50vh,480px)] min-h-[280px] items-center justify-center text-sm text-muted-foreground">
      <div className="px-4 text-center">
        <FileText className="mx-auto mb-2 h-8 w-8 opacity-50" />
        <p className="mb-3">暂无有效 JSON 可展示</p>
        <Button variant="outline" size="sm" onClick={onBack}>
          返回文本
        </Button>
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
