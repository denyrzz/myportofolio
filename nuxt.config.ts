// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,

  modules: ['@nuxt/image', '@nuxt/ui'],

  plugins: [
    '~/plugins/gsap.client.ts',
    '~/plugins/fontawesome.ts'
  ],
  css: ['~/assets/css/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],

  app: {
    head: {
      title: 'Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfolio profesional saya' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})