import { HTMLAttributes, ReactNode } from 'react'
import Image from 'next/image'

// ─── Base Card ───────────────────────────────────────────────────────────────

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** hoverable — добавляет lift-эффект при наведении */
  hoverable?: boolean
  /** glass — стеклянный эффект (для тёмного фона) */
  glass?:     boolean
  /** padding preset */
  padding?:   'none' | 'sm' | 'md' | 'lg'
  className?: string
  children:   ReactNode
}

const paddingMap = {
  none: '',
  sm:   'p-4',
  md:   'p-6',
  lg:   'p-8',
}

export function Card({
  hoverable = false,
  glass     = false,
  padding   = 'md',
  className = '',
  children,
  ...rest
}: CardProps) {
  const base = glass
    ? 'card-glass'
    : hoverable
      ? 'card-hoverable'
      : 'card-base'

  return (
    <div
      className={`${base} ${paddingMap[padding]} ${className}`}
      {...rest}
    >
      {children}
    </div>
  )
}

// ─── Service Card ────────────────────────────────────────────────────────────

interface ServiceCardProps {
  icon:        ReactNode
  title:       string
  description: string
  /** Список пунктов включённых услуг */
  features?:   string[]
  /** CTA label */
  cta?:        string
  onCtaClick?: () => void
  className?:  string
}

export function ServiceCard({
  icon,
  title,
  description,
  features,
  cta,
  onCtaClick,
  className = '',
}: ServiceCardProps) {
  return (
    <Card
      hoverable
      className={`group flex flex-col gap-5 ${className}`}
    >
      {/* Icon */}
      <div className="icon-wrap-md icon-wrap-brand transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      {/* Title */}
      <div>
        <h3 className="heading-4 mb-2">{title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {description}
        </p>
      </div>

      {/* Features list */}
      {features && features.length > 0 && (
        <ul className="flex flex-col gap-2 mt-1">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <svg
                className="w-4 h-4 shrink-0 mt-0.5"
                style={{ color: 'var(--color-brand-500)' }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {f}
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      {cta && (
        <div className="mt-auto pt-2">
          <button
            onClick={onCtaClick}
            className="btn-ghost btn-sm group-hover:text-brand-400 transition-colors px-0"
          >
            {cta}
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </Card>
  )
}

// ─── Case Card (кейс / портфолио) ────────────────────────────────────────────

interface CaseCardProps {
  image?:      string
  imageAlt?:   string
  category:    string
  title:       string
  result:      string
  resultLabel?: string
  tags?:       string[]
  href?:       string
  className?:  string
}

export function CaseCard({
  image,
  imageAlt = '',
  category,
  title,
  result,
  resultLabel = 'Результат',
  tags,
  href,
  className = '',
}: CaseCardProps) {
  const Wrapper = href ? 'a' : 'div'
  const wrapperProps = href
    ? { href, className: 'group block' }
    : { className: 'group' }

  return (
    // @ts-ignore — dynamic tag
    <Wrapper {...wrapperProps}>
      <Card hoverable className={`overflow-hidden p-0 ${className}`}>
        {/* Image */}
        {image && (
          <div className="relative w-full aspect-video overflow-hidden bg-neutral-800">
            <Image
              src={image}
              alt={imageAlt || title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Category badge */}
            <div className="absolute top-3 left-3">
              <span className="badge-brand">{category}</span>
            </div>
          </div>
        )}

        <div className="p-6 flex flex-col gap-4">
          {/* Title */}
          <h3 className="heading-4 text-balance">{title}</h3>

          {/* Result highlight */}
          <div className="flex items-start gap-3 rounded-xl p-4"
               style={{ background: 'rgba(102,64,255,0.08)', borderLeft: '3px solid var(--color-brand-500)' }}>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider mb-1"
                 style={{ color: 'var(--color-brand-400)' }}>
                {resultLabel}
              </p>
              <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                {result}
              </p>
            </div>
          </div>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag, i) => (
                <span key={i} className="badge-neutral">{tag}</span>
              ))}
            </div>
          )}
        </div>
      </Card>
    </Wrapper>
  )
}

// ─── Review Card (отзыв) ──────────────────────────────────────────────────────

interface ReviewCardProps {
  text:        string
  author:      string
  company?:    string
  avatar?:     string
  rating?:     1 | 2 | 3 | 4 | 5
  className?:  string
}

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    className={`w-4 h-4 ${filled ? '' : 'opacity-25'}`}
    style={{ color: filled ? '#f59e0b' : 'currentColor' }}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

export function ReviewCard({
  text,
  author,
  company,
  avatar,
  rating = 5,
  className = '',
}: ReviewCardProps) {
  return (
    <Card className={`flex flex-col gap-4 ${className}`}>
      {/* Quote icon */}
      <svg
        className="w-8 h-8 shrink-0"
        style={{ color: 'var(--color-brand-500)', opacity: 0.6 }}
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.748-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.966z" />
      </svg>

      {/* Rating */}
      {rating && (
        <div className="flex gap-0.5" role="img" aria-label={`${rating} из 5 звёзд`}>
          {[1, 2, 3, 4, 5].map((s) => (
            <StarIcon key={s} filled={s <= rating} />
          ))}
        </div>
      )}

      {/* Text */}
      <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
        {text}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: 'var(--border-default)' }}>
        {avatar ? (
          <Image
            src={avatar}
            alt={author}
            width={40}
            height={40}
            className="rounded-full object-cover shrink-0"
          />
        ) : (
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
               style={{ background: 'var(--color-brand-800)', color: 'var(--color-brand-300)' }}>
            {author.charAt(0).toUpperCase()}
          </div>
        )}
        <div>
          <p className="text-sm font-semibold leading-tight" style={{ color: 'var(--text-primary)' }}>
            {author}
          </p>
          {company && (
            <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
              {company}
            </p>
          )}
        </div>
      </div>
    </Card>
  )
}

export default Card
