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
      <head>
        <script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LdIl_4rAAAAAN8eDkFcmOHilqZTDxDI1OkrGVb4'}`}
          async
          defer
        />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <LogoAnimationWrapper />
        <Navigation />
        {children}
      </body>
    </html>
  )
}