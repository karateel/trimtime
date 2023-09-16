// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    base: '/_nuxt/'
  },
  modules: [
    '@nuxtjs/supabase',
    '@nuxt/ui',
    // '@nuxtjs/eslint-module',
    '@vite-pwa/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss'
  ],
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
  supabase: {
    redirect: false,
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Nuxt Vite PWA',
      short_name: 'NuxtVitePWA',
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
