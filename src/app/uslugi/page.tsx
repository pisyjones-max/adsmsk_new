import type { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import { Heading } from '@/components/ui/index'
import { ServiceCard } from '@/components/ui/Card'
import CTA from '@/components/sections/CTA'
import { servicesCatalog } from '@/lib/services-catalog'

export const metadata: Metadata = {
  title: 'Услуги — AdsMsk',
  description:
    'Полный каталог услуг AdsMsk: аналитика и парсинг данных, SEO-оптимизация карточек, маркетинг, создание контента, юнит-экономика, Telegram-боты, создание сайтов, сопровождение на маркетплейсах, продвижение ВКонтакте.',
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
            Услуги для роста <span className="text-gradient">на маркетплейсах</span>
          </h1>
          <p className="text-xl max-w-prose mb-2" style={{ color: 'var(--text-secondary)' }}>
            От аналитики и контента до сопровождения продаж — полный комплекс услуг
            для предпринимателей на Ozon, Wildberries и Яндекс Маркет.
          </p>
        </Container>
      </Section>

      <Section background="default">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesCatalog.map((s) => (
              <Link key={s.slug} href={`/uslugi/${s.slug}`} className="block">
                <ServiceCard
                  icon={<span className="text-xl" aria-hidden="true">{s.icon}</span>}
                  title={s.title}
                  description={s.shortDescription}
                  cta="Подробнее"
                />
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CTA />
    </>
  )
}
