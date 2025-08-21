import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'soygioco',
      themes: {
        soygioco: {
          dark: false,
          colors: {
            primary: '#FF6F61',
            secondary: '#5E35B1'
          }
        }
      }
    }
  })
  nuxtApp.vueApp.use(vuetify)
})
