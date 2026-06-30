'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'

// ─── Types ──────────────────────────────────────────────────────────────────

export interface NavItem {
  label: string
  href:  string
}

interface MobileMenuProps {
  open:        boolean
  onClose:     () => void
  items:       NavItem[]
  activeHref:  string
  phone:       string
  telegram:    string
}

// ─── Component ──────────────────────────────────────────────────────────────

export default function MobileMenu({
  open,
  onClose,
  items,
  activeHref,
  phone,
  telegram,
}: MobileMenuProps) {
  // Блокируем скролл фона и закрываем по Escape, пока меню открыто
  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Мобильное меню"
      className={[
        'fixed inset-0 z-[60] md:hidden transition-visibility',
        open ? 'pointer-events-auto' : 'pointer-events-none',
      ].join(' ')}
    >
      {/* Затемнение фона */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={[
          'absolute inset-0 bg-neutral-950/70 backdrop-blur-sm transition-opacity duration-300',
          open ? 'opacity-100' : 'opacity-0',
        ].join(' ')}
      />

      {/* Панель меню */}
      <nav
        aria-label="Основная навигация (моб.)"
        className={[
          'absolute right-0 top-0 h-full w-full max-w-xs',
          'bg-neutral-950 border-l border-white/10 shadow-2xl',
          'flex flex-col px-6 py-6 transition-transform duration-300 ease-out',
          open ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
      >
        <div className="flex items-center justify-between mb-8">
          <span className="font-bold text-lg text-white">Меню</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть меню"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors focus-brand"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col gap-1">
          {items.map((item) => {
            const isActive = item.href === activeHref
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  aria-current={isActive ? 'page' : undefined}
                  className={[
                    'block rounded-lg px-4 py-3 text-base font-medium transition-colors',
                    isActive
                      ? 'bg-brand-500/15 text-brand-400'
                      : 'text-white/80 hover:bg-white/5 hover:text-white',
                  ].join(' ')}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="mt-auto pt-6 flex flex-col gap-4 border-t border-white/10">
          <Button href="/contact" onClick={onClose} fullWidth size="lg">
            Получить консультацию
          </Button>

          <div className="flex flex-col gap-2 text-sm">
            <a
              href={`tel:${phone.replace(/[^+\d]/g, '')}`}
              className="text-white/70 hover:text-white transition-colors"
            >
              {phone}
            </a>
            <a
              href={`https://t.me/${telegram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              Telegram: {telegram}
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}
