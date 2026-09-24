import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <Section as="header" size="xl" background="dark" glow className="min-h-[85vh] flex items-center">
      <Container centered>
        <div className="section-label mb-6 animate-fade-in">
          Разработка сайтов и цифровые решения · AdsMsk
        </div>

        <h1 className="heading-display text-balance mb-6 animate-fade-in animate-delay-100">
          Создаём сайты и{' '}
          <span className="text-gradient">интернет-магазины для бизнеса</span>
        </h1>

        <p
          className="text-xl max-w-prose mb-10 animate-fade-in animate-delay-200"
          style={{ color: 'var(--text-secondary)' }}
        >
          Разрабатываем сайты, интернет-магазины и лендинги под ключ. Подключаем
          SEO, Яндекс Директ, Telegram-ботов, CRM и работу с маркетплейсами —
          чтобы сайт приводил клиентов, а рутина выполнялась автоматически.
        </p>

        <div className="flex flex-wrap gap-4 justify-center animate-fade-in animate-delay-300">
          <Button size="lg" href="https://t.me/UR16_bot?start" external>
            Обсудить проект
          </Button>
          <Button size="lg" variant="secondary" href="#services">
            Смотреть услуги
          </Button>
        </div>
      </Container>
    </Section>
  )
}
