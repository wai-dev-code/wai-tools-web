import { notFound } from "next/navigation"
import { ToolLayout } from "@/components/tool-layout"
import { TimestampTool } from "@/components/tools/timestamp-tool"
import { generateToolMetadata, getToolOrNotFound } from "@/lib/tool-metadata"

export const metadata = generateToolMetadata("timestamp")

export default function TimestampPage() {
  const tool = getToolOrNotFound("timestamp")
  if (!tool) notFound()

  return (
    <ToolLayout
      tool={tool}
      instructions={
        <>
          <p>选择时间戳单位（秒或毫秒），输入 Unix 时间戳可转换为可读日期；输入日期可转换为时间戳。</p>
          <p>点击「当前时间」可快速获取此刻的时间戳与日期，方便调试日志和 API 接口。</p>
        </>
      }
      faq={[
        {
          question: "秒和毫秒有什么区别？",
          answer: "Unix 时间戳通常以秒为单位（10 位数字），JavaScript 等环境常用毫秒（13 位数字）。注意区分以免转换错误。",
        },
      ]}
    >
      <TimestampTool />
    </ToolLayout>
  )
}
