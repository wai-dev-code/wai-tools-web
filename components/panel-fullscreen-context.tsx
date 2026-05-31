"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"

interface PanelFullscreenContextValue {
  activePanelId: string | null
  enterPanelFullscreen: (panelId: string) => void
  exitPanelFullscreen: () => void
  isPanelFullscreen: boolean
}

const PanelFullscreenContext = createContext<PanelFullscreenContextValue | null>(null)

export function PanelFullscreenProvider({ children }: { children: React.ReactNode }) {
  const [activePanelId, setActivePanelId] = useState<string | null>(null)

  const enterPanelFullscreen = useCallback((panelId: string) => {
    setActivePanelId(panelId)
  }, [])

  const exitPanelFullscreen = useCallback(() => {
    setActivePanelId(null)
  }, [])

  const isPanelFullscreen = activePanelId !== null

  useEffect(() => {
    if (!isPanelFullscreen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [isPanelFullscreen])

  useEffect(() => {
    if (!isPanelFullscreen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        setActivePanelId(null)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [isPanelFullscreen])

  const value = useMemo(
    (): PanelFullscreenContextValue => ({
      activePanelId,
      enterPanelFullscreen,
      exitPanelFullscreen,
      isPanelFullscreen,
    }),
    [activePanelId, enterPanelFullscreen, exitPanelFullscreen, isPanelFullscreen]
  )

  return (
    <PanelFullscreenContext.Provider value={value}>{children}</PanelFullscreenContext.Provider>
  )
}

export function usePanelFullscreen() {
  const ctx = useContext(PanelFullscreenContext)
  if (!ctx) {
    throw new Error("usePanelFullscreen must be used within PanelFullscreenProvider")
  }
  return ctx
}

export function usePanelFullscreenOptional() {
  return useContext(PanelFullscreenContext)
}
