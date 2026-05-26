import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { siteConfig } from "@/lib/tools-data"

export const metadata: Metadata = {
  title: `服务条款 | ${siteConfig.name}`,
  description: `${siteConfig.name} 服务条款与使用条件。`,
  alternates: { canonical: `${siteConfig.url}/terms` },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-3xl px-4 pt-24 pb-16 lg:px-6">
        <h1 className="mb-8 text-3xl font-bold text-foreground">服务条款</h1>
        <div className="space-y-6 text-muted-foreground">
          <p className="text-sm">最后更新：2024 年 1 月 1 日</p>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">接受条款</h2>
            <p>
              访问或使用 {siteConfig.name}（{siteConfig.url}）即表示您同意本服务条款。如不同意，请勿使用本网站。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">服务说明</h2>
            <p>
              {siteConfig.name} 提供免费在线开发者工具。工具按「现状」提供，我们不保证结果完全准确或适用于所有场景。
              对于因使用本工具导致的任何直接或间接损失，我们不承担责任。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">用户责任</h2>
            <ul className="ml-6 list-disc space-y-2">
              <li>不得将本网站用于任何非法目的</li>
              <li>不得尝试干扰、破坏或未经授权访问我们的系统</li>
              <li>对使用工具处理的数据内容自行负责</li>
              <li>JWT 解码等工具仅用于调试，请勿用于绕过安全机制</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">知识产权</h2>
            <p>
              本网站的设计、代码和品牌标识归 {siteConfig.name} 所有。未经授权，不得复制或商业利用本站内容。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">第三方链接与广告</h2>
            <p>
              本网站可能包含第三方广告或链接。我们不对第三方内容或服务负责。使用第三方服务须遵守其各自条款。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">条款变更</h2>
            <p>我们保留随时修改本条款的权利。变更后继续使用即视为接受新条款。</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">联系我们</h2>
            <p>
              有关本条款的问题，请访问{" "}
              <Link href="/contact" className="text-primary hover:underline">联系我们</Link> 页面。
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
