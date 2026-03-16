/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#172554',
        },
        ink: '#0A0A0F',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 50px -36px rgba(37, 99, 235, 0.45), 0 10px 28px -20px rgba(10, 10, 15, 0.2)',
      },
    },
  },
  plugins: [],
}
