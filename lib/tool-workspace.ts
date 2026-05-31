export type WorkspaceScale = "compact" | "comfortable" | "large" | "focus"

export const WORKSPACE_STORAGE_KEY = "waihub-tool-workspace"

export const DEFAULT_WORKSPACE_SCALE: WorkspaceScale = "comfortable"

export const SCALE_STEPS: WorkspaceScale[] = ["compact", "comfortable", "large"]

export const scaleEditorMinHeight: Record<WorkspaceScale, string> = {
  compact: "min(38vh, 340px)",
  comfortable: "min(62vh, 580px)",
  large: "min(88vh, 960px)",
  focus: "min(72vh, 720px)",
}

export const scalePanelMinHeight: Record<WorkspaceScale, string> = {
  compact: "240px",
  comfortable: "320px",
  large: "420px",
  focus: "280px",
}

export interface WorkspacePreferences {
  scale: WorkspaceScale
  sidebarCollapsed: boolean
}

export function isWorkspaceScale(value: string): value is WorkspaceScale {
  return value === "compact" || value === "comfortable" || value === "large" || value === "focus"
}

export function stepScale(current: WorkspaceScale, direction: "up" | "down"): WorkspaceScale {
  const idx = SCALE_STEPS.indexOf(current === "focus" ? DEFAULT_WORKSPACE_SCALE : current)
  const safeIdx = idx === -1 ? 1 : idx
  if (direction === "up") {
    return SCALE_STEPS[Math.min(safeIdx + 1, SCALE_STEPS.length - 1)]
  }
  return SCALE_STEPS[Math.max(safeIdx - 1, 0)]
}

export function readWorkspacePreferences(): WorkspacePreferences {
  if (typeof window === "undefined") {
    return { scale: DEFAULT_WORKSPACE_SCALE, sidebarCollapsed: false }
  }
  try {
    const raw = localStorage.getItem(WORKSPACE_STORAGE_KEY)
    if (!raw) return { scale: DEFAULT_WORKSPACE_SCALE, sidebarCollapsed: false }
    const parsed = JSON.parse(raw) as Partial<WorkspacePreferences>
    const scale =
      parsed.scale && isWorkspaceScale(parsed.scale) && parsed.scale !== "focus"
        ? parsed.scale
        : DEFAULT_WORKSPACE_SCALE
    return {
      scale,
      sidebarCollapsed: Boolean(parsed.sidebarCollapsed),
    }
  } catch {
    return { scale: DEFAULT_WORKSPACE_SCALE, sidebarCollapsed: false }
  }
}

export function writeWorkspacePreferences(prefs: WorkspacePreferences) {
  if (typeof window === "undefined") return
  localStorage.setItem(
    WORKSPACE_STORAGE_KEY,
    JSON.stringify({
      scale: prefs.scale === "focus" ? DEFAULT_WORKSPACE_SCALE : prefs.scale,
      sidebarCollapsed: prefs.sidebarCollapsed,
    })
  )
}
