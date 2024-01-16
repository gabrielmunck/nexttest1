import type { Metadata } from 'next'
import { Red_Hat_Display } from 'next/font/google'
import './globals.css'

const redHat = Red_Hat_Display({
  weight: ["400", "500", "600", "800", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--Red-Hat",
});

export const metadata: Metadata = {
  title: 'Testezin em next',
  description: 'Primeiro projeto em next',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={redHat.className}>{children}</body>
    </html>
  )
}
