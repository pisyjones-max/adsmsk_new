'use client'

import { useState } from 'react'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import { Heading } from '@/components/ui/index'
import type { FaqItem } from '@/lib/services-catalog'

interface ServiceFAQProps {
  items: FaqItem[]
}

function AccordionItem({ item, isOpen, onToggle }: { item: FaqItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="card-base overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
      >
        <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>
          {item.question}
        </span>
        <svg
          className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          style={{ color: 'var(--color-brand-400)' }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function ServiceFAQ({ items }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section id="faq" background="default" divider>
      <Container size="lg">
        <div className="text-center mb-12">
          <div className="section-label justify-center mb-4">Вопросы и ответы</div>
          <Heading level={2} className="mb-4">
            Частые вопросы
          </Heading>
        </div>

        <div className="flex flex-col gap-3">
          {items.map((item, i) => (
            <AccordionItem
              key={item.question}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
