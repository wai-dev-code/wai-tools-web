import type { ToolPageSeoContent } from "@/lib/i18n/messages/tool-page-content-types"

const en: ToolPageSeoContent = {
  whatIs: {
    title: "What is Color Converter?",
    paragraphs: [
      "Color Converter translates colors between HEX, RGB, and HSL formats with a live preview swatch. Web and UI developers constantly switch between these formats when writing CSS, configuring design tokens, and debugging themes.",
      "HEX is compact for stylesheets, RGB is intuitive for image processing, and HSL makes hue/saturation/lightness adjustments easier. A converter eliminates manual math and copy-paste errors.",
      "WaiHub's Color Converter syncs all three formats instantly as you type and shows a real-time preview — all processing happens locally in your browser.",
    ],
    benefits: [
      "HEX ↔ RGB ↔ HSL conversion",
      "Live color preview swatch",
      "Edit any format, others sync",
      "One-click copy per format",
      "Supports shorthand HEX",
      "Privacy-first browser processing",
    ],
  },
  features: {
    title: "Features",
    items: [
      "HEX to RGB conversion",
      "RGB to HSL conversion",
      "HSL to HEX conversion",
      "Live preview swatch",
      "Bidirectional sync on edit",
      "Copy HEX, RGB, or HSL",
      "Shorthand HEX support (#f00)",
      "Invalid format feedback",
      "Monospace color values",
      "Runs locally in browser",
    ],
  },
  howToUse: {
    title: "How To Use",
    steps: [
      { title: "Enter a color", description: "Type a value in HEX, RGB, or HSL — any format works as the starting point." },
      { title: "Review synced values", description: "The other two formats update automatically to match." },
      { title: "Check the preview", description: "The preview swatch shows the current color at a glance." },
      { title: "Copy the format you need", description: "Click copy next to HEX, RGB, or HSL to grab the value for your CSS." },
    ],
  },
  examples: {
    title: "Examples",
    inputLabel: "HEX",
    outputLabel: "RGB / HSL",
    items: [
      { label: "Blue", input: "#3b82f6", output: "rgb(59, 130, 246) / hsl(217, 91%, 60%)" },
      { label: "Red shorthand", input: "#f00", output: "rgb(255, 0, 0) / hsl(0, 100%, 50%)" },
    ],
  },
  faq: [
    { q: "Is this color converter free?", a: "Yes. Completely free with no signup." },
    { q: "Short HEX like #f00?", a: "Yes — shorthand HEX is expanded automatically." },
    { q: "Alpha channel?", a: "Opaque colors only in this version (no alpha)." },
    { q: "Is my data uploaded?", a: "No. Conversion runs entirely in your browser." },
    { q: "Can I use it commercially?", a: "Yes. Free for personal and commercial use." },
  ],
  relatedToolSlugs: ["json-formatter", "base64", "url-encoder", "hash-generator", "regex-tester"],
}

const zh: ToolPageSeoContent = {
  whatIs: {
    title: "什么是颜色转换器？",
    paragraphs: [
      "颜色转换器在 HEX、RGB、HSL 格式间互转，并提供实时预览色块。Web 与 UI 开发者在编写 CSS、配置设计令牌和调试主题时经常需要在各格式间切换。",
      "HEX 适合样式表，RGB 直观易懂，HSL 便于调整色相/饱和度/亮度。转换器可消除手动计算与复制粘贴错误。",
      "WaiHub 颜色转换器在输入时即时同步三种格式并显示实时预览，全部在浏览器本地处理。",
    ],
    benefits: [
      "HEX ↔ RGB ↔ HSL 互转",
      "实时颜色预览色块",
      "编辑任一格式自动同步",
      "各格式一键复制",
      "支持简写 HEX",
      "隐私优先的浏览器处理",
    ],
  },
  features: {
    title: "功能特性",
    items: [
      "HEX 转 RGB",
      "RGB 转 HSL",
      "HSL 转 HEX",
      "实时预览色块",
      "编辑时双向同步",
      "复制 HEX/RGB/HSL",
      "简写 HEX 支持（#f00）",
      "无效格式反馈",
      "等宽颜色值显示",
      "浏览器本地运行",
    ],
  },
  howToUse: {
    title: "使用方法",
    steps: [
      { title: "输入颜色", description: "在 HEX、RGB 或 HSL 任一字段输入颜色值。" },
      { title: "查看同步值", description: "另外两种格式自动更新以匹配。" },
      { title: "检查预览", description: "预览色块直观显示当前颜色。" },
      { title: "复制所需格式", description: "点击 HEX、RGB 或 HSL 旁的复制按钮获取 CSS 值。" },
    ],
  },
  examples: {
    title: "示例",
    inputLabel: "HEX",
    outputLabel: "RGB / HSL",
    items: [
      { label: "蓝色", input: "#3b82f6", output: "rgb(59, 130, 246) / hsl(217, 91%, 60%)" },
      { label: "红色简写", input: "#f00", output: "rgb(255, 0, 0) / hsl(0, 100%, 50%)" },
    ],
  },
  faq: [
    { q: "颜色转换器免费吗？", a: "是的，完全免费，无需注册。" },
    { q: "支持 3 位简写 HEX 吗？", a: "支持，如 #f00 会自动展开。" },
    { q: "支持 alpha 通道吗？", a: "当前版本仅支持不透明颜色。" },
    { q: "数据会上传吗？", a: "不会，转换完全在浏览器内完成。" },
    { q: "可以商用吗？", a: "可以，个人和商业用途均免费。" },
  ],
  relatedToolSlugs: ["json-formatter", "base64", "url-encoder", "hash-generator", "regex-tester"],
}

const ja: ToolPageSeoContent = {
  whatIs: {
    title: "カラー変換とは？",
    paragraphs: [
      "カラー変換は HEX、RGB、HSL 形式間で色を変換し、ライブプレビュースウォッチを表示します。Web/UI 開発者は CSS 記述、デザイントークン設定、テーマデバッグでこれらの形式を頻繁に切り替えます。",
      "HEX はスタイルシートにコンパクト、RGB は直感的、HSL は色相/彩度/明度の調整が容易。コンバーターで手計算とコピペミスを排除。",
      "WaiHub のカラー変換は入力時に 3 形式を即時同期しリアルタイムプレビューを表示。すべてブラウザ内でローカル処理。",
    ],
    benefits: [
      "HEX ↔ RGB ↔ HSL 変換",
      "ライブカラープレビュー",
      "任意形式を編集すると他が同期",
      "形式ごとにワンクリックコピー",
      "短縮 HEX 対応",
      "プライバシー優先のブラウザ処理",
    ],
  },
  features: {
    title: "機能",
    items: [
      "HEX から RGB 変換",
      "RGB から HSL 変換",
      "HSL から HEX 変換",
      "ライブプレビュースウォッチ",
      "編集時の双方向同期",
      "HEX/RGB/HSL をコピー",
      "短縮 HEX 対応（#f00）",
      "無効形式のフィードバック",
      "等幅の色値表示",
      "ブラウザ内ローカル動作",
    ],
  },
  howToUse: {
    title: "使い方",
    steps: [
      { title: "色を入力", description: "HEX、RGB、HSL のいずれかに色を入力。" },
      { title: "同期値を確認", description: "他の 2 形式が自動的に一致するよう更新。" },
      { title: "プレビューを確認", description: "プレビュースウォッチで現在の色を一目で確認。" },
      { title: "必要な形式をコピー", description: "HEX、RGB、HSL の横のコピーで CSS 用の値を取得。" },
    ],
  },
  examples: {
    title: "例",
    inputLabel: "HEX",
    outputLabel: "RGB / HSL",
    items: [
      { label: "青", input: "#3b82f6", output: "rgb(59, 130, 246) / hsl(217, 91%, 60%)" },
      { label: "赤の短縮形", input: "#f00", output: "rgb(255, 0, 0) / hsl(0, 100%, 50%)" },
    ],
  },
  faq: [
    { q: "このカラー変換は無料ですか？", a: "はい。登録不要、完全無料です。" },
    { q: "短縮 HEX（#f00）は？", a: "はい。短縮 HEX は自動的に展開されます。" },
    { q: "アルファチャンネルは？", a: "不透明色のみ（アルファなし）。" },
    { q: "データはアップロードされますか？", a: "いいえ。すべてブラウザ内で処理されます。" },
    { q: "商用利用できますか？", a: "はい。個人・商用ともに無料です。" },
  ],
  relatedToolSlugs: ["json-formatter", "base64", "url-encoder", "hash-generator", "regex-tester"],
}

export const colorConverterContent = { en, zh, ja }
