import type { ConvertMode } from "@/lib/base64-utils"

export interface ToolExampleItem<T> {
  id: string
  label: string
  description?: string
  data: T
}

export interface JsonFormatterExample {
  input: string
}

export interface Base64Example {
  input: string
  urlSafe?: boolean
  convertMode?: ConvertMode
}

export interface JwtDecoderExample {
  token: string
}

export type { RegexTesterExample } from "@/lib/regex-pattern-library"

export interface TimestampExample {
  timestamp: string
  datetime: string
  unit: "s" | "ms"
}

export interface UuidGeneratorExample {
  count: number
}

export interface UrlEncoderExample {
  input: string
  mode: import("@/lib/url-utils").UrlEncodeMode
}

export const jsonFormatterExamples: ToolExampleItem<JsonFormatterExample>[] = [
  {
    id: "basic",
    label: "基础 JSON",
    description: "嵌套对象与数组",
    data: {
      input: `{
  "name": "WaiHub",
  "version": 1,
  "user": {
    "name": "Tom",
    "role": "admin"
  },
  "features": ["format", "compress", "yaml"]
}`,
    },
  },
  {
    id: "array-root",
    label: "数组根节点",
    description: "顶层为数组，路径如 [0].name",
    data: {
      input: `[
  { "name": "Tom", "role": "admin" },
  { "name": "Jerry", "role": "user" }
]`,
    },
  },
  {
    id: "invalid",
    label: "无效 JSON",
    description: "演示错误行号定位",
    data: {
      input: `{
  "name": "test",
  "items": [1, 2,]
}`,
    },
  },
  {
    id: "yaml",
    label: "YAML 示例",
    description: "YAML 转 JSON",
    data: {
      input: `name: WaiHub
version: 1
user:
  name: Tom
  role: admin
features:
  - format
  - compress`,
    },
  },
  {
    id: "escape",
    label: "Escape 示例",
    description: "含换行与引号的 JSON",
    data: {
      input: `{
  "name": "Tom",
  "message": "He said \\"hello\\""
}`,
    },
  },
]

export const base64Examples: ToolExampleItem<Base64Example>[] = [
  {
    id: "text-utf8",
    label: "UTF-8 文本",
    description: "中英文编码",
    data: { input: "Hello, WaiHub! 你好" },
  },
  {
    id: "base64-decode",
    label: "Base64 解码",
    description: "已有 Base64 字符串",
    data: { input: "SGVsbG8sIFdhaUh1YiEg5L2g5aW9" },
  },
  {
    id: "url-safe",
    label: "URL 安全 Base64",
    description: "JWT 风格编码",
    data: {
      input: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
      urlSafe: true,
    },
  },
]

export const base64ConvertExamples: ToolExampleItem<Base64Example>[] = [
  {
    id: "text-to-datauri",
    label: "文本 → Data URI",
    description: "嵌入 HTML/CSS",
    data: { input: "Hello, WaiHub!", convertMode: "text-to-datauri" },
  },
  {
    id: "hex-to-text",
    label: "Hex → 文本",
    description: "48656c6c6f = Hello",
    data: { input: "48656c6c6f", convertMode: "hex-to-text" },
  },
  {
    id: "base64-to-hex",
    label: "Base64 → Hex",
    description: "查看字节 Hex",
    data: { input: "SGVsbG8=", convertMode: "base64-to-hex" },
  },
]

export const base64FileExamples: ToolExampleItem<Base64Example>[] = [
  {
    id: "file-text",
    label: "文本文件",
    description: "编码为 Base64",
    data: { input: "Hello, WaiHub!" },
  },
  {
    id: "file-image",
    label: "PNG 图片",
    description: "1×1 像素预览",
    data: {
      input: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==",
    },
  },
  {
    id: "file-datauri",
    label: "Data URI",
    description: "提取 Base64",
    data: {
      input: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==",
    },
  },
]

export const jwtDecoderExamples: ToolExampleItem<JwtDecoderExample>[] = [
  {
    id: "standard",
    label: "标准 JWT",
    description: "Header + Payload 解码",
    data: {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    },
  },
  {
    id: "with-exp",
    label: "含 exp 声明",
    description: "过期时间与签发时间",
    data: {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyXzEiLCJuYW1lIjoiVGVzdCIsImlhdCI6MTcwMDAwMDAwMCwiZXhwIjoxOTAwMDAwMDAwfQ.x",
    },
  },
]

export { regexPatternLibrary as regexTesterExamples } from "@/lib/regex-pattern-library"

export const timestampExamples: ToolExampleItem<TimestampExample>[] = [
  {
    id: "epoch-seconds",
    label: "Unix 秒",
    description: "2018-01-01 00:00:00 UTC",
    data: {
      timestamp: "1514764800",
      datetime: "2018-01-01 00:00:00",
      unit: "s",
    },
  },
  {
    id: "epoch-ms",
    label: "Unix 毫秒",
    description: "毫秒级时间戳",
    data: {
      timestamp: "1704067200000",
      datetime: "2024-01-01 00:00:00",
      unit: "ms",
    },
  },
]

export const uuidGeneratorExamples: ToolExampleItem<UuidGeneratorExample>[] = [
  {
    id: "batch-5",
    label: "生成 5 个",
    description: "批量 UUID v4",
    data: { count: 5 },
  },
  {
    id: "batch-20",
    label: "生成 20 个",
    description: "较多数量",
    data: { count: 20 },
  },
]

export const urlEncoderExamples: ToolExampleItem<UrlEncoderExample>[] = [
  {
    id: "component-encode",
    label: "参数编码",
    description: "encodeURIComponent",
    data: { input: "Hello 世界?name=Tom&age=20", mode: "component-encode" },
  },
  {
    id: "component-decode",
    label: "参数解码",
    description: "decodeURIComponent",
    data: { input: "Hello%20World%3Fname%3DTom", mode: "component-decode" },
  },
  {
    id: "uri-encode",
    label: "完整 URL 编码",
    description: "encodeURI",
    data: { input: "https://example.com/search?q=你好&lang=zh", mode: "uri-encode" },
  },
  {
    id: "query-parse",
    label: "Query 解析",
    description: "转为 JSON",
    data: { input: "name=John+Doe&role=admin&tags=js&tags=ts", mode: "query-parse" },
  },
  {
    id: "query-build",
    label: "Query 构建",
    description: "JSON 转 Query",
    data: {
      input: '{\n  "q": "hello world",\n  "page": "1",\n  "lang": "zh"\n}',
      mode: "query-build",
    },
  },
]
