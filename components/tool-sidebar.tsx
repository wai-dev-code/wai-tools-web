"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { categoryLabels, getVisibleTools, type ToolCategory } from "@/lib/tools-data"

const categories = Object.keys(categoryLabels) as ToolCategory[]

export function ToolSidebar({ currentSlug }: { currentSlug?: string }) {
  const pathname = usePathname()

  return (
    <aside className="hidden w-56 shrink-0 lg:block">
      <div className="sticky top-20 space-y-6">
        <div>
          <Link
            href="/tools"
            className={cn(
              "mb-3 block text-sm font-semibold text-foreground hover:text-primary",
              pathname === "/tools" && "text-primary"
            )}
          >
            全部工具
          </Link>
        </div>
        {categories.map((cat) => {
          const catTools = getVisibleTools().filter((t) => t.category === cat)
          if (catTools.length === 0) return null
          return (
            <div key={cat}>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {categoryLabels[cat]}
              </h3>
              <ul className="space-y-0.5">
                {catTools.map((tool) => (
                  <li key={tool.slug}>
                    <Link
                      href={`/tools/${tool.slug}`}
                      className={cn(
                        "block rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-secondary hover:text-foreground",
                        currentSlug === tool.slug
                          ? "bg-primary/10 font-medium text-primary"
                          : "text-muted-foreground"
                      )}
                    >
                      {tool.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </aside>
  )
}
