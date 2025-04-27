/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3e8ff',
          100: '#e9d5ff',
          200: '#d8b4fe',
          300: '#c084fc',
          400: '#a855f7',
          500: '#8a2be2', // Main primary color
          600: '#7928ca',
          700: '#6b21a8',
          800: '#581c87',
          900: '#4c1d95',
          950: '#3b0764',
        },
        secondary: {
          50: '#edfcfd',
          100: '#d2f7f9',
          200: '#aaf0f4',
          300: '#76e4ec',
          400: '#39d0dd',
          500: '#00ced1', // Main secondary color
          600: '#0ba5b8',
          700: '#0e8294',
          800: '#146878',
          900: '#155565',
          950: '#0b3942',
        },
        dark: {
          100: '#d5d5d5',
          200: '#ababab',
          300: '#818181',
          400: '#575757',
          500: '#2d2d2d',
          600: '#252525',
          700: '#1c1c1c',
          800: '#141414',
          900: '#0a0a0a',
          950: '#050505',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};