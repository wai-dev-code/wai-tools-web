"use client"

import { Toaster } from "sonner"

export function AppToaster() {
  return (
    <Toaster
      position="top-center"
      visibleToasts={1}
      expand={false}
      richColors
      closeButton
      duration={2200}
      offset={20}
      toastOptions={{
        classNames: {
          toast:
            "border border-border bg-popover text-popover-foreground shadow-lg pointer-events-auto",
        },
      }}
    />
  )
}
