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
  { label: 'Кейсы',    href: '/keys' },
  { label: 'Команда',  href: '/komanda' },
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
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-neutral-950 focus-brand"
      >
        Перейти к основному содержимому
      </a>

      <header
        className={[
          'sticky top-0 z-50 w-full border-b hairline backdrop-blur-md transition-colors duration-300',
          scrolled ? 'bg-neutral-950/90' : 'bg-neutral-950/60',
        ].join(' ')}
      >
        <Container as="div" size="xl">
          <div className="flex items-center justify-between h-16">
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
                className="rounded"
              />
              <span className="font-semibold text-lg text-white tracking-tight">
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
                      'relative px-3 h-9 inline-flex items-center text-sm rounded-md transition-colors focus-brand',
                      isActive
                        ? 'text-white'
                        : 'text-neutral-400 hover:text-white',
                    ].join(' ')}
                  >
                    {item.label}
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute left-3 right-3 -bottom-[14px] h-px bg-brand-500"
                      />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* CTA + бургер */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="tel:+79154683925"
                className="hidden lg:inline-block font-mono-ui text-sm text-neutral-300 hover:text-white transition-colors mr-2 focus-brand rounded"
              >
                {PHONE}
              </a>
              <Button href="/contact" size="md" className="hidden sm:inline-flex">
                Обсудить проект
              </Button>

              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Открыть меню"
                aria-haspopup="dialog"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border hairline text-white/80 hover:text-white transition-colors focus-brand"
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
