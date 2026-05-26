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
          <p>「编码」将普通文本转为 Base64 字符串；「解码」将 Base64 还原为原文。支持中文等 UTF-8 字符。</p>
          <p>Base64 常用于在 URL、JSON 或邮件中安全传输二进制或文本数据。</p>
        </>
      }
      faq={[
        {
          question: "Base64 是加密吗？",
          answer: "不是。Base64 只是一种编码方式，任何人都可以解码，不能用于保护敏感信息。",
        },
      ]}
    >
      <Base64Tool />
    </ToolLayout>
  )
}
