import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['nuxt-simple-sitemap'],
  sitemap: {
    urls: ['https://soygioco.art']
  },
  app: {
    head: {
      htmlAttrs: { lang: 'es-CR' },
      titleTemplate: '%s | Soy Gioco Arte',
      meta: [
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Soy Gioco Arte' },
        { name: 'author', content: 'Soy Gioco Arte' }
      ],
      link: [
        { rel: 'icon', type: 'image/jpeg', href: '/img/logo.jpg' }
      ]
    }
  },
  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.min.css'
  ],
  build: {
    transpile: ['vuetify']
  },
  vite: {
    ssr: {
      noExternal: ['vuetify']
    },
    plugins: [vuetify()]
  }
})
