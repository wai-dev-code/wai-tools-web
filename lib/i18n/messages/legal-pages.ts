export interface LegalSection {
  title: string
  paragraphs?: string[]
  bullets?: string[]
}

export interface LegalPageContent {
  metaTitle: string
  metaDescription: string
  title: string
  lastUpdated: string
  contactBefore?: string
  contactLink: string
  contactAfter?: string
  contactSectionTitle?: string
  sections: LegalSection[]
}

export interface LegalPagesMessages {
  privacy: LegalPageContent
  terms: LegalPageContent
  cookies: LegalPageContent
  changelog: LegalPageContent
}

export const legalZh: LegalPagesMessages = {
  privacy: {
    metaTitle: "隐私政策",
    metaDescription: "WaiHub 隐私政策，说明数据收集、Cookie 与第三方广告服务的使用方式。",
    title: "隐私政策",
    lastUpdated: "最后更新：2026 年 4 月 20 日",
    contactBefore: "如有隐私相关问题，请发送邮件至",
    contactLink: "联系我们",
    contactSectionTitle: "联系方式",
    sections: [
      {
        title: "概述",
        paragraphs: [
          "WaiHub（以下简称「我们」）重视您的隐私。本政策说明当您访问本网站时，我们如何收集、使用和保护信息。",
        ],
      },
      {
        title: "工具数据处理",
        paragraphs: [
          "我们的开发者工具（JSON 格式化、Base64 编解码等）在您的浏览器内运行。您输入或处理的数据不会上传到我们的服务器，我们无法访问这些内容。",
        ],
      },
      {
        title: "自动收集的信息",
        paragraphs: ["我们可能通过以下方式收集非个人身份信息："],
        bullets: [
          "访问日志（IP 地址、浏览器类型、访问页面、时间戳）",
          "通过 Vercel Analytics、Google Analytics 等服务的匿名使用统计",
          "Cookie 及类似技术（见下文）",
        ],
      },
      {
        title: "Cookie 与第三方广告",
        paragraphs: [
          "我们可能使用 Google AdSense 等第三方广告服务。Google 及其合作伙伴可能使用 Cookie 根据您此前访问本网站或其他网站的情况投放广告。",
          "您可通过 Google 广告设置管理个性化广告，或访问 aboutads.info 了解如何选择退出。",
        ],
      },
      {
        title: "您的权利",
        paragraphs: [
          "根据适用法律，您可能有权访问、更正或删除我们持有的个人数据。如需行使这些权利，请通过联系我们页面与我们联系。",
        ],
      },
      {
        title: "政策变更",
        paragraphs: ["我们可能不时更新本政策。重大变更将在本页面发布更新日期。"],
      },
    ],
  },
  terms: {
    metaTitle: "服务条款",
    metaDescription: "WaiHub 服务条款与使用条件。",
    title: "服务条款",
    lastUpdated: "最后更新：2026 年 4 月 20 日",
    contactBefore: "有关本条款的问题，请访问",
    contactLink: "联系我们",
    contactAfter: "页面。",
    contactSectionTitle: "联系我们",
    sections: [
      {
        title: "接受条款",
        paragraphs: ["访问或使用 WaiHub 即表示您同意本服务条款。如不同意，请勿使用本网站。"],
      },
      {
        title: "服务说明",
        paragraphs: [
          "WaiHub 提供免费在线开发者工具。工具按「现状」提供，我们不保证结果完全准确或适用于所有场景。对于因使用本工具导致的任何直接或间接损失，我们不承担责任。",
        ],
      },
      {
        title: "用户责任",
        bullets: [
          "不得将本网站用于任何非法目的",
          "不得尝试干扰、破坏或未经授权访问我们的系统",
          "对使用工具处理的数据内容自行负责",
          "编解码等工具仅用于开发调试，请勿用于绕过安全机制",
        ],
      },
      {
        title: "知识产权",
        paragraphs: ["本网站的设计、代码和品牌标识归 WaiHub 所有。未经授权，不得复制或商业利用本站内容。"],
      },
      {
        title: "第三方链接与广告",
        paragraphs: [
          "本网站可能包含第三方广告或链接。我们不对第三方内容或服务负责。使用第三方服务须遵守其各自条款。",
        ],
      },
      {
        title: "条款变更",
        paragraphs: ["我们保留随时修改本条款的权利。变更后继续使用即视为接受新条款。"],
      },
    ],
  },
  cookies: {
    metaTitle: "Cookie 政策",
    metaDescription: "WaiHub Cookie 政策——我们如何使用 Cookie 及如何管理您的偏好。",
    title: "Cookie 政策",
    lastUpdated: "最后更新：2026 年 6 月 13 日",
    sections: [
      {
        title: "什么是 Cookie",
        paragraphs: [
          "Cookie 是网站存储在您浏览器中的小型文本文件，用于记住偏好、分析使用情况或投放广告。",
        ],
      },
      {
        title: "我们如何使用 Cookie",
        paragraphs: ["WaiHub 可能使用以下类型的 Cookie："],
        bullets: [
          "必要 Cookie：保障网站基本功能正常运行",
          "分析 Cookie：通过 Vercel Analytics、Google Analytics 等了解访问与互动统计",
          "广告 Cookie：Google AdSense 等合作伙伴用于投放相关广告",
        ],
      },
      {
        title: "管理 Cookie",
        paragraphs: [
          "您可通过浏览器设置阻止或删除 Cookie。阻止 Cookie 可能影响部分功能。个性化广告可通过 Google 广告设置或 aboutads.info 管理。",
        ],
      },
    ],
  },
  changelog: {
    metaTitle: "更新日志",
    metaDescription: "WaiHub 产品更新日志——新工具、功能改进与内容更新记录。",
    title: "更新日志",
    lastUpdated: "最后更新：2026 年 6 月 20 日",
    sections: [
      {
        title: "2026 年 6 月",
        bullets: [
          "工具增至 14 个：新增 HTML 编解码、文本对比、Cron 解析、颜色转换",
          "新增 8 个 SEO 着陆页（URL、时间戳、JWT、MD5/SHA256）",
          "配置 OG 分享图、favicon 套装与品牌 Logo",
          "工具工作流链接、JWT 算法说明、URL Query 表格、正则快捷模板",
          "About 页增强运营者与内容更新说明（EEAT）",
        ],
      },
      {
        title: "2026 年 5 月",
        bullets: [
          "上线密码生成器、二维码生成器、哈希生成器",
          "新增 URL 编解码、时间戳转换、UUID 生成、JWT 解码工具",
          "支持 English、简体中文、日本語 三语",
        ],
      },
      {
        title: "2026 年 4 月",
        bullets: [
          "WaiHub 正式上线，首批 JSON 格式化与 Base64 工具",
          "发布隐私政策与服务条款",
        ],
      },
    ],
  },
}

export const legalEn: LegalPagesMessages = {
  privacy: {
    metaTitle: "Privacy Policy",
    metaDescription: "WaiHub privacy policy — data collection, cookies, and third-party advertising.",
    title: "Privacy Policy",
    lastUpdated: "Last updated: April 20, 2026",
    contactBefore: "Privacy questions:",
    contactLink: "Contact",
    contactSectionTitle: "Contact",
    sections: [
      {
        title: "Overview",
        paragraphs: [
          'WaiHub ("we", "us") respects your privacy. This policy explains how we collect, use, and protect information when you visit our site.',
        ],
      },
      {
        title: "Tool data processing",
        paragraphs: [
          "Our developer tools (JSON formatter, Base64, etc.) run in your browser. Data you enter is not uploaded to our servers — we cannot access it.",
        ],
      },
      {
        title: "Automatically collected information",
        paragraphs: ["We may collect non-personally identifiable information such as:"],
        bullets: [
          "Access logs (IP address, browser type, pages visited, timestamps)",
          "Anonymous usage statistics via services like Vercel Analytics and Google Analytics",
          "Cookies and similar technologies (see below)",
        ],
      },
      {
        title: "Cookies & third-party ads",
        paragraphs: [
          "We may use third-party advertising such as Google AdSense. Google and its partners may use cookies to serve ads based on your prior visits to this site or others.",
          "Manage personalized ads via Google Ads Settings or learn about opt-out at aboutads.info.",
        ],
      },
      {
        title: "Your rights",
        paragraphs: [
          "Depending on applicable law, you may have rights to access, correct, or delete personal data we hold. Contact us via the Contact page to exercise these rights.",
        ],
      },
      {
        title: "Policy changes",
        paragraphs: [
          "We may update this policy from time to time. Material changes will be posted on this page with an updated date.",
        ],
      },
    ],
  },
  terms: {
    metaTitle: "Terms of Service",
    metaDescription: "WaiHub terms of service and conditions of use.",
    title: "Terms of Service",
    lastUpdated: "Last updated: April 20, 2026",
    contactBefore: "Questions about these Terms: visit our",
    contactLink: "Contact",
    contactAfter: "page.",
    contactSectionTitle: "Contact",
    sections: [
      {
        title: "Acceptance",
        paragraphs: [
          "By accessing or using WaiHub, you agree to these Terms. If you do not agree, do not use the site.",
        ],
      },
      {
        title: "Service description",
        paragraphs: [
          'WaiHub provides free online developer tools on an "as is" basis. We do not guarantee results are accurate or suitable for every use case. We are not liable for direct or indirect damages from use of the tools.',
        ],
      },
      {
        title: "User responsibilities",
        bullets: [
          "Do not use the site for unlawful purposes",
          "Do not attempt to disrupt or unauthorized access to our systems",
          "You are responsible for data you process with the tools",
          "Encoding/decoding tools are for development — do not use to bypass security",
        ],
      },
      {
        title: "Intellectual property",
        paragraphs: [
          "Site design, code, and branding belong to WaiHub. Do not copy or commercially exploit content without permission.",
        ],
      },
      {
        title: "Third-party links & ads",
        paragraphs: [
          "The site may include third-party ads or links. We are not responsible for third-party content or services. Use of third-party services is subject to their terms.",
        ],
      },
      {
        title: "Changes",
        paragraphs: ["We may modify these Terms at any time. Continued use after changes constitutes acceptance."],
      },
    ],
  },
  cookies: {
    metaTitle: "Cookie Policy",
    metaDescription: "WaiHub cookie policy — how we use cookies and how to manage your preferences.",
    title: "Cookie Policy",
    lastUpdated: "Last updated: June 13, 2026",
    sections: [
      {
        title: "What Are Cookies",
        paragraphs: [
          "Cookies are small text files stored in your browser by websites. They remember preferences, analyze usage, or deliver advertisements.",
        ],
      },
      {
        title: "How We Use Cookies",
        paragraphs: ["WaiHub may use the following types of cookies:"],
        bullets: [
          "Essential cookies: required for basic site functionality",
          "Analytics cookies: usage and engagement statistics via Vercel Analytics and Google Analytics",
          "Advertising cookies: Google AdSense and partners for relevant ads",
        ],
      },
      {
        title: "Managing Cookies",
        paragraphs: [
          "You can block or delete cookies through your browser settings. Blocking cookies may affect some features. Manage personalized ads via Google Ad Settings or aboutads.info.",
        ],
      },
    ],
  },
  changelog: {
    metaTitle: "Changelog",
    metaDescription: "WaiHub product changelog — new tools, improvements, and content updates.",
    title: "Changelog",
    lastUpdated: "Last updated: June 20, 2026",
    sections: [
      {
        title: "June 2026",
        bullets: [
          "14 developer tools: added HTML Encoder, Text Diff, Cron Parser, and Color Converter",
          "8 new SEO landing pages (URL encode/decode, timestamps, JWT, MD5/SHA256)",
          "OG share image, favicon pack, and branded header logo",
          "Tool workflow links, JWT algorithm guide, URL query table, regex quick presets",
          "About page EEAT: operator info and content update cadence",
        ],
      },
      {
        title: "May 2026",
        bullets: [
          "Launched Password, QR Code, and Hash generators",
          "Added URL Encoder, Timestamp, UUID, and JWT Decoder tools",
          "English, Chinese, and Japanese language support",
        ],
      },
      {
        title: "April 2026",
        bullets: [
          "WaiHub launch with JSON Formatter and Base64 tools",
          "Published Privacy Policy and Terms of Service",
        ],
      },
    ],
  },
}

export const legalJa: LegalPagesMessages = {
  privacy: {
    metaTitle: "プライバシーポリシー",
    metaDescription: "WaiHub のプライバシーポリシー — データ収集、Cookie、第三者広告について。",
    title: "プライバシーポリシー",
    lastUpdated: "最終更新：2026年4月20日",
    contactBefore: "プライバシーに関するお問い合わせ：",
    contactLink: "お問い合わせ",
    contactSectionTitle: "お問い合わせ",
    sections: [
      {
        title: "概要",
        paragraphs: [
          "WaiHub（当社）はお客様のプライバシーを尊重します。本ポリシーは、当サイト訪問時の情報の収集・利用・保護について説明します。",
        ],
      },
      {
        title: "ツールデータの処理",
        paragraphs: [
          "開発者ツール（JSON 整形、Base64 など）はブラウザ内で実行されます。入力データはサーバーにアップロードされず、当社はアクセスできません。",
        ],
      },
      {
        title: "自動収集される情報",
        paragraphs: ["以下のような非個人識別情報を収集する場合があります："],
        bullets: [
          "アクセスログ（IP アドレス、ブラウザ種類、訪問ページ、タイムスタンプ）",
          "Vercel Analytics、Google Analytics 等による匿名利用統計",
          "Cookie および類似技術（下記参照）",
        ],
      },
      {
        title: "Cookie と第三者広告",
        paragraphs: [
          "Google AdSense 等の第三者広告を使用する場合があります。Google とそのパートナーは Cookie を使用して広告を配信することがあります。",
          "Google 広告設定または aboutads.info でオプトアウトできます。",
        ],
      },
      {
        title: "お客様の権利",
        paragraphs: [
          "適用法に基づき、個人データへのアクセス・訂正・削除を求める権利がある場合があります。お問い合わせページよりご連絡ください。",
        ],
      },
      {
        title: "ポリシーの変更",
        paragraphs: ["本ポリシーは随時更新される場合があります。重要な変更は本ページに掲載します。"],
      },
    ],
  },
  terms: {
    metaTitle: "利用規約",
    metaDescription: "WaiHub 利用規約と使用条件。",
    title: "利用規約",
    lastUpdated: "最終更新：2026年4月20日",
    contactBefore: "本規約に関するお問い合わせ：",
    contactLink: "お問い合わせ",
    contactAfter: "ページをご覧ください。",
    contactSectionTitle: "お問い合わせ",
    sections: [
      {
        title: "規約への同意",
        paragraphs: ["WaiHub の利用により本規約に同意したものとみなします。同意いただけない場合はご利用ください。"],
      },
      {
        title: "サービス内容",
        paragraphs: [
          "WaiHub は無料のオンライン開発者ツールを提供します。現状有姿で提供され、結果の正確性や適合性を保証しません。利用による損害について当社は責任を負いません。",
        ],
      },
      {
        title: "ユーザーの責任",
        bullets: [
          "違法目的での利用禁止",
          "システムへの妨害・不正アクセスの禁止",
          "ツールで処理するデータは自己責任",
          "符号化ツールは開発用途 — セキュリティ回避に使用しない",
        ],
      },
      {
        title: "知的財産",
        paragraphs: ["サイトのデザイン、コード、ブランドは WaiHub に帰属します。無断での複製・商用利用を禁じます。"],
      },
      {
        title: "第三者リンクと広告",
        paragraphs: [
          "第三者の広告やリンクが含まれる場合があります。第三者のコンテンツ・サービスについて当社は責任を負いません。",
        ],
      },
      {
        title: "規約の変更",
        paragraphs: ["本規約は随時変更される場合があります。変更後の利用は同意とみなします。"],
      },
    ],
  },
  cookies: {
    metaTitle: "Cookie ポリシー",
    metaDescription: "WaiHub の Cookie ポリシー — Cookie の使用と設定管理について。",
    title: "Cookie ポリシー",
    lastUpdated: "最終更新：2026年6月13日",
    sections: [
      {
        title: "Cookie とは",
        paragraphs: [
          "Cookie はウェブサイトがブラウザに保存する小さなテキストファイルです。設定の記憶、利用分析、広告配信に使用されます。",
        ],
      },
      {
        title: "Cookie の使用",
        paragraphs: ["WaiHub は以下のタイプの Cookie を使用する場合があります："],
        bullets: [
          "必須 Cookie：サイトの基本機能に必要",
          "分析 Cookie：Vercel Analytics、Google Analytics 等によるアクセス・操作統計",
          "広告 Cookie：Google AdSense 等による関連広告",
        ],
      },
      {
        title: "Cookie の管理",
        paragraphs: [
          "ブラウザ設定で Cookie をブロックまたは削除できます。パーソナライズ広告は Google 広告設定または aboutads.info で管理できます。",
        ],
      },
    ],
  },
  changelog: {
    metaTitle: "更新履歴",
    metaDescription: "WaiHub の更新履歴 — 新ツール、機能改善、コンテンツ更新。",
    title: "更新履歴",
    lastUpdated: "最終更新：2026年6月20日",
    sections: [
      {
        title: "2026年6月",
        bullets: [
          "ツール14個：HTML エンコード、テキスト Diff、Cron パーサー、カラー変換を追加",
          "SEO ランディング8ページ（URL、タイムスタンプ、JWT、MD5/SHA256）",
          "OG 画像、favicon、ブランドロゴを設定",
          "ワークフローリンク、JWT ガイド、URL Query 表、正規表現クイックプリセット",
          "About ページに運営者情報と更新方針を追加",
        ],
      },
      {
        title: "2026年5月",
        bullets: [
          "パスワード、QRコード、ハッシュジェネレーターを公開",
          "URL、タイムスタンプ、UUID、JWT デコーダーを追加",
          "English、中文、日本語 の3言語サポート",
        ],
      },
      {
        title: "2026年4月",
        bullets: [
          "WaiHub 正式公開 — JSON フォーマッターと Base64 ツール",
          "プライバシーポリシーと利用規約を公開",
        ],
      },
    ],
  },
}
