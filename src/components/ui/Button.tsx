import { forwardRef, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import Link from 'next/link'

// ─── Types ──────────────────────────────────────────────────────────────────

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
type ButtonSize    = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface ButtonBaseProps {
  variant?:   ButtonVariant
  size?:      ButtonSize
  loading?:   boolean
  iconLeft?:  React.ReactNode
  iconRight?: React.ReactNode
  fullWidth?: boolean
  className?: string
  children?:  React.ReactNode
}

type ButtonProps = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined
}
type ButtonLinkProps = ButtonBaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  external?: boolean
}

type Props = ButtonProps | ButtonLinkProps

// ─── Style Maps ─────────────────────────────────────────────────────────────

const variantClasses: Record<ButtonVariant, string> = {
  primary:   'btn-primary',
  secondary: 'btn-secondary',
  ghost:     'btn-ghost',
  danger:    'btn-danger',
}

const sizeClasses: Record<ButtonSize, string> = {
  xs: 'btn-xs',
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
  xl: 'btn-xl',
}

// ─── Spinner ────────────────────────────────────────────────────────────────

const Spinner = () => (
  <svg
    className="animate-spin h-4 w-4 shrink-0"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
    />
  </svg>
)

// ─── Component ──────────────────────────────────────────────────────────────

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  (props, ref) => {
    const {
      variant   = 'primary',
      size      = 'md',
      loading   = false,
      iconLeft,
      iconRight,
      fullWidth = false,
      className = '',
      children,
      ...rest
    } = props

    const classes = [
      variantClasses[variant],
      sizeClasses[size],
      fullWidth ? 'w-full' : '',
      loading   ? 'pointer-events-none opacity-75' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    const content = (
      <>
        {loading ? <Spinner /> : iconLeft && (
          <span className="shrink-0 icon-wrap" aria-hidden="true">
            {iconLeft}
          </span>
        )}
        {children && <span>{children}</span>}
        {!loading && iconRight && (
          <span className="shrink-0 icon-wrap" aria-hidden="true">
            {iconRight}
          </span>
        )}
      </>
    )

    // Render as <a> via Next Link
    if ('href' in rest && rest.href !== undefined) {
      const { href, external, ...anchorRest } = rest as ButtonLinkProps

      if (external) {
        return (
          <a
            ref={ref as React.ForwardedRef<HTMLAnchorElement>}
            href={href}
            className={classes}
            target="_blank"
            rel="noopener noreferrer"
            {...anchorRest}
          >
            {content}
          </a>
        )
      }

      return (
        <Link
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...(anchorRest as Record<string, unknown>)}
        >
          {content}
        </Link>
      )
    }

    // Render as <button>
    const { ...buttonRest } = rest as ButtonProps
    return (
      <button
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
        className={classes}
        disabled={(buttonRest as ButtonHTMLAttributes<HTMLButtonElement>).disabled || loading}
        {...buttonRest}
      >
        {content}
      </button>
    )
  },
)

Button.displayName = 'Button'

export default Button

// ─── Usage Examples ──────────────────────────────────────────────────────────
//
// <Button>Связаться</Button>
// <Button variant="secondary" size="lg">Узнать цену</Button>
// <Button variant="ghost" size="sm">Подробнее</Button>
// <Button loading>Отправляем...</Button>
// <Button href="/services">Все услуги</Button>
// <Button href="https://t.me/adsmsk" external variant="secondary">Telegram</Button>
// <Button fullWidth>Заказать звонок</Button>
//
// ─────────────────────────────────────────────────────────────────────────────
