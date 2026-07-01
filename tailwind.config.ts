import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#FFFFFF',
          secondary: '#FAFAFA',
          dark: '#0A0A0B',
          'dark-secondary': '#111113',
        },
        text: {
          primary: '#111111',
          secondary: '#6B7280',
          'dark-primary': '#F5F5F7',
          'dark-secondary': '#9CA3AF',
        },
        accent: {
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
          light: '#EFF4FF',
        },
        border: {
          DEFAULT: '#E5E7EB',
          dark: '#26262A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(0,0,0,0.04), 0 2px 8px rgba(0,0,0,0.04)',
        'soft-lg': '0 4px 12px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.06)',
        'soft-dark': '0 1px 2px rgba(0,0,0,0.3), 0 2px 8px rgba(0,0,0,0.3)',
      },
      maxWidth: {
        content: '1120px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-up': 'slideUp 0.6s ease forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
