export interface JsonToolMessages {
  source: string
  result: string
  format: string
  minify: string
  validate: string
  sortAsc: string
  sortDesc: string
  sortTitle: string
  escape: string
  escapeTitle: string
  unescape: string
  unescapeTitle: string
  toJson: string
  toXml: string
  toYaml: string
  convertMenu: string
  upload: string
  copy: string
  clear: string
  save: string
  syncToInput: string
  syncToInputTitle: string
  tree: string
  collapse: string
  expand: string
  lineNumbers: string
  wordWrap: string
  queryTools: string
  inUse: string
  search: string
  searchPlaceholder: string
  matches: string
  noMatch: string
  treeBadge: string
  oversized: string
  oversizedAnalysis: string
  sourcePlaceholder: string
  resultPlaceholder: string
  emptyTree: string
  backToText: string
  example: string
  notify: {
    operationFailed: string
    oversized: string
    exampleLoaded: string
    formatted: string
    minified: string
    convertedToJson: string
    convertedToXml: string
    convertedToYaml: string
    unescaped: string
    escaped: string
    copied: string
    copyFailed: string
    inputEmpty: string
    outputEmpty: string
    validateFailed: string
    fileTooLarge: string
    fileLoaded: string
    fileReadFailed: string
    saved: string
    syncedToInput: string
    treeOpened: string
    treeCollapsed: string
    treeExpanded: string
    invalidJsonTree: string
    sortedAsc: string
    sortedDesc: string
    lineCol: string
    inputJsonValid: string
    inputXmlValid: string
    inputYamlValid: string
    outputJsonValid: string
    outputXmlValid: string
    outputYamlValid: string
  }
  jsonPathHint: string
  jsonPathPlaceholder: string
  examples: Record<string, { label: string; description: string }>
}

export const jsonToolZh: JsonToolMessages = {
  source: "原数据",
  result: "结果",
  format: "格式化",
  minify: "压缩",
  validate: "校验",
  sortAsc: "升序",
  sortDesc: "降序",
  sortTitle: "切换升序/降序并排序",
  escape: "Escape",
  escapeTitle: "将源 JSON 转义输出到结果区",
  unescape: "Unescape",
  unescapeTitle: "将转义字符串还原 JSON 到结果区",
  toJson: "转 JSON",
  toXml: "转 XML",
  toYaml: "转 YAML",
  convertMenu: "转换",
  upload: "上传",
  copy: "复制",
  clear: "清空",
  save: "保存",
  syncToInput: "同步到输入",
  syncToInputTitle: "将结果写回左侧",
  tree: "树形",
  collapse: "折叠",
  expand: "展开",
  lineNumbers: "行号",
  wordWrap: "换行",
  queryTools: "查询工具",
  inUse: "使用中",
  search: "搜索",
  searchPlaceholder: "name、user.name",
  matches: "{n} 处",
  noMatch: "无匹配",
  treeBadge: "树形",
  oversized: "超过 5MB",
  oversizedAnalysis: "输入超过 5MB，已暂停实时分析",
  sourcePlaceholder: "粘贴 JSON、YAML 或 XML...",
  resultPlaceholder: "处理结果将显示在这里...",
  emptyTree: "暂无有效 JSON 可展示",
  backToText: "返回文本",
  example: "示例",
  notify: {
    operationFailed: "操作失败",
    oversized: "内容超过 5MB 上限",
    exampleLoaded: "已加载示例",
    formatted: "已格式化，结果在右侧",
    minified: "已压缩",
    convertedToJson: "已转为 JSON",
    convertedToXml: "已转为 XML",
    convertedToYaml: "已转为 YAML",
    unescaped: "已 Unescape，结果在右侧",
    escaped: "已 Escape，结果在右侧",
    copied: "已复制",
    copyFailed: "复制失败",
    inputEmpty: "输入区没有内容",
    outputEmpty: "输出区没有内容",
    validateFailed: "校验失败",
    fileTooLarge: "文件超过 5MB 限制",
    fileLoaded: "已加载 {name}",
    fileReadFailed: "文件读取失败",
    saved: "已保存 data.{ext}",
    syncedToInput: "已将输出同步到输入区",
    treeOpened: "已切换树形视图",
    treeCollapsed: "已折叠全部节点",
    treeExpanded: "已展开全部节点",
    invalidJsonTree: "JSON 无效，无法显示树形视图",
    sortedAsc: "已按 key 升序排序",
    sortedDesc: "已按 key 降序排序",
    lineCol: "第 {line} 行，第 {column} 列：{message}",
    inputJsonValid: "输入 JSON 有效",
    inputXmlValid: "输入 XML 有效",
    inputYamlValid: "输入 YAML 有效",
    outputJsonValid: "输出 JSON 有效",
    outputXmlValid: "输出 XML 有效",
    outputYamlValid: "输出 YAML 有效",
  },
  jsonPathHint: "已内置 $. 前缀，直接输入 user.name 或 [0].name",
  jsonPathPlaceholder: "user.name 或 features[0]",
  examples: {
    basic: { label: "基础 JSON", description: "嵌套对象与数组" },
    "array-root": { label: "数组根节点", description: "顶层为数组，路径如 [0].name" },
    invalid: { label: "无效 JSON", description: "演示错误行号定位" },
    yaml: { label: "YAML 示例", description: "YAML 转 JSON" },
    xml: { label: "XML 示例", description: "XML 转 JSON" },
    escape: { label: "Escape 示例", description: "含换行与引号的 JSON" },
  },
}

export const jsonToolEn: JsonToolMessages = {
  source: "Source",
  result: "Result",
  format: "Format",
  minify: "Minify",
  validate: "Validate",
  sortAsc: "Asc",
  sortDesc: "Desc",
  sortTitle: "Toggle sort order and sort keys",
  escape: "Escape",
  escapeTitle: "Escape source JSON to the result panel",
  unescape: "Unescape",
  unescapeTitle: "Unescape quoted string back to JSON",
  toJson: "To JSON",
  toXml: "To XML",
  toYaml: "To YAML",
  convertMenu: "Convert",
  upload: "Upload",
  copy: "Copy",
  clear: "Clear",
  save: "Save",
  syncToInput: "To source",
  syncToInputTitle: "Write result back to source panel",
  tree: "Tree",
  collapse: "Collapse",
  expand: "Expand",
  lineNumbers: "Line #",
  wordWrap: "Wrap",
  queryTools: "Query tools",
  inUse: "Active",
  search: "Search",
  searchPlaceholder: "name, user.name",
  matches: "{n} matches",
  noMatch: "No match",
  treeBadge: "Tree",
  oversized: "Over 5MB",
  oversizedAnalysis: "Input exceeds 5MB — live analysis paused",
  sourcePlaceholder: "Paste JSON, YAML, or XML...",
  resultPlaceholder: "Results appear here...",
  emptyTree: "No valid JSON to display",
  backToText: "Back to text",
  example: "Example",
  notify: {
    operationFailed: "Operation failed",
    oversized: "Content exceeds 5MB limit",
    exampleLoaded: "Example loaded",
    formatted: "Formatted — see result panel",
    minified: "Minified",
    convertedToJson: "Converted to JSON",
    convertedToXml: "Converted to XML",
    convertedToYaml: "Converted to YAML",
    unescaped: "Unescaped — see result panel",
    escaped: "Escaped — see result panel",
    copied: "Copied",
    copyFailed: "Copy failed",
    inputEmpty: "Source panel is empty",
    outputEmpty: "Result panel is empty",
    validateFailed: "Validation failed",
    fileTooLarge: "File exceeds 5MB limit",
    fileLoaded: "Loaded {name}",
    fileReadFailed: "Failed to read file",
    saved: "Saved data.{ext}",
    syncedToInput: "Result synced to source",
    treeOpened: "Switched to tree view",
    treeCollapsed: "All nodes collapsed",
    treeExpanded: "All nodes expanded",
    invalidJsonTree: "Invalid JSON — cannot show tree view",
    sortedAsc: "Sorted keys ascending",
    sortedDesc: "Sorted keys descending",
    lineCol: "Line {line}, col {column}: {message}",
    inputJsonValid: "Input JSON is valid",
    inputXmlValid: "Input XML is valid",
    inputYamlValid: "Input YAML is valid",
    outputJsonValid: "Output JSON is valid",
    outputXmlValid: "Output XML is valid",
    outputYamlValid: "Output YAML is valid",
  },
  jsonPathHint: "$. prefix is built-in — type user.name or [0].name",
  jsonPathPlaceholder: "user.name or features[0]",
  examples: {
    basic: { label: "Basic JSON", description: "Nested objects and arrays" },
    "array-root": { label: "Array root", description: "Top-level array, paths like [0].name" },
    invalid: { label: "Invalid JSON", description: "Demo error line highlighting" },
    yaml: { label: "YAML sample", description: "YAML to JSON" },
    xml: { label: "XML sample", description: "XML to JSON" },
    escape: { label: "Escape sample", description: "JSON with quotes and newlines" },
  },
}

export const jsonToolJa: JsonToolMessages = {
  source: "ソース",
  result: "結果",
  format: "整形",
  minify: "圧縮",
  validate: "検証",
  sortAsc: "昇順",
  sortDesc: "降順",
  sortTitle: "昇順/降順を切替えてソート",
  escape: "Escape",
  escapeTitle: "ソース JSON をエスケープして結果へ",
  unescape: "Unescape",
  unescapeTitle: "エスケープ文字列を JSON に復元",
  toJson: "JSON へ",
  toXml: "XML へ",
  toYaml: "YAML へ",
  convertMenu: "変換",
  upload: "アップロード",
  copy: "コピー",
  clear: "クリア",
  save: "保存",
  syncToInput: "ソースへ",
  syncToInputTitle: "結果を左側に書き戻す",
  tree: "ツリー",
  collapse: "折りたたむ",
  expand: "展開",
  lineNumbers: "行番号",
  wordWrap: "折返し",
  queryTools: "クエリツール",
  inUse: "使用中",
  search: "検索",
  searchPlaceholder: "name, user.name",
  matches: "{n} 件",
  noMatch: "一致なし",
  treeBadge: "ツリー",
  oversized: "5MB 超過",
  oversizedAnalysis: "入力が 5MB を超えたためリアルタイム解析を停止",
  sourcePlaceholder: "JSON、YAML、XML を貼り付け...",
  resultPlaceholder: "処理結果がここに表示されます...",
  emptyTree: "表示できる有効な JSON がありません",
  backToText: "テキストに戻る",
  example: "例",
  notify: {
    operationFailed: "操作に失敗しました",
    oversized: "内容が 5MB 上限を超えています",
    exampleLoaded: "例を読み込みました",
    formatted: "整形しました — 右側を確認",
    minified: "圧縮しました",
    convertedToJson: "JSON に変換しました",
    convertedToXml: "XML に変換しました",
    convertedToYaml: "YAML に変換しました",
    unescaped: "Unescape 完了 — 右側を確認",
    escaped: "Escape 完了 — 右側を確認",
    copied: "コピーしました",
    copyFailed: "コピーに失敗しました",
    inputEmpty: "ソースが空です",
    outputEmpty: "結果が空です",
    validateFailed: "検証に失敗しました",
    fileTooLarge: "ファイルが 5MB 制限を超えています",
    fileLoaded: "{name} を読み込みました",
    fileReadFailed: "ファイルの読み込みに失敗しました",
    saved: "data.{ext} を保存しました",
    syncedToInput: "結果をソースに同期しました",
    treeOpened: "ツリービューに切替え",
    treeCollapsed: "すべて折りたたみました",
    treeExpanded: "すべて展開しました",
    invalidJsonTree: "JSON が無効 — ツリーを表示できません",
    sortedAsc: "キーを昇順にソートしました",
    sortedDesc: "キーを降順にソートしました",
    lineCol: "{line} 行 {column} 列: {message}",
    inputJsonValid: "入力 JSON は有効です",
    inputXmlValid: "入力 XML は有効です",
    inputYamlValid: "入力 YAML は有効です",
    outputJsonValid: "出力 JSON は有効です",
    outputXmlValid: "出力 XML は有効です",
    outputYamlValid: "出力 YAML は有効です",
  },
  jsonPathHint: "$. は組み込み — user.name や [0].name を入力",
  jsonPathPlaceholder: "user.name または features[0]",
  examples: {
    basic: { label: "基本 JSON", description: "ネストしたオブジェクトと配列" },
    "array-root": { label: "配列ルート", description: "トップが配列、[0].name など" },
    invalid: { label: "無効 JSON", description: "エラー行のデモ" },
    yaml: { label: "YAML 例", description: "YAML → JSON" },
    xml: { label: "XML 例", description: "XML → JSON" },
    escape: { label: "Escape 例", description: "引用符・改行を含む JSON" },
  },
}
