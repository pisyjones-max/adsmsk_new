import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // ─── COLOR TOKENS ───────────────────────────────────────────────────
      colors: {
        // Brand – фирменный фиолетовый
        brand: {
          50:  '#f0ecff',
          100: '#e0d9ff',
          200: '#c4b3ff',
          300: '#a88dff',
          400: '#8b66ff',
          500: '#6640ff', // ← основной акцент
          600: '#5233cc',
          700: '#3d2699',
          800: '#291a66',
          900: '#140d33',
          950: '#0a0619',
        },
        // Neutral – серая палитра для фона, границ, текста
        neutral: {
          0:   '#ffffff',
          50:  '#f8f8fb',
          100: '#f0f0f7',
          200: '#e2e2ed',
          300: '#c9c9d8',
          400: '#9999b3',
          500: '#6e6e8a',
          600: '#4e4e6a',
          700: '#33334d',
          800: '#1e1e30',
          900: '#0f0f1e',
          950: '#05071a', // ← текущий фон сайта
        },
        // Статусы
        success: {
          light: '#d1fae5',
          DEFAULT: '#10b981',
          dark:  '#065f46',
        },
        error: {
          light: '#fee2e2',
          DEFAULT: '#ef4444',
          dark:  '#991b1b',
        },
        warning: {
          light: '#fef3c7',
          DEFAULT: '#f59e0b',
          dark:  '#92400e',
        },
        info: {
          light: '#dbeafe',
          DEFAULT: '#3b82f6',
          dark:  '#1e40af',
        },
      },

      // ─── TYPOGRAPHY ─────────────────────────────────────────────────────
      fontFamily: {
        // Golos Text — отличная поддержка кириллицы, современный гротеск
        sans:    ['var(--font-golos)', 'system-ui', 'sans-serif'],
        // Inter — для UI-элементов, цифр, кода
        ui:      ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        xs:   ['0.75rem',  { lineHeight: '1.5',  letterSpacing: '0.01em' }],
        sm:   ['0.875rem', { lineHeight: '1.5',  letterSpacing: '0.005em' }],
        base: ['1rem',     { lineHeight: '1.6',  letterSpacing: '0' }],
        lg:   ['1.125rem', { lineHeight: '1.55', letterSpacing: '0' }],
        xl:   ['1.25rem',  { lineHeight: '1.5',  letterSpacing: '-0.01em' }],
        '2xl':['1.5rem',   { lineHeight: '1.4',  letterSpacing: '-0.015em' }],
        '3xl':['1.875rem', { lineHeight: '1.3',  letterSpacing: '-0.02em' }],
        '4xl':['2.25rem',  { lineHeight: '1.2',  letterSpacing: '-0.025em' }],
        '5xl':['3rem',     { lineHeight: '1.1',  letterSpacing: '-0.03em' }],
        '6xl':['3.75rem',  { lineHeight: '1.05', letterSpacing: '-0.035em' }],
      },
      fontWeight: {
        thin:       '100',
        light:      '300',
        normal:     '400',
        medium:     '500',
        semibold:   '600',
        bold:       '700',
        extrabold:  '800',
      },

      // ─── SPACING & LAYOUT ────────────────────────────────────────────────
      spacing: {
        '4.5': '1.125rem',
        '13':  '3.25rem',
        '15':  '3.75rem',
        '18':  '4.5rem',
        '22':  '5.5rem',
        '26':  '6.5rem',
        '30':  '7.5rem',
      },
      maxWidth: {
        container: '1280px',
        prose:     '72ch',
        narrow:    '48ch',
      },

      // ─── BORDERS ─────────────────────────────────────────────────────────
      borderRadius: {
        none:   '0',
        sm:     '0.25rem',
        DEFAULT:'0.375rem',
        md:     '0.5rem',
        lg:     '0.75rem',
        xl:     '1rem',
        '2xl':  '1.25rem',
        '3xl':  '1.5rem',
        full:   '9999px',
      },
      borderWidth: {
        DEFAULT: '1px',
        0: '0',
        2: '2px',
      },

      // ─── SHADOWS ─────────────────────────────────────────────────────────
      boxShadow: {
        xs:    '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        sm:    '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        DEFAULT:'0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        md:    '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        lg:    '0 10px 15px -3px rgb(0 0 0 / 0.1)',
        xl:    '0 20px 25px -5px rgb(0 0 0 / 0.1)',
        // Фирменные тени с фиолетовым свечением
        'brand-sm': '0 0 12px 2px rgb(102 64 255 / 0.2)',
        'brand-md': '0 0 24px 4px rgb(102 64 255 / 0.25)',
        'brand-lg': '0 0 40px 8px rgb(102 64 255 / 0.2)',
        inner:  'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        none:   'none',
      },

      // ─── TRANSITIONS ─────────────────────────────────────────────────────
      transitionTimingFunction: {
        'in-expo':  'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'smooth':   'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        fast:    '150ms',
        DEFAULT: '200ms',
        slow:    '300ms',
        slower:  '500ms',
      },

      // ─── ANIMATIONS ──────────────────────────────────────────────────────
      keyframes: {
        'fade-in': {
          '0%':   { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%':   { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'pulse-brand': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgb(102 64 255 / 0.4)' },
          '50%':      { boxShadow: '0 0 0 8px rgb(102 64 255 / 0)' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      animation: {
        'fade-in':     'fade-in 0.4s cubic-bezier(0.19, 1, 0.22, 1) both',
        'slide-left':  'slide-in-left 0.4s cubic-bezier(0.19, 1, 0.22, 1) both',
        'pulse-brand': 'pulse-brand 2s ease-in-out infinite',
        'shimmer':     'shimmer 2s linear infinite',
      },

      // ─── GRADIENTS (через backgroundImage) ───────────────────────────────
      backgroundImage: {
        'gradient-brand':      'linear-gradient(135deg, #6640ff 0%, #9b72ff 100%)',
        'gradient-brand-dark': 'linear-gradient(135deg, #3d2699 0%, #6640ff 100%)',
        'gradient-hero':       'linear-gradient(180deg, #05071a 0%, #0f0f1e 100%)',
        'gradient-card':       'linear-gradient(145deg, rgba(102,64,255,0.05) 0%, rgba(102,64,255,0) 100%)',
        'gradient-radial-brand': 'radial-gradient(ellipse at top, rgba(102,64,255,0.15) 0%, transparent 60%)',
      },
    },
  },
  plugins: [
    // Добавляем утилиты через плагин
    function ({ addUtilities, theme }: { addUtilities: Function; theme: Function }) {
      addUtilities({
        // Текстовые утилиты
        '.text-balance': { 'text-wrap': 'balance' },
        '.text-pretty':  { 'text-wrap': 'pretty' },
        // Градиентный текст
        '.text-gradient-brand': {
          'background':              'linear-gradient(135deg, #6640ff, #a87dff)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip':         'text',
        },
        // Стеклянный эффект для тёмной темы
        '.glass-dark': {
          'background': 'rgba(14, 14, 28, 0.6)',
          'backdrop-filter': 'blur(12px)',
          '-webkit-backdrop-filter': 'blur(12px)',
          'border': '1px solid rgba(102, 64, 255, 0.15)',
        },
        '.glass-light': {
          'background': 'rgba(255, 255, 255, 0.7)',
          'backdrop-filter': 'blur(12px)',
          '-webkit-backdrop-filter': 'blur(12px)',
          'border': '1px solid rgba(102, 64, 255, 0.1)',
        },
        // Focus visible кольцо в фирменном цвете
        '.focus-brand': {
          'outline': '2px solid #6640ff',
          'outline-offset': '2px',
        },
      })
    },
  ],
}

export default config
