import type { Messages } from "@/lib/i18n/messages/types"
import { jsonToolJa } from "@/lib/i18n/messages/json-tool-messages"
import { base64ToolJa } from "@/lib/i18n/messages/base64-tool-messages"
import { urlToolJa, urlEncoderPageJa } from "@/lib/i18n/messages/url-tool-messages"
import { jwtToolJa, jwtDecoderPageJa } from "@/lib/i18n/messages/jwt-tool-messages"
import { timestampToolJa, timestampPageJa } from "@/lib/i18n/messages/timestamp-tool-messages"
import { uuidToolJa, uuidGeneratorPageJa } from "@/lib/i18n/messages/uuid-tool-messages"
import { regexToolJa, regexTesterPageJa } from "@/lib/i18n/messages/regex-tool-messages"
import {
  passwordToolJa,
  passwordGeneratorPageJa,
} from "@/lib/i18n/messages/password-tool-messages"
import { qrToolJa, qrCodeGeneratorPageJa } from "@/lib/i18n/messages/qr-tool-messages"
import { hashToolJa, hashGeneratorPageJa } from "@/lib/i18n/messages/hash-tool-messages"
import {
  htmlEncoderToolJa,
  htmlEncoderPageJa,
} from "@/lib/i18n/messages/html-encoder-tool-messages"
import { textDiffToolJa, textDiffPageJa } from "@/lib/i18n/messages/text-diff-tool-messages"
import {
  cronParserToolJa,
  cronParserPageJa,
} from "@/lib/i18n/messages/cron-parser-tool-messages"
import {
  colorConverterToolJa,
  colorConverterPageJa,
} from "@/lib/i18n/messages/color-converter-tool-messages"
import { staticJa } from "@/lib/i18n/messages/static-pages"
import { blogPostsBatch2Ja } from "@/lib/i18n/messages/blog-posts-batch2-ja"
import { legalJa } from "@/lib/i18n/messages/legal-pages"
import { seoJa } from "@/lib/i18n/messages/seo-pages"

const ja: Messages = {
  locale: "ja",
  common: {
    home: "ホーム",
    tools: "ツール",
    blog: "ブログ",
    about: "概要",
    openTools: "ツールを開く",
    footerTagline: "WaiHub — 開発者向け無料ツールハブ。ブラウザ内実行、プライバシー重視。",
    footerTools: "ツール",
    footerResources: "リソース",
    footerLegal: "法的情報",
    allTools: "すべてのツール",
    jsonFormatter: "JSON フォーマッター",
    base64: "Base64 変換",
    privacy: "プライバシーポリシー",
    terms: "利用規約",
    cookies: "Cookie ポリシー",
    changelog: "更新履歴",
    contact: "お問い合わせ",
    localRun: "ブラウザ内実行",
    free: "無料",
    instructions: "使い方",
    faq: "よくある質問",
    relatedTools: "関連ツール",
    copyright: "All rights reserved.",
    notFoundMessage: "ページが見つかりません",
    notFoundHome: "ホームへ",
    notFoundBrowseTools: "ツール一覧",
    adLabel: "広告",
    adDisclaimer: "広告は第三者によって配信されます。ツールに入力したデータが広告主に共有されることはありません。",
    workflowNext: "次のステップ",
    commandPaletteTitle: "クイック検索",
    commandPalettePlaceholder: "ツールを検索…",
    commandPaletteRecent: "最近",
    commandPaletteAllTools: "すべてのツール",
    commandPaletteShortcut: "⌘K",
    openCommandPalette: "ツールを検索",
  },
  workspace: {
    sidebarExpand: "サイドバーを展開",
    sidebarCollapse: "サイドバーを折りたたむ",
    scaleCompact: "コンパクト",
    scaleComfortable: "標準",
    scaleLarge: "大",
    focusMode: "集中モード",
    exitFocus: "集中モードを終了",
    panelFullscreen: "パネルを全画面",
    panelExitFullscreen: "全画面を終了",
    reset: "レイアウトをリセット",
    zoomIn: "作業領域を拡大",
    zoomOut: "作業領域を縮小",
    workspaceSize: "作業領域サイズ",
    workspaceHint: "エディタの高さを調整",
  },
  home: {
    metaTitle: "WaiHub - 開発者ツール Hub",
    metaDescription:
      "無料の開発者ツール Hub：JSON、Base64、URL、JWT、UUID、正規表現、ハッシュ、QR など 10 種。ブラウザ内処理、プライバシー優先、登録不要。",
    title: "開発者ツール Hub",
    subtitle:
      "{n} 種類のツールを一箇所で — JSON・エンコード・JWT・Regex など。ブラウザ内で処理し、サーバーに送信しません。English · 中文 · 日本語",
    blogSectionTitle: "チュートリアルとヒント",
    blogViewAll: "記事一覧へ",
    blogSectionSubtitle: "各ツールのガイド、チュートリアル、ベストプラクティス。",
    heroBadge: "開発者ツール · プライバシー優先",
    heroCta: "すべてのツールを見る",
    heroCtaSecondary: "ブログを読む",
    toolsSectionTitle: "必要なツールが揃う",
    toolsSectionSubtitle: "検索・フィルターですぐに開ける — 処理はすべてブラウザ内で完結。",
    stats: [
      { value: "14", label: "無料開発者ツール" },
      { value: "3", label: "対応言語" },
      { value: "0", label: "登録が必要" },
      { value: "100%", label: "ブラウザ内処理" },
    ],
    faqSubtitle: "料金、プライバシー、使い方に関するよくある質問。",
    searchPlaceholder: "ツールを検索（JSON、JWT、UUID など）",
    searchTypewriterPrefix: "ツールを検索：",
    searchTypewriterHints: ["JSON", "JWT", "UUID", "Base64", "正規表現", "ハッシュ", "タイムスタンプ"],
    categoryAll: "すべて",
    useNow: "今すぐ使う →",
    noResults: "該当するツールがありません",
    toolsCount: "{n} 件のツール",
    viewAll: "一覧を見る",
    faqTitle: "よくある質問",
    faqs: [
      { q: "無料で使えますか？", a: "はい。すべてのツールが無料で、登録も不要です。" },
      { q: "データは安全ですか？", a: "ツールはブラウザ内で動作し、入力内容は通常サーバーに送信されません。本番の秘密鍵や Token は信頼できないサイトに貼り付けないでください。" },
      { q: "対応ブラウザは？", a: "Chrome、Firefox、Safari、Edge の最新版（デスクトップ・モバイル）。" },
      { q: "フィードバックの方法は？", a: "お問い合わせページまたはメールでご連絡ください。" },
      { q: "アカウント登録は必要？", a: "不要です。すべてのツールは登録・ログインなしで即座に利用できます。" },
      { q: "商用利用できますか？", a: "はい。個人・商用の開発作業に制限なく無料で利用できます。" },
      { q: "対応言語は？", a: "English、简体中文、日本語 の 3 言語をサポートしています。" },
      { q: "ツールは何種類？", a: "JSON、エンコード、セキュリティ、API デバッグをカバーする 10 種類のコアツールを提供。" },
      { q: "ファイルサイズ制限は？", a: "ほとんどのツールは最大 5 MB まで対応。大きなファイルはパフォーマンスのためリアルタイム分析を一時停止します。" },
      { q: "各ツールの使い方はどこで学べる？", a: "各ツールページに完全ガイド、手順、例、FAQ が含まれています。" },
    ],
    whatIsTitle: "WaiHub とは？",
    whatIsParagraphs: [
      "WaiHub は、開発者向けの無料オンラインツールプラットフォームで、必須ユーティリティを一箇所に集約しています。JSON 整形、Base64 エンコード、JWT デコード、正規表現テストなど、API デバッグ、データ処理、日常のコーディングタスクをソフトウェアのインストールやアカウント作成なしで解決できます。",
      "リンクを並べるだけの従来のツール集約サイトと異なり、WaiHub の各ツールページには詳細ガイド、手順説明、実例、FAQ が含まれています。概念を学ぶときも本番問題を解くときも、各ページは単なるボタンではなく有用なリソースです。",
      "プライバシーは核心原則：すべてのツールは JavaScript でブラウザ内で完全に動作します。JSON、トークン、パスワード、ファイルはローカルで処理され、WaiHub サーバーにアップロードされません。English、中文、日本語 をサポートし、世界中の開発者向けに設計されています。",
    ],
    whyChooseTitle: "WaiHub を選ぶ理由",
    whyChooseItems: [
      { title: "高速", description: "入力と同時に結果表示。サーバー応答を待つ必要なし — すべてブラウザ内でローカル実行。" },
      { title: "セキュア", description: "ブラウザベースの処理で機密データはデバイス上に保持。アップロード・サーバー保存なし。" },
      { title: "プライバシー優先", description: "ツール入力を収集しません。JSON、JWT、パスワードはすべてローカル処理。" },
      { title: "無料", description: "10 種類すべて完全無料。登録不要、プレミアム層なし、利用制限なし。" },
      { title: "ブラウザベース", description: "デスクトップ、タブレット、モバイルの最新ブラウザで動作。インストール・プラグイン不要。" },
    ],
    useCasesTitle: "よくある利用シーン",
    useCasesItems: [
      { title: "API 開発", description: "JSON レスポンスの整形、JWT デコード、API 統合時の認証フローのデバッグ。" },
      { title: "フロント・バックエンド連携", description: "URL エンコード、タイムスタンプ変換、データ形式の検証。" },
      { title: "データ処理", description: "Base64 変換、Query 文字列解析、ハッシュ計算、JSON/YAML/XML 変換。" },
      { title: "JWT 解析", description: "JWT Header と Payload のデコード、有効期限の確認、OAuth デバッグ。" },
      { title: "JSON 整形", description: "圧縮 API レスポンスの美化、構文検証、ツリービューでのネスト探索。" },
      { title: "タイムスタンプ変換", description: "Unix タイムスタンプと日付の相互変換。ログ分析・タイムゾーンデバッグに必須。" },
      { title: "QR コード生成", description: "URL、WiFi 認証情報、連絡先のスキャン可能 QR コードをイベント・マーケティング用に作成。" },
    ],
  },
  toolsPage: {
    metaTitle: "すべてのツール",
    metaDescription: "WaiHub の無料開発者ツール 10 種を一覧。JSON、Base64、JWT、正規表現など。ブラウザ内処理、プライバシー優先。",
    title: "すべてのツール",
    subtitle: "{n} 件の無料ツール — ブラウザ内で実行",
    searchPlaceholder: "ツールを検索...",
    noResults: "該当なし",
  },
  categories: {
    json: "JSON ツール",
    encoding: "エンコードツール",
    dev: "開発ユーティリティ",
    api: "API ツール",
  },
  tools: {
    jsonFormatter: {
      name: "JSON フォーマッター",
      short: "JSON の整形・検証・美化",
      desc: "JSON の整形、圧縮、検証。シンタックスハイライトとエラー表示対応",
    },
    base64: {
      name: "Base64 ツール",
      short: "Base64 開発者向けツールキット",
      desc: "エンコード/デコード、ファイル、形式変換、画像プレビュー — 4 モジュール",
    },
    urlEncoder: {
      name: "URL エンコード/デコード",
      short: "URL 変換と Query 解析",
      desc: "URL/URI のエンコード・デコード、Query 文字列の解析と生成",
    },
    jwtDecoder: {
      name: "JWT デコーダー",
      short: "JSON Web Token を解析",
      desc: "JWT Header/Payload を解析し、exp/iat 状態をブラウザ内で表示",
    },
    timestamp: {
      name: "タイムスタンプ変換",
      short: "Unix タイムスタンプ全機能",
      desc: "Unix タイムスタンプと日時の相互変換 — 秒/ミリ秒/マイクロ秒/ナノ秒",
    },
    uuidGenerator: {
      name: "UUID ジェネレーター",
      short: "UUID v4 生成とエクスポート",
      desc: "UUID v4 一括生成 — 大文字、ハイフンなし、波括弧、コピーとダウンロード",
    },
    passwordGenerator: {
      name: "パスワード生成",
      short: "オンライン強力パスワード生成",
      desc: "無料パスワード生成：長さ・文字種・除外、強度表示、ワンクリックコピー",
    },
    qrCodeGenerator: {
      name: "QRコード生成",
      short: "URL・WiFi 対応 QR メーカー",
      desc: "無料 QR コード生成：テキスト・URL・メール・電話・WiFi、PNG ダウンロード",
    },
    hashGenerator: {
      name: "ハッシュ生成",
      short: "MD5 / SHA256 計算",
      desc: "MD5 ハッシュと SHA-1/SHA-256/SHA-512 を同時計算、コピー対応",
    },
    regexTester: {
      name: "正規表現テスター",
      short: "正規表現のテストとデバッグ",
      desc: "リアルタイムでマッチをハイライト、キャプチャグループを確認 — ブラウザ内で実行",
    },
    htmlEncoder: {
      name: "HTML エンコード/デコード",
      short: "HTML エンティティ変換",
      desc: "HTML エンティティのエンコード・デコード、名前付き・数値エンティティ対応",
    },
    textDiff: {
      name: "テキスト差分",
      short: "行単位テキスト比較",
      desc: "2 つのテキストを行単位で比較、追加・削除・変更を色分け表示",
    },
    cronParser: {
      name: "Cron パーサー",
      short: "Cron 式の解読",
      desc: "標準 5 フィールド Cron 式を解析し、フィールド分解と読みやすい要約を表示",
    },
    colorConverter: {
      name: "カラー変換",
      short: "HEX/RGB/HSL 変換",
      desc: "HEX・RGB・HSL 形式間で色を変換、ライブプレビューとワンクリックコピー",
    },
  },
  jsonFormatterPage: {
    metaTitle: "JSON フォーマッター - 無料オンラインツール",
    metaDescription: "JSON の整形・圧縮・検証。ツリービュー、シンタックスハイライト、エラー位置表示。",
    instructions: [
      "左右 2 ペイン：左にソース、右に結果。比較と繰り返し操作がしやすいレイアウト。",
      "キーソート、ツリービュー、JSONPath、YAML 変換、コピー・保存に対応。",
    ],
    faq: [
      { q: "日本語は文字化けしますか？", a: "いいえ。UTF-8 を正しく処理します。" },
      { q: "JSON と XML の相互変換は？", a: "JSON を貼り付けて XML へ、または XML を貼り付けて JSON へ。" },
      { q: "ツリービューの使い方は？", a: "ツリーモードに切り替え、ノードの矢印または一括折りたたみボタンを使用。" },
    ],
  },
  base64Page: {
    metaTitle: "Base64 変換 - 無料オンラインツール",
    metaDescription: "Base64 エンコード/デコード、ファイル、Hex/Data URI 変換、画像プレビュー。",
    instructions: [
      "4 モジュール：コア変換、ファイル、形式変換、ユーティリティ。左が入力、右が読み取り専用の結果。",
      "自動判別、URL 安全 Base64、ファイルアップロード、画像プレビューに対応。",
    ],
    faq: [
      { q: "Base64 は暗号化ですか？", a: "いいえ。エンコードのみで、誰でもデコードできます。" },
      { q: "URL 安全 Base64 とは？", a: "+ / の代わりに - _ を使い、URL パラメータ向け。" },
      { q: "画像のプレビュー方法は？", a: "「ファイル」モジュールで Base64 画像を貼り付けまたはアップロード。" },
    ],
  },
  urlEncoderPage: urlEncoderPageJa,
  jwtDecoderPage: jwtDecoderPageJa,
  timestampPage: timestampPageJa,
  uuidGeneratorPage: uuidGeneratorPageJa,
  passwordGeneratorPage: passwordGeneratorPageJa,
  qrCodeGeneratorPage: qrCodeGeneratorPageJa,
  hashGeneratorPage: hashGeneratorPageJa,
  regexTesterPage: regexTesterPageJa,
  htmlEncoderPage: htmlEncoderPageJa,
  textDiffPage: textDiffPageJa,
  cronParserPage: cronParserPageJa,
  colorConverterPage: colorConverterPageJa,
  seo: seoJa,
  jsonTool: jsonToolJa,
  base64Tool: base64ToolJa,
  urlTool: urlToolJa,
  jwtTool: jwtToolJa,
  timestampTool: timestampToolJa,
  uuidTool: uuidToolJa,
  passwordTool: passwordToolJa,
  qrTool: qrToolJa,
  hashTool: hashToolJa,
  regexTool: regexToolJa,
  htmlEncoderTool: htmlEncoderToolJa,
  textDiffTool: textDiffToolJa,
  cronParserTool: cronParserToolJa,
  colorConverterTool: colorConverterToolJa,
  aboutPage: staticJa.about,
  contactPage: staticJa.contact,
  blogPage: {
    ...staticJa.blog,
    posts: {
      ...staticJa.blog.posts,
      ...blogPostsBatch2Ja,
    },
  },
  theme: staticJa.theme,
  errors: staticJa.errors,
  legal: legalJa,
}

export default ja
