import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { defaultLocale, type Locale } from "@/lib/i18n/config"
import { getMessages } from "@/lib/i18n"

export function CompactFAQ({ locale = defaultLocale }: { locale?: Locale }) {
  const m = getMessages(locale)

  return (
    <section id="faq" className="border-t border-border px-4 py-16 lg:px-6">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-6 text-center text-2xl font-bold text-foreground">{m.home.faqTitle}</h2>
        <Accordion type="single" collapsible className="w-full">
          {m.home.faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
