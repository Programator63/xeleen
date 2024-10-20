// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    css: ['~/assets/css/main.css'],
    modules: [
      '@nuxt/ui',
      'nuxt-auth-utils'
    ],
    routeRules: {
        '/': { prerender: true },
        '/login': { prerender: true },
        '/register': { prerender: true },
    },
    ssr: true,
    icon: {
        serverBundle: {
            collections: ['heroicons'],
        }
    },
    prisma: {
        autoSetupPrisma: true,
    },
    colorMode: {
        preference: 'system', // default value of $colorMode.preference
        fallback: 'dark', // fallback value if not system preference found
    },
    ui: {
        global: true
    }
})