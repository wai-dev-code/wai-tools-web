import type { Messages } from "@/lib/i18n/messages/types"
import { jsonToolEn } from "@/lib/i18n/messages/json-tool-messages"
import { base64ToolEn } from "@/lib/i18n/messages/base64-tool-messages"
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
    metaTitle: "WaiHub - Developer Tools Online",
    metaDescription:
      "Free JSON formatter and Base64 encoder/decoder. Runs in your browser — no signup required.",
    title: "Developer tools, ready when you are",
    subtitle: "JSON & Base64 — runs in your browser, no signup",
    searchPlaceholder: "Search tools, e.g. JSON, Base64...",
    categoryAll: "All",
    useNow: "Use now →",
    noResults: "No tools found. Try another keyword.",
    toolsCount: "{n} tools available",
    viewAll: "View full list",
    faqTitle: "FAQ",
    faqs: [
      { q: "Are WaiHub tools free?", a: "Yes. All tools are free with no signup and no hidden fees." },
      { q: "Is my data safe?", a: "Yes. Tools run in your browser. Your input is not uploaded to our servers." },
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
  seo: seoEn,
  jsonTool: jsonToolEn,
  base64Tool: base64ToolEn,
  aboutPage: staticEn.about,
  contactPage: staticEn.contact,
  blogPage: staticEn.blog,
  theme: staticEn.theme,
  errors: staticEn.errors,
  legal: legalEn,
}

export default en
