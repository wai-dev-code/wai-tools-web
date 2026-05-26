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
      "绝对安全。我们的工具完全在您的浏览器中运行，数据不会上传到任何服务器。您处理的所有数据都保留在您的本地设备上。",
  },
  {
    question: "是否需要注册才能使用？",
    answer:
      "不需要。所有工具都可以直接使用，无需创建账号或登录。我们希望让您能够尽快开始工作。",
  },
  {
    question: "支持哪些浏览器？",
    answer:
      "WaiHub 支持所有现代浏览器，包括 Chrome、Firefox、Safari 和 Edge 的最新版本。我们建议使用最新版本以获得最佳体验。",
  },
  {
    question: "如何请求新功能或报告问题？",
    answer:
      "您可以通过我们的 GitHub 仓库提交 Issue 或 Feature Request。我们非常重视社区反馈，并会尽快回应。",
  },
  {
    question: "是否有 API 可供使用？",
    answer:
      "目前我们专注于提供 Web 界面工具。如果您需要 API 访问，请通过 GitHub 告诉我们您的需求。",
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
