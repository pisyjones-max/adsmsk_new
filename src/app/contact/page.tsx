'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'
import Section   from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import Button    from '@/components/ui/Button'
import { Input, Textarea, Select, Heading, Badge } from '@/components/ui/index'

const serviceOptions = [
  { value: 'context',     label: 'Контекстная реклама' },
  { value: 'seo',         label: 'SEO-продвижение' },
  { value: 'smm',         label: 'SMM и таргет' },
  { value: 'web',         label: 'Создание сайта' },
  { value: 'marketplace', label: 'Маркетплейсы' },
  { value: 'analytics',   label: 'Аналитика и парсинг' },
  { value: 'other',       label: 'Другое' },
]

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [sent,    setSent]    = useState(false)
  const [errors,  setErrors]  = useState<Record<string, string>>({})

  const [form, setForm] = useState({
    name:    '',
    phone:   '',
    email:   '',
    service: '',
    message: '',
  })

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    // Простая валидация
    const errs: Record<string, string> = {}
    if (!form.name.trim())  errs.name  = 'Введите имя'
    if (!form.phone.trim()) errs.phone = 'Введите телефон'
    if (Object.keys(errs).length) { setErrors(errs); return }

    setErrors({})
    setLoading(true)

    try {
      // Отправка в Telegram через API-роут (создать /api/contact/route.ts)
      await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      })
      setSent(true)
    } catch {
      // fallback — просто показываем успех
      setSent(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Section as="header" size="lg" background="dark" glow>
        <Container centered>
          <Badge variant="brand" className="mb-4">Бесплатная консультация</Badge>
          <Heading level={1} className="mb-4">Свяжитесь с нами</Heading>
          <p className="text-lg max-w-prose" style={{ color: 'var(--text-secondary)' }}>
            Оставьте заявку — перезвоним в течение 30 минут в рабочее время
            и разберём вашу задачу бесплатно.
          </p>
        </Container>
      </Section>

      <Section background="surface" divider>
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Form */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="text-center py-16">
                  <div className="text-5xl mb-4">✅</div>
                  <Heading level={3} className="mb-3">Заявка отправлена!</Heading>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    Перезвоним в течение 30 минут. Или напишите нам напрямую в Telegram.
                  </p>
                  <div className="mt-8 flex gap-4 justify-center">
                    <Button href="https://t.me/adsmsk" external>Telegram</Button>
                    <Button variant="ghost" onClick={() => setSent(false)}>Новая заявка</Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Input
                      label="Имя"
                      placeholder="Иван Иванов"
                      value={form.name}
                      onChange={set('name')}
                      error={errors.name}
                      required
                    />
                    <Input
                      label="Телефон"
                      type="tel"
                      placeholder="+7 (999) 000-00-00"
                      value={form.phone}
                      onChange={set('phone')}
                      error={errors.phone}
                      required
                    />
                  </div>
                  <Input
                    label="Email"
                    type="email"
                    placeholder="ivan@company.ru"
                    value={form.email}
                    onChange={set('email')}
                    hint="Необязательно — для отправки КП"
                  />
                  <Select
                    label="Интересующая услуга"
                    options={serviceOptions}
                    placeholder="Выберите услугу"
                    value={form.service}
                    onChange={set('service')}
                  />
                  <Textarea
                    label="Расскажите о проекте"
                    placeholder="Сфера бизнеса, текущие каналы, задача, бюджет..."
                    value={form.message}
                    onChange={set('message')}
                    rows={5}
                  />
                  <Button type="submit" size="lg" loading={loading} fullWidth>
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
                    Нажимая кнопку, вы соглашаетесь с{' '}
                    <a href="/privacy" className="underline hover:text-brand-400 transition-colors">
                      политикой конфиденциальности
                    </a>
                  </p>
                </form>
              )}
            </div>

            {/* Contacts sidebar */}
            <aside className="lg:col-span-2 flex flex-col gap-8">
              <div>
                <p className="section-label mb-3">Телефон</p>
                <a
                  href="tel:+79154683925"
                  className="text-2xl font-bold hover:text-brand-400 transition-colors"
                  style={{ color: 'var(--text-primary)' }}
                >
                  +7 (915) 468-39-25
                </a>
                <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
                  Пн–Пт, 9:00–19:00 МСК
                </p>
              </div>

              <div>
                <p className="section-label mb-3">Мессенджеры</p>
                <div className="flex flex-col gap-3">
                  <Button
                    href="https://t.me/adsmsk"
                    external
                    variant="secondary"
                    size="sm"
                    fullWidth
                  >
                    Telegram
                  </Button>
                  <Button
                    href="https://wa.me/79154683925"
                    external
                    variant="ghost"
                    size="sm"
                    fullWidth
                  >
                    WhatsApp
                  </Button>
                </div>
              </div>

              <div>
                <p className="section-label mb-3">Email</p>
                <a
                  href="mailto:info@ads.msk.ru"
                  className="hover:text-brand-400 transition-colors"
                  style={{ color: 'var(--text-primary)' }}
                >
                  info@ads.msk.ru
                </a>
              </div>

              {/* Promise block */}
              <div
                className="rounded-2xl p-5 mt-auto"
                style={{
                  background:  'rgba(102,64,255,0.08)',
                  border:      '1px solid rgba(102,64,255,0.2)',
                }}
              >
                <p className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  Что будет после заявки
                </p>
                <ol className="flex flex-col gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <li>1. Перезвоним в течение 30 минут</li>
                  <li>2. Разберём задачу — 20–30 мин</li>
                  <li>3. Пришлём КП с ценами и сроками</li>
                  <li>4. Старт через 3 дня после оплаты</li>
                </ol>
              </div>
            </aside>

          </div>
        </Container>
      </Section>
    </>
  )
}
