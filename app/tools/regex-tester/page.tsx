import { notFound } from "next/navigation"
import { ToolLayout } from "@/components/tool-layout"
import { RegexTesterTool } from "@/components/tools/regex-tester-tool"
import { generateToolMetadata, getToolOrNotFound } from "@/lib/tool-metadata"

export const metadata = generateToolMetadata("regex-tester")

export default function RegexTesterPage() {
  const tool = getToolOrNotFound("regex-tester")
  if (!tool) notFound()

  return (
    <ToolLayout
      tool={tool}
      instructions={
        <>
          <p>输入正则表达式和测试文本，实时查看匹配结果。可勾选 g（全局）、i（忽略大小写）、m（多行）等 flags。</p>
          <p>适合调试表单校验、日志解析、数据提取等开发场景。</p>
        </>
      }
      faq={[
        {
          question: "支持哪些正则语法？",
          answer: "支持 JavaScript 标准正则语法（ECMAScript），与浏览器和 Node.js 环境一致。",
        },
      ]}
    >
      <RegexTesterTool />
    </ToolLayout>
  )
}
