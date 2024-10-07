// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: [
    '@nuxt/icon',
    '@nuxt/ui',
    '@pinia/nuxt',
    '@prisma/nuxt',
    'nuxt-auth-utils'
  ],
  prisma: {
    autoSetupPrisma: true,
  },
  colorMode: {
    preference: 'no-preference',
  }

})