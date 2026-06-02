import { DEFAULT_REGEX_FLAGS, type RegexFlags } from "@/lib/regex-utils"
import type { ToolExampleItem } from "@/lib/tool-examples"

export interface RegexTesterExample {
  pattern: string
  flags: RegexFlags
  text: string
}

/** 常用正则库 — 与产品功能清单对齐 */
export const regexPatternLibrary: ToolExampleItem<RegexTesterExample>[] = [
  {
    id: "email",
    label: "Email Validation",
    description: "Validate email addresses",
    data: {
      pattern: "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$",
      flags: { ...DEFAULT_REGEX_FLAGS, g: true, m: true },
      text: "alice@example.com\nbad@domain\nbob.smith+tag@company.co.uk",
    },
  },
  {
    id: "url",
    label: "URL Validation",
    description: "HTTP/HTTPS URLs",
    data: {
      pattern: "https?:\\/\\/[\\w.-]+(?:\\.[\\w.-]+)+[\\w\\-._~:/?#[\\]@!$&'()*+,;=.]*",
      flags: { ...DEFAULT_REGEX_FLAGS, g: true, i: true },
      text: "https://waihub.net/tools/regex-tester\nhttp://example.com/path?q=1\nftp://ignored.com",
    },
  },
  {
    id: "phone",
    label: "Phone Number Validation",
    description: "10–15 digit numbers",
    data: {
      pattern: "\\b\\d{10,15}\\b",
      flags: { ...DEFAULT_REGEX_FLAGS, g: true },
      text: "Call 13800138000 or 1234567890\nShort: 12345",
    },
  },
  {
    id: "username",
    label: "Username Validation",
    description: "3–20 alphanumeric chars",
    data: {
      pattern: "^[a-zA-Z0-9_]{3,20}$",
      flags: { ...DEFAULT_REGEX_FLAGS, g: true, m: true },
      text: "tom\nadmin_user\nab\nthis_username_is_way_too_long",
    },
  },
  {
    id: "password",
    label: "Password Validation",
    description: "Letters + digits, min 8",
    data: {
      pattern: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d@$!%*#?&]{8,}$",
      flags: { ...DEFAULT_REGEX_FLAGS, g: true, m: true },
      text: "Secret1\npassword\nabc12345\nP@ssw0rd!",
    },
  },
  {
    id: "ipv4",
    label: "IPv4 Validation",
    description: "IPv4 address pattern",
    data: {
      pattern: "^(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)$",
      flags: { ...DEFAULT_REGEX_FLAGS, g: true, m: true },
      text: "192.168.1.1\n10.0.0.255\n999.999.999.999\n8.8.8.8",
    },
  },
  {
    id: "ipv6",
    label: "IPv6 Validation",
    description: "IPv6 address pattern",
    data: {
      pattern:
        "^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$|^::(?:[0-9a-fA-F]{1,4}:){0,6}[0-9a-fA-F]{1,4}$|^(?:[0-9a-fA-F]{1,4}:){1,7}:$",
      flags: { ...DEFAULT_REGEX_FLAGS, g: true, m: true, i: true },
      text: "2001:0db8:85a3:0000:0000:8a2e:0370:7334\n::1\nfe80::1",
    },
  },
  {
    id: "date",
    label: "Date Validation",
    description: "YYYY-MM-DD",
    data: {
      pattern: "\\b\\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\\d|3[01])\\b",
      flags: { ...DEFAULT_REGEX_FLAGS, g: true },
      text: "2024-05-31\n2024-13-01\n1999-02-29",
    },
  },
  {
    id: "time",
    label: "Time Validation",
    description: "HH:MM or HH:MM:SS",
    data: {
      pattern: "\\b(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d)?\\b",
      flags: { ...DEFAULT_REGEX_FLAGS, g: true },
      text: "09:30\n23:59:59\n25:00",
    },
  },
  {
    id: "postalCode",
    label: "Postal Code Validation",
    description: "US ZIP / ZIP+4",
    data: {
      pattern: "\\b\\d{5}(?:-\\d{4})?\\b",
      flags: { ...DEFAULT_REGEX_FLAGS, g: true },
      text: "90210\n10001-1234\nABCDE",
    },
  },
  {
    id: "creditCard",
    label: "Credit Card Validation",
    description: "16-digit card groups",
    data: {
      pattern: "\\b(?:\\d{4}[\\s-]?){3}\\d{4}\\b",
      flags: { ...DEFAULT_REGEX_FLAGS, g: true },
      text: "4111 1111 1111 1111\n4111-1111-1111-1111\n1234",
    },
  },
  {
    id: "hexColor",
    label: "Hex Color Validation",
    description: "#RGB or #RRGGBB",
    data: {
      pattern: "#(?:[0-9a-fA-F]{3}){1,2}\\b",
      flags: { ...DEFAULT_REGEX_FLAGS, g: true },
      text: "#fff\n#1a2b3c\n#gggggg",
    },
  },
  {
    id: "domain",
    label: "Domain Validation",
    description: "Domain name pattern",
    data: {
      pattern: "\\b(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\\.)+[a-zA-Z]{2,}\\b",
      flags: { ...DEFAULT_REGEX_FLAGS, g: true },
      text: "waihub.net\nsub.example.co.uk\n-invalid.",
    },
  },
  {
    id: "uuid",
    label: "UUID Validation",
    description: "UUID v1–v5 format",
    data: {
      pattern: "\\b[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}\\b",
      flags: { ...DEFAULT_REGEX_FLAGS, g: true, i: true },
      text: "550e8400-e29b-41d4-a716-446655440000\nnot-a-uuid",
    },
  },
  {
    id: "jsonValue",
    label: "JSON Value Validation",
    description: "Double-quoted JSON strings",
    data: {
      pattern: "\"(?:\\\\.|[^\"\\\\])*\"",
      flags: { ...DEFAULT_REGEX_FLAGS, g: true },
      text: '{"name":"Alice","role":"admin"}\n"escaped\\"quote"',
    },
  },
  {
    id: "htmlTag",
    label: "HTML Tag Matching",
    description: "Simple HTML tags",
    data: {
      pattern: "<\\/?[a-zA-Z][^>]*>",
      flags: { ...DEFAULT_REGEX_FLAGS, g: true },
      text: "<div class=\"box\">Hello</div>\n<br/>\n</span>",
    },
  },
  {
    id: "markdownLink",
    label: "Markdown Link Matching",
    description: "[text](url) links",
    data: {
      pattern: "\\[([^\\]]+)\\]\\(([^)]+)\\)",
      flags: { ...DEFAULT_REGEX_FLAGS, g: true },
      text: "See [WaiHub](https://waihub.net) and [docs](/docs).",
    },
  },
]
