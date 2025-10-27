import type React from "react"
import type { Metadata } from "next"
import { Outfit, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const outfit = Outfit({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CostX Consulting | Expert RIB CostX Implementation & Training",
  description:
    "Professional consulting services for RIB CostX software. Maximize your estimating efficiency with expert implementation, training, and support.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${inter.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
