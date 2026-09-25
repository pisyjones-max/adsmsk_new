import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { Heading } from '@/components/ui/index'

export default function CTA() {
  return (
    <Section background="dark" glow divider>
      <Container>
        <div
          className="grid md:grid-cols-[minmax(0,1fr)_auto] gap-8 md:gap-12 items-center rounded-lg border p-8 md:p-12"
          style={{ background: 'var(--bg-surface)', borderColor: 'var(--border-strong)' }}
        >
          <div>
            <div className="section-label mb-4">Бесплатная консультация</div>
            <Heading level={2} className="mb-4 max-w-xl">
              Обсудим ваш сайт или интернет-магазин
            </Heading>
            <p className="max-w-xl" style={{ color: 'var(--text-secondary)' }}>
              Расскажите о задаче — предложим решение, сроки и ориентир по стоимости. Первая консультация бесплатная и ни к чему не обязывает.
            </p>
          </div>

          <div className="flex flex-col gap-3 w-full md:w-60">
            <Button size="lg" href="https://t.me/UR16_bot?start" external fullWidth>
              Написать в Telegram
            </Button>
            <Button
              size="lg"
              variant="secondary"
              href="https://wa.me/?text=Здравствуйте,%20хочу%20обсудить%20разработку%20сайта"
              external
              fullWidth
            >
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
