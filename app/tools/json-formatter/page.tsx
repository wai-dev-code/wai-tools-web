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
          <p>
            采用<strong className="text-foreground">双栏布局</strong>：左侧保留原数据，右侧显示格式化/压缩/转换结果，方便对比与多次操作。
          </p>
          <p>
            「转 XML / 转 JSON」合并为一个按钮，会根据左侧内容类型自动切换。支持 key 排序、树形折叠、复制、保存与同步到输入。
          </p>
        </>
      }
      faq={[
        {
          question: "格式化后中文会乱码吗？",
          answer: "不会。本工具使用 UTF-8 编码，正确处理中文及 Unicode 字符。",
        },
        {
          question: "JSON 和 XML 如何互转？",
          answer: "粘贴 JSON 后点「转 XML」；粘贴 XML 后点「转 JSON」即可。复杂 XML 结构会保留为嵌套对象。",
        },
        {
          question: "树形折叠怎么用？",
          answer: "点击「树形」进入折叠视图，可点击节点箭头或使用「折叠」「展开」按钮控制全部节点。",
        },
      ]}
    >
      <JsonFormatterTool />
    </ToolLayout>
  )
}
