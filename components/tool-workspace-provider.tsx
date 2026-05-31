"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import {
  DEFAULT_WORKSPACE_SCALE,
  readWorkspacePreferences,
  scaleEditorMinHeight,
  scalePanelMinHeight,
  writeWorkspacePreferences,
  type WorkspaceScale,
} from "@/lib/tool-workspace"

interface ToolWorkspaceContextValue {
  scale: WorkspaceScale
  sidebarCollapsed: boolean
  toggleSidebar: () => void
  editorMinHeight: string
  panelMinHeight: string
}

const ToolWorkspaceContext = createContext<ToolWorkspaceContextValue | null>(null)

export function ToolWorkspaceProvider({ children }: { children: React.ReactNode }) {
  const [scale, setScaleState] = useState<WorkspaceScale>(DEFAULT_WORKSPACE_SCALE)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    const prefs = readWorkspacePreferences()
    setScaleState(prefs.scale)
    setSidebarCollapsed(prefs.sidebarCollapsed)
    setHydrated(true)
  }, [])

  const persist = useCallback((nextScale: WorkspaceScale, nextCollapsed: boolean) => {
    writeWorkspacePreferences({ scale: nextScale, sidebarCollapsed: nextCollapsed })
  }, [])

  const toggleSidebar = useCallback(() => {
    setSidebarCollapsed((prev) => {
      const next = !prev
      persist(scale, next)
      return next
    })
  }, [persist, scale])

  useEffect(() => {
    if (!hydrated) return

    const onKeyDown = (event: KeyboardEvent) => {
      const mod = event.metaKey || event.ctrlKey
      if (mod && event.key === "\\") {
        event.preventDefault()
        toggleSidebar()
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [hydrated, toggleSidebar])

  const editorMinHeight = scaleEditorMinHeight[scale]
  const panelMinHeight = scalePanelMinHeight[scale]

  const value = useMemo(
    (): ToolWorkspaceContextValue => ({
      scale,
      sidebarCollapsed,
      toggleSidebar,
      editorMinHeight,
      panelMinHeight,
    }),
    [scale, sidebarCollapsed, toggleSidebar, editorMinHeight, panelMinHeight]
  )

  return <ToolWorkspaceContext.Provider value={value}>{children}</ToolWorkspaceContext.Provider>
}

export function useToolWorkspace(): ToolWorkspaceContextValue {
  const ctx = useContext(ToolWorkspaceContext)
  if (!ctx) {
    throw new Error("useToolWorkspace must be used within ToolWorkspaceProvider")
  }
  return ctx
}

export function useToolWorkspaceOptional(): ToolWorkspaceContextValue | null {
  return useContext(ToolWorkspaceContext)
}
