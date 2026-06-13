import type { ToolPageSeoContent } from "@/lib/i18n/messages/tool-page-content-types"

const en: ToolPageSeoContent = {
  whatIs: {
    title: "What is UUID Generator?",
    paragraphs: [
      "UUID Generator is an online tool that creates Universally Unique Identifiers (UUIDs) for use as database primary keys, session IDs, API tokens, and distributed system trace identifiers. UUID v4 uses random numbers, making collisions statistically negligible even across billions of generated values.",
      "Unlike sequential IDs, UUIDs can be generated independently on any machine without coordination. This makes them ideal for microservices, offline-first apps, and test data generation. Developers need UUIDs when creating mock data, setting up database schemas, or debugging distributed tracing systems.",
      "WaiHub's UUID Generator creates UUID v4 values in your browser using crypto.getRandomValues for cryptographically strong randomness. Generate a single UUID or batch hundreds with uppercase, braceless, or braced format options. Copy individually or download as a text file — all without server upload.",
    ],
    benefits: [
      "Cryptographically random UUID v4",
      "Batch generation up to hundreds",
      "Uppercase, no-hyphens, and braced formats",
      "Copy single or download batch as .txt",
      "No coordination needed across systems",
      "Privacy-first browser generation",
    ],
  },
  features: {
    title: "Features",
    items: [
      "Generate UUID v4 instantly",
      "Batch mode for multiple UUIDs",
      "Uppercase format option",
      "Remove hyphens option",
      "Add curly braces {uuid} format",
      "Copy single UUID with one click",
      "Copy all or download as .txt",
      "Uses crypto.getRandomValues",
      "Independent single and batch generators",
      "Works locally in browser",
    ],
  },
  howToUse: {
    title: "How To Use",
    steps: [
      { title: "Generate a single UUID", description: "Click the generate button at the top to create one UUID v4. Copy it directly for immediate use." },
      { title: "Set batch options", description: "Choose how many UUIDs to generate, and toggle uppercase, no-hyphens, or braced format as needed." },
      { title: "Generate batch", description: "Click Generate to create the full batch. Each UUID is independently random and collision-resistant." },
      { title: "Copy or download", description: "Copy all UUIDs to clipboard or download as a .txt file for import into databases or test scripts." },
    ],
  },
  examples: {
    title: "Examples",
    inputLabel: "Format",
    outputLabel: "Generated UUID",
    items: [
      { label: "Standard v4", input: "uuid-v4", output: "f47ac10b-58cc-4372-a567-0e02b2c3d479" },
      { label: "Uppercase", input: "uppercase", output: "F47AC10B-58CC-4372-A567-0E02B2C3D479" },
    ],
  },
  faq: [
    { q: "Is this UUID generator free?", a: "Yes. Completely free with no signup or limits." },
    { q: "Is my data uploaded?", a: "No. UUIDs are generated locally using your browser's crypto API." },
    { q: "What is UUID v4?", a: "Version 4 UUIDs use random numbers. 122 bits of randomness make collisions extremely unlikely." },
    { q: "Can I generate multiple UUIDs?", a: "Yes. Batch mode generates many UUIDs at once with copy-all or .txt download." },
    { q: "Can I use it commercially?", a: "Yes. Free for personal and commercial use." },
    { q: "Are these UUIDs truly random?", a: "Yes. Generated via crypto.getRandomValues, the same API used for secure key generation." },
  ],
  relatedToolSlugs: ["hash-generator", "password-generator", "json-formatter", "jwt-decoder", "timestamp"],
}

const zh: ToolPageSeoContent = {
  whatIs: {
    title: "什么是 UUID 生成器？",
    paragraphs: [
      "UUID 生成器创建通用唯一标识符（UUID），用作数据库主键、会话 ID、API Token 和分布式系统追踪标识。UUID v4 使用随机数，即使生成数十亿个值，碰撞概率也微乎其微。",
      "与顺序 ID 不同，UUID 可在任何机器上独立生成，无需协调。非常适合微服务、离线优先应用和测试数据生成。开发者在创建模拟数据、设置数据库模式或调试分布式追踪时需要 UUID。",
      "WaiHub UUID 生成器使用 crypto.getRandomValues 在浏览器中生成密码学强度的 UUID v4。可生成单个或批量数百个，支持大写、无连字符、花括号格式，单独复制或下载 .txt 文件，不上传服务器。",
    ],
    benefits: [
      "密码学随机 UUID v4",
      "批量生成数百个",
      "大写、无连字符、花括号格式",
      "单个复制或批量下载 .txt",
      "跨系统无需协调",
      "隐私优先的浏览器生成",
    ],
  },
  features: {
    title: "功能特性",
    items: [
      "即时生成 UUID v4",
      "批量模式生成多个 UUID",
      "大写格式选项",
      "去除连字符选项",
      "花括号 {uuid} 格式",
      "一键复制单个 UUID",
      "全部复制或下载 .txt",
      "使用 crypto.getRandomValues",
      "独立的单个和批量生成器",
      "浏览器本地运行",
    ],
  },
  howToUse: {
    title: "使用方法",
    steps: [
      { title: "生成单个 UUID", description: "点击顶部生成按钮创建一个 UUID v4，直接复制使用。" },
      { title: "设置批量选项", description: "选择生成数量，按需开启大写、无连字符或花括号格式。" },
      { title: "批量生成", description: "点击生成创建完整批次，每个 UUID 独立随机、抗碰撞。" },
      { title: "复制或下载", description: "全部复制到剪贴板或下载 .txt 文件，导入数据库或测试脚本。" },
    ],
  },
  examples: {
    title: "示例",
    inputLabel: "格式",
    outputLabel: "生成的 UUID",
    items: [
      { label: "标准 v4", input: "uuid-v4", output: "f47ac10b-58cc-4372-a567-0e02b2c3d479" },
      { label: "大写", input: "uppercase", output: "F47AC10B-58CC-4372-A567-0E02B2C3D479" },
    ],
  },
  faq: [
    { q: "UUID 生成器免费吗？", a: "是的，完全免费，无注册和使用限制。" },
    { q: "数据会上传吗？", a: "不会，UUID 通过浏览器 crypto API 本地生成。" },
    { q: "什么是 UUID v4？", a: "版本 4 使用随机数，122 位随机性使碰撞概率极低。" },
    { q: "能批量生成吗？", a: "可以，批量模式一次生成多个，支持全部复制或 .txt 下载。" },
    { q: "可以商用吗？", a: "可以，个人和商业用途均免费。" },
    { q: "UUID 是真正随机的吗？", a: "是的，通过 crypto.getRandomValues 生成，与安全密钥生成使用相同 API。" },
  ],
  relatedToolSlugs: ["hash-generator", "password-generator", "json-formatter", "jwt-decoder", "timestamp"],
}

const ja: ToolPageSeoContent = {
  whatIs: {
    title: "UUID ジェネレーターとは？",
    paragraphs: [
      "UUID ジェネレーターは、データベース主キー、セッション ID、API トークン、分散システムのトレース ID として使用する汎用一意識別子（UUID）を作成するオンラインツールです。UUID v4 は乱数を使用し、数十億個生成しても衝突は統計的に無視できます。",
      "連番 ID と異なり、UUID は任意のマシンで独立に生成可能で、調整不要。マイクロサービス、オフラインファーストアプリ、テストデータ生成に最適です。",
      "WaiHub の UUID ジェネレーターは crypto.getRandomValues でブラウザ内に UUID v4 を生成。単一または数百のバッチ、大文字・ハイフンなし・波括弧形式、個別コピーまたは .txt ダウンロード、サーバー非送信。",
    ],
    benefits: [
      "暗号学的ランダム UUID v4",
      "数百のバッチ生成",
      "大文字・ハイフンなし・波括弧形式",
      "単一コピーまたは .txt ダウンロード",
      "システム間で調整不要",
      "プライバシー優先のブラウザ生成",
    ],
  },
  features: {
    title: "機能",
    items: [
      "UUID v4 を即時生成",
      "複数 UUID のバッチモード",
      "大文字形式オプション",
      "ハイフン除去オプション",
      "波括弧 {uuid} 形式",
      "ワンクリックで単一 UUID コピー",
      "全コピーまたは .txt ダウンロード",
      "crypto.getRandomValues 使用",
      "独立した単一・バッチジェネレーター",
      "ブラウザ内ローカル動作",
    ],
  },
  howToUse: {
    title: "使い方",
    steps: [
      { title: "単一 UUID を生成", description: "上部の生成ボタンで UUID v4 を 1 つ作成。直接コピーして使用。" },
      { title: "バッチオプションを設定", description: "生成数を選択し、大文字・ハイフンなし・波括弧形式を切替。" },
      { title: "バッチ生成", description: "「生成」でフルバッチを作成。各 UUID は独立にランダムで衝突耐性あり。" },
      { title: "コピーまたはダウンロード", description: "全 UUID をクリップボードにコピー、または .txt でダウンロード。" },
    ],
  },
  examples: {
    title: "例",
    inputLabel: "形式",
    outputLabel: "生成された UUID",
    items: [
      { label: "標準 v4", input: "uuid-v4", output: "f47ac10b-58cc-4372-a567-0e02b2c3d479" },
      { label: "大文字", input: "uppercase", output: "F47AC10B-58CC-4372-A567-0E02B2C3D479" },
    ],
  },
  faq: [
    { q: "この UUID ジェネレーターは無料ですか？", a: "はい。登録不要、制限なし、完全無料です。" },
    { q: "データはアップロードされますか？", a: "いいえ。ブラウザの crypto API でローカル生成されます。" },
    { q: "UUID v4 とは？", a: "バージョン 4 は乱数を使用。122 ビットのランダム性で衝突は極めて稀です。" },
    { q: "複数生成できますか？", a: "はい。バッチモードで一括生成、全コピーまたは .txt ダウンロード。" },
    { q: "商用利用できますか？", a: "はい。個人・商用ともに無料です。" },
    { q: "本当にランダムですか？", a: "はい。crypto.getRandomValues で生成。安全なキー生成と同じ API です。" },
  ],
  relatedToolSlugs: ["hash-generator", "password-generator", "json-formatter", "jwt-decoder", "timestamp"],
}

export const uuidGeneratorContent = { en, zh, ja }
