import type { Messages } from "@/lib/i18n/messages/types"
import { jsonToolEn } from "@/lib/i18n/messages/json-tool-messages"
import { base64ToolEn } from "@/lib/i18n/messages/base64-tool-messages"
import { urlToolEn, urlEncoderPageEn } from "@/lib/i18n/messages/url-tool-messages"
import { jwtToolEn, jwtDecoderPageEn } from "@/lib/i18n/messages/jwt-tool-messages"
import { timestampToolEn, timestampPageEn } from "@/lib/i18n/messages/timestamp-tool-messages"
import { uuidToolEn, uuidGeneratorPageEn } from "@/lib/i18n/messages/uuid-tool-messages"
import { regexToolEn, regexTesterPageEn } from "@/lib/i18n/messages/regex-tool-messages"
import {
  passwordToolEn,
  passwordGeneratorPageEn,
} from "@/lib/i18n/messages/password-tool-messages"
import { qrToolEn, qrCodeGeneratorPageEn } from "@/lib/i18n/messages/qr-tool-messages"
import { hashToolEn, hashGeneratorPageEn } from "@/lib/i18n/messages/hash-tool-messages"
import {
  htmlEncoderToolEn,
  htmlEncoderPageEn,
} from "@/lib/i18n/messages/html-encoder-tool-messages"
import { textDiffToolEn, textDiffPageEn } from "@/lib/i18n/messages/text-diff-tool-messages"
import {
  cronParserToolEn,
  cronParserPageEn,
} from "@/lib/i18n/messages/cron-parser-tool-messages"
import {
  colorConverterToolEn,
  colorConverterPageEn,
} from "@/lib/i18n/messages/color-converter-tool-messages"
import { staticEn } from "@/lib/i18n/messages/static-pages"
import { blogPostsBatch2En } from "@/lib/i18n/messages/blog-posts-batch2-en"
import { legalEn } from "@/lib/i18n/messages/legal-pages"
import { seoEn } from "@/lib/i18n/messages/seo-pages"

const en: Messages = {
  locale: "en",
  common: {
    home: "Home",
    tools: "Tools",
    blog: "Blog",
    about: "About",
    openTools: "Open Tools",
    footerTagline: "WaiHub — A free developer tools hub that runs in your browser. Privacy-first.",
    footerTools: "Tools",
    footerResources: "Resources",
    footerLegal: "Legal",
    allTools: "All Tools",
    jsonFormatter: "JSON Formatter",
    base64: "Base64 Encode/Decode",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    cookies: "Cookie Policy",
    changelog: "Changelog",
    contact: "Contact",
    localRun: "In-browser",
    free: "Free",
    instructions: "How to Use",
    faq: "FAQ",
    relatedTools: "Related Tools",
    copyright: "All rights reserved.",
    notFoundMessage: "Page not found",
    notFoundHome: "Back to home",
    notFoundBrowseTools: "Browse tools",
    adLabel: "Advertisement",
    adDisclaimer: "Ads are served by third parties. Data you enter in the tool is not shared with advertisers.",
    workflowNext: "Next steps",
    commandPaletteTitle: "Quick open",
    commandPalettePlaceholder: "Search tools…",
    commandPaletteRecent: "Recent",
    commandPaletteAllTools: "All tools",
    commandPaletteShortcut: "⌘K",
    openCommandPalette: "Search tools",
  },
  workspace: {
    sidebarExpand: "Expand sidebar",
    sidebarCollapse: "Collapse sidebar",
    scaleCompact: "Compact",
    scaleComfortable: "Comfortable",
    scaleLarge: "Large",
    focusMode: "Focus mode",
    exitFocus: "Exit focus",
    panelFullscreen: "Fullscreen panel",
    panelExitFullscreen: "Exit fullscreen",
    reset: "Reset layout",
    zoomIn: "Enlarge workspace",
    zoomOut: "Shrink workspace",
    workspaceSize: "Workspace size",
    workspaceHint: "Adjust editor height for this tool",
  },
  home: {
    metaTitle: "WaiHub - Developer Tools Hub Online",
    metaDescription:
      "Free developer tools hub: JSON, Base64, URL encoder, JWT, UUID, regex, hash, QR code, HTML encoder, text diff, cron & more. 14 tools, browser-based, privacy-first.",
    title: "Developer Tools Hub",
    subtitle:
      "{n} tools in one place — JSON, encoding, JWT, Regex & more. Processed in your browser, not on our servers. English · 中文 · 日本語",
    blogSectionTitle: "Tips & tutorials",
    blogViewAll: "View all posts",
    blogSectionSubtitle: "Guides, tutorials, and best practices for every tool.",
    heroBadge: "Developer tools · Privacy-first",
    heroCta: "Browse all tools",
    heroCtaSecondary: "Read the blog",
    toolsSectionTitle: "Every tool you need",
    toolsSectionSubtitle: "Search, filter, and open any utility — all processing stays in your browser.",
    stats: [
      { value: "14", label: "Free developer tools" },
      { value: "3", label: "Languages supported" },
      { value: "0", label: "Signup required" },
      { value: "100%", label: "Browser-based" },
    ],
    faqSubtitle: "Quick answers about pricing, privacy, and how WaiHub works.",
    faqTitle: "FAQ",
    searchPlaceholder: "Search tools, e.g. JSON, JWT, UUID...",
    searchTypewriterPrefix: "Search tools, e.g. ",
    searchTypewriterHints: ["JSON", "JWT", "UUID", "Base64", "Regex", "Hash", "Timestamp"],
    categoryAll: "All",
    useNow: "Use now →",
    noResults: "No tools found. Try another keyword.",
    toolsCount: "{n} tools available",
    viewAll: "View full list",
    faqs: [
      { q: "Are WaiHub tools free?", a: "Yes. All tools are free with no signup and no hidden fees." },
      { q: "Is my data safe?", a: "Tools run in your browser — input is typically not uploaded to our servers. Do not paste production secrets or tokens into untrusted sites." },
      { q: "Which browsers are supported?", a: "Latest versions of Chrome, Firefox, Safari, and Edge on desktop and mobile." },
      { q: "How can I send feedback?", a: "Use the contact page or email us — we reply as soon as we can." },
      { q: "Do I need to create an account?", a: "No. All tools work instantly without registration or login." },
      { q: "Can I use WaiHub commercially?", a: "Yes. Personal and commercial development use is free without restriction." },
      { q: "What languages are supported?", a: "The site supports English, Chinese (简体中文), and Japanese (日本語)." },
      { q: "How many tools are available?", a: "WaiHub offers 10 core developer tools covering JSON, encoding, security, and API debugging." },
      { q: "Is there a file size limit?", a: "Most tools support inputs up to 5 MB. Larger files may pause real-time analysis for performance." },
      { q: "Where can I learn how to use each tool?", a: "Each tool page includes a full guide with features, step-by-step instructions, examples, and FAQ." },
    ],
    whatIsTitle: "What is WaiHub?",
    whatIsParagraphs: [
      "WaiHub is a free online developer tools platform that brings essential utilities together in one place. From JSON formatting and Base64 encoding to JWT decoding and regex testing, WaiHub helps developers debug APIs, process data, and solve everyday coding tasks without installing software or creating accounts.",
      "Unlike traditional tool aggregators that simply list links, every WaiHub tool page includes detailed guides, step-by-step instructions, real-world examples, and FAQ sections. This makes each page a useful resource — not just a utility button — whether you are learning a concept or solving a production issue.",
      "Privacy is a core principle: all tools run entirely in your browser using JavaScript. Your JSON, tokens, passwords, and files are processed locally and are not uploaded to WaiHub servers. Combined with support for English, Chinese, and Japanese, WaiHub is designed for developers worldwide who need fast, secure, and reliable online tools.",
    ],
    whyChooseTitle: "Why Choose WaiHub?",
    whyChooseItems: [
      { title: "Fast", description: "Instant results as you type. No waiting for server responses — everything runs locally in your browser." },
      { title: "Secure", description: "Browser-based processing means your sensitive data stays on your device. No uploads, no storage on our servers." },
      { title: "Privacy First", description: "We do not collect your tool inputs. JSON, JWT tokens, and passwords are processed locally and never sent to us." },
      { title: "Free", description: "All 10 tools are completely free. No signup, no premium tier, no usage limits or hidden fees." },
      { title: "Browser-Based", description: "Works on any modern browser on desktop, tablet, and mobile. No installation or plugins required." },
    ],
    useCasesTitle: "Popular Use Cases",
    useCasesItems: [
      { title: "API Development", description: "Format JSON responses, decode JWT tokens, and debug authentication flows during API integration." },
      { title: "Frontend & Backend Integration", description: "Encode URLs, convert timestamps, and validate data formats when connecting frontend and backend systems." },
      { title: "Data Processing", description: "Transform Base64, parse query strings, hash strings, and convert between JSON, YAML, and XML." },
      { title: "JWT Inspection", description: "Decode JWT header and payload, check expiration times, and understand token claims during OAuth debugging." },
      { title: "JSON Formatting", description: "Beautify minified API responses, validate syntax, and explore nested structures with tree view." },
      { title: "Timestamp Conversion", description: "Convert Unix timestamps to readable dates and back — essential for log analysis and timezone debugging." },
      { title: "QR Code Generation", description: "Create scannable QR codes for URLs, WiFi credentials, and contact info for events and marketing." },
    ],
  },
  toolsPage: {
    metaTitle: "All Tools",
    metaDescription: "Browse 10 free developer tools on WaiHub. JSON, Base64, JWT, regex, hash, and more — all run in your browser with privacy-first processing.",
    title: "All Tools",
    subtitle: "{n} free developer tools — runs in your browser",
    searchPlaceholder: "Search tools...",
    noResults: "No tools found",
  },
  categories: {
    json: "JSON Tools",
    encoding: "Encoding Tools",
    dev: "Developer Utilities",
    api: "API Tools",
  },
  tools: {
    jsonFormatter: {
      name: "JSON Formatter",
      short: "Format, validate & beautify JSON",
      desc: "Format, minify, and validate JSON with syntax highlighting and error hints",
    },
    base64: {
      name: "Base64 Tools",
      short: "Full Base64 developer toolkit",
      desc: "Encode/decode, file tools, format conversion, image preview — four modules in one",
    },
    urlEncoder: {
      name: "URL Encoder/Decoder",
      short: "URL encode, decode & query parse",
      desc: "Encode/decode URLs and URIs, parse and build query strings",
    },
    jwtDecoder: {
      name: "JWT Decoder",
      short: "Decode JSON Web Tokens",
      desc: "Decode JWT header and payload, show exp/iat status in your browser",
    },
    timestamp: {
      name: "Timestamp Converter",
      short: "Full Unix timestamp toolkit",
      desc: "Convert Unix timestamps and dates — s/ms/μs/ns, UTC/local",
    },
    uuidGenerator: {
      name: "UUID Generator",
      short: "UUID v4 generate & export",
      desc: "Batch UUID v4 with uppercase, no hyphens, braces — copy & download",
    },
    passwordGenerator: {
      name: "Password Generator",
      short: "Strong random password online",
      desc: "Free password generator: custom length & charset, exclusions, strength meter, LastPass-style, one-click copy",
    },
    qrCodeGenerator: {
      name: "QR Code Generator",
      short: "QR maker for URL & WiFi",
      desc: "Free QR code generator online: text, URL, email, phone, WiFi — preview and PNG download",
    },
    hashGenerator: {
      name: "Hash Generator",
      short: "MD5 & SHA256 calculator",
      desc: "MD5 hash generator plus SHA-1/SHA-256/SHA-512 at once — hex digests with one-click copy",
    },
    regexTester: {
      name: "Regex Tester",
      short: "Test & debug regular expressions",
      desc: "Real-time regex testing with match highlighting and capture groups in your browser",
    },
    htmlEncoder: {
      name: "HTML Encoder",
      short: "HTML entity encode/decode",
      desc: "Encode and decode HTML entities with named and numeric support, optional non-ASCII encoding",
    },
    textDiff: {
      name: "Text Diff",
      short: "Line-by-line text compare",
      desc: "Compare two texts line by line with color-coded additions, removals, and changes",
    },
    cronParser: {
      name: "Cron Parser",
      short: "Decode cron expressions",
      desc: "Parse standard 5-field cron expressions with field breakdown and human-readable summary",
    },
    colorConverter: {
      name: "Color Converter",
      short: "HEX/RGB/HSL converter",
      desc: "Convert colors between HEX, RGB, and HSL with live preview and one-click copy",
    },
  },
  jsonFormatterPage: {
    metaTitle: "JSON Formatter - Free Online Tool",
    metaDescription: "Format, minify, and validate JSON with syntax highlighting, tree view, and error hints.",
    instructions: [
      "Dual-panel layout: source on the left, results on the right for easy comparison.",
      "Supports key sorting, tree view, JSONPath, YAML conversion, copy and save.",
    ],
    faq: [
      { q: "Will Unicode / Chinese break after formatting?", a: "No. UTF-8 is handled correctly." },
      { q: "How do I convert JSON and XML?", a: "Paste JSON and click To XML, or paste XML and click To JSON." },
      { q: "How does tree view work?", a: "Switch to tree mode and expand/collapse nodes with arrows or bulk buttons." },
    ],
  },
  base64Page: {
    metaTitle: "Base64 Encode/Decode - Free Online Tool",
    metaDescription: "Base64 encode/decode, file tools, Hex/Data URI conversion, and image preview.",
    instructions: [
      "Four modules: core encode/decode, file tools, format conversion, and utilities.",
      "Source on the left (editable), read-only result on the right. Smart detect & URL-safe Base64 supported.",
    ],
    faq: [
      { q: "Is Base64 encryption?", a: "No. Base64 is encoding only — anyone can decode it." },
      { q: "What is URL-safe Base64?", a: "Uses - and _ instead of + and /, suitable for URL parameters." },
      { q: "How to preview Base64 images?", a: "Use the File module — paste or upload image Base64 for instant preview." },
    ],
  },
  urlEncoderPage: urlEncoderPageEn,
  jwtDecoderPage: jwtDecoderPageEn,
  timestampPage: timestampPageEn,
  uuidGeneratorPage: uuidGeneratorPageEn,
  passwordGeneratorPage: passwordGeneratorPageEn,
  qrCodeGeneratorPage: qrCodeGeneratorPageEn,
  hashGeneratorPage: hashGeneratorPageEn,
  regexTesterPage: regexTesterPageEn,
  htmlEncoderPage: htmlEncoderPageEn,
  textDiffPage: textDiffPageEn,
  cronParserPage: cronParserPageEn,
  colorConverterPage: colorConverterPageEn,
  seo: seoEn,
  jsonTool: jsonToolEn,
  base64Tool: base64ToolEn,
  urlTool: urlToolEn,
  jwtTool: jwtToolEn,
  timestampTool: timestampToolEn,
  uuidTool: uuidToolEn,
  passwordTool: passwordToolEn,
  qrTool: qrToolEn,
  hashTool: hashToolEn,
  regexTool: regexToolEn,
  htmlEncoderTool: htmlEncoderToolEn,
  textDiffTool: textDiffToolEn,
  cronParserTool: cronParserToolEn,
  colorConverterTool: colorConverterToolEn,
  aboutPage: staticEn.about,
  contactPage: staticEn.contact,
  blogPage: {
    ...staticEn.blog,
    posts: {
      ...staticEn.blog.posts,
      ...blogPostsBatch2En,
    },
  },
  theme: staticEn.theme,
  errors: staticEn.errors,
  legal: legalEn,
}

export default en
