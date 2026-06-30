import { MetadataRoute } from 'next'
import { servicesCatalog } from '@/lib/services-catalog'

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

  return [
    { url: base,                   lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    ...uslugiRoutes,
    { url: `${base}/services`,     lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/cases`,        lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${base}/about`,        lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`,      lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/web`,        lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/services/seo`,        lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/services/marketing`,  lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/services/smm`,        lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/services/analytics`,  lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/services/parsing`,    lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/services/marketplace`,lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ]
}
