import type { Locale } from "@/lib/i18n/config"
import type { ToolPageSeoContent } from "@/lib/i18n/messages/tool-page-content-types"

const en: ToolPageSeoContent = {
  whatIs: {
    title: "What is JSON Formatter?",
    paragraphs: [
      "JSON Formatter is an online tool that helps developers format, validate, and beautify JSON data. It improves readability, helps identify syntax errors, and simplifies API debugging. Whether you receive a minified API response or need to inspect a configuration file, a formatter turns dense one-line JSON into a structured, indented view that reveals nesting and field names at a glance.",
      "Modern web applications rely on JSON for REST APIs, configuration files, and data exchange between services. Raw JSON from logs or network panels is often compressed without whitespace, making it hard to spot missing commas, wrong types, or unexpected null values. A dedicated formatter saves time during integration testing and incident response.",
      "WaiHub's JSON Formatter runs entirely in your browser. Your data never leaves your device, which matters when debugging responses that contain user information, tokens, or internal identifiers. Combined with validation, minification, tree view, and YAML conversion, it covers the full JSON workflow from inspection to production-ready output.",
    ],
    benefits: [
      "Better readability with customizable indentation",
      "Instant JSON syntax validation with error line hints",
      "Minify JSON for smaller payloads",
      "Tree view for exploring nested structures",
      "YAML and XML conversion for cross-format workflows",
      "No data upload — privacy-first browser processing",
    ],
  },
  features: {
    title: "Features",
    items: [
      "Format JSON instantly with 2- or 4-space indent",
      "Validate JSON syntax and highlight error locations",
      "Minify JSON to remove whitespace",
      "Sort keys ascending or descending",
      "Tree view with expand/collapse controls",
      "Convert between JSON, YAML, and XML",
      "JSONPath search within documents",
      "Copy formatted result with one click",
      "Upload files up to 5 MB",
      "Works locally in browser — no server upload",
    ],
  },
  howToUse: {
    title: "How To Use",
    steps: [
      {
        title: "Paste your JSON content",
        description:
          "Copy JSON from an API response, log file, or configuration into the source panel on the left. You can also upload a .json file or paste YAML/XML for conversion.",
      },
      {
        title: "Click Format",
        description:
          "Press the Format button to beautify your JSON with proper indentation. Use Minify to compress, or Validate to check syntax without changing layout.",
      },
      {
        title: "Review the formatted result",
        description:
          "The result panel on the right shows the output. Switch to tree view to explore nested objects, or use JSONPath to search for specific keys.",
      },
      {
        title: "Copy or download the output",
        description:
          "Click Copy to grab the formatted JSON, or Save to download as a file. Use Sync to Input to send the result back to the source panel for further edits.",
      },
    ],
  },
  examples: {
    title: "Examples",
    inputLabel: "Input",
    outputLabel: "Output",
    items: [
      {
        label: "Basic formatting",
        input: '{"name":"John","age":18,"city":"New York"}',
        output: `{
  "name": "John",
  "age": 18,
  "city": "New York"
}`,
        language: "json",
      },
      {
        label: "Nested object",
        input: '{"user":{"name":"Alice","roles":["admin","editor"]},"active":true}',
        output: `{
  "user": {
    "name": "Alice",
    "roles": ["admin", "editor"]
  },
  "active": true
}`,
        language: "json",
      },
    ],
  },
  faq: [
    {
      q: "Is this JSON formatter free?",
      a: "Yes. WaiHub JSON Formatter is completely free with no signup, no usage limits, and no hidden fees.",
    },
    {
      q: "Is my data uploaded to your servers?",
      a: "No. All processing occurs entirely in your browser. JSON is parsed and formatted locally using JavaScript — nothing is sent to WaiHub servers.",
    },
    {
      q: "Is there a file size limit?",
      a: "Files up to 5 MB are supported. Larger inputs pause real-time analysis to keep the browser responsive.",
    },
    {
      q: "Can I use this on mobile?",
      a: "Yes. The tool works on modern mobile browsers including Chrome, Safari, and Firefox on iOS and Android.",
    },
    {
      q: "Can I use it commercially?",
      a: "Yes. You may use WaiHub tools for personal and commercial development work without restriction.",
    },
    {
      q: "Will Unicode or Chinese characters break after formatting?",
      a: "No. UTF-8 encoding is handled correctly. Chinese, emoji, and other Unicode characters remain intact after formatting.",
    },
  ],
  relatedToolSlugs: ["base64", "url-encoder", "uuid-generator", "jwt-decoder", "hash-generator"],
}

const zh: ToolPageSeoContent = {
  whatIs: {
    title: "什么是 JSON 格式化工具？",
    paragraphs: [
      "JSON 格式化工具是一款帮助开发者格式化、校验和美化 JSON 数据的在线工具。它能提升可读性、帮助定位语法错误，并简化 API 调试流程。无论是收到压缩成一行的 API 响应，还是需要检查配置文件，格式化工具都能将密集的 JSON 转换为结构清晰的缩进视图，让嵌套层级和字段名一目了然。",
      "现代 Web 应用广泛使用 JSON 作为 REST API、配置文件和服务间数据交换的格式。日志或网络面板中的原始 JSON 往往没有空格，难以发现缺少的逗号、错误的类型或意外的 null 值。专用的格式化工具在联调测试和故障排查中能节省大量时间。",
      "WaiHub JSON 格式化工具完全在浏览器中运行，数据不会离开你的设备。这在调试包含用户信息、Token 或内部标识的响应时尤为重要。配合校验、压缩、树形视图和 YAML 转换，它覆盖了从检查到生产输出的完整 JSON 工作流。",
    ],
    benefits: [
      "自定义缩进，提升可读性",
      "即时 JSON 语法校验与错误行提示",
      "压缩 JSON 减小体积",
      "树形视图探索嵌套结构",
      "YAML 与 XML 跨格式转换",
      "不上传数据，隐私优先的浏览器处理",
    ],
  },
  features: {
    title: "功能特性",
    items: [
      "即时格式化，支持 2 或 4 空格缩进",
      "校验 JSON 语法并高亮错误位置",
      "压缩 JSON 去除空白字符",
      "按键名升序或降序排序",
      "树形视图，支持展开/折叠",
      "JSON、YAML、XML 互转",
      "JSONPath 文档内搜索",
      "一键复制格式化结果",
      "支持上传最大 5 MB 文件",
      "浏览器本地运行，不上传服务器",
    ],
  },
  howToUse: {
    title: "使用方法",
    steps: [
      {
        title: "粘贴 JSON 内容",
        description: "将 API 响应、日志或配置文件中的 JSON 复制到左侧源面板，也可上传 .json 文件或粘贴 YAML/XML 进行转换。",
      },
      {
        title: "点击格式化",
        description: "点击「格式化」按钮美化 JSON。使用「压缩」减小体积，或「校验」检查语法而不改变布局。",
      },
      {
        title: "查看格式化结果",
        description: "右侧结果面板显示输出。可切换到树形视图探索嵌套对象，或使用 JSONPath 搜索特定键。",
      },
      {
        title: "复制或下载输出",
        description: "点击「复制」获取格式化 JSON，或「保存」下载文件。「同步到输入」可将结果写回左侧继续编辑。",
      },
    ],
  },
  examples: {
    title: "示例",
    inputLabel: "输入",
    outputLabel: "输出",
    items: [
      {
        label: "基础格式化",
        input: '{"name":"John","age":18,"city":"New York"}',
        output: `{
  "name": "John",
  "age": 18,
  "city": "New York"
}`,
        language: "json",
      },
      {
        label: "嵌套对象",
        input: '{"user":{"name":"Alice","roles":["admin","editor"]},"active":true}',
        output: `{
  "user": {
    "name": "Alice",
    "roles": ["admin", "editor"]
  },
  "active": true
}`,
        language: "json",
      },
    ],
  },
  faq: [
    { q: "这个 JSON 格式化工具免费吗？", a: "是的。完全免费，无需注册，无使用限制。" },
    { q: "我的数据会上传到服务器吗？", a: "不会。所有处理完全在浏览器中完成，不会发送到 WaiHub 服务器。" },
    { q: "有文件大小限制吗？", a: "支持最大 5 MB 的文件。更大输入会暂停实时分析以保持浏览器响应速度。" },
    { q: "可以在手机上使用吗？", a: "可以。支持 iOS 和 Android 上的 Chrome、Safari、Firefox 等现代浏览器。" },
    { q: "可以商用吗？", a: "可以。个人和商业开发均可免费使用。" },
    { q: "格式化后中文或 Unicode 会乱码吗？", a: "不会。UTF-8 编码处理正确，中文、emoji 等 Unicode 字符保持完整。" },
  ],
  relatedToolSlugs: ["base64", "url-encoder", "uuid-generator", "jwt-decoder", "hash-generator"],
}

const ja: ToolPageSeoContent = {
  whatIs: {
    title: "JSON フォーマッターとは？",
    paragraphs: [
      "JSON フォーマッターは、開発者が JSON データを整形・検証・美化するためのオンラインツールです。可読性を高め、構文エラーの特定を助け、API デバッグを簡素化します。1 行に圧縮された API レスポンスや設定ファイルの検査時に、ネストとフィールド名が一目で分かる構造化ビューに変換します。",
      "現代の Web アプリケーションは REST API、設定ファイル、サービス間データ交換に JSON を広く利用しています。ログやネットワークパネルの生 JSON は空白がなく、欠落したカンマや型の誤り、予期しない null を見逃しやすいです。専用フォーマッターは結合テストや障害対応の時間を大幅に短縮します。",
      "WaiHub の JSON フォーマッターはブラウザ内で完全に動作し、データはデバイスから出ません。ユーザー情報、トークン、内部 ID を含むレスポンスのデバッグ時に重要です。検証、圧縮、ツリービュー、YAML 変換と組み合わせ、検査から本番出力までの JSON ワークフローをカバーします。",
    ],
    benefits: [
      "カスタマイズ可能なインデントで可読性向上",
      "即時 JSON 構文検証とエラー行ヒント",
      "JSON 圧縮でペイロード縮小",
      "ネスト構造を探索するツリービュー",
      "YAML・XML クロスフォーマット変換",
      "データ非アップロードのプライバシー優先処理",
    ],
  },
  features: {
    title: "機能",
    items: [
      "2 または 4 スペースインデントで即時整形",
      "JSON 構文検証とエラー位置ハイライト",
      "空白除去による JSON 圧縮",
      "キーの昇順・降順ソート",
      "展開/折りたたみ付きツリービュー",
      "JSON、YAML、XML 間の変換",
      "ドキュメント内 JSONPath 検索",
      "ワンクリックで整形結果をコピー",
      "最大 5 MB ファイルのアップロード対応",
      "ブラウザ内ローカル動作、サーバー非送信",
    ],
  },
  howToUse: {
    title: "使い方",
    steps: [
      {
        title: "JSON を貼り付け",
        description: "API レスポンス、ログ、設定ファイルの JSON を左のソースパネルにコピー。.json ファイルのアップロードや YAML/XML の貼り付けも可能です。",
      },
      {
        title: "フォーマットをクリック",
        description: "「フォーマット」で JSON を整形。「圧縮」でサイズ縮小、「検証」でレイアウトを変えず構文チェック。",
      },
      {
        title: "結果を確認",
        description: "右の結果パネルに出力が表示されます。ツリービューでネストオブジェクトを探索、JSONPath で特定キーを検索できます。",
      },
      {
        title: "コピーまたはダウンロード",
        description: "「コピー」で整形 JSON を取得、「保存」でファイルダウンロード。「入力に同期」で左パネルに戻して編集を続けられます。",
      },
    ],
  },
  examples: {
    title: "例",
    inputLabel: "入力",
    outputLabel: "出力",
    items: [
      {
        label: "基本整形",
        input: '{"name":"John","age":18,"city":"New York"}',
        output: `{
  "name": "John",
  "age": 18,
  "city": "New York"
}`,
        language: "json",
      },
      {
        label: "ネストオブジェクト",
        input: '{"user":{"name":"Alice","roles":["admin","editor"]},"active":true}',
        output: `{
  "user": {
    "name": "Alice",
    "roles": ["admin", "editor"]
  },
  "active": true
}`,
        language: "json",
      },
    ],
  },
  faq: [
    { q: "この JSON フォーマッターは無料ですか？", a: "はい。登録不要、利用制限なし、完全無料です。" },
    { q: "データはサーバーに送信されますか？", a: "いいえ。すべてブラウザ内で処理され、WaiHub サーバーには送信されません。" },
    { q: "ファイルサイズ制限はありますか？", a: "最大 5 MB まで対応。大きな入力はリアルタイム分析を一時停止してブラウザの応答性を維持します。" },
    { q: "モバイルで使えますか？", a: "はい。iOS/Android の Chrome、Safari、Firefox など最新ブラウザで動作します。" },
    { q: "商用利用できますか？", a: "はい。個人・商用の開発作業に制限なく利用できます。" },
    { q: "日本語や Unicode は壊れますか？", a: "いいえ。UTF-8 を正しく処理し、日本語・絵文字など Unicode 文字はそのまま保持されます。" },
  ],
  relatedToolSlugs: ["base64", "url-encoder", "uuid-generator", "jwt-decoder", "hash-generator"],
}

export const jsonFormatterContent = { en, zh, ja }
