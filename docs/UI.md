# UI Design Spec — AdsMsk (Next.js 14 / Tailwind)

Документ описывает визуальное решение всех ключевых страниц на базе уже существующей дизайн-системы (`tailwind.config.ts`, `src/styles/globals.css`, `src/components/ui/*`). Все классы ниже — реальные утилиты/компоненты проекта, ничего не придумано "поверх".

## 0. Дизайн-система — сводка (на чём всё строится)

- **Акцент:** `brand-500 #6640ff`, фон тёмный (`neutral-950 #05071a` — `--bg-page` в `.dark`), карточки на `--bg-surface`.
- **Шрифты:** заголовки — `font-sans` (Golos Text), UI/цифры — `font-ui` (Inter).
- **Готовые классы:** `.container-ads`, `.section-ads`, `.heading-display/1/2/3/4`, `.section-label`, `.btn-primary/secondary/ghost`, `.card-base/.card-hoverable/.card-glass`, `.badge-*`, `.icon-wrap-md.icon-wrap-brand`, `.text-gradient-brand`, `.divider-brand`.
- **Готовые React-компоненты:** `<Section>`, `<Container>`, `<Button>`, `<Card>`, `<ServiceCard>`, `<CaseCard>`, `<ReviewCard>`, `<Heading>`, `<Badge>`, `<IconWrap>`, `<Input>/<Textarea>/<Select>`.
- **Принцип:** новый UI не изобретает классы — компонует существующие примитивы в новых композициях. Это даёт визуальную целостность без шаблонности (за счёт асимметричных сеток, glow-фонов, наклонных разделителей и нестандартной компоновки секций).

Не-шаблонность достигается тремя приёмами, использующимися по всему сайту:
1. **Asymmetric grid** — сетки с разной шириной колонок (например, 7/5 или 8/4) вместо равных 50/50.
2. **Brand glow + grain** — радиальные фиолетовые свечения (`background="brand"`, `glow`) на стыках секций вместо плоских заливок.
3. **Editorial number/label system** — крупные технические числа (01, 02…) и `.section-label` как визуальный якорь, заменяющий банальные иконки-в-кружочках.

---

## 1. Header (общий для всех страниц)

Sticky, `position: sticky top-0 z-50`, высота 72px (`h-18`), фон `glass-dark` после скролла (JS-класс `scrolled` добавляет `backdrop-blur` + `border-b border-neutral-800`), до скролла — прозрачный поверх hero.

```
<header class="sticky top-0 z-50 transition-all duration-300 glass-dark">
  <div class="container-ads flex items-center justify-between h-18">
    <Logo />                                  // SVG, 32px высота, hover: brand-400 glow
    <nav class="hidden lg:flex items-center gap-8 font-ui text-sm font-medium">
       Услуги · Кейсы · Команда · Контакты      // text-neutral-300 hover:text-white, active: text-brand-400 + 2px underline brand
    </nav>
    <div class="hidden lg:flex items-center gap-4">
       <a href="tel:..." class="text-sm font-ui text-neutral-300 hover:text-white">+7 ...</a>
       <Button size="sm">Обсудить проект</Button>
    </div>
    <button class="lg:hidden btn-icon" aria-label="Меню">☰</button>   // burger, neutral-300
  </div>
</header>
```

**Mobile (≤1024px):** burger открывает full-screen overlay (`fixed inset-0 z-50 bg-neutral-950/98 backdrop-blur-xl`), пункты меню — `text-3xl font-bold` по центру вертикально, снизу — `<Button fullWidth>` + иконки мессенджеров. Анимация: `animate-fade-in` + stagger через `.animate-delay-100..400`.

---

## 2. Footer (общий)

`background="dark"`, `pt-16 pb-8`, верхний `divider` (градиентная линия).

```
<Section as="footer" background="dark" size="md">
  <Container>
    <div class="grid grid-cols-1 md:grid-cols-12 gap-10">
      <div class="md:col-span-4">
        Logo + 1 строка позиционирования + соцсети (иконки в icon-wrap-sm, hover:bg-brand-500)
      </div>
      <div class="md:col-span-2">Услуги — список ссылок text-sm text-neutral-400 hover:text-white</div>
      <div class="md:col-span-2">Компания — О нас / Кейсы / Команда / Контакты</div>
      <div class="md:col-span-4">
        Реквизиты (ИП/ООО, ИНН) text-xs text-neutral-500
        Контакты: телефон/email/адрес, мессенджеры-бейджи (badge-neutral)
      </div>
    </div>
    <div class="divider"></div>
    <div class="flex flex-col sm:flex-row justify-between text-xs text-neutral-500">
      © AdsMsk {year}. Все права защищены. · Политика конфиденциальности
    </div>
  </Container>
</Section>
```

**Mobile:** колонки складываются в один столбец, между блоками `gap-8`, соцсети и реквизиты — по центру.

---

## 3. Главная — `/`

Порядок секций строго такой:

### 3.1 Hero
`<Section as="header" size="xl" background="dark" glow>` — занимает почти весь первый экран (`min-h-[88vh] flex items-center` на desktop, `min-h-[70vh]` на mobile).

- Фоновый элемент: декоративная SVG-сетка из тонких линий + 2 размытых брендовых blob (`absolute`, `blur-3xl`, `bg-brand-500/20`, `rounded-full`), плюс `radial-gradient` уже встроен в `glow`-проп `<Section>`.
- `.section-label`: "DIGITAL-АГЕНТСТВО ПОЛНОГО ЦИКЛА"
- `<h1 class="heading-display text-balance max-w-4xl">` — "Digital-маркетинг, который <span class="text-gradient-brand">считают в деньгах</span>, а не в лайках"
- Подзаголовок: `<p class="text-lg md:text-xl text-secondary max-w-2xl mt-6">` 
- CTA-блок: `flex flex-col sm:flex-row gap-4 mt-10` → `<Button size="xl">Обсудить проект</Button>` + `<Button variant="secondary" size="xl">Смотреть кейсы</Button>`
- Под CTA — строка доверия: `flex items-center gap-6 mt-12 text-xs text-neutral-500` с мини-статами (200+ проектов · 8 лет · 94% продлевают), разделёнными `divider-brand` вертикальными штрихами.

**Mobile:** заголовок `text-4xl` (вместо `text-6xl`), кнопки full-width в столбик, blob-фон уменьшен/скрыт по краям (`overflow-hidden` уже на Section), мини-статы переходят в горизонтальный скролл `flex overflow-x-auto gap-4 -mx-4 px-4`.

### 3.2 Services grid
`<Section size="md">`, `.section-label` "ЧТО МЫ ДЕЛАЕМ" → `<h2 class="heading-2 mt-3 max-w-2xl">`.

Сетка: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12` из 6 `<ServiceCard>` (иконка/заголовок/описание/3 фичи/ghost-CTA "Подробнее →" — компонент уже готов, просто передать данные). Карточки `hoverable` (lift + brand-glow тень из коробки).

**Mobile:** `grid-cols-1`, карточки full width, `gap-4`.

### 3.3 Social proof (счётчики)
`<Section size="sm" background="brand">` (фирменный полупрозрачный фон с верх/низ бордером — уже встроенный вариант Section).

`grid grid-cols-2 lg:grid-cols-4 gap-8 text-center` — 4 стата:
```
<p class="heading-display text-gradient-brand">200+</p>
<p class="text-sm text-neutral-400 mt-2">проектов запущено</p>
```
Числа анимируются count-up при попадании в viewport (IntersectionObserver, без либ — простой JS).

**Mobile:** `grid-cols-2` сохраняется (2×2), `gap-6`, числа `text-4xl` вместо `text-6xl`.

### 3.4 Cases — слайдер кейсов
`<Section size="md">`, `.section-label` "РЕЗУЛЬТАТЫ" → `heading-2`.

Горизонтальный slider: `flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 lg:overflow-visible lg:grid lg:grid-cols-3` — на десктопе превращается в статичную сетку 3 колонки, на мобиле/планшете — свайп-карусель со snap. Каждая карточка — `<CaseCard>` (`w-[85%] sm:w-[60%] lg:w-auto shrink-0 snap-center`), уже включает фото/категорию/результат-highlight/теги.

Под слайдером — dot-индикаторы только на mobile (`flex justify-center gap-2 mt-4 lg:hidden`, активная точка `bg-brand-500`, остальные `bg-neutral-700`).

Завершающий элемент сетки/слайдера — карточка-CTA "Смотреть все кейсы →" в стиле `card-base` с центрированной стрелкой, ведущая на `/cases`.

### 3.5 Testimonials
`<Section size="md" background="surface">`.

`grid grid-cols-1 lg:grid-cols-3 gap-6` из `<ReviewCard>` (компонент готов: звёзды/текст/автор/компания). На desktop — обычная сетка; на mobile — тот же snap-scroll паттерн, что у кейсов, для единообразия взаимодействия.

### 3.6 CTA-секция (финальный призыв)
`<Section size="lg" background="dark" glow divider>` — закрывающий, самый контрастный блок перед футером.

Центрированный контент (`<Container centered>`):
- `.section-label` "НАЧНЁМ?"
- `<h2 class="heading-1 max-w-2xl">` "Получите расчёт стоимости продвижения за 24 часа"
- `<p class="text-secondary max-w-xl mt-4">` короткая поддержка
- `flex flex-col sm:flex-row gap-4 mt-8` → `<Button size="xl">Оставить заявку</Button>` + `<Button variant="ghost" size="xl" href="https://t.me/...">Написать в Telegram</Button>`
- Фон: те же brand-blob'ы, что в hero, но зеркально — создаёт визуальную рифму "открыли блобом — закрыли блобом".

**Mobile:** всё то же, кнопки в столбик full-width, padding снижен до `size="md"` через override.

---

## 4. `/uslugi` — Каталог услуг

### 4.1 Hero услуг (компактный, не full-screen)
`<Section size="sm" background="dark" glow>`. `.section-label` "УСЛУГИ" → `heading-1` "Что мы делаем и сколько это стоит" + короткий подзаголовок. Высота ~40vh, без CTA-кнопок (CTA только в конце страницы).

### 4.2 Filter bar
Sticky под header (`sticky top-18 z-40 bg-surface/90 backdrop-blur border-b border-default py-4`).

`flex gap-3 overflow-x-auto` — chips-фильтры по категориям (Реклама / SEO / SMM / Сайты / Маркетплейсы / Аналитика), каждый `badge-neutral`, активный — `badge-brand`. На клик — фильтрация грид без перезагрузки (client component, `useState`).

**Mobile:** тот же горизонтальный скролл, `-mx-4 px-4`, чтобы chips не обрезались.

### 4.3 Services grid (filtered)
`<Section size="md">` → `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`, те же `<ServiceCard>`, но CTA ведёт на `/uslugi/[slug]` (не ghost-stub, реальная ссылка). При смене фильтра — `animate-fade-in` на карточках, отфильтрованные карточки скрываются плавно (`transition-opacity`).

Если фильтр даёт пустой результат — заглушка по центру: иконка + "Ничего не найдено, посмотрите все услуги" + ghost-кнопка сброса.

### 4.4 Закрывающий CTA
Тот же блок 3.6 (переиспользуемый компонент `<CtaSection>`), текст адаптирован под услуги: "Не нашли нужную услугу? Обсудим индивидуально".

---

## 5. `/uslugi/[slug]` — Страница услуги

### 5.1 Hero услуги
`<Section size="md" background="dark" glow>`. Двухколоночный grid на desktop (`grid lg:grid-cols-12 gap-10 items-center`):
- Левая колонка (`lg:col-span-7`): breadcrumbs (`text-xs text-neutral-500` Главная / Услуги / [Название]) → `.section-label` категория → `heading-1` название услуги → короткое УТП-описание → `flex gap-4 mt-8` CTA "Оставить заявку" (primary) + "Цены" (ghost, якорная ссылка на блок цен).
- Правая колонка (`lg:col-span-5`): декоративная карточка-визуализация — крупная иконка услуги в `icon-wrap` 96px на `glass-dark` карточке + 2-3 быстрых факта (badge-brand "Срок: от 7 дней" и т.п.), создаёт asymmetric композицию вместо плоского hero.

**Mobile:** колонки складываются, правая карточка уходит под текст, `mt-8`.

### 5.2 Описание
`<Section size="sm">`, `max-w-prose` (готовый Tailwind-токен из конфига) текстовый блок — что входит, для кого, какую проблему решает. Простая типографика: `heading-2` + `p text-secondary leading-relaxed`.

### 5.3 Процесс (шаги)
`<Section size="md" background="surface">`. `.section-label` "КАК МЫ РАБОТАЕМ" → `heading-2`.

Вертикальный timeline на mobile, горизонтальный на desktop:
```
<div class="grid grid-cols-1 lg:grid-cols-4 gap-8 relative mt-12">
  <!-- горизонтальная линия-коннектор только на lg -->
  <div class="hidden lg:block absolute top-6 left-0 right-0 h-px bg-neutral-800"></div>
  <div class="relative flex lg:flex-col gap-4 lg:gap-6 lg:text-center">
    <span class="icon-wrap-lg icon-wrap-brand font-bold text-xl shrink-0 z-10 bg-neutral-950">01</span>
    <div><h4 class="heading-4">Бриф и аудит</h4><p class="text-sm text-secondary mt-1">...</p></div>
  </div>
  <!-- ×4 шага -->
</div>
```
Крупные editorial-числа `01–04` — фирменный приём для избежания шаблонных "галочка в кружке".

**Mobile:** коннектор-линия скрыта, шаги — вертикальный список с `gap-8`, номер слева от текста.

### 5.4 Цены
`<Section size="md" id="pricing">`. `.section-label` "ТАРИФЫ" → `heading-2`.

`grid grid-cols-1 md:grid-cols-3 gap-6 mt-12` — 3 тарифных `<Card padding="lg" hoverable>`. Средний (рекомендуемый) тариф визуально выделен: `border-brand-500 border-2 shadow-brand-md relative` + `badge-brand` "Популярный" в `absolute -top-3 left-1/2 -translate-x-1/2`.

Внутри карточки: название тарифа → крупная цена `heading-2` "от 35 000 ₽/мес" → `divider` → список включённого (как в `ServiceCard.features`, иконка-чек brand-500) → `<Button fullWidth>` снизу (primary для рекомендуемого, secondary для остальных).

**Mobile:** `grid-cols-1`, карточки в столбик, рекомендуемая — первая по порядку (`order-first`), чтобы не терялась при скролле.

### 5.5 FAQ
`<Section size="md" background="surface">`. `.section-label` "ВОПРОСЫ" → `heading-2`.

Аккордеон, `max-w-3xl mx-auto mt-10 flex flex-col gap-3`. Каждый пункт — `<Card padding="md" className="cursor-pointer">` с `<details>`/`<summary>` либо client-component на `useState`:
```
<button class="w-full flex justify-between items-center text-left font-semibold heading-4">
  Вопрос
  <span class="transition-transform duration-200 [open]:rotate-45">+</span>
</button>
<div class="text-sm text-secondary mt-3 leading-relaxed">Ответ</div> // показывается при раскрытии, animate-fade-in
```

### 5.6 Закрывающий CTA
Переиспользуемый `<CtaSection>`, текст под конкретную услугу: "Готовы обсудить [название услуги] для вашего бизнеса?".

---

## 6. `/cases` — Кейсы

### 6.1 Hero (компактный)
Аналогично 4.1: `<Section size="sm" background="dark" glow>`, `heading-1` "Результаты, которые можно проверить" + подзаголовок + мини-статы в строку (сумма освоенного бюджета / средний рост трафика — переиспользуем формат из 3.3).

### 6.2 Filter bar (опционально, по отраслям)
Тот же паттерн chips, что в 4.2, фильтр по нише клиента (e-commerce, услуги, недвижимость, медицина...).

### 6.3 Cases grid
`<Section size="md">`. `grid grid-cols-1 md:grid-cols-2 gap-6` (крупнее, чем на главной — это основная страница кейсов, поэтому карточки шире и детальнее). Первая карточка в сетке — **featured**, занимает `md:col-span-2`, с увеличенным изображением (`aspect-[21/9]` вместо `aspect-video`) и расширенным блоком результатов (2-3 метрики в ряд вместо одной): `grid grid-cols-3 gap-3` внутри result-блока.

Остальные карточки — обычный `<CaseCard>` в 2 колонки.

**Mobile:** `grid-cols-1`, featured-карточка теряет привилегию (просто первая по порядку, та же ширина).

### 6.4 Закрывающий CTA
`<CtaSection>` — "Хотите такой же результат? Обсудим ваш проект".

---

## 7. `/komanda` — Команда

(на основе существующего `comands.html` — переносим контент, полностью меняем визуал на дизайн-систему)

### 7.1 Hero
`<Section size="sm" background="dark" glow>`. `.section-label` "КОМАНДА" → `heading-1` "Люди, которые делают результат" + короткое описание подхода агентства (не безликий аутсорс, а постоянная команда).

### 7.2 Team grid
`<Section size="md">`. `grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 mt-12`.

Карточка участника — кастомная композиция на базе `<Card hoverable padding="none">`:
```
<div class="relative aspect-[3/4] overflow-hidden rounded-2xl">
  <Image fill class="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
  <div class="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent">
    <h4 class="heading-4 text-white">Имя Фамилия</h4>
    <p class="text-xs text-brand-400 font-ui uppercase tracking-wide mt-1">Должность</p>
  </div>
</div>
```
Приём: фото в grayscale, при наведении/тапе становится цветным — добавляет интерактивности без банальных hover-теней. На mobile grayscale снят по умолчанию (так как нет hover) — определяется через `@media (hover: hover)`.

**Mobile:** `grid-cols-2`, `gap-4`, карточки чуть компактнее (`aspect-[3/4]` сохраняется).

### 7.3 Цифры/принципы команды
`<Section size="sm" background="brand">` — переиспользуем паттерн 3.3 (счётчики), но с другим набором: "12 специалистов в штате / 0 фрилансеров на аутсорсе / 5+ лет средний стаж в команде".

### 7.4 Закрывающий CTA
`<CtaSection>` — "Хотите, чтобы эта команда работала над вашим проектом?".

---

## 8. `/kontakty` — Контакты

(форма уже реализована в `src/app/contact/page.tsx` — описываем визуальную обвязку вокруг существующей логики формы)

### 8.1 Hero (минимальный)
`<Section size="sm" background="dark" glow>`. `heading-1` "Свяжитесь с нами" + подзаголовок "Ответим в течение 30 минут в рабочее время".

### 8.2 Основной блок: форма + контакты
`<Section size="md">`. Asymmetric grid `grid grid-cols-1 lg:grid-cols-12 gap-10`:

**Левая колонка — форма (`lg:col-span-7`)**, в `<Card padding="lg">`:
- `<Input>` Имя, `<Input>` Телефон, `<Input>` Email (опционально)
- `<Select>` Услуга (опции уже заданы в коде: `serviceOptions`)
- `<Textarea>` Сообщение
- `<Button type="submit" fullWidth size="lg" loading={loading}>` Отправить заявку
- Состояние успеха (`sent === true`): вместо формы — центрированный блок с иконкой-чеком в `icon-wrap-lg icon-wrap-brand`, "Заявка отправлена!", `animate-fade-in`.
- Inline-валидация: `<Input error={errors.name}>` подсвечивает поле через готовый `.input-error` класс.

**Правая колонка — контакты и реквизиты (`lg:col-span-5`)**, вертикальный стек карточек `flex flex-col gap-4`:
- Карточка "Мессенджеры": `<Card padding="md">` с рядом иконок-ссылок (Telegram/WhatsApp/VK) в `icon-wrap-md`, hover — `bg-brand-500/15`.
- Карточка "Телефон и почта": кликабельные `tel:`/`mailto:` ссылки, иконки слева.
- Карточка "Адрес и время работы": текст + мини-карта (статичное изображение или embed) опционально.
- Карточка "Реквизиты" (`card-base`, `text-xs text-neutral-500`): ИП/ООО, ИНН, ОГРНИП — мелким шрифтом, не перетягивает внимание.

**Mobile:** колонки складываются, форма идёт первой (приоритет конверсии), контакты — под ней, все карточки full-width с `gap-4`.

### 8.3 Без отдельного финального CTA
Страница контактов сама по себе является CTA — секция 6 не дублируется здесь (только футер с реквизитами).

---

## 9. Адаптивность — сквозные правила (mobile-first)

| Breakpoint | Tailwind | Поведение |
|---|---|---|
| Base (<640px) | — | 1 колонка везде, кнопки `fullWidth`, padding секций уменьшен (`size="sm"/"md"` вместо `lg/xl`), горизонтальные списки (chips, мини-статы) — `overflow-x-auto` со скрытым скроллбаром |
| `sm:` 640px | sm: | 2 колонки в гридах карточек, кнопки выходят из full-width в hero |
| `lg:` 1024px | lg: | Header переключается с burger на полную навигацию; 3-4 колонки в гридах; asymmetric grid-секции (hero услуги, контакты) становятся двухколоночными |
| `xl:` 1280px | — | максимальная ширина контента фиксируется `.container-ads` (1280px), дальше — только увеличение боковых отступов |

Общие mobile-паттерны, использующиеся одинаково на всех страницах:
- Любая сетка карточек ≥3 элементов на desktop → горизонтальный snap-scroll или просто `grid-cols-1` на mobile (решение по контексту: кейсы/отзывы — scroll, услуги/команда — стек).
- Все декоративные glow/blob-фоны остаются, но `overflow-hidden` на `<Section>` не даёт им создавать горизontal scroll на мобиле.
- Sticky-элементы (header, filter bar) учитывают друг друга через `top-18` смещение, чтобы не перекрывались.
- Все интерактивные hover-эффекты (grayscale→color, lift, glow) на touch-устройствах либо убираются (`@media (hover: hover)`), либо заменяются на активное/видимое состояние по умолчанию.

---

## 10. Компонент `<CtaSection>` (новый, переиспользуемый)

Единственный новый компонент, который стоит добавить в `src/components/ui/` — переиспользуемая закрывающая CTA-секция, чтобы не дублировать разметку на 5 страницах:

```tsx
// src/components/ui/CtaSection.tsx
interface CtaSectionProps {
  label?: string        // "НАЧНЁМ?"
  title: string
  description?: string
  primaryHref?: string
  primaryLabel?: string
  secondaryHref?: string
  secondaryLabel?: string
}
```
Рендерит блок 3.6 целиком (Section background="dark" glow divider + Container centered + Heading + Button×2). Используется на `/`, `/uslugi`, `/uslugi/[slug]`, `/cases`, `/komanda`.

---

## 11. Чеклист реализации по страницам

- [ ] `/` — hero, services, stats, cases-slider, testimonials, CtaSection
- [ ] `/uslugi` — компактный hero, filter bar (client component), filtered grid, CtaSection
- [ ] `/uslugi/[slug]` — hero (asymmetric), описание, процесс (timeline), цены (3 тарифа), FAQ (accordion), CtaSection
- [ ] `/cases` — hero, filter bar, grid с featured-карточкой, CtaSection
- [ ] `/komanda` — hero, team grid (grayscale hover), stats, CtaSection
- [ ] `/kontakty` — hero, форма + контакты (asymmetric grid), без CtaSection
- [ ] Новый компонент `CtaSection.tsx`
- [ ] Header/Footer — общие layout-компоненты (если ещё не вынесены из `layout.tsx`)
