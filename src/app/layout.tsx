import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { seoConfig } from "@/config/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = seoConfig;

import { FloatingActions } from "@/components/ui/floating-actions";
import { contactConfig } from "@/config/contact";
import { siteConfig } from "@/config/seo";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": siteConfig.name,
    "image": siteConfig.ogImage,
    "url": siteConfig.url,
    "telephone": contactConfig.phoneNumbers[0],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": contactConfig.addressDetails.street,
      "addressLocality": contactConfig.addressDetails.city,
      "postalCode": contactConfig.addressDetails.pincode,
      "addressCountry": "IN"
    },
    "description": siteConfig.description
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans pb-[env(safe-area-inset-bottom)]">
        {children}
        <FloatingActions />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
