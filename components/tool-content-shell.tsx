"use client"

import { useToolWorkspaceOptional } from "@/components/tool-workspace-provider"
import { cn } from "@/lib/utils"

/**
 * 工具页内容区客户端壳层，注入工作区尺寸 CSS 变量。
 */
export function ToolContentShell({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const workspace = useToolWorkspaceOptional()

  return (
    <div
      className={cn("relative isolate", className)}
      style={
        workspace
          ? ({
              "--tool-editor-min-h": workspace.editorMinHeight,
              "--tool-panel-min-h": workspace.panelMinHeight,
            } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </div>
  )
}
