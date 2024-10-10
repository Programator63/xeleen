// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: [
    '@nuxt/icon',
    '@nuxt/ui',
    'nuxt-auth-utils',
    '@prisma/nuxt'
  ],
  prisma: {
    autoSetupPrisma: true,
  },
  colorMode: {
    preference: 'no-preference',
  },
  build: {
    rollupOptions: {
      external: ['@prisma/nuxt'],
    },
  },
})