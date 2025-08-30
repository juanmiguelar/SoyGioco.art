<template>
  <v-container class="py-12">
    <h2 class="text-h5 text-center font-weight-medium mb-2">
      Temáticas Destacadas
    </h2>
    <p class="text-subtitle-1 text-center mb-8">
      Explora los universos creativos que puedes pintar en nuestros talleres
    </p>
    <v-row justify="center" align="stretch" class="gap-4">
      <v-col
        v-for="tema in tematicas"
        :key="tema.id"
        cols="12"
        sm="6"
        md="3"
      >
        <TematicaCard v-bind="tema" />
      </v-col>
    </v-row>
    <div class="text-center mt-8">
      <v-btn color="primary" to="/talleres">Explorar Talleres</v-btn>
    </div>
  </v-container>
</template>

<script setup lang="ts">
interface Tematica {
  id: string
  title: string
  description: string
  image: string
  techniques: string[]
  difficulty: string
  featured: boolean
}

const tematicas: Tematica[] = [
  {
    id: 'pokemon',
    title: 'Pokemon',
    description: 'Explora el colorido mundo de Pokemon y dale vida a tus personajes favoritos',
    image: 'https://placehold.co/400x300/FFD700/000000/png?text=Pokemon+Arte',
    techniques: ['Acrílico', 'Acuarela'],
    difficulty: 'Principiante',
    featured: true,
  },
  {
    id: 'studio-ghibli',
    title: 'Studio Ghibli',
    description: 'Sumérgete en los mundos mágicos de Miyazaki con su estilo único',
    image: 'https://placehold.co/400x300/87CEEB/2F4F4F/png?text=Studio+Ghibli',
    techniques: ['Acrílico', 'Acuarela'],
    difficulty: 'Intermedio',
    featured: true,
  },
  {
    id: 'botanica',
    title: 'Botánica',
    description: 'Descubre la belleza natural a través de flores, hojas y plantas',
    image: 'https://placehold.co/400x300/228B22/FFFFFF/png?text=Botánica+Arte',
    techniques: ['Acrílico', 'Acuarela'],
    difficulty: 'Todos los niveles',
    featured: true,
  },
  {
    id: 'colibries',
    title: 'Colibríes',
    description: 'Captura la gracia y movimiento de estas joyas voladores',
    image: 'https://placehold.co/400x300/FF6347/FFFFFF/png?text=Colibríes',
    techniques: ['Acrílico', 'Acuarela'],
    difficulty: 'Intermedio',
    featured: true,
  }
]
</script>
