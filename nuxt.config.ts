import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxtjs/sitemap', '@nuxtjs/strapi'],
  image: {
    quality: 80,
    formats: ['webp', 'jpg'],
    screens: { xs: 320, sm: 640, md: 768, lg: 1024, xl: 1280 }
  },
  define: {
    'VUE_PROD_HYDRATION_MISMATCH_DETAILS': true
  },
  site: {
    url: 'https://soygiocoart.netlify.app/',
    name: 'Soy Gioco Arte',
    description: 'Talleres de acrílico y acuarela en Costa Rica',
    defaultLocale: 'es'
  },
  runtimeConfig: {
    public: {
      strapiURL: process.env.STRAPI_URL || '',
    },
    strapiToken: process.env.STRAPI_TOKEN || ''
  },
  strapi: {
    url: process.env.STRAPI_URL,
    token: process.env.STRAPI_TOKEN,
    prefix: '/api'
  },
  sitemap: {
    urls: async () => {
      const staticRoutes = ['/', '/biografia', '/servicios', '/talleres', '/comunidad', '/faq']
      // TODO: add dynamic blog routes here when blog functionality is implemented
      return staticRoutes
    },
    defaults: {
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString()
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: "es-CR" },
      titleTemplate: "%s | Soy Gioco Arte",
      meta: [
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Soy Gioco Arte" },
        { name: "author", content: "Soy Gioco Arte" },
      ],
      link: [{ rel: "icon", type: "image/jpeg", href: "/img/logo.jpg" }],
    },
  },
  css: ["vuetify/styles", "@mdi/font/css/materialdesignicons.min.css"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
    plugins: [vuetify()],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('vuetify')) {
                return 'vuetify'
              }
              if (id.includes('@mdi')) {
                return 'mdi'
              }
              if (id.includes('@nuxtjs/strapi') || id.includes('strapi')) {
                return 'strapi'
              }
              if (id.includes('marked')) {
                return 'marked'
              }
              return 'vendor'
            }
          }
        }
      }
    }
  }
});
