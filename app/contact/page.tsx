import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { siteConfig } from "@/lib/tools-data"

export const metadata: Metadata = {
  title: `联系我们 | ${siteConfig.name}`,
  description: `联系 ${siteConfig.name} 团队，提交功能建议、问题反馈或商务合作。`,
  alternates: { canonical: `${siteConfig.url}/contact` },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-3xl px-4 pt-24 pb-16 lg:px-6">
        <h1 className="mb-8 text-3xl font-bold text-foreground">联系我们</h1>
        <div className="space-y-6 text-muted-foreground">
          <p>
            如有功能建议、问题反馈、Bug 报告或商务合作意向，欢迎通过以下方式与我们联系。
          </p>

          <section className="rounded-xl border border-border bg-card/50 p-6">
            <h2 className="mb-2 text-lg font-semibold text-foreground">电子邮件</h2>
            <p>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-primary hover:underline"
              >
                {siteConfig.contactEmail}
              </a>
            </p>
            <p className="mt-2 text-sm">我们通常会在 2-3 个工作日内回复。</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">常见问题</h2>
            <p>
              许多问题可在各工具页面的「常见问题」部分找到答案。也可查看{" "}
              <Link href="/#faq" className="text-primary hover:underline">首页 FAQ</Link>。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">隐私相关</h2>
            <p>
              有关数据与 Cookie 的疑问，请参阅我们的{" "}
              <Link href="/privacy" className="text-primary hover:underline">隐私政策</Link>。
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
