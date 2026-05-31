import { notFound } from "next/navigation"
import { ToolLayout } from "@/components/tool-layout"
import { JsonFormatterTool } from "@/components/tools/json-formatter-tool"
import {
  generateJsonToolMetadata,
  getJsonToolPage,
  type JsonToolFocus,
} from "@/lib/json-tool-pages"
import { getToolOrNotFound } from "@/lib/tool-metadata"

const FOCUS_INSTRUCTIONS: Record<JsonToolFocus, string> = {
  format: "粘贴 JSON 后点击「格式化」，右侧显示美化结果。支持树形视图、语法高亮与自动换行。",
  validate: "粘贴 JSON 后自动校验；无效时显示行号、列号并高亮错误位置。",
  minify: "粘贴 JSON 后点击「压缩」，查看 Minified Size 与节省比例。",
  sort: "点击「排序」在升序/降序间切换，递归排列所有对象 key。",
  "to-xml": "粘贴 JSON 点「转 XML」；粘贴 XML 点「转 JSON」。",
}

export function createJsonToolPage(slug: string) {
  const pageConfig = getJsonToolPage(slug)
  const tool = getToolOrNotFound("json-formatter")
  if (!pageConfig || !tool) notFound()

  const metadata = generateJsonToolMetadata(pageConfig)

  function Page() {
    return (
      <ToolLayout
        toolSlug={tool.slug}
        instructions={
          <>
            <p>{pageConfig.description}</p>
            <p>{FOCUS_INSTRUCTIONS[pageConfig.focus]}</p>
          </>
        }
      >
        <JsonFormatterTool focus={pageConfig.focus} />
      </ToolLayout>
    )
  }

  return { metadata, Page }
}
