import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ToolSidebar } from "@/components/tool-sidebar"
import { ToolsList } from "@/components/tools-list"
import { siteConfig, tools } from "@/lib/tools-data"

export const metadata: Metadata = {
  title: `全部工具 | ${siteConfig.name}`,
  description: `浏览 ${siteConfig.name} 提供的 ${tools.length} 个免费开发者在线工具。`,
  alternates: { canonical: `${siteConfig.url}/tools` },
}

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto flex max-w-7xl gap-8 px-4 pt-20 pb-16 lg:px-6">
        <ToolSidebar />
        <main className="min-w-0 flex-1">
          <h1 className="mb-2 text-3xl font-bold text-foreground">全部工具</h1>
          <p className="mb-6 text-muted-foreground">
            {tools.length} 个免费开发者工具，浏览器本地运行
          </p>
          <ToolsList />
        </main>
      </div>
      <Footer />
    </div>
  )
}
