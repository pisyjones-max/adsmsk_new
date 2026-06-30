import Link from 'next/link'
import Image from 'next/image'
import Container from '@/components/ui/Container'

// ─── Data ───────────────────────────────────────────────────────────────────

const SERVICES = [
  { label: 'Контекстная реклама', href: '/uslugi' },
  { label: 'SEO-продвижение',     href: '/uslugi' },
  { label: 'SMM и реклама ВК',    href: '/uslugi' },
  { label: 'Создание сайтов',     href: '/uslugi' },
  { label: 'Маркетплейсы',        href: '/uslugi' },
]

const PHONE        = '+7-915-468-39-25'
const PHONE_TEL    = '+79154683925'
const TELEGRAM     = '@UR16_bot'
const WHATSAPP     = '+79154683925'
const VK_URL       = 'https://vk.com/adsmsk'

// ─── Component ──────────────────────────────────────────────────────────────

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-neutral-950 border-t border-white/10 text-white/70">
      <Container size="xl" className="py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Логотип и описание */}
          <div className="md:col-span-1">
            <Link
              href="/"
              aria-label="AdsMsk — на главную"
              className="flex items-center gap-2 mb-4 w-fit focus-brand rounded-md"
            >
              <Image
                src="/ads-msk.webp"
                alt="AdsMsk"
                width={32}
                height={32}
                className="rounded-md"
              />
              <span className="font-bold text-lg text-white tracking-tight">
                Ads<span className="text-brand-400">Msk</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/60 max-w-xs">
              Агентство digital-маркетинга в Москве: контекстная реклама, SEO, SMM
              и создание сайтов с измеримым результатом.
            </p>
          </div>

          {/* Услуги */}
          <nav aria-label="Услуги">
            <h2 className="font-semibold text-sm text-white uppercase tracking-wide mb-4">
              Услуги
            </h2>
            <ul className="flex flex-col gap-2.5">
              {SERVICES.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-sm text-white/60 hover:text-white transition-colors focus-brand rounded-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Контакты */}
          <div>
            <h2 className="font-semibold text-sm text-white uppercase tracking-wide mb-4">
              Контакты
            </h2>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="text-white/60 hover:text-white transition-colors focus-brand rounded-sm"
                >
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`https://t.me/${TELEGRAM.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors focus-brand rounded-sm"
                >
                  Telegram: {TELEGRAM}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors focus-brand rounded-sm"
                >
                  WhatsApp: {PHONE}
                </a>
              </li>
            </ul>
          </div>

          {/* Соцсети + политика */}
          <div>
            <h2 className="font-semibold text-sm text-white uppercase tracking-wide mb-4">
              Мы в соцсетях
            </h2>
            <a
              href={VK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AdsMsk ВКонтакте"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 text-white/70 hover:bg-brand-500 hover:text-white transition-colors focus-brand mb-6"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M13.985 21.5c-7.575 0-11.9-5.19-12.08-13.83h3.717c.124 6.327 2.917 9.008 5.13 9.562V7.67h3.503v5.47c2.186-.236 4.482-2.723 5.26-5.47h3.502c-.596 3.382-3.083 5.869-4.842 6.881 1.76.82 4.592 2.99 5.677 6.949h-3.86c-.847-2.61-2.95-4.63-5.737-4.91v4.91h-.27Z" />
              </svg>
            </a>

            <Link
              href="/personal"
              className="block text-sm text-white/60 hover:text-white transition-colors focus-brand rounded-sm w-fit"
            >
              Политика конфиденциальности
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-xs text-white/40">
          © {year} AdsMsk. Все права защищены.
        </div>
      </Container>
    </footer>
  )
}
