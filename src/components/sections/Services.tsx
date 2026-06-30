import Link from 'next/link'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import { ServiceCard } from '@/components/ui/Card'
import { Heading } from '@/components/ui/index'
import { services } from '@/lib/services-data'

export default function Services() {
  return (
    <Section id="services" background="default" divider>
      <Container>
        <div className="text-center mb-14">
          <div className="section-label justify-center mb-4">Что мы делаем</div>
          <Heading level={2} className="mb-4">
            Услуги для роста на маркетплейсах
          </Heading>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Проанализируем текущее положение вашего магазина и определим потенциал —
            подскажем шаги для увеличения продаж и улучшения позиций в рейтинге.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link key={s.title} href={s.href} className="block">
              <ServiceCard
                icon={<span className="text-xl" aria-hidden="true">{s.icon}</span>}
                title={s.title}
                description={s.description}
                cta="Подробнее"
              />
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  )
}
