import type { Locale } from "@/lib/i18n/config"
import { getMessages } from "@/lib/i18n"

export function HomeIntroSections({ locale }: { locale: Locale }) {
  const m = getMessages(locale).home

  return (
    <div className="border-t border-border">
      <section className="px-4 py-16 lg:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-foreground">{m.whatIsTitle}</h2>
          <div className="space-y-4 text-muted-foreground">
            {m.whatIsParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/30 px-4 py-16 lg:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">{m.whyChooseTitle}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {m.whyChooseItems.map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-card/50 p-5">
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border px-4 py-16 lg:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">{m.useCasesTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {m.useCasesItems.map((item) => (
              <div key={item.title} className="rounded-lg border border-border bg-card/50 p-4">
                <h3 className="font-medium text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
