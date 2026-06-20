import type { FaqItem } from "@/lib/i18n/messages/types"

export interface HtmlEncoderToolMessages {
  modeEncode: string
  modeDecode: string
  encodeAll: string
  input: string
  output: string
  inputPlaceholder: string
  outputPlaceholder: string
  copy: string
  clear: string
  swapDirection: string
  hint: string
  errors: {
    invalid: string
  }
  notify: {
    copied: string
    nothingToCopy: string
  }
}

export interface HtmlEncoderPageMessages {
  metaTitle: string
  metaDescription: string
  instructions: string[]
  faq: FaqItem[]
}

export const htmlEncoderToolZh: HtmlEncoderToolMessages = {
  modeEncode: "HTML 编码",
  modeDecode: "HTML 解码",
  encodeAll: "编码所有非 ASCII 字符",
  input: "输入",
  output: "输出",
  inputPlaceholder: "输入要编码或解码的文本…",
  outputPlaceholder: "结果将显示在这里",
  copy: "复制",
  clear: "清空",
  swapDirection: "切换方向",
  hint: "编码将 & < > \" ' 转为实体；解码支持命名实体与数字实体（&#39; &#x27;）。",
  errors: { invalid: "处理失败，请检查输入" },
  notify: { copied: "已复制", nothingToCopy: "没有可复制的内容" },
}

export const htmlEncoderToolEn: HtmlEncoderToolMessages = {
  modeEncode: "HTML Encode",
  modeDecode: "HTML Decode",
  encodeAll: "Encode all non-ASCII characters",
  input: "Input",
  output: "Output",
  inputPlaceholder: "Enter text to encode or decode…",
  outputPlaceholder: "Result appears here",
  copy: "Copy",
  clear: "Clear",
  swapDirection: "Swap direction",
  hint: "Encode converts & < > \" ' to entities; decode supports named and numeric entities (&#39; &#x27;).",
  errors: { invalid: "Processing failed — check your input" },
  notify: { copied: "Copied", nothingToCopy: "Nothing to copy" },
}

export const htmlEncoderToolJa: HtmlEncoderToolMessages = {
  modeEncode: "HTML エンコード",
  modeDecode: "HTML デコード",
  encodeAll: "非 ASCII 文字もすべてエンコード",
  input: "入力",
  output: "出力",
  inputPlaceholder: "エンコード/デコードするテキストを入力…",
  outputPlaceholder: "結果がここに表示されます",
  copy: "コピー",
  clear: "クリア",
  swapDirection: "方向を切り替え",
  hint: "エンコードは & < > \" ' をエンティティに変換。デコードは名前付き・数値エンティティに対応。",
  errors: { invalid: "処理に失敗しました。入力を確認してください" },
  notify: { copied: "コピーしました", nothingToCopy: "コピーする内容がありません" },
}

export const htmlEncoderPageZh: HtmlEncoderPageMessages = {
  metaTitle: "HTML 编解码 - 在线实体转换",
  metaDescription:
    "免费 HTML 实体编码与解码工具，支持 &lt; &gt; &amp; 及数字实体。浏览器内运行，不上传数据。",
  instructions: [
    "选择编码或解码模式，输入文本后实时查看结果。",
    "编码模式可将非 ASCII 字符一并转为数字实体。",
    "点击切换方向可在编码与解码间互换输入输出。",
  ],
  faq: [
    { q: "数据会上传吗？", a: "不会，处理完全在浏览器内完成。" },
    { q: "支持哪些实体？", a: "支持常见命名实体及 &#123;、&#x7B; 形式的数字实体。" },
    { q: "与 URL 编码的区别？", a: "HTML 实体用于页面内容转义，URL 编码用于地址栏与查询参数。" },
  ],
}

export const htmlEncoderPageEn: HtmlEncoderPageMessages = {
  metaTitle: "HTML Encoder/Decoder - Free Online Tool",
  metaDescription:
    "Free HTML entity encoder and decoder online. Convert &lt; &gt; &amp; and numeric entities. Runs in your browser — no upload.",
  instructions: [
    "Choose encode or decode mode — results update as you type.",
    "Enable encode-all to convert non-ASCII characters to numeric entities.",
    "Use Swap Direction to toggle between encode and decode.",
  ],
  faq: [
    { q: "Is my data uploaded?", a: "No. Processing runs entirely in your browser." },
    { q: "Which entities are supported?", a: "Common named entities plus numeric forms like &#123; and &#x7B;." },
    { q: "HTML vs URL encoding?", a: "HTML entities escape page content; URL encoding is for addresses and query strings." },
  ],
}

export const htmlEncoderPageJa: HtmlEncoderPageMessages = {
  metaTitle: "HTML エンコード/デコード - 無料ツール",
  metaDescription:
    "HTML エンティティのオンラインエンコード・デコード。&lt; &gt; &amp; や数値エンティティに対応。ブラウザ内完結。",
  instructions: [
    "エンコードまたはデコードを選択し、入力するとリアルタイムで結果を表示。",
    "非 ASCII 文字も数値エンティティに変換できます。",
    "方向切り替えでエンコードとデコードを入れ替え可能。",
  ],
  faq: [
    { q: "データはアップロードされますか？", a: "いいえ。すべてブラウザ内で処理されます。" },
    { q: "対応エンティティは？", a: "一般的な名前付きエンティティと &#123;、&#x7B; 形式の数値エンティティ。" },
    { q: "URL エンコードとの違い？", a: "HTML エンティティはページ内容のエスケープ、URL エンコードはアドレス用です。" },
  ],
}
