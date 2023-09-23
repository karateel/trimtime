/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'DM Sans fallback', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      'primary': '#1E40AF',
      'khaki': '#242424'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
