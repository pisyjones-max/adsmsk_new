# AdsMsk Design System

> Next.js 14 + Tailwind CSS v3 — Версия 1.0.0

Документация токенов, компонентов и принципов дизайна для сайта AdsMsk.

---

## Принципы

| Принцип | Описание |
|---|---|
| **Профессионализм** | Строгая типографика, чистые отступы, без лишних декораций |
| **Доверие** | Консистентные состояния, ясные CTA, доступность из коробки |
| **Фирменность** | Фиолетовый акцент `#6640ff` — единственный цвет-аттрактор |
| **Тёмная тема** | Первична: тёмно-синий фон `#05071a`, светлая — опциональна |

---

## Цветовые токены

### Brand (фирменный фиолетовый)

| Токен | Hex | Применение |
|---|---|---|
| `brand-50`  | `#f0ecff` | Светлый фон состояний (light mode) |
| `brand-100` | `#e0d9ff` | Hover-фон в light mode |
| `brand-300` | `#a88dff` | Границы, disabled |
| `brand-400` | `#8b66ff` | Иконки, вторичный акцент |
| **`brand-500`** | **`#6640ff`** | **Основной акцент — кнопки, ссылки, активные состояния** |
| `brand-600` | `#5233cc` | Hover для primary |
| `brand-700` | `#3d2699` | Dark mode — активные границы |
| `brand-800` | `#291a66` | Dark mode — badge фон |
| `brand-900` | `#140d33` | Dark mode — card фон |

### Neutral (серая палитра)

| Токен | Hex | Применение |
|---|---|---|
| `neutral-0`   | `#ffffff` | Абсолютный белый |
| `neutral-50`  | `#f8f8fb` | Фон страницы (light) |
| `neutral-100` | `#f0f0f7` | Поверхности (light) |
| `neutral-200` | `#e2e2ed` | Границы (light) |
| `neutral-400` | `#9999b3` | Вторичный текст (dark) |
| `neutral-700` | `#33334d` | Поверхности (dark) |
| `neutral-800` | `#1e1e30` | Elevated (dark) |
| `neutral-900` | `#0f0f1e` | Основная поверхность (dark) |
| **`neutral-950`** | **`#05071a`** | **Фон страницы (dark) — совпадает с текущим сайтом** |

### Семантические токены (CSS vars)

```css
/* Автоматически переключаются при .dark классе */
--bg-page       /* Фон страницы           */
--bg-surface    /* Карточки, модалки      */
--bg-elevated   /* Inputs, dropdown       */
--text-primary  /* Основной текст         */
--text-secondary /* Вспомогательный текст */
--text-muted    /* Placeholder, disabled  */
--text-brand    /* Ссылки, акценты        */
--border-default
--border-strong
--border-brand
```

### Статусы

| Токен | Цвет | Hex |
|---|---|---|
| `success` | Зелёный | `#10b981` |
| `error`   | Красный | `#ef4444` |
| `warning` | Жёлтый  | `#f59e0b` |
| `info`    | Синий   | `#3b82f6` |

---

## Типографика

### Шрифты

| Роль | Семейство | Начертания |
|---|---|---|
| **Основной** (заголовки + текст) | Golos Text | 400, 500, 600, 700, 800 |
| **UI** (кнопки, инпуты, бейджи) | Inter | 300, 400, 500, 600, 700 |

Оба шрифта загружаются через Google Fonts с `display=swap`.

### Шкала размеров

| Класс | Размер | Межстрочный | Кернинг |
|---|---|---|---|
| `text-xs`   | 12px  | 1.5   | +0.01em |
| `text-sm`   | 14px  | 1.5   | +0.005em |
| `text-base` | 16px  | 1.6   | 0 |
| `text-lg`   | 18px  | 1.55  | 0 |
| `text-xl`   | 20px  | 1.5   | −0.01em |
| `text-2xl`  | 24px  | 1.4   | −0.015em |
| `text-3xl`  | 30px  | 1.3   | −0.02em |
| `text-4xl`  | 36px  | 1.2   | −0.025em |
| `text-5xl`  | 48px  | 1.1   | −0.03em |
| `text-6xl`  | 60px  | 1.05  | −0.035em |

### Готовые классы заголовков

```html
<h1 class="heading-display">  <!-- 60px, extrabold, tight -->
<h1 class="heading-1">        <!-- 48px, bold             -->
<h2 class="heading-2">        <!-- 36px, bold             -->
<h3 class="heading-3">        <!-- 30px, semibold         -->
<h4 class="heading-4">        <!-- 24px, semibold         -->
```

---

## Компоненты

### Button

```tsx
import Button from '@/components/ui/Button'

// Варианты
<Button variant="primary">Связаться</Button>
<Button variant="secondary">Узнать цену</Button>
<Button variant="ghost">Подробнее →</Button>
<Button variant="danger">Удалить</Button>

// Размеры: xs | sm | md (default) | lg | xl
<Button size="lg">Большая кнопка</Button>

// Состояния
<Button loading>Отправляем...</Button>
<Button disabled>Недоступно</Button>

// Как ссылка
<Button href="/services">Все услуги</Button>
<Button href="https://t.me/adsmsk" external>Telegram</Button>

// Иконки
<Button iconLeft={<PhoneIcon />}>Позвонить</Button>
<Button iconRight={<ArrowIcon />}>Далее</Button>

// Полная ширина
<Button fullWidth>Заказать звонок</Button>
```

### Card (базовая)

```tsx
import { Card } from '@/components/ui/Card'

<Card>Базовая карточка</Card>
<Card hoverable>Карточка с hover-эффектом</Card>
<Card glass>Стеклянная карточка (тёмный фон)</Card>
<Card padding="lg">Увеличенный паддинг</Card>
```

### ServiceCard (услуга)

```tsx
import { ServiceCard } from '@/components/ui/Card'

<ServiceCard
  icon={<TargetIcon />}
  title="Контекстная реклама"
  description="Яндекс Директ и Google Ads под ключ"
  features={['Настройка с нуля', 'Еженедельные отчёты', 'A/B тесты объявлений']}
  cta="Заказать"
  onCtaClick={() => openModal()}
/>
```

### CaseCard (кейс)

```tsx
import { CaseCard } from '@/components/ui/Card'

<CaseCard
  image="/cases/ecommerce.jpg"
  category="E-commerce"
  title="Интернет-магазин бытовой техники"
  result="+340% трафика за 4 месяца"
  tags={['SEO', 'Контент', 'Яндекс Директ']}
  href="/cases/ecommerce"
/>
```

### ReviewCard (отзыв)

```tsx
import { ReviewCard } from '@/components/ui/Card'

<ReviewCard
  text="Команда AdsMsk помогла нам выйти в топ по всем ключевым запросам за 3 месяца."
  author="Алексей Кузнецов"
  company="ООО «СтройМаркет»"
  rating={5}
/>
```

### Section

```tsx
import Section from '@/components/ui/Section'

<Section>...</Section>
<Section background="brand" glow divider>...</Section>
<Section as="header" size="xl" background="dark" glow>...</Section>

// Варианты фона: default | surface | elevated | brand | dark | none
// Варианты размера: xs | sm | md | lg | xl
```

### Container

```tsx
import Container from '@/components/ui/Container'

<Container>...</Container>           {/* xl = 1280px */}
<Container size="md">...</Container>  {/* 896px */}
<Container centered>...</Container>   {/* по центру */}
```

### Input / Textarea / Select

```tsx
import { Input, Textarea, Select } from '@/components/ui/index'

<Input label="Имя" placeholder="Иван Иванов" required />
<Input label="Email" type="email" error="Введите корректный email" />
<Input label="Телефон" iconLeft={<PhoneIcon />} hint="Формат: +7 (999) 000-00-00" />

<Textarea label="Сообщение" placeholder="Расскажите о вашем проекте..." rows={5} />

<Select
  label="Услуга"
  options={[
    { value: 'context', label: 'Контекстная реклама' },
    { value: 'seo', label: 'SEO-продвижение' },
  ]}
  placeholder="Выберите услугу"
/>
```

### Badge / Tag

```tsx
import { Badge } from '@/components/ui/index'

<Badge>Digital</Badge>
<Badge variant="success" dot>Активно</Badge>
<Badge variant="warning" size="sm">Скоро</Badge>
<Badge variant="neutral">SEO</Badge>
```

### Heading

```tsx
import { Heading } from '@/components/ui/index'

<Heading level={1}>Заголовок страницы</Heading>
<Heading level={2} gradient>Раздел с градиентом</Heading>
<Heading level={3} as="h2">H2 с видом h3</Heading>
```

### IconWrap

```tsx
import { IconWrap } from '@/components/ui/index'

<IconWrap size="md" variant="brand">
  <TargetIcon className="w-5 h-5" />
</IconWrap>

<IconWrap size="lg" variant="success">
  <CheckIcon className="w-6 h-6" />
</IconWrap>
```

---

## Тени

| Класс | Применение |
|---|---|
| `shadow-brand-sm` | Hover-состояние карточек |
| `shadow-brand-md` | Focus кнопок, активные элементы |
| `shadow-brand-lg` | Hero-секции, spotlight-эффекты |

---

## Градиенты

```css
bg-gradient-brand        /* 135deg фиолетовый — светло-фиолетовый */
bg-gradient-brand-dark   /* Тёмный вариант */
bg-gradient-hero         /* Тёмно-синий фон hero */
bg-gradient-card         /* Тонкий фиолетовый для карточек */
bg-gradient-radial-brand /* Радиальное свечение сверху */
```

---

## Утилиты

```css
.text-gradient-brand   /* Градиентный текст brand→light */
.glass-dark            /* Glassmorphism для тёмного фона */
.glass-light           /* Glassmorphism для светлого фона */
.section-label         /* Надпись-eyebrow с декоративной линией */
.divider               /* Горизонтальный разделитель */
.divider-brand         /* Фиолетовый короткий разделитель */
```

---

## Структура файлов

```
src/
├── styles/
│   └── globals.css              ← CSS-переменные + base + components + utilities
├── components/
│   └── ui/
│       ├── Button.tsx           ← primary / secondary / ghost / danger
│       ├── Card.tsx             ← Card / ServiceCard / CaseCard / ReviewCard
│       ├── Section.tsx          ← Обёртка секций с фоном и glow
│       ├── Container.tsx        ← Адаптивный контейнер
│       └── index.tsx            ← Badge, Input, Textarea, Select, Heading, IconWrap
tailwind.config.ts               ← Токены, шкала, тени, анимации
```

---

## Тёмная тема

Переключение через класс `.dark` на `<html>`:

```tsx
// app/layout.tsx — включить тёмную тему по умолчанию
<html lang="ru" className="dark">

// Программное переключение
document.documentElement.classList.toggle('dark')
```

Все семантические CSS-переменные (`--bg-page`, `--text-primary` и т.д.) автоматически меняются.

---

*AdsMsk Design System v1.0.0 · 2024*
