import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, service, message } = await req.json()

    const BOT_TOKEN = process.env.TG_TOKEN
    const CHAT_ID   = process.env.TG_CHAT_ID

    if (!BOT_TOKEN || !CHAT_ID) {
      // В dev-режиме просто логируем
      console.log('Contact form submission:', { name, phone, email, service, message })
      return NextResponse.json({ ok: true })
    }

    const serviceLabels: Record<string, string> = {
      context:     'Контекстная реклама',
      seo:         'SEO-продвижение',
      smm:         'SMM и таргет',
      web:         'Создание сайта',
      marketplace: 'Маркетплейсы',
      analytics:   'Аналитика и парсинг',
      other:       'Другое',
    }

    const text = [
      '📩 *Новая заявка с сайта AdsMsk*',
      '',
      `👤 *Имя:* ${escapeMarkdown(name)}`,
      `📞 *Телефон:* ${escapeMarkdown(phone)}`,
      email   ? `📧 *Email:* ${escapeMarkdown(email)}`   : null,
      service ? `🎯 *Услуга:* ${escapeMarkdown(serviceLabels[service] ?? service)}` : null,
      message ? `💬 *Сообщение:*\n${escapeMarkdown(message)}` : null,
      '',
      `🕐 ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })} МСК`,
    ]
      .filter(Boolean)
      .join('\n')

    const res = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({
          chat_id:    CHAT_ID,
          text,
          parse_mode: 'Markdown',
        }),
      },
    )

    if (!res.ok) {
      throw new Error(`Telegram API error: ${res.status}`)
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ ok: false, error: 'Internal error' }, { status: 500 })
  }
}

function escapeMarkdown(text: string): string {
  return text.replace(/[_*[\]()~`>#+=|{}.!-]/g, '\\$&')
}
