/** 生产环境正式域名（sitemap、canonical、JSON-LD 默认值）。唯一对外域名：waihub.net */
export const PRODUCTION_SITE_URL = "https://waihub.net"

/** 解析站点 URL：优先环境变量，生产环境禁止 localhost 泄漏到 SEO */
export function resolveSiteUrl(): string {
  const configured = (process.env.NEXT_PUBLIC_SITE_URL ?? PRODUCTION_SITE_URL).replace(/\/$/, "")
  if (process.env.NODE_ENV === "production" && /localhost|127\.0\.0\.1/i.test(configured)) {
    return PRODUCTION_SITE_URL
  }
  return configured
}
