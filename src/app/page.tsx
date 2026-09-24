import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import Services from '@/components/sections/Services'
import Cases from '@/components/sections/Cases'
import WhyUs from '@/components/sections/WhyUs'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'AdsMsk — создание сайтов и интернет-магазинов для бизнеса',
  description:
    'Разработка сайтов, интернет-магазинов и лендингов под ключ. SEO-продвижение, настройка Яндекс Директа, Telegram-боты, интеграция CRM, маркетплейсы. Москва и Московская область.',
  alternates: { canonical: 'https://ads.msk.ru' },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Cases />
      <WhyUs />
      <CTA />
    </>
  )
}
