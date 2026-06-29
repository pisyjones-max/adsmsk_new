import type { Metadata } from 'next'
import Section    from '@/components/ui/Section'
import Container  from '@/components/ui/Container'
import Button     from '@/components/ui/Button'
import { ServiceCard, ReviewCard } from '@/components/ui/Card'
import { Badge, Heading, IconWrap } from '@/components/ui/index'

export const metadata: Metadata = {
  title: 'AdsMsk — Digital-маркетинг в Москве',
  alternates: { canonical: 'https://ads.msk.ru' },
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: '🎯',
    title: 'Контекстная реклама',
    description: 'Яндекс Директ и Google Ads под ключ. Настройка, ведение, оптимизация ставок и A/B-тесты объявлений.',
    features: ['Настройка с нуля за 3 дня', 'Еженедельные отчёты', 'Целевая цена лида фиксируется в договоре'],
  },
  {
    icon: '🔍',
    title: 'SEO-продвижение',
    description: 'Комплексная оптимизация: технический аудит, контент, ссылочный профиль. Топ-3 по целевым запросам.',
    features: ['Технический SEO-аудит', 'Семантическое ядро', 'Ежемесячный прирост позиций'],
  },
  {
    icon: '📱',
    title: 'SMM и таргет',
    description: 'ВКонтакте, Telegram, Одноклассники. Создание контента, настройка таргетированной рекламы, аналитика.',
    features: ['Контент-план на месяц', 'Таргет ВКонтакте и VK Ads', 'Автопостинг через бота'],
  },
  {
    icon: '🌐',
    title: 'Создание сайтов',
    description: 'Лендинги, корпоративные сайты, интернет-магазины. Next.js, быстрая загрузка, Core Web Vitals в зелёной зоне.',
    features: ['Срок от 7 дней', 'Адаптив + SEO-разметка', 'Хостинг и поддержка'],
  },
  {
    icon: '🛒',
    title: 'Маркетплейсы',
    description: 'Wildberries, Ozon, Яндекс Маркет. Оптимизация карточек, SEO описаний, рекламные кампании внутри площадок.',
    features: ['Аудит текущих карточек', 'Оптимизация под поиск WB/Ozon', 'Управление рекламой'],
  },
  {
    icon: '📊',
    title: 'Аналитика и парсинг',
    description: 'Настройка Яндекс Метрики, сквозная аналитика, парсинг данных конкурентов и цен. Решения под задачу.',
    features: ['Настройка целей и воронок', 'Дашборды в реальном времени', 'Парсинг цен / позиций'],
  },
]

const stats = [
  { value: '200+', label: 'проектов запущено' },
  { value: '8 лет', label: 'на рынке digital' },
  { value: '×3.4', label: 'средний рост трафика' },
  { value: '94%', label: 'клиентов продлевают договор' },
]

const reviews = [
  {
    text: 'Команда AdsMsk вывела наш интернет-магазин в топ-3 по 40 ключевым запросам за 4 месяца. Органика выросла в 3,4 раза — это ощутимо по выручке.',
    author: 'Алексей Кузнецов',
    company: 'ООО «СтройМаркет»',
    rating: 5 as const,
  },
  {
    text: 'Запустили контекстную рекламу в Директе — цена заявки упала с 2 400 до 780 рублей за первый месяц. Теперь отдел продаж не успевает обрабатывать лиды.',
    author: 'Марина Соколова',
    company: 'Клиника «МедПрофи»',
    rating: 5 as const,
  },
  {
    text: 'Делали сайт и SMM для нашего ЖК. Результат — 340 целевых заявок за 2 месяца. Рекомендую AdsMsk всем застройщикам Москвы.',
    author: 'Дмитрий Орлов',
    company: 'Девелопер «Городские кварталы»',
    rating: 5 as const,
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <Section as="header" size="xl" background="dark" glow className="min-h-[90vh] flex items-center">
        <Container centered>
          {/* Eyebrow */}
          <div className="section-label mb-6 animate-fade-in">
            Digital-агентство · Москва
          </div>

          {/* Headline */}
          <h1 className="heading-display text-balance mb-6 animate-fade-in animate-delay-100">
            Растим бизнес через{' '}
            <span className="text-gradient">цифровой маркетинг</span>
          </h1>

          {/* Sub */}
          <p
            className="text-xl max-w-prose mb-10 animate-fade-in animate-delay-200"
            style={{ color: 'var(--text-secondary)' }}
          >
            Контекстная реклама, SEO, SMM и создание сайтов — полный цикл продвижения
            под ключ. Результат фиксируем в KPI, прогресс — в еженедельных отчётах.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in animate-delay-300">
            <Button size="lg" href="/contact">
              Получить предложение
            </Button>
            <Button size="lg" variant="secondary" href="/cases">
              Наши кейсы
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 w-full max-w-3xl animate-fade-in animate-delay-400">
            {stats.map((s) => (
              <div key={s.value} className="text-center">
                <p
                  className="text-3xl font-extrabold tracking-tight mb-1"
                  style={{ color: 'var(--color-brand-400)' }}
                >
                  {s.value}
                </p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── SERVICES ─────────────────────────────────────────────── */}
      <Section background="surface" divider>
        <Container>
          <div className="text-center mb-14">
            <div className="section-label justify-center mb-4">Что мы делаем</div>
            <Heading level={2} className="mb-4">
              Полный спектр digital-услуг
            </Heading>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Берём на себя весь цикл — от стратегии до ежедневной аналитики.
              Вы фокусируетесь на бизнесе, мы — на трафике и конверсиях.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard
                key={s.title}
                icon={
                  <span className="text-xl" aria-hidden="true">{s.icon}</span>
                }
                title={s.title}
                description={s.description}
                features={s.features}
                cta="Подробнее"
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* ── WHY US ───────────────────────────────────────────────── */}
      <Section background="brand" glow divider>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="section-label mb-4">Почему AdsMsk</div>
              <Heading level={2} className="mb-6">
                Прозрачность, скорость, измеримый результат
              </Heading>
              <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
                Мы не обещаем «топ за 2 недели» и «1 000 заявок за 3 дня».
                Мы даём реалистичный план, фиксируем KPI в договоре и отчитываемся еженедельно.
              </p>
              <Button size="lg" href="/about">
                О компании
              </Button>
            </div>

            {/* Right — feature list */}
            <ul className="flex flex-col gap-5">
              {[
                ['📋', 'KPI в договоре', 'Целевые показатели фиксируем до старта. Не достигли — доработаем бесплатно.'],
                ['📈', 'Еженедельная отчётность', 'Живой дашборд + краткий итог в Telegram каждую пятницу.'],
                ['⚡', 'Старт за 3 дня', 'Аудит, стратегия и первые рекламные кампании — в течение 72 часов.'],
                ['🔒', 'Доступы остаются у вас', 'Кабинеты, домен, аналитика — всегда под вашим контролем.'],
              ].map(([icon, title, desc]) => (
                <li key={title as string} className="flex gap-4">
                  <IconWrap size="md" variant="brand" className="shrink-0 mt-0.5">
                    <span className="text-lg" aria-hidden="true">{icon}</span>
                  </IconWrap>
                  <div>
                    <p className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                      {title}
                    </p>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* ── REVIEWS ──────────────────────────────────────────────── */}
      <Section background="surface" divider>
        <Container>
          <div className="text-center mb-14">
            <div className="section-label justify-center mb-4">Отзывы</div>
            <Heading level={2}>Клиенты о результатах</Heading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <ReviewCard key={r.author} {...r} />
            ))}
          </div>
        </Container>
      </Section>

      {/* ── CTA BANNER ───────────────────────────────────────────── */}
      <Section background="dark" glow divider>
        <Container centered>
          <Badge variant="brand" className="mb-6">Бесплатная консультация</Badge>
          <Heading level={2} gradient className="mb-4 max-w-2xl">
            Готовы обсудить ваш проект?
          </Heading>
          <p
            className="text-lg mb-10 max-w-prose"
            style={{ color: 'var(--text-secondary)' }}
          >
            Оставьте заявку — разберём вашу нишу, конкурентов и точки роста.
            Первая консультация бесплатно, без обязательств.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="xl" href="/contact">
              Оставить заявку
            </Button>
            <Button
              size="xl"
              variant="secondary"
              href="https://t.me/adsmsk"
              external
            >
              Написать в Telegram
            </Button>
          </div>
        </Container>
      </Section>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer
        className="py-10 border-t"
        style={{
          backgroundColor: 'var(--color-neutral-950)',
          borderColor: 'var(--border-default)',
        }}
      >
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="font-bold text-lg mb-1" style={{ color: 'var(--text-primary)' }}>
                AdsMsk
              </p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Digital-маркетинг в Москве
              </p>
            </div>
            <nav className="flex flex-wrap gap-6 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <a href="/services" className="hover:text-brand-400 transition-colors">Услуги</a>
              <a href="/cases"    className="hover:text-brand-400 transition-colors">Кейсы</a>
              <a href="/about"    className="hover:text-brand-400 transition-colors">О нас</a>
              <a href="/contact"  className="hover:text-brand-400 transition-colors">Контакты</a>
            </nav>
            <div className="flex gap-3">
              <a
                href="https://t.me/adsmsk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost btn-icon"
                aria-label="Telegram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/>
                </svg>
              </a>
              <a
                href="https://vk.com/adsmsk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost btn-icon"
                aria-label="ВКонтакте"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.587-1.496c.6-.19 1.37 1.26 2.185 1.817.616.422 1.085.33 1.085.33l2.179-.03s1.139-.071.599-..965c-.044-.073-.314-.661-1.617-1.869-1.363-1.262-1.181-1.058.46-3.242.999-1.33 1.399-2.142 1.274-2.49-.12-.332-.854-.244-.854-.244l-2.452.015s-.182-.025-.317.055c-.132.078-.217.26-.217.26s-.387 1.003-.903 1.854c-1.088 1.85-1.523 1.948-1.701 1.833-.414-.267-.31-1.072-.31-1.644 0-1.788.271-2.532-.528-2.727-.265-.064-.46-.106-1.137-.113-.87-.009-1.607.003-2.023.207-.277.136-.491.44-.361.457.161.021.526.098.72.362.25.34.241 1.103.241 1.103s.144 2.105-.335 2.367c-.328.179-.778-.187-1.745-1.86-.496-.857-.871-1.805-.871-1.805s-.072-.176-.202-.271c-.157-.115-.377-.151-.377-.151l-2.328.015s-.35.01-.478.162C3.003 8.87 3.1 9.19 3.1 9.19s1.82 4.259 3.875 6.405c1.888 1.973 4.031 1.842 4.031 1.842h.972s.294-.033.444-.196c.139-.15.134-.435.134-.435s-.019-1.329.599-1.525c.609-.193 1.394 1.287 2.226 1.853.628.427 1.106.334 1.106.334z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex flex-col md:flex-row justify-between gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
            <p>© {new Date().getFullYear()} AdsMsk. Все права защищены.</p>
            <p>
              <a href="/privacy" className="hover:text-brand-400 transition-colors">
                Политика конфиденциальности
              </a>
            </p>
          </div>
        </Container>
      </footer>
    </>
  )
}
