import { notFound } from "next/navigation"
import { ToolLayout } from "@/components/tool-layout"
import { Base64Tool } from "@/components/tools/base64-tool"
import { generateToolMetadata, getToolOrNotFound } from "@/lib/tool-metadata"

export const metadata = generateToolMetadata("base64")

export default function Base64Page() {
  const tool = getToolOrNotFound("base64")
  if (!tool) notFound()

  return (
    <ToolLayout
      tool={tool}
      instructions={
        <>
          <p>
            采用<strong className="text-foreground">双栏布局</strong>：左侧输入原文或 Base64，右侧显示编码/解码结果。
            支持标准 Base64、URL 安全 Base64、Hex 互转、Data URI 生成与解析。
          </p>
          <p>
            「智能」按钮会自动识别输入类型：Base64 则解码，普通文本则编码；也支持 Hex 和 Data URI。
            所有处理在浏览器本地完成，支持中文等 UTF-8 字符。
          </p>
        </>
      }
      faq={[
        {
          question: "Base64 是加密吗？",
          answer: "不是。Base64 只是编码，任何人都可以解码，不能用于保护敏感信息。",
        },
        {
          question: "URL 安全 Base64 是什么？",
          answer: "将 + 和 / 替换为 - 和 _，并省略末尾 =，适合放在 URL 参数中使用。",
        },
        {
          question: "解码失败怎么办？",
          answer: "尝试点击「去空白」清除换行和空格，或确认字符串长度是 4 的倍数、字符集正确。",
        },
      ]}
    >
      <Base64Tool />
    </ToolLayout>
  )
}
