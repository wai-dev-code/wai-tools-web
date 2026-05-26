import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { siteConfig } from "@/lib/tools-data"

export const metadata: Metadata = {
  title: `隐私政策 | ${siteConfig.name}`,
  description: `${siteConfig.name} 隐私政策，说明数据收集、Cookie 与第三方广告服务的使用方式。`,
  alternates: { canonical: `${siteConfig.url}/privacy` },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-3xl px-4 pt-24 pb-16 lg:px-6">
        <h1 className="mb-8 text-3xl font-bold text-foreground">隐私政策</h1>
        <div className="prose-legal space-y-6 text-muted-foreground">
          <p className="text-sm">最后更新：2024 年 1 月 1 日</p>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">概述</h2>
            <p>
              {siteConfig.name}（以下简称「我们」）重视您的隐私。本政策说明当您访问 {siteConfig.url} 时，我们如何收集、使用和保护信息。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">工具数据处理</h2>
            <p>
              我们的开发者工具（JSON 格式化、Base64 编解码等）在您的浏览器本地运行。
              <strong className="text-foreground">您输入或处理的数据不会上传到我们的服务器</strong>，我们无法访问这些内容。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">自动收集的信息</h2>
            <p>我们可能通过以下方式收集非个人身份信息：</p>
            <ul className="ml-6 list-disc space-y-2">
              <li>访问日志（IP 地址、浏览器类型、访问页面、时间戳）</li>
              <li>通过 Vercel Analytics 等服务的匿名使用统计</li>
              <li>Cookie 及类似技术（见下文）</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">Cookie 与第三方广告</h2>
            <p>
              我们可能使用 Google AdSense 等第三方广告服务。Google 及其合作伙伴可能使用 Cookie 根据您此前访问本网站或其他网站的情况投放广告。
            </p>
            <p className="mt-2">
              您可通过{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Google 广告设置
              </a>{" "}
              管理个性化广告，或访问{" "}
              <a
                href="https://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                aboutads.info
              </a>{" "}
              了解如何选择退出。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">您的权利</h2>
            <p>
              根据适用法律，您可能有权访问、更正或删除我们持有的个人数据。如需行使这些权利，请通过{" "}
              <Link href="/contact" className="text-primary hover:underline">联系我们</Link> 页面与我们联系。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">政策变更</h2>
            <p>我们可能不时更新本政策。重大变更将在本页面发布更新日期。</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">联系方式</h2>
            <p>
              如有隐私相关问题，请发送邮件至{" "}
              <a href={`mailto:${siteConfig.contactEmail}`} className="text-primary hover:underline">
                {siteConfig.contactEmail}
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
