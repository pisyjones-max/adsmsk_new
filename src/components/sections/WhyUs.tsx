import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import { Heading, IconWrap } from '@/components/ui/index'

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="section-label mb-4">Почему мы</div>
            <Heading level={2} className="mb-6">
              Почему выбирают нас для разработки сайта?
            </Heading>
            <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
              Мы делаем сайты, которые решают задачи бизнеса: приводят заявки, принимают заказы и легко развиваются. Разработка, реклама и автоматизация — в одной команде, без передачи проекта между подрядчиками.
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
