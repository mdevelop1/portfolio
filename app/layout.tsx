import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aurexon - Premium Digital Studio",
  description: "Aurexon projektuje nowoczesne strony internetowe, systemy webowe oraz infrastrukturę dla firm, które chcą wyglądać i działać premium. Next.js, React, TypeScript, Tailwind CSS, GSAP.",
  keywords: ["strony internetowe", "web development", "Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP", "premium digital studio", "software development"],
  authors: [{ name: "Aurexon Studio" }],
  openGraph: {
    title: "Aurexon - Premium Digital Studio",
    description: "Nowoczesne strony internetowe i systemy webowe dla marek premium",
    url: "https://aurexon.pl",
    siteName: "Aurexon",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurexon - Premium Digital Studio",
    description: "Nowoczesne strony internetowe i systemy webowe dla marek premium",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Aurexon",
          "url": "https://aurexon.pl",
          "logo": "https://aurexon.pl/logo.png",
          "contactPoint": [{ "@type": "ContactPoint", "telephone": "+48-123-456-789", "contactType": "Customer service", "areaServed": "PL" }],
          "sameAs": [
            "https://www.facebook.com/yourpage",
            "https://www.instagram.com/yourpage",
            "https://www.linkedin.com/company/yourcompany"
          ]
        }) }} />
      </head>
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
