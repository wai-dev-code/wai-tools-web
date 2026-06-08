import type { FaqItem } from "@/lib/i18n/messages/types"

export interface HashToolMessages {
  inputLabel: string
  inputPlaceholder: string
  resultsTitle: string
  emptyInput: string
  copy: string
  copyAll: string
  algorithmMd5: string
  algorithmSha1: string
  algorithmSha256: string
  algorithmSha512: string
  notify: {
    copied: string
    copiedAll: string
  }
}

export interface HashGeneratorPageMessages {
  metaTitle: string
  metaDescription: string
  instructions: string[]
  faq: FaqItem[]
}

export const hashToolZh: HashToolMessages = {
  inputLabel: "输入文本",
  inputPlaceholder: "输入要计算哈希的文本…",
  resultsTitle: "哈希结果",
  emptyInput: "输入文本后将同时显示 MD5、SHA-1、SHA-256、SHA-512",
  copy: "复制",
  copyAll: "复制全部",
  algorithmMd5: "MD5",
  algorithmSha1: "SHA-1",
  algorithmSha256: "SHA-256",
  algorithmSha512: "SHA-512",
  notify: {
    copied: "已复制 {algo} 哈希",
    copiedAll: "已复制全部哈希",
  },
}

export const hashToolEn: HashToolMessages = {
  inputLabel: "Input text",
  inputPlaceholder: "Enter text to hash…",
  resultsTitle: "Hash results",
  emptyInput: "Enter text to see MD5, SHA-1, SHA-256, and SHA-512 at once",
  copy: "Copy",
  copyAll: "Copy all",
  algorithmMd5: "MD5",
  algorithmSha1: "SHA-1",
  algorithmSha256: "SHA-256",
  algorithmSha512: "SHA-512",
  notify: {
    copied: "Copied {algo} hash",
    copiedAll: "Copied all hashes",
  },
}

export const hashToolJa: HashToolMessages = {
  inputLabel: "入力テキスト",
  inputPlaceholder: "ハッシュ化するテキストを入力…",
  resultsTitle: "ハッシュ結果",
  emptyInput: "テキストを入力すると MD5、SHA-1、SHA-256、SHA-512 を同時に表示",
  copy: "コピー",
  copyAll: "すべてコピー",
  algorithmMd5: "MD5",
  algorithmSha1: "SHA-1",
  algorithmSha256: "SHA-256",
  algorithmSha512: "SHA-512",
  notify: {
    copied: "{algo} ハッシュをコピーしました",
    copiedAll: "すべてのハッシュをコピーしました",
  },
}

export const hashGeneratorPageZh: HashGeneratorPageMessages = {
  metaTitle: "哈希生成器 - MD5 / SHA 在线工具",
  metaDescription:
    "在线计算 MD5、SHA-1、SHA-256、SHA-512 哈希值，多算法结果同时展示，一键复制。浏览器内运行，不上传数据。",
  instructions: [
    "在输入框粘贴或输入任意文本，四种哈希值实时同步计算。",
    "每条结果可单独复制，也可一键复制全部。",
    "适用于校验文件指纹、API 签名调试等场景（请勿用于密码存储）。",
  ],
  faq: [
    {
      q: "数据会上传服务器吗？",
      a: "不会。哈希计算完全在您的浏览器内完成。",
    },
    {
      q: "MD5 还安全吗？",
      a: "MD5 已不推荐用于安全场景（如密码、签名防篡改），但仍常用于非安全校验与兼容场景。",
    },
    {
      q: "支持文件哈希吗？",
      a: "当前版本仅支持文本输入；文件哈希可作为后续扩展。",
    },
  ],
}

export const hashGeneratorPageEn: HashGeneratorPageMessages = {
  metaTitle: "Hash Generator - MD5 / SHA Online Tool",
  metaDescription:
    "Compute MD5, SHA-1, SHA-256, and SHA-512 hashes at once. Copy individually or all together. Runs in your browser.",
  instructions: [
    "Type or paste text — all four hashes update in real time.",
    "Copy each hash separately or copy all at once.",
    "Useful for checksums and API debugging (not for password storage).",
  ],
  faq: [
    {
      q: "Is my data sent to a server?",
      a: "No. Hashing runs entirely in your browser.",
    },
    {
      q: "Is MD5 still secure?",
      a: "MD5 is not recommended for security use cases, but remains common for non-cryptographic checksums.",
    },
    {
      q: "Can I hash files?",
      a: "This version supports text only; file hashing may be added later.",
    },
  ],
}

export const hashGeneratorPageJa: HashGeneratorPageMessages = {
  metaTitle: "ハッシュ生成 - MD5 / SHA オンラインツール",
  metaDescription:
    "MD5、SHA-1、SHA-256、SHA-512 を同時に計算。個別または一括コピー。ブラウザ内で完結。",
  instructions: [
    "テキストを入力すると 4 種類のハッシュがリアルタイムで更新されます。",
    "各ハッシュを個別にコピーするか、一括コピーできます。",
    "チェックサムや API デバッグに利用できます（パスワード保存には非推奨）。",
  ],
  faq: [
    {
      q: "データはサーバーに送信されますか？",
      a: "いいえ。ハッシュ計算はブラウザ内で行われます。",
    },
    {
      q: "MD5 はまだ安全ですか？",
      a: "セキュリティ用途には非推奨ですが、チェックサムなどでは依然として使われます。",
    },
    {
      q: "ファイルのハッシュはできますか？",
      a: "現在はテキストのみ対応です。",
    },
  ],
}
