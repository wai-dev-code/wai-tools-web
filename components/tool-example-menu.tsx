"use client"

import { BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { ToolExampleItem } from "@/lib/tool-examples"
import { cn } from "@/lib/utils"

interface ToolExampleMenuProps<T> {
  examples: ToolExampleItem<T>[]
  onApply: (data: T) => void
  className?: string
  label?: string
  iconOnly?: boolean
}

export function ToolExampleMenu<T>({
  examples,
  onApply,
  className,
  label = "Example",
  iconOnly = false,
}: ToolExampleMenuProps<T>) {
  if (examples.length === 0) return null

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className={cn(className ?? "h-7 gap-1 px-2 text-xs", iconOnly && "w-7 px-0")}
          title={label}
          aria-label={label}
        >
          <BookOpen className="h-3.5 w-3.5" />
          {!iconOnly && label}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="max-w-xs">
        {examples.map((example) => (
          <DropdownMenuItem
            key={example.id}
            className="flex cursor-pointer flex-col items-start gap-0.5 py-2"
            onClick={() => onApply(example.data)}
          >
            <span className="font-medium">{example.label}</span>
            {example.description && (
              <span className="text-xs text-muted-foreground">{example.description}</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
