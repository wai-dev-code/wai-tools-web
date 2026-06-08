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
import { staticEn } from "@/lib/i18n/messages/static-pages"
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
      "Free developer tools hub: JSON formatter, Base64, URL encoder, JWT decoder, UUID, password generator, QR code generator, MD5/SHA hash, regex tester, timestamp converter, and more. Runs in your browser — no signup.",
    title: "Developer Tools Hub",
    subtitle:
      "{n} tools in one place — JSON, encoding, JWT, Regex & more. Processed in your browser, not on our servers. English · 中文 · 日本語",
    blogSectionTitle: "Tips & tutorials",
    blogViewAll: "View all posts",
    searchPlaceholder: "Search tools, e.g. JSON, JWT, UUID...",
    categoryAll: "All",
    useNow: "Use now →",
    noResults: "No tools found. Try another keyword.",
    toolsCount: "{n} tools available",
    viewAll: "View full list",
    faqTitle: "FAQ",
    faqs: [
      { q: "Are WaiHub tools free?", a: "Yes. All tools are free with no signup and no hidden fees." },
      { q: "Is my data safe?", a: "Tools run in your browser — input is typically not uploaded to our servers. Do not paste production secrets or tokens into untrusted sites." },
      { q: "Which browsers are supported?", a: "Latest versions of Chrome, Firefox, Safari, and Edge." },
      { q: "How can I send feedback?", a: "Use the contact page or email us — we reply as soon as we can." },
    ],
  },
  toolsPage: {
    metaTitle: "All Tools",
    metaDescription: "Browse free developer tools on WaiHub.",
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
  aboutPage: staticEn.about,
  contactPage: staticEn.contact,
  blogPage: staticEn.blog,
  theme: staticEn.theme,
  errors: staticEn.errors,
  legal: legalEn,
}

export default en
