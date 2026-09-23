import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { Heading } from '@/components/ui/index'

export const metadata: Metadata = {
  title: 'Согласие на обработку персональных данных',
  description: 'Политика обработки персональных данных пользователей сайта ads.msk.ru.',
  alternates: { canonical: 'https://ads.msk.ru/personal' },
  robots: { index: false, follow: true },
}

const sections = [
  {
    title: '1. Обработка персональных данных',
    items: [
      ['Предоставление ответов на запросы и вопросы', 'Сайт ads.msk.ru осуществляет обработку персональных данных пользователя с целью предоставления ответов на запросы и вопросы.'],
      ['Оказание услуг и информирование', 'Сайт также осуществляет обработку для оказания услуг, включая информирование о специальных предложениях и акциях.'],
      ['Анализ предпочтений пользователей', 'Проводится анализ предпочтений пользователей для улучшения качества обслуживания.'],
    ],
  },
  {
    title: '2. Состав персональных данных',
    items: [
      ['Имя, фамилия', 'Персональные данные включают имя и фамилию пользователя.'],
      ['Контактные данные', 'Обрабатываются номер телефона и адрес электронной почты.'],
      ['Информация, предоставленная пользователем', 'Обрабатывается информация, которую пользователь предоставляет в рамках использования сайта.'],
    ],
  },
]

export default function PersonalDataPage() {
  return (
    <>
      <Section as="header" size="md" background="dark" glow className="text-center">
        <Container centered>
          <div className="section-label justify-center mb-6">Юридическая информация</div>
          <h1 className="heading-display text-balance mb-6">Согласие на обработку персональных данных</h1>
          <p className="text-lg max-w-prose mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Настоящим, оставляя данные на сайте ads.msk.ru, пользователь даёт своё согласие
            Сысоеву Е.Г. на обработку его персональных данных в соответствии с Федеральным
            законом № 152-ФЗ «О персональных данных».
          </p>
        </Container>
      </Section>

      <Section size="md">
        <Container size="md">
          <div className="flex flex-col gap-10">
            {sections.map((sec) => (
              <div key={sec.title}>
                <Heading level={2} className="mb-5">{sec.title}</Heading>
                <ul className="flex flex-col gap-4">
                  {sec.items.map(([t, d]) => (
                    <li key={t}>
                      <p className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{t}</p>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{d}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <Heading level={2} className="mb-5">3. Способы обработки данных</Heading>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Обработка персональных данных осуществляется с использованием автоматизированных
                средств и включает сбор, запись, систематизацию, хранение, уточнение, использование,
                передачу, блокирование, удаление и уничтожение данных.
              </p>
            </div>

            <div>
              <Heading level={2} className="mb-5">4. Права пользователя</Heading>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Пользователь вправе отозвать согласие на обработку данных, обратившись в компанию,
                а также запросить удаление своих данных, если обработка больше не требуется.
              </p>
            </div>

            <div>
              <Heading level={2} className="mb-5">5. Безопасность данных</Heading>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Сайт ads.msk.ru гарантирует безопасность предоставленных персональных данных и
                принимает все необходимые меры для их защиты в соответствии с законодательством РФ.
              </p>
            </div>

            <div>
              <Heading level={2} className="mb-5">6. Срок обработки данных</Heading>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Персональные данные обрабатываются до достижения указанных целей или до отзыва
                согласия пользователем.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
