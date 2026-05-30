/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdoc,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#bd3808',
          light: '#e04e1a',
          dark: '#8a2900',
        },
        midnight: {
          DEFAULT: '#0a0a0a',
          50: '#1a1a1a',
          100: '#2a2a2a',
        },
        surface: '#1a1a1a',
        muted: '#888888',
        cream: '#f5f5f0',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'spin-slow': 'spinSlow 20s linear infinite',
        'fade-in': 'fadeIn 0.6s ease both',
        'slide-up': 'slideUp 0.8s ease both',
        ticker: 'ticker 30s linear infinite',
      },
      keyframes: {
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
