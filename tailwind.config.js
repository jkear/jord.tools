/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['SF Pro Display', 'SF Pro Text', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Monaco', 'Cascadia Code', 'monospace'],
      },
      fontSize: {
        'large-title': ['34px', { lineHeight: '41px', letterSpacing: '0.41px' }],
        'title-1': ['28px', { lineHeight: '34px', letterSpacing: '0.36px' }],
        'title-2': ['22px', { lineHeight: '28px', letterSpacing: '0.35px' }],
        'title-3': ['20px', { lineHeight: '24px', letterSpacing: '0.38px' }],
        'headline': ['17px', { lineHeight: '22px', letterSpacing: '-0.41px' }], // Semibold
        'body': ['17px', { lineHeight: '22px', letterSpacing: '-0.41px' }], // Regular
        'callout': ['16px', { lineHeight: '21px', letterSpacing: '-0.32px' }],
        'subhead': ['15px', { lineHeight: '20px', letterSpacing: '-0.24px' }],
        'footnote': ['13px', { lineHeight: '18px', letterSpacing: '-0.08px' }],
        'caption-1': ['12px', { lineHeight: '16px', letterSpacing: '0' }],
        'caption-2': ['11px', { lineHeight: '13px', letterSpacing: '0.07px' }],
      },
      colors: {
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        'ease-in-out-expo': 'cubic-bezier(0.86, 0, 0.07, 1)',
        'spring-gentle': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}