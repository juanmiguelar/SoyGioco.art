<template>
  <v-container class="py-12 text-center">
    <h2 class="text-h5 font-weight-medium mb-8">Galería de Estudiantes</h2>
    <div class="gallery-grid mb-4">
      <div v-for="obra in obras" :key="obra.src">
        <div class="gallery-image-container nuxt-img-container elevation-2 rounded-lg">
          <NuxtImg
            :src="obra.src"
            :alt="obra.caption"
            width="300"
            height="225"
            class="nuxt-img-cover aspect-4-3"
            loading="lazy"
            sizes="sm:100vw md:50vw lg:33vw xl:25vw"
          />
        </div>
        <p class="text-caption mt-2">{{ obra.caption }}</p>
      </div>
    </div>
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