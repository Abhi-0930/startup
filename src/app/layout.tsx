import type { Metadata } from "next";
import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lord-icon': any;
    }
  }
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import localFont from "next/font/local";

const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://codeloom.in"),
  title: {
    default: "Code Loom | Premium Digital Product & AI Engineering Agency",
    template: "%s | Code Loom"
  },
  description: "Code Loom architects high-performance digital ecosystems, intelligent AI applications, and premium conversion-driven interfaces for ambitious founders and high-growth brands.",
  keywords: ["premium web design", "digital product agency", "AI engineering", "Next.js experts", "Bangalore design agency", "MVP development", "startup engineering", "Code Loom"],
  authors: [{ name: "Code Loom Team" }],
  creator: "Code Loom",
  publisher: "Code Loom",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "NqXlkx9OuXG32XYtf5DVJbUIgW88Y831FYmOMWm-WLU",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Code Loom",
    title: "Code Loom | Premium Digital Product & AI Engineering Agency",
    description: "Code Loom architects high-performance digital ecosystems, intelligent AI applications, and premium conversion-driven interfaces.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Code Loom Agency Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Code Loom | Premium Digital Product & AI Engineering Agency",
    description: "High-performance digital design & intelligent engineering for ambitious brands.",
    images: ["/logo.png"],
    creator: "@codeloom_in",
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
  category: "technology",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/web-logo.png", type: "image/png" }
    ],
    apple: [
      { url: "/web-logo.png", sizes: "180x180", type: "image/png" }
    ],
  },
  manifest: "/manifest.json",
  themeColor: "#ffffff",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://codeloom.in/#website",
                  "url": "https://codeloom.in",
                  "name": "Code Loom",
                  "description": "Premium Digital Product & AI Engineering Agency",
                  "potentialAction": [
                    {
                      "@type": "SearchAction",
                      "target": "https://codeloom.in/search?q={search_term_string}",
                      "query-input": "required name=search_term_string"
                    }
                  ],
                  "inLanguage": "en-US"
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://codeloom.in/#organization",
                  "name": "Code Loom",
                  "url": "https://codeloom.in",
                  "logo": "https://codeloom.in/logo.png",
                  "image": "https://codeloom.in/logo.png",
                  "description": "Code Loom architects high-performance digital ecosystems and premium AI applications for ambitious founders.",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Bangalore",
                    "addressCountry": "IN"
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "hello@codeloom.in",
                    "contactType": "customer service"
                  },
                  "sameAs": [
                    "https://x.com/codeloom_in",
                    "https://github.com/codeloom-in",
                    "https://www.linkedin.com/company/codeloom-in",
                    "https://www.instagram.com/codeloom.in/"
                  ],
                  "priceRange": "$$$"
                },
                {
                  "@type": "ItemList",
                  "@id": "https://codeloom.in/#sitenavigation",
                  "name": "Code Loom Main Navigation",
                  "itemListElement": [
                    {
                      "@type": "SiteNavigationElement",
                      "position": 1,
                      "name": "About",
                      "url": "https://codeloom.in/about"
                    },
                    {
                      "@type": "SiteNavigationElement",
                      "position": 2,
                      "name": "Services",
                      "url": "https://codeloom.in#services"
                    },
                    {
                      "@type": "SiteNavigationElement",
                      "position": 3,
                      "name": "Projects",
                      "url": "https://codeloom.in#work"
                    },
                    {
                      "@type": "SiteNavigationElement",
                      "position": 4,
                      "name": "Careers",
                      "url": "https://codeloom.in/career"
                    },
                    {
                      "@type": "SiteNavigationElement",
                      "position": 5,
                      "name": "Contact",
                      "url": "https://codeloom.in/contact"
                    },
                    {
                      "@type": "SiteNavigationElement",
                      "position": 6,
                      "name": "Book a Call",
                      "url": "https://codeloom.in/book"
                    }
                  ]
                }
              ]
            }),
          }}
        />
        <Footer />
      </body>
    </html>
  );
}
