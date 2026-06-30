import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { Heading } from '@/components/ui/index'
import { ServiceCard } from '@/components/ui/Card'
import ServiceHero from '@/components/sections/ServiceHero'
import ServiceProcess from '@/components/sections/ServiceProcess'
import ServiceFAQ from '@/components/sections/ServiceFAQ'
import CTA from '@/components/sections/CTA'
import { servicesCatalog, getServiceBySlug, getRelatedServices } from '@/lib/services-catalog'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return servicesCatalog.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = getServiceBySlug(params.slug)
  if (!service) return {}

  const url = `https://ads.msk.ru/uslugi/${service.slug}`

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title: service.metaTitle,
      description: service.metaDescription,
    },
  }
}

export default function ServicePage({ params }: PageProps) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()

  const related = getRelatedServices(service)

  const breadcrumbs = [
    { label: 'Главная', href: '/' },
    { label: 'Услуги', href: '/uslugi' },
    { label: service.title },
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    name: service.title,
    description: service.metaDescription,
    provider: {
      '@type': 'MarketingAgency',
      name: 'AdsMsk',
      url: 'https://ads.msk.ru',
    },
    areaServed: 'RU',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero */}
      <ServiceHero
        label={service.label}
        title={service.title}
        description={service.shortDescription}
        breadcrumbs={breadcrumbs}
      />

      {/* 2. Описание услуги */}
      <Section background="default" divider>
        <Container size="md">
          <div className="flex flex-col gap-5">
            {service.description.map((paragraph, i) => (
              <p
                key={i}
                className={i === 0 ? 'text-lg leading-relaxed' : 'leading-relaxed'}
                style={{ color: i === 0 ? 'var(--text-primary)' : 'var(--text-secondary)' }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. Что входит */}
      <Section background="surface" divider>
        <Container>
          <div className="text-center mb-12">
            <div className="section-label justify-center mb-4">Состав услуги</div>
            <Heading level={2}>Что входит</Heading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {service.whatIncluded.map((item, i) => (
              <div key={i} className="card-base p-5 flex items-start gap-3">
                <svg
                  className="w-5 h-5 shrink-0 mt-0.5"
                  style={{ color: 'var(--color-brand-500)' }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Процесс работы */}
      <ServiceProcess steps={service.process} />

      {/* 5. Результаты / метрики */}
      <Section background="brand" size="sm">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
            {service.results.map((r) => (
              <div key={r.label}>
                <p
                  className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2"
                  style={{ color: 'var(--color-brand-400)' }}
                >
                  {r.value}
                </p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {r.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. FAQ */}
      <ServiceFAQ items={service.faq} />

      {/* 7. CTA */}
      <CTA />

      {/* 8. Похожие услуги */}
      {related.length > 0 && (
        <Section background="surface" size="sm">
          <Container>
            <div className="text-center mb-12">
              <div className="section-label justify-center mb-4">Может пригодиться</div>
              <Heading level={2}>Похожие услуги</Heading>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.slug} href={`/uslugi/${r.slug}`} className="block">
                  <ServiceCard
                    icon={<span className="text-xl" aria-hidden="true">{r.icon}</span>}
                    title={r.title}
                    description={r.shortDescription}
                    cta="Подробнее"
                  />
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  )
}
