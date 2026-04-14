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
    default: "Code Loom | Professional Web Design & AI Engineering Agency",
    template: "%s | Code Loom"
  },
  description: "Code Loom builds high-performance digital ecosystems, AI applications, and conversion-driven websites for ambitious founders and high-growth teams.",
  keywords: ["web design agency", "software engineering", "AI development", "Next.js experts", "Bangalore design agency", "MVP development", "startup engineering", "Code Loom"],
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codeloom.in",
    siteName: "Code Loom",
    title: "Code Loom | Professional Web Design & AI Engineering Agency",
    description: "Code Loom builds high-performance digital ecosystems, AI applications, and conversion-driven websites.",
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
    title: "Code Loom | Professional Web Design & AI Engineering Agency",
    description: "High-performance design & engineering for ambitious teams.",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // We should create this or use favicon
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
        {/* The booking flow is now handled via the dedicated /book page */}
        <Footer />
      </body>
    </html>
  );
}
