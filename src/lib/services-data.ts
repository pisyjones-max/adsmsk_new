// ─── Services data for the homepage ────────────────────────────────────────
// Источник контента: static/index.html (секции #service, #cases),
// адаптировано под маркетплейс-позиционирование AdsMsk.

export interface ServiceItem {
  icon: string
  title: string
  description: string
  href: string
}

export const services: ServiceItem[] = [
  {
    icon: '🛒',
    title: 'Сопровождение на маркетплейсах',
    description:
      'Полное сопровождение и управление аккаунтами на Wildberries, Ozon и Яндекс Маркет — от вывода товаров до ежедневного контроля показателей.',
    href: '/services/marketplace',
  },
  {
    icon: '🔍',
    title: 'SEO-оптимизация карточек',
    description:
      'Создаём качественный контент — тексты, фото, видео и 3D-модели — и продвигаем карточки товаров на верхние позиции поисковой выдачи маркетплейса.',
    href: '/services/seo',
  },
  {
    icon: '🌐',
    title: 'Создание сайтов',
    description:
      'Лендинги, интернет-магазины и витрины на Next.js — быстрая загрузка, адаптивная вёрстка и SEO-разметка прямо из коробки.',
    href: '/services/web',
  },
  {
    icon: '🎯',
    title: 'Контекстная реклама',
    description:
      'Запускаем и ведём рекламные кампании внутри площадок и за их пределами — контроль расходов и рост дохода под контролем.',
    href: '/services/marketing',
  },
  {
    icon: '📊',
    title: 'Аналитика',
    description:
      'Выявляем тренды, изучаем поведение покупателей и оптимизируем стратегии на основе регулярного мониторинга данных.',
    href: '/services/analytics',
  },
  {
    icon: '📦',
    title: 'Парсинг данных',
    description:
      'Извлекаем данные с веб-сайтов и маркетплейсов для мониторинга цен, анализа конкурентов и автоматизации бизнес-процессов.',
    href: '/services/parsing',
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
  image: string
  title: string
  description: string
  result: string
  href: string
}

export const cases: CaseItem[] = [
  {
    image: '/img/Novation_title.png',
    title: 'Novation: выход на маркетплейс Озон',
    description:
      'Производитель мебели и товаров для дома из фанеры вышел на Ozon с нуля — от концепции до запуска продаж.',
    result: 'Полный запуск продаж на Ozon с нуля',
    href: '/novation_keys.html',
  },
  {
    image: '/img/fotoepilyator1.png',
    title: 'Дистрибьютор фотоэпиляторов',
    description:
      'Дистрибьютор товаров для красоты вышел на Ozon, чтобы увеличить продажи и повысить узнаваемость бренда.',
    result: 'Рост узнаваемости бренда и продаж на Ozon',
    href: '/photo_keys.html',
  },
  {
    image: '/img/Ceramagzhel.png',
    title: 'CeramaGzhel: керамика на маркетплейсах',
    description:
      'Бренд гжельской керамики получил карточки товаров с SEO-оптимизацией и стратегию присутствия на маркетплейсах.',
    result: 'Оптимизированные карточки и рост видимости в поиске',
    href: '/services/marketplace',
  },
]
