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
      className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2"
      style={{ color: 'var(--color-brand-400)' }}
    >
      {count}
      {stat.suffix}
    </p>
  )
}

export default function Stats() {
  return (
    <Section background="surface" size="sm">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
          {stats.map((s) => (
            <div key={s.label}>
              <Counter stat={s} />
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
