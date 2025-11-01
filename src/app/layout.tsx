import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navigation } from '@/components/Navigation'
import { LogoAnimationWrapper } from '@/components/LogoAnimationWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Atlantic Bullion - Premium Precious Metals',
  description: 'Your trusted partner for precious metals investment and trading',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LogoAnimationWrapper />
        <Navigation />
        {children}
      </body>
    </html>
  )
}