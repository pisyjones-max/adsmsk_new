import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import { Heading } from '@/components/ui/index'
import type { ProcessStep } from '@/lib/services-catalog'

interface ServiceProcessProps {
  steps: ProcessStep[]
}

export default function ServiceProcess({ steps }: ServiceProcessProps) {
  return (
    <Section background="surface" divider>
      <Container>
        <div className="text-center mb-14">
          <div className="section-label justify-center mb-4">Как мы работаем</div>
          <Heading level={2} className="mb-4">
            Процесс работы
          </Heading>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Прозрачный пошаговый процесс — вы всегда понимаете, на каком этапе находится работа.
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <li key={step.title} className="card-base p-6 flex flex-col gap-4 relative">
              <div
                className="flex items-center justify-center w-11 h-11 rounded-xl font-bold text-lg shrink-0"
                style={{ background: 'rgba(102,64,255,0.12)', color: 'var(--color-brand-400)' }}
                aria-hidden="true"
              >
                {i + 1}
              </div>
              <div>
                <h3 className="heading-4 mb-2">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
