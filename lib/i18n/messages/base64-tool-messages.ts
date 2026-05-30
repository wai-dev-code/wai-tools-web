import type { ConvertMode } from "@/lib/base64-utils"

export interface Base64ToolMessages {
  modules: {
    core: string
    file: string
    convert: string
    utils: string
  }
  encode: string
  decode: string
  smart: string
  smartTitle: string
  urlSafe: string
  urlSafeTitle: string
  uploadFile: string
  downloadFile: string
  downloadFileTitle: string
  validate: string
  clean: string
  cleanTitle: string
  detectType: string
  source: string
  result: string
  copy: string
  clear: string
  save: string
  syncToSource: string
  syncToSourceTitle: string
  lineNumbers: string
  example: string
  selectConvert: string
  sourcePlaceholder: string
  resultPlaceholder: string
  imagePreview: string
  imagePreviewAlt: string
  identifiedAs: string
  coreHint: string
  processing: string
  waiting: string
  processFailed: string
  convertFailed: string
  charsBytes: string
  fileOutputMeta: string
  uploaded: string
  convertHint: string
  fileHint: string
  inputKinds: {
    empty: string
    text: string
    base64: string
    base64url: string
    hex: string
    dataUri: string
  }
  convertModes: Record<ConvertMode, string>
  smartActions: {
    decodedDataUri: string
    decodedHex: string
    autoDecoded: string
    autoEncoded: string
  }
  notify: {
    operationFailed: string
    processFailed: string
    convertFailed: string
    exampleLoaded: string
    emptySource: string
    encodeDone: string
    encodeUrlDone: string
    decodeDone: string
    decodeUrlDone: string
    validDataUri: string
    validHex: string
    validBase64: string
    plainText: string
    validateFailed: string
    cleaned: string
    fileEncoded: string
    fileEncodeFailed: string
    fileReadFailed: string
    nothingToDownload: string
    downloadStarted: string
    detected: string
    outputEmpty: string
    copied: string
    copyFailed: string
    saved: string
    syncedToSource: string
    sourceEmpty: string
  }
  examples: Record<string, { label: string; description: string }>
}

const convertModesZh: Record<ConvertMode, string> = {
  auto: "自动识别",
  "text-to-datauri": "文本 → Data URI",
  "datauri-to-text": "Data URI → 文本",
  "text-to-hex": "文本 → Hex",
  "hex-to-text": "Hex → 文本",
  "text-to-base64": "文本 → Base64",
  "base64-to-text": "Base64 → 文本",
  "base64-to-hex": "Base64 → Hex",
  "hex-to-base64": "Hex → Base64",
}

export const base64ToolZh: Base64ToolMessages = {
  modules: { core: "编解码", file: "文件", convert: "格式转换", utils: "实用工具" },
  encode: "编码",
  decode: "解码",
  smart: "智能",
  smartTitle: "自动识别 Base64/Hex/Data URI 并转换",
  urlSafe: "URL安全",
  urlSafeTitle: "使用 URL 安全 Base64（- _ 替代 + /）",
  uploadFile: "上传文件",
  downloadFile: "下载文件",
  downloadFileTitle: "将 Base64 还原为文件下载",
  validate: "校验",
  clean: "去空白",
  cleanTitle: "去除空白后输出到结果区",
  detectType: "检测类型",
  source: "源数据",
  result: "结果",
  copy: "复制",
  clear: "清空",
  save: "保存",
  syncToSource: "同步到源",
  syncToSourceTitle: "将结果写回源数据区以便继续编辑",
  lineNumbers: "行号",
  example: "示例",
  selectConvert: "选择转换方向",
  sourcePlaceholder: "输入文本、Base64、Hex、Data URI，或上传文件...",
  resultPlaceholder: "编码/解码结果将显示在这里（只读）...",
  imagePreview: "图片预览",
  imagePreviewAlt: "Base64 图片预览",
  identifiedAs: "识别为：{mode}",
  coreHint: "左侧为可编辑源数据，右侧为只读结果。Base64 是编码而非加密，不能用于保密。所有处理在浏览器内完成。",
  processing: "处理中…",
  waiting: "等待处理",
  processFailed: "处理失败",
  convertFailed: "转换失败",
  charsBytes: "{chars} 字符 · {bytes} 字节",
  fileOutputMeta: "{chars} 字符 · {size} · {details}",
  uploaded: "已上传 · {mime} · {size}",
  convertHint: "在上方选择转换方向（或使用「自动识别」），左侧输入后右侧实时更新结果。",
  fileHint: "上传文件，或粘贴 Base64 / Data URI / Hex / 文本，右侧自动识别并输出 Base64。",
  inputKinds: {
    empty: "空",
    text: "普通文本",
    base64: "标准 Base64",
    base64url: "URL 安全 Base64",
    hex: "Hex",
    dataUri: "Data URI",
  },
  convertModes: convertModesZh,
  smartActions: {
    decodedDataUri: "已从 Data URI 解码",
    decodedHex: "已从 Hex 解码",
    autoDecoded: "已自动解码",
    autoEncoded: "已自动编码",
  },
  notify: {
    operationFailed: "操作失败",
    processFailed: "处理失败",
    convertFailed: "转换失败",
    exampleLoaded: "已加载示例",
    emptySource: "源数据为空",
    encodeDone: "编码完成",
    encodeUrlDone: "URL 安全编码完成",
    decodeDone: "解码完成",
    decodeUrlDone: "URL 安全解码完成",
    validDataUri: "✓ 有效的 Data URI",
    validHex: "✓ 有效的 Hex 字符串",
    validBase64: "✓ 有效的 Base64 字符串",
    plainText: "输入为普通文本，可直接编码",
    validateFailed: "校验失败",
    cleaned: "已去除空白，结果在右侧",
    fileEncoded: "文件已编码到结果区",
    fileEncodeFailed: "文件编码失败",
    fileReadFailed: "文件读取失败",
    nothingToDownload: "没有可下载的内容",
    downloadStarted: "文件已开始下载",
    detected: "检测到：{kind}",
    outputEmpty: "结果区没有内容",
    copied: "已复制结果",
    copyFailed: "复制失败",
    saved: "已保存 base64-result.txt",
    syncedToSource: "已同步到源数据区",
    sourceEmpty: "源数据为空",
  },
  examples: {
    "text-utf8": { label: "UTF-8 文本", description: "中英文编码" },
    "base64-decode": { label: "Base64 解码", description: "已有 Base64 字符串" },
    "url-safe": { label: "URL 安全 Base64", description: "JWT 风格编码" },
    "text-to-datauri": { label: "文本 → Data URI", description: "嵌入 HTML/CSS" },
    "hex-to-text": { label: "Hex → 文本", description: "48656c6c6f = Hello" },
    "base64-to-hex": { label: "Base64 → Hex", description: "查看字节 Hex" },
    "file-text": { label: "文本文件", description: "编码为 Base64" },
    "file-image": { label: "PNG 图片", description: "1×1 像素预览" },
    "file-datauri": { label: "Data URI", description: "提取 Base64" },
  },
}

const convertModesEn: Record<ConvertMode, string> = {
  auto: "Auto detect",
  "text-to-datauri": "Text → Data URI",
  "datauri-to-text": "Data URI → Text",
  "text-to-hex": "Text → Hex",
  "hex-to-text": "Hex → Text",
  "text-to-base64": "Text → Base64",
  "base64-to-text": "Base64 → Text",
  "base64-to-hex": "Base64 → Hex",
  "hex-to-base64": "Hex → Base64",
}

export const base64ToolEn: Base64ToolMessages = {
  modules: { core: "Encode/Decode", file: "File", convert: "Convert", utils: "Utilities" },
  encode: "Encode",
  decode: "Decode",
  smart: "Smart",
  smartTitle: "Auto-detect Base64/Hex/Data URI and convert",
  urlSafe: "URL-safe",
  urlSafeTitle: "URL-safe Base64 (- _ instead of + /)",
  uploadFile: "Upload file",
  downloadFile: "Download",
  downloadFileTitle: "Decode Base64 and download as file",
  validate: "Validate",
  clean: "Trim",
  cleanTitle: "Remove whitespace and output to result",
  detectType: "Detect type",
  source: "Source",
  result: "Result",
  copy: "Copy",
  clear: "Clear",
  save: "Save",
  syncToSource: "To source",
  syncToSourceTitle: "Write result back to source for editing",
  lineNumbers: "Line #",
  example: "Example",
  selectConvert: "Select conversion",
  sourcePlaceholder: "Text, Base64, Hex, Data URI, or upload a file...",
  resultPlaceholder: "Encoded/decoded result appears here (read-only)...",
  imagePreview: "Image preview",
  imagePreviewAlt: "Base64 image preview",
  identifiedAs: "Detected as: {mode}",
  coreHint: "Editable source on the left, read-only result on the right. Base64 is encoding, not encryption. All processing runs in your browser.",
  processing: "Processing…",
  waiting: "Waiting",
  processFailed: "Processing failed",
  convertFailed: "Conversion failed",
  charsBytes: "{chars} chars · {bytes} bytes",
  fileOutputMeta: "{chars} chars · {size} · {details}",
  uploaded: "Uploaded · {mime} · {size}",
  convertHint: "Pick a conversion above (or Auto). Type on the left — result updates live on the right.",
  fileHint: "Upload a file or paste Base64 / Data URI / Hex / text. Result auto-detects on the right.",
  inputKinds: {
    empty: "Empty",
    text: "Plain text",
    base64: "Standard Base64",
    base64url: "URL-safe Base64",
    hex: "Hex",
    dataUri: "Data URI",
  },
  convertModes: convertModesEn,
  smartActions: {
    decodedDataUri: "Decoded from Data URI",
    decodedHex: "Decoded from Hex",
    autoDecoded: "Auto-decoded",
    autoEncoded: "Auto-encoded",
  },
  notify: {
    operationFailed: "Operation failed",
    processFailed: "Processing failed",
    convertFailed: "Conversion failed",
    exampleLoaded: "Example loaded",
    emptySource: "Source is empty",
    encodeDone: "Encoded",
    encodeUrlDone: "URL-safe encoded",
    decodeDone: "Decoded",
    decodeUrlDone: "URL-safe decoded",
    validDataUri: "✓ Valid Data URI",
    validHex: "✓ Valid Hex string",
    validBase64: "✓ Valid Base64 string",
    plainText: "Plain text — ready to encode",
    validateFailed: "Validation failed",
    cleaned: "Whitespace removed — see result",
    fileEncoded: "File encoded to result panel",
    fileEncodeFailed: "File encoding failed",
    fileReadFailed: "Failed to read file",
    nothingToDownload: "Nothing to download",
    downloadStarted: "Download started",
    detected: "Detected: {kind}",
    outputEmpty: "Result panel is empty",
    copied: "Result copied",
    copyFailed: "Copy failed",
    saved: "Saved base64-result.txt",
    syncedToSource: "Synced to source",
    sourceEmpty: "Source is empty",
  },
  examples: {
    "text-utf8": { label: "UTF-8 text", description: "Unicode encode/decode" },
    "base64-decode": { label: "Base64 decode", description: "Existing Base64 string" },
    "url-safe": { label: "URL-safe Base64", description: "JWT-style encoding" },
    "text-to-datauri": { label: "Text → Data URI", description: "Embed in HTML/CSS" },
    "hex-to-text": { label: "Hex → Text", description: "48656c6c6f = Hello" },
    "base64-to-hex": { label: "Base64 → Hex", description: "View byte hex" },
    "file-text": { label: "Text file", description: "Encode to Base64" },
    "file-image": { label: "PNG image", description: "1×1 pixel preview" },
    "file-datauri": { label: "Data URI", description: "Extract Base64" },
  },
}

const convertModesJa: Record<ConvertMode, string> = {
  auto: "自動認識",
  "text-to-datauri": "テキスト → Data URI",
  "datauri-to-text": "Data URI → テキスト",
  "text-to-hex": "テキスト → Hex",
  "hex-to-text": "Hex → テキスト",
  "text-to-base64": "テキスト → Base64",
  "base64-to-text": "Base64 → テキスト",
  "base64-to-hex": "Base64 → Hex",
  "hex-to-base64": "Hex → Base64",
}

export const base64ToolJa: Base64ToolMessages = {
  modules: { core: "符号化", file: "ファイル", convert: "変換", utils: "ユーティリティ" },
  encode: "エンコード",
  decode: "デコード",
  smart: "スマート",
  smartTitle: "Base64/Hex/Data URI を自動認識して変換",
  urlSafe: "URL安全",
  urlSafeTitle: "URL 安全 Base64（+ / を - _ に）",
  uploadFile: "ファイル",
  downloadFile: "ダウンロード",
  downloadFileTitle: "Base64 をファイルとしてダウンロード",
  validate: "検証",
  clean: "空白除去",
  cleanTitle: "空白を除去して結果へ出力",
  detectType: "型を検出",
  source: "ソース",
  result: "結果",
  copy: "コピー",
  clear: "クリア",
  save: "保存",
  syncToSource: "ソースへ",
  syncToSourceTitle: "結果をソースに書き戻して編集続行",
  lineNumbers: "行番号",
  example: "例",
  selectConvert: "変換方向を選択",
  sourcePlaceholder: "テキスト、Base64、Hex、Data URI、またはファイル...",
  resultPlaceholder: "符号化/復号結果（読み取り専用）...",
  imagePreview: "画像プレビュー",
  imagePreviewAlt: "Base64 画像プレビュー",
  identifiedAs: "認識: {mode}",
  coreHint: "左が編集可能なソース、右が読み取り専用の結果。Base64 は暗号化ではなく符号化です。処理はすべてブラウザ内で完結します。",
  processing: "処理中…",
  waiting: "待機中",
  processFailed: "処理失敗",
  convertFailed: "変換失敗",
  charsBytes: "{chars} 文字 · {bytes} バイト",
  fileOutputMeta: "{chars} 文字 · {size} · {details}",
  uploaded: "アップロード · {mime} · {size}",
  convertHint: "上で変換方向を選び（または自動）、左入力で右がリアルタイム更新。",
  fileHint: "ファイルをアップロード、または Base64 / Data URI / Hex / テキストを貼付。右側が自動認識。",
  inputKinds: {
    empty: "空",
    text: "プレーンテキスト",
    base64: "標準 Base64",
    base64url: "URL 安全 Base64",
    hex: "Hex",
    dataUri: "Data URI",
  },
  convertModes: convertModesJa,
  smartActions: {
    decodedDataUri: "Data URI からデコード",
    decodedHex: "Hex からデコード",
    autoDecoded: "自動デコード",
    autoEncoded: "自動エンコード",
  },
  notify: {
    operationFailed: "操作に失敗",
    processFailed: "処理に失敗",
    convertFailed: "変換に失敗",
    exampleLoaded: "例を読み込み",
    emptySource: "ソースが空です",
    encodeDone: "エンコード完了",
    encodeUrlDone: "URL 安全エンコード完了",
    decodeDone: "デコード完了",
    decodeUrlDone: "URL 安全デコード完了",
    validDataUri: "✓ 有効な Data URI",
    validHex: "✓ 有効な Hex",
    validBase64: "✓ 有効な Base64",
    plainText: "プレーンテキスト — エンコード可能",
    validateFailed: "検証失敗",
    cleaned: "空白除去 — 右側を確認",
    fileEncoded: "ファイルを結果にエンコード",
    fileEncodeFailed: "ファイルエンコード失敗",
    fileReadFailed: "ファイル読み込み失敗",
    nothingToDownload: "ダウンロードする内容がありません",
    downloadStarted: "ダウンロード開始",
    detected: "検出: {kind}",
    outputEmpty: "結果が空です",
    copied: "結果をコピー",
    copyFailed: "コピー失敗",
    saved: "base64-result.txt を保存",
    syncedToSource: "ソースに同期",
    sourceEmpty: "ソースが空です",
  },
  examples: {
    "text-utf8": { label: "UTF-8 テキスト", description: "多言語エンコード" },
    "base64-decode": { label: "Base64 デコード", description: "既存の Base64" },
    "url-safe": { label: "URL 安全 Base64", description: "JWT 形式" },
    "text-to-datauri": { label: "テキスト → Data URI", description: "HTML/CSS 埋め込み" },
    "hex-to-text": { label: "Hex → テキスト", description: "48656c6c6f = Hello" },
    "base64-to-hex": { label: "Base64 → Hex", description: "バイト Hex 表示" },
    "file-text": { label: "テキストファイル", description: "Base64 に符号化" },
    "file-image": { label: "PNG 画像", description: "1×1 ピクセル" },
    "file-datauri": { label: "Data URI", description: "Base64 抽出" },
  },
}

export function getConvertModeLabels(locale: "zh" | "en" | "ja"): Record<ConvertMode, string> {
  if (locale === "en") return convertModesEn
  if (locale === "ja") return convertModesJa
  return convertModesZh
}
