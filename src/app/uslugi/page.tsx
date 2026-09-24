import type { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import { Heading } from '@/components/ui/index'
import { ServiceCard } from '@/components/ui/Card'
import CTA from '@/components/sections/CTA'
import { servicesCatalog, serviceGroups } from '@/lib/services-catalog'

export const metadata: Metadata = {
  title: 'Услуги — создание сайтов, интернет-магазинов, реклама и автоматизация',
  description:
    'Каталог услуг AdsMsk: создание сайтов и интернет-магазинов, лендинги, корпоративные сайты, редизайн и поддержка, SEO, Яндекс Директ, Telegram-боты, автоматизация и CRM, маркетплейсы.',
  alternates: { canonical: 'https://ads.msk.ru/uslugi' },
}

export default function ServicesCatalogPage() {
  return (
    <>
      <Section as="header" size="lg" background="dark" glow>
        <Container centered>
          {/* Breadcrumbs */}
          <nav aria-label="Хлебные крошки" className="mb-6">
            <ol className="flex items-center justify-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
              <li>
                <Link href="/" className="hover:text-brand-400 transition-colors">
                  Главная
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li style={{ color: 'var(--text-secondary)' }}>Услуги</li>
            </ol>
          </nav>

          <div className="section-label mb-6">Каталог услуг · AdsMsk</div>
          <h1 className="heading-display text-balance mb-6">
            Услуги для бизнеса: <span className="text-gradient">сайты и цифровые решения</span>
          </h1>
          <p className="text-xl max-w-prose mb-2" style={{ color: 'var(--text-secondary)' }}>
            Создаём сайты и интернет-магазины, а также подключаем то, что помогает им приносить клиентов: SEO, рекламу, Telegram-ботов, автоматизацию и работу с маркетплейсами.
          </p>
        </Container>
      </Section>

      {serviceGroups.map((group, idx) => {
        const items = servicesCatalog.filter((x) => x.group === group.id)
        if (items.length === 0) return null
        return (
          <Section key={group.id} background={idx % 2 === 0 ? 'default' : 'surface'} divider={idx > 0}>
            <Container>
              <div className="mb-10">
                <Heading level={2} className="mb-3">{group.title}</Heading>
                <p style={{ color: 'var(--text-secondary)' }}>{group.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((s) => (
                  <Link key={s.slug} href={`/uslugi/${s.slug}`} className="block">
                    <ServiceCard
                      icon={<span className="text-xl" aria-hidden="true">{s.icon}</span>}
                      title={s.title}
                      description={s.shortDescription}
                      cta={s.price ? `Подробнее · ${s.price}` : 'Подробнее'}
                    />
                  </Link>
                ))}
              </div>
            </Container>
          </Section>
        )
      })}

      <CTA />
    </>
  )
}
