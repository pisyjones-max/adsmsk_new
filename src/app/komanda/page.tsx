import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { Heading, Badge } from '@/components/ui/index'
import { Card } from '@/components/ui/Card'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Команда',
  description:
    'Команда AdsMsk: веб-дизайнер, бэкенд-специалист, аналитик и специалист по 3D-визуализации. Свяжитесь с нами через Telegram-бота.',
  alternates: { canonical: 'https://ads.msk.ru/komanda' },
}

const team = [
  {
    name: 'Ардзинба Ульяна',
    role: 'Веб-дизайнер',
    text: 'Создаёт уникальный дизайн, акцентируя внимание на современных трендах и удобстве интерфейса. Её задача — сделать сайт эстетически привлекательным и удобным для пользователей.',
  },
  {
    name: 'Сысоев Евгений',
    role: 'Бэкенд-специалист',
    text: 'Разрабатывает серверную часть сайта, обеспечивает его безопасность, стабильность и функциональность — отвечает за корректную работу всех скрытых процессов.',
  },
  {
    name: 'Семёнова Ульяна',
    role: 'Аналитик',
    text: 'Специализируется на сборе и анализе данных, выявляет ключевые показатели эффективности и помогает принимать решения, основанные на цифрах.',
  },
  {
    name: 'Макаров Илья',
    role: 'Специалист по 3D-визуализации',
    text: 'Занимается созданием качественных 3D-моделей и визуализаций для демонстрации товаров, презентаций и рекламы.',
  },
]

export default function TeamPage() {
  return (
    <>
      <Section as="header" size="lg" background="dark" glow className="text-center">
        <Container centered>
          <div className="section-label justify-center mb-6">Команда · AdsMsk</div>
          <h1 className="heading-display text-balance mb-6">Добро пожаловать в нашу команду</h1>
          <p className="text-xl max-w-prose mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Профессиональные услуги в области веб-дизайна, разработки, аналитики и 3D-визуализации.
            Свяжитесь с нами для индивидуального подхода и качественного результата.
          </p>
        </Container>
      </Section>

      <Section size="md">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <Card key={m.name} hoverable className="flex flex-col gap-4 text-center items-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold"
                  style={{ background: 'var(--color-brand-800)', color: 'var(--color-brand-300)' }}
                  aria-hidden="true"
                >
                  {m.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>{m.name}</p>
                  <Badge variant="brand" size="sm" className="mt-2">{m.role}</Badge>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{m.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section size="sm" background="surface" divider>
        <Container centered>
          <Heading level={2} className="mb-4">Со всеми специалистами можно связаться напрямую</Heading>
          <p className="max-w-prose mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Наш чат-бот в Telegram — удобный способ получить консультацию или задать интересующие вопросы.
          </p>
        </Container>
      </Section>

      <CTA />
    </>
  )
}
