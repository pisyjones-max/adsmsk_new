'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import MobileMenu, { type NavItem } from './MobileMenu'

// ─── Data ───────────────────────────────────────────────────────────────────

const NAV_ITEMS: NavItem[] = [
  { label: 'Главная',  href: '/' },
  { label: 'Услуги',   href: '/uslugi' },
  { label: 'Кейсы',    href: '/#cases' },
  { label: 'Команда',  href: '/#team' },
  { label: 'Контакты', href: '/contact' },
]

const PHONE    = '+7-915-468-39-25'
const TELEGRAM = '@UR16_bot'

// ─── Component ──────────────────────────────────────────────────────────────

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  // Сокращаем хедер при прокрутке страницы
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Закрываем мобильное меню при смене маршрута
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const activeHref =
    NAV_ITEMS.find((item) => item.href !== '/' && pathname.startsWith(item.href))?.href ??
    (pathname === '/' ? '/' : '')

  return (
    <>
      {/* Skip-link для клавиатурной/скринридер-навигации */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-white focus-brand"
      >
        Перейти к основному содержимому
      </a>

      <header
        className={[
          'sticky top-0 z-50 w-full transition-all duration-300',
          scrolled
            ? 'bg-neutral-950/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20'
            : 'bg-neutral-950/40 backdrop-blur-sm border-b border-transparent',
        ].join(' ')}
      >
        <Container as="div" size="xl">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Логотип */}
            <Link
              href="/"
              aria-label="AdsMsk — на главную"
              className="flex items-center gap-2 shrink-0 focus-brand rounded-md"
            >
              <Image
                src="/ads-msk.webp"
                alt="AdsMsk"
                width={36}
                height={36}
                priority
                className="rounded-md"
              />
              <span className="font-bold text-lg sm:text-xl text-white tracking-tight">
                Ads<span className="text-brand-400">Msk</span>
              </span>
            </Link>

            {/* Десктоп-навигация */}
            <nav aria-label="Основная навигация" className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = item.href === activeHref
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={[
                      'relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors focus-brand',
                      isActive
                        ? 'text-white'
                        : 'text-white/70 hover:text-white hover:bg-white/5',
                    ].join(' ')}
                  >
                    {item.label}
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute left-3.5 right-3.5 -bottom-px h-0.5 rounded-full bg-brand-400"
                      />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* CTA + бургер */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Button href="/contact" size="md" className="hidden sm:inline-flex">
                Получить консультацию
              </Button>

              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Открыть меню"
                aria-haspopup="dialog"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors focus-brand"
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        items={NAV_ITEMS}
        activeHref={activeHref}
        phone={PHONE}
        telegram={TELEGRAM}
      />
    </>
  )
}
