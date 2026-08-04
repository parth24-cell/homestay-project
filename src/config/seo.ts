import { Metadata } from "next";

export const siteConfig = {
  name: "Uttarahalli SRS Homestay & PG",
  description: "Experience premium, luxury living at Uttarahalli SRS Homestay & PG. A modern, minimal, and trustworthy space for a perfect stay.",
  url: "https://uttarahallihomestay.com",
  ogImage: "https://uttarahallihomestay.com/images/hero/og-image.jpg",
};

export const seoConfig: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Homestay", "PG", "Uttarahalli", "Bangalore", "Luxury PG", "Premium Homestay"],
  authors: [
    {
      name: "Uttarahalli SRS Homestay",
      url: siteConfig.url,
    }
  ],
  creator: "Uttarahalli SRS Homestay",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@srs_homestay",
  },
  icons: {
    icon: "/icons/favicon.ico",
    shortcut: "/icons/favicon-16x16.png",
    apple: "/icons/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};
