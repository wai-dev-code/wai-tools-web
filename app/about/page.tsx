import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { siteConfig, tools } from "@/lib/tools-data"

export const metadata: Metadata = {
  title: `关于我们 | ${siteConfig.name}`,
  description: `了解 ${siteConfig.name} 的使命：为开发者提供免费、快速、注重隐私的在线工具。`,
  alternates: { canonical: `${siteConfig.url}/about` },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-3xl px-4 pt-24 pb-16 lg:px-6">
        <h1 className="mb-8 text-3xl font-bold text-foreground">关于 {siteConfig.name}</h1>
        <div className="space-y-6 text-muted-foreground">
          <p>
            {siteConfig.name} 是一个面向开发者与创作者的免费在线工具平台。我们相信日常开发中的 JSON 格式化、编码转换、时间戳处理等需求，应该能在浏览器中即时完成，无需注册、无需安装、无需担心数据泄露。
          </p>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">我们的原则</h2>
            <ul className="ml-6 list-disc space-y-2">
              <li><strong className="text-foreground">本地优先</strong> — 工具在浏览器中运行，您的数据不上传服务器</li>
              <li><strong className="text-foreground">完全免费</strong> — 所有工具永久免费，无隐藏收费</li>
              <li><strong className="text-foreground">快速直达</strong> — 打开即用，减少不必要的步骤</li>
              <li><strong className="text-foreground">持续迭代</strong> — 根据开发者反馈不断添加实用工具</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">目前提供的工具</h2>
            <p className="mb-3">我们目前提供 {tools.length} 个开发者工具，涵盖 JSON、编码、时间戳、UUID、正则表达式和 JWT 等常见场景。</p>
            <Link href="/tools" className="text-primary hover:underline">浏览全部工具 →</Link>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">技术栈</h2>
            <p>
              {siteConfig.name} 使用 Next.js、React 和 Tailwind CSS 构建，部署在现代云基础设施上，确保全球访问速度与稳定性。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">反馈与建议</h2>
            <p>
              欢迎通过{" "}
              <Link href="/contact" className="text-primary hover:underline">联系我们</Link>{" "}
              提交功能建议或问题反馈，我们会认真阅读每一条消息。
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
