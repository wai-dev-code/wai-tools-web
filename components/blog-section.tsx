import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar } from "lucide-react"

const articles = [
  {
    title: "如何高效使用 JSON 格式化工具",
    description: "学习 JSON 格式化的最佳实践，提升你的开发效率",
    date: "2024-01-15",
    category: "教程",
    readTime: "5 分钟",
  },
  {
    title: "Base64 编码原理详解",
    description: "深入了解 Base64 编码的工作原理和应用场景",
    date: "2024-01-10",
    category: "技术",
    readTime: "8 分钟",
  },
  {
    title: "JWT 安全最佳实践",
    description: "确保你的 JWT 实现安全可靠的关键技巧",
    date: "2024-01-05",
    category: "安全",
    readTime: "10 分钟",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-foreground sm:text-4xl">
              最新文章
            </h2>
            <p className="text-muted-foreground">
              开发者技巧、教程和最佳实践
            </p>
          </div>
          <a
            href="/blog"
            className="flex items-center text-sm font-medium text-primary hover:underline"
          >
            查看全部文章
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Card
              key={article.title}
              className="group cursor-pointer overflow-hidden border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardContent className="p-6">
                {/* Category & Read Time */}
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-semibold text-card-foreground transition-colors group-hover:text-primary">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                  {article.description}
                </p>

                {/* Date */}
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="mr-1.5 h-3.5 w-3.5" />
                  {article.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
