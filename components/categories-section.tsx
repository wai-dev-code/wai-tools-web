import Link from "next/link"
import {
  Braces,
  Binary,
  ArrowRight,
  type LucideIcon,
} from "lucide-react"
import {
  categoryLabels,
  getVisibleTools,
  type ToolCategory,
} from "@/lib/tools-data"

const categoryMeta: Record<
  ToolCategory,
  { icon: LucideIcon; color: string; description: string }
> = {
  json: {
    icon: Braces,
    color: "from-blue-500/20 to-blue-600/20",
    description: "格式化、验证、压缩与 JSON 互转",
  },
  encoding: {
    icon: Binary,
    color: "from-green-500/20 to-green-600/20",
    description: "Base64 编解码、文件与格式转换",
  },
  dev: {
    icon: Braces,
    color: "from-orange-500/20 to-orange-600/20",
    description: "开发实用工具",
  },
  api: {
    icon: Braces,
    color: "from-purple-500/20 to-purple-600/20",
    description: "API 相关工具",
  },
}

export function CategoriesSection() {
  const visible = getVisibleTools()
  const grouped = visible.reduce(
    (acc, tool) => {
      acc[tool.category] = (acc[tool.category] ?? 0) + 1
      return acc
    },
    {} as Partial<Record<ToolCategory, number>>
  )

  const categories = (Object.keys(grouped) as ToolCategory[]).map((cat) => ({
    name: categoryLabels[cat],
    toolCount: grouped[cat] ?? 0,
    ...categoryMeta[cat],
  }))

  if (categories.length === 0) return null

  return (
    <section id="categories" className="px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            工具分类
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            按类别浏览我们的开发者工具集
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              href="/tools"
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 transition-opacity group-hover:opacity-100`}
              />
              <div className="relative">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground">
                    <category.icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground">
                    {category.toolCount} 个工具
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                  {category.name}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {category.description}
                </p>
                <div className="flex items-center text-sm font-medium text-primary">
                  <span>查看全部</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
