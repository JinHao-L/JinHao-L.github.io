const defaults = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    enabled: false,
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Work Sans', ...defaults.fontFamily.sans],
      },
      colors: {
        'titan-white': {
          DEFAULT: '#F8F8FF',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#F8F8FF',
          600: '#C0C0FF',
          700: '#8888FF',
          800: '#5050FF',
          900: '#1818FF',
        },
        'pale-sky': {
          DEFAULT: '#6B7280',
          50: '#CDD0D5',
          100: '#C2C5CC',
          200: '#ACB0BA',
          300: '#969BA7',
          400: '#7F8694',
          500: '#6B7280',
          600: '#515761',
          700: '#383C43',
          800: '#1E2024',
          900: '#050506',
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};