<template>
  <v-container class="py-16">
    <v-row align="center" justify="space-between">
      <v-col cols="12" md="6" class="text-center text-md-left">
        <h1 class="text-h3 font-weight-bold mb-4">{{ title }}</h1>
        <p class="text-subtitle-1 mb-6">{{ subtitle }}</p>
        <div class="d-flex flex-column flex-md-row gap-4">
          <v-btn color="primary" class="mb-4 mb-md-0"
            href="https://wa.me/50670763760?text=Hola%20Gioco%21%20Quiero%20reservar%20mi%20primer%20taller"
            target="_blank" rel="noopener noreferrer">
            Reserva Tu Primer Taller
          </v-btn>
        </div>
        <div class="mt-6 text-body-2">
          <v-icon color="primary" size="small" class="mr-1">mdi-whatsapp</v-icon>
          WhatsApp: +506 7076 3760
          <br />
          <v-icon color="primary" size="small" class="mr-1">mdi-instagram</v-icon>
          Instagram: @soygioco.cr
        </div>
      </v-col>
      <v-col cols="12" md="5" class="text-center">
        <!-- Main hero image - suggested size 800x600 -->
        <NuxtImg
          src="/img/foto-principal.jpg"
          alt="Ambiente relajado de una clase de pintura"
          width="800"
          height="600"
          format="webp"
          priority
          sizes="100vw"
          class="rounded-lg mb-4 d-none d-md-block"
        />
        <!-- Secondary image - suggested size 400x300 -->
        <NuxtImg
          src="/img/taller-ejemplo.jpeg"
          alt="Estudiantes pintando en su primer taller"
          width="400"
          height="300"
          format="webp"
          loading="lazy"
          class="rounded-lg"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: 'Tu Primera Obra Maestra Te Espera',
  },
  subtitle: {
    type: String,
    default:
      'Talleres de acrílico y acuarela en Costa Rica - Sin experiencia necesaria',
  },
})
</script>
