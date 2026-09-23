import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import Services from '@/components/sections/Services'
import PromoBanner from '@/components/sections/PromoBanner'
import Cases from '@/components/sections/Cases'
import WhyUs from '@/components/sections/WhyUs'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'AdsMsk — Поддержка предпринимателей на маркетплейсах',
  description:
    'Сопровождение на маркетплейсах, SEO-оптимизация карточек, создание сайтов, контекстная реклама, аналитика и парсинг данных. Кейсы Novation, фотоэпиляторы, CeramaGzhel.',
  alternates: { canonical: 'https://ads.msk.ru' },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <PromoBanner />
      <Cases />
      <WhyUs />
      <CTA />
    </>
  )
}
