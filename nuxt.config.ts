// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    css: ['~/assets/css/main.css'],
    modules: ['@prisma/nuxt', '@nuxt/ui'],
    prisma: {
        autoSetupPrisma: true,
    },
    colorMode: {
        preference: 'no-preference',
    },
    ui: {
        global: true
    }
})