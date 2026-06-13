import type { ToolPageSeoContent } from "@/lib/i18n/messages/tool-page-content-types"

const en: ToolPageSeoContent = {
  whatIs: {
    title: "What is Hash Generator?",
    paragraphs: [
      "Hash Generator is an online tool that computes cryptographic hash digests from text input. Hash functions transform arbitrary data into fixed-length strings that change completely when the input changes even slightly — making them essential for checksums, data integrity verification, and API signature debugging.",
      "Developers use hash generators daily: comparing API response signatures, generating cache keys, verifying file integrity, and debugging authentication flows. MD5 remains common in legacy systems, while SHA-256 and SHA-512 are preferred for modern security-sensitive applications.",
      "WaiHub's Hash Generator computes MD5, SHA-1, SHA-256, and SHA-512 simultaneously from a single input. All four digests appear in hex format with individual copy buttons. Processing runs entirely in your browser — your sensitive strings never leave your device.",
    ],
    benefits: [
      "MD5, SHA-1, SHA-256, SHA-512 at once",
      "Hex digest output with copy buttons",
      "Compare with backend hash results",
      "Debug API signatures quickly",
      "No server upload required",
      "Instant results as you type",
    ],
  },
  features: {
    title: "Features",
    items: [
      "Compute MD5 hash instantly",
      "SHA-1, SHA-256, SHA-512 simultaneously",
      "Hexadecimal digest output",
      "Copy individual or all hashes",
      "Real-time computation as you type",
      "Compare multiple algorithms side by side",
      "Built-in examples for testing",
      "Educational algorithm comparison",
      "Clear labeling for each algorithm",
      "Works locally in browser",
    ],
  },
  howToUse: {
    title: "How To Use",
    steps: [
      { title: "Enter your text", description: "Type or paste the string you want to hash in the input field. Results update in real time as you type." },
      { title: "Review all digests", description: "MD5, SHA-1, SHA-256, and SHA-512 digests appear simultaneously below the input." },
      { title: "Copy the hash you need", description: "Click copy on any individual digest, or copy all hashes at once for documentation." },
      { title: "Compare with expected values", description: "Use the output to verify API signatures, cache keys, or backend hash results during debugging." },
    ],
  },
  examples: {
    title: "Examples",
    inputLabel: "Input",
    outputLabel: "SHA-256",
    items: [
      { label: "Simple text", input: "Hello, WaiHub!", output: "a1b2c3... (64-char hex digest)" },
      { label: "Empty string", input: "(empty)", output: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855" },
    ],
  },
  faq: [
    { q: "Is this hash generator free?", a: "Yes. Completely free with no signup." },
    { q: "Is my data uploaded?", a: "No. Hashing happens entirely in your browser." },
    { q: "MD5 vs SHA-256?", a: "MD5 is fast but cryptographically broken — use for legacy checksums only. SHA-256 is secure for integrity verification." },
    { q: "Can I hash files?", a: "Currently text input only. Paste file content or use Base64 for binary data." },
    { q: "Can I use it commercially?", a: "Yes. Free for personal and commercial use." },
    { q: "Is MD5 safe for passwords?", a: "No. Never use MD5 or any online tool for password storage. Use bcrypt or Argon2 on the server." },
  ],
  relatedToolSlugs: ["base64", "jwt-decoder", "uuid-generator", "password-generator", "json-formatter"],
}

const zh: ToolPageSeoContent = {
  whatIs: {
    title: "什么是哈希生成器？",
    paragraphs: [
      "哈希生成器从文本输入计算密码学哈希摘要。哈希函数将任意数据转换为固定长度字符串，输入稍有变化输出就完全不同——是校验和、数据完整性验证和 API 签名调试的核心工具。",
      "开发者每天使用哈希生成器：比较 API 响应签名、生成缓存键、验证文件完整性、调试认证流程。MD5 在遗留系统中仍常见，SHA-256 和 SHA-512 更适合现代安全敏感应用。",
      "WaiHub 哈希生成器从单次输入同时计算 MD5、SHA-1、SHA-256 和 SHA-512，四个摘要以十六进制格式显示，各有复制按钮。处理完全在浏览器中运行，敏感字符串不会离开你的设备。",
    ],
    benefits: [
      "一次计算 MD5、SHA-1、SHA-256、SHA-512",
      "十六进制摘要与复制按钮",
      "与后端哈希结果对比",
      "快速调试 API 签名",
      "不上传服务器",
      "输入时即时结果",
    ],
  },
  features: {
    title: "功能特性",
    items: [
      "即时计算 MD5 哈希",
      "同时计算 SHA-1、SHA-256、SHA-512",
      "十六进制摘要输出",
      "复制单个或全部哈希",
      "输入时实时计算",
      "多算法并排对比",
      "内置测试示例",
      "算法对比教学",
      "每个算法清晰标注",
      "浏览器本地运行",
    ],
  },
  howToUse: {
    title: "使用方法",
    steps: [
      { title: "输入文本", description: "在输入框输入或粘贴待哈希字符串，输入时实时更新结果。" },
      { title: "查看所有摘要", description: "MD5、SHA-1、SHA-256、SHA-512 摘要同时显示在输入下方。" },
      { title: "复制所需哈希", description: "点击任意摘要的复制按钮，或一次复制全部哈希。" },
      { title: "与预期值对比", description: "用于验证 API 签名、缓存键或后端哈希结果。" },
    ],
  },
  examples: {
    title: "示例",
    inputLabel: "输入",
    outputLabel: "SHA-256",
    items: [
      { label: "简单文本", input: "Hello, WaiHub!", output: "a1b2c3... (64 位十六进制摘要)" },
      { label: "空字符串", input: "(空)", output: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855" },
    ],
  },
  faq: [
    { q: "哈希生成器免费吗？", a: "是的，完全免费，无需注册。" },
    { q: "数据会上传吗？", a: "不会，哈希计算完全在浏览器中完成。" },
    { q: "MD5 和 SHA-256 的区别？", a: "MD5 快速但密码学已破解，仅用于遗留校验。SHA-256 适合完整性验证。" },
    { q: "能哈希文件吗？", a: "目前仅支持文本输入，可粘贴文件内容或使用 Base64 处理二进制。" },
    { q: "可以商用吗？", a: "可以，个人和商业用途均免费。" },
    { q: "MD5 能用于密码吗？", a: "不能。切勿用 MD5 或任何在线工具存储密码，服务端应使用 bcrypt 或 Argon2。" },
  ],
  relatedToolSlugs: ["base64", "jwt-decoder", "uuid-generator", "password-generator", "json-formatter"],
}

const ja: ToolPageSeoContent = {
  whatIs: {
    title: "ハッシュジェネレーターとは？",
    paragraphs: [
      "ハッシュジェネレーターはテキスト入力から暗号学的ハッシュダイジェストを計算するオンラインツールです。ハッシュ関数は任意データを固定長文字列に変換し、入力がわずかに変わると出力も完全に変化します——チェックサム、データ整合性検証、API 署名デバッグに不可欠です。",
      "開発者は毎日ハッシュジェネレーターを使用：API レスポンス署名の比較、キャッシュキー生成、ファイル整合性検証、認証フローのデバッグ。MD5 はレガシーシステムで依然一般的、SHA-256/512 は現代のセキュリティ敏感アプリに推奨。",
      "WaiHub のハッシュジェネレーターは単一入力から MD5、SHA-1、SHA-256、SHA-512 を同時計算。4 つのダイジェストが 16 進形式で個別コピーボタン付きで表示。すべてブラウザ内で処理、機密文字列はデバイスから出ません。",
    ],
    benefits: [
      "MD5、SHA-1、SHA-256、SHA-512 を一度に",
      "16 進ダイジェストとコピーボタン",
      "バックエンドハッシュ結果と比較",
      "API 署名の高速デバッグ",
      "サーバー非送信",
      "入力時の即時結果",
    ],
  },
  features: {
    title: "機能",
    items: [
      "MD5 ハッシュを即時計算",
      "SHA-1、SHA-256、SHA-512 を同時計算",
      "16 進ダイジェスト出力",
      "個別または全ハッシュをコピー",
      "入力時のリアルタイム計算",
      "複数アルゴリズムの並列比較",
      "テスト用の内蔵例",
      "アルゴリズム比較の学習",
      "各アルゴリズムの明確なラベル",
      "ブラウザ内ローカル動作",
    ],
  },
  howToUse: {
    title: "使い方",
    steps: [
      { title: "テキストを入力", description: "入力フィールドにハッシュ対象文字列を入力または貼り付け。入力時にリアルタイム更新。" },
      { title: "すべてのダイジェストを確認", description: "MD5、SHA-1、SHA-256、SHA-512 が入力の下に同時表示。" },
      { title: "必要なハッシュをコピー", description: "任意のダイジェストのコピーをクリック、または全ハッシュを一括コピー。" },
      { title: "期待値と比較", description: "API 署名、キャッシュキー、バックエンドハッシュ結果の検証に使用。" },
    ],
  },
  examples: {
    title: "例",
    inputLabel: "入力",
    outputLabel: "SHA-256",
    items: [
      { label: "シンプルテキスト", input: "Hello, WaiHub!", output: "a1b2c3... (64 文字の 16 進ダイジェスト)" },
      { label: "空文字列", input: "(空)", output: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855" },
    ],
  },
  faq: [
    { q: "このハッシュジェネレーターは無料ですか？", a: "はい。登録不要、完全無料です。" },
    { q: "データはアップロードされますか？", a: "いいえ。すべてブラウザ内でハッシュ化されます。" },
    { q: "MD5 と SHA-256 の違い？", a: "MD5 は高速だが暗号的に破られている——レガシーチェックサム専用。SHA-256 は整合性検証に安全。" },
    { q: "ファイルをハッシュできますか？", a: "現在はテキスト入力のみ。ファイル内容を貼り付け、または Base64 でバイナリを処理。" },
    { q: "商用利用できますか？", a: "はい。個人・商用ともに無料です。" },
    { q: "MD5 はパスワードに安全？", a: "いいえ。MD5 やオンラインツールでパスワードを保存しないでください。サーバーで bcrypt または Argon2 を使用。" },
  ],
  relatedToolSlugs: ["base64", "jwt-decoder", "uuid-generator", "password-generator", "json-formatter"],
}

export const hashGeneratorContent = { en, zh, ja }
