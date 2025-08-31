<template>
  <v-container class="py-12 text-center">
    <h2 class="text-h5 font-weight-medium mb-8">Galería de Estudiantes</h2>
    <v-row class="mb-4">
      <v-col
        v-for="obra in obras"
        :key="obra.src"
        cols="12"
        xs="12"
        sm="6"
        md="4"
        lg="3"
      >
        <NuxtImg
          :src="obra.src"
          :alt="obra.caption"
          width="400"
          height="400"
          sizes="sm:50vw md:33vw lg:25vw"
          format="webp"
          loading="lazy"
          class="mb-2"
        />
        <p class="text-caption">{{ obra.caption }}</p>
      </v-col>
    </v-row>
    <v-btn
      color="primary"
      href="https://www.instagram.com/soygioco.cr/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Ver Más Obras en Instagram
    </v-btn>
  </v-container>
</template>

<script setup lang="ts">
interface Obra {
  src: string
  caption: string
}

const obras: Obra[] = [
  { src: '/img/totoro.jpeg', caption: 'Totoro por Mariana' },
  { src: '/img/colibri-marla.jpeg', caption: 'Colibri de Marla' },
  { src: '/img/gioconda-cerdas.png', caption: 'Paisaje de Ana' },
  { src: '/img/gioconda-cerdas.png', caption: 'Naturaleza de Luis' },
  { src: '/img/gioconda-cerdas.png', caption: 'Proyecto de Sofía' },
  { src: '/img/gioconda-cerdas.png', caption: 'Obra de Pedro' },
  { src: '/img/gioconda-cerdas.png', caption: 'Trabajo de Elena' },
  { src: '/img/gioconda-cerdas.png', caption: 'Inspiración de Gioco' },
]
</script>