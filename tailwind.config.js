/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `/components/**/*.{vue,js,ts}`,
    `/layouts/**/*.vue`,
    `/pages/**/*.vue`,
    `/composables/**/*.{js,ts}`,
    `/plugins/**/*.{js,ts}`,
    `/utils/**/*.{js,ts}`,
    `/App.{js,ts,vue}`,
    `/app.{js,ts,vue}`,
    `/Error.{js,ts,vue}`,
    `/error.{js,ts,vue}`,
    `/app.config.{js,ts}`
  ],
  theme: {
    extend: {
      animation: {
        fade: 'fadeOut .3s ease-in-out',
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
