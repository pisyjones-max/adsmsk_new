import { HTMLAttributes, ReactNode } from 'react'

// ─── Types ───────────────────────────────────────────────────────────────────

type SectionTag = 'section' | 'div' | 'article' | 'aside' | 'main' | 'header' | 'footer'
type SectionSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type SectionBackground = 'default' | 'surface' | 'elevated' | 'brand' | 'dark' | 'none'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?:         SectionTag
  size?:       SectionSize
  background?: SectionBackground
  /** Декоративный радиальный градиент сверху */
  glow?:       boolean
  /** Разделитель сверху */
  divider?:    boolean
  className?:  string
  children:    ReactNode
}

// ─── Style Maps ──────────────────────────────────────────────────────────────

const sizeMap: Record<SectionSize, string> = {
  xs: 'py-6  md:py-8',
  sm: 'py-10 md:py-12',
  md: 'py-14 md:py-20',
  lg: 'py-16 md:py-24',
  xl: 'py-20 md:py-28',
}

const bgMap: Record<SectionBackground, string> = {
  default:  '',            // bg задаётся через CSS var --bg-page
  surface:  'bg-surface',
  elevated: 'bg-elevated',
  brand:    '',            // custom inline style
  dark:     '',            // custom inline style
  none:     '',
}

// Inline styles для фонов, которые нельзя описать простыми классами
function getBgStyle(background: SectionBackground): React.CSSProperties {
  switch (background) {
    case 'default':
      return { backgroundColor: 'var(--bg-page)' }
    case 'surface':
      return { backgroundColor: 'var(--bg-surface)' }
    case 'elevated':
      return { backgroundColor: 'var(--bg-elevated)' }
    case 'brand':
      return {
        backgroundColor: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-default)',
        borderBottom: '1px solid var(--border-default)',
      }
    case 'dark':
      return { backgroundColor: 'var(--color-neutral-950)' }
    case 'none':
      return {}
  }
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function Section({
  as:         Tag        = 'section',
  size               = 'md',
  background         = 'default',
  glow               = false,
  divider            = false,
  className          = '',
  children,
  style,
  ...rest
}: SectionProps) {
  return (
    <Tag
      className={`relative overflow-hidden ${sizeMap[size]} ${bgMap[background]} ${className}`}
      style={{ ...getBgStyle(background), ...style }}
      {...rest}
    >
      {/* Верхняя линия-разделитель */}
      {divider && (
        <div
          className="absolute top-0 inset-x-0 h-px"
          style={{ background: 'var(--border-default)' }}
          aria-hidden="true"
        />
      )}

      {/* Сетка + акцентная линия сверху */}
      {glow && (
        <>
          <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden="true" />
          <div
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-40"
            style={{ background: 'var(--color-brand-500)' }}
            aria-hidden="true"
          />
        </>
      )}

      {/* Основной контент (w-full — иначе во flex-секциях контент сжимается и уезжает влево) */}
      <div className="relative z-10 w-full">{children}</div>
    </Tag>
  )
}

// ─── Usage ───────────────────────────────────────────────────────────────────
//
// <Section>...</Section>
// <Section as="div" size="sm" background="surface">...</Section>
// <Section background="brand" glow divider>...</Section>
// <Section as="header" size="xl" background="dark" glow>...</Section>
//
// ─────────────────────────────────────────────────────────────────────────────
