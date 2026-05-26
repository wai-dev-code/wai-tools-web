import {
  Braces,
  Binary,
  Wrench,
  Globe,
  Sparkles,
  ArrowRight,
} from "lucide-react"

const categories = [
  {
    name: "JSON 工具",
    description: "格式化、验证、压缩、比较 JSON 数据",
    icon: Braces,
    toolCount: 5,
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    name: "编码工具",
    description: "Base64、URL、HTML 编解码转换",
    icon: Binary,
    toolCount: 4,
    color: "from-green-500/20 to-green-600/20",
  },
  {
    name: "开发实用工具",
    description: "UUID、哈希、密码生成等常用工具",
    icon: Wrench,
    toolCount: 6,
    color: "from-orange-500/20 to-orange-600/20",
  },
  {
    name: "API 工具",
    description: "请求测试、响应格式化、Mock 数据",
    icon: Globe,
    toolCount: 3,
    color: "from-purple-500/20 to-purple-600/20",
  },
  {
    name: "AI 开发工具",
    description: "Prompt 优化、Token 计算、模型对比",
    icon: Sparkles,
    toolCount: 4,
    color: "from-pink-500/20 to-pink-600/20",
  },
]

export function CategoriesSection() {
  return (
    <section id="categories" className="px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            工具分类
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            按类别浏览我们的开发者工具集
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group relative cursor-pointer overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50"
            >
              {/* Background gradient */}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
