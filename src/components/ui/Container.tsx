import { HTMLAttributes, ReactNode } from 'react'

type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'
type ContainerTag  = 'div' | 'main' | 'header' | 'footer' | 'section' | 'article'

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?:        ContainerTag
  size?:      ContainerSize
  /** Выравнивание содержимого по центру по вертикали */
  centered?:  boolean
  className?: string
  children:   ReactNode
}

const maxWidthMap: Record<ContainerSize, string> = {
  sm:   'max-w-2xl',   // ~672px
  md:   'max-w-4xl',   // ~896px
  lg:   'max-w-5xl',   // ~1024px
  xl:   'max-w-7xl',   // ~1280px — основной контейнер
  full: 'max-w-full',
}

export default function Container({
  as:       Tag    = 'div',
  size           = 'xl',
  centered       = false,
  className      = '',
  children,
  ...rest
}: ContainerProps) {
  return (
    <Tag
      className={[
        'w-full mx-auto px-4 sm:px-6 lg:px-8',
        maxWidthMap[size],
        centered ? 'flex flex-col items-center text-center' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {children}
    </Tag>
  )
}

// ─── Usage ───────────────────────────────────────────────────────────────────
//
// <Container>...</Container>
// <Container size="md">...</Container>
// <Container size="lg" centered>...</Container>
// <Container as="main" size="xl">...</Container>
//
// ─────────────────────────────────────────────────────────────────────────────
