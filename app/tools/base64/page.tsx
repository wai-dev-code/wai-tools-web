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
            采用<strong className="text-foreground">四模块 + 双栏布局</strong>：编解码、文件工具、格式转换、实用工具。
            左侧为可编辑源数据，右侧为只读结果，互不污染。
          </p>
          <p>
            支持智能识别 Base64 / Hex / Data URI、文件上传与下载、图片预览、URL 安全 Base64。
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
          question: "如何预览 Base64 图片？",
          answer: "在「文件」模块上传图片或粘贴图片 Base64，工具会自动识别并显示预览。",
        },
        {
          question: "解码失败怎么办？",
          answer: "在「实用工具」模块点击「去空白」清除换行和空格，或使用「校验」检查格式。",
        },
      ]}
    >
      <Base64Tool />
    </ToolLayout>
  )
}
