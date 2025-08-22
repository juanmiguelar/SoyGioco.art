<template>
  <v-container class="py-12">
    <h2 class="text-h5 text-center font-weight-medium mb-8">Testimonios</h2>
    <v-carousel
      cycle
      height="200"
      hide-delimiter-background
    >
      <v-carousel-item
        v-for="t in testimonios"
        :key="t.name"
      >
        <div class="text-center mx-auto" style="max-width: 500px">
          <p class="text-body-1 mb-4">"{{ t.quote }}"</p>
          <p class="text-subtitle-2 font-weight-medium mb-1">
            {{ t.name }}, {{ t.occupation }}
          </p>
          <p class="text-caption">
            Primera obra en {{ t.time }} - {{ t.benefit }}
          </p>
        </div>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script setup lang="ts">
interface Testimonio {
  quote: string
  name: string
  occupation: string
  time: string
  benefit: string
}

const testimonios: Testimonio[] = [
  {
    quote:
      'Nunca pensé que podría crear algo tan hermoso en mi primer taller. El ambiente es tan relajado que se me olvidaron todos los problemas del trabajo.',
    name: 'Ana Rodríguez',
    occupation: 'Ingeniera',
    time: '3 horas',
    benefit: 'relajación',
  },
  {
    quote:
      'Llegué sin saber nada y salí con mi primera acuarela terminada. Me sentí apoyado en cada paso.',
    name: 'Carlos Méndez',
    occupation: 'Diseñador',
    time: 'una tarde',
    benefit: 'confianza',
  },
  {
    quote:
      'Lo que más me gustó fue la comunidad; ahora tengo nuevos amigos con quienes pintar cada semana.',
    name: 'María López',
    occupation: 'Emprendedora',
    time: 'dos sesiones',
    benefit: 'sentido de comunidad',
  },
]
</script>
