import type { FaqItem } from "@/lib/i18n/messages/types"

export interface PasswordToolMessages {
  generate: string
  regenerate: string
  copy: string
  copyPassword: string
  length: string
  charactersUsed: string
  uppercase: string
  lowercase: string
  numbers: string
  symbols: string
  customChars: string
  customCharsPlaceholder: string
  excludeChars: string
  excludeCharsPlaceholder: string
  strength: string
  strengthWeak: string
  strengthAverage: string
  strengthStrong: string
  emptyPool: string
  notify: {
    copied: string
  }
}

export interface PasswordGeneratorPageMessages {
  metaTitle: string
  metaDescription: string
  instructions: string[]
  faq: FaqItem[]
}

export const passwordToolZh: PasswordToolMessages = {
  generate: "生成密码",
  regenerate: "重新生成",
  copy: "复制",
  copyPassword: "复制密码",
  length: "密码长度",
  charactersUsed: "字符集",
  uppercase: "大写字母 (A-Z)",
  lowercase: "小写字母 (a-z)",
  numbers: "数字 (0-9)",
  symbols: "符号 (!@#$…)",
  customChars: "自定义字符",
  customCharsPlaceholder: "追加到字符集，如 @#$",
  excludeChars: "排除字符",
  excludeCharsPlaceholder: "从字符集中排除，如 0oO1lI",
  strength: "密码强度",
  strengthWeak: "弱",
  strengthAverage: "中等",
  strengthStrong: "强",
  emptyPool: "请至少选择一种字符类型，或检查排除规则是否过于严格",
  notify: { copied: "已复制密码" },
}

export const passwordToolEn: PasswordToolMessages = {
  generate: "Generate",
  regenerate: "Regenerate",
  copy: "Copy",
  copyPassword: "Copy password",
  length: "Password length",
  charactersUsed: "Characters used",
  uppercase: "Uppercase (A-Z)",
  lowercase: "Lowercase (a-z)",
  numbers: "Numbers (0-9)",
  symbols: "Symbols (!@#$…)",
  customChars: "Custom characters",
  customCharsPlaceholder: "Add to charset, e.g. @#$",
  excludeChars: "Exclude characters",
  excludeCharsPlaceholder: "Remove from charset, e.g. 0oO1lI",
  strength: "Password strength",
  strengthWeak: "Weak",
  strengthAverage: "Average",
  strengthStrong: "Strong",
  emptyPool: "Select at least one character type, or relax exclude rules",
  notify: { copied: "Password copied" },
}

export const passwordToolJa: PasswordToolMessages = {
  generate: "生成",
  regenerate: "再生成",
  copy: "コピー",
  copyPassword: "パスワードをコピー",
  length: "パスワード長",
  charactersUsed: "使用する文字",
  uppercase: "大文字 (A-Z)",
  lowercase: "小文字 (a-z)",
  numbers: "数字 (0-9)",
  symbols: "記号 (!@#$…)",
  customChars: "カスタム文字",
  customCharsPlaceholder: "文字セットに追加、例 @#$",
  excludeChars: "除外する文字",
  excludeCharsPlaceholder: "除外、例 0oO1lI",
  strength: "パスワード強度",
  strengthWeak: "弱い",
  strengthAverage: "普通",
  strengthStrong: "強い",
  emptyPool: "文字種を1つ以上選ぶか、除外ルールを緩めてください",
  notify: { copied: "パスワードをコピーしました" },
}

export const passwordGeneratorPageZh: PasswordGeneratorPageMessages = {
  metaTitle: "密码生成器 - 免费在线工具",
  metaDescription:
    "在线生成安全随机密码，可调长度、字符集、排除字符，实时强度检测，一键复制。浏览器内运行，不上传服务器。",
  instructions: [
    "拖动滑块或输入数字设置密码长度（4–128 位）。",
    "勾选大写、小写、数字、符号，并可追加自定义字符或排除易混淆字符。",
    "强度条实时评估密码；点击「复制密码」即可使用。",
  ],
  faq: [
    {
      q: "生成的密码是否安全？",
      a: "使用浏览器 crypto.getRandomValues 生成随机密码，数据不会上传至服务器。",
    },
    {
      q: "多长的密码算强？",
      a: "建议至少 12–16 位，并混合大小写、数字与符号。本工具会实时显示弱/中/强。",
    },
    {
      q: "排除字符有什么用？",
      a: "可排除易混淆字符（如 0/O、1/l），便于手写或口头传达密码。",
    },
  ],
}

export const passwordGeneratorPageEn: PasswordGeneratorPageMessages = {
  metaTitle: "Password Generator - Free Online Tool",
  metaDescription:
    "Generate secure random passwords with custom length, charset, exclusions, strength meter, and one-click copy. Runs in your browser.",
  instructions: [
    "Set length (4–128) with the slider or number input.",
    "Choose uppercase, lowercase, numbers, symbols; add custom chars or exclude ambiguous ones.",
    "Strength updates in real time; copy with one click.",
  ],
  faq: [
    {
      q: "Are generated passwords secure?",
      a: "Passwords use crypto.getRandomValues in your browser. Nothing is sent to our servers.",
    },
    {
      q: "How long should a strong password be?",
      a: "Aim for 12–16+ characters mixing cases, numbers, and symbols. The meter shows weak/average/strong.",
    },
    {
      q: "Why exclude characters?",
      a: "Exclude ambiguous chars (e.g. 0/O, 1/l) for easier reading or sharing verbally.",
    },
  ],
}

export const passwordGeneratorPageJa: PasswordGeneratorPageMessages = {
  metaTitle: "パスワード生成 - 無料オンラインツール",
  metaDescription:
    "安全なランダムパスワードを長さ・文字種・除外文字を指定して生成。強度表示とワンクリックコピー。ブラウザ内で完結。",
  instructions: [
    "スライダーまたは数値で長さ（4〜128）を設定します。",
    "大文字・小文字・数字・記号を選択し、カスタム文字の追加や除外ができます。",
    "強度はリアルタイム表示。ワンクリックでコピーできます。",
  ],
  faq: [
    {
      q: "生成されたパスワードは安全ですか？",
      a: "ブラウザの crypto.getRandomValues を使用します。サーバーには送信されません。",
    },
    {
      q: "強いパスワードの長さは？",
      a: "12〜16文字以上で大小文字・数字・記号を混ぜることを推奨します。",
    },
    {
      q: "文字除外の用途は？",
      a: "0/O、1/l など紛らわしい文字を除き、読み書きしやすくできます。",
    },
  ],
}
