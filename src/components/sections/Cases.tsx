import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import { CaseCard } from '@/components/ui/Card'
import { Heading } from '@/components/ui/index'
import Button from '@/components/ui/Button'
import { cases } from '@/lib/services-data'

export default function Cases() {
  const sites = cases.filter((c) => c.kind === 'site')
  const marketplaces = cases.filter((c) => c.kind === 'marketplace')

  return (
    <Section id="cases" background="surface" divider>
      <Container>
        <div className="mb-10 max-w-2xl">
          <div className="section-label mb-4">Наши проекты</div>
          <Heading level={2}>Сайты и интернет-магазины, которые мы сделали</Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sites.map((c) => (
            <CaseCard
              key={c.title}
              image={c.image}
              imageAlt={c.title}
              category="Сайт"
              title={c.title}
              result={c.result}
              href={c.href}
            />
          ))}
        </div>

        <div className="mt-16 mb-8">
          <Heading level={3}>Дополнительно: выход на маркетплейсы</Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {marketplaces.map((c) => (
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

        <div className="mt-10">
          <Button href="/keys" variant="secondary" size="lg">
            Все кейсы
          </Button>
        </div>
      </Container>
    </Section>
  )
}
