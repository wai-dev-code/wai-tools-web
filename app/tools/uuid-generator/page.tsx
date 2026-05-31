import { notFound } from "next/navigation"
import { ToolLayout } from "@/components/tool-layout"
import { UuidGeneratorTool } from "@/components/tools/uuid-generator-tool"
import { generateToolMetadata, getToolOrNotFound } from "@/lib/tool-metadata"

export const metadata = generateToolMetadata("uuid-generator")

export default function UuidGeneratorPage() {
  const tool = getToolOrNotFound("uuid-generator")
  if (!tool) notFound()

  return (
    <ToolLayout
      toolSlug={tool.slug}
      instructions={
        <>
          <p>设置生成数量（1-100），点击「生成 UUID v4」即可批量创建随机唯一标识符。</p>
          <p>UUID v4 基于随机数生成，适用于数据库主键、会话 ID、分布式系统标识等场景。</p>
        </>
      }
      faq={[
        {
          question: "UUID v4 会重复吗？",
          answer: "理论上存在碰撞可能，但概率极低（约 1/5.3×10³⁶），实际使用中可视为唯一。",
        },
      ]}
    >
      <UuidGeneratorTool />
    </ToolLayout>
  )
}
