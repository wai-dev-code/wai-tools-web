import { notFound } from "next/navigation"
import { ToolLayout } from "@/components/tool-layout"
import { JsonFormatterTool } from "@/components/tools/json-formatter-tool"
import { generateToolMetadata, getToolOrNotFound } from "@/lib/tool-metadata"

export const metadata = generateToolMetadata("json-formatter")

export default function JsonFormatterPage() {
  const tool = getToolOrNotFound("json-formatter")
  if (!tool) notFound()

  return (
    <ToolLayout
      tool={tool}
      instructions={
        <>
          <p>在输入框中粘贴 JSON 字符串，点击「格式化」即可美化输出；「压缩」可去除多余空格以减小体积；「验证」可检查 JSON 是否合法。</p>
          <p>所有处理均在浏览器本地完成，数据不会上传到服务器，适合处理 API 响应、配置文件等敏感数据。</p>
        </>
      }
      faq={[
        {
          question: "格式化后中文会乱码吗？",
          answer: "不会。本工具使用 UTF-8 编码，正确处理中文及 Unicode 字符。",
        },
        {
          question: "支持多大的 JSON 文件？",
          answer: "取决于浏览器内存，一般几 MB 以内的 JSON 均可流畅处理。",
        },
      ]}
    >
      <JsonFormatterTool />
    </ToolLayout>
  )
}
