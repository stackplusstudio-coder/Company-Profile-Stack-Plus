import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/lib/theme/context"
import { I18nProvider } from "@/lib/i18n/context"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" })

export const metadata: Metadata = {
  title: {
    default: "StackPlus | Digital Agency - UI/UX, Branding & Web Development",
    template: "%s | StackPlus",
  },
  description:
    "StackPlus is a full-service digital agency specializing in UI/UX design, logo & branding, and web development. Transform your digital presence with us.",
  keywords: ["digital agency", "UI/UX design", "web development", "branding", "logo design", "StackPlus"],
  authors: [{ name: "StackPlus" }],
  creator: "StackPlus",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stackplus.com",
    siteName: "StackPlus",
    title: "StackPlus | Digital Agency",
    description: "Building Digital Excellence - UI/UX Design, Branding & Web Development",
  },
  twitter: {
    card: "summary_large_image",
    title: "StackPlus | Digital Agency",
    description: "Building Digital Excellence - UI/UX Design, Branding & Web Development",
  },
  icons: {
    icon: [
      {
        url: "/images/primary-20logo-202-20png.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/primary-20logo-201-20png.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/images/primary-20logo-202-20png.png",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider>
          <I18nProvider>{children}</I18nProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
