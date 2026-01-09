// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: process.env.NUXT_MODE === 'ssr',
  devServer: {
    port: process.env.NUXT_PORT ? parseInt(process.env.NUXT_PORT) : 3000
  },
})
