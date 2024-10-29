/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#4FD1C5',
          50: '#EFFBFA',
          100: '#DCF7F5',
          200: '#B8EFEC',
          300: '#94E7E2',
          400: '#71DFD9',
          500: '#4FD1C5',
          600: '#32B8AC',
          700: '#278E85',
          800: '#1C645E',
          900: '#113A37'
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
