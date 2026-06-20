"use client"

import { useEffect, useMemo, useRef, useState, useDeferredValue, type Dispatch, type RefObject, type SetStateAction } from "react"
import { ClipboardPaste, Copy, Link2, Trash2 } from "lucide-react"
import { RegexFilePanel } from "@/components/regex-file-panel"
import { RegexMatchHighlight, getMatchBorderClass } from "@/components/regex-match-highlight"
import { RegexExplanationPanel } from "@/components/regex-explanation-panel"
import { RegexPatternVisual } from "@/components/regex-pattern-visual"
import { RegexPatternInput } from "@/components/regex-pattern-input"
import { RegexQuickReference } from "@/components/regex-quick-reference"
import {
  RegexHistoryPanel,
  RegexHubLinks,
  RegexSplitPanel,
  RegexSplitPreview,
  RegexUnitTestsPanel,
  type UnitTestCase,
} from "@/components/regex-tool-panels"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { getRegexTesterExamples } from "@/lib/i18n/examples"
import { defaultLocale, type Locale } from "@/lib/i18n/config"
import { formatMessage, getMessages, localizeHref } from "@/lib/i18n"
import { buildRegexExplanation } from "@/lib/regex-explain"
import { buildExportJson, buildExportTxt, downloadTextFile, readRegexTestFile } from "@/lib/regex-file-io"
import { buildShareUrl, decodeRegexUrlState, encodeRegexUrlState } from "@/lib/regex-url-state"
import { getRegexHubLinks } from "@/lib/regex-hub-links"
import {
  loadRegexHistory,
  mergeFlags,
  saveRegexHistoryEntry,
  type RegexHistoryEntry,
} from "@/lib/regex-history"
import {
  DEFAULT_REGEX_FLAGS,
  buildHighlightSegments,
  countReplacementMatches,
  executeRegex,
  executeReplace,
  executeSplit,
  formatCaptureGroupsForCopy,
  formatMatchResultsForCopy,
  formatMatchValuesExport,
  formatPatternWithFlags,
  flagsToString,
  getFullMatchStatus,
  isRegexTextOversized,
  runUnitTests,
  type RegexErrorInfo,
  type RegexFlagKey,
  type RegexFlags,
} from "@/lib/regex-utils"
import type { RegexTesterExample, ToolExampleItem } from "@/lib/tool-examples"
import { toolNotify } from "@/lib/tool-notify"
import { cn } from "@/lib/utils"
import type { RegexToolMessages } from "@/lib/i18n/messages/regex-tool-messages"

interface RegexTesterToolProps {
  locale?: Locale
}

const FLAG_KEYS: RegexFlagKey[] = ["g", "i", "m", "s", "u", "y"]

type ToolMode = "match" | "replace" | "split"

function newUnitTestId(): string {
  return `ut-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
}

function PatternLibrary({
  examples,
  title,
  searchPlaceholder,
  onApply,
  className,
  expanded,
}: {
  examples: ToolExampleItem<RegexTesterExample>[]
  title: string
  searchPlaceholder: string
  onApply: (example: RegexTesterExample) => void
  className?: string
  expanded?: boolean
}) {
  const [query, setQuery] = useState("")
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return examples
    return examples.filter(
      (ex) =>
        ex.label.toLowerCase().includes(q) ||
        (ex.description?.toLowerCase().includes(q) ?? false) ||
        ex.id.toLowerCase().includes(q)
    )
  }, [examples, query])

  return (
    <div className={cn("flex flex-col space-y-2", className)}>
      <Label className="text-sm">{title}</Label>
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="h-8 shrink-0 text-xs"
        placeholder={searchPlaceholder}
        spellCheck={false}
      />
      <div
        className={cn(
          "space-y-1.5 overflow-y-auto pr-0.5",
          expanded
            ? "min-h-[200px] max-h-[min(360px,42vh)]"
            : "max-h-[min(280px,40vh)] lg:max-h-[min(420px,50vh)]"
        )}
      >
        {filtered.map((example) => (
          <button
            key={example.id}
            type="button"
            onClick={() => onApply(example.data)}
            className="w-full rounded-md border border-border bg-card/50 px-2.5 py-2 text-left transition-colors hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span className="block text-xs font-medium leading-tight">{example.label}</span>
            {example.description && (
              <span className="mt-0.5 block text-[10px] text-muted-foreground">{example.description}</span>
            )}
          </button>
        ))}
        {filtered.length === 0 && (
          <p className="px-1 text-xs text-muted-foreground">—</p>
        )}
      </div>
    </div>
  )
}

export function RegexTesterTool({ locale = defaultLocale }: RegexTesterToolProps) {
  const ui = getMessages(locale).regexTool
  const examples = useMemo(() => getRegexTesterExamples(locale), [locale])
  const patternRef = useRef<HTMLInputElement>(null)
  const highlightContainerRef = useRef<HTMLDivElement>(null)

  const [pattern, setPattern] = useState("")
  const [flags, setFlags] = useState<RegexFlags>({ ...DEFAULT_REGEX_FLAGS })
  const [text, setText] = useState("")
  const [replacement, setReplacement] = useState("")
  const [toolMode, setToolMode] = useState<ToolMode>("match")
  const [activeMatch, setActiveMatch] = useState<number | null>(null)
  const [historyEntries, setHistoryEntries] = useState<RegexHistoryEntry[]>([])
  const [unitTestCases, setUnitTestCases] = useState<UnitTestCase[]>([])
  const [urlHydrated, setUrlHydrated] = useState(false)

  const deferredPattern = useDeferredValue(pattern)
  const deferredText = useDeferredValue(text)

  const hubLinks = useMemo(() => getRegexHubLinks(locale, ui.hubLinks), [locale, ui.hubLinks])

  useEffect(() => {
    setHistoryEntries(loadRegexHistory())
  }, [])

  useEffect(() => {
    const decoded = decodeRegexUrlState(new URLSearchParams(window.location.search))
    if (decoded.pattern !== undefined) setPattern(decoded.pattern)
    if (decoded.text !== undefined) setText(decoded.text)
    if (decoded.flags) setFlags(mergeFlags(decoded.flags))
    if (decoded.replacement !== undefined) setReplacement(decoded.replacement)
    if (decoded.mode) setToolMode(decoded.mode)
    setUrlHydrated(true)
  }, [])

  useEffect(() => {
    if (!urlHydrated) return
    const timer = window.setTimeout(() => {
      const params = encodeRegexUrlState({
        pattern,
        text,
        flags,
        replacement,
        mode: toolMode,
      })
      const qs = params.toString()
      const next = qs ? `${window.location.pathname}?${qs}` : window.location.pathname
      if (window.location.pathname + window.location.search !== next) {
        window.history.replaceState(null, "", next)
      }
    }, 450)
    return () => window.clearTimeout(timer)
  }, [pattern, text, flags, replacement, toolMode, urlHydrated])

  const applyExample = (example: RegexTesterExample) => {
    setPattern(example.pattern)
    setFlags(example.flags)
    setText(example.text)
  }

  const insertToken = (token: string) => {
    const el = patternRef.current
    if (!el) {
      setPattern((prev) => prev + token)
      return
    }
    const start = el.selectionStart ?? pattern.length
    const end = el.selectionEnd ?? pattern.length
    const next = pattern.slice(0, start) + token + pattern.slice(end)
    setPattern(next)
    requestAnimationFrame(() => {
      el.focus()
      const pos = start + token.length
      el.setSelectionRange(pos, pos)
    })
  }

  const selectPatternPart = (start: number, end: number) => {
    const el = patternRef.current
    if (!el) return
    el.focus()
    el.setSelectionRange(start, end)
  }

  const result = useMemo(
    () => executeRegex(deferredPattern, flags, deferredText),
    [deferredPattern, flags, deferredText],
  )
  const highlightSegments = useMemo(
    () => buildHighlightSegments(deferredText, result.matches),
    [deferredText, result.matches],
  )
  const explanation = useMemo(
    () => buildRegexExplanation(deferredPattern, ui.explainMeanings),
    [deferredPattern, ui.explainMeanings],
  )
  const flagString = flagsToString(flags)
  const replaceResult = useMemo(
    () => executeReplace(deferredPattern, flags, deferredText, replacement),
    [deferredPattern, flags, deferredText, replacement],
  )
  const splitResult = useMemo(
    () => executeSplit(deferredPattern, flags, deferredText),
    [deferredPattern, flags, deferredText],
  )
  const unitTestResults = useMemo(
    () => runUnitTests(deferredPattern, flags, unitTestCases),
    [deferredPattern, flags, unitTestCases],
  )
  const fullMatchStatus = useMemo(
    () => getFullMatchStatus(deferredPattern, flags, deferredText, result.matches),
    [deferredPattern, flags, deferredText, result.matches],
  )
  const replacementCount = useMemo(
    () => countReplacementMatches(deferredPattern, flags, deferredText),
    [deferredPattern, flags, deferredText],
  )
  const textOversized = isRegexTextOversized(text)
  const isDeferredStale = deferredPattern !== pattern || deferredText !== text

  const scrollToMatch = (matchNumber: number) => {
    setActiveMatch(matchNumber)
    requestAnimationFrame(() => {
      document.getElementById(`regex-match-${matchNumber}`)?.scrollIntoView({ behavior: "smooth", block: "center" })
      highlightContainerRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" })
    })
  }

  const scrollToResult = (matchNumber: number) => {
    setActiveMatch(matchNumber)
    requestAnimationFrame(() => {
      document.getElementById(`regex-result-${matchNumber}`)?.scrollIntoView({ behavior: "smooth", block: "center" })
    })
  }

  const statusLabel =
    result.status === "empty"
      ? ui.statusEmpty
      : result.status === "valid"
        ? ui.statusValid
        : ui.statusInvalid

  const copyPattern = async () => {
    const formatted = formatPatternWithFlags(pattern, result.flagString)
    if (!formatted) {
      toolNotify(ui.notify.nothingToCopy, "warning")
      return
    }
    await navigator.clipboard.writeText(formatted)
    toolNotify(ui.notify.copiedPattern)
  }

  const copyText = async () => {
    if (!text) {
      toolNotify(ui.notify.nothingToCopy, "warning")
      return
    }
    await navigator.clipboard.writeText(text)
    toolNotify(ui.notify.copiedText)
  }

  const copyResults = async () => {
    const formatted = formatMatchResultsForCopy(result.matches)
    if (!formatted) {
      toolNotify(ui.notify.nothingToCopy, "warning")
      return
    }
    await navigator.clipboard.writeText(formatted)
    toolNotify(ui.notify.copiedResults)
  }

  const copyGroups = async () => {
    const formatted = formatCaptureGroupsForCopy(result.matches)
    if (!formatted) {
      toolNotify(ui.notify.nothingToCopy, "warning")
      return
    }
    await navigator.clipboard.writeText(formatted)
    toolNotify(ui.notify.copiedGroups)
  }

  const pasteText = async () => {
    try {
      const clip = await navigator.clipboard.readText()
      setText((prev) => (prev ? `${prev}\n${clip}` : clip))
    } catch {
      toolNotify(ui.notify.nothingToCopy, "warning")
    }
  }

  const handleUpload = async (file: File) => {
    try {
      const content = await readRegexTestFile(file)
      setText(content)
      toolNotify(ui.notify.uploadedFile)
    } catch {
      toolNotify(ui.notify.nothingToCopy, "warning")
    }
  }

  const exportTxt = () => {
    const content = buildExportTxt(result.matches)
    if (!content) {
      toolNotify(ui.notify.nothingToCopy, "warning")
      return
    }
    downloadTextFile("regex-matches.txt", content)
    toolNotify(ui.notify.copiedExport)
  }

  const exportJson = () => {
    const content = buildExportJson(result.matches)
    if (!content || content === "[]") {
      toolNotify(ui.notify.nothingToCopy, "warning")
      return
    }
    downloadTextFile("regex-matches.json", content, "application/json;charset=utf-8")
    toolNotify(ui.notify.copiedExport)
  }

  const exportMatchValues = (format: "lines" | "csv" | "json") => {
    const content = formatMatchValuesExport(result.matches, format)
    if (!content) {
      toolNotify(ui.notify.nothingToCopy, "warning")
      return
    }
    const ext = format === "json" ? "json" : "txt"
    const mime = format === "json" ? "application/json;charset=utf-8" : "text/plain;charset=utf-8"
    downloadTextFile(`regex-match-values.${ext}`, content, mime)
    toolNotify(ui.notify.copiedExport)
  }

  const copyReplacePreview = async () => {
    if (!replaceResult.output || replaceResult.error) {
      toolNotify(ui.notify.nothingToCopy, "warning")
      return
    }
    await navigator.clipboard.writeText(replaceResult.output)
    toolNotify(ui.notify.copiedReplace)
  }

  const copyShareLink = async () => {
    const path = localizeHref(locale, "tools/regex-tester")
    const url = buildShareUrl(`${window.location.origin}${path}`, {
      pattern,
      text,
      flags,
      replacement,
      mode: toolMode,
    })
    await navigator.clipboard.writeText(url)
    toolNotify(ui.notify.copiedShareLink)
  }

  const saveHistory = () => {
    if (!pattern.trim()) return
    const merged = saveRegexHistoryEntry({ pattern, text, flags })
    setHistoryEntries(merged)
  }

  const loadHistoryEntry = (index: number) => {
    const entry = historyEntries[index]
    if (!entry) return
    setPattern(entry.pattern)
    setText(entry.text)
    setFlags(entry.flags)
  }

  const addUnitTest = () => {
    setUnitTestCases((prev) => [
      ...prev,
      { id: newUnitTestId(), text: "", shouldMatch: true },
    ])
  }

  const updateUnitTest = (id: string, patch: Partial<UnitTestCase>) => {
    setUnitTestCases((prev) => prev.map((c) => (c.id === id ? { ...c, ...patch } : c)))
  }

  const removeUnitTest = (id: string) => {
    setUnitTestCases((prev) => prev.filter((c) => c.id !== id))
  }

  const historyPanelEntries = historyEntries.map((e) => ({
    pattern: e.pattern,
    text: e.text,
    label: e.text.slice(0, 48) || e.pattern,
  }))

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "/") {
        const tag = (e.target as HTMLElement)?.tagName
        if (tag === "INPUT" || tag === "TEXTAREA" || (e.target as HTMLElement)?.isContentEditable) return
        e.preventDefault()
        patternRef.current?.focus()
      }
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [])

  const fullMatchLabel =
    fullMatchStatus === "full"
      ? ui.fullMatchFull
      : fullMatchStatus === "partial"
        ? ui.fullMatchPartial
        : ui.fullMatchNone

  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-4">
      <aside className="hidden lg:col-span-4 lg:flex lg:max-h-[calc(100vh-7rem)] lg:flex-col lg:gap-3 lg:overflow-y-auto lg:sticky lg:top-20 lg:self-start">
        <PatternLibrary
          examples={examples}
          title={ui.commonExamplesTitle}
          searchPlaceholder={ui.librarySearchPlaceholder}
          onApply={applyExample}
          expanded
          className="shrink-0 rounded-lg border border-border bg-card/60 p-3"
        />
        <RegexHistoryPanel
          title={ui.historyTitle}
          emptyLabel={ui.historyEmpty}
          saveLabel={ui.historySave}
          entries={historyPanelEntries}
          onSave={saveHistory}
          onLoad={loadHistoryEntry}
          className="shrink-0"
        />
        <RegexQuickReference ui={ui} onInsert={insertToken} className="max-h-[min(180px,22vh)] shrink-0" />
        <RegexUnitTestsPanel
          title={ui.unitTestsTitle}
          passLabel={ui.unitTestPass}
          failLabel={ui.unitTestFail}
          shouldMatchLabel={ui.unitTestShouldMatch}
          shouldNotMatchLabel={ui.unitTestShouldNotMatch}
          addLabel={ui.unitTestAdd}
          placeholder={ui.unitTestPlaceholder}
          cases={unitTestCases}
          results={unitTestResults}
          onChangeCase={updateUnitTest}
          onAddCase={addUnitTest}
          onRemoveCase={removeUnitTest}
          className="max-h-[min(200px,24vh)] shrink-0 overflow-hidden"
        />
        <RegexHubLinks
          title={ui.relatedToolsTitle}
          description={ui.relatedToolsDesc}
          links={hubLinks}
          className="shrink-0"
        />
      </aside>

      <div className="flex flex-col gap-3 lg:col-span-8">
        <PatternLibrary
          examples={examples}
          title={ui.commonExamplesTitle}
          searchPlaceholder={ui.librarySearchPlaceholder}
          onApply={applyExample}
          className="rounded-lg border border-border bg-card/60 p-3 lg:hidden"
        />

        <QuickActionsBar
          ui={ui}
          onCopyPattern={copyPattern}
          onCopyResults={copyResults}
          onCopyGroups={copyGroups}
          onClearPattern={() => setPattern("")}
          onClearText={() => setText("")}
          onShareLink={copyShareLink}
          onExportValues={() => exportMatchValues("lines")}
          onExportCsv={() => exportMatchValues("csv")}
          hasMatches={result.matches.length > 0}
        />

        <PatternEditor
          ui={ui}
          pattern={pattern}
          setPattern={setPattern}
          patternRef={patternRef}
          flagString={flagString}
          invalid={result.status === "invalid"}
          errorPosition={result.error?.position}
          onCopyPattern={copyPattern}
          onClearPattern={() => setPattern("")}
          onInsertSnippet={insertToken}
        />

        {textOversized && (
          <p className="text-xs text-amber-700 dark:text-amber-400">
            {formatMessage(ui.largeTextWarning, { count: text.length })}
          </p>
        )}

        {isDeferredStale && (
          <p className="text-xs text-muted-foreground animate-pulse">Updating matches…</p>
        )}

        <div className="flex flex-wrap gap-2">
          {examples.slice(0, 6).map((ex) => (
            <Button
              key={ex.id}
              type="button"
              variant="outline"
              size="sm"
              className="h-7 text-xs"
              onClick={() => applyExample(ex.data)}
            >
              {ex.label}
            </Button>
          ))}
        </div>

        <FlagsRow ui={ui} flags={flags} setFlags={setFlags} showNonGlobalHint={!flags.g && !!pattern.trim()} />

        {toolMode === "match" && pattern.trim() && text && result.status === "valid" && (
          <MatchValidationBadge status={fullMatchStatus} label={fullMatchLabel} />
        )}

        <Tabs value={toolMode} onValueChange={(v) => setToolMode(v as ToolMode)}>
          <TabsList className="h-8">
            <TabsTrigger value="match" className="text-xs px-3">{ui.modeTabMatch}</TabsTrigger>
            <TabsTrigger value="replace" className="text-xs px-3">{ui.modeTabReplace}</TabsTrigger>
            <TabsTrigger value="split" className="text-xs px-3">{ui.modeTabSplit}</TabsTrigger>
          </TabsList>
        </Tabs>

        {toolMode === "replace" && (
          <section className="space-y-2 rounded-lg border border-border bg-card/50 p-3">
            <Label htmlFor="regex-replacement">{ui.replaceLabel}</Label>
            <Input
              id="regex-replacement"
              value={replacement}
              onChange={(e) => setReplacement(e.target.value)}
              placeholder={ui.replacePlaceholder}
              className="font-mono text-sm"
            />
            <p className="text-xs text-muted-foreground">{ui.replaceHint}</p>
            {replacementCount > 0 && (
              <p className="text-xs font-medium text-primary">
                {formatMessage(ui.replaceCount, { count: replacementCount })}
              </p>
            )}
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <Label>{ui.replacePreviewLabel}</Label>
                <Button variant="ghost" size="sm" className="h-7 px-2 text-xs" onClick={copyReplacePreview}>
                  <Copy className="mr-1 h-3 w-3" />
                  {ui.copyReplacePreview}
                </Button>
              </div>
              <RegexSplitPreview value={replaceResult.error ? text : replaceResult.output} />
            </div>
          </section>
        )}

        {toolMode === "split" && (
          <RegexSplitPanel
            title={ui.splitTitle}
            hint={ui.splitHint}
            emptyLabel={ui.splitEmpty}
            parts={splitResult.error ? [] : splitResult.parts}
          />
        )}

        {!result.error && explanation.length > 0 && (
          <RegexPatternVisual
            title={ui.visualExplainTitle}
            tokens={explanation}
            onSelectPart={selectPatternPart}
          />
        )}

        {!result.error && (
          <RegexExplanationPanel
            title={ui.explainTitle}
            emptyLabel={ui.explainEmpty}
            tokens={explanation}
            onSelectPart={selectPatternPart}
          />
        )}

        {result.error && <ErrorPanel ui={ui} error={result.error} />}

        <div className="grid gap-3 xl:grid-cols-12">
          <section className="space-y-3 xl:col-span-7">
            <TestTextPanel
              ui={ui}
              text={text}
              setText={setText}
              onCopyText={copyText}
              onClearText={() => setText("")}
              onPaste={pasteText}
              highlightSegments={highlightSegments}
              activeMatch={activeMatch}
              highlightContainerRef={highlightContainerRef}
              onMatchClick={scrollToResult}
              showHighlight={toolMode === "match"}
            />
            <RegexFilePanel
              title={ui.fileTitle}
              uploadHint={ui.fileUploadHint}
              uploadLabel={ui.fileUploadLabel}
              exportTxtLabel={ui.fileExportTxt}
              exportJsonLabel={ui.fileExportJson}
              onUpload={handleUpload}
              onExportTxt={exportTxt}
              onExportJson={exportJson}
              canExport={result.matches.length > 0}
            />
          </section>

          <aside className="space-y-3 xl:col-span-5">
            {toolMode === "match" && (
              <>
                <StatsPanel ui={ui} result={result} statusLabel={statusLabel} />
                <ResultsPanel
                  ui={ui}
                  result={result}
                  pattern={pattern}
                  activeMatch={activeMatch}
                  onCopyResults={copyResults}
                  onCopyGroups={copyGroups}
                  onJumpToMatch={scrollToMatch}
                />
              </>
            )}
          </aside>
        </div>

        <RegexQuickReference ui={ui} onInsert={insertToken} className="max-h-[200px] lg:hidden" />

        <p className="text-xs text-muted-foreground">{ui.shortcutsHint}</p>
      </div>
    </div>
  )
}

function QuickActionsBar({
  ui,
  onCopyPattern,
  onCopyResults,
  onCopyGroups,
  onClearPattern,
  onClearText,
  onShareLink,
  onExportValues,
  onExportCsv,
  hasMatches,
}: {
  ui: RegexToolMessages
  onCopyPattern: () => void
  onCopyResults: () => void
  onCopyGroups: () => void
  onClearPattern: () => void
  onClearText: () => void
  onShareLink: () => void
  onExportValues: () => void
  onExportCsv: () => void
  hasMatches: boolean
}) {
  return (
    <div className="flex flex-wrap items-center gap-2 rounded-md border border-border bg-card/40 px-3 py-2">
      <span className="text-xs font-medium text-muted-foreground">{ui.quickActionsTitle}</span>
      <Button variant="outline" size="sm" className="h-7 px-2 text-xs" onClick={onCopyPattern}>
        <Copy className="mr-1 h-3 w-3" />
        {ui.copyPattern}
      </Button>
      <Button variant="outline" size="sm" className="h-7 px-2 text-xs" onClick={onCopyResults} disabled={!hasMatches}>
        <Copy className="mr-1 h-3 w-3" />
        {ui.copyResults}
      </Button>
      <Button variant="outline" size="sm" className="h-7 px-2 text-xs" onClick={onCopyGroups} disabled={!hasMatches}>
        <Copy className="mr-1 h-3 w-3" />
        {ui.copyGroups}
      </Button>
      <Button variant="outline" size="sm" className="h-7 px-2 text-xs" onClick={onShareLink}>
        <Link2 className="mr-1 h-3 w-3" />
        {ui.shareLink}
      </Button>
      <Button variant="outline" size="sm" className="h-7 px-2 text-xs" onClick={onExportValues} disabled={!hasMatches}>
        {ui.exportMatches}
      </Button>
      <Button variant="outline" size="sm" className="h-7 px-2 text-xs" onClick={onExportCsv} disabled={!hasMatches}>
        {ui.exportCsv}
      </Button>
      <Button variant="ghost" size="sm" className="h-7 px-2 text-xs" onClick={onClearPattern}>
        <Trash2 className="mr-1 h-3 w-3" />
        {ui.clearPattern}
      </Button>
      <Button variant="ghost" size="sm" className="h-7 px-2 text-xs" onClick={onClearText}>
        <Trash2 className="mr-1 h-3 w-3" />
        {ui.clearText}
      </Button>
    </div>
  )
}

function PatternEditor({
  ui,
  pattern,
  setPattern,
  patternRef,
  flagString,
  invalid,
  errorPosition,
  onCopyPattern,
  onClearPattern,
  onInsertSnippet,
}: {
  ui: RegexToolMessages
  pattern: string
  setPattern: (v: string) => void
  patternRef: RefObject<HTMLInputElement | null>
  flagString: string
  invalid: boolean
  errorPosition?: number | null
  onCopyPattern: () => void
  onClearPattern: () => void
  onInsertSnippet: (token: string) => void
}) {
  return (
    <section className="space-y-2">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Label htmlFor="regex-pattern" className="text-base">
              {ui.patternLabel}
            </Label>
            <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
              {ui.engineLabel}
            </span>
          </div>
          <p className="mt-0.5 text-xs text-muted-foreground">{ui.patternHint}</p>
        </div>
        <div className="flex gap-1">
          <Button variant="ghost" size="sm" className="h-7 px-2 text-xs" onClick={onClearPattern}>
            <Trash2 className="mr-1 h-3 w-3" />
            {ui.clearPattern}
          </Button>
          <Button variant="ghost" size="sm" className="h-7 px-2 text-xs" onClick={onCopyPattern}>
            <Copy className="mr-1 h-3 w-3" />
            {ui.copyPattern}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "rounded-lg border-2 bg-card/40 px-2 py-0 sm:px-3",
          invalid ? "border-destructive/50" : "border-primary/30"
        )}
      >
        <div className="flex h-11 items-center gap-1 sm:gap-2">
          <span className="select-none font-mono text-lg leading-none text-muted-foreground">/</span>
          <RegexPatternInput
            id="regex-pattern"
            value={pattern}
            onChange={setPattern}
            inputRef={patternRef}
            placeholder={ui.patternPlaceholder}
            invalid={invalid}
            errorPosition={errorPosition}
          />
          <span className="shrink-0 font-mono text-xs leading-none text-muted-foreground sm:text-sm">
            /{flagString || "…"}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-1.5">
        <span className="text-xs text-muted-foreground">{ui.snippetsTitle}</span>
        {ui.patternSnippets.map((snippet) => (
          <Button
            key={snippet.label}
            type="button"
            variant="outline"
            size="sm"
            className="h-6 px-2 font-mono text-[10px]"
            onClick={() => onInsertSnippet(snippet.insert)}
          >
            {snippet.label}
          </Button>
        ))}
      </div>
    </section>
  )
}

function MatchValidationBadge({
  status,
  label,
}: {
  status: ReturnType<typeof getFullMatchStatus>
  label: string
}) {
  return (
    <div
      className={cn(
        "rounded-md border px-3 py-2 text-sm font-medium",
        status === "full" && "border-green-500/40 bg-green-500/10 text-green-700 dark:text-green-400",
        status === "partial" && "border-amber-500/40 bg-amber-500/10 text-amber-800 dark:text-amber-300",
        status === "none" && "border-border bg-muted/30 text-muted-foreground",
      )}
    >
      {label}
    </div>
  )
}

function FlagsRow({
  ui,
  flags,
  setFlags,
  showNonGlobalHint,
}: {
  ui: RegexToolMessages
  flags: RegexFlags
  setFlags: Dispatch<SetStateAction<RegexFlags>>
  showNonGlobalHint?: boolean
}) {
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded-md border border-border bg-card/50 px-3 py-2">
        <span className="text-sm font-medium">{ui.flagsLabel}</span>
        {FLAG_KEYS.map((f) => (
          <label
            key={f}
            className="flex cursor-pointer items-center gap-2 text-sm"
            title={ui.flagDescriptions[f]}
          >
            <Checkbox
              checked={flags[f]}
              onCheckedChange={(c) => setFlags((prev) => ({ ...prev, [f]: !!c }))}
            />
            <span className="font-mono font-medium">{f}</span>
            <span className="hidden text-xs text-muted-foreground sm:inline">{ui.flagDescriptions[f]}</span>
          </label>
        ))}
      </div>
      {showNonGlobalHint && <p className="text-xs text-muted-foreground">{ui.nonGlobalHint}</p>}
    </div>
  )
}

function ErrorPanel({ ui, error }: { ui: RegexToolMessages; error: RegexErrorInfo }) {
  return (
    <div
      className="rounded-md border border-destructive/40 bg-destructive/10 p-3"
      role="alert"
      aria-live="assertive"
    >
      <h3 className="text-sm font-medium text-destructive">{ui.errorTitle}</h3>
      <p className="mt-1 font-mono text-sm text-destructive/90">{error.message}</p>
      {error.position !== null && (
        <p className="mt-1 text-xs text-destructive/80">
          {formatMessage(ui.errorAtPosition, { pos: error.position + 1 })}
        </p>
      )}
    </div>
  )
}

function TestTextPanel({
  ui,
  text,
  setText,
  onCopyText,
  onClearText,
  onPaste,
  highlightSegments,
  activeMatch,
  highlightContainerRef,
  onMatchClick,
  showHighlight = true,
}: {
  ui: RegexToolMessages
  text: string
  setText: (v: string) => void
  onCopyText: () => void
  onClearText: () => void
  onPaste: () => void
  highlightSegments: ReturnType<typeof buildHighlightSegments>
  activeMatch: number | null
  highlightContainerRef: RefObject<HTMLDivElement | null>
  onMatchClick: (matchNumber: number) => void
  showHighlight?: boolean
}) {
  return (
    <>
      <div className="space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Label htmlFor="regex-text">{ui.testTextLabel}</Label>
          <div className="flex gap-1">
            <Button variant="ghost" size="sm" className="h-7 px-2 text-xs" onClick={onPaste}>
              <ClipboardPaste className="mr-1 h-3 w-3" />
              {ui.pasteLabel}
            </Button>
            <Button variant="ghost" size="sm" className="h-7 px-2 text-xs" onClick={onClearText}>
              <Trash2 className="mr-1 h-3 w-3" />
              {ui.clearText}
            </Button>
            <Button variant="ghost" size="sm" className="h-7 px-2 text-xs" onClick={onCopyText}>
              <Copy className="mr-1 h-3 w-3" />
              {ui.copyText}
            </Button>
          </div>
        </div>
        <Textarea
          id="regex-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="min-h-[180px] font-mono text-sm"
          placeholder={ui.testTextPlaceholder}
          spellCheck={false}
        />
      </div>
      {showHighlight && (
        <div className="space-y-2">
          <Label>{ui.highlightLabel}</Label>
          <RegexMatchHighlight
            segments={highlightSegments}
            emptyLabel={ui.highlightEmpty}
            className="min-h-[140px]"
            activeMatchNumber={activeMatch}
            containerRef={highlightContainerRef}
            onMatchClick={onMatchClick}
            jumpToResultLabel={ui.jumpToResult}
          />
        </div>
      )}
    </>
  )
}

function StatsPanel({
  ui,
  result,
  statusLabel,
}: {
  ui: RegexToolMessages
  result: ReturnType<typeof executeRegex>
  statusLabel: string
}) {
  return (
    <div className="rounded-md border border-border bg-card/50 p-3">
      <h3 className="mb-3 text-sm font-medium">{ui.statsTitle}</h3>
      <dl className="grid grid-cols-3 gap-2 text-center text-sm">
        <div className="rounded-md bg-secondary/40 px-2 py-2">
          <dt className="text-xs text-muted-foreground">{ui.matches}</dt>
          <dd className="mt-1 font-mono text-lg font-semibold">{result.matchCount}</dd>
        </div>
        <div className="rounded-md bg-secondary/40 px-2 py-2">
          <dt className="text-xs text-muted-foreground">{ui.groups}</dt>
          <dd className="mt-1 font-mono text-lg font-semibold">{result.captureGroupCount}</dd>
        </div>
        <div className="rounded-md bg-secondary/40 px-2 py-2">
          <dt className="text-xs text-muted-foreground">{ui.status}</dt>
          <dd
            className={cn(
              "mt-1 text-sm font-semibold",
              result.status === "valid" && "text-green-700 dark:text-green-400",
              result.status === "invalid" && "text-destructive",
              result.status === "empty" && "text-muted-foreground"
            )}
          >
            {statusLabel}
          </dd>
        </div>
      </dl>
    </div>
  )
}

function ResultsPanel({
  ui,
  result,
  pattern,
  activeMatch,
  onCopyResults,
  onCopyGroups,
  onJumpToMatch,
}: {
  ui: RegexToolMessages
  result: ReturnType<typeof executeRegex>
  pattern: string
  activeMatch: number | null
  onCopyResults: () => void
  onCopyGroups: () => void
  onJumpToMatch: (matchNumber: number) => void
}) {
  const hasGroups = result.matches.some((m) => m.groups.length > 0)

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Label>{ui.resultsTitle}</Label>
        <div className="flex gap-1">
          <Button variant="ghost" size="sm" className="h-7 px-2 text-xs" onClick={onCopyResults}>
            <Copy className="mr-1 h-3 w-3" />
            {ui.copyResults}
          </Button>
          {hasGroups && (
            <Button variant="ghost" size="sm" className="h-7 px-2 text-xs" onClick={onCopyGroups}>
              <Copy className="mr-1 h-3 w-3" />
              {ui.copyGroups}
            </Button>
          )}
        </div>
      </div>

      {result.matches.length > 0 && (
        <p className="text-[11px] text-muted-foreground">{ui.jumpToMatch}</p>
      )}

      {!result.error && pattern.trim() && result.matches.length === 0 && (
        <p className="text-sm text-muted-foreground">{ui.noMatches}</p>
      )}

      {result.matches.length > 0 && (
        <div className="max-h-[400px] space-y-2 overflow-auto rounded-md border border-border bg-secondary/20 p-2">
          {result.matches.map((match) => (
            <button
              key={match.matchNumber}
              id={`regex-result-${match.matchNumber}`}
              type="button"
              onClick={() => onJumpToMatch(match.matchNumber)}
              className={cn(
                "w-full scroll-mt-24 rounded-md border border-border/60 border-l-4 bg-background/60 p-3 text-left transition-colors hover:bg-accent/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                getMatchBorderClass(match.matchNumber),
                activeMatch === match.matchNumber && "bg-accent/40 ring-1 ring-primary/40"
              )}
            >
              <p className="text-xs font-medium text-muted-foreground">Match #{match.matchNumber}</p>
              <dl className="mt-2 space-y-1 text-sm">
                <div className="flex flex-wrap gap-x-2">
                  <dt className="text-muted-foreground">{ui.matchValue}:</dt>
                  <dd className="font-mono text-primary break-all">{match.value || '""'}</dd>
                </div>
                <div className="flex flex-wrap gap-x-2">
                  <dt className="text-muted-foreground">{ui.matchPosition}:</dt>
                  <dd className="font-mono">{match.index}</dd>
                </div>
                <div className="flex flex-wrap gap-x-2">
                  <dt className="text-muted-foreground">{ui.matchLength}:</dt>
                  <dd className="font-mono">{match.length}</dd>
                </div>
                <div className="flex flex-wrap gap-x-2">
                  <dt className="text-muted-foreground">{ui.matchLineCol}:</dt>
                  <dd className="font-mono">
                    {match.line} / {match.column}
                  </dd>
                </div>
                {match.groups.length > 0 && (
                  <div className="mt-2 border-t border-border/60 pt-2">
                    <p className="mb-1 text-xs font-medium text-muted-foreground">{ui.captureGroupsTitle}</p>
                    {match.groups.map((group) =>
                      group.value !== undefined && group.value !== "" ? (
                        <div key={`${group.index}-${group.name ?? "n"}`} className="flex flex-wrap gap-x-2">
                          <dt className="text-muted-foreground">
                            {group.name ? `${ui.namedGroupLabel} ${group.name}:` : `${ui.groupLabel} ${group.index}:`}
                          </dt>
                          <dd className="font-mono break-all">{group.value}</dd>
                        </div>
                      ) : null
                    )}
                  </div>
                )}
              </dl>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
