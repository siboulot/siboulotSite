// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,
  modules: ['@nuxt/icon', '@nuxtjs/color-mode'],
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: ''
  },
  app: {
    baseURL: '/siboulotSite/' // 👈 replace with your repository name
  },
  css: ['~/assets/css/styles.css']

})