/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        black: '#0f1113',
        dark: {
          950: '#181a1f',
          800: '#23272f',
        }
      }
    }
  },
  plugins: [],
  darkMode: 'selector',
}

