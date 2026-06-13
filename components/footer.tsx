import Link from "next/link"
import { defaultLocale, type Locale } from "@/lib/i18n/config"
import { getMessages, localizeHref } from "@/lib/i18n"

export function Footer({ locale = defaultLocale }: { locale?: Locale }) {
  const m = getMessages(locale)

  const footerLinks = {
    tools: {
      title: m.common.footerTools,
      links: [
        { name: m.common.allTools, href: localizeHref(locale, "tools") },
        { name: m.common.jsonFormatter, href: localizeHref(locale, "tools/json-formatter") },
        { name: m.common.base64, href: localizeHref(locale, "tools/base64") },
      ],
    },
    resources: {
      title: m.common.footerResources,
      links: [
        { name: m.common.blog, href: localizeHref(locale, "blog") },
        { name: m.common.about, href: localizeHref(locale, "about") },
        { name: m.common.contact, href: localizeHref(locale, "contact") },
      ],
    },
    legal: {
      title: m.common.footerLegal,
      links: [
        { name: m.common.privacy, href: "/privacy" },
        { name: m.common.terms, href: "/terms" },
        { name: m.common.cookies, href: "/cookies" },
        { name: m.common.changelog, href: "/changelog" },
      ],
    },
  }

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href={localizeHref(locale, "")} className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">W</span>
              </div>
              <span className="text-xl font-semibold text-foreground">WaiHub</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">{m.common.footerTagline}</p>
          </div>

          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-foreground">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
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
          © {new Date().getFullYear()} WaiHub. {m.common.copyright}
        </div>
      </div>
    </footer>
  )
}
