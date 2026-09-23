import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { Heading } from '@/components/ui/index'
import { CaseCard } from '@/components/ui/Card'
import CTA from '@/components/sections/CTA'
import { cases } from '@/lib/services-data'

export const metadata: Metadata = {
  title: 'Кейсы',
  description:
    'Кейсы AdsMsk: выход на маркетплейсы Ozon и Wildberries, рост продаж и узнаваемости брендов Novation, дистрибьютора фотоэпиляторов и CeramaGzhel.',
  alternates: { canonical: 'https://ads.msk.ru/keys' },
}

export default function KeysPage() {
  return (
    <>
      <Section as="header" size="lg" background="dark" glow className="text-center">
        <Container centered>
          <div className="section-label justify-center mb-6">Кейсы · AdsMsk</div>
          <h1 className="heading-display text-balance mb-6">Некоторые кейсы компании</h1>
          <p className="text-xl max-w-prose mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Тут мы собрали кейсы, чтобы продемонстрировать наши возможности, опыт и подход к работе
            на маркетплейсах.
          </p>
        </Container>
      </Section>

      <Section size="md">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cases.map((c) => (
              <CaseCard
                key={c.title}
                image={c.image}
                imageAlt={c.title}
                category="Маркетплейс"
                title={c.title}
                result={c.result}
                href={c.href}
              />
            ))}
          </div>
        </Container>
      </Section>

      <CTA />
    </>
  )
}
