import React from "react"
import type { Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: '--font-instrument'
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-instrument-serif'
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Aurexon | Full Stack Developer',
    template: '%s | Aurexon',
  },
  description: 'Aurexon tworzy aplikacje webowe, mobilne i desktopowe, automatyzacje oraz systemy dla firm.',
  keywords: [
    'Aurexon',
    'Aurexon developer',
    'full stack developer',
    'developer Polska',
    'aplikacje webowe',
    'aplikacje mobilne',
    'aplikacje desktopowe',
    'automatyzacje dla firm',
    'systemy dla firm',
    'oprogramowanie na zamówienie',
  ],
  authors: [{ name: 'Aurexon', url: siteUrl }],
  creator: 'Aurexon',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: siteUrl,
    siteName: 'Aurexon',
    title: 'Aurexon | Full Stack Developer',
    description: 'Aplikacje webowe, mobilne i desktopowe, automatyzacje oraz systemy dla firm.',
  },
  twitter: {
    card: 'summary',
    title: 'Aurexon | Full Stack Developer',
    description: 'Tworzę oprogramowanie, które pomaga firmom działać sprawniej.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
