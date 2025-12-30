import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Switch to Mac | The Ecosystem Hub",
    template: "%s | Switch to Mac",
  },
  description: "The missing manual for Windows users switching to Mac. Master gradients, shortcuts, window management, and the ecosystem in minutes.",
  keywords: ["switch to mac", "windows to mac", "mac tutorial", "macos guide", "mac shortcuts", "productivity"],
  authors: [{ name: "The Ecosystem Team" }],
  creator: "The Ecosystem Team",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://switch-to-mac.com",
    title: "Switch to Mac | The Ecosystem Hub",
    description: "Documentation for the refined. A visual guide for migrating from Windows.",
    siteName: "Switch to Mac",
  },
  twitter: {
    card: "summary_large_image",
    title: "Switch to Mac | The Ecosystem Hub",
    description: "Documentation for the refined. A visual guide for migrating from Windows.",
    creator: "@switchtomac",
  },
};

import { JsonLd } from "@/components/seo/JsonLd";
import { Navbar } from "@/components/layout/Navbar";

import { Analytics } from "@vercel/analytics/next";
import { CommandMenu } from "@/components/layout/CommandMenu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Switch to Mac",
    "url": "https://switch-to-mac.com",
    "description": "The ultimate guide for Windows users switching to Mac.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://switch-to-mac.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <JsonLd data={jsonLd} />
        <Navbar />
        <CommandMenu />
        {children}
        <Analytics />
        <footer className="py-8 text-center text-sm text-white/20">
          <p>&copy; {new Date().getFullYear()} Switch to Mac. <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></p>
        </footer>
      </body>
    </html>
  );
}
