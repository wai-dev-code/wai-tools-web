/** 第二批博客文章（AdSense 内容建设）— 英文正文 */
export const blogPostsBatch2En: Record<
  string,
  {
    title: string
    description: string
    category: string
    content: { heading?: string; paragraphs: string[] }[]
  }
> = {
  "what-is-json": {
    title: "What is JSON? A Beginner's Guide",
    description: "Learn what JSON is, how it works, and why it became the standard format for web APIs and configuration files.",
    category: "Technical",
    content: [
      {
        paragraphs: [
          "JSON (JavaScript Object Notation) is a lightweight data format for storing and exchanging structured data. Despite its name, JSON is language-independent and used by Python, Java, Go, and virtually every modern programming language.",
        ],
      },
      {
        heading: "JSON Structure",
        paragraphs: [
          "JSON represents data as objects (key-value pairs wrapped in curly braces) and arrays (ordered lists in square brackets). Values can be strings, numbers, booleans, null, objects, or arrays. Keys must be double-quoted strings.",
          "Example: {\"name\": \"Alice\", \"age\": 30, \"active\": true, \"tags\": [\"dev\", \"api\"]}.",
        ],
      },
      {
        heading: "Why JSON Dominates APIs",
        paragraphs: [
          "JSON is human-readable, compact compared to XML, and maps naturally to native data structures in most languages. REST APIs overwhelmingly use JSON for request and response bodies.",
          "Use WaiHub's JSON Formatter to validate, beautify, and debug JSON during API development.",
        ],
      },
    ],
  },
  "json-vs-xml": {
    title: "JSON vs XML: Which Should You Use?",
    description: "Compare JSON and XML for APIs, configuration, and data exchange — strengths, weaknesses, and when to choose each.",
    category: "Technical",
    content: [
      {
        paragraphs: [
          "JSON and XML are both widely used for structured data, but they serve different needs. Understanding their trade-offs helps you pick the right format for APIs, configs, and integrations.",
        ],
      },
      {
        heading: "JSON Advantages",
        paragraphs: [
          "JSON is lighter, faster to parse, and more readable for developers. It maps directly to objects in JavaScript, Python dicts, and similar structures. Most modern REST APIs default to JSON.",
        ],
      },
      {
        heading: "When XML Still Wins",
        paragraphs: [
          "XML supports attributes, namespaces, and mixed content — useful for documents, SOAP services, and legacy enterprise systems. RSS feeds and Office document formats still rely on XML.",
          "WaiHub's JSON Formatter can convert between JSON and XML when you need to bridge both worlds.",
        ],
      },
    ],
  },
  "how-jwt-authentication-works": {
    title: "How JWT Authentication Works",
    description: "Understand JWT structure, signing, and verification — the foundation of modern API and OAuth authentication.",
    category: "Security",
    content: [
      {
        paragraphs: [
          "JWT (JSON Web Token) authentication lets servers issue signed tokens that clients present on subsequent requests. The server verifies the signature without storing session state — enabling scalable, stateless auth.",
        ],
      },
      {
        heading: "JWT Structure",
        paragraphs: [
          "A JWT has three parts: Header (algorithm and type), Payload (claims like user ID and expiration), and Signature (cryptographic hash of header + payload + secret). All three are Base64URL-encoded and joined with dots.",
        ],
      },
      {
        heading: "The Auth Flow",
        paragraphs: [
          "1. User logs in with credentials. 2. Server validates and returns a JWT. 3. Client stores the token and sends it in the Authorization header. 4. Server verifies the signature and reads claims — no database lookup needed for basic validation.",
          "Use WaiHub's JWT Decoder to inspect tokens during development. Never paste production tokens into untrusted sites.",
        ],
      },
    ],
  },
  "uuid-v4-explained": {
    title: "UUID v4 Explained",
    description: "What UUID v4 is, how random UUIDs work, and when to use them for IDs in databases and distributed systems.",
    category: "Technical",
    content: [
      {
        paragraphs: [
          "UUID v4 generates 128-bit identifiers from random numbers. The format is 8-4-4-4-12 hex digits (e.g. f47ac10b-58cc-4372-a567-0e02b2c3d479). Version 4 means random generation — no timestamp or MAC address embedded.",
        ],
      },
      {
        heading: "Why Use UUIDs?",
        paragraphs: [
          "UUIDs can be generated independently on any machine without coordination. Ideal for distributed databases, offline-first apps, test data, and trace IDs. Collision probability is negligible even at billions of IDs.",
        ],
      },
      {
        heading: "Best Practices",
        paragraphs: [
          "Use UUID v4 for public-facing IDs to avoid enumeration attacks. For database primary keys, consider UUID v7 (time-ordered) for better index performance in some databases.",
          "Generate test UUIDs with WaiHub's UUID Generator — batch mode, uppercase, and braceless formats supported.",
        ],
      },
    ],
  },
  "url-encoding-explained": {
    title: "URL Encoding Explained",
    description: "Learn percent-encoding, encodeURIComponent vs encodeURI, and how to handle special characters in URLs.",
    category: "Technical",
    content: [
      {
        paragraphs: [
          "URLs can only contain a limited set of ASCII characters. Spaces, Unicode text, and symbols like & and = must be percent-encoded (%20 for space, %3D for =) before transmission.",
        ],
      },
      {
        heading: "encodeURIComponent vs encodeURI",
        paragraphs: [
          "encodeURIComponent encodes special characters including ? & = — use for individual query parameter values. encodeURI preserves URL structure characters — use for encoding full URLs while keeping slashes and colons intact.",
        ],
      },
      {
        heading: "Common Pitfalls",
        paragraphs: [
          "Double-encoding happens when you encode an already-encoded string. In form-urlencoded data, + represents space — decoding must handle this correctly.",
          "WaiHub's URL Encoder supports both functions plus Query ↔ JSON conversion for debugging API parameters.",
        ],
      },
    ],
  },
  "understanding-unix-timestamps": {
    title: "Understanding Unix Timestamps",
    description: "What Unix epoch time is, seconds vs milliseconds, and how to convert timestamps for logs and APIs.",
    category: "Technical",
    content: [
      {
        paragraphs: [
          "Unix timestamp counts seconds (or milliseconds) since January 1, 1970 00:00:00 UTC — the Unix epoch. It is the universal time format in logs, databases, APIs, and blockchain systems.",
        ],
      },
      {
        heading: "Seconds vs Milliseconds",
        paragraphs: [
          "10-digit numbers are usually seconds (1704067200 = 2024-01-01). 13-digit numbers are milliseconds (1704067200000). Confusing them produces dates in 1970 or year 50000 — a common debugging mistake.",
        ],
      },
      {
        heading: "Timezone Considerations",
        paragraphs: [
          "Unix timestamps are always UTC-based. Display in local time requires timezone conversion. When debugging, compare UTC and local side by side.",
          "WaiHub's Timestamp Converter auto-detects precision and shows UTC, local, and ISO 8601 formats.",
        ],
      },
    ],
  },
  "md5-vs-sha256": {
    title: "MD5 vs SHA-256: Hash Algorithm Comparison",
    description: "Compare MD5 and SHA-256 for checksums, integrity verification, and when each hash algorithm is appropriate.",
    category: "Security",
    content: [
      {
        paragraphs: [
          "Hash functions produce fixed-length digests from arbitrary input. MD5 outputs 128 bits (32 hex chars); SHA-256 outputs 256 bits (64 hex chars). Both detect data changes — but their security properties differ significantly.",
        ],
      },
      {
        heading: "MD5: Fast but Broken",
        paragraphs: [
          "MD5 is fast and still common in legacy systems for file checksums and cache keys. However, collision attacks are practical — do not use MD5 for passwords, digital signatures, or security-critical integrity checks.",
        ],
      },
      {
        heading: "SHA-256: Modern Standard",
        paragraphs: [
          "SHA-256 is part of the SHA-2 family and is the current standard for integrity verification, blockchain, and certificate fingerprints. Use SHA-256 when security matters.",
          "Compare all algorithms instantly with WaiHub's Hash Generator — MD5, SHA-1, SHA-256, and SHA-512 side by side.",
        ],
      },
    ],
  },
  "common-regex-examples": {
    title: "Common Regex Examples for Developers",
    description: "Practical regular expression patterns for email, URL, phone numbers, dates, and data validation.",
    category: "Tutorial",
    content: [
      {
        paragraphs: [
          "Regular expressions are patterns for matching text. Here are proven patterns developers use daily — test them live with WaiHub's Regex Tester.",
        ],
      },
      {
        heading: "Useful Patterns",
        paragraphs: [
          "Email (basic): [a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}. URL (basic): https?://[\\w.-]+\\.\\w{2,}[^\\s]*. Phone (US): \\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}.",
          "UUID: [0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}. Integer: -?\\d+. IPv4: \\d{1,3}(\\.\\d{1,3}){3}.",
        ],
      },
      {
        heading: "Testing Tips",
        paragraphs: [
          "Always anchor patterns (^ and $) when validating whole strings. Test edge cases: empty strings, Unicode, and boundary values. Use the pattern library in WaiHub's Regex Tester to load and customize templates.",
        ],
      },
    ],
  },
  "how-qr-codes-work": {
    title: "How QR Codes Work",
    description: "The technology behind QR codes, encoding capacity, error correction, and practical use cases.",
    category: "Technical",
    content: [
      {
        paragraphs: [
          "QR (Quick Response) codes are two-dimensional barcodes that store data in a matrix of black and white squares. Smartphone cameras scan them instantly — no typing required.",
        ],
      },
      {
        heading: "How Encoding Works",
        paragraphs: [
          "Data is converted to binary, divided into codewords, interleaved with error correction codes, and mapped to the QR matrix. Error correction levels (L, M, Q, H) allow scanning even when partially damaged — up to 30% of the code can be obscured.",
        ],
      },
      {
        heading: "Practical Uses",
        paragraphs: [
          "URLs for marketing, WiFi credentials (WIFI: scheme), contact info (vCard), payment links, and event tickets. WiFi QR codes let guests connect without typing passwords.",
          "Create QR codes with WaiHub's generator — text, URL, email, phone, and WiFi types with PNG download.",
        ],
      },
    ],
  },
  "api-debugging-tips": {
    title: "API Debugging Tips for Developers",
    description: "Practical techniques for debugging REST APIs — JSON inspection, JWT analysis, and common error patterns.",
    category: "Tutorial",
    content: [
      {
        paragraphs: [
          "API debugging is a core developer skill. These techniques help you find issues faster during integration and production incidents.",
        ],
      },
      {
        heading: "Inspect Responses",
        paragraphs: [
          "Always format JSON responses before reading them. Minified one-line JSON hides structure errors. Validate syntax to catch trailing commas and type mismatches before they reach production.",
        ],
      },
      {
        heading: "Check Authentication",
        paragraphs: [
          "Decode JWT tokens to verify claims, expiration, and issuer. A 401 often means expired exp or wrong aud claim. Compare request signatures with hash tools when debugging API auth.",
        ],
      },
      {
        heading: "Tool Workflow",
        paragraphs: [
          "JSON Formatter → URL Encoder → JWT Decoder → Timestamp Converter. WaiHub's browser-based tools chain together without leaving your workflow or uploading sensitive data.",
        ],
      },
    ],
  },
  "json-best-practices": {
    title: "JSON Best Practices for APIs",
    description: "Design conventions for JSON APIs — naming, nesting, null handling, and error response formats.",
    category: "Tutorial",
    content: [
      {
        paragraphs: [
          "Consistent JSON design makes APIs easier to consume and maintain. Follow these conventions for cleaner integrations.",
        ],
      },
      {
        heading: "Naming and Structure",
        paragraphs: [
          "Use camelCase or snake_case consistently — never mix. Keep nesting shallow (2-3 levels max). Use arrays for lists, objects for entities. Avoid deeply nested structures that are hard to query and document.",
        ],
      },
      {
        heading: "Null and Error Handling",
        paragraphs: [
          "Be explicit about null vs missing fields. Return structured error objects: {\"error\": {\"code\": \"INVALID_INPUT\", \"message\": \"...\"}}. Include error codes for programmatic handling.",
        ],
      },
      {
        heading: "Validation",
        paragraphs: [
          "Validate JSON before deployment. Use schema validation (JSON Schema) in CI pipelines. WaiHub's JSON Formatter helps catch syntax errors during development.",
        ],
      },
    ],
  },
  "secure-password-generation": {
    title: "Secure Password Generation Guide",
    description: "How to generate strong passwords, length recommendations, and why crypto-random beats memorable passwords.",
    category: "Security",
    content: [
      {
        paragraphs: [
          "Weak passwords remain the top cause of breaches. Generated passwords with sufficient length and character diversity resist brute force and dictionary attacks far better than human-chosen passwords.",
        ],
      },
      {
        heading: "Length Matters Most",
        paragraphs: [
          "12 characters minimum for general accounts. 16+ for email, banking, and admin accounts. Each additional character exponentially increases brute-force difficulty. Length beats complexity tricks like l33t speak.",
        ],
      },
      {
        heading: "Use a Password Manager",
        paragraphs: [
          "Store generated passwords in a password manager — never reuse across sites. Use WaiHub's Password Generator with crypto.getRandomValues for staging and test accounts. Exclude ambiguous characters (0/O, 1/l) when passwords might be shared verbally.",
        ],
      },
    ],
  },
  "hash-algorithms-comparison": {
    title: "Hash Algorithms Comparison Guide",
    description: "Overview of MD5, SHA-1, SHA-256, and SHA-512 — speed, security, and appropriate use cases.",
    category: "Technical",
    content: [
      {
        paragraphs: [
          "Different hash algorithms serve different purposes. Choosing the wrong one can create security vulnerabilities or compatibility issues with legacy systems.",
        ],
      },
      {
        heading: "Algorithm Overview",
        paragraphs: [
          "MD5: 128-bit, fast, broken for security — legacy checksums only. SHA-1: 160-bit, deprecated for security. SHA-256: 256-bit, current standard for integrity and blockchain. SHA-512: 512-bit, higher security margin for long-term archives.",
        ],
      },
      {
        heading: "Choosing the Right Hash",
        paragraphs: [
          "File integrity: SHA-256. API signatures: match your backend algorithm. Cache keys: MD5 acceptable for non-security use. Password storage: never hash in browser — use bcrypt/Argon2 on server.",
          "Compare all four at once with WaiHub's Hash Generator.",
        ],
      },
    ],
  },
  "regex-for-email-validation": {
    title: "Regex for Email Validation",
    description: "How to validate email addresses with regex, common patterns, limitations, and best practices.",
    category: "Tutorial",
    content: [
      {
        paragraphs: [
          "Email validation regex is one of the most common patterns developers write. A practical pattern catches obvious errors while accepting real-world addresses.",
        ],
      },
      {
        heading: "A Practical Pattern",
        paragraphs: [
          "Basic: ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$. This checks for local part, @, domain, and TLD. It won't catch every RFC 5322 edge case but handles 99% of real emails.",
        ],
      },
      {
        heading: "Limitations",
        paragraphs: [
          "Regex cannot fully validate email — only format. Always verify with a confirmation email or SMTP check for production. Internationalized domain names (IDN) need additional handling.",
          "Test patterns live with WaiHub's Regex Tester and load the email template from the pattern library.",
        ],
      },
    ],
  },
  "regex-for-url-validation": {
    title: "Regex for URL Validation",
    description: "Validate URLs with regex — HTTP/HTTPS patterns, query strings, and when regex is enough vs when to use URL parsers.",
    category: "Tutorial",
    content: [
      {
        paragraphs: [
          "URL validation regex helps catch malformed links in forms and APIs. The right pattern depends on whether you need strict RFC compliance or practical validation.",
        ],
      },
      {
        heading: "HTTP/HTTPS Pattern",
        paragraphs: [
          "Basic: ^https?://[\\w.-]+(?:\\.[\\w.-]+)+[\\w._~:/?#[\\]@!$&'()*+,;=%-]*$. This matches common web URLs with optional paths and query strings.",
        ],
      },
      {
        heading: "When to Use URL Parser Instead",
        paragraphs: [
          "For complex validation (port numbers, IPv6, fragment identifiers), use the URL constructor: new URL(input). Regex is fine for quick form validation; URL API is better for parsing and normalization.",
          "Pair URL validation with WaiHub's URL Encoder for encoding and Query ↔ JSON conversion.",
        ],
      },
    ],
  },
}
