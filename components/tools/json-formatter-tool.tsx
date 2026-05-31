"use client"

import { useState, useCallback, useMemo, useEffect, useRef, useDeferredValue } from "react"
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
  SortDesc,
  FileText,
  Search,
  AlertCircle,
  Upload,
  WrapText,
  ChevronDown,
  SlidersHorizontal,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toolNotify } from "@/lib/tool-notify"
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
import { isLikelyYaml, jsonToYaml, yamlToJson } from "@/lib/json-yaml"
import { escapeJsonForCodeQuoted, unescapeJsonFromCode } from "@/lib/json-escape"
import {
  buildErrorHighlight,
  buildSearchHighlights,
  countJsonNodes,
  evaluateJsonPath,
  formatJsonPathResult,
  formatSearchValue,
  getJsonSizeStats,
  getTextByteSize,
  MAX_JSON_BYTES,
  parseJsonDetailed,
  searchJson,
  stripJsonPathPrefix,
  type LineHighlight,
} from "@/lib/json-utils"
import type { JsonToolFocus } from "@/lib/json-tool-pages"
import { getJsonFormatterExamples } from "@/lib/i18n/examples"
import { defaultLocale, type Locale } from "@/lib/i18n/config"
import { formatMessage, getMessages } from "@/lib/i18n"
import { localizeToolError } from "@/lib/i18n/localize-error"
import { ToolExampleMenu } from "@/components/tool-example-menu"
import { FullscreenEditorPanel } from "@/components/fullscreen-editor-panel"
import { usePanelFullscreenOptional } from "@/components/panel-fullscreen-context"
import type { JsonFormatterExample } from "@/lib/tool-examples"
import { cn } from "@/lib/utils"

const NOTIFY_ID = "json-formatter"

type ViewMode = "text" | "tree"
type ContentType = "json" | "xml" | "yaml"
type FoldMode = "default" | "collapsed" | "expanded"
type SortOrder = "asc" | "desc"

function detectContentType(text: string): ContentType {
  if (isLikelyXml(text)) return "xml"
  if (isLikelyYaml(text)) return "yaml"
  return "json"
}

interface JsonFormatterToolProps {
  focus?: JsonToolFocus
  locale?: Locale
}

export function JsonFormatterTool({ focus, locale = defaultLocale }: JsonFormatterToolProps) {
  const m = getMessages(locale)
  const ui = m.jsonTool
  const ws = m.workspace
  const panelFs = usePanelFullscreenOptional()
  const immersive = panelFs?.isPanelFullscreen ?? false
  const examples = useMemo(() => getJsonFormatterExamples(locale), [locale])
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [inputType, setInputType] = useState<ContentType>("json")
  const [outputType, setOutputType] = useState<ContentType>("json")
  const [showLineNumbers, setShowLineNumbers] = useState(true)
  const [wordWrap, setWordWrap] = useState(false)
  const [syntaxHighlight, setSyntaxHighlight] = useState(true)
  const [viewMode, setViewMode] = useState<ViewMode>("text")
  const [foldMode, setFoldMode] = useState<FoldMode>("default")
  const [treeKey, setTreeKey] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const [jsonPathQuery, setJsonPathQuery] = useState("")
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc")
  const [scrollToLine, setScrollToLine] = useState<number | undefined>()
  const [toolsOpen, setToolsOpen] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const deferredInput = useDeferredValue(input)
  const inputByteSize = useMemo(() => getTextByteSize(input), [input])
  const isOversized = inputByteSize > MAX_JSON_BYTES

  const isInputJson = inputType === "json" && !isLikelyXml(input) && !isLikelyYaml(input)

  const inputAnalysis = useMemo(() => {
    if (isOversized) {
      return {
        parsed: null as unknown | null,
        error: null,
        nodeStats: null,
        sizeStats: getJsonSizeStats(input, null),
        searchMatches: [] as ReturnType<typeof searchJson>,
        jsonPathResult: null as string | null,
        jsonPathError: ui.oversizedAnalysis,
      }
    }

    if (!isInputJson || !deferredInput.trim()) {
      return {
        parsed: null,
        error: null,
        nodeStats: null,
        sizeStats: getJsonSizeStats(deferredInput, null),
        searchMatches: [],
        jsonPathResult: null,
        jsonPathError: null as string | null,
      }
    }

    const result = parseJsonDetailed(deferredInput)
    if (!result.ok) {
      return {
        parsed: null,
        error: result.error,
        nodeStats: null,
        sizeStats: getJsonSizeStats(deferredInput, null),
        searchMatches: [],
        jsonPathResult: null,
        jsonPathError: null,
      }
    }

    const parsed = result.value
    let jsonPathResult: string | null = null
    let jsonPathError: string | null = null

    if (jsonPathQuery.trim()) {
      try {
        jsonPathResult = formatJsonPathResult(evaluateJsonPath(parsed, jsonPathQuery))
      } catch (e) {
        jsonPathError = localizeToolError(
          e instanceof Error ? e.message : ui.notify.validateFailed,
          locale
        )
      }
    }

    return {
      parsed,
      error: null,
      nodeStats: countJsonNodes(parsed),
      sizeStats: getJsonSizeStats(deferredInput, parsed),
      searchMatches: searchQuery.trim() ? searchJson(parsed, searchQuery) : [],
      jsonPathResult,
      jsonPathError,
    }
  }, [deferredInput, isInputJson, isOversized, searchQuery, jsonPathQuery, input, ui.oversizedAnalysis, locale, ui.notify.validateFailed])

  const inputParseError = useMemo(() => {
    if (!inputAnalysis.error) return null
    return {
      ...inputAnalysis.error,
      message: localizeToolError(inputAnalysis.error.message, locale),
    }
  }, [inputAnalysis.error, locale])

  const inputHighlights = useMemo(() => {
    const highlights: LineHighlight[] = []

    if (inputAnalysis.error) {
      highlights.push(...buildErrorHighlight(inputAnalysis.error, input))
    }

    if (inputAnalysis.searchMatches.length > 0 && searchQuery.trim()) {
      highlights.push(
        ...buildSearchHighlights(input, inputAnalysis.searchMatches, searchQuery)
      )
    }

    return highlights
  }, [input, inputAnalysis.error, inputAnalysis.searchMatches, searchQuery])

  useEffect(() => {
    if (inputAnalysis.error) {
      setScrollToLine(inputAnalysis.error.line)
    }
  }, [inputAnalysis.error])

  useEffect(() => {
    if (focus === "validate" && isInputJson && inputAnalysis.error) {
      // auto-scroll on validate-focused page
      setScrollToLine(inputAnalysis.error.line)
    }
  }, [focus, isInputJson, inputAnalysis.error])

  const treeData = useMemo(() => {
    return tryParseJson(output) ?? tryParseJson(input)
  }, [input, output])

  const convertLabel =
    inputType === "xml" ? ui.toJson : inputType === "yaml" ? ui.toJson : ui.toXml
  const yamlLabel = inputType === "yaml" ? ui.toJson : ui.toYaml
  const ConvertIcon = inputType === "xml" || inputType === "yaml" ? Braces : FileCode

  const runAction = useCallback((fn: () => void, successMsg?: string) => {
    try {
      fn()
      if (successMsg) toolNotify(successMsg, "success", NOTIFY_ID)
    } catch (e) {
      const msg = e instanceof Error ? e.message : ui.notify.operationFailed
      toolNotify(localizeToolError(msg, locale), "error", NOTIFY_ID)
    }
  }, [locale, ui.notify.operationFailed])

  const handleInputChange = useCallback((value: string) => {
    if (getTextByteSize(value) > MAX_JSON_BYTES) {
      toolNotify(ui.notify.oversized, "warning", NOTIFY_ID)
    }
    setInput(value)
    setInputType(detectContentType(value))
  }, [ui.notify.oversized])

  const applyExample = useCallback((example: JsonFormatterExample) => {
    setInput(example.input)
    setInputType(detectContentType(example.input))
    setOutput("")
    setOutputType("json")
    setViewMode("text")
    toolNotify(ui.notify.exampleLoaded, "success", NOTIFY_ID)
  }, [ui.notify.exampleLoaded])

  const handleOutputChange = useCallback((value: string) => {
    setOutput(value)
    setOutputType(detectContentType(value))
  }, [])

  const parseFromInput = useCallback(() => {
    if (isOversized) throw new Error(ui.notify.oversized)
    return parseInputToJson(input, inputType)
  }, [input, inputType, isOversized, ui.notify.oversized])

  const handleFormat = () => {
    runAction(() => {
      const parsed = parseFromInput()
      const formatted = formatJson(parsed, 2)
      setOutput(formatted)
      setOutputType("json")
      setViewMode("text")
    }, ui.notify.formatted)
  }

  const handleCompress = () => {
    runAction(() => {
      const parsed = parseFromInput()
      setOutput(minifyJson(parsed))
      setOutputType("json")
      setViewMode("text")
    }, ui.notify.minified)
  }

  const handleConvert = () => {
    const successMsg =
      inputType === "xml" || isLikelyXml(input)
        ? ui.notify.convertedToJson
        : inputType === "yaml" || isLikelyYaml(input)
          ? ui.notify.convertedToJson
          : ui.notify.convertedToXml
    runAction(() => {
      if (inputType === "xml" || isLikelyXml(input)) {
        setOutput(formatJson(xmlToJson(input), 2))
        setOutputType("json")
      } else if (inputType === "yaml" || isLikelyYaml(input)) {
        setOutput(formatJson(yamlToJson(input), 2))
        setOutputType("json")
      } else {
        setOutput(jsonToXml(parseJson(input)))
        setOutputType("xml")
      }
      setViewMode("text")
    }, successMsg)
  }

  const handleYamlConvert = () => {
    runAction(() => {
      if (inputType === "yaml" || isLikelyYaml(input)) {
        setOutput(formatJson(yamlToJson(input), 2))
        setOutputType("json")
      } else {
        const parsed = parseFromInput()
        setOutput(jsonToYaml(parsed))
        setOutputType("yaml")
      }
      setViewMode("text")
    }, inputType === "yaml" || isLikelyYaml(input) ? ui.notify.convertedToJson : ui.notify.convertedToYaml)
  }

  const handleUnescape = () => {
    runAction(() => {
      const escaped = output.trim() || input.trim()
      if (!escaped) throw new Error(getMessages(locale).errors.nothingToUnescape)
      setOutput(unescapeJsonFromCode(escaped))
      setOutputType("json")
      setViewMode("text")
    }, ui.notify.unescaped)
  }

  const handleEscape = () => {
    runAction(() => {
      if (!input.trim()) throw new Error(getMessages(locale).errors.emptySource)
      setOutput(escapeJsonForCodeQuoted(input))
      setOutputType("json")
      setViewMode("text")
    }, ui.notify.escaped)
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

  const handleCopyInput = () => copyText(input, ui.notify.inputEmpty)

  const handleValidate = () => {
    try {
      const parts: string[] = []
      if (inputType === "xml" || isLikelyXml(input)) {
        xmlToJson(input)
        parts.push(ui.notify.inputXmlValid)
      } else if (inputType === "yaml" || isLikelyYaml(input)) {
        yamlToJson(input)
        parts.push(ui.notify.inputYamlValid)
      } else {
        const result = parseJsonDetailed(input)
        if (!result.ok) {
          toolNotify(
            formatMessage(ui.notify.lineCol, {
              line: result.error.line,
              column: result.error.column,
              message: localizeToolError(result.error.message, locale),
            }),
            "error",
            NOTIFY_ID
          )
          return
        }
        parts.push(ui.notify.inputJsonValid)
      }
      if (output.trim()) {
        if (outputType === "xml" || isLikelyXml(output)) {
          xmlToJson(output)
          parts.push(ui.notify.outputXmlValid)
        } else if (outputType === "yaml" || isLikelyYaml(output)) {
          yamlToJson(output)
          parts.push(ui.notify.outputYamlValid)
        } else {
          parseJson(output)
          parts.push(ui.notify.outputJsonValid)
        }
      }
      toolNotify(`✓ ${parts.join(", ")}`, "success", NOTIFY_ID)
    } catch (e) {
      const msg = e instanceof Error ? e.message : ui.notify.validateFailed
      toolNotify(localizeToolError(msg, locale), "error", NOTIFY_ID)
    }
  }

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    e.target.value = ""
    if (!file) return
    if (file.size > MAX_JSON_BYTES) {
      toolNotify(ui.notify.fileTooLarge, "error", NOTIFY_ID)
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      handleInputChange(String(reader.result ?? ""))
      toolNotify(formatMessage(ui.notify.fileLoaded, { name: file.name }), "success", NOTIFY_ID)
    }
    reader.onerror = () => toolNotify(ui.notify.fileReadFailed, "error", NOTIFY_ID)
    reader.readAsText(file)
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
    await copyText(output, ui.notify.outputEmpty)
  }

  const handleSaveOutput = () => {
    if (!output) {
      toolNotify(ui.notify.outputEmpty, "warning", NOTIFY_ID)
      return
    }
    const ext = outputType === "xml" ? "xml" : outputType === "yaml" ? "yaml" : "json"
    const mime =
      outputType === "xml"
        ? "application/xml"
        : outputType === "yaml"
          ? "application/x-yaml"
          : "application/json"
    const blob = new Blob([output], { type: `${mime};charset=utf-8` })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `data.${ext}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    toolNotify(formatMessage(ui.notify.saved, { ext }), "success", NOTIFY_ID)
  }

  const handleApplyOutputToInput = () => {
    if (!output) {
      toolNotify(ui.notify.outputEmpty, "warning", NOTIFY_ID)
      return
    }
    setInput(output)
    setInputType(outputType)
    toolNotify(ui.notify.syncedToInput, "success", NOTIFY_ID)
  }

  const openTreeView = (fold: FoldMode) => {
    runAction(() => {
      if (treeData === null) {
        parseFromInput()
        throw new Error(ui.notify.invalidJsonTree)
      }
      setViewMode("tree")
      setFoldMode(fold)
      setTreeKey((k) => k + 1)
    }, fold === "default" ? ui.notify.treeOpened : fold === "collapsed" ? ui.notify.treeCollapsed : ui.notify.treeExpanded)
  }

  const toggleTreeView = () => {
    if (viewMode === "tree") {
      setViewMode("text")
      return
    }
    openTreeView("default")
  }

  const editorCommonProps = {
    showLineNumbers,
    wordWrap,
    syntaxHighlight: syntaxHighlight && isInputJson,
  }

  return (
    <div className={cn(immersive ? "flex h-full min-h-0 flex-1 flex-col" : "space-y-2")}>
      <input
        ref={fileInputRef}
        type="file"
        accept=".json,.txt,.xml,.yaml,.yml,application/json,text/plain"
        className="hidden"
        onChange={handleUpload}
      />

      {/* 编辑区优先：双栏等高对齐 */}
      <div
        className={cn(
          "grid gap-2 lg:items-stretch lg:gap-3",
          immersive ? "grid min-h-0 flex-1 grid-cols-2" : "lg:grid-cols-2"
        )}
      >
        <EditorPanel
          panelId="json-source"
          title={ui.source}
          badge={<Badge type={inputType} />}
          enterLabel={ws.panelFullscreen}
          exitLabel={ws.panelExitFullscreen}
          value={input}
          onChange={handleInputChange}
          highlights={isInputJson ? inputHighlights : undefined}
          errorLine={isInputJson ? inputAnalysis.error?.line : undefined}
          scrollToLine={scrollToLine}
          placeholder={ui.sourcePlaceholder}
          {...editorCommonProps}
          banner={
            inputParseError && isInputJson ? (
              <ErrorBanner error={inputParseError} />
            ) : null
          }
          toolbar={
            <>
              <div className="toolbar-row flex min-h-7 flex-nowrap items-center gap-1 overflow-x-auto pb-0.5 [scrollbar-width:none] lg:flex-wrap lg:overflow-visible [&::-webkit-scrollbar]:hidden">
                <ToolbarGroup>
                  <ToolbarButton icon={AlignLeft} label={ui.format} onClick={handleFormat} active={focus === "format"} />
                  <ToolbarButton icon={Minimize2} label={ui.minify} onClick={handleCompress} active={focus === "minify"} />
                  <ToolbarButton icon={CheckCircle2} label={ui.validate} onClick={handleValidate} variant="outline" active={focus === "validate"} />
                </ToolbarGroup>
                <ToolbarDivider />
                <ToolbarButton
                  icon={sortOrder === "asc" ? SortAsc : SortDesc}
                  label={sortOrder === "asc" ? ui.sortAsc : ui.sortDesc}
                  onClick={() => {
                    const order = sortOrder
                    runAction(() => {
                      const parsed = parseFromInput()
                      setOutput(formatJson(sortJsonKeys(parsed, order), 2))
                      setOutputType("json")
                      setViewMode("text")
                    }, order === "asc" ? ui.notify.sortedAsc : ui.notify.sortedDesc)
                    setSortOrder(order === "asc" ? "desc" : "asc")
                  }}
                  variant="outline"
                  title={ui.sortTitle}
                  active={focus === "sort"}
                />
                <ToolbarDivider />
                <ToolbarDropdown label={ui.convertMenu} icon={ConvertIcon}>
                  <DropdownMenuItem onClick={handleEscape}>{ui.escape}</DropdownMenuItem>
                  <DropdownMenuItem onClick={handleUnescape}>{ui.unescape}</DropdownMenuItem>
                  <DropdownMenuItem onClick={handleConvert}>{convertLabel}</DropdownMenuItem>
                  <DropdownMenuItem onClick={handleYamlConvert}>{yamlLabel}</DropdownMenuItem>
                </ToolbarDropdown>
                <ToolExampleMenu examples={examples} onApply={applyExample} label={ui.example} />
              </div>
              <div className="toolbar-row flex min-h-7 flex-nowrap items-center gap-1 overflow-x-auto pb-0.5 [scrollbar-width:none] lg:flex-wrap lg:overflow-visible [&::-webkit-scrollbar]:hidden">
                <MiniButton icon={Upload} label={ui.upload} onClick={() => fileInputRef.current?.click()} />
                <MiniButton icon={Copy} label={ui.copy} onClick={handleCopyInput} />
                <MiniButton icon={Trash2} label={ui.clear} onClick={handleClearInput} />
              </div>
            </>
          }
        />

        <EditorPanel
          panelId="json-result"
          title={ui.result}
          badge={<Badge type={viewMode === "tree" ? "tree" : outputType} treeLabel={ui.treeBadge} />}
          enterLabel={ws.panelFullscreen}
          exitLabel={ws.panelExitFullscreen}
          {...editorCommonProps}
          syntaxHighlight={syntaxHighlight}
          toolbar={
            <>
              <div className="toolbar-row flex min-h-7 flex-nowrap items-center gap-1 overflow-x-auto pb-0.5 [scrollbar-width:none] lg:flex-wrap lg:overflow-visible [&::-webkit-scrollbar]:hidden">
                <ToolbarButton icon={FolderTree} label={ui.tree} onClick={toggleTreeView} active={viewMode === "tree"} variant="outline" />
                <ToolbarButton icon={ChevronsDownUp} label={ui.collapse} onClick={() => openTreeView("collapsed")} variant="outline" />
                <ToolbarButton icon={ChevronsUpDown} label={ui.expand} onClick={() => openTreeView("expanded")} variant="outline" />
              </div>
              <div className="toolbar-row flex min-h-7 flex-nowrap items-center gap-1 overflow-x-auto pb-0.5 [scrollbar-width:none] lg:flex-wrap lg:overflow-visible [&::-webkit-scrollbar]:hidden">
                <MiniButton icon={Copy} label={ui.copy} onClick={handleCopyOutput} />
                <MiniButton icon={Download} label={ui.save} onClick={handleSaveOutput} />
                <MiniButton icon={ArrowDownToLine} label={ui.syncToInput} onClick={handleApplyOutputToInput} title={ui.syncToInputTitle} />
                <MiniButton icon={Trash2} label={ui.clear} onClick={handleClearOutput} />
              </div>
            </>
          }
        >
          {viewMode === "tree" ? (
            treeData !== null ? (
              <JsonTreeView
                key={`${treeKey}-${foldMode}`}
                data={treeData}
                foldMode={foldMode}
                expandLabel={ui.expand}
                collapseLabel={ui.collapse}
              />
            ) : (
              <EmptyTreeFallback onBack={() => setViewMode("text")} emptyText={ui.emptyTree} backLabel={ui.backToText} />
            )
          ) : (
            <JsonLineEditor
              value={output}
              onChange={handleOutputChange}
              placeholder={ui.resultPlaceholder}
              className="h-full min-h-0 rounded-none border-0"
              {...editorCommonProps}
            />
          )}
        </EditorPanel>
      </div>

      {!immersive && (
      <>
      {/* 紧凑状态条：实时反馈，不抢编辑区空间 */}
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-md border border-border/60 bg-muted/20 px-3 py-1.5 text-xs text-muted-foreground">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          {inputAnalysis.nodeStats ? (
            <>
              <StatItem label={ui.statObjects} value={String(inputAnalysis.nodeStats.objects)} />
              <StatItem label={ui.statArrays} value={String(inputAnalysis.nodeStats.arrays)} />
              <StatItem label={ui.statKeys} value={String(inputAnalysis.nodeStats.keys)} />
              <span className="hidden text-border sm:inline">|</span>
            </>
          ) : null}
          <StatItem label={ui.statOriginal} value={inputAnalysis.sizeStats.originalLabel} />
          <StatItem label={ui.statMinified} value={inputAnalysis.sizeStats.minifiedLabel} />
          {inputAnalysis.sizeStats.savedPercent !== null && (
            <StatItem label={ui.statSaved} value={`${inputAnalysis.sizeStats.savedPercent}%`} highlight={inputAnalysis.sizeStats.savedPercent > 0} />
          )}
          {isOversized && <span className="text-destructive">{ui.oversized}</span>}
        </div>
        <div className="flex items-center gap-1">
          <IconToggle icon={ListOrdered} label={ui.lineNumbers} active={showLineNumbers} onClick={() => setShowLineNumbers((v) => !v)} />
          <IconToggle icon={WrapText} label={ui.wordWrap} active={wordWrap} onClick={() => setWordWrap((v) => !v)} />
        </div>
      </div>

      {/* 次要工具：默认收起，需要时再展开 */}
      <Collapsible open={toolsOpen} onOpenChange={setToolsOpen}>
        <CollapsibleTrigger asChild>
          <button
            type="button"
            className="flex w-full items-center justify-between rounded-md border border-border/60 bg-card/40 px-3 py-2 text-left text-sm text-muted-foreground transition-colors hover:bg-muted/30 hover:text-foreground"
          >
            <span className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              {ui.queryTools}
              {(searchQuery || jsonPathQuery) && (
                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] text-primary">{ui.inUse}</span>
              )}
            </span>
            <ChevronDown className={cn("h-4 w-4 transition-transform", toolsOpen && "rotate-180")} />
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 space-y-2 rounded-md border border-border/60 bg-card/30 p-3">
          <JsonPathRow
            label={ui.jsonPathLabel}
            hint={ui.jsonPathHint}
            placeholder={ui.jsonPathPlaceholder}
            value={jsonPathQuery}
            onChange={setJsonPathQuery}
            disabled={!isInputJson}
            error={inputAnalysis.jsonPathError}
            result={inputAnalysis.jsonPathResult}
            hasQuery={Boolean(jsonPathQuery.trim())}
          />

          <ToolRow label={ui.search}>
            <div className="relative min-w-0 flex-1">
              <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={ui.searchPlaceholder}
                className="h-8 pl-8 font-mono text-xs"
                disabled={!isInputJson}
              />
            </div>
            {searchQuery.trim() && isInputJson && (
              <span className="shrink-0 text-xs text-muted-foreground">
                {inputAnalysis.searchMatches.length > 0
                  ? formatMessage(ui.matches, { n: inputAnalysis.searchMatches.length })
                  : ui.noMatch}
              </span>
            )}
          </ToolRow>

          {searchQuery.trim() && inputAnalysis.searchMatches.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pl-[4.5rem]">
              {inputAnalysis.searchMatches.map((match) => (
                <button
                  key={match.path}
                  type="button"
                  onClick={() => {
                    const line = buildSearchHighlights(input, [match], searchQuery)[0]?.line
                    if (line) setScrollToLine(line)
                  }}
                  className="rounded border border-border bg-muted/40 px-2 py-0.5 font-mono text-[11px] transition-colors hover:border-primary/40"
                >
                  <span className="text-primary">{match.path}</span>
                  <span className="mx-1 text-muted-foreground">=</span>
                  {formatSearchValue(match.value)}
                </button>
              ))}
            </div>
          )}

        </CollapsibleContent>
      </Collapsible>
      </>
      )}
    </div>
  )
}

function EditorPanel({
  panelId,
  title,
  badge,
  value,
  onChange,
  showLineNumbers,
  wordWrap,
  syntaxHighlight,
  placeholder,
  highlights,
  errorLine,
  scrollToLine,
  toolbar,
  banner,
  children,
  enterLabel,
  exitLabel,
}: {
  panelId: string
  title: string
  badge?: React.ReactNode
  value?: string
  onChange?: (v: string) => void
  showLineNumbers?: boolean
  wordWrap?: boolean
  syntaxHighlight?: boolean
  placeholder?: string
  highlights?: LineHighlight[]
  errorLine?: number
  scrollToLine?: number
  toolbar?: React.ReactNode
  banner?: React.ReactNode
  children?: React.ReactNode
  enterLabel?: string
  exitLabel?: string
}) {
  return (
    <FullscreenEditorPanel
      panelId={panelId}
      title={title}
      badge={badge}
      toolbar={toolbar}
      banner={banner}
      enterLabel={enterLabel}
      exitLabel={exitLabel}
    >
      {children ?? (
        <JsonLineEditor
          value={value ?? ""}
          onChange={onChange ?? (() => {})}
          showLineNumbers={showLineNumbers}
          wordWrap={wordWrap}
          syntaxHighlight={syntaxHighlight}
          placeholder={placeholder}
          highlights={highlights}
          errorLine={errorLine}
          scrollToLine={scrollToLine}
          className="h-full min-h-[var(--tool-editor-min-h)] rounded-none border-0"
        />
      )}
    </FullscreenEditorPanel>
  )
}

function ToolbarDivider() {
  return <span className="mx-1 h-4 w-px shrink-0 bg-border" aria-hidden />
}

function ToolbarGroup({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center gap-0.5">{children}</div>
}

function ToolbarDropdown({
  label,
  icon: Icon,
  children,
}: {
  label: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button type="button" variant="outline" size="sm" className="h-7 shrink-0 gap-1 px-2 text-xs">
          <Icon className="h-3.5 w-3.5 shrink-0" />
          <span className="inline">{label}</span>
          <ChevronDown className="h-3 w-3 shrink-0 opacity-60" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">{children}</DropdownMenuContent>
    </DropdownMenu>
  )
}

function ErrorBanner({ error }: { error: { line: number; column: number; message: string } }) {
  return (
    <div className="flex items-start gap-2 border-b border-destructive/20 bg-destructive/5 px-3 py-1.5 text-xs">
      <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-destructive" />
      <div className="font-mono text-destructive">
        <span className="text-muted-foreground">L{error.line}:C{error.column}</span>
        <span className="mx-2 text-border">·</span>
        <span className="font-medium">{error.message}</span>
      </div>
    </div>
  )
}

function JsonPathRow({
  label,
  hint,
  placeholder,
  value,
  onChange,
  disabled,
  error,
  result,
  hasQuery,
}: {
  label: string
  hint: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  disabled: boolean
  error: string | null
  result: string | null
  hasQuery: boolean
}) {
  const output =
    error != null ? (
      <span className="text-destructive">{error}</span>
    ) : result !== null ? (
      <span className="text-primary">{result}</span>
    ) : hasQuery ? (
      <span className="text-muted-foreground">—</span>
    ) : null

  return (
    <div className="space-y-1.5">
      <div className="flex flex-wrap items-center gap-2">
        <span className="w-16 shrink-0 text-xs font-medium text-muted-foreground">{label}</span>
        <div className="flex min-w-0 flex-1 items-center overflow-hidden rounded-md border border-input bg-muted/30">
          <span
            className="shrink-0 border-r border-border bg-muted/50 px-2.5 py-1.5 font-mono text-xs text-muted-foreground select-none"
            title={hint}
          >
            $.
          </span>
          <Input
            value={value}
            onChange={(e) => onChange(stripJsonPathPrefix(e.target.value))}
            placeholder={placeholder}
            title={hint}
            className="h-8 min-w-0 flex-1 border-0 bg-transparent font-mono text-xs shadow-none placeholder:text-muted-foreground/60 focus-visible:ring-0"
            disabled={disabled}
          />
        </div>
        {output && <span className="hidden shrink-0 font-mono text-xs md:inline">{output}</span>}
      </div>
      {output && (
        <div className="flex gap-2 md:hidden">
          <span className="w-16 shrink-0" aria-hidden />
          <span className="min-w-0 flex-1 break-all font-mono text-xs">{output}</span>
        </div>
      )}
    </div>
  )
}

function ToolRow({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="w-16 shrink-0 text-xs font-medium text-muted-foreground">{label}</span>
      {children}
    </div>
  )
}

function IconToggle({
  icon: Icon,
  label,
  active,
  onClick,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <Button
      type="button"
      size="sm"
      variant={active ? "secondary" : "ghost"}
      onClick={onClick}
      title={label}
      aria-label={label}
      className="h-7 w-7 p-0"
    >
      <Icon className="h-3.5 w-3.5" />
    </Button>
  )
}

function StatItem({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <span>
      <span className="text-muted-foreground">{label}:</span>{" "}
      <span className={cn("font-medium text-foreground", highlight && "text-primary")}>{value}</span>
    </span>
  )
}

function Badge({ type, treeLabel = "Tree" }: { type: ContentType | "tree"; treeLabel?: string }) {
  return (
    <span
      className={cn(
        "rounded px-1.5 py-0.5 text-[10px] font-medium uppercase",
        type === "json" && "bg-primary/10 text-primary",
        type === "xml" && "bg-orange-500/10 text-orange-400",
        type === "yaml" && "bg-emerald-500/10 text-emerald-500",
        type === "tree" && "bg-secondary text-muted-foreground"
      )}
    >
      {type === "tree" ? treeLabel : type}
    </span>
  )
}

function EmptyTreeFallback({
  onBack,
  emptyText,
  backLabel,
}: {
  onBack: () => void
  emptyText: string
  backLabel: string
}) {
  return (
    <div className="flex h-[var(--tool-editor-min-h)] min-h-[var(--tool-panel-min-h)] items-center justify-center text-sm text-muted-foreground">
      <div className="px-4 text-center">
        <FileText className="mx-auto mb-2 h-8 w-8 opacity-50" />
        <p className="mb-3">{emptyText}</p>
        <Button variant="outline" size="sm" onClick={onBack}>
          {backLabel}
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
      className="h-7 shrink-0 gap-1 px-2 text-xs"
    >
      <Icon className="h-3.5 w-3.5 shrink-0" />
      <span className="inline">{label}</span>
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
      aria-label={label}
      className="h-7 shrink-0 gap-1 px-2 text-xs text-muted-foreground hover:text-foreground"
    >
      <Icon className="h-3.5 w-3.5" />
      <span className="inline">{label}</span>
    </Button>
  )
}
