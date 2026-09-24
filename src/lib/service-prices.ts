// ─── Цены «от» — единое место правки ────────────────────────────────────────
// Ставим ниже рыночных (см. docs/YANDEX-BUSINESS.md, раздел «Цены»).
// Меняешь здесь — обновляются карточки, страницы услуг, FAQ, JSON-LD.
// Те же цифры указывать в профиле Яндекс Бизнеса.

export interface ServicePrice {
  /** Число для разметки schema.org */
  from: number
  /** Единица: пусто — за проект */
  per?: 'мес'
  /** Пояснение к цене (необязательно) */
  note?: string
}

export const SERVICE_PRICES: Record<string, ServicePrice> = {
  'sozdanie-sajtov':                 { from: 40000 },
  'sozdanie-internet-magazinov':     { from: 120000 },
  'razrabotka-korporativnyh-sajtov': { from: 70000 },
  'sozdanie-lendingov':              { from: 35000 },
  'redizajn-i-dorabotka-sajtov':     { from: 25000 },
  'podderzhka-sajtov':               { from: 5000,  per: 'мес' },
  'seo-prodvizhenie-sajtov':         { from: 25000, per: 'мес', note: 'аудит сайта — от 10 000 ₽' },
  'nastrojka-yandeks-direkta':       { from: 10000, note: 'ведение кампаний — от 15 000 ₽ в месяц; рекламный бюджет оплачивается отдельно' },
  'razrabotka-telegram-botov':       { from: 25000 },
  'avtomatizaciya-biznesa-i-crm':    { from: 25000 },
  'parsing-dannyh':                  { from: 15000 },
  'soprovozhdenie-na-marketplecah':  { from: 20000, per: 'мес' },
  'sozdanie-kontenta':               { from: 5000,  note: 'за 3D-модель или комплект карточки' },
}

const nf = new Intl.NumberFormat('ru-RU')

/** «от 35 000 ₽» или «от 5 000 ₽/мес» */
export function formatPrice(slug: string): string | null {
  const p = SERVICE_PRICES[slug]
  if (!p) return null
  return `от ${nf.format(p.from).replace(/\u00a0/g, ' ')} ₽${p.per ? `/${p.per}` : ''}`
}

export function getPrice(slug: string): ServicePrice | undefined {
  return SERVICE_PRICES[slug]
}
