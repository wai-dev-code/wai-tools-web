export interface RgbColor {
  r: number
  g: number
  b: number
}

export interface HslColor {
  h: number
  s: number
  l: number
}

export type ColorFormat = "hex" | "rgb" | "hsl"

export function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n))
}

export function parseHex(hex: string): RgbColor | null {
  const cleaned = hex.trim().replace(/^#/, "")
  if (!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$/.test(cleaned)) return null
  const full =
    cleaned.length === 3
      ? cleaned
          .split("")
          .map((c) => c + c)
          .join("")
      : cleaned
  return {
    r: parseInt(full.slice(0, 2), 16),
    g: parseInt(full.slice(2, 4), 16),
    b: parseInt(full.slice(4, 6), 16),
  }
}

export function rgbToHex({ r, g, b }: RgbColor): string {
  const toHex = (n: number) => clamp(Math.round(n), 0, 255).toString(16).padStart(2, "0")
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

export function parseRgb(input: string): RgbColor | null {
  const match = input.trim().match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i)
  if (!match) return null
  const r = Number(match[1])
  const g = Number(match[2])
  const b = Number(match[3])
  if ([r, g, b].some((n) => n < 0 || n > 255)) return null
  return { r, g, b }
}

export function rgbToHsl({ r, g, b }: RgbColor): HslColor {
  const rn = r / 255
  const gn = g / 255
  const bn = b / 255
  const max = Math.max(rn, gn, bn)
  const min = Math.min(rn, gn, bn)
  const l = (max + min) / 2
  if (max === min) return { h: 0, s: 0, l: Math.round(l * 100) }

  const d = max - min
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
  let h = 0
  if (max === rn) h = (gn - bn) / d + (gn < bn ? 6 : 0)
  else if (max === gn) h = (bn - rn) / d + 2
  else h = (rn - gn) / d + 4
  h /= 6

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  }
}

export function hslToRgb({ h, s, l }: HslColor): RgbColor {
  const sn = s / 100
  const ln = l / 100
  if (sn === 0) {
    const v = Math.round(ln * 255)
    return { r: v, g: v, b: v }
  }

  const hue2rgb = (p: number, q: number, t: number) => {
    let tt = t
    if (tt < 0) tt += 1
    if (tt > 1) tt -= 1
    if (tt < 1 / 6) return p + (q - p) * 6 * tt
    if (tt < 1 / 2) return q
    if (tt < 2 / 3) return p + (q - p) * (2 / 3 - tt) * 6
    return p
  }

  const q = ln < 0.5 ? ln * (1 + sn) : ln + sn - ln * sn
  const p = 2 * ln - q
  const hn = h / 360

  return {
    r: Math.round(hue2rgb(p, q, hn + 1 / 3) * 255),
    g: Math.round(hue2rgb(p, q, hn) * 255),
    b: Math.round(hue2rgb(p, q, hn - 1 / 3) * 255),
  }
}

export function parseHsl(input: string): HslColor | null {
  const match = input
    .trim()
    .match(/^hsl\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)$/i)
  if (!match) return null
  const h = Number(match[1])
  const s = Number(match[2])
  const l = Number(match[3])
  if (h < 0 || h > 360 || s < 0 || s > 100 || l < 0 || l > 100) return null
  return { h, s, l }
}

export function formatRgb(rgb: RgbColor) {
  return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
}

export function formatHsl(hsl: HslColor) {
  return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`
}

export function parseColorInput(format: ColorFormat, value: string): RgbColor | null {
  if (!value.trim()) return null
  if (format === "hex") return parseHex(value)
  if (format === "rgb") return parseRgb(value)
  const hsl = parseHsl(value)
  return hsl ? hslToRgb(hsl) : null
}
