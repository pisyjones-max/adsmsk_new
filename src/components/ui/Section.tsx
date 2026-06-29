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
  xs: 'py-8  md:py-10',
  sm: 'py-10 md:py-14',
  md: 'py-16 md:py-20 lg:py-24',
  lg: 'py-20 md:py-28 lg:py-32',
  xl: 'py-24 md:py-32 lg:py-40',
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
        background: 'linear-gradient(135deg, rgba(102,64,255,0.12) 0%, rgba(102,64,255,0.04) 100%)',
        borderTop: '1px solid rgba(102,64,255,0.15)',
        borderBottom: '1px solid rgba(102,64,255,0.15)',
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
      {/* Верхний декоративный разделитель */}
      {divider && (
        <div
          className="absolute top-0 inset-x-0 h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, var(--border-brand) 30%, var(--border-brand) 70%, transparent 100%)',
          }}
          aria-hidden="true"
        />
      )}

      {/* Радиальное свечение (glow) */}
      {glow && (
        <div
          className="pointer-events-none absolute -top-32 inset-x-0 h-96 opacity-40"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(102,64,255,0.3) 0%, transparent 100%)',
          }}
          aria-hidden="true"
        />
      )}

      {/* Основной контент */}
      <div className="relative z-10">{children}</div>
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
