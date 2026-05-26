import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'WaiHub - 开发者工具集',
  description: 'WaiHub 是为程序员和创作者打造的开发者工具网站。提供 JSON 格式化、Base64 编解码、时间戳转换、UUID 生成器等免费工具。',
  keywords: ['开发者工具', 'JSON格式化', 'Base64编码', '时间戳转换', 'UUID生成器', '正则表达式测试', 'JWT解码'],
  authors: [{ name: 'WaiHub' }],
  openGraph: {
    title: 'WaiHub - 开发者工具集',
    description: '为程序员和创作者打造的免费开发者工具',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
