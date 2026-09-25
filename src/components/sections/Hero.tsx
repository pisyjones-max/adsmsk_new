import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

const CHIPS = ['Сайты', 'Интернет-магазины', 'SEO', 'Яндекс Директ', 'Telegram-боты', 'CRM', 'Маркетплейсы']

function HeroVisual() {
  return (
    <div className="relative w-full max-w-[520px] justify-self-end" aria-hidden="true">
      <div className="rounded-lg border overflow-hidden" style={{ background: 'var(--bg-surface)', borderColor: 'var(--border-strong)' }}>
        {/* Строка браузера */}
        <div className="flex items-center gap-2 px-4 h-10 border-b" style={{ borderColor: 'var(--border-default)' }}>
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--border-strong)' }} />
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--border-strong)' }} />
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--border-strong)' }} />
          <span className="ml-3 font-mono-ui text-[11px]" style={{ color: 'var(--text-muted)' }}>your-business.ru</span>
        </div>

        {/* Макет страницы */}
        <div className="p-5 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="block h-2 w-16" style={{ background: 'var(--text-primary)' }} />
            <div className="flex gap-3">
              <span className="block h-1.5 w-8" style={{ background: 'var(--border-strong)' }} />
              <span className="block h-1.5 w-8" style={{ background: 'var(--border-strong)' }} />
              <span className="block h-1.5 w-8" style={{ background: 'var(--border-strong)' }} />
            </div>
          </div>

          <div className="border rounded-md p-5 flex flex-col gap-3" style={{ borderColor: 'var(--border-default)' }}>
            <span className="block h-3 w-3/4" style={{ background: 'var(--text-primary)' }} />
            <span className="block h-3 w-1/2" style={{ background: 'var(--text-primary)' }} />
            <span className="block h-1.5 w-2/3 mt-1" style={{ background: 'var(--border-strong)' }} />
            <span className="block h-8 w-28 rounded-md mt-2" style={{ background: 'var(--color-brand-500)' }} />
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="border rounded-md p-3 flex flex-col gap-2" style={{ borderColor: 'var(--border-default)' }}>
                <span className="block h-10" style={{ background: i === 1 ? 'var(--color-brand-800)' : 'var(--bg-elevated)' }} />
                <span className="block h-1.5 w-3/4" style={{ background: 'var(--border-strong)' }} />
                <span className="block h-1.5 w-1/2" style={{ background: 'var(--border-strong)' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <Section as="header" size="lg" background="dark" glow>
      <Container>
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] gap-12 lg:gap-16 items-center">
          <div>
            <div className="section-label mb-6 animate-fade-in">
              Разработка сайтов и цифровых решений
            </div>

            <h1 className="heading-display mb-6 animate-fade-in animate-delay-100">
              Создаём сайты и{' '}
              <span className="text-gradient">интернет-магазины для бизнеса</span>
            </h1>

            <p
              className="text-base md:text-lg max-w-xl mb-8 animate-fade-in animate-delay-200"
              style={{ color: 'var(--text-secondary)' }}
            >
              Разрабатываем сайты, интернет-магазины и лендинги под ключ. Подключаем
              SEO, Яндекс Директ, Telegram-ботов, CRM и работу с маркетплейсами —
              чтобы сайт приводил клиентов, а рутина выполнялась автоматически.
            </p>

            <div className="flex flex-wrap gap-3 animate-fade-in animate-delay-300">
              <Button size="lg" href="https://t.me/UR16_bot?start" external>
                Обсудить проект
              </Button>
              <Button size="lg" variant="secondary" href="#services">
                Смотреть услуги
              </Button>
            </div>

            <ul className="flex flex-wrap gap-2 mt-10 animate-fade-in animate-delay-400" aria-label="Направления">
              {CHIPS.map((c) => (
                <li key={c} className="badge-neutral">{c}</li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block animate-fade-in animate-delay-300">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </Section>
  )
}
