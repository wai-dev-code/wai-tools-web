import type { RegexSeoSection, RegexTesterPageMessages } from "@/lib/i18n/messages/regex-tool-messages"

const seoEn: RegexSeoSection[] = [
  {
    title: "What Is Regex",
    paragraphs: [
      "A regular expression (regex) is a sequence of characters that defines a search pattern. Developers use regex to validate input, extract data, and replace text in strings.",
      "This Regex Tester runs JavaScript RegExp in your browser so you can see matches, positions, and capture groups instantly.",
    ],
  },
  {
    title: "How Regex Works",
    paragraphs: [
      "The engine scans your test text and tries to match the pattern left to right. Metacharacters like ., *, +, ?, [], (), {}, ^, $, and | control how characters are matched.",
      "Flags change behavior: g finds all matches, i ignores case, m treats ^ and $ as line anchors, s lets . match newlines, u enables Unicode, and y sticks to lastIndex.",
    ],
  },
  {
    title: "Regex Use Cases",
    paragraphs: [
      "Common uses include email and URL validation, parsing logs, extracting numbers, cleaning CSV data, and refactoring code with search-and-replace.",
      "Use the pattern library on this page to load proven templates for emails, phone numbers, UUIDs, HTML tags, and more.",
    ],
  },
  {
    title: "Regex Best Practices",
    paragraphs: [
      "Prefer simple patterns, test edge cases, and anchor when validating whole strings (^ … $). Use non-capturing groups (?:) when you do not need extracted values.",
      "For passwords and security-sensitive rules, combine regex with additional server-side checks rather than relying on regex alone.",
    ],
  },
  {
    title: "Common Regex Mistakes",
    paragraphs: [
      "Forgetting to escape special characters, greedy quantifiers matching too much, and assuming regex is the same across languages are frequent pitfalls.",
      "In JavaScript, remember that replace and match behavior depend on flags — especially global (g) — and invalid patterns throw SyntaxError with a position hint.",
    ],
  },
]

const seoZh: RegexSeoSection[] = [
  {
    title: "什么是正则表达式",
    paragraphs: [
      "正则表达式（Regex）是用来描述字符串匹配规则的模式，常用于表单校验、搜索与数据提取。",
      "本工具在浏览器内运行 JavaScript RegExp，可实时查看匹配、位置与捕获组。",
    ],
  },
  {
    title: "正则如何工作",
    paragraphs: [
      "引擎从左到右扫描测试文本并尝试匹配模式。元字符如 .、*、+、?、[]、()、{}、^、$、| 控制匹配方式。",
      "Flags 会改变行为：g 查找全部匹配，i 忽略大小写，m 让 ^/$ 匹配行边界，s 让 . 匹配换行，u 启用 Unicode，y 为粘性匹配。",
    ],
  },
  {
    title: "正则使用场景",
    paragraphs: [
      "常见场景包括邮箱/URL 校验、日志解析、提取数字、清洗 CSV 以及批量替换代码。",
      "可使用本页「常用正则库」一键加载邮箱、手机号、UUID、HTML 标签等模板。",
    ],
  },
  {
    title: "正则最佳实践",
    paragraphs: [
      "优先写简单模式，覆盖边界用例；做整串校验时使用 ^ 与 $ 锚点。不需要提取时用 (?:) 非捕获组。",
      "密码等安全规则应结合服务端校验，不要仅依赖正则。",
    ],
  },
  {
    title: "常见正则错误",
    paragraphs: [
      "未转义特殊字符、贪婪量词匹配过多、以及误以为各语言正则完全一致，都是常见问题。",
      "在 JavaScript 中，replace/match 行为受 flags 影响（尤其 g）；无效正则会抛出带位置提示的 SyntaxError。",
    ],
  },
]

const seoJa: RegexSeoSection[] = [
  {
    title: "正規表現とは",
    paragraphs: [
      "正規表現（Regex）は文字列のパターンを記述するための記法で、バリデーション、検索、データ抽出に使われます。",
      "このテスターはブラウザ内で JavaScript RegExp を実行し、一致・位置・キャプチャグループを即座に表示します。",
    ],
  },
  {
    title: "正規表現の仕組み",
    paragraphs: [
      "エンジンはテキストを左から走査しパターンとの一致を試みます。. * + ? [] () {} ^ $ | などのメタ文字が動作を制御します。",
      "フラグ g i m s u y により、全体検索、大文字小文字無視、複数行、ドットオール、Unicode、スティッキーなどが変わります。",
    ],
  },
  {
    title: "活用例",
    paragraphs: [
      "メール・URL 検証、ログ解析、数値抽出、CSV 整形、コード置換などに利用されます。",
      "本ページのライブラリからメール、電話番号、UUID、HTML タグなどのテンプレートを読み込めます。",
    ],
  },
  {
    title: "ベストプラクティス",
    paragraphs: [
      "シンプルなパターンを優先し、境界ケースをテストしてください。文字列全体の検証には ^ と $ を使います。",
      "パスワードなどは正規表現だけでなくサーバー側チェックも併用してください。",
    ],
  },
  {
    title: "よくある間違い",
    paragraphs: [
      "特殊文字のエスケープ忘れ、贪婪量詞の使いすぎ、言語間の仕様差の見落としが多いです。",
      "JavaScript ではフラグ（特に g）が結果に影響し、無効なパターンは位置付き SyntaxError になります。",
    ],
  },
]

const faqEn = [
  { q: "What is regex?", a: "Regex (regular expressions) are patterns for matching and manipulating text. They are built from literals and special operators." },
  { q: "How do I test regex online?", a: "Enter your pattern and test string on this page. Matches highlight in real time with index, length, and capture groups." },
  { q: "What does \\d mean?", a: "\\d matches any digit character (0–9) in JavaScript regex." },
  { q: "What does \\w mean?", a: "\\w matches word characters: letters, digits, and underscore [A-Za-z0-9_]." },
  { q: "What does + mean?", a: "The + quantifier means one or more of the preceding token." },
  { q: "What does * mean?", a: "The * quantifier means zero or more of the preceding token." },
  { q: "What is a capture group?", a: "Parentheses ( ) create a capture group. The matched substring is stored as $1, $2, … in replacements and in match.groups." },
  { q: "How do I validate email with regex?", a: "Use a pattern like ^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$ with anchors for full-string validation. Load the Email example from the library." },
  { q: "How do I match URLs?", a: "Match http:// or https:// followed by domain and path characters. See the URL Validation template in the pattern library." },
  { q: "What is regex multiline mode?", a: "The m flag makes ^ and $ match the start and end of each line instead of the whole string." },
  { q: "What is regex global mode?", a: "The g flag finds all matches in the text instead of stopping at the first match." },
  { q: "How do I extract numbers with regex?", a: "Use \\d+ to match sequences of digits. With the g flag, all number groups in the text are returned." },
  { q: "How do I match phone numbers?", a: "Digit patterns such as \\b\\d{10,15}\\b work for many formats. Adjust for country-specific rules." },
  { q: "How do I test regex in JavaScript?", a: "Use new RegExp(pattern, flags) or /pattern/flags. This tool uses the same engine as your browser." },
  { q: "How do I debug regex?", a: "Check invalid-pattern errors, toggle flags, inspect capture groups, and use the explanation panel to see what each token means." },
  { q: "What are regex flags?", a: "Flags are letters after the closing / that set g, i, m, s, u, or y behavior in JavaScript." },
  { q: "Can regex validate passwords?", a: "Regex can enforce character rules (length, letters, digits). Always add server-side checks for real security." },
  { q: "What is regex lookahead?", a: "(?=…) is a positive lookahead: it asserts a pattern ahead without consuming characters." },
  { q: "What is regex lookbehind?", a: "(?<=…) and (?<!…) are lookbehinds in modern JavaScript for assertions before the current position." },
  { q: "What is regex tester used for?", a: "To prototype, validate, and debug regular expressions before using them in apps, scripts, or data pipelines." },
]

const faqZh = [
  { q: "什么是正则表达式？", a: "正则（Regex）是用于匹配和处理文本的模式，由普通字符与元字符组成。" },
  { q: "如何在线测试正则？", a: "在本页输入正则与测试文本，即可实时高亮匹配并查看位置、长度与捕获组。" },
  { q: "\\d 是什么意思？", a: "\\d 在 JavaScript 正则中表示任意数字（0–9）。" },
  { q: "\\w 是什么意思？", a: "\\w 匹配单词字符：字母、数字与下划线。" },
  { q: "+ 是什么意思？", a: "+ 表示前面的元素出现一次或多次。" },
  { q: "* 是什么意思？", a: "* 表示前面的元素出现零次或多次。" },
  { q: "什么是捕获组？", a: "圆括号 ( ) 会创建捕获组，匹配片段可在替换中用 $1、$2 引用，或在 match.groups 中读取。" },
  { q: "如何用正则验证邮箱？", a: "可使用 ^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$ 等模式，并配合 ^ $ 做整串校验。点击常用库中的邮箱示例即可。" },
  { q: "如何匹配 URL？", a: "匹配 http(s):// 加域名与路径字符。可参考常用正则库中的 URL 模板。" },
  { q: "什么是正则多行模式？", a: "m 标志让 ^ 和 $ 匹配每一行的行首与行尾，而非整个字符串。" },
  { q: "什么是正则全局模式？", a: "g 标志会查找文本中所有匹配，而不是在第一个匹配后停止。" },
  { q: "如何用正则提取数字？", a: "使用 \\d+ 匹配连续数字；配合 g 可得到文中所有数字匹配。" },
  { q: "如何匹配手机号？", a: "可用 \\b\\d{10,15}\\b 等数字模式，再按国家/地区规则调整。" },
  { q: "如何在 JavaScript 中测试正则？", a: "使用 new RegExp(pattern, flags) 或 /pattern/flags，与本工具引擎一致。" },
  { q: "如何调试正则？", a: "查看语法错误与位置、切换 flags、检查捕获组，并用解释面板理解各符号含义。" },
  { q: "正则 flags 是什么？", a: "flags 是模式后的 g、i、m、s、u、y 等字母，用于改变匹配行为。" },
  { q: "正则能验证密码吗？", a: "可用于长度、字符种类等规则，但真实场景必须结合服务端安全校验。" },
  { q: "什么是正向先行断言？", a: "(?=…) 表示前方必须满足某模式，但不消耗字符。" },
  { q: "什么是反向先行/后行断言？", a: "现代 JavaScript 支持 (?<=…) 与 (?<!…) 等后行断言（视引擎版本而定）。" },
  { q: "正则测试工具有什么用？", a: "在写入应用、脚本或数据流程前，快速验证与调试正则表达式。" },
]

const faqJa = [
  { q: "正規表現とは？", a: "テキストのパターンを記述し、一致・置換・検証に使う記法です。" },
  { q: "オンラインで Regex をテストするには？", a: "このページにパターンとテスト文字列を入力すると、リアルタイムでハイライトと詳細が表示されます。" },
  { q: "\\d の意味は？", a: "\\d は数字（0–9）に一致します。" },
  { q: "\\w の意味は？", a: "\\w は英数字とアンダースコアに一致します。" },
  { q: "+ の意味は？", a: "直前の要素が 1 回以上であることを表します。" },
  { q: "* の意味は？", a: "直前の要素が 0 回以上であることを表します。" },
  { q: "キャプチャグループとは？", a: "( ) でグループ化し、一致部分を $1 や match.groups で参照できます。" },
  { q: "メールを Regex で検証するには？", a: "^…$ で囲んだメール用パターンを使い、ライブラリの Email 例を読み込んでください。" },
  { q: "URL を一致させるには？", a: "http(s):// から始まるパターンを使います。URL 検証テンプレートを参照してください。" },
  { q: "複数行モードとは？", a: "m フラグで ^ と $ が各行の境界に一致します。" },
  { q: "グローバルモードとは？", a: "g フラグでテキスト内のすべての一致を検索します。" },
  { q: "数字を抽出するには？", a: "\\d+ を使い、g フラグで全文から数字列を取得できます。" },
  { q: "電話番号を一致させるには？", a: "\\b\\d{10,15}\\b などの桁パターンを使い、国ごとに調整します。" },
  { q: "JavaScript で Regex をテストするには？", a: "new RegExp またはリテラル /pattern/flags を使います。本ツールと同じエンジンです。" },
  { q: "Regex のデバッグ方法は？", a: "エラー位置、フラグ、キャプチャ、解説パネルを確認してください。" },
  { q: "Regex フラグとは？", a: "g i m s u y など、マッチ動作を変えるオプションです。" },
  { q: "パスワードを Regex で検証できる？", a: "文字種ルールには使えますが、セキュリティはサーバー側でも必ず検証してください。" },
  { q: "先読み（lookahead）とは？", a: "(?=…) は前方にパターンがあることを確認し、文字を消費しません。" },
  { q: "後読み（lookbehind）とは？", a: "(?<=…) などで後方条件を断言できます（環境により異なります）。" },
  { q: "Regex テスターの用途は？", a: "アプリやスクリプトに組み込む前にパターンを試し、動作を確認するためです。" },
]

export function buildRegexTesterPage(
  base: Pick<RegexTesterPageMessages, "metaTitle" | "metaDescription" | "instructions">,
  seo: RegexSeoSection[],
  faq: { q: string; a: string }[]
): RegexTesterPageMessages {
  return { ...base, seoSections: seo, faq }
}

export const regexPageSeoEn = seoEn
export const regexPageSeoZh = seoZh
export const regexPageSeoJa = seoJa
export const regexPageFaqEn = faqEn
export const regexPageFaqZh = faqZh
export const regexPageFaqJa = faqJa
