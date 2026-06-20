import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from '@vercel/analytics/next'
import { AdSenseScript } from "@/components/adsense-script"
import { GoogleAnalyticsHead, GoogleAnalyticsTrackers } from "@/components/google-analytics"
import { AppToaster } from "@/components/app-toaster"
import { LocaleProvider } from "@/components/locale-provider"
import { DocumentLang } from "@/components/document-lang"
import { ThemeProvider } from "@/components/theme-provider"
import { siteConfig, getSiteKeywords } from "@/lib/tools-data"
import { ogImageMetadata } from "@/lib/site-og"
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" })

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: getSiteKeywords(),
  authors: [{ name: siteConfig.name }],
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  manifest: "/site.webmanifest",
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: 'website',
    locale: 'en_US',
    siteName: siteConfig.name,
    images: [ogImageMetadata],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [ogImageMetadata.url],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning className={`${geist.variable} ${geistMono.variable} bg-background`}>
      <head>
        <GoogleAnalyticsHead />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LocaleProvider>
            <DocumentLang />
            {children}
          </LocaleProvider>
          <AppToaster />
          <AdSenseScript />
          {process.env.NODE_ENV === 'production' && <Analytics />}
          <GoogleAnalyticsTrackers />
        </ThemeProvider>
      </body>
    </html>
  )
}
