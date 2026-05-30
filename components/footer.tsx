import Link from "next/link"

const footerLinks = {
  tools: {
    title: "工具",
    links: [
      { name: "全部工具", href: "/tools" },
      { name: "JSON 格式化", href: "/tools/json-formatter" },
      { name: "Base64 编解码", href: "/tools/base64" },
    ],
  },
  resources: {
    title: "资源",
    links: [
      { name: "博客", href: "/blog" },
      { name: "关于我们", href: "/about" },
      { name: "联系我们", href: "/contact" },
    ],
  },
  legal: {
    title: "法律",
    links: [
      { name: "隐私政策", href: "/privacy" },
      { name: "服务条款", href: "/terms" },
    ],
  },
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">W</span>
              </div>
              <span className="text-xl font-semibold text-foreground">WaiHub</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              免费开发者在线工具，浏览器本地运行，注重隐私。
            </p>
          </div>

          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-foreground">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground sm:text-left">
          © {new Date().getFullYear()} WaiHub. 保留所有权利。
        </div>
      </div>
    </footer>
  )
}
