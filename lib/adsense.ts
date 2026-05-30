/** 广告位配置：按页面类型划分，与具体工具 slug 无关 */
export const adsenseConfig = {
  clientId: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID,
  slots: {
    /** 工具页：工具区域下方横幅 */
    toolBottom: process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL_BOTTOM,
    /** 首页：工具列表下方 */
    homeMid: process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME_MID,
    /** 博客文章页：正文下方 */
    blogArticle: process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG,
  },
} as const

export type AdSlotName = keyof typeof adsenseConfig.slots

export function isAdsenseConfigured(): boolean {
  return Boolean(adsenseConfig.clientId?.startsWith("ca-pub-"))
}

export function getAdSlot(name: AdSlotName): string | undefined {
  return adsenseConfig.slots[name]
}
