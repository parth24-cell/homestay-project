import { MetadataRoute } from "next"
import { siteConfig } from "@/config/seo"
import { navigationLinks } from "@/constants/navigation"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = navigationLinks.map((route) => ({
    url: `${siteConfig.url}${route.href}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route.href === "/" ? 1 : 0.8,
  }))

  return [...routes]
}
