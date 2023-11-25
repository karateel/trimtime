import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{

  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'DM Sans fallback', ...defaultTheme.fontFamily.sans]
      },
      colors: {
          'tundora': {  
            DEFAULT: '#4B4B4B',
            50: '#D0D0D0',
            100: '#C5C5C5',
            200: '#B1B1B1',
            300: '#9D9D9D',
            400: '#888888',
            500: '#747474',
            600: '#5F5F5F',
            700: '#4B4B4B',
            800: '#2F2F2F',
            900: '#131313',
            950: '#050505'
          },
          'mercury': {
            DEFAULT: '#E5E5E5',
            50: '#FFFFFF',
            100: '#F9F9F9',
            200: '#E5E5E5',
            300: '#C9C9C9',
            400: '#ADADAD',
            500: '#919191',
            600: '#757575',
            700: '#595959',
            800: '#3D3D3D',
            900: '#212121',
            950: '#131313'
          },
          'brown': {
            DEFAULT: '#303030',
            50: '#C9C9C9',
            100: '#BFBFBF',
            200: '#AAAAAA',
            300: '#969696',
            400: '#828282',
            500: '#6D6D6D',
            600: '#595959',
            700: '#444444',
            800: '#303030',
            900: '#141414',
            950: '#060606'
          },
          'tuna': {
            DEFAULT: '#333337',
            50: '#CCCCD0',
            100: '#C2C2C6',
            200: '#ACACB2',
            300: '#97979F',
            400: '#82828B',
            500: '#6E6E77',
            600: '#5A5A61',
            700: '#47474C',
            800: '#333337',
            900: '#18181A',
            950: '#0B0B0B'
          },
      },
    }
  },
  plugins: [
  ]
}