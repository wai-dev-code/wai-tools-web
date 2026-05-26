import {
  Braces,
  FileCode2,
  Clock,
  Fingerprint,
  FileSearch,
  KeyRound,
  ArrowRight,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const tools = [
  {
    name: "JSON 格式化",
    description: "格式化、验证和美化 JSON 数据",
    icon: Braces,
    href: "/tools/json-formatter",
  },
  {
    name: "Base64 编解码",
    description: "快速编码和解码 Base64 字符串",
    icon: FileCode2,
    href: "/tools/base64",
  },
  {
    name: "时间戳转换",
    description: "Unix 时间戳与日期格式互转",
    icon: Clock,
    href: "/tools/timestamp",
  },
  {
    name: "UUID 生成器",
    description: "生成 UUID v1、v4 等唯一标识符",
    icon: Fingerprint,
    href: "/tools/uuid-generator",
  },
  {
    name: "正则表达式测试",
    description: "实时测试和调试正则表达式",
    icon: FileSearch,
    href: "/tools/regex-tester",
  },
  {
    name: "JWT 解码器",
    description: "解析和验证 JSON Web Token",
    icon: KeyRound,
    href: "/tools/jwt-decoder",
  },
]

export function PopularToolsSection() {
  return (
    <section id="tools" className="px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            热门工具
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            最受开发者欢迎的工具，助力你的日常开发工作
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Card
              key={tool.name}
              className="group relative cursor-pointer overflow-hidden border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <tool.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                  {tool.name}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {tool.description}
                </p>
                <div className="flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  <span>立即使用</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
