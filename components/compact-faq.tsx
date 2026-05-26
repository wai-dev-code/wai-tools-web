import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { siteConfig } from "@/lib/tools-data"

const faqs = [
  {
    question: "WaiHub 的工具是否免费？",
    answer: "是的，所有工具完全免费，无需注册，无隐藏费用。",
  },
  {
    question: "我的数据是否安全？",
    answer: "绝对安全。工具在浏览器本地运行，您输入的数据不会上传到服务器。",
  },
  {
    question: "支持哪些浏览器？",
    answer: "支持 Chrome、Firefox、Safari、Edge 等现代浏览器的最新版本。",
  },
  {
    question: "如何反馈问题或建议新工具？",
    answer: `请通过联系我们页面或发送邮件至 ${siteConfig.contactEmail}，我们会尽快回复。`,
  },
]

export function CompactFAQ() {
  return (
    <section id="faq" className="border-t border-border px-4 py-16 lg:px-6">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-6 text-center text-2xl font-bold text-foreground">常见问题</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
