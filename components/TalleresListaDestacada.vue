<template>
  <v-container class="py-12">
    <h2 class="text-h5 text-center font-weight-medium mb-8">
      Talleres Destacados
    </h2>
    <v-row justify="center" align="stretch" class="gap-4">
      <v-col
        v-for="taller in talleres"
        :key="taller.title"
        cols="12"
        sm="6"
        md="3"
      >
        <TallerCard v-bind="taller" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import TallerCard from './TallerCard.vue'

interface Taller {
  title: string
  technique: string
  image: string
  price: number
  locations: string[]
  badges: string[]
}

const talleres: Taller[] = [
  {
    title: 'Acrílico Inicial',
    technique: 'Acrílico',
    image: '/placeholder/taller-acrilico.jpg',
    price: 30000,
    locations: ['GAM', 'San Ramón', 'Palmares'],
    badges: ['Perfecto para Principiantes', 'Materiales Incluidos', 'Grupos Pequeños'],
  },
  {
    title: 'Acuarela Relajante',
    technique: 'Acuarela',
    image: '/placeholder/taller-acuarela.jpg',
    price: 28000,
    locations: ['GAM', 'Grecia'],
    badges: ['Perfecto para Principiantes', 'Materiales Incluidos', 'Grupos Pequeños'],
  },
  {
    title: 'Paisajes Acrílicos',
    technique: 'Acrílico',
    image: '/placeholder/taller-paisaje.jpg',
    price: 32000,
    locations: ['San Ramón', 'Palmares'],
    badges: ['Perfecto para Principiantes', 'Materiales Incluidos', 'Grupos Pequeños', 'Taller Popular'],
  },
  {
    title: 'Naturaleza en Acuarela',
    technique: 'Acuarela',
    image: '/placeholder/taller-naturaleza.jpg',
    price: 28000,
    locations: ['GAM', 'Grecia'],
    badges: ['Perfecto para Principiantes', 'Materiales Incluidos', 'Grupos Pequeños'],
  },
]
</script>
