import type { FaqItem } from "@/lib/i18n/messages/types"

export interface UuidToolMessages {
  primaryLabel: string
  example: string
  regenerate: string
  copy: string
  batchTitle: string
  count: string
  generate: string
  uppercase: string
  noHyphens: string
  braces: string
  autoCopy: string
  separator: string
  sepNewline: string
  sepComma: string
  copyAll: string
  download: string
  notify: {
    copiedOne: string
    copiedAll: string
    copiedUnit: string
    downloaded: string
  }
  examples: Record<string, { label: string; description: string }>
}

export interface UuidGeneratorPageMessages {
  metaTitle: string
  metaDescription: string
  instructions: string[]
  faq: FaqItem[]
}

export const uuidToolZh: UuidToolMessages = {
  primaryLabel: "UUID v4",
  example: "示例",
  regenerate: "换一个",
  copy: "复制",
  batchTitle: "批量生成",
  count: "数量",
  generate: "生成",
  uppercase: "大写",
  noHyphens: "无连字符",
  braces: "花括号 {}",
  autoCopy: "自动复制",
  separator: "分隔",
  sepNewline: "换行",
  sepComma: "逗号",
  copyAll: "复制全部",
  download: "下载",
  notify: {
    copiedOne: "已复制 UUID",
    copiedAll: "已复制 {n} 个 UUID",
    copiedUnit: "已复制{unit}时间戳",
    downloaded: "已下载 {n} 个 UUID",
  },
  examples: {
    "batch-5": { label: "生成 5 个", description: "批量 UUID v4" },
    "batch-20": { label: "生成 20 个", description: "较多数量" },
  },
}

export const uuidToolEn: UuidToolMessages = {
  primaryLabel: "UUID v4",
  example: "Example",
  regenerate: "New one",
  copy: "Copy",
  batchTitle: "Batch generate",
  count: "Count",
  generate: "Generate",
  uppercase: "Uppercase",
  noHyphens: "No hyphens",
  braces: "Braces {}",
  autoCopy: "Auto copy",
  separator: "Separator",
  sepNewline: "Newline",
  sepComma: "Comma",
  copyAll: "Copy all",
  download: "Download",
  notify: {
    copiedOne: "UUID copied",
    copiedAll: "Copied {n} UUIDs",
    copiedUnit: "Copied {unit} timestamp",
    downloaded: "Downloaded {n} UUIDs",
  },
  examples: {
    "batch-5": { label: "Generate 5", description: "Batch UUID v4" },
    "batch-20": { label: "Generate 20", description: "Larger batch" },
  },
}

export const uuidToolJa: UuidToolMessages = {
  primaryLabel: "UUID v4",
  example: "サンプル",
  regenerate: "別の UUID",
  copy: "コピー",
  batchTitle: "一括生成",
  count: "数量",
  generate: "生成",
  uppercase: "大文字",
  noHyphens: "ハイフンなし",
  braces: "波括弧 {}",
  autoCopy: "自動コピー",
  separator: "区切り",
  sepNewline: "改行",
  sepComma: "カンマ",
  copyAll: "すべてコピー",
  download: "ダウンロード",
  notify: {
    copiedOne: "UUID をコピーしました",
    copiedAll: "{n} 件の UUID をコピーしました",
    copiedUnit: "{unit} タイムスタンプをコピーしました",
    downloaded: "{n} 件の UUID をダウンロードしました",
  },
  examples: {
    "batch-5": { label: "5 件生成", description: "UUID v4 一括" },
    "batch-20": { label: "20 件生成", description: "多めの数量" },
  },
}

export const uuidGeneratorPageZh: UuidGeneratorPageMessages = {
  metaTitle: "UUID 生成器 - 免费在线工具",
  metaDescription: "批量生成 UUID v4，支持大写、无连字符、花括号格式，复制与下载。",
  instructions: [
    "顶部为独立的单个 UUID v4，仅「换一个」会更新；下方批量生成互不影响。",
    "格式选项：大写、无连字符、花括号；可复制全部或下载为 .txt，分隔符支持换行或逗号。",
  ],
  faq: [
    { q: "UUID v4 会重复吗？", a: "理论上存在碰撞可能，但概率极低。本工具使用浏览器 crypto.randomUUID() 生成。" },
    { q: "无连字符与花括号格式有什么用？", a: "无连字符为 32 位十六进制；花括号 {uuid} 常见于 .NET / COM GUID 写法。" },
    { q: "逗号分隔适合什么场景？", a: "便于粘贴到 SQL IN 子句、配置文件或脚本数组中。" },
  ],
}

export const uuidGeneratorPageEn: UuidGeneratorPageMessages = {
  metaTitle: "UUID Generator - Free Online Tool",
  metaDescription: "Generate UUID v4 in bulk. Uppercase, no hyphens, braces, copy and download.",
  instructions: [
    "Top shows a single UUID v4 — only Regenerate updates it. Batch generation below is independent.",
    "Format: uppercase, no hyphens, braces. Copy all or download .txt with newline or comma separator.",
  ],
  faq: [
    { q: "Can UUID v4 collide?", a: "Theoretically yes, but probability is negligible. Uses crypto.randomUUID()." },
    { q: "No hyphens and braces?", a: "No hyphens = 32 hex chars; braces {uuid} common in .NET/COM." },
    { q: "When use comma separator?", a: "For SQL IN clauses, config files, or script arrays." },
  ],
}

export const uuidGeneratorPageJa: UuidGeneratorPageMessages = {
  metaTitle: "UUID ジェネレーター - 無料オンラインツール",
  metaDescription: "UUID v4 を一括生成。大文字、ハイフンなし、波括弧、コピーとダウンロード。",
  instructions: [
    "上部は単一 UUID v4 — 「別の UUID」のみ更新。下部の一括生成とは独立しています。",
    "形式：大文字、ハイフンなし、波括弧。すべてコピーまたは .txt ダウンロード（改行/カンマ）。",
  ],
  faq: [
    { q: "UUID v4 は重複しますか？", a: "理論上は可能ですが確率は極めて低いです。crypto.randomUUID() を使用。" },
    { q: "ハイフンなしと波括弧？", a: "ハイフンなし=32桁16進数。波括弧 {uuid} は .NET/COM で一般的。" },
    { q: "カンマ区切りの用途？", a: "SQL IN 句、設定ファイル、スクリプト配列への貼り付けに便利。" },
  ],
}
