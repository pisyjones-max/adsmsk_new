import { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, ReactNode, HTMLAttributes, forwardRef } from 'react'

// ─── Badge / Tag ─────────────────────────────────────────────────────────────

type BadgeVariant = 'brand' | 'success' | 'error' | 'warning' | 'neutral' | 'info'
type BadgeSize    = 'sm' | 'md'

interface BadgeProps {
  variant?:  BadgeVariant
  size?:     BadgeSize
  dot?:      boolean
  className?: string
  children:  ReactNode
}

const badgeVariantMap: Record<BadgeVariant, string> = {
  brand:   'badge-brand',
  success: 'badge-success',
  error:   'badge-error',
  warning: 'badge-warning',
  neutral: 'badge-neutral',
  info:    'bg-blue-950 text-blue-300 border border-blue-900 badge-base',
}

const dotColorMap: Record<BadgeVariant, string> = {
  brand:   'bg-brand-400',
  success: 'bg-emerald-400',
  error:   'bg-red-400',
  warning: 'bg-amber-400',
  neutral: 'bg-neutral-400',
  info:    'bg-blue-400',
}

export function Badge({
  variant   = 'brand',
  size      = 'md',
  dot       = false,
  className = '',
  children,
}: BadgeProps) {
  return (
    <span
      className={[
        badgeVariantMap[variant],
        size === 'sm' ? 'text-[10px] px-2 py-0.5' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${dotColorMap[variant]}`}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  )
}

// ─── Input ───────────────────────────────────────────────────────────────────

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?:       string
  hint?:        string
  error?:       string
  success?:     string
  iconLeft?:    ReactNode
  iconRight?:   ReactNode
  containerClassName?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      hint,
      error,
      success,
      iconLeft,
      iconRight,
      containerClassName = '',
      className          = '',
      id,
      ...rest
    },
    ref,
  ) => {
    const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)

    const stateClass = error
      ? 'input-error'
      : success
        ? 'input-success'
        : ''

    return (
      <div className={`flex flex-col gap-1.5 ${containerClassName}`}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium"
            style={{ color: 'var(--text-primary)' }}
          >
            {label}
            {rest.required && (
              <span className="ml-1" style={{ color: 'var(--color-error)' }} aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}

        <div className="relative">
          {iconLeft && (
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                 style={{ color: 'var(--text-muted)' }}
                 aria-hidden="true">
              {iconLeft}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            className={[
              'input-base',
              iconLeft  ? 'pl-10' : '',
              iconRight ? 'pr-10' : '',
              stateClass,
              className,
            ]
              .filter(Boolean)
              .join(' ')}
            aria-invalid={!!error}
            aria-describedby={
              error   ? `${inputId}-error`
              : hint  ? `${inputId}-hint`
              : undefined
            }
            {...rest}
          />

          {iconRight && (
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                 style={{ color: 'var(--text-muted)' }}
                 aria-hidden="true">
              {iconRight}
            </div>
          )}
        </div>

        {error && (
          <p id={`${inputId}-error`} className="text-xs" style={{ color: 'var(--color-error)' }} role="alert">
            {error}
          </p>
        )}
        {success && !error && (
          <p className="text-xs" style={{ color: 'var(--color-success)' }}>
            {success}
          </p>
        )}
        {hint && !error && !success && (
          <p id={`${inputId}-hint`} className="text-xs" style={{ color: 'var(--text-muted)' }}>
            {hint}
          </p>
        )}
      </div>
    )
  },
)
Input.displayName = 'Input'

// ─── Textarea ────────────────────────────────────────────────────────────────

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?:     string
  hint?:      string
  error?:     string
  containerClassName?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, hint, error, containerClassName = '', className = '', id, ...rest }, ref) => {
    const inputId    = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)
    const stateClass = error ? 'input-error' : ''

    return (
      <div className={`flex flex-col gap-1.5 ${containerClassName}`}>
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
            {label}
            {rest.required && (
              <span className="ml-1" style={{ color: 'var(--color-error)' }} aria-hidden="true">*</span>
            )}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          rows={rest.rows ?? 4}
          className={`input-base resize-y ${stateClass} ${className}`}
          aria-invalid={!!error}
          {...rest}
        />
        {error && (
          <p className="text-xs" style={{ color: 'var(--color-error)' }} role="alert">{error}</p>
        )}
        {hint && !error && (
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{hint}</p>
        )}
      </div>
    )
  },
)
Textarea.displayName = 'Textarea'

// ─── Select ──────────────────────────────────────────────────────────────────

interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?:     string
  hint?:      string
  error?:     string
  options:    SelectOption[]
  placeholder?: string
  containerClassName?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, hint, error, options, placeholder, containerClassName = '', className = '', id, ...rest }, ref) => {
    const inputId    = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)
    const stateClass = error ? 'input-error' : ''

    return (
      <div className={`flex flex-col gap-1.5 ${containerClassName}`}>
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={inputId}
            className={`input-base appearance-none pr-10 cursor-pointer ${stateClass} ${className}`}
            aria-invalid={!!error}
            {...rest}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))}
          </select>
          {/* Chevron */}
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" aria-hidden="true"
               style={{ color: 'var(--text-muted)' }}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {error && <p className="text-xs" style={{ color: 'var(--color-error)' }} role="alert">{error}</p>}
        {hint && !error && <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{hint}</p>}
      </div>
    )
  },
)
Select.displayName = 'Select'

// ─── Heading ─────────────────────────────────────────────────────────────────

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?:     HeadingLevel
  /** Визуальный размер (если нужно разорвать семантику и визуал) */
  as?:        `h${HeadingLevel}`
  gradient?:  boolean
  className?: string
  children:   ReactNode
}

const headingStyleMap: Record<HeadingLevel, string> = {
  1: 'heading-1',
  2: 'heading-2',
  3: 'heading-3',
  4: 'heading-4',
  5: 'text-xl font-semibold',
  6: 'text-lg font-semibold',
}

export function Heading({
  level     = 2,
  as,
  gradient  = false,
  className = '',
  children,
  ...rest
}: HeadingProps) {
  const Tag = (as ?? `h${level}`) as keyof JSX.IntrinsicElements

  return (
    // @ts-ignore
    <Tag
      className={[
        headingStyleMap[level],
        gradient ? 'text-gradient-brand' : '',
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

// ─── Icon Wrapper ─────────────────────────────────────────────────────────────

type IconSize    = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type IconVariant = 'brand' | 'neutral' | 'success' | 'error' | 'warning' | 'plain'

interface IconWrapProps {
  size?:      IconSize
  variant?:   IconVariant
  rounded?:   boolean
  className?: string
  children:   ReactNode
}

const iconSizeMap: Record<IconSize, string> = {
  xs: 'w-6  h-6  rounded-md',
  sm: 'w-8  h-8  rounded-lg',
  md: 'w-11 h-11 rounded-xl',
  lg: 'w-14 h-14 rounded-2xl',
  xl: 'w-18 h-18 rounded-2xl',
}

const iconVariantStyle: Record<IconVariant, React.CSSProperties> = {
  brand:   { background: 'rgba(102,64,255,0.12)', color: 'var(--color-brand-400)' },
  neutral: { background: 'var(--bg-elevated)',    color: 'var(--text-secondary)' },
  success: { background: 'rgba(16,185,129,0.12)', color: 'var(--color-success)' },
  error:   { background: 'rgba(239,68,68,0.12)',  color: 'var(--color-error)' },
  warning: { background: 'rgba(245,158,11,0.12)', color: 'var(--color-warning)' },
  plain:   {},
}

export function IconWrap({
  size      = 'md',
  variant   = 'brand',
  className = '',
  children,
}: IconWrapProps) {
  return (
    <span
      className={`icon-wrap shrink-0 ${iconSizeMap[size]} ${className}`}
      style={iconVariantStyle[variant]}
      aria-hidden="true"
    >
      {children}
    </span>
  )
}
