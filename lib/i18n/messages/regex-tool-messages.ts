import type { FaqItem } from "@/lib/i18n/messages/types"
import {
  buildRegexTesterPage,
  regexPageFaqEn,
  regexPageFaqZh,
  regexPageFaqJa,
  regexPageSeoEn,
  regexPageSeoZh,
  regexPageSeoJa,
} from "@/lib/i18n/messages/regex-page-seo"

export interface RegexToolMessages {
  patternLabel: string
  patternPlaceholder: string
  testTextLabel: string
  testTextPlaceholder: string
  flagsLabel: string
  flagDescriptions: { g: string; i: string; m: string; s: string; u: string; y: string }
  highlightLabel: string
  highlightEmpty: string
  replaceLabel: string
  replacePlaceholder: string
  replacePreviewLabel: string
  replaceHint: string
  modeTabMatch: string
  modeTabReplace: string
  modeTabSplit: string
  engineLabel: string
  nonGlobalHint: string
  statsTitle: string
  resultsTitle: string
  errorTitle: string
  matches: string
  groups: string
  status: string
  statusEmpty: string
  statusValid: string
  statusInvalid: string
  noMatches: string
  matchValue: string
  matchPosition: string
  matchLength: string
  matchLineCol: string
  groupLabel: string
  captureGroupsTitle: string
  clearPattern: string
  clearText: string
  pasteLabel: string
  copyGroups: string
  quickActionsTitle: string
  fileTitle: string
  fileUploadHint: string
  fileUploadLabel: string
  fileExportTxt: string
  fileExportJson: string
  commonExamplesTitle: string
  librarySearchPlaceholder: string
  quickRefTitle: string
  quickRefHint: string
  patternHint: string
  explainTitle: string
  explainEmpty: string
  visualExplainTitle: string
  explainMeanings: Record<string, string>
  snippetsTitle: string
  patternSnippets: { label: string; insert: string }[]
  jumpToMatch: string
  jumpToResult: string
  errorAtPosition: string
  namedGroupLabel: string
  splitTitle: string
  splitHint: string
  splitEmpty: string
  unitTestsTitle: string
  unitTestPlaceholder: string
  unitTestShouldMatch: string
  unitTestShouldNotMatch: string
  unitTestAdd: string
  unitTestPass: string
  unitTestFail: string
  exportMatches: string
  exportCsv: string
  exportJson: string
  shareLink: string
  fullMatchFull: string
  fullMatchPartial: string
  fullMatchNone: string
  replaceCount: string
  largeTextWarning: string
  shortcutsHint: string
  historyTitle: string
  historyEmpty: string
  historySave: string
  relatedToolsTitle: string
  relatedToolsDesc: string
  hubLinks: {
    jsonFormatter: string
    jsonValidator: string
    base64Encoder: string
    base64Decoder: string
    uuidGenerator: string
    timestampConverter: string
    urlEncoder: string
    urlDecoder: string
  }
  quickRefCategories: {
    title: string
    items: { token: string; insert: string; desc: string }[]
  }[]
  clear: string
  copyPattern: string
  copyText: string
  copyResults: string
  copyReplacePreview: string
  notify: {
    nothingToCopy: string
    copiedPattern: string
    copiedText: string
    copiedResults: string
    copiedReplace: string
    copiedShareLink: string
    copiedExport: string
    copiedGroups: string
    uploadedFile: string
  }
  examples: Record<string, { label: string; description: string }>
}

export interface RegexSeoSection {
  title: string
  paragraphs: string[]
}

export interface RegexTesterPageMessages {
  metaTitle: string
  metaDescription: string
  instructions: string[]
  seoSections: RegexSeoSection[]
  faq: FaqItem[]
}

const quickRefCategoriesEn: RegexToolMessages["quickRefCategories"] = [
  {
    title: "Character classes",
    items: [
      { token: ".", insert: ".", desc: "Any character" },
      { token: "\\d", insert: "\\d", desc: "Digit 0-9" },
      { token: "\\D", insert: "\\D", desc: "Non-digit" },
      { token: "\\w", insert: "\\w", desc: "Word char [A-Za-z0-9_]" },
      { token: "\\W", insert: "\\W", desc: "Non-word char" },
      { token: "\\s", insert: "\\s", desc: "Whitespace" },
      { token: "\\S", insert: "\\S", desc: "Non-whitespace" },
      { token: "[abc]", insert: "[abc]", desc: "One of a, b, or c" },
      { token: "[^abc]", insert: "[^abc]", desc: "Not a, b, or c" },
      { token: "[a-z]", insert: "[a-z]", desc: "Lowercase a-z" },
    ],
  },
  {
    title: "Anchors",
    items: [
      { token: "^", insert: "^", desc: "Start of line" },
      { token: "$", insert: "$", desc: "End of line" },
      { token: "\\b", insert: "\\b", desc: "Word boundary" },
      { token: "\\B", insert: "\\B", desc: "Non-word boundary" },
    ],
  },
  {
    title: "Quantifiers",
    items: [
      { token: "?", insert: "?", desc: "Zero or one" },
      { token: "*", insert: "*", desc: "Zero or more" },
      { token: "+", insert: "+", desc: "One or more" },
      { token: "{n}", insert: "{n}", desc: "Exactly n times" },
      { token: "{n,}", insert: "{n,}", desc: "n or more times" },
      { token: "{n,m}", insert: "{n,m}", desc: "Between n and m times" },
    ],
  },
  {
    title: "Groups & logic",
    items: [
      { token: "( )", insert: "()", desc: "Capturing group" },
      { token: "(?: )", insert: "(?:)", desc: "Non-capturing group" },
      { token: "(?= )", insert: "(?=)", desc: "Lookahead" },
      { token: "(?! )", insert: "(?!)", desc: "Negative lookahead" },
      { token: "a|b", insert: "|", desc: "Alternation (or)" },
    ],
  },
  {
    title: "Escape",
    items: [{ token: "\\\\", insert: "\\", desc: "Escape special char" }],
  },
]

const quickRefCategoriesZh: RegexToolMessages["quickRefCategories"] = [
  {
    title: "字符类",
    items: [
      { token: ".", insert: ".", desc: "任意字符" },
      { token: "\\d", insert: "\\d", desc: "数字 0-9" },
      { token: "\\D", insert: "\\D", desc: "非数字" },
      { token: "\\w", insert: "\\w", desc: "单词字符" },
      { token: "\\W", insert: "\\W", desc: "非单词字符" },
      { token: "\\s", insert: "\\s", desc: "空白字符" },
      { token: "\\S", insert: "\\S", desc: "非空白" },
      { token: "[abc]", insert: "[abc]", desc: "a/b/c 之一" },
      { token: "[^abc]", insert: "[^abc]", desc: "非 a/b/c" },
      { token: "[a-z]", insert: "[a-z]", desc: "小写字母 a-z" },
    ],
  },
  {
    title: "锚点",
    items: [
      { token: "^", insert: "^", desc: "行首" },
      { token: "$", insert: "$", desc: "行尾" },
      { token: "\\b", insert: "\\b", desc: "单词边界" },
      { token: "\\B", insert: "\\B", desc: "非单词边界" },
    ],
  },
  {
    title: "量词",
    items: [
      { token: "?", insert: "?", desc: "零次或一次" },
      { token: "*", insert: "*", desc: "零次或多次" },
      { token: "+", insert: "+", desc: "一次或多次" },
      { token: "{n}", insert: "{n}", desc: "恰好 n 次" },
      { token: "{n,}", insert: "{n,}", desc: "至少 n 次" },
      { token: "{n,m}", insert: "{n,m}", desc: "n 到 m 次" },
    ],
  },
  {
    title: "分组与逻辑",
    items: [
      { token: "( )", insert: "()", desc: "捕获组" },
      { token: "(?: )", insert: "(?:)", desc: "非捕获组" },
      { token: "(?= )", insert: "(?=)", desc: "正向先行断言" },
      { token: "(?! )", insert: "(?!)", desc: "负向先行断言" },
      { token: "a|b", insert: "|", desc: "或（二选一）" },
    ],
  },
  {
    title: "转义",
    items: [{ token: "\\\\", insert: "\\", desc: "转义特殊字符" }],
  },
]

const quickRefCategoriesJa: RegexToolMessages["quickRefCategories"] = [
  {
    title: "文字クラス",
    items: [
      { token: ".", insert: ".", desc: "任意の文字" },
      { token: "\\d", insert: "\\d", desc: "数字 0-9" },
      { token: "\\D", insert: "\\D", desc: "非数字" },
      { token: "\\w", insert: "\\w", desc: "単語文字" },
      { token: "\\W", insert: "\\W", desc: "非単語文字" },
      { token: "\\s", insert: "\\s", desc: "空白" },
      { token: "\\S", insert: "\\S", desc: "非空白" },
      { token: "[abc]", insert: "[abc]", desc: "a/b/c のいずれか" },
      { token: "[^abc]", insert: "[^abc]", desc: "a/b/c 以外" },
      { token: "[a-z]", insert: "[a-z]", desc: "小文字 a-z" },
    ],
  },
  {
    title: "アンカー",
    items: [
      { token: "^", insert: "^", desc: "行頭" },
      { token: "$", insert: "$", desc: "行末" },
      { token: "\\b", insert: "\\b", desc: "単語境界" },
      { token: "\\B", insert: "\\B", desc: "非単語境界" },
    ],
  },
  {
    title: "量詞",
    items: [
      { token: "?", insert: "?", desc: "0 回または 1 回" },
      { token: "*", insert: "*", desc: "0 回以上" },
      { token: "+", insert: "+", desc: "1 回以上" },
      { token: "{n}", insert: "{n}", desc: "ちょうど n 回" },
      { token: "{n,}", insert: "{n,}", desc: "n 回以上" },
      { token: "{n,m}", insert: "{n,m}", desc: "n から m 回" },
    ],
  },
  {
    title: "グループと論理",
    items: [
      { token: "( )", insert: "()", desc: "キャプチャグループ" },
      { token: "(?: )", insert: "(?:)", desc: "非キャプチャグループ" },
      { token: "(?= )", insert: "(?=)", desc: "先読み" },
      { token: "(?! )", insert: "(?!)", desc: "否定先読み" },
      { token: "a|b", insert: "|", desc: "または" },
    ],
  },
  {
    title: "エスケープ",
    items: [{ token: "\\\\", insert: "\\", desc: "特殊文字をエスケープ" }],
  },
]

const explainMeaningsEn: RegexToolMessages["explainMeanings"] = {
  "^": "Start of line / string",
  $: "End of line / string",
  ".": "Any character (except newline)",
  "|": "Alternation — match either side",
  "+": "One or more of the preceding",
  "*": "Zero or more of the preceding",
  "?": "Zero or one of the preceding",
  "{quant}": "Exact or bounded repetition",
  "\\d": "Any digit 0-9",
  "\\D": "Any non-digit",
  "\\w": "Word character [A-Za-z0-9_]",
  "\\W": "Non-word character",
  "\\s": "Whitespace character",
  "\\S": "Non-whitespace character",
  "\\b": "Word boundary",
  "\\B": "Non-word boundary",
  "(group)": "Capturing group",
  "(?:": "Non-capturing group",
  "(?=": "Positive lookahead",
  "(?!": "Negative lookahead",
  "(?<=": "Positive lookbehind",
  "(?<!": "Negative lookbehind",
  "[class]": "Character class — match one of",
  literal: "Literal character",
}

const explainMeaningsZh: RegexToolMessages["explainMeanings"] = {
  "^": "行首 / 字符串开始",
  $: "行尾 / 字符串结束",
  ".": "任意字符（不含换行）",
  "|": "或 — 匹配左右其一",
  "+": "前面模式一次或多次",
  "*": "前面模式零次或多次",
  "?": "前面模式零次或一次",
  "{quant}": "指定次数或范围重复",
  "\\d": "数字 0-9",
  "\\D": "非数字",
  "\\w": "单词字符",
  "\\W": "非单词字符",
  "\\s": "空白字符",
  "\\S": "非空白",
  "\\b": "单词边界",
  "\\B": "非单词边界",
  "(group)": "捕获组",
  "(?:": "非捕获组",
  "(?=": "正向先行断言",
  "(?!": "负向先行断言",
  "(?<=": "正向后行断言",
  "(?<!": "负向后行断言",
  "[class]": "字符类 — 匹配其中一种",
  literal: "字面量字符",
}

const explainMeaningsJa: RegexToolMessages["explainMeanings"] = {
  "^": "行頭 / 文字列の開始",
  $: "行末 / 文字列の終了",
  ".": "任意の文字（改行除く）",
  "|": "または — 左右のいずれか",
  "+": "直前のパターン 1 回以上",
  "*": "直前のパターン 0 回以上",
  "?": "直前のパターン 0 回または 1 回",
  "{quant}": "回数指定の繰り返し",
  "\\d": "数字 0-9",
  "\\D": "非数字",
  "\\w": "単語文字",
  "\\W": "非単語文字",
  "\\s": "空白",
  "\\S": "非空白",
  "\\b": "単語境界",
  "\\B": "非単語境界",
  "(group)": "キャプチャグループ",
  "(?:": "非キャプチャグループ",
  "(?=": "肯定先読み",
  "(?!": "否定先読み",
  "(?<=": "肯定後読み",
  "(?<!": "否定後読み",
  "[class]": "文字クラス — いずれか 1 文字",
  literal: "リテラル文字",
}

const patternSnippetsEn: RegexToolMessages["patternSnippets"] = [
  { label: "\\d+", insert: "\\d+" },
  { label: "\\w+", insert: "\\w+" },
  { label: ".*", insert: ".*" },
  { label: "[A-Za-z]+", insert: "[A-Za-z]+" },
  { label: "^…$", insert: "^$" },
  { label: "( )", insert: "()" },
]

const patternSnippetsZh: RegexToolMessages["patternSnippets"] = [
  { label: "\\d+", insert: "\\d+" },
  { label: "\\w+", insert: "\\w+" },
  { label: ".*", insert: ".*" },
  { label: "[A-Za-z]+", insert: "[A-Za-z]+" },
  { label: "^…$", insert: "^$" },
  { label: "( )", insert: "()" },
]

const patternSnippetsJa: RegexToolMessages["patternSnippets"] = [
  { label: "\\d+", insert: "\\d+" },
  { label: "\\w+", insert: "\\w+" },
  { label: ".*", insert: ".*" },
  { label: "[A-Za-z]+", insert: "[A-Za-z]+" },
  { label: "^…$", insert: "^$" },
  { label: "( )", insert: "()" },
]

export const regexToolEn: RegexToolMessages = {
  patternLabel: "Regular Expression",
  patternPlaceholder: "^[a-zA-Z0-9]+$",
  testTextLabel: "Test String",
  testTextPlaceholder: "Paste or type text to test against your regex...",
  flagsLabel: "Flags",
  flagDescriptions: {
    g: "Global — find all matches",
    i: "Ignore case",
    m: "Multiline — ^ and $ match line boundaries",
    s: "Dotall — . matches newlines",
    u: "Unicode — treat pattern as Unicode",
    y: "Sticky — match only at lastIndex",
  },
  highlightLabel: "Match Preview",
  highlightEmpty: "Enter a pattern and test string to see highlighted matches.",
  replaceLabel: "Replace with",
  replacePlaceholder: "e.g. [$1] or empty to remove matches",
  replacePreviewLabel: "Substitution preview",
  replaceHint: "Uses JavaScript replacement syntax ($1, $&, etc.)",
  modeTabMatch: "Match",
  modeTabReplace: "Replace",
  modeTabSplit: "Split",
  engineLabel: "JavaScript RegExp",
  nonGlobalHint: "g is off — only the first match is shown and replaced.",
  statsTitle: "Statistics",
  resultsTitle: "Match Details",
  errorTitle: "Invalid regular expression",
  matches: "Matches",
  groups: "Groups",
  status: "Status",
  statusEmpty: "Empty",
  statusValid: "Valid",
  statusInvalid: "Invalid",
  noMatches: "No matches found.",
  matchValue: "Value",
  matchPosition: "Position",
  matchLength: "Length",
  matchLineCol: "Line / Column",
  groupLabel: "Group",
  captureGroupsTitle: "Capture Groups",
  clearPattern: "Clear Regex",
  clearText: "Clear Text",
  pasteLabel: "Paste",
  copyGroups: "Copy Capture Groups",
  quickActionsTitle: "Quick Actions",
  fileTitle: "File",
  fileUploadHint: "Upload TXT, CSV, or JSON as test text. Export match results as TXT or JSON.",
  fileUploadLabel: "Upload file",
  fileExportTxt: "Export TXT",
  fileExportJson: "Export JSON",
  commonExamplesTitle: "Regex Pattern Library",
  librarySearchPlaceholder: "Search patterns…",
  quickRefTitle: "Quick Reference",
  quickRefHint: "Click a token to insert at cursor",
  patternHint: "Pick an example below, or click tokens on the left to build your pattern step by step.",
  explainTitle: "Explanation",
  explainEmpty: "Enter a valid pattern to see a step-by-step breakdown.",
  visualExplainTitle: "Pattern breakdown",
  explainMeanings: explainMeaningsEn,
  snippetsTitle: "Quick insert",
  patternSnippets: patternSnippetsEn,
  jumpToMatch: "Click to locate in preview",
  jumpToResult: "Click highlight to jump to match details",
  errorAtPosition: "Error near position {pos}",
  namedGroupLabel: "Named group",
  splitTitle: "Split",
  splitHint: "Split test string by pattern",
  splitEmpty: "Enter a pattern and test string to see split parts.",
  unitTestsTitle: "Unit tests",
  unitTestPlaceholder: "Test string",
  unitTestShouldMatch: "Should match",
  unitTestShouldNotMatch: "Should not match",
  unitTestAdd: "Add test",
  unitTestPass: "Pass",
  unitTestFail: "Fail",
  exportMatches: "Export values",
  exportCsv: "CSV",
  exportJson: "JSON",
  shareLink: "Copy share link",
  fullMatchFull: "Matches entire input",
  fullMatchPartial: "Partial match only",
  fullMatchNone: "No match",
  replaceCount: "{count} replacement(s)",
  largeTextWarning: "Large input ({count} chars) may slow matching. Consider uploading a file or trimming text.",
  shortcutsHint: "Tip: ⌘K opens tool search. Click explanation tokens to select pattern parts.",
  historyTitle: "Recent",
  historyEmpty: "No saved patterns yet.",
  historySave: "Save to history",
  relatedToolsTitle: "Related tools",
  relatedToolsDesc: "Continue with these WaiHub tools",
  hubLinks: {
    jsonFormatter: "JSON Formatter",
    jsonValidator: "JSON Validator",
    base64Encoder: "Base64 Encoder",
    base64Decoder: "Base64 Decoder",
    uuidGenerator: "UUID Generator",
    timestampConverter: "Timestamp Converter",
    urlEncoder: "URL Encoder",
    urlDecoder: "URL Decoder",
  },
  quickRefCategories: quickRefCategoriesEn,
  clear: "Clear",
  copyPattern: "Copy pattern",
  copyText: "Copy text",
  copyResults: "Copy results",
  copyReplacePreview: "Copy preview",
  notify: {
    nothingToCopy: "Nothing to copy",
    copiedPattern: "Copied regex pattern",
    copiedText: "Copied test string",
    copiedResults: "Copied match results",
    copiedReplace: "Copied substitution result",
    copiedShareLink: "Copied share link",
    copiedExport: "Copied export",
    copiedGroups: "Copied capture groups",
    uploadedFile: "Loaded file into test text",
  },
  examples: {
    email: { label: "Email Validation", description: "Validate email addresses" },
    url: { label: "URL Validation", description: "HTTP/HTTPS URLs" },
    phone: { label: "Phone Number Validation", description: "10–15 digit numbers" },
    username: { label: "Username Validation", description: "3–20 alphanumeric chars" },
    password: { label: "Password Validation", description: "Letters + digits, min 8" },
    ipv4: { label: "IPv4 Validation", description: "IPv4 address pattern" },
    ipv6: { label: "IPv6 Validation", description: "IPv6 address pattern" },
    date: { label: "Date Validation", description: "YYYY-MM-DD dates" },
    time: { label: "Time Validation", description: "HH:MM or HH:MM:SS" },
    postalCode: { label: "Postal Code Validation", description: "US ZIP / ZIP+4" },
    creditCard: { label: "Credit Card Validation", description: "16-digit card groups" },
    hexColor: { label: "Hex Color Validation", description: "#RGB or #RRGGBB" },
    domain: { label: "Domain Validation", description: "Domain name pattern" },
    uuid: { label: "UUID Validation", description: "UUID v1–v5 format" },
    jsonValue: { label: "JSON Value Validation", description: "Double-quoted JSON strings" },
    htmlTag: { label: "HTML Tag Matching", description: "Simple HTML tags" },
    markdownLink: { label: "Markdown Link Matching", description: "[text](url) links" },
  },
}

export const regexToolZh: RegexToolMessages = {
  patternLabel: "正则表达式",
  patternPlaceholder: "^[a-zA-Z0-9]+$",
  testTextLabel: "测试文本",
  testTextPlaceholder: "粘贴或输入待匹配的文本...",
  flagsLabel: "Flags",
  flagDescriptions: {
    g: "全局 — 查找所有匹配",
    i: "忽略大小写",
    m: "多行 — ^ 和 $ 匹配行边界",
    s: "单行 — . 匹配换行符",
    u: "Unicode — 按 Unicode 处理",
    y: "粘性 — 仅从 lastIndex 匹配",
  },
  highlightLabel: "匹配预览",
  highlightEmpty: "输入正则和测试文本后，将在此高亮显示匹配结果。",
  replaceLabel: "替换为",
  replacePlaceholder: "如 [$1] 或留空表示删除匹配",
  replacePreviewLabel: "替换预览",
  replaceHint: "支持 JavaScript 替换语法（$1、$& 等）",
  modeTabMatch: "匹配",
  modeTabReplace: "替换",
  modeTabSplit: "分割",
  engineLabel: "JavaScript RegExp",
  nonGlobalHint: "未勾选 g — 仅显示并替换第一个匹配。",
  statsTitle: "统计",
  resultsTitle: "匹配详情",
  errorTitle: "无效的正则表达式",
  matches: "匹配数",
  groups: "捕获组",
  status: "状态",
  statusEmpty: "空",
  statusValid: "有效",
  statusInvalid: "无效",
  noMatches: "未找到匹配。",
  matchValue: "值",
  matchPosition: "位置",
  matchLength: "长度",
  matchLineCol: "行 / 列",
  groupLabel: "组",
  captureGroupsTitle: "捕获组",
  clearPattern: "清空正则",
  clearText: "清空文本",
  pasteLabel: "粘贴",
  copyGroups: "复制捕获组",
  quickActionsTitle: "快捷操作",
  fileTitle: "文件",
  fileUploadHint: "上传 TXT、CSV 或 JSON 作为测试文本；可将匹配结果导出为 TXT 或 JSON。",
  fileUploadLabel: "上传文件",
  fileExportTxt: "导出 TXT",
  fileExportJson: "导出 JSON",
  commonExamplesTitle: "常用正则库",
  librarySearchPlaceholder: "搜索模式…",
  quickRefTitle: "速查表",
  quickRefHint: "点击符号插入到光标位置",
  patternHint: "可先点下方示例，或点左侧速查表逐步拼出正则。",
  explainTitle: "正则解释",
  explainEmpty: "输入有效正则后，将逐段显示含义。",
  visualExplainTitle: "模式拆解",
  explainMeanings: explainMeaningsZh,
  snippetsTitle: "快捷插入",
  patternSnippets: patternSnippetsZh,
  jumpToMatch: "点击定位到预览",
  jumpToResult: "点击高亮跳转到匹配详情",
  errorAtPosition: "错误位置约在第 {pos} 个字符",
  namedGroupLabel: "命名组",
  splitTitle: "分割",
  splitHint: "按正则分割测试文本",
  splitEmpty: "输入正则和测试文本后显示分割结果。",
  unitTestsTitle: "单元测试",
  unitTestPlaceholder: "测试字符串",
  unitTestShouldMatch: "应匹配",
  unitTestShouldNotMatch: "不应匹配",
  unitTestAdd: "添加测试",
  unitTestPass: "通过",
  unitTestFail: "失败",
  exportMatches: "导出匹配值",
  exportCsv: "CSV",
  exportJson: "JSON",
  shareLink: "复制分享链接",
  fullMatchFull: "匹配整个输入",
  fullMatchPartial: "仅部分匹配",
  fullMatchNone: "无匹配",
  replaceCount: "将替换 {count} 处",
  largeTextWarning: "输入较大（{count} 字符），匹配可能变慢，建议上传文件或缩短文本。",
  shortcutsHint: "提示：⌘K 打开工具搜索；点击解析 token 可选中模式片段。",
  historyTitle: "最近使用",
  historyEmpty: "暂无保存记录。",
  historySave: "保存到历史",
  relatedToolsTitle: "相关工具",
  relatedToolsDesc: "继续使用这些 WaiHub 工具",
  hubLinks: {
    jsonFormatter: "JSON 格式化",
    jsonValidator: "JSON 校验",
    base64Encoder: "Base64 编码",
    base64Decoder: "Base64 解码",
    uuidGenerator: "UUID 生成器",
    timestampConverter: "时间戳转换",
    urlEncoder: "URL 编码",
    urlDecoder: "URL 解码",
  },
  quickRefCategories: quickRefCategoriesZh,
  clear: "清空",
  copyPattern: "复制正则",
  copyText: "复制文本",
  copyResults: "复制结果",
  copyReplacePreview: "复制预览",
  notify: {
    nothingToCopy: "没有可复制的内容",
    copiedPattern: "已复制正则表达式",
    copiedText: "已复制测试文本",
    copiedResults: "已复制匹配结果",
    copiedReplace: "已复制替换结果",
    copiedShareLink: "已复制分享链接",
    copiedExport: "已复制导出内容",
    copiedGroups: "已复制捕获组",
    uploadedFile: "已加载文件到测试文本",
  },
  examples: {
    email: { label: "邮箱验证", description: "验证邮箱地址" },
    url: { label: "URL 验证", description: "HTTP/HTTPS 链接" },
    phone: { label: "手机号验证", description: "10–15 位数字" },
    username: { label: "用户名验证", description: "3–20 位字母数字下划线" },
    password: { label: "密码验证", description: "字母+数字，至少 8 位" },
    ipv4: { label: "IPv4 验证", description: "IPv4 地址格式" },
    ipv6: { label: "IPv6 验证", description: "IPv6 地址格式" },
    date: { label: "日期验证", description: "YYYY-MM-DD" },
    time: { label: "时间验证", description: "HH:MM 或 HH:MM:SS" },
    postalCode: { label: "邮编验证", description: "美国 ZIP / ZIP+4" },
    creditCard: { label: "信用卡号验证", description: "16 位卡号分组" },
    hexColor: { label: "十六进制颜色", description: "#RGB 或 #RRGGBB" },
    domain: { label: "域名验证", description: "域名格式" },
    uuid: { label: "UUID 验证", description: "UUID v1–v5" },
    jsonValue: { label: "JSON 字符串", description: "双引号 JSON 值" },
    htmlTag: { label: "HTML 标签", description: "简单 HTML 标签" },
    markdownLink: { label: "Markdown 链接", description: "[文本](URL)" },
  },
}

export const regexToolJa: RegexToolMessages = {
  patternLabel: "正規表現",
  patternPlaceholder: "^[a-zA-Z0-9]+$",
  testTextLabel: "テスト文字列",
  testTextPlaceholder: "マッチさせるテキストを入力または貼り付け...",
  flagsLabel: "フラグ",
  flagDescriptions: {
    g: "グローバル — すべての一致を検索",
    i: "大文字小文字を無視",
    m: "複数行 — ^ と $ が行境界に一致",
    s: "ドットオール — . が改行にも一致",
    u: "Unicode — Unicode として処理",
    y: "スティッキー — lastIndex からのみ一致",
  },
  highlightLabel: "マッチプレビュー",
  highlightEmpty: "パターンとテスト文字列を入力すると、ここにハイライト表示されます。",
  replaceLabel: "置換文字列",
  replacePlaceholder: "例: [$1] または空で削除",
  replacePreviewLabel: "置換プレビュー",
  replaceHint: "JavaScript の置換構文（$1、$& など）に対応",
  modeTabMatch: "マッチ",
  modeTabReplace: "置換",
  modeTabSplit: "分割",
  engineLabel: "JavaScript RegExp",
  nonGlobalHint: "g オフ — 最初の一致のみ表示・置換します。",
  statsTitle: "統計",
  resultsTitle: "マッチ詳細",
  errorTitle: "無効な正規表現",
  matches: "マッチ数",
  groups: "キャプチャグループ",
  status: "状態",
  statusEmpty: "空",
  statusValid: "有効",
  statusInvalid: "無効",
  noMatches: "一致なし。",
  matchValue: "値",
  matchPosition: "位置",
  matchLength: "長さ",
  matchLineCol: "行 / 列",
  groupLabel: "グループ",
  captureGroupsTitle: "キャプチャグループ",
  clearPattern: "正規表現をクリア",
  clearText: "テキストをクリア",
  pasteLabel: "貼り付け",
  copyGroups: "キャプチャをコピー",
  quickActionsTitle: "クイック操作",
  fileTitle: "ファイル",
  fileUploadHint: "TXT / CSV / JSON をテスト文字列として読み込み。結果を TXT / JSON でエクスポート。",
  fileUploadLabel: "ファイルをアップロード",
  fileExportTxt: "TXT エクスポート",
  fileExportJson: "JSON エクスポート",
  commonExamplesTitle: "正規表現ライブラリ",
  librarySearchPlaceholder: "パターンを検索…",
  quickRefTitle: "クイックリファレンス",
  quickRefHint: "クリックでカーソル位置に挿入",
  patternHint: "下のサンプルを選ぶか、左のリファレンスから記号をクリックして組み立てます。",
  explainTitle: "解説",
  explainEmpty: "有効なパターンを入力すると、各部分の意味を表示します。",
  visualExplainTitle: "パターン分解",
  explainMeanings: explainMeaningsJa,
  snippetsTitle: "クイック挿入",
  patternSnippets: patternSnippetsJa,
  jumpToMatch: "クリックでプレビュー内を表示",
  jumpToResult: "ハイライトをクリックで詳細へ",
  errorAtPosition: "エラー位置: 約 {pos} 文字目",
  namedGroupLabel: "名前付きグループ",
  splitTitle: "分割",
  splitHint: "パターンでテスト文字列を分割",
  splitEmpty: "パターンとテキストを入力すると分割結果を表示します。",
  unitTestsTitle: "ユニットテスト",
  unitTestPlaceholder: "テスト文字列",
  unitTestShouldMatch: "一致すべき",
  unitTestShouldNotMatch: "一致しない",
  unitTestAdd: "テスト追加",
  unitTestPass: "合格",
  unitTestFail: "不合格",
  exportMatches: "値をエクスポート",
  exportCsv: "CSV",
  exportJson: "JSON",
  shareLink: "共有リンクをコピー",
  fullMatchFull: "入力全体に一致",
  fullMatchPartial: "部分一致のみ",
  fullMatchNone: "一致なし",
  replaceCount: "{count} 箇所を置換",
  largeTextWarning: "入力が大きい（{count} 文字）。マッチが遅くなる場合があります。",
  shortcutsHint: "ヒント: ⌘K でツール検索。解説トークンをクリックでパターン部分を選択。",
  historyTitle: "最近",
  historyEmpty: "保存されたパターンはありません。",
  historySave: "履歴に保存",
  relatedToolsTitle: "関連ツール",
  relatedToolsDesc: "これらの WaiHub ツールもご利用ください",
  hubLinks: {
    jsonFormatter: "JSON フォーマッタ",
    jsonValidator: "JSON バリデータ",
    base64Encoder: "Base64 エンコード",
    base64Decoder: "Base64 デコード",
    uuidGenerator: "UUID ジェネレータ",
    timestampConverter: "タイムスタンプ変換",
    urlEncoder: "URL エンコード",
    urlDecoder: "URL デコード",
  },
  quickRefCategories: quickRefCategoriesJa,
  clear: "クリア",
  copyPattern: "パターンをコピー",
  copyText: "テキストをコピー",
  copyResults: "結果をコピー",
  copyReplacePreview: "プレビューをコピー",
  notify: {
    nothingToCopy: "コピーする内容がありません",
    copiedPattern: "正規表現をコピーしました",
    copiedText: "テスト文字列をコピーしました",
    copiedResults: "マッチ結果をコピーしました",
    copiedReplace: "置換結果をコピーしました",
    copiedShareLink: "共有リンクをコピーしました",
    copiedExport: "エクスポート内容をコピーしました",
    copiedGroups: "キャプチャグループをコピーしました",
    uploadedFile: "ファイルをテスト文字列に読み込みました",
  },
  examples: {
    email: { label: "メール検証", description: "メールアドレス検証" },
    url: { label: "URL 検証", description: "HTTP/HTTPS URL" },
    phone: { label: "電話番号検証", description: "10–15 桁の数字" },
    username: { label: "ユーザー名検証", description: "英数字 3–20 文字" },
    password: { label: "パスワード検証", description: "英字+数字、8 文字以上" },
    ipv4: { label: "IPv4 検証", description: "IPv4 アドレス" },
    ipv6: { label: "IPv6 検証", description: "IPv6 アドレス" },
    date: { label: "日付検証", description: "YYYY-MM-DD" },
    time: { label: "時刻検証", description: "HH:MM または HH:MM:SS" },
    postalCode: { label: "郵便番号検証", description: "米国 ZIP / ZIP+4" },
    creditCard: { label: "クレジットカード", description: "16 桁カード番号" },
    hexColor: { label: "16進カラー", description: "#RGB または #RRGGBB" },
    domain: { label: "ドメイン検証", description: "ドメイン名パターン" },
    uuid: { label: "UUID 検証", description: "UUID v1–v5" },
    jsonValue: { label: "JSON 値", description: "二重引用符 JSON 文字列" },
    htmlTag: { label: "HTML タグ", description: "簡易 HTML タグ" },
    markdownLink: { label: "Markdown リンク", description: "[text](url)" },
  },
}

export const regexTesterPageEn: RegexTesterPageMessages = buildRegexTesterPage(
  {
    metaTitle: "Regex Tester - Test Regular Expressions Online",
    metaDescription:
      "Free online Regex Tester. Test JavaScript regular expressions, validate patterns, highlight matches, inspect capture groups, and debug regex instantly.",
    instructions: [
      "Enter a regex pattern and test string — matches update in real time with highlighting and capture group details.",
      "Uses native JavaScript RegExp (ECMAScript). All processing runs in your browser; nothing is uploaded.",
    ],
  },
  regexPageSeoEn,
  regexPageFaqEn
)

export const regexTesterPageZh: RegexTesterPageMessages = buildRegexTesterPage(
  {
    metaTitle: "正则表达式测试 - 在线 Regex 调试工具",
    metaDescription:
      "免费在线正则测试工具。验证 JavaScript 正则、高亮匹配、查看捕获组，浏览器内即时调试。",
    instructions: [
      "输入正则表达式和测试文本，实时高亮匹配并展示捕获组详情。",
      "使用 JavaScript 原生 RegExp（ECMAScript），全部在浏览器内运行，不上传数据。",
    ],
  },
  regexPageSeoZh,
  regexPageFaqZh
)

export const regexTesterPageJa: RegexTesterPageMessages = buildRegexTesterPage(
  {
    metaTitle: "正規表現テスター - オンライン Regex デバッグ",
    metaDescription:
      "無料オンライン正規表現テスター。JavaScript 正規表現の検証、マッチハイライト、キャプチャグループ確認をブラウザ内で即座に。",
    instructions: [
      "正規表現パターンとテスト文字列を入力すると、リアルタイムでハイライトとキャプチャグループ詳細が表示されます。",
      "JavaScript ネイティブ RegExp（ECMAScript）を使用。すべてブラウザ内で処理され、アップロードはありません。",
    ],
  },
  regexPageSeoJa,
  regexPageFaqJa
)
