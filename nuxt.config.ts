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

  build: {
    transpile: ['@fortawesome/vue-fontawesome']
  },

  runtimeConfig: {
    public: {
    }
  },


  nitro: {
    preset: 'vercel',
    serveStatic: true
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['client-only'].includes(tag)
    }
  },

  app: {
    head: {
      title:'Deni Ramadhan',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'My Portfolio' }
      ],
      link: [
        { 
          rel: 'icon', 
          type: 'image/png', 
          href: '/images/logo.png' 
        }
      ]
    }
  }
})