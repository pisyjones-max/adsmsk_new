'use client'

import { useEffect, useState } from 'react'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

function getNextThursday(): Date {
  const now = new Date()
  const end = new Date(now)
  end.setDate(now.getDate() + ((4 - now.getDay() + 7) % 7))
  end.setHours(23, 59, 59, 999)
  return end
}

export default function PromoBanner() {
  const [timeLeft, setTimeLeft] = useState<string>('Загрузка...')

  useEffect(() => {
    let endDate = getNextThursday()

    const interval = setInterval(() => {
      const now = new Date()
      const remaining = endDate.getTime() - now.getTime()

      if (remaining < 0) {
        endDate = getNextThursday()
        return
      }

      const days = Math.floor(remaining / (1000 * 60 * 60 * 24))
      const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((remaining % (1000 * 60)) / 1000)

      setTimeLeft(`${days} дн. ${hours} ч. ${minutes} мин. ${seconds} сек.`)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Section background="brand" glow divider size="sm">
      <Container>
        <div
          className="rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background: 'linear-gradient(to right, var(--color-neutral-950), var(--color-brand-900))',
          }}
        >
          <div className="text-center md:text-left">
            <p
              className="text-3xl md:text-4xl font-extrabold uppercase mb-2"
              style={{ color: 'var(--color-brand-400)' }}
            >
              Акция!
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              Только до конца этой недели — <strong style={{ color: 'var(--text-primary)' }}>скидка 25%</strong> на все услуги.
            </p>
          </div>

          <div className="text-center shrink-0">
            <p className="text-sm mb-3 font-mono" style={{ color: 'var(--text-primary)' }} aria-live="polite">
              {timeLeft}
            </p>
            <Button size="lg" href="https://t.me/UR16_bot?start" external>
              Telegram
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
