

/** @type {import('next').NextConfig} */
const nextConfig = {
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
      { source: '/creat-site.html',                         destination: '/uslugi/sozdanie-sajtov',                permanent: true },
      { source: '/seo-optimization-of-product-cards.html',  destination: '/uslugi/seo-optimizaciya-kartochek',     permanent: true },
      { source: '/analytics.html',                          destination: '/uslugi/analitika-marketplejsov',        permanent: true },
      { source: '/marketing.html',                          destination: '/uslugi/marketing',                      permanent: true },
      { source: '/autoposting-bot-tg.html',                 destination: '/uslugi/razrabotka-telegram-botov',      permanent: true },
      { source: '/community-promotion-in-vk.html',          destination: '/uslugi/prodvizenie-vkontakte',          permanent: true },
      { source: '/content-creation.html',                   destination: '/uslugi/sozdanie-kontenta',              permanent: true },
      { source: '/parsing.html',                            destination: '/uslugi/parsing-dannyh',                 permanent: true },
      { source: '/soprovozhdenie-na-marketplece.html',      destination: '/uslugi/soprovozhdenie-na-marketplecah', permanent: true },
      { source: '/unit-economy.html',                       destination: '/uslugi/unit-ekonomika',                 permanent: true },
      { source: '/unit_economics.html',                     destination: '/uslugi/unit-ekonomika',                 permanent: true },
      { source: '/personal.html',                           destination: '/personal',                              permanent: true },
      { source: '/sale.html',                               destination: '/',                                      permanent: true },
      // Страница бота-автопостинга объединена с общей страницей ботов
      { source: '/uslugi/telegram-bot-avtoposting',         destination: '/uslugi/razrabotka-telegram-botov',      permanent: true },
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
