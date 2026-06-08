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
import { staticJa } from "@/lib/i18n/messages/static-pages"
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
      "無料の開発者ツール Hub：JSON、Base64、URL、JWT、UUID、タイムスタンプ、正規表現テスターなど。ブラウザ内で処理。English・中文・日本語対応、登録不要。",
    title: "開発者ツール Hub",
    subtitle:
      "{n} 種類のツールを一箇所で — JSON・エンコード・JWT・Regex など。ブラウザ内で処理し、サーバーに送信しません。English · 中文 · 日本語",
    blogSectionTitle: "チュートリアルとヒント",
    blogViewAll: "記事一覧へ",
    searchPlaceholder: "ツールを検索（JSON、JWT、UUID など）",
    categoryAll: "すべて",
    useNow: "今すぐ使う →",
    noResults: "該当するツールがありません",
    toolsCount: "{n} 件のツール",
    viewAll: "一覧を見る",
    faqTitle: "よくある質問",
    faqs: [
      { q: "無料で使えますか？", a: "はい。すべてのツールが無料で、登録も不要です。" },
      { q: "データは安全ですか？", a: "ツールはブラウザ内で動作し、入力内容は通常サーバーに送信されません。本番の秘密鍵や Token は信頼できないサイトに貼り付けないでください。" },
      { q: "対応ブラウザは？", a: "Chrome、Firefox、Safari、Edge の最新版。" },
      { q: "フィードバックの方法は？", a: "お問い合わせページまたはメールでご連絡ください。" },
    ],
  },
  toolsPage: {
    metaTitle: "すべてのツール",
    metaDescription: "WaiHub の無料開発者ツール一覧。",
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
      short: "安全なランダムパスワード",
      desc: "長さ・文字種・除外文字を指定、強度表示、ワンクリックコピー",
    },
    regexTester: {
      name: "正規表現テスター",
      short: "正規表現のテストとデバッグ",
      desc: "リアルタイムでマッチをハイライト、キャプチャグループを確認 — ブラウザ内で実行",
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
  regexTesterPage: regexTesterPageJa,
  seo: seoJa,
  jsonTool: jsonToolJa,
  base64Tool: base64ToolJa,
  urlTool: urlToolJa,
  jwtTool: jwtToolJa,
  timestampTool: timestampToolJa,
  uuidTool: uuidToolJa,
  passwordTool: passwordToolJa,
  regexTool: regexToolJa,
  aboutPage: staticJa.about,
  contactPage: staticJa.contact,
  blogPage: staticJa.blog,
  theme: staticJa.theme,
  errors: staticJa.errors,
  legal: legalJa,
}

export default ja
