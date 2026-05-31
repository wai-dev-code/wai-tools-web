"use client"

import { useEffect } from "react"
import { Maximize2, Minimize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePanelFullscreenOptional } from "@/components/panel-fullscreen-context"
import { cn } from "@/lib/utils"

interface FullscreenEditorPanelProps {
  panelId: string
  title: string
  badge?: React.ReactNode
  toolbar?: React.ReactNode
  banner?: React.ReactNode
  children: React.ReactNode
  enterLabel?: string
  exitLabel?: string
  className?: string
}

/** 可全屏的编辑面板：标题一行、操作按钮一行（可换行） */
export function FullscreenEditorPanel({
  panelId,
  title,
  badge,
  toolbar,
  banner,
  children,
  enterLabel = "Fullscreen",
  exitLabel = "Exit fullscreen",
  className,
}: FullscreenEditorPanelProps) {
  const fs = usePanelFullscreenOptional()
  const immersive = fs?.isPanelFullscreen ?? false

  useEffect(() => {
    if (!immersive) return
    const mq = window.matchMedia("(max-width: 767px)")
    const exitIfMobile = () => {
      if (mq.matches) fs?.exitPanelFullscreen()
    }
    exitIfMobile()
    mq.addEventListener("change", exitIfMobile)
    return () => mq.removeEventListener("change", exitIfMobile)
  }, [immersive, fs])

  const panelBody = (
    <>
      {banner}
      <div
        className={cn(
          "flex min-h-0 flex-1 flex-col overflow-hidden",
          immersive && "[&>div]:h-full [&>div]:min-h-0",
          !immersive && "min-h-[var(--tool-editor-min-h)]"
        )}
      >
        {children}
      </div>
    </>
  )

  return (
    <div
      className={cn(
        "flex min-h-0 flex-col overflow-hidden rounded-lg border border-border bg-card/50 shadow-sm",
        immersive ? "h-full min-h-0" : "h-full",
        className
      )}
    >
      <div className="shrink-0 border-b border-border px-3 py-2">
        <div className={cn("flex h-8 items-center gap-2", toolbar && "mb-2")}>
          <span className="whitespace-nowrap text-sm font-medium text-foreground">{title}</span>
          {badge}
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="ml-auto hidden h-8 w-8 shrink-0 text-muted-foreground hover:text-foreground md:inline-flex"
            onClick={() =>
              immersive ? fs?.exitPanelFullscreen() : fs?.enterPanelFullscreen(panelId)
            }
            aria-label={immersive ? exitLabel : enterLabel}
            title={immersive ? exitLabel : enterLabel}
          >
            {immersive ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </Button>
        </div>
        {toolbar ? (
          <div className="flex flex-col gap-1 lg:grid lg:grid-rows-2 lg:gap-1">{toolbar}</div>
        ) : null}
      </div>
      {panelBody}
    </div>
  )
}
