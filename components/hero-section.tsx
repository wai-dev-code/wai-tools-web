"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getVisibleTools } from "@/lib/tools-data"

const visibleToolCount = getVisibleTools().length

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-20 lg:px-8 lg:pt-40 lg:pb-32">
      {/* Background glow effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-1/4 top-1/3 h-[300px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
          </span>
          <span className="text-sm text-muted-foreground">免费 · 无需注册 · 隐私优先</span>
        </div>

        {/* Headline */}
        <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          开发者工具
          <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            {" "}一站式平台
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
          WaiHub 为程序员和创作者提供强大的在线工具集。
          JSON 格式化、Base64 编解码等，一切尽在浏览器中完成。
        </p>

        {/* Search Bar */}
        <div className="mx-auto mb-8 max-w-xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="搜索工具..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-14 rounded-xl border-border bg-secondary/50 pl-12 pr-4 text-base placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
            />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="min-w-[160px] bg-primary text-primary-foreground hover:bg-primary/90">
            浏览所有工具
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="min-w-[160px] border-border bg-transparent text-foreground hover:bg-secondary"
          >
            了解更多
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3">
          {[
            { value: String(visibleToolCount), label: "在线工具" },
            { value: "100%", label: "浏览器内运行" },
            { value: "0", label: "需要注册" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-foreground sm:text-3xl">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
