/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./html_layers/**/*.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Segoe UI"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"Segoe UI"', 'ui-sans-serif', 'sans-serif'],
      },
      colors: {
        apc: {
          blue: '#0B2545',
          navy: '#13315C',
          gold: '#D4AF37',
          accent: '#F39C12',
          surface: '#F8F9FA',
        }
      }
    },
  },
  plugins: [],
}
