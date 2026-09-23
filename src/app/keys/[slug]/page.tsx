import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { Heading } from '@/components/ui/index'
import CTA from '@/components/sections/CTA'
import { keysCatalog, getCaseBySlug } from '@/lib/keys-catalog'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return keysCatalog.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const item = getCaseBySlug(params.slug)
  if (!item) return {}

  const url = `https://ads.msk.ru/keys/${item.slug}`

  return {
    title: item.metaTitle,
    description: item.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: item.metaTitle,
      description: item.metaDescription,
      images: [{ url: item.cover }],
    },
  }
}

export default function CaseDetailPage({ params }: PageProps) {
  const item = getCaseBySlug(params.slug)
  if (!item) notFound()

  return (
    <>
      <Section as="header" size="lg" background="dark" glow className="text-center">
        <Container centered>
          <nav aria-label="Хлебные крошки" className="mb-6">
            <ol className="flex flex-wrap items-center justify-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
              <li><Link href="/" className="hover:text-brand-400 transition-colors">Главная</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/keys" className="hover:text-brand-400 transition-colors">Кейсы</Link></li>
              <li aria-hidden="true">/</li>
              <li style={{ color: 'var(--text-secondary)' }}>{item.title}</li>
            </ol>
          </nav>
          <div className="section-label justify-center mb-6">{item.subtitle} · AdsMsk</div>
          <h1 className="heading-display text-balance mb-6">{item.title}</h1>
        </Container>
      </Section>

      <Section size="sm">
        <Container size="md">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-10 bg-neutral-900">
            <Image src={item.cover} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" priority />
          </div>

          <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
            {item.intro}
          </p>
        </Container>
      </Section>

      <Section size="md" background="surface" divider>
        <Container size="md">
          <div className="flex flex-col gap-10">
            {item.steps.map((s) => (
              <div key={s.step} className="flex gap-5">
                <div className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center font-bold"
                     style={{ background: 'rgba(102,64,255,0.12)', color: 'var(--color-brand-400)' }}>
                  {s.step}
                </div>
                <div>
                  <Heading level={3} className="mb-2">{s.title}</Heading>
                  <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl p-6 md:p-8"
               style={{ background: 'rgba(102,64,255,0.08)', borderLeft: '3px solid var(--color-brand-500)' }}>
            <p className="text-xs font-medium uppercase tracking-wider mb-2" style={{ color: 'var(--color-brand-400)' }}>
              Результат
            </p>
            <p className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>{item.result}</p>
          </div>
        </Container>
      </Section>

      {item.gallery.length > 0 && (
        <Section size="md">
          <Container>
            <Heading level={2} className="mb-8 text-center">Галерея проекта</Heading>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {item.gallery.map((src) => (
                <div key={src} className="relative aspect-square rounded-xl overflow-hidden bg-neutral-900">
                  <Image src={src} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <CTA />
    </>
  )
}
