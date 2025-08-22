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
            // Colores principales basados en la paleta del logo
            primary: '#2B6CB0', // Azul calmante de la paleta como principal
            secondary: '#38A169', // Verde relajante de la paleta
            accent: '#D69E2E', // Amarillo dorado de la paleta
            tertiary: '#E53E3E', // Rojo vibrante como acento ocasional
            
            // Colores neutros complementarios
            background: '#FAFAFA', // Gris muy claro, casi blanco
            surface: '#FFFFFF', // Blanco puro para cards
            
            // Colores de texto siguiendo la identidad del logo
            'on-primary': '#FFFFFF',
            'on-secondary': '#FFFFFF', 
            'on-accent': '#000000',
            'on-success': '#FFFFFF',
            'on-background': '#1A202C', // Negro suave similar al logo
            'on-surface': '#2D3748', // Gris muy oscuro para texto
            
            // Colores adicionales para variedad
            info: '#3182CE', // Azul información
            warning: '#DD6B20', // Naranja advertencia
            error: '#E53E3E', // Rojo error (mismo que primary para consistencia)
            
            // Colores personalizados específicos para el negocio
            'paint-red': '#E53E3E',
            'paint-blue': '#2B6CB0', 
            'paint-yellow': '#D69E2E',
            'paint-green': '#38A169',
            'logo-black': '#1A202C'
          }
        }
      }
    }
  })
  nuxtApp.vueApp.use(vuetify)
})