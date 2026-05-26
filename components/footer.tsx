import Link from "next/link"
import { Github, Twitter } from "lucide-react"

const footerLinks = {
  product: {
    title: "产品",
    links: [
      { name: "所有工具", href: "/tools" },
      { name: "分类", href: "#categories" },
      { name: "新功能", href: "/changelog" },
      { name: "路线图", href: "/roadmap" },
    ],
  },
  resources: {
    title: "资源",
    links: [
      { name: "博客", href: "/blog" },
      { name: "教程", href: "/tutorials" },
      { name: "API 文档", href: "/docs" },
      { name: "FAQ", href: "#faq" },
    ],
  },
  company: {
    title: "关于",
    links: [
      { name: "关于我们", href: "/about" },
      { name: "联系我们", href: "/contact" },
      { name: "隐私政策", href: "/privacy" },
      { name: "服务条款", href: "/terms" },
    ],
  },
}

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">W</span>
              </div>
              <span className="text-xl font-semibold text-foreground">WaiHub</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              为程序员和创作者打造的开发者工具平台。所有工具免费、快速、注重隐私。
            </p>
            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-3 gap-8 lg:col-span-3">
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-foreground">
                  {section.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} WaiHub. 保留所有权利。
            </p>
            <p className="text-sm text-muted-foreground">
              使用 ❤️ 和 Next.js 构建
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
