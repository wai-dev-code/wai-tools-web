import type { ToolPageSeoContent } from "@/lib/i18n/messages/tool-page-content-types"

const en: ToolPageSeoContent = {
  whatIs: {
    title: "What is Text Diff?",
    paragraphs: [
      "Text Diff is an online tool that compares two text blocks line by line and highlights additions, removals, and changes. It helps developers quickly spot differences between code versions, config files, and documentation drafts.",
      "Unlike heavyweight desktop diff tools, a browser-based line diff is instant and requires no installation. Paste two versions side by side and review the colored output immediately.",
      "WaiHub's Text Diff runs entirely in your browser — sensitive source code and configuration never leave your device.",
    ],
    benefits: [
      "Line-by-line diff highlighting",
      "Added, removed, changed stats",
      "Side-by-side input panels",
      "Color-coded legend",
      "No installation required",
      "Privacy-first browser processing",
    ],
  },
  features: {
    title: "Features",
    items: [
      "Compare two text blocks",
      "Line-by-line diff algorithm",
      "Green/red/yellow highlighting",
      "Diff statistics summary",
      "Dual input textareas",
      "Clear both sides at once",
      "Monospace diff output",
      "Works with code and configs",
      "Runs locally in browser",
      "No server upload",
    ],
  },
  howToUse: {
    title: "How To Use",
    steps: [
      { title: "Paste original text", description: "Enter the baseline text in the left panel." },
      { title: "Paste comparison text", description: "Enter the updated text in the right panel." },
      { title: "Review highlighted diff", description: "Scroll the diff output to see added, removed, and changed lines." },
      { title: "Check statistics", description: "Use the stats bar to see counts for each diff type." },
    ],
  },
  examples: {
    title: "Examples",
    inputLabel: "Before",
    outputLabel: "After",
    items: [
      { label: "Config change", input: "port=3000\nhost=localhost", output: "port=8080\nhost=localhost" },
      { label: "Code edit", input: "const x = 1", output: "const x = 2" },
    ],
  },
  faq: [
    { q: "Is this text diff free?", a: "Yes. Completely free with no signup." },
    { q: "Is my data uploaded?", a: "No. Diffing runs entirely in your browser." },
    { q: "Word-level diff?", a: "This tool compares line by line — ideal for code and config files." },
    { q: "Can I use it commercially?", a: "Yes. Free for personal and commercial use." },
    { q: "How are blank lines handled?", a: "Blank lines are treated as individual lines in the comparison." },
  ],
  relatedToolSlugs: ["json-formatter", "regex-tester", "html-encoder", "hash-generator", "base64"],
}

const zh: ToolPageSeoContent = {
  whatIs: {
    title: "什么是文本对比？",
    paragraphs: [
      "文本对比工具逐行比较两段文本，高亮显示新增、删除与修改行，帮助开发者快速发现代码版本、配置文件与文档草稿之间的差异。",
      "相比重量级桌面 diff 工具，浏览器端逐行对比即时可用、无需安装。粘贴两个版本即可立即查看彩色输出。",
      "WaiHub 文本对比完全在浏览器中运行，敏感源码与配置不会离开你的设备。",
    ],
    benefits: [
      "逐行 diff 高亮",
      "新增/删除/修改统计",
      "并排输入面板",
      "颜色图例说明",
      "无需安装",
      "隐私优先的浏览器处理",
    ],
  },
  features: {
    title: "功能特性",
    items: [
      "对比两段文本",
      "逐行 diff 算法",
      "绿/红/黄高亮",
      "差异统计摘要",
      "双栏输入文本框",
      "一键清空两侧",
      "等宽字体 diff 输出",
      "适用于代码与配置",
      "浏览器本地运行",
      "不上传服务器",
    ],
  },
  howToUse: {
    title: "使用方法",
    steps: [
      { title: "粘贴原始文本", description: "在左侧面板输入基准文本。" },
      { title: "粘贴对比文本", description: "在右侧面板输入更新后的文本。" },
      { title: "查看高亮差异", description: "滚动 diff 输出查看新增、删除与修改行。" },
      { title: "查看统计", description: "通过统计栏了解各类差异行数。" },
    ],
  },
  examples: {
    title: "示例",
    inputLabel: "修改前",
    outputLabel: "修改后",
    items: [
      { label: "配置变更", input: "port=3000\nhost=localhost", output: "port=8080\nhost=localhost" },
      { label: "代码编辑", input: "const x = 1", output: "const x = 2" },
    ],
  },
  faq: [
    { q: "文本对比免费吗？", a: "是的，完全免费，无需注册。" },
    { q: "数据会上传吗？", a: "不会，对比完全在浏览器内完成。" },
    { q: "支持单词级 diff 吗？", a: "当前为逐行对比，适合代码与配置文件。" },
    { q: "可以商用吗？", a: "可以，个人和商业用途均免费。" },
    { q: "空行如何处理？", a: "空行作为独立行参与对比。" },
  ],
  relatedToolSlugs: ["json-formatter", "regex-tester", "html-encoder", "hash-generator", "base64"],
}

const ja: ToolPageSeoContent = {
  whatIs: {
    title: "テキスト差分とは？",
    paragraphs: [
      "テキスト差分は 2 つのテキストを行単位で比較し、追加・削除・変更をハイライト表示するオンラインツールです。コード版、設定ファイル、ドキュメント草案の差分確認に便利。",
      "デスクトップの diff ツールと違い、ブラウザベースなら即座に使え、インストール不要。2 つの版を貼り付けるだけで色分け出力を確認。",
      "WaiHub のテキスト差分はすべてブラウザ内で実行。機密ソースコードや設定はデバイスから出ません。",
    ],
    benefits: [
      "行単位の差分ハイライト",
      "追加/削除/変更の統計",
      "並列入力パネル",
      "色分け凡例",
      "インストール不要",
      "プライバシー優先のブラウザ処理",
    ],
  },
  features: {
    title: "機能",
    items: [
      "2 つのテキストを比較",
      "行単位 diff アルゴリズム",
      "緑/赤/黄のハイライト",
      "差分統計サマリー",
      "デュアル入力テキストエリア",
      "両側を一括クリア",
      "等幅フォントの diff 出力",
      "コード・設定に対応",
      "ブラウザ内ローカル動作",
      "サーバー非送信",
    ],
  },
  howToUse: {
    title: "使い方",
    steps: [
      { title: "元テキストを貼り付け", description: "左パネルにベースラインのテキストを入力。" },
      { title: "比較テキストを貼り付け", description: "右パネルに更新後のテキストを入力。" },
      { title: "ハイライト差分を確認", description: "diff 出力をスクロールして追加・削除・変更行を確認。" },
      { title: "統計を確認", description: "統計バーで各タイプの行数を確認。" },
    ],
  },
  examples: {
    title: "例",
    inputLabel: "変更前",
    outputLabel: "変更後",
    items: [
      { label: "設定変更", input: "port=3000\nhost=localhost", output: "port=8080\nhost=localhost" },
      { label: "コード編集", input: "const x = 1", output: "const x = 2" },
    ],
  },
  faq: [
    { q: "このテキスト差分は無料ですか？", a: "はい。登録不要、完全無料です。" },
    { q: "データはアップロードされますか？", a: "いいえ。すべてブラウザ内で処理されます。" },
    { q: "単語単位の差分は？", a: "行単位の比較です。コードや設定ファイルに最適。" },
    { q: "商用利用できますか？", a: "はい。個人・商用ともに無料です。" },
    { q: "空行はどう扱われますか？", a: "空行も独立した行として比較されます。" },
  ],
  relatedToolSlugs: ["json-formatter", "regex-tester", "html-encoder", "hash-generator", "base64"],
}

export const textDiffContent = { en, zh, ja }
