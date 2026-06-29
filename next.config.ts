import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Оптимизация изображений
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.ads.msk.ru',
      },
    ],
  },

  // Заголовки безопасности
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options',        value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options',  value: 'nosniff' },
          { key: 'Referrer-Policy',         value: 'strict-origin-when-cross-origin' },
          { key: 'X-XSS-Protection',        value: '1; mode=block' },
        ],
      },
    ]
  },

  // Редиректы со старых Bootstrap-страниц на новые маршруты
  async redirects() {
    return [
      { source: '/creat-site.html',                         destination: '/services/web',        permanent: true },
      { source: '/seo-optimization-of-product-cards.html',  destination: '/services/seo',        permanent: true },
      { source: '/analytics.html',                          destination: '/services/analytics',  permanent: true },
      { source: '/marketing.html',                          destination: '/services/marketing',  permanent: true },
      { source: '/autoposting-bot-tg.html',                 destination: '/services/smm',        permanent: true },
      { source: '/community-promotion-in-vk.html',          destination: '/services/smm',        permanent: true },
      { source: '/content-creation.html',                   destination: '/services/content',    permanent: true },
      { source: '/parsing.html',                            destination: '/services/parsing',    permanent: true },
      { source: '/soprovozhdenie-na-marketplece.html',      destination: '/services/marketplace',permanent: true },
      { source: '/unit-economy.html',                       destination: '/services/analytics',  permanent: true },
      { source: '/unit_economics.html',                     destination: '/services/analytics',  permanent: true },
      { source: '/personal.html',                           destination: '/about',               permanent: true },
      { source: '/sale.html',                               destination: '/',                    permanent: true },
    ]
  },

  // Сжатие
  compress: true,

  // Строгий режим React
  reactStrictMode: true,

  // Выключаем x-powered-by
  poweredByHeader: false,
}

export default nextConfig
