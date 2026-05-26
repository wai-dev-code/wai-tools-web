import {
  Zap,
  Shield,
  Globe,
  UserX,
  Gift,
  Code2,
} from "lucide-react"

const benefits = [
  {
    title: "极速响应",
    description: "所有工具都在浏览器中运行，无需等待服务器响应",
    icon: Zap,
  },
  {
    title: "隐私优先",
    description: "数据不会上传到服务器，完全在本地处理",
    icon: Shield,
  },
  {
    title: "浏览器运行",
    description: "无需安装任何软件，打开即用",
    icon: Globe,
  },
  {
    title: "无需注册",
    description: "所有工具完全开放，不需要创建账号",
    icon: UserX,
  },
  {
    title: "完全免费",
    description: "所有工具永久免费使用，无隐藏费用",
    icon: Gift,
  },
  {
    title: "开发者友好",
    description: "专为开发者设计，界面简洁高效",
    icon: Code2,
  },
]

export function WhyChooseSection() {
  return (
    <section className="px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            为什么选择 WaiHub
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            我们致力于为开发者提供最好的工具体验
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group relative text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <benefit.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
