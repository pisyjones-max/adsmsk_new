import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import { Heading } from '@/components/ui/index'

const reasons: [string, string, string][] = [
  ['🧱', 'Разработка и продвижение в одной команде', 'Разработчики, дизайнер и специалисты по рекламе работают вместе — сайт сразу делается под SEO и контекстную рекламу.'],
  ['⚡', 'Современный стек и скорость', 'Сайты на Next.js: быстрая загрузка, адаптивная вёрстка, аккуратная SEO-разметка.'],
  ['🔗', 'Интеграции и автоматизация', 'Подключаем CRM, оплату, Telegram и учётные системы — заявки и заказы не теряются.'],
  ['🤝', 'Прозрачные условия', 'Фиксируем смету и сроки в договоре, передаём исходный код и доступы после сдачи проекта.'],
]

const usefulLinks: { title: string; href: string }[] = [
  { title: 'Создание интернет-магазинов', href: '/uslugi/sozdanie-internet-magazinov' },
  { title: 'Создание лендингов под рекламу', href: '/uslugi/sozdanie-lendingov' },
  { title: 'SEO-продвижение сайтов', href: '/uslugi/seo-prodvizhenie-sajtov' },
  { title: 'Настройка Яндекс Директа', href: '/uslugi/nastrojka-yandeks-direkta' },
]

export default function WhyUs() {
  return (
    <Section background="default" divider>
      <Container>
        <div className="max-w-2xl mb-10">
          <div className="section-label mb-4">Почему мы</div>
          <Heading level={2} className="mb-4">
            Почему выбирают нас для разработки сайта
          </Heading>
          <p style={{ color: 'var(--text-secondary)' }}>
            Мы делаем сайты, которые решают задачи бизнеса: приводят заявки, принимают заказы и легко развиваются. Разработка, реклама и автоматизация — в одной команде, без передачи проекта между подрядчиками.
          </p>
        </div>

        <ul className="cards-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border rounded-lg overflow-hidden" style={{ borderColor: 'var(--border-default)' }}>
          {reasons.map(([, title, desc], i) => (
            <li
              key={title}
              className="flex flex-col gap-3 p-6 border-b sm:border-b-0 sm:border-r last:border-0"
              style={{ borderColor: 'var(--border-default)', background: 'var(--bg-surface)' }}
            >
              <span className="card-index" aria-hidden="true" />
              <p className="font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>{title}</p>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{desc}</p>
            </li>
          ))}
        </ul>

        <div className="mt-14">
          <div className="section-label mb-4">Полезное</div>
          <Heading level={3} className="mb-6">Популярные услуги</Heading>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {usefulLinks.map((l) => (
              <li key={l.title}>
                <a
                  href={l.href}
                  className="card-hoverable group flex items-center justify-between gap-4 px-5 h-14 text-sm font-medium"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {l.title}
                  <svg className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" style={{ color: 'var(--color-brand-500)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  )
}
