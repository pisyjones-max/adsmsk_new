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
}

export default function ServiceHero({ label, title, description, breadcrumbs }: ServiceHeroProps) {
  return (
    <Section as="header" size="lg" background="dark" glow className="min-h-[60vh] flex items-center">
      <Container centered>
        {/* Breadcrumbs */}
        <nav aria-label="Хлебные крошки" className="mb-6 animate-fade-in">
          <ol className="flex flex-wrap items-center justify-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
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

        <h1 className="heading-display text-balance mb-6 animate-fade-in animate-delay-200">{title}</h1>

        <p
          className="text-xl max-w-prose mb-10 animate-fade-in animate-delay-300"
          style={{ color: 'var(--text-secondary)' }}
        >
          {description}
        </p>

        <div className="flex flex-wrap gap-4 justify-center animate-fade-in animate-delay-300">
          <Button size="lg" href="https://t.me/UR16_bot?start" external>
            Получить консультацию
          </Button>
          <Button size="lg" variant="secondary" href="#faq">
            Частые вопросы
          </Button>
        </div>
      </Container>
    </Section>
  )
}
