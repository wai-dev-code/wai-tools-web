#!/usr/bin/env node
/**
 * 检查 AdSense / ads.txt 配置是否一致。
 * 用法：node scripts/check-adsense-config.mjs
 */
import { readFileSync, existsSync } from "node:fs"
import { resolve, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")

function readEnvLocal() {
  const path = resolve(root, ".env.local")
  if (!existsSync(path)) return {}
  const vars = {}
  for (const line of readFileSync(path, "utf8").split("\n")) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith("#")) continue
    const eq = trimmed.indexOf("=")
    if (eq === -1) continue
    vars[trimmed.slice(0, eq).trim()] = trimmed.slice(eq + 1).trim()
  }
  return vars
}

const adsPath = resolve(root, "public/ads.txt")
const adsTxt = existsSync(adsPath) ? readFileSync(adsPath, "utf8").trim() : ""
const pubFromAds = adsTxt.match(/pub-\d+/)?.[0]
const expectedClient = pubFromAds ? pubFromAds.replace("pub-", "ca-pub-") : null

const env = readEnvLocal()
const clientId = env.NEXT_PUBLIC_ADSENSE_CLIENT_ID
const slots = {
  toolBottom: env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL_BOTTOM,
  homeMid: env.NEXT_PUBLIC_ADSENSE_SLOT_HOME_MID,
  blogArticle: env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG,
}

const lines = []
let ok = true

lines.push("=== WaiHub AdSense 配置检查 ===\n")

if (!adsTxt) {
  ok = false
  lines.push("❌ public/ads.txt 不存在或为空")
} else {
  lines.push(`✅ ads.txt: ${adsTxt.split("\n")[0]}`)
  if (!adsTxt.includes("f08c47fec0942fa0")) {
    lines.push("⚠️  ads.txt 缺少 Google 认证 ID f08c47fec0942fa0（AdSense 标准行）")
  }
}

lines.push("")
if (!clientId?.startsWith("ca-pub-")) {
  ok = false
  lines.push("❌ NEXT_PUBLIC_ADSENSE_CLIENT_ID 未设置或格式错误")
} else {
  lines.push(`✅ CLIENT_ID: ${clientId}`)
  if (expectedClient && clientId !== expectedClient) {
    ok = false
    lines.push(`❌ CLIENT_ID 与 ads.txt 不一致，应为 ${expectedClient}`)
  } else if (expectedClient) {
    lines.push("✅ CLIENT_ID 与 ads.txt 发布商 ID 一致")
  }
}

lines.push("")
for (const [name, id] of Object.entries(slots)) {
  if (id && /^\d+$/.test(id)) {
    lines.push(`✅ SLOT ${name}: ${id}`)
  } else {
    ok = false
    lines.push(`❌ SLOT ${name}: 未设置（AdSense 后台创建广告单元后填入 .env.local）`)
  }
}

lines.push("")
if (ok) {
  lines.push("🎉 本地配置完整，广告位应能正常渲染（需重新 build/dev）")
} else {
  lines.push("ℹ️  发布商 ID + ads.txt 就绪后，AdSense 脚本可加载；广告单元 ID 齐后才会显示广告。")
  lines.push("   生产环境请在 Vercel → Settings → Environment Variables 同步配置。")
  lines.push("   部署后访问 https://waihub.dev/ads.txt 确认与仓库一致。")
}

console.log(lines.join("\n"))
process.exit(ok ? 0 : 1)
