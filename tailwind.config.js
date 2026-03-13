/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#05070e',
          900: '#0f1425',
          800: '#1a1f3a',
          700: '#232d52',
          600: '#1e2340',
        },
        brand: {
          DEFAULT: '#6366f1',
          light: '#818cf8',
          lighter: '#a5b4fc',
          dark: '#4f46e5',
        },
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}