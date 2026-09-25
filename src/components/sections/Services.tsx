import Link from 'next/link'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { ServiceCard } from '@/components/ui/Card'
import { formatPrice } from '@/lib/service-prices'
import { Heading } from '@/components/ui/index'
import { webServices, growthServices, type ServiceItem } from '@/lib/services-data'

const priceLabel = (href: string) => formatPrice(href.split('/').pop() ?? '')

function ServiceGrid({ items }: { items: ServiceItem[] }) {
  return (
    <div className="cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((s) => (
        <Link key={s.href} href={s.href} className="block h-full">
          <ServiceCard
            icon={<span className="text-xl" aria-hidden="true">{s.icon}</span>}
            title={s.title}
            description={s.description}
            cta={priceLabel(s.href) ? `Подробнее · ${priceLabel(s.href)}` : 'Подробнее'}
          />
        </Link>
      ))}
    </div>
  )
}

export default function Services() {
  return (
    <Section id="services" background="default" divider>
      <Container>
        <div className="mb-10 max-w-2xl">
          <div className="section-label mb-4">Что мы делаем</div>
          <Heading level={2} className="mb-4">
            Сайты и интернет-магазины для бизнеса
          </Heading>
          <p style={{ color: 'var(--text-secondary)' }}>
            Разрабатываем, дорабатываем и сопровождаем сайты. Каждый проект
            собираем под вашу задачу — с дизайном, аналитикой и подготовкой к продвижению.
          </p>
        </div>

        <ServiceGrid items={webServices} />

        <div className="mt-16 mb-10 max-w-2xl">
          <div className="section-label mb-4">Усиливаем сайт</div>
          <Heading level={3} className="mb-3">
            Реклама, боты, автоматизация и маркетплейсы
          </Heading>
          <p style={{ color: 'var(--text-secondary)' }}>
            Дополнительные направления, которые помогают сайту приводить клиентов
            и экономить время команды.
          </p>
        </div>

        <ServiceGrid items={growthServices} />

        <div className="mt-10">
          <Button size="lg" variant="secondary" href="/uslugi">
            Все услуги
          </Button>
        </div>
      </Container>
    </Section>
  )
}
