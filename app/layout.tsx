import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://ownmark.vercel.app'),
  title: 'OWNMARK — Your brand. Every table.',
  description: 'Custom-branded bottled water for hospitality & events.',
  alternates: { canonical: '/' },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'OWNMARK — Your brand. Every table.',
    description: 'Custom-branded bottled water for hospitality & events.',
    url: 'https://ownmark.vercel.app/',
    siteName: 'OWNMARK',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'OWNMARK — Your brand. Every table.',
    description: 'Custom-branded bottled water for hospitality & events.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: '#eeeae2',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body>
    </html>
  )
}
