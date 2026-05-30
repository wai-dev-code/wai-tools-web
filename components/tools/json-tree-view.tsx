"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

type FoldMode = "default" | "collapsed" | "expanded"

interface JsonTreeViewProps {
  data: unknown
  defaultCollapsedDepth?: number
  foldMode?: FoldMode
  expandLabel?: string
  collapseLabel?: string
}

export function JsonTreeView({
  data,
  defaultCollapsedDepth = 2,
  foldMode = "default",
  expandLabel = "Expand",
  collapseLabel = "Collapse",
}: JsonTreeViewProps) {
  const forceCollapsed =
    foldMode === "collapsed" ? true : foldMode === "expanded" ? false : undefined

  return (
    <div className="max-h-[420px] min-h-[420px] overflow-auto rounded-lg border border-border bg-secondary/20 p-3 font-mono text-sm">
      <TreeNode
        name="root"
        value={data}
        depth={0}
        defaultCollapsedDepth={defaultCollapsedDepth}
        forceCollapsed={forceCollapsed}
        expandLabel={expandLabel}
        collapseLabel={collapseLabel}
        isRoot
      />
    </div>
  )
}

function TreeNode({
  name,
  value,
  depth,
  defaultCollapsedDepth,
  forceCollapsed,
  expandLabel,
  collapseLabel,
  isRoot,
}: {
  name: string
  value: unknown
  depth: number
  defaultCollapsedDepth: number
  forceCollapsed?: boolean
  expandLabel: string
  collapseLabel: string
  isRoot?: boolean
}) {
  const initialCollapsed =
    forceCollapsed !== undefined
      ? forceCollapsed
      : depth >= defaultCollapsedDepth

  const [collapsed, setCollapsed] = useState(initialCollapsed)

  useEffect(() => {
    if (forceCollapsed !== undefined) {
      setCollapsed(forceCollapsed)
    }
  }, [forceCollapsed])

  const toggle = () => setCollapsed((c) => !c)

  if (value === null) {
    return (
      <Line depth={depth} isRoot={isRoot}>
        {!isRoot && <Key name={name} />}
        <span className="text-orange-400">null</span>
      </Line>
    )
  }

  if (typeof value === "boolean") {
    return (
      <Line depth={depth} isRoot={isRoot}>
        {!isRoot && <Key name={name} />}
        <span className="text-purple-400">{String(value)}</span>
      </Line>
    )
  }

  if (typeof value === "number") {
    return (
      <Line depth={depth} isRoot={isRoot}>
        {!isRoot && <Key name={name} />}
        <span className="text-blue-400">{value}</span>
      </Line>
    )
  }

  if (typeof value === "string") {
    return (
      <Line depth={depth} isRoot={isRoot}>
        {!isRoot && <Key name={name} />}
        <span className="text-green-400">&quot;{value}&quot;</span>
      </Line>
    )
  }

  if (Array.isArray(value)) {
    return (
      <div>
        <Line depth={depth} isRoot={isRoot}>
          <CollapseBtn
            collapsed={collapsed}
            onClick={toggle}
            expandLabel={expandLabel}
            collapseLabel={collapseLabel}
          />
          {!isRoot && <Key name={name} />}
          <span className="text-muted-foreground">[</span>
          {!collapsed && (
            <span className="text-muted-foreground"> {value.length} items</span>
          )}
          {collapsed && (
            <span className="text-muted-foreground"> … {value.length} items ]</span>
          )}
        </Line>
        {!collapsed &&
          value.map((item, i) => (
            <TreeNode
              key={i}
              name={String(i)}
              value={item}
              depth={depth + 1}
              defaultCollapsedDepth={defaultCollapsedDepth}
              forceCollapsed={forceCollapsed}
              expandLabel={expandLabel}
              collapseLabel={collapseLabel}
            />
          ))}
        {!collapsed && (
          <Line depth={depth}>
            <span className="text-muted-foreground">]</span>
          </Line>
        )}
      </div>
    )
  }

  if (typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>)
    return (
      <div>
        <Line depth={depth} isRoot={isRoot}>
          <CollapseBtn
            collapsed={collapsed}
            onClick={toggle}
            expandLabel={expandLabel}
            collapseLabel={collapseLabel}
          />
          {!isRoot && <Key name={name} />}
          <span className="text-muted-foreground">{"{"}</span>
          {collapsed && (
            <span className="text-muted-foreground"> … {entries.length} keys {"}"}</span>
          )}
        </Line>
        {!collapsed &&
          entries.map(([k, v]) => (
            <TreeNode
              key={k}
              name={k}
              value={v}
              depth={depth + 1}
              defaultCollapsedDepth={defaultCollapsedDepth}
              forceCollapsed={forceCollapsed}
              expandLabel={expandLabel}
              collapseLabel={collapseLabel}
            />
          ))}
        {!collapsed && (
          <Line depth={depth}>
            <span className="text-muted-foreground">{"}"}</span>
          </Line>
        )}
      </div>
    )
  }

  return null
}

function Line({
  depth,
  children,
  isRoot,
}: {
  depth: number
  children: React.ReactNode
  isRoot?: boolean
}) {
  return (
    <div
      className={cn("flex items-center gap-1 py-0.5 hover:bg-muted/30", isRoot && "font-medium")}
      style={{ paddingLeft: depth * 16 }}
    >
      {children}
    </div>
  )
}

function Key({ name }: { name: string }) {
  return <span className="text-foreground">&quot;{name}&quot;:</span>
}

function CollapseBtn({
  collapsed,
  onClick,
  expandLabel,
  collapseLabel,
}: {
  collapsed: boolean
  onClick: () => void
  expandLabel: string
  collapseLabel: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-4 w-4 shrink-0 items-center justify-center rounded hover:bg-muted"
      aria-label={collapsed ? expandLabel : collapseLabel}
    >
      {collapsed ? (
        <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
      ) : (
        <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
      )}
    </button>
  )
}
