import type { Metadata, Viewport } from 'next'
import { Golos_Text, Inter } from 'next/font/google'
import '@/styles/globals.css'

// ─── Fonts ────────────────────────────────────────────────────────────────────

const golosText = Golos_Text({
  subsets:  ['latin', 'cyrillic'],
  weight:   ['400', '500', '600', '700', '800'],
  variable: '--font-golos',
  display:  'swap',
})

const inter = Inter({
  subsets:  ['latin', 'cyrillic'],
  weight:   ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display:  'swap',
})

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://ads.msk.ru'),

  title: {
    default:  'AdsMsk — Digital-маркетинг в Москве',
    template: '%s | AdsMsk',
  },
  description:
    'Агентство digital-маркетинга в Москве. Контекстная реклама, SEO-продвижение, SMM, создание сайтов, маркетплейсы. Результат — измеримый рост трафика и продаж.',
  keywords: [
    'digital-маркетинг Москва',
    'контекстная реклама Яндекс Директ',
    'SEO продвижение сайтов',
    'SMM агентство Москва',
    'создание сайтов Москва',
    'реклама ВКонтакте',
    'продвижение маркетплейс',
    'AdsMsk',
  ],
  authors:  [{ name: 'AdsMsk', url: 'https://ads.msk.ru' }],
  creator:  'AdsMsk',
  publisher:'AdsMsk',

  openGraph: {
    type:        'website',
    locale:      'ru_RU',
    url:         'https://ads.msk.ru',
    siteName:    'AdsMsk',
    title:       'AdsMsk — Digital-маркетинг в Москве',
    description: 'Контекстная реклама, SEO, SMM, создание сайтов. Результат — измеримый рост.',
    images: [
      {
        url:    '/og-image.jpg',
        width:  1200,
        height: 630,
        alt:    'AdsMsk — Digital-маркетинг в Москве',
      },
    ],
  },

  twitter: {
    card:        'summary_large_image',
    title:       'AdsMsk — Digital-маркетинг в Москве',
    description: 'Контекстная реклама, SEO, SMM, создание сайтов.',
    images:      ['/og-image.jpg'],
  },

  robots: {
    index:             true,
    follow:            true,
    googleBot: {
      index:               true,
      follow:              true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet':       -1,
    },
  },

  icons: {
    icon:        '/favicon.ico',
    shortcut:    '/favicon-16x16.png',
    apple:       '/apple-touch-icon.png',
  },

  manifest:    '/manifest.json',
  alternates:  { canonical: 'https://ads.msk.ru' },
}

export const viewport: Viewport = {
  width:        'device-width',
  initialScale: 1,
  themeColor:   '#05071a',
}

// ─── Layout ───────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ru"
      className={`dark ${golosText.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Top.Mail.Ru */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var _tmr = window._tmr || (window._tmr = []);
              _tmr.push({id: "3575886", type: "pageView", start: (new Date()).getTime()});
              (function (d, w, id) {
                if (d.getElementById(id)) return;
                var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
                ts.src = "https://top-fwz1.mail.ru/js/code.js";
                var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
                if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
              })(document, window, "tmr-code");
            `,
          }}
        />

        {/* JSON-LD Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type':    'MarketingAgency',
              name:       'AdsMsk',
              url:        'https://ads.msk.ru',
              logo:       'https://ads.msk.ru/img/AdsMsk.jpg',
              description:
                'Агентство digital-маркетинга: контекстная реклама, SEO, SMM, создание сайтов, маркетплейсы.',
              address: {
                '@type':           'PostalAddress',
                addressLocality:   'Москва',
                addressCountry:    'RU',
              },
              contactPoint: {
                '@type':       'ContactPoint',
                telephone:     '+7-915-468-39-25',
                contactType:   'Customer Service',
                areaServed:    'RU',
                availableLanguage: 'Russian',
              },
              sameAs: [
                'https://vk.com/adsmsk',
                'https://t.me/adsmsk',
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased" style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)' }}>
        {children}
      </body>
    </html>
  )
}
