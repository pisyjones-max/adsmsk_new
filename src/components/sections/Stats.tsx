'use client'

import { useEffect, useRef, useState } from 'react'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import { stats, type StatItem } from '@/lib/services-data'

function Counter({ stat }: { stat: StatItem }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return

    const duration = 1200
    const startTime = performance.now()

    function tick(now: number) {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * stat.value))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [started, stat.value])

  return (
    <p
      ref={ref}
      className="font-mono-ui text-3xl md:text-4xl font-medium tracking-tight mb-1"
      style={{ color: 'var(--text-primary)' }}
    >
      {count}
      {stat.suffix}
    </p>
  )
}

export default function Stats() {
  return (
    <Section background="surface" size="xs" className="border-y hairline">
      <Container>
        <div className="grid grid-cols-3 divide-x" style={{ borderColor: 'var(--border-default)' }}>
          {stats.map((s) => (
            <div key={s.label} className="px-3 sm:px-8 py-2 text-left" style={{ borderColor: 'var(--border-default)' }}>
              <Counter stat={s} />
              <p className="text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
