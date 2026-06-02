"use client"

import { useRef } from "react"
import { Download, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface RegexFilePanelProps {
  title: string
  uploadHint: string
  uploadLabel: string
  exportTxtLabel: string
  exportJsonLabel: string
  onUpload: (file: File) => void
  onExportTxt: () => void
  onExportJson: () => void
  canExport: boolean
  className?: string
}

export function RegexFilePanel({
  title,
  uploadHint,
  uploadLabel,
  exportTxtLabel,
  exportJsonLabel,
  onUpload,
  onExportTxt,
  onExportJson,
  canExport,
  className,
}: RegexFilePanelProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div className={cn("space-y-2 rounded-md border border-border bg-card/50 p-3", className)}>
      <div>
        <Label>{title}</Label>
        <p className="mt-0.5 text-xs text-muted-foreground">{uploadHint}</p>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept=".txt,.csv,.json,text/plain,text/csv,application/json"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) onUpload(file)
          e.target.value = ""
        }}
      />
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm" className="h-8" onClick={() => inputRef.current?.click()}>
          <Upload className="mr-1.5 h-3.5 w-3.5" />
          {uploadLabel}
        </Button>
        <Button variant="outline" size="sm" className="h-8" disabled={!canExport} onClick={onExportTxt}>
          <Download className="mr-1.5 h-3.5 w-3.5" />
          {exportTxtLabel}
        </Button>
        <Button variant="outline" size="sm" className="h-8" disabled={!canExport} onClick={onExportJson}>
          <Download className="mr-1.5 h-3.5 w-3.5" />
          {exportJsonLabel}
        </Button>
      </div>
    </div>
  )
}
