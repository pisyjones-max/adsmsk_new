import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
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

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer
        className="py-10 border-t"
        style={{
          backgroundColor: 'var(--color-neutral-950)',
          borderColor: 'var(--border-default)',
        }}
      >
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="font-bold text-lg mb-1" style={{ color: 'var(--text-primary)' }}>
                AdsMsk
              </p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Поддержка предпринимателей на маркетплейсах
              </p>
            </div>
            <nav className="flex flex-wrap gap-6 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <a href="/services" className="hover:text-brand-400 transition-colors">Услуги</a>
              <a href="#cases" className="hover:text-brand-400 transition-colors">Кейсы</a>
              <a href="/about" className="hover:text-brand-400 transition-colors">О нас</a>
              <a href="/contact" className="hover:text-brand-400 transition-colors">Контакты</a>
            </nav>
            <div className="flex gap-3">
              <a
                href="https://t.me/UR16_bot?start"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost btn-icon"
                aria-label="Telegram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex flex-col md:flex-row justify-between gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
            <p>© {new Date().getFullYear()} AdsMsk. Все права защищены.</p>
            <p>
              <a href="/privacy" className="hover:text-brand-400 transition-colors">
                Политика конфиденциальности
              </a>
            </p>
          </div>
        </Container>
      </footer>
    </>
  )
}
