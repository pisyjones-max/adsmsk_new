# Информационная архитектура — AdsMsk

> **Версия:** 1.0  
> **Дата:** 2026-06-27  
> **Статус:** Утверждён к разработке  
> **Основание:** [AUDIT.md](../AUDIT.md)

---

## 1. Sitemap — дерево страниц

```
ads.msk.ru/
│
├── /                                        L1 ★★★ Главная
│
├── /uslugi/                                 L1 ★★★ Каталог услуг
│   ├── /uslugi/soprovozhdenie               L2 ★★★ Сопровождение на маркетплейсах
│   ├── /uslugi/seo                          L2 ★★★ SEO-оптимизация карточек
│   ├── /uslugi/marketing                    L2 ★★★ Маркетинг (Яндекс.Директ / Ozon)
│   ├── /uslugi/analitika                    L2 ★★★ Аналитика маркетплейсов
│   ├── /uslugi/kontent                      L2 ★★  Создание контента
│   ├── /uslugi/sozdanie-sayta               L2 ★★  Создание сайтов
│   ├── /uslugi/prodvizhenie-vk              L2 ★★  Продвижение ВКонтакте
│   ├── /uslugi/parsing                      L2 ★★  Парсинг данных
│   ├── /uslugi/unit-ekonomika               L2 ★★  Юнит-экономика
│   └── /uslugi/telegram-bot                 L2 ★   Telegram-бот автопостинг
│
├── /cases/                                  L1 ★★★ Кейсы
│   ├── /cases/novation                      L2 ★★  Кейс: Novation / Ozon
│   └── /cases/fotoepilyatory                L2 ★★  Кейс: Дистрибьютор фотоэпиляторов
│
├── /blog/                                   L1 ★★  Блог / статьи
│   └── /blog/kak-raskrutit-soobshchestvo-vk L2 ★  Гид: продвижение сообщества ВК
│
├── /komanda/                                L1 ★   О команде
├── /kontakty/                               L1 ★★★ Контакты  ← NEW (не было!)
│
└── [Системные / без меню]
    ├── /privacy/                            Политика конфиденциальности
    └── /sitemap.xml                         (генерируется next-sitemap)
```

**Итого:** 18 публичных страниц, 3 уровня максимум.  
**Новые страницы:** `/uslugi/` (хаб), `/cases/` (хаб), `/blog/` (хаб), `/kontakty/`.

---

## 2. Маппинг старых URL на новые

### 2.1 Редиректы 301 (постоянные)

| Старый URL | Новый URL | Примечание |
|---|---|---|
| `/index.html` | `/` | Главная |
| `/soprovozhdenie-na-marketplece.html` | `/uslugi/soprovozhdenie` | Опечатка в слове «маркетплейс» исправлена |
| `/seo-optimization-of-product-cards.html` | `/uslugi/seo` | Сокращён slug |
| `/marketing.html` | `/uslugi/marketing` | |
| `/analytics.html` | `/uslugi/analitika` | Русификация slug |
| `/content-creation.html` | `/uslugi/kontent` | |
| `/creat-site.html` | `/uslugi/sozdanie-sayta` | Опечатка «creat» исправлена |
| `/community-promotion-in-vk.html` | `/uslugi/prodvizhenie-vk` | |
| `/parsing.html` | `/uslugi/parsing` | |
| `/unit-economy.html` | `/uslugi/unit-ekonomika` | Объединить контент из обоих файлов |
| `/unit_economics.html` | `/uslugi/unit-ekonomika` | Дубль → удалить |
| `/autoposting-bot-tg.html` | `/uslugi/telegram-bot` | |
| `/keys-company-ads-msk.html` | `/cases` | |
| `/novation_keys.html` | `/cases/novation` | |
| `/photo_keys.html` | `/cases/fotoepilyatory` | |
| `/gidVK.html` | `/blog/kak-raskrutit-soobshchestvo-vk` | Повышаем ценность через /blog/ |
| `/comands.html` | `/komanda` | Опечатка «comands» исправлена |
| `/Comands.html` | `/komanda` | Вариант из sitemap с заглавной C |
| `/personal.html` | `/privacy` | |
| `/sale.html` | `/` | Акция устарела → на главную (302) |

### 2.2 Технические файлы (перенести в `next.config.js`)

| Файл | Замена |
|---|---|
| `/googlef2b2fe0e63aea3fd.html` | `next.config.js` → `headers()` или `app/googlef2b2fe0e63aea3fd/route.ts` |
| `/yandex_37cfb34789ce0a90.html` | `public/yandex_37cfb34789ce0a90.html` (статичный файл) |

### 2.3 Код для `next.config.js`

```js
async redirects() {
  return [
    // Главная
    { source: '/index.html', destination: '/', permanent: true },

    // Услуги
    { source: '/soprovozhdenie-na-marketplece.html',      destination: '/uslugi/soprovozhdenie',    permanent: true },
    { source: '/seo-optimization-of-product-cards.html',  destination: '/uslugi/seo',               permanent: true },
    { source: '/marketing.html',                          destination: '/uslugi/marketing',          permanent: true },
    { source: '/analytics.html',                          destination: '/uslugi/analitika',          permanent: true },
    { source: '/content-creation.html',                   destination: '/uslugi/kontent',            permanent: true },
    { source: '/creat-site.html',                         destination: '/uslugi/sozdanie-sayta',     permanent: true },
    { source: '/community-promotion-in-vk.html',          destination: '/uslugi/prodvizhenie-vk',    permanent: true },
    { source: '/parsing.html',                            destination: '/uslugi/parsing',            permanent: true },
    { source: '/unit-economy.html',                       destination: '/uslugi/unit-ekonomika',     permanent: true },
    { source: '/unit_economics.html',                     destination: '/uslugi/unit-ekonomika',     permanent: true },
    { source: '/autoposting-bot-tg.html',                 destination: '/uslugi/telegram-bot',       permanent: true },

    // Кейсы
    { source: '/keys-company-ads-msk.html',               destination: '/cases',                     permanent: true },
    { source: '/novation_keys.html',                      destination: '/cases/novation',            permanent: true },
    { source: '/photo_keys.html',                         destination: '/cases/fotoepilyatory',      permanent: true },

    // Блог
    { source: '/gidVK.html',                              destination: '/blog/kak-raskrutit-soobshchestvo-vk', permanent: true },

    // Прочие
    { source: '/comands.html',                            destination: '/komanda',                   permanent: true },
    { source: '/Comands.html',                            destination: '/komanda',                   permanent: true },
    { source: '/personal.html',                           destination: '/privacy',                   permanent: true },
    { source: '/sale.html',                               destination: '/',                          permanent: false }, // 302 — акция временна
  ]
},
```

---

## 3. Навигация

### 3.1 Header — главное меню

```
[Логотип AdsMsk]    Услуги ▾    Кейсы    Блог    О нас ▾    Контакты    [+7-915-468-39-25]
```

**Мегаменю «Услуги»** (открывается по hover/click):

```
┌─────────────────────────────────────────────────────────────────┐
│  МАРКЕТПЛЕЙСЫ              РЕКЛАМА & SMM        РАЗРАБОТКА      │
│  ─────────────────         ─────────────────    ─────────────   │
│  Сопровождение             Яндекс.Директ        Создание сайта  │
│  SEO карточек товаров      Продвижение ВКонтакте Telegram-боты  │
│  Аналитика                                                       │
│  Парсинг данных            КОНТЕНТ & СТРАТЕГИЯ                  │
│  Юнит-экономика            Создание контента                    │
│                            Блог →                               │
│  ──────────────────────────────────────────────────────────────  │
│  🏆 Посмотреть все кейсы →                                      │
└─────────────────────────────────────────────────────────────────┘
```

**Подменю «О нас»:**

```
Команда
О компании  (раздел на главной или отдельная страница — v2)
```

**Мобильное меню:** бургер → drawer с аккордеоном для «Услуги».

### 3.2 Footer — навигация

```
┌──────────────────┬──────────────────┬──────────────────┬───────────────────┐
│   AdsMsk         │   Услуги         │   Компания       │   Контакты        │
│   ──────────     │   ──────────     │   ──────────     │   ──────────      │
│   Логотип        │   Сопровождение  │   О команде      │   +7-915-468-3925 │
│   Краткое описание│  SEO карточек   │   Кейсы          │   WhatsApp        │
│   ©2024 AdsMsk  │   Маркетинг      │   Блог           │   Telegram        │
│                  │   Аналитика      │   Контакты       │   Адрес: Москва   │
│                  │   Создание сайта │   Политика конф. │                   │
│                  │   Контент        │                  │                   │
│                  │   Парсинг        │                  │                   │
│                  │   ВКонтакте      │                  │                   │
│                  │   Юнит-экономика │                  │                   │
│                  │   Telegram-бот   │                  │                   │
└──────────────────┴──────────────────┴──────────────────┴───────────────────┘
```

---

## 4. Breadcrumbs

Реализовать через `BreadcrumbList` Schema.org + визуальный компонент.

| Страница | Breadcrumb |
|---|---|
| `/` | — (не показывать) |
| `/uslugi/` | Главная → Услуги |
| `/uslugi/seo` | Главная → Услуги → SEO-оптимизация карточек |
| `/uslugi/soprovozhdenie` | Главная → Услуги → Сопровождение на маркетплейсах |
| `/cases/` | Главная → Кейсы |
| `/cases/novation` | Главная → Кейсы → Novation: выход на Ozon |
| `/blog/` | Главная → Блог |
| `/blog/kak-raskrutit-...` | Главная → Блог → Как раскрутить сообщество ВК |
| `/komanda/` | Главная → О команде |
| `/kontakty/` | Главная → Контакты |
| `/privacy/` | Главная → Политика конфиденциальности |

**Компонент (Next.js App Router):**

```tsx
// components/Breadcrumbs.tsx
import Link from 'next/link'

type Crumb = { label: string; href?: string }

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex gap-2 text-sm text-gray-500" itemScope itemType="https://schema.org/BreadcrumbList">
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <Link href="/" itemProp="item"><span itemProp="name">Главная</span></Link>
          <meta itemProp="position" content="1" />
        </li>
        {crumbs.map((crumb, i) => (
          <li key={i} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span className="mx-1">›</span>
            {crumb.href
              ? <Link href={crumb.href} itemProp="item"><span itemProp="name">{crumb.label}</span></Link>
              : <span itemProp="name">{crumb.name}</span>
            }
            <meta itemProp="position" content={String(i + 2)} />
          </li>
        ))}
      </ol>
    </nav>
  )
}
```

---

## 5. Схема внутренней перелинковки

### 5.1 Принцип — Hub & Spoke

```
                    /  (Главная — главный хаб)
                   /|\
          ┌────────┘ │ └────────┐
       /uslugi    /cases      /blog
       (хаб)      (хаб)       (хаб)
      /  |  \      |  \         |
   seo mktg  ...  nov foto    гид-вк
```

### 5.2 Таблица обязательных ссылок

| Откуда | Куда | Тип | Анкор |
|---|---|---|---|
| `/` | `/uslugi/soprovozhdenie` | CTA-кнопка | «Подробнее о сопровождении» |
| `/` | `/uslugi/seo` | CTA-кнопка | «SEO карточек товаров» |
| `/` | `/cases` | Секция | «Наши кейсы» |
| `/` | `/kontakty` | CTA-кнопка | «Получить консультацию» |
| `/uslugi/` | каждая услуга L2 | Карточки | Название услуги |
| `/uslugi/soprovozhdenie` | `/uslugi/seo` | Текстовая | «SEO-оптимизация карточек» |
| `/uslugi/soprovozhdenie` | `/uslugi/analitika` | Текстовая | «аналитика маркетплейса» |
| `/uslugi/soprovozhdenie` | `/uslugi/kontent` | Текстовая | «создание контента» |
| `/uslugi/seo` | `/uslugi/kontent` | Текстовая | «качественный контент» |
| `/uslugi/seo` | `/uslugi/parsing` | Текстовая | «парсинг конкурентов» |
| `/uslugi/marketing` | `/uslugi/analitika` | Текстовая | «аналитика продаж» |
| `/uslugi/marketing` | `/uslugi/unit-ekonomika` | Текстовая | «юнит-экономика» |
| `/uslugi/analitika` | `/uslugi/parsing` | Текстовая | «сбор данных» |
| `/uslugi/sozdanie-sayta` | `/uslugi/seo` | Текстовая | «SEO с первого дня» |
| `/uslugi/prodvizhenie-vk` | `/uslugi/kontent` | Текстовая | «контент для VK» |
| каждая услуга L2 | `/cases` | Блок «Кейсы» | «Смотреть результаты» |
| каждая услуга L2 | `/kontakty` | CTA | «Заказать услугу» |
| `/cases/novation` | `/uslugi/soprovozhdenie` | Текстовая | «сопровождение на Ozon» |
| `/cases/fotoepilyatory` | `/uslugi/kontent` | Текстовая | «создание контента» |
| `/cases/fotoepilyatory` | `/uslugi/seo` | Текстовая | «SEO карточек» |
| `/blog/kak-raskrutit-vk` | `/uslugi/prodvizhenie-vk` | CTA | «Заказать продвижение ВКонтакте» |

### 5.3 Ссылки которые нужно УДАЛИТЬ (битые в текущем сайте)

- `/analitics.html` — встречается в `soprovozhdenie` и `community-promotion-in-vk` → заменить на `/uslugi/analitika`
- `/unit_economics.html` — дубль → заменить на `/uslugi/unit-ekonomika`
- `comands.html` (из многих страниц) → `/komanda`
- `personal.html` (из многих страниц) → `/privacy`

---

## 6. Приоритеты для Next.js `generateStaticParams` и ISR

### 6.1 Стратегия рендеринга

| Страница | Стратегия | Revalidate | Причина |
|---|---|---|---|
| `/` | SSG (static) | — | Максимальная скорость, меняется редко |
| `/uslugi/` | SSG | — | Хаб, статичен |
| `/uslugi/soprovozhdenie` | SSG | — | Ключевая SEO страница |
| `/uslugi/seo` | SSG | — | Ключевая SEO страница |
| `/uslugi/marketing` | SSG | — | Ключевая SEO страница |
| `/uslugi/analitika` | SSG | — | Ключевая SEO страница |
| `/uslugi/kontent` | SSG | — | |
| `/uslugi/sozdanie-sayta` | SSG | — | |
| `/uslugi/prodvizhenie-vk` | SSG | — | |
| `/uslugi/parsing` | SSG | — | |
| `/uslugi/unit-ekonomika` | SSG | — | |
| `/uslugi/telegram-bot` | SSG | — | |
| `/cases/` | SSG | 86400 | Кейсы могут добавляться |
| `/cases/[slug]` | ISR | 86400 | |
| `/blog/` | SSG | 3600 | Блог обновляется чаще |
| `/blog/[slug]` | ISR | 3600 | |
| `/komanda/` | SSG | — | |
| `/kontakty/` | SSG | — | |
| `/privacy/` | SSG | — | |

### 6.2 `generateStaticParams` для динамических маршрутов

```ts
// app/cases/[slug]/page.tsx
export async function generateStaticParams() {
  return [
    { slug: 'novation' },
    { slug: 'fotoepilyatory' },
  ]
}

// app/blog/[slug]/page.tsx
export async function generateStaticParams() {
  return [
    { slug: 'kak-raskrutit-soobshchestvo-vk' },
  ]
}
```

### 6.3 SEO-приоритет страниц для `sitemap.xml`

```ts
// Конфиг для next-sitemap / app/sitemap.ts
const priorities: Record<string, number> = {
  '/':                              1.0,
  '/uslugi/soprovozhdenie':        0.9,
  '/uslugi/seo':                   0.9,
  '/uslugi/marketing':             0.9,
  '/uslugi/analitika':             0.9,
  '/uslugi/':                      0.8,
  '/uslugi/kontent':               0.8,
  '/uslugi/sozdanie-sayta':        0.8,
  '/uslugi/prodvizhenie-vk':       0.8,
  '/uslugi/parsing':               0.7,
  '/uslugi/unit-ekonomika':        0.7,
  '/uslugi/telegram-bot':          0.6,
  '/cases/':                       0.8,
  '/cases/novation':               0.7,
  '/cases/fotoepilyatory':         0.7,
  '/blog/':                        0.6,
  '/kontakty/':                    0.7,
  '/komanda/':                     0.5,
  '/privacy/':                     0.3,
}
```

---

## 7. App Router файловая структура

```
app/
├── layout.tsx                    # Root layout: шрифты, счётчики, header, footer
├── page.tsx                      # /
│
├── uslugi/
│   ├── layout.tsx                # Общий layout для услуг (breadcrumb + sidebar CTA)
│   ├── page.tsx                  # /uslugi/ — каталог
│   ├── soprovozhdenie/
│   │   └── page.tsx              # /uslugi/soprovozhdenie
│   ├── seo/
│   │   └── page.tsx
│   ├── marketing/
│   │   └── page.tsx
│   ├── analitika/
│   │   └── page.tsx
│   ├── kontent/
│   │   └── page.tsx
│   ├── sozdanie-sayta/
│   │   └── page.tsx
│   ├── prodvizhenie-vk/
│   │   └── page.tsx
│   ├── parsing/
│   │   └── page.tsx
│   ├── unit-ekonomika/
│   │   └── page.tsx
│   └── telegram-bot/
│       └── page.tsx
│
├── cases/
│   ├── layout.tsx
│   ├── page.tsx                  # /cases/
│   └── [slug]/
│       └── page.tsx              # /cases/novation, /cases/fotoepilyatory
│
├── blog/
│   ├── layout.tsx
│   ├── page.tsx                  # /blog/
│   └── [slug]/
│       └── page.tsx
│
├── komanda/
│   └── page.tsx
│
├── kontakty/
│   └── page.tsx
│
├── privacy/
│   └── page.tsx
│
├── sitemap.ts                    # Динамический sitemap
├── robots.ts                     # robots.txt
└── not-found.tsx                 # 404 с ссылками на ключевые разделы
```

---

## 8. Metadata-шаблоны (Next.js)

```ts
// app/layout.tsx — базовые значения (переопределяются на каждой странице)
export const metadata: Metadata = {
  metadataBase: new URL('https://ads.msk.ru'),
  title: {
    template: '%s | AdsMsk — Цифровой маркетинг для маркетплейсов',
    default: 'AdsMsk — Продвижение на маркетплейсах в Москве',
  },
  description: 'Агентство цифрового маркетинга AdsMsk: сопровождение на Wildberries и Ozon, SEO карточек, аналитика, контент. Телефон: +7-915-468-39-25',
  openGraph: {
    siteName: 'AdsMsk',
    locale: 'ru_RU',
    type: 'website',
  },
}

// Пример страницы услуги:
// app/uslugi/soprovozhdenie/page.tsx
export const metadata: Metadata = {
  title: 'Сопровождение на маркетплейсах — Wildberries, Ozon',
  description: 'Полное сопровождение продавцов на Wildberries и Ozon: регистрация, SEO, аналитика, продвижение. Работаем с Гжелью и Москвой. Звоните: +7-915-468-39-25',
  alternates: { canonical: '/uslugi/soprovozhdenie' },
}
```

---

## 9. Контактная страница `/kontakty` (новая)

Страницы `/kontakty` нет в текущем сайте — это критический пробел. Конверсия на CTA в меню идёт в никуда.

**Обязательные элементы:**
- Форма: имя, телефон, комментарий → отправка в Telegram-бот (`@bot_pumpdump_bot`)
- WhatsApp-кнопка: `https://wa.me/+79154683925`
- Telegram: `https://t.me/UR16_bot?start`
- Телефон: +7-915-468-39-25
- Адрес: Москва (+ район Гжель/Раменское если есть гео-страницы)
- Рабочие часы
- Schema.org `LocalBusiness` с `ContactPoint`

---

*IA v1.0 — основана на аудите 21 файла. Следующий шаг: [MIGRATION.md] — план поэтапной разработки Next.js проекта.*
