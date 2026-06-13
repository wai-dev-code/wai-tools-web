import type { ToolPageSeoContent } from "@/lib/i18n/messages/tool-page-content-types"

const en: ToolPageSeoContent = {
  whatIs: {
    title: "What is QR Code Generator?",
    paragraphs: [
      "QR Code Generator is an online tool that creates scannable QR codes from text, URLs, email addresses, phone numbers, and WiFi credentials. QR codes encode information in a two-dimensional barcode that smartphones can read instantly — no typing required.",
      "Businesses use QR codes for marketing campaigns, restaurant menus, event tickets, and product packaging. Developers embed them in documentation, share WiFi passwords at conferences, and create deep links for mobile app onboarding. A good generator lets you preview and download high-quality PNG images.",
      "WaiHub's QR Code Generator supports five content types with live preview and PNG download. WiFi codes use the standard WIFI: format so guests scan and connect automatically. URLs auto-prefix https:// when missing. All generation happens in your browser — no data upload.",
    ],
    benefits: [
      "Text, URL, email, phone, WiFi types",
      "Live preview as you type",
      "Download high-quality PNG",
      "WiFi auto-connect format",
      "Adjustable size 128-512px",
      "Privacy-first browser generation",
    ],
  },
  features: {
    title: "Features",
    items: [
      "Generate QR codes for text and URLs",
      "Email (mailto) and phone (tel) codes",
      "WiFi credentials with auto-connect",
      "Live preview updates instantly",
      "Download as PNG image",
      "Adjustable size 128 to 512 pixels",
      "Auto-prefix https:// for URLs",
      "Standard WIFI: scheme format",
      "High contrast scannable output",
      "Works locally in browser",
    ],
  },
  howToUse: {
    title: "How To Use",
    steps: [
      { title: "Select content type", description: "Choose Text, URL, Email, Phone, or WiFi depending on what you want the QR code to contain." },
      { title: "Enter your content", description: "Fill in the text, URL, email address, phone number, or WiFi SSID and password. Preview updates live." },
      { title: "Adjust size if needed", description: "Set the QR code size between 128 and 512 pixels for screen display or print." },
      { title: "Download PNG", description: "Click Download to save the QR code as a PNG image for websites, print materials, or presentations." },
    ],
  },
  examples: {
    title: "Examples",
    inputLabel: "Content Type",
    outputLabel: "QR Encodes",
    items: [
      { label: "URL", input: "Type: URL\nContent: https://waihub.net", output: "Scannable link to waihub.net" },
      { label: "WiFi", input: "Type: WiFi\nSSID: MyNetwork\nPassword: secret123", output: "WIFI:T:WPA;S:MyNetwork;P:secret123;;" },
    ],
  },
  faq: [
    { q: "Is this QR generator free?", a: "Yes. Completely free with no signup or watermarks." },
    { q: "Is my data uploaded?", a: "No. QR codes are generated entirely in your browser." },
    { q: "What formats are supported?", a: "Text, URL, email (mailto), phone (tel), and WiFi (WIFI: scheme)." },
    { q: "Can I download the QR code?", a: "Yes. Download as PNG in sizes from 128 to 512 pixels." },
    { q: "Can I use it commercially?", a: "Yes. Free for personal and commercial use." },
    { q: "How do WiFi QR codes work?", a: "They encode SSID and password in WIFI: format. Scanning connects the device to the network automatically." },
  ],
  relatedToolSlugs: ["url-encoder", "password-generator", "base64", "uuid-generator", "hash-generator"],
}

const zh: ToolPageSeoContent = {
  whatIs: {
    title: "什么是二维码生成器？",
    paragraphs: [
      "二维码生成器从文本、URL、邮箱、电话和 WiFi 凭证创建可扫描的二维码。二维码以二维条码编码信息，智能手机可即时读取，无需手动输入。",
      "企业用二维码做营销活动、餐厅菜单、活动门票和产品包装。开发者将其嵌入文档、在会议上分享 WiFi 密码、创建移动应用深度链接。好的生成器支持预览和下载高质量 PNG 图片。",
      "WaiHub 二维码生成器支持五种内容类型，实时预览和 PNG 下载。WiFi 码使用标准 WIFI: 格式，客人扫码即可自动连接。URL 缺少 https:// 时自动补全。所有生成在浏览器中完成，不上传数据。",
    ],
    benefits: [
      "文本、URL、邮箱、电话、WiFi 类型",
      "输入时实时预览",
      "下载高质量 PNG",
      "WiFi 自动连接格式",
      "可调尺寸 128-512px",
      "隐私优先的浏览器生成",
    ],
  },
  features: {
    title: "功能特性",
    items: [
      "生成文本和 URL 二维码",
      "邮箱（mailto）和电话（tel）码",
      "WiFi 凭证自动连接",
      "实时预览即时更新",
      "下载 PNG 图片",
      "可调尺寸 128 至 512 像素",
      "URL 自动补全 https://",
      "标准 WIFI: 方案格式",
      "高对比度可扫描输出",
      "浏览器本地运行",
    ],
  },
  howToUse: {
    title: "使用方法",
    steps: [
      { title: "选择内容类型", description: "根据二维码内容选择文本、URL、邮箱、电话或 WiFi。" },
      { title: "输入内容", description: "填写文本、URL、邮箱、电话或 WiFi SSID 和密码，预览实时更新。" },
      { title: "调整尺寸", description: "设置 128 至 512 像素的二维码尺寸，用于屏幕显示或打印。" },
      { title: "下载 PNG", description: "点击下载将二维码保存为 PNG 图片，用于网站、印刷品或演示。" },
    ],
  },
  examples: {
    title: "示例",
    inputLabel: "内容类型",
    outputLabel: "二维码编码",
    items: [
      { label: "URL", input: "类型: URL\n内容: https://waihub.net", output: "可扫描链接到 waihub.net" },
      { label: "WiFi", input: "类型: WiFi\nSSID: MyNetwork\n密码: secret123", output: "WIFI:T:WPA;S:MyNetwork;P:secret123;;" },
    ],
  },
  faq: [
    { q: "二维码生成器免费吗？", a: "是的，完全免费，无注册、无水印。" },
    { q: "数据会上传吗？", a: "不会，二维码完全在浏览器中生成。" },
    { q: "支持哪些格式？", a: "文本、URL、邮箱（mailto）、电话（tel）和 WiFi（WIFI: 方案）。" },
    { q: "能下载二维码吗？", a: "可以，以 128 至 512 像素 PNG 格式下载。" },
    { q: "可以商用吗？", a: "可以，个人和商业用途均免费。" },
    { q: "WiFi 二维码如何工作？", a: "以 WIFI: 格式编码 SSID 和密码，扫描后设备自动连接网络。" },
  ],
  relatedToolSlugs: ["url-encoder", "password-generator", "base64", "uuid-generator", "hash-generator"],
}

const ja: ToolPageSeoContent = {
  whatIs: {
    title: "QR コードジェネレーターとは？",
    paragraphs: [
      "QR コードジェネレーターは、テキスト、URL、メール、電話番号、WiFi 認証情報からスキャン可能な QR コードを作成するオンラインツールです。QR コードは 2 次元バーコードで情報をエンコードし、スマートフォンが即座に読み取れます。",
      "企業は QR コードをマーケティング、レストランメニュー、イベントチケット、製品パッケージに使用。開発者はドキュメントへの埋め込み、会議での WiFi パスワード共有、モバイルアプリのディープリンクに活用。",
      "WaiHub の QR コードジェネレーターは 5 つのコンテンツタイプ、ライブプレビュー、PNG ダウンロードをサポート。WiFi コードは標準 WIFI: 形式でゲストがスキャンして自動接続。URL は https:// を自動補完。すべてブラウザ内で生成、データ非送信。",
    ],
    benefits: [
      "テキスト、URL、メール、電話、WiFi タイプ",
      "入力時のライブプレビュー",
      "高品質 PNG ダウンロード",
      "WiFi 自動接続形式",
      "128-512px のサイズ調整",
      "プライバシー優先のブラウザ生成",
    ],
  },
  features: {
    title: "機能",
    items: [
      "テキストと URL の QR コード生成",
      "メール（mailto）と電話（tel）コード",
      "WiFi 認証情報の自動接続",
      "即時更新のライブプレビュー",
      "PNG 画像としてダウンロード",
      "128〜512 ピクセルのサイズ調整",
      "URL の https:// 自動補完",
      "標準 WIFI: スキーム形式",
      "高コントラストのスキャン可能出力",
      "ブラウザ内ローカル動作",
    ],
  },
  howToUse: {
    title: "使い方",
    steps: [
      { title: "コンテンツタイプを選択", description: "QR コードに含める内容に応じてテキスト、URL、メール、電話、WiFi を選択。" },
      { title: "コンテンツを入力", description: "テキスト、URL、メールアドレス、電話番号、または WiFi SSID とパスワードを入力。プレビューがライブ更新。" },
      { title: "サイズを調整", description: "画面表示または印刷用に 128〜512 ピクセルの QR コードサイズを設定。" },
      { title: "PNG をダウンロード", description: "「ダウンロード」で QR コードを PNG 画像として保存。ウェブサイト、印刷物、プレゼンに使用。" },
    ],
  },
  examples: {
    title: "例",
    inputLabel: "コンテンツタイプ",
    outputLabel: "QR コードの内容",
    items: [
      { label: "URL", input: "タイプ: URL\n内容: https://waihub.net", output: "waihub.net へのスキャン可能リンク" },
      { label: "WiFi", input: "タイプ: WiFi\nSSID: MyNetwork\nパスワード: secret123", output: "WIFI:T:WPA;S:MyNetwork;P:secret123;;" },
    ],
  },
  faq: [
    { q: "この QR ジェネレーターは無料ですか？", a: "はい。登録不要、透かしなし、完全無料です。" },
    { q: "データはアップロードされますか？", a: "いいえ。すべてブラウザ内で QR コードが生成されます。" },
    { q: "サポートする形式は？", a: "テキスト、URL、メール（mailto）、電話（tel）、WiFi（WIFI: スキーム）。" },
    { q: "QR コードをダウンロードできますか？", a: "はい。128〜512 ピクセルの PNG としてダウンロード可能。" },
    { q: "商用利用できますか？", a: "はい。個人・商用ともに無料です。" },
    { q: "WiFi QR コードの仕組み？", a: "SSID とパスワードを WIFI: 形式でエンコード。スキャンでデバイスが自動的にネットワークに接続。" },
  ],
  relatedToolSlugs: ["url-encoder", "password-generator", "base64", "uuid-generator", "hash-generator"],
}

export const qrCodeGeneratorContent = { en, zh, ja }
