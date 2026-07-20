import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://aurexon.pl"),

  title: {
    default: "Aurexon - Premium Web Development & Digital Experiences",
    template: "%s | Aurexon",
  },

  description:
    "Aurexon creates premium websites, web applications and digital experiences with a strong focus on performance, design and modern technologies. Next.js, React, UI/UX, branding and scalable solutions.",

  keywords: [
    // Brand
    "Aurexon",
    "Aurexon Studio",
    "Aurexon Web Development",

    // Web Development
    "web development",
    "website development",
    "custom websites",
    "premium websites",
    "business websites",
    "landing pages",
    "portfolio websites",
    "corporate websites",

    // Frontend
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript",
    "frontend development",

    // Backend
    "Node.js",
    "API development",
    "full stack development",
    "web applications",
    "custom software",

    // Performance
    "SEO optimization",
    "Core Web Vitals",
    "website optimization",
    "fast websites",
    "high performance websites",

    // Design
    "UI design",
    "UX design",
    "UI UX",
    "modern web design",
    "digital experiences",
    "branding",
    "creative studio",

    // Services
    "web agency",
    "digital agency",
    "software house",
    "website redesign",
    "website maintenance",
    "responsive websites",

    // Poland
    "web developer Poland",
    "software development Poland",
    "Next.js developer",
    "React developer",
  ],

  creator: "Aurexon",
  publisher: "Aurexon",
  applicationName: "Aurexon",

  authors: [
    {
      name: "Aurexon",
      url: "https://aurexon.pl",
    },
  ],

  category: "Technology",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://aurexon.pl",
  },

  openGraph: {
    title: "Aurexon — Premium Web Development",
    description:
      "Building premium websites, web applications and digital experiences powered by Next.js, React and modern technologies.",
    url: "https://aurexon.pl",
    siteName: "Aurexon",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aurexon",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Aurexon",
    description:
      "Premium websites, web applications and digital experiences.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  verification: {
    google: "TWOJ_GOOGLE_VERIFICATION",
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Aurexon",
            "url": "https://aurexon.pl",
            "logo": "https://aurexon.pl/logo.png",
            "sameAs": [
              "https://instagram.com/aurexon",
              "https://github.com/..."
            ],
            "description": "Premium web development studio creating modern websites and web applications."
          },
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Aurexon",
            "url": "https://aurexon.pl",
            "areaServed": "Worldwide",
            "priceRange": "$$$",
            "serviceType": [
              "Website Development",
              "Web Applications",
              "UI/UX Design",
              "Branding",
              "SEO",
              "Performance Optimization"
            ]
          }
        ]) }} />
      </head>
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
