// ─── Services data for the homepage ────────────────────────────────────────
// Позиционирование: сайты и интернет-магазины — основное направление;
// SEO, реклама, боты, автоматизация и маркетплейсы — усиливающие.
// Названия услуг синхронизированы с docs/YANDEX-BUSINESS.md.

export interface ServiceItem {
  icon: string
  title: string
  description: string
  href: string
}

/** Основное направление: сайты и интернет-магазины */
export const webServices: ServiceItem[] = [
  {
    icon: '🌐',
    title: 'Создание сайтов для бизнеса',
    description:
      'Сайты под ключ: от структуры и дизайна до запуска. Быстрая загрузка, адаптивная вёрстка, SEO-подготовка.',
    href: '/uslugi/sozdanie-sajtov',
  },
  {
    icon: '🛒',
    title: 'Создание интернет-магазинов',
    description:
      'Каталог, корзина, онлайн-оплата, доставка и интеграция с учётной системой и CRM.',
    href: '/uslugi/sozdanie-internet-magazinov',
  },
  {
    icon: '🏢',
    title: 'Разработка корпоративных сайтов',
    description:
      'Сайты компаний и сайты-визитки: услуги, кейсы, отзывы, формы заявок и аналитика.',
    href: '/uslugi/razrabotka-korporativnyh-sajtov',
  },
  {
    icon: '🎯',
    title: 'Создание лендингов',
    description:
      'Одностраничные сайты под рекламу и запуск продукта. Срок — от 5 рабочих дней.',
    href: '/uslugi/sozdanie-lendingov',
  },
  {
    icon: '🔧',
    title: 'Редизайн и доработка сайтов',
    description:
      'Обновим дизайн, ускорим загрузку, добавим функции — без потери позиций в поиске.',
    href: '/uslugi/redizajn-i-dorabotka-sajtov',
  },
  {
    icon: '🛡️',
    title: 'Поддержка и сопровождение сайтов',
    description:
      'Обновления, резервные копии, мониторинг и доработки по абонементу.',
    href: '/uslugi/podderzhka-sajtov',
  },
]

/** Дополнительные направления, которые усиливают сайт */
export const growthServices: ServiceItem[] = [
  {
    icon: '📈',
    title: 'SEO-продвижение сайтов',
    description: 'Аудит, семантика и оптимизация — чтобы клиенты находили вас в Яндексе и Google.',
    href: '/uslugi/seo-prodvizhenie-sajtov',
  },
  {
    icon: '🎯',
    title: 'Настройка Яндекс Директа',
    description: 'Контекстная реклама с контролем стоимости заявки и сквозной аналитикой.',
    href: '/uslugi/nastrojka-yandeks-direkta',
  },
  {
    icon: '🤖',
    title: 'Разработка Telegram-ботов и чат-ботов',
    description: 'Приём заявок, каталог, оплата, уведомления и ИИ-ассистент для клиентов.',
    href: '/uslugi/razrabotka-telegram-botov',
  },
  {
    icon: '⚙️',
    title: 'Автоматизация бизнеса и интеграция CRM',
    description: 'Соединяем сайт, CRM и мессенджеры, чтобы заявки не терялись.',
    href: '/uslugi/avtomatizaciya-biznesa-i-crm',
  },
  {
    icon: '📦',
    title: 'Парсинг и обработка данных',
    description: 'Автоматический сбор цен, остатков и ассортимента с сайтов и маркетплейсов.',
    href: '/uslugi/parsing-dannyh',
  },
  {
    icon: '🛍️',
    title: 'Сопровождение на маркетплейсах',
    description: 'Ozon, Wildberries, Яндекс Маркет: карточки, реклама, аналитика.',
    href: '/uslugi/soprovozhdenie-na-marketplecah',
  },
]

// ─── Trust stats ────────────────────────────────────────────────────────────

export interface StatItem {
  value: number
  suffix: string
  label: string
}

export const stats: StatItem[] = [
  { value: 120, suffix: '+', label: 'клиентов' },
  { value: 200, suffix: '+', label: 'проектов' },
  { value: 8,   suffix: '',  label: 'лет опыта' },
]

// ─── Cases ───────────────────────────────────────────────────────────────────

export interface CaseItem {
  kind: 'site' | 'marketplace'
  image: string
  title: string
  description: string
  result: string
  href: string
}

export const cases: CaseItem[] = [
  {
    kind: 'site',
    image: '/img/case-studio-dvoretckaya.webp',
    title: 'Сайт студии творчества в Раменском',
    description: 'Направления с ценами, галерея, отзывы и запись онлайн.',
    result: 'Сайт с записью онлайн и SEO-основой под Раменское',
    href: '/keys/studio-dvoretckaya',
  },
  {
    kind: 'site',
    image: '/img/case-platforma.webp',
    title: 'ПЛАТФОРМА: интернет-магазин кровельных материалов',
    description: 'Каталог, калькулятор материалов, доставка и SEO-блог.',
    result: 'Магазин с калькулятором, заявки в Telegram',
    href: '/keys/platforma',
  },
  {
    kind: 'site',
    image: '/img/case-sk-craft.webp',
    title: 'Сталь Крафт: сайт навесов, гаражей и ворот',
    description: 'Страницы по услугам и городам, заявки и аналитика.',
    result: 'SEO-структура под услуги и города, сквозная аналитика',
    href: '/keys/sk-craft',
  },
  {
    kind: 'marketplace',
    image: '/img/Novation_title.webp',
    title: 'Novation: выход на маркетплейс Озон',
    description:
      'Производитель мебели и товаров для дома из фанеры вышел на Ozon с нуля — от концепции до запуска продаж.',
    result: 'Полный запуск продаж на Ozon с нуля',
    href: '/keys/novation',
  },
  {
    kind: 'marketplace',
    image: '/img/fotoepilyator1.webp',
    title: 'Дистрибьютор фотоэпиляторов',
    description:
      'Дистрибьютор товаров для красоты вышел на Ozon, чтобы увеличить продажи и повысить узнаваемость бренда.',
    result: 'Рост узнаваемости бренда и продаж на Ozon',
    href: '/keys/fotoepilyator',
  },
  {
    kind: 'marketplace',
    image: '/img/Ceramagzhel.webp',
    title: 'CeramaGzhel: керамика на маркетплейсах',
    description:
      'Бренд гжельской керамики получил карточки товаров с SEO-оптимизацией и стратегию присутствия на маркетплейсах.',
    result: 'Оптимизированные карточки и рост видимости в поиске',
    href: '/uslugi/soprovozhdenie-na-marketplecah',
  },
]
