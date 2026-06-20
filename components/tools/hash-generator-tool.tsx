"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Copy, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { defaultLocale, type Locale } from "@/lib/i18n/config"
import { formatMessage, getMessages } from "@/lib/i18n"
import {
  computeAllHashes,
  computeAllHashesFromBuffer,
  HASH_ALGORITHMS,
  type HashAlgorithm,
  type HashResults,
} from "@/lib/hash-utils"
import { toolNotify } from "@/lib/tool-notify"
import { cn } from "@/lib/utils"

interface HashGeneratorToolProps {
  locale?: Locale
}

type InputMode = "text" | "file"

const algorithmLabelKey: Record<
  HashAlgorithm,
  keyof ReturnType<typeof getMessages>["hashTool"]
> = {
  MD5: "algorithmMd5",
  "SHA-1": "algorithmSha1",
  "SHA-256": "algorithmSha256",
  "SHA-512": "algorithmSha512",
}

export function HashGeneratorTool({ locale = defaultLocale }: HashGeneratorToolProps) {
  const ui = getMessages(locale).hashTool
  const [inputMode, setInputMode] = useState<InputMode>("text")
  const [input, setInput] = useState("")
  const [fileName, setFileName] = useState<string | null>(null)
  const [fileBuffer, setFileBuffer] = useState<ArrayBuffer | null>(null)
  const [results, setResults] = useState<HashResults | null>(null)
  const [computing, setComputing] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputMode === "text") {
      if (!input) {
        setResults(null)
        setComputing(false)
        return
      }

      let cancelled = false
      setComputing(true)

      computeAllHashes(input)
        .then((next) => {
          if (!cancelled) {
            setResults(next)
            setComputing(false)
          }
        })
        .catch(() => {
          if (!cancelled) setComputing(false)
        })

      return () => {
        cancelled = true
      }
    }

    if (!fileBuffer) {
      setResults(null)
      setComputing(false)
      return
    }

    let cancelled = false
    setComputing(true)

    computeAllHashesFromBuffer(fileBuffer)
      .then((next) => {
        if (!cancelled) {
          setResults(next)
          setComputing(false)
        }
      })
      .catch(() => {
        if (!cancelled) setComputing(false)
      })

    return () => {
      cancelled = true
    }
  }, [input, inputMode, fileBuffer])

  const hasResults = useMemo(() => {
    if (inputMode === "text") return results && input.length > 0
    return results && fileBuffer && fileBuffer.byteLength > 0
  }, [results, input, inputMode, fileBuffer])

  const copyHash = async (algo: HashAlgorithm, value: string) => {
    if (!value) return
    await navigator.clipboard.writeText(value)
    toolNotify(formatMessage(ui.notify.copied, { algo: ui[algorithmLabelKey[algo]] as string }))
  }

  const copyAll = async () => {
    if (!results) return
    const text = HASH_ALGORITHMS.map(
      (algo) => `${ui[algorithmLabelKey[algo]]}: ${results[algo]}`,
    ).join("\n")
    await navigator.clipboard.writeText(text)
    toolNotify(ui.notify.copiedAll)
  }

  const handleFileChange = async (file: File | undefined) => {
    if (!file) return
    const buffer = await file.arrayBuffer()
    setFileBuffer(buffer)
    setFileName(file.name)
    setInputMode("file")
    toolNotify(formatMessage(ui.notify.fileLoaded, { name: file.name }))
  }

  const switchToText = () => {
    setInputMode("text")
    setFileBuffer(null)
    setFileName(null)
  }

  return (
    <div className="space-y-5">
      <section className="space-y-3 rounded-lg border border-border bg-card p-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex gap-2">
            <Button
              type="button"
              size="sm"
              variant={inputMode === "text" ? "default" : "outline"}
              onClick={switchToText}
            >
              {ui.textMode}
            </Button>
            <Button
              type="button"
              size="sm"
              variant={inputMode === "file" ? "default" : "outline"}
              onClick={() => fileInputRef.current?.click()}
            >
              {ui.fileMode}
            </Button>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="gap-1.5"
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="h-3.5 w-3.5" />
            {ui.uploadFile}
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={(e) => handleFileChange(e.target.files?.[0])}
          />
        </div>

        {inputMode === "text" ? (
          <>
            <Label htmlFor="hash-input">{ui.inputLabel}</Label>
            <Textarea
              id="hash-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={ui.inputPlaceholder}
              rows={5}
              className="font-mono text-sm"
            />
          </>
        ) : (
          <div className="rounded-md border border-dashed border-border bg-muted/20 px-4 py-6 text-center text-sm">
            {fileName ? (
              <p className="font-medium text-foreground">{fileName}</p>
            ) : (
              <p className="text-muted-foreground">{ui.uploadFile}</p>
            )}
          </div>
        )}
      </section>

      <section className="space-y-3 rounded-lg border border-border bg-card p-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-sm font-medium text-foreground">{ui.resultsTitle}</h3>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            className="gap-1.5"
            onClick={copyAll}
            disabled={!hasResults}
          >
            <Copy className="h-3.5 w-3.5" />
            {ui.copyAll}
          </Button>
        </div>

        {!hasResults ? (
          <p className="py-6 text-center text-sm text-muted-foreground">{ui.emptyInput}</p>
        ) : (
          <ul className="space-y-3">
            {HASH_ALGORITHMS.map((algo) => {
              const value = results?.[algo] ?? ""
              const label = ui[algorithmLabelKey[algo]] as string
              return (
                <li key={algo} className="rounded-lg border border-border bg-muted/30 p-3">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                      {label}
                    </span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="h-7 gap-1 px-2 text-xs"
                      onClick={() => copyHash(algo, value)}
                      disabled={!value}
                    >
                      <Copy className="h-3 w-3" />
                      {ui.copy}
                    </Button>
                  </div>
                  <p
                    className={cn(
                      "break-all font-mono text-xs leading-relaxed text-foreground sm:text-sm",
                      computing && !value && "text-muted-foreground",
                    )}
                  >
                    {value || "…"}
                  </p>
                </li>
              )
            })}
          </ul>
        )}
      </section>
    </div>
  )
}
