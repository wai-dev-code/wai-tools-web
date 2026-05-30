import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar } from "lucide-react"
import { getVisibleBlogPosts } from "@/lib/blog-data"

export function BlogSection() {
  const articles = getVisibleBlogPosts().slice(0, 3)

  return (
    <section id="blog" className="px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-foreground sm:text-4xl">
              最新文章
            </h2>
            <p className="text-muted-foreground">
              开发者技巧、教程和最佳实践
            </p>
          </div>
          <Link
            href="/blog"
            className="flex items-center text-sm font-medium text-primary hover:underline"
          >
            查看全部文章
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`}>
              <Card className="group h-full cursor-pointer overflow-hidden border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-card-foreground transition-colors group-hover:text-primary">
                    {article.title}
                  </h3>
                  <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                    {article.description}
                  </p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="mr-1.5 h-3.5 w-3.5" />
                    {article.date}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
