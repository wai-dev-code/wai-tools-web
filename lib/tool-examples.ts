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
}

export interface JwtDecoderExample {
  token: string
}

export interface RegexTesterExample {
  pattern: string
  flags: { g: boolean; i: boolean; m: boolean }
  text: string
}

export interface TimestampExample {
  timestamp: string
  datetime: string
  unit: "s" | "ms"
}

export interface UuidGeneratorExample {
  count: number
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
]

export const regexTesterExamples: ToolExampleItem<RegexTesterExample>[] = [
  {
    id: "numbers",
    label: "提取数字",
    description: "全局匹配 \\d+",
    data: {
      pattern: "\\d+",
      flags: { g: true, i: false, m: false },
      text: "Order 123, price 45.67, id 9999",
    },
  },
  {
    id: "email",
    label: "邮箱匹配",
    description: "常见邮箱正则",
    data: {
      pattern: "[\\w.-]+@[\\w.-]+\\.\\w+",
      flags: { g: true, i: true, m: false },
      text: "Contact: alice@example.com or BOB@Company.ORG",
    },
  },
]

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
