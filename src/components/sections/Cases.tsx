import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import { CaseCard } from '@/components/ui/Card'
import { Heading } from '@/components/ui/index'
import { cases } from '@/lib/services-data'

export default function Cases() {
  return (
    <Section id="cases" background="surface" divider>
      <Container>
        <div className="text-center mb-14">
          <div className="section-label justify-center mb-4">Наши проекты</div>
          <Heading level={2}>Кейсы выхода на маркетплейсы</Heading>
        </div>

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
  )
}
