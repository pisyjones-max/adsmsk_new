import Link from 'next/link'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

interface Crumb {
  label: string
  href?: string
}

interface ServiceHeroProps {
  label: string
  title: string
  description: string
  breadcrumbs: Crumb[]
  /** «от 35 000 ₽» */
  price?: string
}

export default function ServiceHero({ label, title, description, breadcrumbs, price }: ServiceHeroProps) {
  return (
    <Section as="header" size="lg" background="dark" glow>
      <Container>
        <div className="max-w-3xl">
        {/* Breadcrumbs */}
        <nav aria-label="Хлебные крошки" className="mb-6 animate-fade-in">
          <ol className="flex flex-wrap items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
            {breadcrumbs.map((crumb, i) => (
              <li key={i} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-brand-400 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span style={{ color: 'var(--text-secondary)' }}>{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="section-label mb-6 animate-fade-in animate-delay-100">{label} · AdsMsk</div>

        <h1 className="heading-display mb-6 animate-fade-in animate-delay-200">{title}</h1>

        <p
          className="text-base md:text-lg max-w-2xl mb-8 animate-fade-in animate-delay-300"
          style={{ color: 'var(--text-secondary)' }}
        >
          {description}
        </p>

        {price && (
          <p className="mb-8 animate-fade-in animate-delay-300 flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="font-mono-ui text-2xl" style={{ color: 'var(--color-brand-400)' }}>{price}</span>
            <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
              точную стоимость назовём после короткого брифа
            </span>
          </p>
        )}

        <div className="flex flex-wrap gap-3 animate-fade-in animate-delay-300">
          <Button size="lg" href="https://t.me/UR16_bot?start" external>
            Получить консультацию
          </Button>
          <Button size="lg" variant="secondary" href="#faq">
            Частые вопросы
          </Button>
        </div>
        </div>
      </Container>
    </Section>
  )
}
