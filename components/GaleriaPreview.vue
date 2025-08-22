<template>
  <v-container class="py-12 text-center">
    <h2 class="text-h5 font-weight-medium mb-8">Galería de Estudiantes</h2>
    <v-row class="mb-4">
      <v-col
        v-for="obra in obras"
        :key="obra.src"
        cols="6"
        sm="3"
      >
        <!-- Placeholder image - suggested 300x300 -->
        <v-img
          :src="obra.src"
          :alt="obra.caption"
          height="150"
          cover
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
  { src: '/placeholder/obra-1.jpg', caption: 'Primer taller de María' },
  { src: '/placeholder/obra-2.jpg', caption: 'Taller de Carlos' },
  { src: '/placeholder/obra-3.jpg', caption: 'Paisaje de Ana' },
  { src: '/placeholder/obra-4.jpg', caption: 'Naturaleza de Luis' },
  { src: '/placeholder/obra-5.jpg', caption: 'Proyecto de Sofía' },
  { src: '/placeholder/obra-6.jpg', caption: 'Obra de Pedro' },
  { src: '/placeholder/obra-7.jpg', caption: 'Trabajo de Elena' },
  { src: '/placeholder/obra-8.jpg', caption: 'Inspiración de Gioco' },
]
</script>
