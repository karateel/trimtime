// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/supabase',
    '@nuxt/ui',
    // '@nuxtjs/eslint-module',
    '@vite-pwa/nuxt',
    '@pinia/nuxt',
  ],
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width',
    }
  },
  css: ['~/assets/main.css'],
  imports: {
    dirs: [
      '~/store/**', 
      '~/interface/'
    ],
    global: true
  },
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    globalName: '__NUXT_COLOR_MODE__',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode',
  },
  ui: {
    global: true,
  },
  tailwindcss: {
    exposeConfig: true,
  },
  supabase: {
    redirect: true,
    redirectOptions: {
      login: '/auth/login',
      callback: '/',
      exclude: [
        '/auth/*'
      ],
    }
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'TrimTime',
      short_name: 'TT',
      theme_color: '#ffffff',
      icons: [
        {
          "src": "/icon-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
      },
      {
          "src": "/icon-256x256.png",
          "sizes": "256x256",
          "type": "image/png"
      },
      {
          "src": "/icon-384x384.png",
          "sizes": "384x384",
          "type": "image/png"
      },
      {
          "src": "/icon-512x512.png",
          "sizes": "512x512",
          "type": "image/png"
      }
      ]
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    devOptions: {
      enabled: false,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },
})
