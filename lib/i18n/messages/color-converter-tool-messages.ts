import type { FaqItem } from "@/lib/i18n/messages/types"

export interface ColorConverterToolMessages {
  preview: string
  hexLabel: string
  rgbLabel: string
  hslLabel: string
  hexPlaceholder: string
  rgbPlaceholder: string
  hslPlaceholder: string
  copy: string
  invalidColor: string
  notify: {
    copied: string
  }
}

export interface ColorConverterPageMessages {
  metaTitle: string
  metaDescription: string
  instructions: string[]
  faq: FaqItem[]
}

export const colorConverterToolZh: ColorConverterToolMessages = {
  preview: "颜色预览",
  hexLabel: "HEX",
  rgbLabel: "RGB",
  hslLabel: "HSL",
  hexPlaceholder: "#3b82f6",
  rgbPlaceholder: "rgb(59, 130, 246)",
  hslPlaceholder: "hsl(217, 91%, 60%)",
  copy: "复制",
  invalidColor: "颜色格式无效",
  notify: { copied: "已复制" },
}

export const colorConverterToolEn: ColorConverterToolMessages = {
  preview: "Color preview",
  hexLabel: "HEX",
  rgbLabel: "RGB",
  hslLabel: "HSL",
  hexPlaceholder: "#3b82f6",
  rgbPlaceholder: "rgb(59, 130, 246)",
  hslPlaceholder: "hsl(217, 91%, 60%)",
  copy: "Copy",
  invalidColor: "Invalid color format",
  notify: { copied: "Copied" },
}

export const colorConverterToolJa: ColorConverterToolMessages = {
  preview: "カラープレビュー",
  hexLabel: "HEX",
  rgbLabel: "RGB",
  hslLabel: "HSL",
  hexPlaceholder: "#3b82f6",
  rgbPlaceholder: "rgb(59, 130, 246)",
  hslPlaceholder: "hsl(217, 91%, 60%)",
  copy: "コピー",
  invalidColor: "無効な色形式",
  notify: { copied: "コピーしました" },
}

export const colorConverterPageZh: ColorConverterPageMessages = {
  metaTitle: "颜色转换器 - HEX/RGB/HSL 在线互转",
  metaDescription:
    "免费在线颜色转换工具，HEX、RGB、HSL 互转并实时预览。浏览器内运行，适合前端与设计开发。",
  instructions: [
    "在 HEX、RGB 或 HSL 任一字段输入颜色值。",
    "其他格式自动同步更新，顶部显示颜色预览。",
    "点击复制按钮快速获取所需格式。",
  ],
  faq: [
    { q: "支持 3 位简写 HEX 吗？", a: "支持，如 #f00 会自动展开为 #ff0000。" },
    { q: "支持 alpha 通道吗？", a: "当前版本仅支持不透明颜色（无 alpha）。" },
    { q: "数据会上传吗？", a: "不会，转换完全在浏览器内完成。" },
  ],
}

export const colorConverterPageEn: ColorConverterPageMessages = {
  metaTitle: "Color Converter - HEX/RGB/HSL Online",
  metaDescription:
    "Free online color converter between HEX, RGB, and HSL with live preview. Browser-based — ideal for frontend and design work.",
  instructions: [
    "Enter a color value in HEX, RGB, or HSL.",
    "Other formats sync automatically with a live preview swatch.",
    "Use copy buttons to grab the format you need.",
  ],
  faq: [
    { q: "Short HEX like #f00?", a: "Yes — shorthand HEX is expanded automatically (e.g. #f00 → #ff0000)." },
    { q: "Alpha channel?", a: "Opaque colors only in this version (no alpha)." },
    { q: "Is data uploaded?", a: "No. Conversion runs entirely in your browser." },
  ],
}

export const colorConverterPageJa: ColorConverterPageMessages = {
  metaTitle: "カラー変換 - HEX/RGB/HSL オンライン",
  metaDescription:
    "HEX・RGB・HSL を相互変換する無料オンラインツール。ライブプレビュー付き。ブラウザ内完結。",
  instructions: [
    "HEX、RGB、HSL のいずれかに色を入力。",
    "他の形式は自動同期し、上部にプレビューを表示。",
    "コピーボタンで必要な形式を取得。",
  ],
  faq: [
    { q: "短縮 HEX（#f00）は？", a: "対応。自動的に展開されます（例：#f00 → #ff0000）。" },
    { q: "アルファチャンネルは？", a: "不透明色のみ（アルファなし）。" },
    { q: "データはアップロードされますか？", a: "いいえ。すべてブラウザ内で処理されます。" },
  ],
}
