import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "WaiHub 的工具是否免费使用？",
    answer:
      "是的，WaiHub 提供的所有工具都是完全免费的。我们相信开发者应该能够无障碍地访问基础开发工具。",
  },
  {
    question: "我的数据是否安全？",
    answer:
      "工具在您的浏览器内运行，输入内容通常不会上传至我们的服务器。请勿在不可信网站粘贴生产环境的密钥或 Token。",
  },
  {
    question: "是否需要注册才能使用？",
    answer: "不需要。所有工具均可直接使用，无需创建账号或登录。",
  },
  {
    question: "支持哪些浏览器？",
    answer: "支持 Chrome、Firefox、Safari、Edge 等现代浏览器的最新版本。",
  },
  {
    question: "如何请求新功能或报告问题？",
    answer: "请通过联系我们页面或发送邮件，我们会尽快回复。",
  },
  {
    question: "是否有 API 可供使用？",
    answer: "目前我们专注于提供 Web 界面工具。如有 API 需求，请通过联系我们页面告知。",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            常见问题
          </h2>
          <p className="text-muted-foreground">
            关于 WaiHub 的常见问题解答
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-border"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
