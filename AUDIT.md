# Аудит сайта ads.msk.ru перед миграцией на Next.js 14

> **Дата аудита:** 2026-06-27  
> **Аудитор:** Senior Web Architect  
> **Репо:** https://github.com/pisyjones-max/adsmsk_new  
> **Текущий стек:** HTML + Bootstrap 3 + jQuery 2.2.4 + bestbook-template  
> **Целевой стек:** Next.js 14 App Router + Tailwind CSS + Vercel

---

## 1. Таблица страниц

| URL (текущий) | Title | H1 | Слов | Ценность | Действие |
|---|---|---|---|---|---|
| `/index.html` | Профессиональная веб-разработка и SEO Москва | Поддержка предпринимателей на маркетплейсах | 2202 | ★★★ Ключевая | **Мигрировать** → `/` |
| `/analytics.html` | (дублирован глобальный title) | Анализ данных и улучшение продаж | 2594 | ★★★ Услуга | **Мигрировать** → `/uslugi/analitika` |
| `/parsing.html` | (дублирован глобальный title) | Парсинг данных для интернет-магазинов | 2397 | ★★★ Услуга | **Мигрировать** → `/uslugi/parsing` |
| `/seo-optimization-of-product-cards.html` | (дублирован глобальный title) | Оптимизация для поисковых систем | 2369 | ★★★ Услуга | **Мигрировать** → `/uslugi/seo` |
| `/marketing.html` | (дублирован глобальный title) | Маркетинг на Ozon | 2423 | ★★★ Услуга | **Мигрировать** → `/uslugi/marketing` |
| `/content-creation.html` | (дублирован глобальный title) | Выделите ваш товар на маркетплейсе | 2393 | ★★★ Услуга | **Мигрировать** → `/uslugi/kontnet` |
| `/unit-economy.html` | (дублирован глобальный title) | Что такое юнит-экономика? | 2289 | ★★ Дубль | **Объединить** с `unit_economics.html` → `/uslugi/unit-ekonomika` |
| `/unit_economics.html` | (дублирован глобальный title) | Юнит-экономика: что это, зачем она нужна | 1424 | ★ Дубль | **Удалить**, контент перенести в `/uslugi/unit-ekonomika` |
| `/autoposting-bot-tg.html` | (дублирован глобальный title) | Ведение канала в Telegram | 2839 | ★★ Услуга | **Мигрировать** → `/uslugi/telegram-bot` |
| `/creat-site.html` | (дублирован глобальный title) | Создание сайта — ключ к успеху | 2373 | ★★★ Услуга | **Мигрировать** → `/uslugi/sozdanie-sayta` |
| `/comands.html` | (дублирован глобальный title) | Добро пожаловать в нашу команду | 1553 | ★★ Вспомогательная | **Мигрировать** → `/komanda` |
| `/soprovozhdenie-na-marketplece.html` | (дублирован глобальный title) | Сопровождение предпринимателей | 1168 | ★★★ Гео-услуга | **Мигрировать** → `/uslugi/soprovozhdenie` |
| `/community-promotion-in-vk.html` | (дублирован глобальный title) | Раскрутка сообщества в ВКонтакте | 1122 | ★★ Услуга | **Мигрировать** → `/uslugi/prodvizhenie-vk` |
| `/personal.html` | (дублирован глобальный title) | Согласие на обработку персональных данных | 2278 | ★ Юридическая | **Мигрировать** → `/privacy` |
| `/keys-company-ads-msk.html` | (дублирован глобальный title) | Некоторые кейсы компании | 1582 | ★★★ Социальное доказательство | **Мигрировать** → `/keys` |
| `/novation_keys.html` | Blog | Кейс компании Novation: Успешный выход на Ozon | 529 | ★★ Кейс | **Мигрировать** → `/keys/novation` |
| `/photo_keys.html` | Blog | Кейс: Дистрибьютор фотоэпиляторов | 374 | ★★ Кейс | **Мигрировать** → `/keys/fotoepilyatory` |
| `/gidVK.html` | Гид по раскрутке сообщества в ВКонтакте | Пошаговый гид | 441 | ★ Вспомогательная | **Объединить** с `/uslugi/prodvizhenie-vk` или `/blog` |
| `/sale.html` | Black Friday Sale | НОВОГОДНИЙ SALE | 949 | ★ Временная | **Удалить** (акция устарела) |
| `/googlef2b2fe0e63aea3fd.html` | — | — | — | ★ Техническая | **Перенести** верификацию в `next.config.js` |
| `/yandex_37cfb34789ce0a90.html` | — | — | — | ★ Техническая | **Перенести** верификацию в `next.config.js` |

---

## 2. Технический долг

### P0 — Критично (блокирует производительность и безопасность)

- **[PERF] Изображения без оптимизации:** 64 файла в `/img/`, суммарно **44 МБ**.  
  Примеры: `2.png` — 2.6 MB, `img.png` — 2.5 MB, `fotoepilyator*.png` — 2.3 MB каждый.  
  → Решение: конвертировать в WebP/AVIF, использовать `next/image` с автоматической оптимизацией.

- **[DEPS] jQuery 2.2.4** — EOL с 2016 года, известные XSS-уязвимости.  
  → Удалить полностью, заменить нативным JS / React.

- **[DEPS] Bootstrap 3** — EOL с 2019 года.  
  → Заменить на Tailwind CSS.

- **[DEPS] Popper.js 1.11.0** (CDN путь `../../cdnjs.cloudflare.com/...`) — сломанный относительный путь!  
  → Сейчас это уязвимость: в prod может загружаться с локального пути. Удалить.

- **[DUPE] unit-economy.html vs unit_economics.html** — два файла с разным контентом на одну тему.  
  → Взять лучший контент из `unit-economy.html` (2289 слов > 1424), удалить `unit_economics.html`.  
  Однако в `index.html` ссылки ведут на **оба** варианта одновременно — прямой дубль в навигации.

### P1 — Важно (SEO и UX деградация)

- **[SEO] Одинаковый `<title>` и `<meta description>` на всех страницах** — "Профессиональная веб-разработка и SEO Москва | Цифровой Маркетинг" используется буквально на каждой из 19 страниц.  
  → Критическая SEO-проблема: Google деиндексирует дублирующийся контент.

- **[SEO] Нет `<link rel="canonical">`** ни на одной странице.

- **[SEO] URL с расширением `.html`** — устаревший паттерн, хуже ранжируется.  
  → Next.js App Router даёт чистые URL из коробки.

- **[SEO] `sitemap.xml` не охватывает все страницы** — из 19 контентных страниц в sitemap только 11. Отсутствуют: `community-promotion-in-vk.html`, `soprovozhdenie-na-marketplece.html`, `comands.html`, `personal.html`, `sale.html`, `gidVK.html`, кейсы.  
  → Также в sitemap указан `Comands.html` (с заглавной C) — несоответствие регистра.

- **[SEO] `robots.txt` блокирует `/analitics.html`** — файл с опечаткой (должно быть `analytics.html`), реального файла нет.

- **[SEO] Нет OG-тегов** на вспомогательных страницах: `gidVK.html`, `novation_keys.html`, `photo_keys.html`, `sale.html`.

### P2 — Желательно

- **[TECH] 11 скриптов на странице** загружаются синхронно в `<body>`, блокируя рендеринг:  
  `jquery-2.2.4.min.js`, `tether.min.js`, `popper.min.js`, `bootstrap.min.js`, `jquery.sticky.js`, `jquery.nice-select.js`, `owl.carousel.min.js`, `jquery.magnific-popup.min.js`, `jquery.ajaxchimp.min.js`, `main.js`, `dyn-goal-config.js`.

- **[TECH] `service-worker.js`** присутствует в репо — необходимо проверить совместимость с Next.js (возможен конфликт с SW Next.js).

- **[TECH] Два счётчика Яндекс.Метрики** — `98780513` и `103922217`. Уточнить, какой актуальный.

- **[TECH] VK/MyTarget пиксель** (`_tmr.push`) — перенести в `next/script` со стратегией `afterInteractive`.

- **[TECH] Mail.ru Top пиксель** (`top-fwz1.mail.ru/js/dyn-goal-config.js`) — перенести в `next/script`.

- **[TECH] Google Fonts** через HTTP-запрос (`fonts.googleapis.com`) — добавляет ~200ms latency.  
  → Использовать `next/font/google` (self-hosted).

- **[TECH] Font Awesome** подключается дважды — версии 4.7.0 и 5.15.4 одновременно.

- **[CONTENT] Опечатки в именах файлов:** `creat-site.html` (вместо `create`), `comands.html` (вместо `commands`).

---

## 3. SEO-проблемы

| # | Проблема | Приоритет | Решение |
|---|---|---|---|
| 1 | Одинаковый `<title>` на 19/19 страницах | P0 | Уникальные title для каждой страницы |
| 2 | Одинаковый `<meta description>` на 19/19 страницах | P0 | Уникальные descriptions |
| 3 | Нет `<link rel="canonical">` | P0 | Next.js: `export const metadata = { alternates: { canonical: '...' } }` |
| 4 | URL с `.html` расширением | P1 | Next.js App Router → чистые URL |
| 5 | Дубль юнит-экономики (2 страницы) | P1 | Объединить + редирект |
| 6 | Неполный `sitemap.xml` (11 из 19 страниц) | P1 | `next-sitemap` пакет |
| 7 | `robots.txt` блокирует несуществующий файл | P2 | Обновить robots.txt |
| 8 | Нет OG-тегов на 4 страницах | P2 | Добавить в `layout.tsx` |
| 9 | Schema.org только `Organization` — нет `Service`, `BreadcrumbList`, `FAQPage` | P2 | Добавить per-page schemas |
| 10 | H1 не содержит ключевые слова на ряде страниц | P2 | Пересмотреть при миграции |

---

## 4. Redirect-правила (старый URL → новый URL)

Для `next.config.js` (блок `redirects`):

```js
// next.config.js
module.exports = {
  async redirects() {
    return [
      // Главная
      { source: '/index.html',                              destination: '/',                          permanent: true },

      // Услуги
      { source: '/analytics.html',                          destination: '/uslugi/analitika',          permanent: true },
      { source: '/parsing.html',                            destination: '/uslugi/parsing',            permanent: true },
      { source: '/seo-optimization-of-product-cards.html', destination: '/uslugi/seo',                permanent: true },
      { source: '/marketing.html',                          destination: '/uslugi/marketing',          permanent: true },
      { source: '/content-creation.html',                   destination: '/uslugi/kontent',            permanent: true },
      { source: '/unit-economy.html',                       destination: '/uslugi/unit-ekonomika',     permanent: true },
      { source: '/unit_economics.html',                     destination: '/uslugi/unit-ekonomika',     permanent: true },
      { source: '/autoposting-bot-tg.html',                 destination: '/uslugi/telegram-bot',       permanent: true },
      { source: '/creat-site.html',                         destination: '/uslugi/sozdanie-sayta',     permanent: true },
      { source: '/soprovozhdenie-na-marketplece.html',      destination: '/uslugi/soprovozhdenie',     permanent: true },
      { source: '/community-promotion-in-vk.html',          destination: '/uslugi/prodvizhenie-vk',    permanent: true },

      // Вспомогательные
      { source: '/comands.html',                            destination: '/komanda',                   permanent: true },
      { source: '/Comands.html',                            destination: '/komanda',                   permanent: true }, // sitemap case mismatch
      { source: '/personal.html',                           destination: '/privacy',                   permanent: true },
      { source: '/gidVK.html',                              destination: '/uslugi/prodvizhenie-vk',    permanent: true },

      // Кейсы
      { source: '/keys-company-ads-msk.html',               destination: '/keys',                      permanent: true },
      { source: '/novation_keys.html',                      destination: '/keys/novation',             permanent: true },
      { source: '/photo_keys.html',                         destination: '/keys/fotoepilyatory',       permanent: true },

      // Акция (устарела — редирект на главную)
      { source: '/sale.html',                               destination: '/',                          permanent: false },
    ]
  }
}
```

---

## 5. Структура нового сайта (Next.js App Router)

```
app/
├── layout.tsx               # глобальный layout, шрифты, счётчики
├── page.tsx                 # /  (index)
├── komanda/
│   └── page.tsx             # /komanda
├── keys/
│   ├── page.tsx             # /keys
│   ├── novation/
│   │   └── page.tsx         # /keys/novation
│   └── fotoepilyatory/
│       └── page.tsx         # /keys/fotoepilyatory
├── uslugi/
│   ├── analitika/page.tsx
│   ├── parsing/page.tsx
│   ├── seo/page.tsx
│   ├── marketing/page.tsx
│   ├── kontent/page.tsx
│   ├── unit-ekonomika/page.tsx
│   ├── telegram-bot/page.tsx
│   ├── sozdanie-sayta/page.tsx
│   ├── soprovozhdenie/page.tsx
│   └── prodvizhenie-vk/page.tsx
└── privacy/
    └── page.tsx
```

---

## 6. Приоритизированный список задач

### P0 — Сделать до старта миграции

1. Объединить `unit-economy.html` + `unit_economics.html` → единый источник контента
2. Написать уникальные `<title>` и `<meta description>` для каждой из 19 страниц
3. Добавить `redirects()` в `next.config.js`
4. Оптимизировать все изображения: конвертировать PNG → WebP, сжать через squoosh/sharp
5. Настроить `next/image` с `sizes` и `priority` для LCP-изображений

### P1 — В ходе миграции

6. Перенести счётчики (Яндекс.Метрика, VK, Mail.ru Top) в `next/script` с `strategy="afterInteractive"`
7. Заменить Google Fonts CDN на `next/font/google` (self-hosted)
8. Убрать дублированное подключение Font Awesome, оставить только версию 5
9. Добавить `<link rel="canonical">` через `metadata.alternates.canonical` в каждый `page.tsx`
10. Перенести верификационные файлы Google/Yandex в `app/` или `next.config.js`
11. Собрать полный `sitemap.xml` через `next-sitemap`
12. Обновить `robots.txt` (убрать несуществующий `/analitics.html`)

### P2 — После запуска

13. Добавить Schema.org типы: `Service` для каждой услуги, `BreadcrumbList`, `FAQPage`
14. Добавить недостающие OG-теги на страницы кейсов
15. Убрать `service-worker.js` или адаптировать под Next.js PWA-паттерн
16. Определить актуальный счётчик Яндекс.Метрики (98780513 или 103922217) — второй удалить
17. Добавить конверсионные элементы: форма обратной связи с валидацией, онлайн-чат, sticky CTA
18. Создать страницу `/blog` для миграции `gidVK.html` и будущих статей

---

## 7. Внешние зависимости к замене

| Текущая зависимость | Версия | Замена в Next.js |
|---|---|---|
| jQuery | 2.2.4 | Нативный JS / React hooks |
| Bootstrap CSS | 3.x | Tailwind CSS |
| Bootstrap JS | 3.x | Headless UI / Radix UI |
| Popper.js | 1.11.0 | Удалить (входит в Bootstrap 5 если нужен) |
| owl.carousel | — | Embla Carousel / Swiper |
| magnific-popup | — | Нативный `<dialog>` / Radix Dialog |
| jquery.sticky | — | CSS `position: sticky` |
| jquery.nice-select | — | Нативный `<select>` + Tailwind |
| jquery.ajaxchimp | — | React форма + server action |
| Font Awesome 4.7 + 5.15 | — | Lucide React / один набор иконок |
| Google Fonts CDN | — | `next/font/google` |
| Yandex.Metrica | — | `next/script` afterInteractive |
| VK/MyTarget пиксель | — | `next/script` afterInteractive |
| Mail.ru Top | — | `next/script` afterInteractive |

---

*Аудит проведён на основе анализа 21 HTML-файла, 64 изображений (44 MB), robots.txt, sitemap.xml, styles.css и bestbook-template.*
