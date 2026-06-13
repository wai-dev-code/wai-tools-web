import type { ToolPageSeoContent } from "@/lib/i18n/messages/tool-page-content-types"

const en: ToolPageSeoContent = {
  whatIs: {
    title: "What is Password Generator?",
    paragraphs: [
      "Password Generator is an online tool that creates strong, random passwords for accounts, API keys, and test environments. Weak passwords remain the leading cause of security breaches — a dedicated generator ensures every password uses sufficient length and character diversity.",
      "Unlike memorable passwords that humans tend to create (names, dates, common words), cryptographically random passwords resist dictionary attacks, brute force, and credential stuffing. Developers need strong passwords for staging environments, service accounts, database users, and personal account registration.",
      "WaiHub's Password Generator uses crypto.getRandomValues for cryptographically secure randomness. Customize length (4-128 characters), toggle uppercase, lowercase, numbers, and symbols, exclude ambiguous characters, and see a live strength meter. Passwords are generated in your browser and never uploaded.",
    ],
    benefits: [
      "Cryptographically secure random passwords",
      "Customizable length and character sets",
      "Live weak/average/strong strength meter",
      "Exclude ambiguous characters (0/O, 1/l)",
      "One-click copy to clipboard",
      "Privacy-first browser generation",
    ],
  },
  features: {
    title: "Features",
    items: [
      "Generate passwords 4 to 128 characters",
      "Toggle uppercase, lowercase, numbers, symbols",
      "Custom character set support",
      "Exclude specific characters",
      "Exclude ambiguous characters option",
      "Live password strength meter",
      "Uses crypto.getRandomValues",
      "One-click copy to clipboard",
      "Regenerate instantly",
      "Works locally in browser",
    ],
  },
  howToUse: {
    title: "How To Use",
    steps: [
      { title: "Set password length", description: "Choose length between 4 and 128 characters. 16+ characters recommended for important accounts." },
      { title: "Configure character sets", description: "Toggle uppercase, lowercase, numbers, and symbols. Add custom characters or exclude specific ones." },
      { title: "Generate and review", description: "Click Generate to create a new password. Check the strength meter — aim for Strong rating." },
      { title: "Copy and use securely", description: "Copy the password to your password manager or registration form. Never share passwords via email or chat." },
    ],
  },
  examples: {
    title: "Examples",
    inputLabel: "Settings",
    outputLabel: "Generated Password",
    items: [
      { label: "Strong 16-char", input: "Length: 16, All charsets enabled", output: "K9#mPx2vLqR8nW4j" },
      { label: "Symbols excluded", input: "Length: 20, No symbols", output: "aB3kL9mN2pQ7rT5vX8wY" },
    ],
  },
  faq: [
    { q: "Is this password generator free?", a: "Yes. Completely free with no signup." },
    { q: "Is my password uploaded?", a: "No. Passwords are generated locally using crypto.getRandomValues." },
    { q: "How long should passwords be?", a: "At least 12 characters for general use. 16+ for important accounts like email and banking." },
    { q: "Are generated passwords truly random?", a: "Yes. Uses crypto.getRandomValues, the same API browsers use for secure key generation." },
    { q: "Can I use it commercially?", a: "Yes. Free for personal and commercial use." },
    { q: "Should I exclude ambiguous characters?", a: "Recommended when passwords might be read aloud or handwritten — excludes 0/O, 1/l/I." },
  ],
  relatedToolSlugs: ["hash-generator", "uuid-generator", "qr-code-generator", "jwt-decoder", "base64"],
}

const zh: ToolPageSeoContent = {
  whatIs: {
    title: "什么是密码生成器？",
    paragraphs: [
      "密码生成器创建用于账号、API 密钥和测试环境的强随机密码。弱密码仍是安全漏洞的首要原因——专用生成器确保每个密码具有足够的长度和字符多样性。",
      "与人类容易记住的密码（姓名、日期、常见词）不同，密码学随机密码能抵抗字典攻击、暴力破解和凭证填充。开发者需要强密码用于预发环境、服务账号、数据库用户和个人账号注册。",
      "WaiHub 密码生成器使用 crypto.getRandomValues 实现密码学安全随机性。可自定义长度（4-128 字符）、切换大小写/数字/符号、排除易混淆字符，并查看实时强度计。密码在浏览器中生成，永不上传。",
    ],
    benefits: [
      "密码学安全的随机密码",
      "可自定义长度和字符集",
      "实时弱/中/强强度计",
      "排除易混淆字符（0/O、1/l）",
      "一键复制到剪贴板",
      "隐私优先的浏览器生成",
    ],
  },
  features: {
    title: "功能特性",
    items: [
      "生成 4 至 128 字符密码",
      "切换大小写、数字、符号",
      "自定义字符集支持",
      "排除特定字符",
      "排除易混淆字符选项",
      "实时密码强度计",
      "使用 crypto.getRandomValues",
      "一键复制到剪贴板",
      "即时重新生成",
      "浏览器本地运行",
    ],
  },
  howToUse: {
    title: "使用方法",
    steps: [
      { title: "设置密码长度", description: "选择 4 至 128 字符长度，重要账号建议 16 字符以上。" },
      { title: "配置字符集", description: "切换大小写、数字和符号，可添加自定义字符或排除特定字符。" },
      { title: "生成并检查", description: "点击生成创建新密码，查看强度计，目标为「强」评级。" },
      { title: "安全复制使用", description: "复制到密码管理器或注册表单，切勿通过邮件或聊天分享密码。" },
    ],
  },
  examples: {
    title: "示例",
    inputLabel: "设置",
    outputLabel: "生成的密码",
    items: [
      { label: "强 16 位", input: "长度: 16，全部字符集启用", output: "K9#mPx2vLqR8nW4j" },
      { label: "排除符号", input: "长度: 20，无符号", output: "aB3kL9mN2pQ7rT5vX8wY" },
    ],
  },
  faq: [
    { q: "密码生成器免费吗？", a: "是的，完全免费，无需注册。" },
    { q: "密码会上传吗？", a: "不会，密码通过 crypto.getRandomValues 本地生成。" },
    { q: "密码应该多长？", a: "一般用途至少 12 字符，邮箱和银行等重要账号建议 16 字符以上。" },
    { q: "生成的密码是真正随机的吗？", a: "是的，使用 crypto.getRandomValues，与浏览器安全密钥生成相同 API。" },
    { q: "可以商用吗？", a: "可以，个人和商业用途均免费。" },
    { q: "应该排除易混淆字符吗？", a: "密码可能需要口头传达或手写时建议开启，排除 0/O、1/l/I。" },
  ],
  relatedToolSlugs: ["hash-generator", "uuid-generator", "qr-code-generator", "jwt-decoder", "base64"],
}

const ja: ToolPageSeoContent = {
  whatIs: {
    title: "パスワードジェネレーターとは？",
    paragraphs: [
      "パスワードジェネレーターは、アカウント、API キー、テスト環境用の強力なランダムパスワードを作成するオンラインツールです。弱いパスワードはセキュリティ侵害の主因——専用ジェネレーターが十分な長さと文字多様性を保証します。",
      "人間が覚えやすいパスワード（名前、日付、一般的な単語）と異なり、暗号学的ランダムパスワードは辞書攻撃、ブルートフォース、クレデンシャルスタッフィングに耐性があります。",
      "WaiHub のパスワードジェネレーターは crypto.getRandomValues で暗号学的に安全なランダム性を実現。長さ（4-128 文字）、大文字小文字/数字/記号の切替、紛らわしい文字の除外、ライブ強度メーター。ブラウザ内で生成、非アップロード。",
    ],
    benefits: [
      "暗号学的に安全なランダムパスワード",
      "カスタマイズ可能な長さと文字セット",
      "ライブ弱/中/強度メーター",
      "紛らわしい文字の除外（0/O、1/l）",
      "ワンクリックでクリップボードにコピー",
      "プライバシー優先のブラウザ生成",
    ],
  },
  features: {
    title: "機能",
    items: [
      "4〜128 文字のパスワード生成",
      "大文字小文字、数字、記号の切替",
      "カスタム文字セットサポート",
      "特定文字の除外",
      "紛らわしい文字除外オプション",
      "ライブパスワード強度メーター",
      "crypto.getRandomValues 使用",
      "ワンクリックでクリップボードにコピー",
      "即時再生成",
      "ブラウザ内ローカル動作",
    ],
  },
  howToUse: {
    title: "使い方",
    steps: [
      { title: "パスワード長を設定", description: "4〜128 文字の長さを選択。重要なアカウントは 16 文字以上を推奨。" },
      { title: "文字セットを設定", description: "大文字小文字、数字、記号を切替。カスタム文字の追加または特定文字の除外。" },
      { title: "生成して確認", description: "「生成」で新しいパスワードを作成。強度メーターを確認——「強」評価を目指す。" },
      { title: "安全にコピーして使用", description: "パスワードマネージャーまたは登録フォームにコピー。メールやチャットでパスワードを共有しないでください。" },
    ],
  },
  examples: {
    title: "例",
    inputLabel: "設定",
    outputLabel: "生成されたパスワード",
    items: [
      { label: "強 16 文字", input: "長さ: 16、全文字セット有効", output: "K9#mPx2vLqR8nW4j" },
      { label: "記号除外", input: "長さ: 20、記号なし", output: "aB3kL9mN2pQ7rT5vX8wY" },
    ],
  },
  faq: [
    { q: "このパスワードジェネレーターは無料ですか？", a: "はい。登録不要、完全無料です。" },
    { q: "パスワードはアップロードされますか？", a: "いいえ。crypto.getRandomValues でローカル生成されます。" },
    { q: "パスワードはどのくらいの長さ？", a: "一般的には 12 文字以上。メールや銀行など重要アカウントは 16 文字以上。" },
    { q: "生成されたパスワードは本当にランダム？", a: "はい。crypto.getRandomValues を使用。ブラウザの安全なキー生成と同じ API です。" },
    { q: "商用利用できますか？", a: "はい。個人・商用ともに無料です。" },
    { q: "紛らわしい文字を除外すべき？", a: "口頭や手書きで伝える可能性がある場合に推奨——0/O、1/l/I を除外。" },
  ],
  relatedToolSlugs: ["hash-generator", "uuid-generator", "qr-code-generator", "jwt-decoder", "base64"],
}

export const passwordGeneratorContent = { en, zh, ja }
