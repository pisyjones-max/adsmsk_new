import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <Section as="header" size="xl" background="dark" glow className="min-h-[85vh] flex items-center">
      <Container centered>
        <div className="section-label mb-6 animate-fade-in">
          Сопровождение на маркетплейсах · AdsMsk
        </div>

        <h1 className="heading-display text-balance mb-6 animate-fade-in animate-delay-100">
          Поддержка предпринимателей{' '}
          <span className="text-gradient">на маркетплейсах</span>
        </h1>

        <p
          className="text-xl max-w-prose mb-10 animate-fade-in animate-delay-200"
          style={{ color: 'var(--text-secondary)' }}
        >
          Выход на маркетплейсы — эффективная стратегия роста бизнеса, расширения
          продаж и снижения рисков. Мы берём на себя стратегию, карточки товаров,
          рекламу и аналитику — вы фокусируетесь на бизнесе.
        </p>

        <div className="flex flex-wrap gap-4 justify-center animate-fade-in animate-delay-300">
          <Button size="lg" href="https://t.me/UR16_bot?start" external>
            Получить консультацию
          </Button>
          <Button size="lg" variant="secondary" href="#cases">
            Смотреть кейсы
          </Button>
        </div>
      </Container>
    </Section>
  )
}
