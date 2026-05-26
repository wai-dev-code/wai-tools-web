import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ToolSidebar } from "@/components/tool-sidebar"
import { JsonLd } from "@/components/json-ld"
import { AdSlot } from "@/components/ad-slot"
import {
  categoryLabels,
  getToolBySlug,
  getToolsByCategory,
  siteConfig,
  type ToolDefinition,
} from "@/lib/tools-data"

interface ToolLayoutProps {
  tool: ToolDefinition
  children: React.ReactNode
  instructions: React.ReactNode
  faq?: { question: string; answer: string }[]
}

export function ToolLayout({ tool, children, instructions, faq }: ToolLayoutProps) {
  const toolUrl = `${siteConfig.url}/tools/${tool.slug}`

  return (
    <div className="min-h-screen bg-background">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: tool.name,
          description: tool.description,
          applicationCategory: "DeveloperApplication",
          operatingSystem: "Any",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          url: toolUrl,
        }}
      />
      {faq && faq.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }}
        />
      )}
      <Header />
      <div className="mx-auto flex max-w-7xl gap-8 px-4 pt-20 pb-16 lg:px-6">
        <ToolSidebar currentSlug={tool.slug} />
        <main className="min-w-0 flex-1">
          <nav aria-label="面包屑" className="mb-6 flex items-center gap-1 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">首页</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/tools" className="hover:text-foreground">工具</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{tool.name}</span>
          </nav>

          <div className="mb-6">
            <div className="mb-2 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <tool.icon className="h-5 w-5" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground sm:text-3xl">{tool.name}</h1>
                <p className="text-sm text-muted-foreground">
                  {categoryLabels[tool.category]} · 本地运行 · 免费
                </p>
              </div>
            </div>
            <p className="text-muted-foreground">{tool.description}</p>
          </div>

          <div className="mb-6 rounded-xl border border-border bg-card/50 p-4 sm:p-6">{children}</div>

          <AdSlot name="toolBottom" />

          <section className="mb-10 rounded-xl border border-border bg-card/50 p-6">
            <h2 className="mb-4 text-lg font-semibold text-foreground">使用说明</h2>
            <div className="space-y-3 text-sm text-muted-foreground">{instructions}</div>
          </section>

          {faq && faq.length > 0 && (
            <section className="rounded-xl border border-border bg-card/50 p-6">
              <h2 className="mb-4 text-lg font-semibold text-foreground">常见问题</h2>
              <dl className="space-y-4">
                {faq.map((item) => (
                  <div key={item.question}>
                    <dt className="font-medium text-foreground">{item.question}</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">{item.answer}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          <RelatedTools currentSlug={tool.slug} />
        </main>
      </div>
      <Footer />
    </div>
  )
}

function RelatedTools({ currentSlug }: { currentSlug: string }) {
  const current = getToolBySlug(currentSlug)
  if (!current) return null
  const related = getToolsByCategory(current.category)
    .filter((t) => t.slug !== currentSlug)
    .slice(0, 3)
  if (related.length === 0) return null

  return (
    <section className="mt-10">
      <h2 className="mb-4 text-lg font-semibold text-foreground">相关工具</h2>
      <div className="grid gap-3 sm:grid-cols-3">
        {related.map((t) => (
          <Link
            key={t.slug}
            href={`/tools/${t.slug}`}
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/50 hover:bg-card/80"
          >
            <div className="font-medium text-foreground">{t.name}</div>
            <div className="mt-1 text-xs text-muted-foreground">{t.shortDescription}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}
