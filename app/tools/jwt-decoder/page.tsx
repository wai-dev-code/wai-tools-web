import { notFound } from "next/navigation"
import { ToolLayout } from "@/components/tool-layout"
import { JwtDecoderTool } from "@/components/tools/jwt-decoder-tool"
import { generateToolMetadata, getToolOrNotFound } from "@/lib/tool-metadata"

export const metadata = generateToolMetadata("jwt-decoder")

export default function JwtDecoderPage() {
  const tool = getToolOrNotFound("jwt-decoder")
  if (!tool) notFound()

  return (
    <ToolLayout
      toolSlug={tool.slug}
      instructions={
        <>
          <p>粘贴 JWT Token，自动解码 Header 和 Payload 为可读 JSON。Signature 部分仅展示，不做密码学验证。</p>
          <p>适用于调试 OAuth、API 鉴权等场景。请勿将生产环境的敏感 Token 粘贴到不可信网站。</p>
        </>
      }
      faq={[
        {
          question: "解码是否意味着 Token 有效？",
          answer: "否。解码只能读取内容，无法验证签名是否被篡改。验证签名需要服务端密钥。",
        },
        {
          question: "数据会上传吗？",
          answer: "不会。所有解码在浏览器内完成，Token 不会发送到任何服务器。",
        },
      ]}
    >
      <JwtDecoderTool />
    </ToolLayout>
  )
}
