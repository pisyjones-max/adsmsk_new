import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { Badge, Heading } from '@/components/ui/index'

export default function CTA() {
  return (
    <Section background="dark" glow divider>
      <Container centered>
        <Badge variant="brand" className="mb-6">Бесплатная консультация</Badge>
        <Heading level={2} gradient className="mb-4 max-w-2xl">
          Подпишись на наш канал
        </Heading>
        <p
          className="text-lg mb-10 max-w-prose"
          style={{ color: 'var(--text-secondary)' }}
        >
          Получайте разборы кейсов, новости маркетплейсов и спецпредложения первыми.
          Первая консультация — бесплатно, без обязательств.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="xl" href="https://t.me/UR16_bot?start" external>
            Написать в Telegram
          </Button>
          <Button
            size="xl"
            variant="secondary"
            href="https://wa.me/?text=Здравствуйте,%20хочу%20узнать%20о%20сопровождении%20на%20маркетплейсах"
            external
          >
            Написать в WhatsApp
          </Button>
        </div>
      </Container>
    </Section>
  )
}
