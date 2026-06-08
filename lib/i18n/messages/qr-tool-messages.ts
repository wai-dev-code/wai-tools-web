import type { FaqItem } from "@/lib/i18n/messages/types"

export interface QrToolMessages {
  preview: string
  downloadPng: string
  size: string
  emptyPayload: string
  generateError: string
  tabText: string
  tabUrl: string
  tabEmail: string
  tabPhone: string
  tabWifi: string
  textLabel: string
  textPlaceholder: string
  urlLabel: string
  urlPlaceholder: string
  emailLabel: string
  emailPlaceholder: string
  emailSubject: string
  emailSubjectPlaceholder: string
  emailBody: string
  emailBodyPlaceholder: string
  phoneLabel: string
  phonePlaceholder: string
  wifiSsid: string
  wifiSsidPlaceholder: string
  wifiPassword: string
  wifiPasswordPlaceholder: string
  wifiSecurity: string
  wifiSecurityWpa: string
  wifiSecurityWep: string
  wifiSecurityNone: string
  wifiHidden: string
  notify: {
    downloaded: string
  }
}

export interface QrCodeGeneratorPageMessages {
  metaTitle: string
  metaDescription: string
  instructions: string[]
  faq: FaqItem[]
}

export const qrToolZh: QrToolMessages = {
  preview: "二维码预览",
  downloadPng: "下载 PNG",
  size: "尺寸",
  emptyPayload: "请填写内容以生成二维码",
  generateError: "生成失败，请检查输入内容",
  tabText: "文本",
  tabUrl: "网址",
  tabEmail: "邮箱",
  tabPhone: "电话",
  tabWifi: "WiFi",
  textLabel: "文本内容",
  textPlaceholder: "输入任意文本…",
  urlLabel: "网址 URL",
  urlPlaceholder: "https://example.com",
  emailLabel: "邮箱地址",
  emailPlaceholder: "name@example.com",
  emailSubject: "主题（可选）",
  emailSubjectPlaceholder: "邮件主题",
  emailBody: "正文（可选）",
  emailBodyPlaceholder: "邮件正文",
  phoneLabel: "电话号码",
  phonePlaceholder: "+86 138 0000 0000",
  wifiSsid: "WiFi 名称 (SSID)",
  wifiSsidPlaceholder: "MyNetwork",
  wifiPassword: "WiFi 密码",
  wifiPasswordPlaceholder: "密码",
  wifiSecurity: "加密方式",
  wifiSecurityWpa: "WPA / WPA2",
  wifiSecurityWep: "WEP",
  wifiSecurityNone: "无密码",
  wifiHidden: "隐藏网络",
  notify: { downloaded: "已下载 PNG" },
}

export const qrToolEn: QrToolMessages = {
  preview: "QR preview",
  downloadPng: "Download PNG",
  size: "Size",
  emptyPayload: "Enter content to generate a QR code",
  generateError: "Generation failed — check your input",
  tabText: "Text",
  tabUrl: "URL",
  tabEmail: "Email",
  tabPhone: "Phone",
  tabWifi: "WiFi",
  textLabel: "Text content",
  textPlaceholder: "Enter any text…",
  urlLabel: "Website URL",
  urlPlaceholder: "https://example.com",
  emailLabel: "Email address",
  emailPlaceholder: "name@example.com",
  emailSubject: "Subject (optional)",
  emailSubjectPlaceholder: "Email subject",
  emailBody: "Body (optional)",
  emailBodyPlaceholder: "Email body",
  phoneLabel: "Phone number",
  phonePlaceholder: "+1 555 000 0000",
  wifiSsid: "Network name (SSID)",
  wifiSsidPlaceholder: "MyNetwork",
  wifiPassword: "WiFi password",
  wifiPasswordPlaceholder: "Password",
  wifiSecurity: "Security",
  wifiSecurityWpa: "WPA / WPA2",
  wifiSecurityWep: "WEP",
  wifiSecurityNone: "No password",
  wifiHidden: "Hidden network",
  notify: { downloaded: "PNG downloaded" },
}

export const qrToolJa: QrToolMessages = {
  preview: "QR プレビュー",
  downloadPng: "PNG をダウンロード",
  size: "サイズ",
  emptyPayload: "内容を入力して QR コードを生成",
  generateError: "生成に失敗しました。入力を確認してください",
  tabText: "テキスト",
  tabUrl: "URL",
  tabEmail: "メール",
  tabPhone: "電話",
  tabWifi: "WiFi",
  textLabel: "テキスト",
  textPlaceholder: "任意のテキストを入力…",
  urlLabel: "ウェブサイト URL",
  urlPlaceholder: "https://example.com",
  emailLabel: "メールアドレス",
  emailPlaceholder: "name@example.com",
  emailSubject: "件名（任意）",
  emailSubjectPlaceholder: "メール件名",
  emailBody: "本文（任意）",
  emailBodyPlaceholder: "メール本文",
  phoneLabel: "電話番号",
  phonePlaceholder: "+81 90 0000 0000",
  wifiSsid: "ネットワーク名 (SSID)",
  wifiSsidPlaceholder: "MyNetwork",
  wifiPassword: "WiFi パスワード",
  wifiPasswordPlaceholder: "パスワード",
  wifiSecurity: "セキュリティ",
  wifiSecurityWpa: "WPA / WPA2",
  wifiSecurityWep: "WEP",
  wifiSecurityNone: "パスワードなし",
  wifiHidden: "非表示ネットワーク",
  notify: { downloaded: "PNG をダウンロードしました" },
}

export const qrCodeGeneratorPageZh: QrCodeGeneratorPageMessages = {
  metaTitle: "二维码生成器 - 免费在线 QR Code 生成",
  metaDescription:
    "免费 QR Code 在线生成：文本、网址、邮箱、电话、WiFi 二维码，实时预览，PNG 下载。扫码即用，浏览器内生成不上传。",
  instructions: [
    "选择类型（文本、网址、邮箱、电话、WiFi），填写对应字段。",
    "二维码实时更新；可调整尺寸后下载 PNG 图片。",
    "WiFi 码扫描后可直接连接网络（格式符合常见扫码标准）。",
  ],
  faq: [
    {
      q: "数据会上传服务器吗？",
      a: "不会。二维码在您的浏览器内本地生成。",
    },
    {
      q: "WiFi 二维码如何工作？",
      a: "使用标准 WIFI: 格式编码 SSID、密码与加密方式，手机扫码后可快速联网。",
    },
    {
      q: "下载的图片格式是什么？",
      a: "PNG 格式，适合打印或分享到社交媒体。",
    },
  ],
}

export const qrCodeGeneratorPageEn: QrCodeGeneratorPageMessages = {
  metaTitle: "QR Code Generator - Free Online QR Maker",
  metaDescription:
    "Free QR code generator online: text, URL, email, phone, WiFi QR codes with live preview and PNG download. Runs in your browser.",
  instructions: [
    "Pick a type (text, URL, email, phone, WiFi) and fill in the fields.",
    "The code updates in real time; adjust size and download PNG.",
    "WiFi codes use the standard format for quick network join on mobile.",
  ],
  faq: [
    {
      q: "Is my data sent to a server?",
      a: "No. QR codes are generated locally in your browser.",
    },
    {
      q: "How do WiFi QR codes work?",
      a: "They encode SSID, password, and security using the WIFI: scheme for mobile scanners.",
    },
    {
      q: "What format is the download?",
      a: "PNG — suitable for printing or sharing.",
    },
  ],
}

export const qrCodeGeneratorPageJa: QrCodeGeneratorPageMessages = {
  metaTitle: "QRコード生成 - 無料オンライン QR メーカー",
  metaDescription:
    "無料 QR コード生成：テキスト・URL・メール・電話・WiFi、プレビューと PNG ダウンロード。ブラウザ内で完結。",
  instructions: [
    "種類（テキスト、URL、メール、電話、WiFi）を選び、項目を入力します。",
    "QR コードはリアルタイム更新。サイズ調整後に PNG をダウンロードできます。",
    "WiFi コードは一般的なスキャン形式に対応しています。",
  ],
  faq: [
    {
      q: "データはサーバーに送信されますか？",
      a: "いいえ。ブラウザ内でローカルに生成されます。",
    },
    {
      q: "WiFi QR コードの仕組みは？",
      a: "SSID・パスワード・暗号化方式を WIFI: 形式でエンコードします。",
    },
    {
      q: "ダウンロード形式は？",
      a: "PNG 形式です。印刷や共有に適しています。",
    },
  ],
}
