import { MetadataRoute } from 'next'
import { servicesCatalog } from '@/lib/services-catalog'
import { keysCatalog } from '@/lib/keys-catalog'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://ads.msk.ru'
  const now  = new Date()

  const uslugiRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/uslugi`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    ...servicesCatalog.map((s) => ({
      url: `${base}/uslugi/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]

  const keysRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/keys`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    ...keysCatalog.map((c) => ({
      url: `${base}/keys/${c.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]

  return [
    { url: base,                lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    ...uslugiRoutes,
    ...keysRoutes,
    { url: `${base}/komanda`,   lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/contact`,   lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ]
}
