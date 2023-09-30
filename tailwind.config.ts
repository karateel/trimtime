import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'DM Sans fallback', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        customPrimary: {
          50: '#E7FCF9',
          100: '#D0FAF2',
          200: '#A2F5E6',
          300: '#74F0D9',
          400: '#46EBCD',
          500: '#19E5C0',
          600: '#15C0A1',
          700: '#119B82',
          800: '#0D7763',
          900: '#095245',
          950: '#073F35',
        },
        customGray: {
          50: '#FFFFFF',
          100: '#F5F7F9',
          200: '#DCE2E9',
          300: '#C3CED9',
          400: '#AABAC9',
          500: '#91A6B9',
          600: '#7891A9',
          700: '#617D98',
          800: '#51697F',
          900: '#415466',
          950: '#364655',
        },
      },
      gridRow: {
        'span-8': 'span 8 / span 8'
      }
    }
  }
}