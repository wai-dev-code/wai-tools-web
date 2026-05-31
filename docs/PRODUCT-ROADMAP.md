# WaiHub 竞品对比与上线后 3 个月优化计划

> 正式域名：**https://waihub.net**  
> 最后更新：2026-05-31

---

## 一、竞品对比表

| 维度 | WaiHub | jsonformatter.org | jwt.io | base64encode.org | uuidgenerator.net | epochconverter.com |
|------|--------|-------------------|--------|------------------|---------------------|---------------------|
| **定位** | 多工具 Hub（6+） | 单一 JSON | 单一 JWT | 单一 Base64 | 单一 UUID | 单一时间戳 |
| **运行方式** | 浏览器内，不上传 | 多数客户端 | 客户端解码 | 客户端 | 客户端 | 客户端 |
| **语言** | zh / en / ja 三语 |  mainly en | en | en | en | en |
| **JSON 深度** | ★★★★★ 双栏、树、JSONPath、YAML/XML | ★★★★ 格式化为主 | — | — | — | — |
| **Base64** | ★★★★ 四模块（文件/Hex/DataURI） | — | — | ★★★ 基础编解码 | — | — |
| **JWT** | ★★★ 解码 + exp 状态 + 安全 FAQ | — | ★★★★ 行业标准，含算法说明 | — | — | — |
| **URL / 时间戳 / UUID** | ★★★ 已上线，持续加深 | — | — | — | ★★★★ 批量/格式 | ★★★★★ 时区/拆解 |
| **SEO 着陆页** | JSON/Base64 多长尾页 + 博客 | 大量长尾 | 品牌词强 | 长尾 | 长尾 | 长尾 |
| **注册/登录** | 无 | 无 | 无 | 无 | 无 | 无 |
| **广告** | 编辑区下方 + 免责声明 | 常见横幅 | 有广告 | 有广告 | 有广告 | 有广告 |
| **移动端** | 响应式 + H5 专项优化 | 一般 | 一般 | 一般 | 一般 | 一般 |
| **品牌记忆点** | 「Hub + 隐私 + 三语」 | 域名即品类 | jwt.io 即品类 | 域名即品类 | 功能单一 | 功能单一 |

### 结论（竞争策略）

| 类型 | 策略 |
|------|------|
| **不要硬刚** | jwt.io、jsonformatter.org 的品牌与外链权重 — 不做「另一个 jwt.io」 |
| **可打赢的** | 长尾 SEO（「JSON 格式化 + Base64 + JWT 同一站」）、中文/日文、工具联动工作流 |
| **差异化口号** | 「开发者工具 Hub，数据在浏览器内处理，三语可用」 |

---

## 二、WaiHub 当前设计优势（摘要）

1. **统一工具框架**：说明 / FAQ / 相关工具 / JSON-LD / 广告位一致，加工具成本低。  
2. **JSON、Base64 深度**：超过多数「单页小工具」，适合留住专业用户。  
3. **三语 i18n + 跨语言搜索**：同类小站少见。  
4. **变现与体验平衡**：广告在编辑区下方，全屏模式紧凑页脚，利于 AdSense 长期合规。  
5. **内容结构**：博客 + 工具目录 + SEO 着陆页，为搜索与 AdSense 审核服务。

### 当前短板

- 工具总数仍少（6 个可见），Hub 感不足  
- 视觉品牌偏通用（shadcn），辨识度一般  
- JWT / URL / 时间戳相对竞品头部站点功能较浅  
- 代码内 SEO 默认域名曾误写为占位符，**从未使用 waihub.dev**；已统一为正式域名 `waihub.net`（见 `lib/site-url.ts`）

---

## 三、上线后 3 个月优化优先级

### 第 1 个月：审核通过 + 索引基础（现在 → 约 4 月底）

| 优先级 | 任务 | 说明 |
|--------|------|------|
| P0 | AdSense 审核 | 保持 ads.txt、隐私政策、Contact；不在编辑区放浮层广告 |
| P0 | **Vercel 环境变量** | `NEXT_PUBLIC_SITE_URL=https://waihub.net`；审核通过后填 3 个 `ADSENSE_SLOT_*` |
| P0 | Google Search Console | 提交 `waihub.net` sitemap，确认 hreflang 无报错 |
| P1 | 监控 Core Web Vitals | Vercel Analytics + GSC 体验报告 |
| P2 | 博客 1 篇/月 | 工具教程向，带内链到具体工具页 |

**成功标准**：AdSense 通过；GSC 收录主要工具页与博客；canonical 均为 `waihub.net`。

---

### 第 2 个月：体验加深 + 流量词（约 5 月）

| 优先级 | 任务 | 说明 |
|--------|------|------|
| P0 | **JWT 工具加深** | 参考 jwt.io：算法说明、Payload 字段 glossary；保持「不解密、不验证生产 Token」 |
| P1 | **URL 工具加深** | Query 表格化预览、批量 encode/decode |
| P1 | **时间戳工具** | 常用时区快捷按钮、复制 ISO/Unix 一键 |
| P1 | 新增 1～2 个工具 | 建议：Hash（MD5/SHA256）或 HTML Encode — 搜索量大、实现可控 |
| P2 | 首页记忆点 | 一句主标语突出「浏览器内处理 / 三语 / 6 工具一站」 |
| P2 | 内链 | 工具页 Related Tools + 博客互链 |

**成功标准**：自然搜索展示次数环比上升；工具页平均停留时长 > 1 分钟。

---

### 第 3 个月：规模化 + 变现优化（约 6 月）

| 优先级 | 任务 | 说明 |
|--------|------|------|
| P0 | 工具数 → **10+** | 扩展 Hub 认知，目录页价值显现 |
| P1 | AdSense 数据复盘 | 对比 homeMid / toolBottom / blogArticle RPM，调整密度（仍不挡编辑区） |
| P1 | 日文 SEO | 检查 ja 路由收录；补 1～2 篇 ja 博客 |
| P2 | 结构化数据 | 抽检 WebApplication / FAQ 富摘要 |
| P2 | 可选：PWA / 离线 | 仅当回访用户占比高时再考虑 |
| P3 | 品牌视觉 | Logo、favicon、OG 图统一，不必重动画 |

**成功标准**：10+ 工具；AdSense 有稳定展示；主关键词（json formatter online 等）进入 GSC 前 3 页部分词。

---

## 四、域名与 SEO 配置清单

| 配置项 | 正确值 |
|--------|--------|
| 正式域名（唯一生产域名） | `https://waihub.net` |
| 说明 | 从未使用 `waihub.dev`；此前仅为代码模板中的错误默认值，已修正 |
| 代码默认值 | `lib/site-url.ts` → `PRODUCTION_SITE_URL` |
| Vercel | `NEXT_PUBLIC_SITE_URL=https://waihub.net` |
| ads.txt | `https://waihub.net/ads.txt` |
| AdSense 提交站点 | 与 GSC 属性一致，均用 `waihub.net` |

本地检查：

```bash
npm run check:adsense
npm run build
```

---

## 五、不建议优先做的事

- 大面积动画 / 粒子 Hero（对 AdSense 与性能无益）  
- 用户系统 / 云端历史（与隐私定位冲突，开发成本高）  
- 审核期配置广告单元 SLOT（等 AdSense 通过后再填）  
- 为通过审核堆低质量 AI 文章（影响长期 SEO）

---

## 六、相关代码路径

| 用途 | 路径 |
|------|------|
| 站点 URL | `lib/site-url.ts` |
| 工具注册 | `lib/tools-data.ts` |
| SEO metadata | `lib/i18n/index.ts` → `createPageMetadata` |
| Sitemap | `app/sitemap.ts` |
| AdSense | `lib/adsense.ts`、`components/ad-slot.tsx` |
| 配置检查 | `npm run check:adsense` |
