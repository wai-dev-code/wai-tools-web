import { notFound } from "next/navigation"
import { ToolLayout } from "@/components/tool-layout"
import { Base64Tool } from "@/components/tools/base64-tool"
import {
  generateBase64ToolMetadata,
  getBase64ToolPage,
  type Base64Module,
} from "@/lib/base64-tool-pages"
import { getToolOrNotFound } from "@/lib/tool-metadata"

const MODULE_INSTRUCTIONS: Record<Base64Module, string> = {
  core: "左侧输入源数据，右侧显示编码/解码结果。支持标准 Base64、URL 安全 Base64 与智能识别。",
  file: "上传文件或粘贴 Base64/Data URI，左侧输入后右侧实时输出并识别文件类型，支持图片预览与下载。",
  convert: "选择转换方向后，左侧输入、右侧实时显示结果。支持文本/Data URI/Hex/Base64 互转。",
  utils: "校验 Base64 有效性、去除空白字符，查看字节统计与输入类型检测。",
}

export function createBase64ToolPage(slug: string) {
  const pageConfig = getBase64ToolPage(slug)
  const tool = getToolOrNotFound("base64")
  if (!pageConfig || !tool) notFound()

  const metadata = generateBase64ToolMetadata(pageConfig)

  function Page() {
    return (
      <ToolLayout
        tool={tool}
        instructions={
          <>
            <p>{pageConfig.description}</p>
            <p>{MODULE_INSTRUCTIONS[pageConfig.module]}</p>
          </>
        }
      >
        <Base64Tool module={pageConfig.module} />
      </ToolLayout>
    )
  }

  return { metadata, Page }
}
