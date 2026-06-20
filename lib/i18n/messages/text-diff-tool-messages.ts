import type { FaqItem } from "@/lib/i18n/messages/types"

export interface TextDiffToolMessages {
  leftLabel: string
  rightLabel: string
  leftPlaceholder: string
  rightPlaceholder: string
  clear: string
  statsAdded: string
  statsRemoved: string
  statsChanged: string
  statsEqual: string
  emptyHint: string
  legendAdded: string
  legendRemoved: string
  legendChanged: string
  legendEqual: string
}

export interface TextDiffPageMessages {
  metaTitle: string
  metaDescription: string
  instructions: string[]
  faq: FaqItem[]
}

export const textDiffToolZh: TextDiffToolMessages = {
  leftLabel: "原始文本",
  rightLabel: "对比文本",
  leftPlaceholder: "粘贴原始文本…",
  rightPlaceholder: "粘贴对比文本…",
  clear: "清空",
  statsAdded: "新增 {count} 行",
  statsRemoved: "删除 {count} 行",
  statsChanged: "修改 {count} 行",
  statsEqual: "相同 {count} 行",
  emptyHint: "在两侧输入文本以查看逐行差异",
  legendAdded: "新增",
  legendRemoved: "删除",
  legendChanged: "修改",
  legendEqual: "相同",
}

export const textDiffToolEn: TextDiffToolMessages = {
  leftLabel: "Original text",
  rightLabel: "Compare text",
  leftPlaceholder: "Paste original text…",
  rightPlaceholder: "Paste text to compare…",
  clear: "Clear",
  statsAdded: "{count} added",
  statsRemoved: "{count} removed",
  statsChanged: "{count} changed",
  statsEqual: "{count} equal",
  emptyHint: "Enter text on both sides to see line-by-line diff",
  legendAdded: "Added",
  legendRemoved: "Removed",
  legendChanged: "Changed",
  legendEqual: "Equal",
}

export const textDiffToolJa: TextDiffToolMessages = {
  leftLabel: "元のテキスト",
  rightLabel: "比較テキスト",
  leftPlaceholder: "元のテキストを貼り付け…",
  rightPlaceholder: "比較するテキストを貼り付け…",
  clear: "クリア",
  statsAdded: "追加 {count} 行",
  statsRemoved: "削除 {count} 行",
  statsChanged: "変更 {count} 行",
  statsEqual: "同一 {count} 行",
  emptyHint: "両側にテキストを入力すると行単位の差分を表示",
  legendAdded: "追加",
  legendRemoved: "削除",
  legendChanged: "変更",
  legendEqual: "同一",
}

export const textDiffPageZh: TextDiffPageMessages = {
  metaTitle: "文本对比 - 在线逐行 Diff",
  metaDescription:
    "免费在线文本对比工具，逐行高亮新增、删除与修改。适用于代码、配置与文档 diff，浏览器内运行。",
  instructions: [
    "在左右两侧分别粘贴原始文本与对比文本。",
    "差异区域以颜色高亮：绿色新增、红色删除、黄色修改。",
    "顶部统计栏显示各类差异行数。",
  ],
  faq: [
    { q: "支持单词级 diff 吗？", a: "当前为逐行对比，适合代码与配置文件。" },
    { q: "数据会上传吗？", a: "不会，对比完全在浏览器内完成。" },
    { q: "空行如何处理？", a: "空行作为独立行参与对比。" },
  ],
}

export const textDiffPageEn: TextDiffPageMessages = {
  metaTitle: "Text Diff - Free Line-by-Line Compare",
  metaDescription:
    "Free online text diff viewer with line-by-line highlighting for additions, removals, and changes. Browser-based, no upload.",
  instructions: [
    "Paste original text on the left and comparison text on the right.",
    "Differences are color-coded: green added, red removed, yellow changed.",
    "Stats bar shows counts for each diff type.",
  ],
  faq: [
    { q: "Word-level diff?", a: "This tool compares line by line — ideal for code and config files." },
    { q: "Is data uploaded?", a: "No. Diffing runs entirely in your browser." },
    { q: "How are blank lines handled?", a: "Blank lines are treated as individual lines in the comparison." },
  ],
}

export const textDiffPageJa: TextDiffPageMessages = {
  metaTitle: "テキスト差分 - 行単位オンライン比較",
  metaDescription:
    "無料のオンラインテキスト差分ビューア。追加・削除・変更を行単位でハイライト。ブラウザ内完結。",
  instructions: [
    "左に元テキスト、右に比較テキストを貼り付け。",
    "差分は色分け：追加は緑、削除は赤、変更は黄。",
    "上部の統計で各タイプの行数を確認。",
  ],
  faq: [
    { q: "単語単位の差分は？", a: "行単位の比較です。コードや設定ファイルに最適。" },
    { q: "データはアップロードされますか？", a: "いいえ。すべてブラウザ内で処理されます。" },
    { q: "空行はどう扱われますか？", a: "空行も独立した行として比較されます。" },
  ],
}
