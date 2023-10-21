// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
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
      name: "TrimTime",
      short_name: "trimtime",
      start_url: "/",
      display: "standalone",
      background_color: "#4b4b4b",
      lang: "en",
      scope: "/",
      theme_color: "#4b4b4b",
      icons: [
        {
          src: "/icon-48x48.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "/icon-72x72.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "/icon-96x96.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "/icon-144x144.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "/icon-192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "/icon-192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "/icon-512x512.png",
          sizes: "512x512",
          type: "image/png"
        }
      ],
      description: "Booking app for the beauty salons and barbershops",
      dir: "ltr",
      orientation: "portrait",
      categories: [
        "business",
        "lifestyle"
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
