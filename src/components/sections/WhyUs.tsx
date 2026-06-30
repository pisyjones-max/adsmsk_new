import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import { Heading, IconWrap } from '@/components/ui/index'

const reasons: [string, string, string][] = [
  ['🧭', 'Экспертиза в маркетплейсах', 'Знаем все тонкости работы на Wildberries, Ozon, AliExpress и других площадках — помогли множеству клиентов вывести товары на рынок.'],
  ['🔍', 'SEO-оптимизация карточек', 'Продвижение требует специальных навыков в SEO — оптимизируем карточки товара, чтобы они занимали высокие позиции в поисковой выдаче.'],
  ['✅', 'Качество и надёжность', 'Гарантируем высокие стандарты оказания услуг и стараемся превысить ожидания клиентов на каждом этапе.'],
  ['💰', 'Конкурентные цены', 'Предлагаем конкурентоспособные тарифы, что делает сотрудничество с AdsMsk выгодным для бизнеса любого масштаба.'],
]

const usefulLinks: { title: string; href: string }[] = [
  { title: 'SEO-оптимизация карточек товара для маркетплейсов', href: '/services/seo' },
  { title: 'Парсинг данных с веб-сайтов и маркетплейсов', href: '/services/parsing' },
  { title: 'Юнит-экономика для маркетплейсов', href: '/services/analytics' },
  { title: 'Аналитика данных маркетплейсов', href: '/services/analytics' },
]

export default function WhyUs() {
  return (
    <Section background="default" divider>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="section-label mb-4">Почему мы</div>
            <Heading level={2} className="mb-6">
              Почему стоит доверить сопровождение профессионалам?
            </Heading>
            <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
              Не упустите возможность увеличить продажи и расширить бизнес. Мы
              предоставляем полный спектр услуг по сопровождению на маркетплейсах —
              вы сосредотачиваетесь на главном, развитии бизнеса.
            </p>

            <ul className="flex flex-col gap-5">
              {reasons.map(([icon, title, desc]) => (
                <li key={title} className="flex gap-4">
                  <IconWrap size="md" variant="brand" className="shrink-0 mt-0.5">
                    <span className="text-lg" aria-hidden="true">{icon}</span>
                  </IconWrap>
                  <div>
                    <p className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                      {title}
                    </p>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="section-label mb-4">Важная информация</div>
            <Heading level={3} className="mb-6">
              Полезные материалы для предпринимателей
            </Heading>
            <ul className="flex flex-col gap-3">
              {usefulLinks.map((l) => (
                <li key={l.title}>
                  <a
                    href={l.href}
                    className="card-base block px-5 py-4 text-sm font-medium hover:text-brand-400 transition-colors"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {l.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  )
}
