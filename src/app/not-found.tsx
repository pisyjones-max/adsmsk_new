import Section   from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import Button    from '@/components/ui/Button'

export default function NotFound() {
  return (
    <Section as="main" size="xl" background="dark" glow className="min-h-screen flex items-center">
      <Container centered>
        <p
          className="text-8xl font-extrabold mb-4 tracking-tight"
          style={{ color: 'var(--color-brand-500)', lineHeight: 1 }}
        >
          404
        </p>
        <h1 className="heading-2 mb-4">Страница не найдена</h1>
        <p className="text-lg mb-10" style={{ color: 'var(--text-secondary)' }}>
          Возможно, она была перемещена или удалена.
        </p>
        <Button href="/" size="lg">На главную</Button>
      </Container>
    </Section>
  )
}
