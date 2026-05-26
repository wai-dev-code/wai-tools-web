"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { categoryLabels, searchTools, tools } from "@/lib/tools-data"
import { cn } from "@/lib/utils"

export function ToolsList() {
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => searchTools(query), [query])

  const grouped = useMemo(() => {
    const map = new Map<string, typeof tools>()
    for (const tool of filtered) {
      const label = categoryLabels[tool.category]
      if (!map.has(label)) map.set(label, [])
      map.get(label)!.push(tool)
    }
    return map
  }, [filtered])

  return (
    <>
      <div className="relative mb-8 max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="搜索工具..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-9"
        />
      </div>

      <div className="space-y-8">
        {[...grouped.entries()].map(([category, catTools]) => (
          <section key={category}>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {category}
            </h2>
            <div className="grid gap-2 sm:grid-cols-2">
              {catTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className={cn(
                    "flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/50"
                  )}
                >
                  <tool.icon className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">{tool.name}</div>
                    <div className="text-sm text-muted-foreground">{tool.shortDescription}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-muted-foreground">未找到匹配的工具</p>
      )}
    </>
  )
}
