# SEO-архитектура ads.msk.ru
> Senior SEO Architect | Подготовлено для миграции на Next.js 14  
> Приоритет: Яндекс → Google | ЦА: МСБ Москвы

---

## 1. Keyword Mapping & Meta-данные (15 страниц)

> **Критическая проблема текущего сайта:** все страницы имеют идентичные title и description — дубли убивают ранжирование. После миграции каждая страница получает уникальные мета-данные.

| № | Страница (URL) | Кластер | Primary Keyword | Secondary Keywords | Title (≤60 симв.) | Description (≤160 симв.) | H1 |
|---|---|---|---|---|---|---|---|
| 1 | `/` | Агентство | цифровое маркетинговое агентство москва | диджитал агентство, интернет-маркетинг москва, комплексный маркетинг | Цифровой маркетинг в Москве \| AdsMsk | Агентство цифрового маркетинга AdsMsk. Маркетплейсы, реклама, разработка сайтов. Результат — рост продаж вашего бизнеса. | Агентство цифрового маркетинга в Москве |
| 2 | `/soprovozhdenie-na-marketplece` | Маркетплейсы | сопровождение на маркетплейсах | ведение магазина wildberries, сопровождение ozon, аутсорсинг маркетплейс | Сопровождение на маркетплейсах \| AdsMsk | Ведём магазины на Wildberries и Ozon под ключ: от регистрации до роста продаж. Работаем с МСБ Москвы. Бесплатный аудит. | Сопровождение на маркетплейсах Wildberries и Ozon |
| 3 | `/seo-optimization-of-product-cards` | Маркетплейсы | seo оптимизация карточек товаров | продвижение карточки ozon, оптимизация карточки wildberries, сео карточек wb | SEO карточек товаров WB и Ozon \| AdsMsk | Профессиональная SEO-оптимизация карточек товаров на Wildberries и Ozon. Рост позиций, CTR и конверсии. Аудит бесплатно. | SEO-оптимизация карточек товаров на маркетплейсах |
| 4 | `/creat-site` | Разработка | создание сайта москва | разработка интернет-магазина москва, создание лендинга, сайт под ключ | Создание сайтов в Москве \| AdsMsk | Разрабатываем сайты и интернет-магазины в Москве. Next.js, TypeScript, SEO с первого дня. От 25 000 ₽. Срок от 7 дней. | Создание сайтов и интернет-магазинов в Москве |
| 5 | `/marketing` | Реклама | интернет-маркетинг для бизнеса | комплексный интернет-маркетинг, продвижение бизнеса в интернете, маркетинг под ключ | Интернет-маркетинг в Москве \| AdsMsk | Комплексный интернет-маркетинг для МСБ: контекст, таргет, SEO, маркетплейсы. Увеличиваем продажи, а не просто трафик. | Комплексный интернет-маркетинг для вашего бизнеса |
| 6 | `/analytics` | Аналитика | веб-аналитика для бизнеса | настройка яндекс метрики, сквозная аналитика, аналитика рекламных кампаний | Веб-аналитика для бизнеса \| AdsMsk | Настраиваем сквозную аналитику: Яндекс Метрика, цели, воронки, ROI рекламы. Принимайте решения на основе данных. | Веб-аналитика и сквозная аналитика для бизнеса |
| 7 | `/content-creation` | Контент | создание контента для соцсетей | контент-маркетинг москва, ведение соцсетей, smm агентство москва | Создание контента для соцсетей \| AdsMsk | Создаём контент для ВКонтакте, Telegram и маркетплейсов. Тексты, фото, видео, инфографика. Контент-план бесплатно. | Создание контента для социальных сетей и маркетплейсов |
| 8 | `/community-promotion-in-vk` | Соцсети | продвижение сообщества вконтакте | раскрутка группы вк, smm вконтакте, реклама в вк | Продвижение ВКонтакте в Москве \| AdsMsk | Продвигаем сообщества ВКонтакте: таргетированная реклама, контент, прирост живых подписчиков. Первые результаты за 14 дней. | Продвижение сообщества ВКонтакте |
| 9 | `/autoposting-bot-tg` | Автоматизация | бот для автопостинга telegram | telegram бот для бизнеса, автоматизация постинга, чат-бот telegram | Telegram-бот для автопостинга \| AdsMsk | Разрабатываем Telegram-боты для автопостинга и автоматизации бизнеса. Экономьте время — публикуйте контент автоматически. | Telegram-бот для автопостинга и автоматизации |
| 10 | `/parsing` | Автоматизация | парсинг данных для бизнеса | сбор данных с сайтов, парсинг wildberries ozon, мониторинг цен конкурентов | Парсинг данных с маркетплейсов \| AdsMsk | Парсим данные с маркетплейсов, сайтов конкурентов и каталогов. Мониторинг цен, остатков, отзывов. Готовый результат в Excel/API. | Парсинг данных с маркетплейсов и сайтов |
| 11 | `/unit-economy` | Аналитика | юнит экономика для маркетплейсов | расчёт юнит экономики wb, рентабельность на маркетплейсе, unit economics ozon | Юнит-экономика для маркетплейсов \| AdsMsk | Рассчитаем юнит-экономику вашего товара на WB и Ozon: себестоимость, комиссии, реклама, чистая прибыль. Понимайте цифры. | Юнит-экономика товара на маркетплейсах |
| 12 | `/personal` | Агентство | digital маркетолог на аутсорсе | личный маркетолог для бизнеса, маркетолог на аутсорсинг москва, удалённый маркетолог | Маркетолог на аутсорсе \| AdsMsk | Личный digital-маркетолог для вашего бизнеса без найма в штат. Стратегия, реализация, отчётность. От 15 000 ₽/мес. | Персональный маркетолог на аутсорсинге для бизнеса |
| 13 | `/keys-company-ads-msk` | Агентство | о компании digital агентство | кейсы маркетингового агентства, портфолио smm агентства, отзывы клиентов | О компании AdsMsk \| Цифровой маркетинг | Digital-агентство AdsMsk: команда, кейсы, результаты клиентов. Работаем с МСБ Москвы с 2020 года. Честные цены, ясная отчётность. | О компании — Digital-агентство AdsMsk |
| 14 | `/gidVK` | Контент (блог) | как раскрутить группу вконтакте | продвижение в вк бесплатно, гайд по вк, smm гайд | Гид по продвижению ВКонтакте 2025 | Пошаговый гайд: как раскрутить группу ВКонтакте самостоятельно. Контент, реклама, алгоритмы — всё в одной статье. | Полный гид по раскрутке сообщества ВКонтакте |
| 15 | `/novation_keys` | Контент (блог) | новинки цифрового маркетинга | тренды smm 2025, новости маркетинга, обзоры инструментов | Тренды цифрового маркетинга 2025 \| AdsMsk | Актуальные тренды и инструменты digital-маркетинга в 2025 году. Яндекс, ВК, маркетплейсы — что работает прямо сейчас. | Тренды и новинки цифрового маркетинга 2025 |

---

## 2. H2-структура страниц (семантический скелет)

### `/` — Главная
```
H1: Агентство цифрового маркетинга в Москве
  H2: Наши услуги
  H2: Работаем с маркетплейсами Wildberries и Ozon
  H2: Разработка сайтов и автоматизация
  H2: Почему выбирают AdsMsk
  H2: Кейсы и результаты
  H2: Частые вопросы
```

### `/soprovozhdenie-na-marketplece` — Сопровождение
```
H1: Сопровождение на маркетплейсах Wildberries и Ozon
  H2: Что входит в сопровождение
  H2: Полное ведение магазина на Wildberries
  H2: Продвижение на Ozon
  H2: Этапы работы
  H2: Стоимость сопровождения
  H2: Вопросы и ответы
```

### `/seo-optimization-of-product-cards` — SEO карточек
```
H1: SEO-оптимизация карточек товаров на маркетплейсах
  H2: Что такое SEO карточки товара
  H2: Оптимизация карточки на Wildberries
  H2: Продвижение карточки на Ozon
  H2: Как мы работаем
  H2: Результаты до и после
  H2: Тарифы
```

### `/creat-site` — Разработка сайтов
```
H1: Создание сайтов и интернет-магазинов в Москве
  H2: Виды сайтов
  H2: Технологии (Next.js, TypeScript)
  H2: SEO-разработка с первого дня
  H2: Портфолио
  H2: Цены на разработку
  H2: Сроки и процесс
```

### `/community-promotion-in-vk` — ВКонтакте
```
H1: Продвижение сообщества ВКонтакте
  H2: Таргетированная реклама ВКонтакте
  H2: Создание и оформление сообщества
  H2: Контент-стратегия для ВК
  H2: Аналитика и отчётность
  H2: Стоимость SMM ВКонтакте
```

---

## 3. Schema.org JSON-LD шаблоны

### 3.1 Organization — Главная страница (`/`)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://ads.msk.ru/#organization",
  "name": "AdsMsk",
  "alternateName": "Рекламное агентство AdsMsk",
  "url": "https://ads.msk.ru",
  "logo": {
    "@type": "ImageObject",
    "url": "https://ads.msk.ru/img/logo.webp",
    "width": 200,
    "height": 60
  },
  "image": "https://ads.msk.ru/ads-msk.webp",
  "description": "Digital-агентство полного цикла в Москве. Продвижение на маркетплейсах, контекстная реклама, разработка сайтов.",
  "telephone": "+7-XXX-XXX-XX-XX",
  "email": "info@ads.msk.ru",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Москва",
    "addressRegion": "Москва",
    "addressCountry": "RU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 55.7558,
    "longitude": 37.6173
  },
  "areaServed": {
    "@type": "City",
    "name": "Москва"
  },
  "sameAs": [
    "https://vk.com/adsmsk",
    "https://t.me/adsmsk"
  ],
  "foundingDate": "2020",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": "5-15"
  },
  "priceRange": "₽₽",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ]
}
```

### 3.2 Service — Страницы услуг

> Шаблон с переменными. Заполняется динамически в `generateMetadata()` Next.js.

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://ads.msk.ru/{SLUG}#service",
  "name": "{SERVICE_NAME}",
  "description": "{SERVICE_DESCRIPTION}",
  "provider": {
    "@type": "Organization",
    "@id": "https://ads.msk.ru/#organization"
  },
  "areaServed": {
    "@type": "City",
    "name": "Москва"
  },
  "serviceType": "{SERVICE_TYPE}",
  "url": "https://ads.msk.ru/{SLUG}",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "RUB",
    "price": "{PRICE_FROM}",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "minPrice": "{PRICE_MIN}",
      "priceCurrency": "RUB"
    },
    "availability": "https://schema.org/InStock"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "{SERVICE_NAME} — тарифы"
  }
}
```

**Значения переменных для каждой страницы-услуги:**

| Страница | SERVICE_NAME | SERVICE_TYPE | PRICE_MIN |
|---|---|---|---|
| `/soprovozhdenie-na-marketplece` | Сопровождение на маркетплейсах | MarketplaceManagement | 20000 |
| `/seo-optimization-of-product-cards` | SEO-оптимизация карточек товаров | SearchEngineOptimization | 10000 |
| `/creat-site` | Создание сайтов в Москве | WebDesign | 25000 |
| `/marketing` | Интернет-маркетинг | MarketingService | 15000 |
| `/analytics` | Веб-аналитика | AnalyticsService | 8000 |
| `/content-creation` | Создание контента | ContentMarketing | 12000 |
| `/community-promotion-in-vk` | Продвижение ВКонтакте | SocialMediaMarketing | 15000 |
| `/autoposting-bot-tg` | Telegram-бот для бизнеса | SoftwareApplication | 18000 |
| `/parsing` | Парсинг данных | DataService | 10000 |
| `/unit-economy` | Юнит-экономика | ConsultingService | 8000 |
| `/personal` | Маркетолог на аутсорсе | ProfessionalService | 15000 |

### 3.3 Article — Страницы блога (`/gidVK`, `/novation_keys`)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://ads.msk.ru/{SLUG}#article",
  "headline": "{ARTICLE_TITLE}",
  "description": "{ARTICLE_DESCRIPTION}",
  "image": "https://ads.msk.ru/img/{SLUG}-og.webp",
  "author": {
    "@type": "Organization",
    "@id": "https://ads.msk.ru/#organization",
    "name": "AdsMsk"
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://ads.msk.ru/#organization",
    "name": "AdsMsk",
    "logo": {
      "@type": "ImageObject",
      "url": "https://ads.msk.ru/img/logo.webp"
    }
  },
  "datePublished": "{DATE_PUBLISHED}",
  "dateModified": "{DATE_MODIFIED}",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://ads.msk.ru/{SLUG}"
  },
  "articleSection": "{CATEGORY}",
  "keywords": "{KEYWORDS_COMMA_SEPARATED}",
  "inLanguage": "ru-RU"
}
```

### 3.4 BreadcrumbList — все страницы кроме главной

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Главная",
      "item": "https://ads.msk.ru/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "{PAGE_NAME}",
      "item": "https://ads.msk.ru/{SLUG}"
    }
  ]
}
```

### 3.5 FAQPage — страницы услуг (блок вопрос-ответ)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "{QUESTION_1}",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "{ANSWER_1}"
      }
    },
    {
      "@type": "Question",
      "name": "{QUESTION_2}",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "{ANSWER_2}"
      }
    }
  ]
}
```

---

## 4. Семантическое кластеринг и стратегия

### Карта кластеров

```
ads.msk.ru/
│
├── 🛒 МАРКЕТПЛЕЙСЫ (приоритет #1 — высокий спрос МСБ)
│   ├── /soprovozhdenie-na-marketplece   [hub-страница кластера]
│   ├── /seo-optimization-of-product-cards
│   └── /unit-economy
│
├── 📣 РЕКЛАМА И SMM
│   ├── /marketing                       [hub-страница кластера]
│   ├── /community-promotion-in-vk
│   └── /content-creation
│
├── 💻 РАЗРАБОТКА И АВТОМАТИЗАЦИЯ
│   ├── /creat-site                      [hub-страница кластера]
│   ├── /autoposting-bot-tg
│   └── /parsing
│
├── 📊 АНАЛИТИКА
│   ├── /analytics                       [hub-страница кластера]
│   └── /unit-economy  (двойная принадлежность)
│
└── 📰 КОНТЕНТ / БЛОГ
    ├── /gidVK
    └── /novation_keys
```

### Приоритизация страниц по потенциалу трафика (Яндекс)

| Приоритет | Страница | Потенциал (запр./мес.) | Конкуренция |
|---|---|---|---|
| 🔴 P1 | `/soprovozhdenie-na-marketplece` | 5 000–15 000 | Высокая |
| 🔴 P1 | `/seo-optimization-of-product-cards` | 3 000–8 000 | Средняя |
| 🔴 P1 | `/creat-site` | 10 000–30 000 | Высокая |
| 🟡 P2 | `/community-promotion-in-vk` | 3 000–7 000 | Средняя |
| 🟡 P2 | `/marketing` | 5 000–12 000 | Высокая |
| 🟡 P2 | `/analytics` | 1 000–3 000 | Низкая |
| 🟢 P3 | `/parsing` | 500–2 000 | Низкая |
| 🟢 P3 | `/autoposting-bot-tg` | 500–1 500 | Низкая |
| 🟢 P3 | `/unit-economy` | 1 000–3 000 | Низкая |

---

## 5. Стратегия перелинковки

### Правила anchor text

- **Точное вхождение ключа** (20% ссылок) — для Яндекса важны прямые вхождения
- **Частичное вхождение** (40%) — "подробнее о продвижении на WB"
- **Брендированный** (20%) — "услуги AdsMsk"
- **Навигационный** (20%) — "читать статью", "узнать стоимость"

### Матрица внутренних ссылок

| Источник | Цель | Anchor | Обоснование |
|---|---|---|---|
| `/` | `/soprovozhdenie-na-marketplece` | продвижение на маркетплейсах | главная → приоритетная услуга |
| `/` | `/creat-site` | создание сайта в Москве | главная → приоритетная услуга |
| `/` | `/marketing` | интернет-маркетинг для бизнеса | главная → хаб-услуга |
| `/soprovozhdenie-na-marketplece` | `/seo-optimization-of-product-cards` | SEO карточек товаров на маркетплейсах | смежная услуга |
| `/soprovozhdenie-na-marketplece` | `/unit-economy` | расчёт юнит-экономики | логичное дополнение |
| `/soprovozhdenie-na-marketplece` | `/analytics` | аналитика продаж на WB | смежная услуга |
| `/creat-site` | `/analytics` | настройка аналитики для сайта | апсейл |
| `/creat-site` | `/marketing` | интернет-маркетинг для нового сайта | апсейл |
| `/marketing` | `/community-promotion-in-vk` | продвижение ВКонтакте | раскрытие кластера |
| `/marketing` | `/content-creation` | создание контента для соцсетей | раскрытие кластера |
| `/community-promotion-in-vk` | `/content-creation` | контент для сообщества ВК | смежная услуга |
| `/community-promotion-in-vk` | `/gidVK` | бесплатный гид по ВКонтакте | поддержка блогом |
| `/parsing` | `/analytics` | анализ данных конкурентов | логичная связь |
| `/autoposting-bot-tg` | `/content-creation` | контент для Telegram | смежная услуга |
| `/gidVK` | `/community-promotion-in-vk` | заказать продвижение ВКонтакте | конвертация читателя |
| `/novation_keys` | `/` | все услуги AdsMsk | возврат на главную |

### Правила перелинковки для Next.js

```tsx
// Пример компонента RelatedServices
// src/components/RelatedServices.tsx

const relatedServices: Record<string, { href: string; anchor: string }[]> = {
  '/soprovozhdenie-na-marketplece': [
    { href: '/seo-optimization-of-product-cards', anchor: 'SEO карточек товаров на маркетплейсах' },
    { href: '/unit-economy', anchor: 'расчёт юнит-экономики товара' },
    { href: '/analytics', anchor: 'аналитика продаж на WB и Ozon' },
  ],
  '/creat-site': [
    { href: '/analytics', anchor: 'настройка веб-аналитики для сайта' },
    { href: '/marketing', anchor: 'интернет-маркетинг для нового сайта' },
  ],
  // ... остальные страницы
}
```

---

## 6. E-E-A-T сигналы — приоритеты

> Яндекс (ИКС) и Google (E-E-A-T) оценивают экспертность по схожим критериям.

### Tier 1 — Критические (внедрить при миграции)

- [ ] **Контактная информация** — реальный адрес, телефон, email на каждой странице
- [ ] **Команда** — раздел «Команда» с фото, именами, должностями и ссылками на LinkedIn/ВКонтакте
- [ ] **Кейсы с цифрами** — «+320% продаж за 3 месяца» с реальными скринами
- [ ] **Отзывы** — Schema.org `Review` + виджет Яндекс Карт / 2ГИС
- [ ] **Дата основания и опыт** — «Работаем с 2020 года» в Schema.org

### Tier 2 — Высокоприоритетные (1–2 мес.)

- [ ] **Блог** — минимум 2 статьи/мес. с реальными данными (не ChatGPT-спам)
- [ ] **Сертификаты** — Яндекс Директ, ВКонтакте Ads, Wildberries Partner
- [ ] **Упоминания в СМИ** — пресс-релизы, гостевые статьи на vc.ru, spark.ru
- [ ] **Видео-кейсы** — YouTube / RuTube, встроенные на страницы услуг

### Tier 3 — Поддерживающие

- [ ] **FAQ на каждой странице** с Schema.org FAQPage
- [ ] **Партнёрские бейджи** — «Официальный партнёр Wildberries»
- [ ] **Регулярное обновление** — `dateModified` в Schema.org актуальна

---

## 7. SEO-чеклист для Next.js 14

### 7.1 Метаданные (`generateMetadata`)

```tsx
// src/app/[slug]/page.tsx
import type { Metadata } from 'next'
import { seoData } from '@/lib/seo-data'  // данные из этого документа

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = seoData[params.slug]
  
  return {
    title: page.title,                          // ≤60 символов
    description: page.description,              // ≤160 символов
    keywords: page.keywords.join(', '),
    alternates: {
      canonical: `https://ads.msk.ru/${params.slug}`,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://ads.msk.ru/${params.slug}`,
      siteName: 'AdsMsk',
      images: [{ url: `https://ads.msk.ru/img/${params.slug}-og.webp`, width: 1200, height: 630 }],
      locale: 'ru_RU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  }
}
```

### 7.2 Sitemap (`src/app/sitemap.ts`)

```ts
import { MetadataRoute } from 'next'

const pages = [
  { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
  { url: '/soprovozhdenie-na-marketplece', priority: 0.9, changeFrequency: 'weekly' as const },
  { url: '/seo-optimization-of-product-cards', priority: 0.9, changeFrequency: 'weekly' as const },
  { url: '/creat-site', priority: 0.9, changeFrequency: 'weekly' as const },
  { url: '/marketing', priority: 0.8, changeFrequency: 'weekly' as const },
  { url: '/analytics', priority: 0.7, changeFrequency: 'monthly' as const },
  { url: '/content-creation', priority: 0.7, changeFrequency: 'monthly' as const },
  { url: '/community-promotion-in-vk', priority: 0.8, changeFrequency: 'weekly' as const },
  { url: '/autoposting-bot-tg', priority: 0.6, changeFrequency: 'monthly' as const },
  { url: '/parsing', priority: 0.6, changeFrequency: 'monthly' as const },
  { url: '/unit-economy', priority: 0.7, changeFrequency: 'monthly' as const },
  { url: '/personal', priority: 0.7, changeFrequency: 'monthly' as const },
  { url: '/keys-company-ads-msk', priority: 0.5, changeFrequency: 'monthly' as const },
  { url: '/gidVK', priority: 0.5, changeFrequency: 'monthly' as const },
  { url: '/novation_keys', priority: 0.4, changeFrequency: 'monthly' as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(page => ({
    url: `https://ads.msk.ru${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
```

### 7.3 Robots (`src/app/robots.ts`)

```ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/sale'],  // sale — временная акция, не индексировать
      },
      {
        userAgent: 'YandexBot',
        allow: '/',
        crawlDelay: 1,
      },
    ],
    sitemap: 'https://ads.msk.ru/sitemap.xml',
    host: 'https://ads.msk.ru',   // важно для Яндекса
  }
}
```

### 7.4 JSON-LD компонент

```tsx
// src/components/SchemaOrg.tsx
export function SchemaOrg({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Использование в layout.tsx (Organization — всегда):
// <SchemaOrg data={organizationSchema} />
//
// На странице услуги (Service + BreadcrumbList + FAQPage):
// <SchemaOrg data={[serviceSchema, breadcrumbSchema, faqSchema]} />
```

### 7.5 OG-изображения (`src/app/opengraph-image.tsx`)

```tsx
// Динамическая генерация OG-картинок через Next.js ImageResponse
import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({ params }: { params: { slug: string } }) {
  const page = seoData[params.slug]
  return new ImageResponse(
    <div style={{ background: '#1a1a2e', color: 'white', padding: '60px', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ fontSize: 64, fontWeight: 700 }}>{page.h1}</div>
      <div style={{ fontSize: 32, marginTop: 20, color: '#888' }}>ads.msk.ru</div>
    </div>
  )
}
```

### 7.6 Финальный чеклист миграции

```
Технические SEO:
✅ generateMetadata() на каждой странице (уникальные title + description)
✅ canonical URL в каждой странице
✅ src/app/sitemap.ts с priority и changeFrequency
✅ src/app/robots.ts с host для Яндекса
✅ JSON-LD Schema.org: Organization (главная), Service (услуги), Article (блог)
✅ BreadcrumbList на всех страницах кроме главной
✅ FAQPage на страницах услуг
✅ OG-теги + og:image (1200×630) на каждой странице
✅ next/image с alt-текстами для всех изображений
✅ Подключить Яндекс Вебмастер (верификация через meta или файл)
✅ Подключить Google Search Console

Контентные SEO:
✅ Уникальный H1 на каждой странице (из таблицы выше)
✅ H2-структура по шаблонам раздела 2
✅ Перелинковка по матрице раздела 5
✅ LSI-слова в текстах (синонимы и смежные термины)
✅ Геомодификаторы «в Москве» в H1/H2/тексте на коммерческих страницах

Производительность (влияет на ранжирование):
✅ LCP < 2.5s (next/image lazy loading)
✅ CLS = 0 (резервирование места для изображений)
✅ Core Web Vitals зелёные в Google PageSpeed
✅ Яндекс ИКС мониторинг (раз в мес.)
```

---

## 8. Быстрые победы (Quick Wins) — первые 30 дней

| Действие | Ожидаемый эффект | Сложность |
|---|---|---|
| Уникальные title/description на всех страницах | +CTR 20–40% из поиска | 🟢 Низкая |
| Schema.org Organization на главной | Расширенные сниппеты в Яндексе | 🟢 Низкая |
| Добавить реальный телефон в header | Доверие, E-E-A-T | 🟢 Низкая |
| Яндекс Вебмастер + Search Console | Мониторинг индексации | 🟢 Низкая |
| canonical URL на всех страницах | Устранение дублей | 🟢 Низкая |
| FAQPage на 3 топ-страницах | Расширенные сниппеты | 🟡 Средняя |
| Кейсы с цифрами на главной | E-E-A-T, конверсия | 🟡 Средняя |
| Blog: 2 статьи/мес. по НЧ запросам | Долгосрочный трафик | 🔴 Высокая |
