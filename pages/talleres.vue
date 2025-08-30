<template>
  <v-container class="py-8">
    <h1 class="text-h4 text-center mb-6">Talleres de Pintura Disponibles</h1>
  </v-container>
  <TallerCard />
  <TallerDetalleModal />
  <BotonInscripcion />
  <v-container class="text-center mt-8">
    <NuxtLink to="/servicios">Conoce nuestros servicios</NuxtLink>
  </v-container>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Talleres Disponibles | Técnicas de Pintura | Soy Gioco',
  description:
    'Explora nuestros talleres de acrílico y acuarela. Técnicas profesionales, materiales incluidos. San Ramón, Palmares, Grecia y GAM.',
  keywords:
    'talleres disponibles, clases de arte, técnicas de pintura, talleres de acuarela, clases de acrílico Costa Rica, talleres de pintura San Ramón, clases de arte Palmares, talleres de pintura Grecia, arte occidente Costa Rica',
  ogTitle: 'Talleres Disponibles | Técnicas de Pintura | Soy Gioco',
  ogDescription:
    'Explora nuestros talleres de acrílico y acuarela. Técnicas profesionales, materiales incluidos. San Ramón, Palmares, Grecia y GAM.',
  ogUrl: 'https://soygiocoart.netlify.app/talleres',
  ogImage: '/img/logo.jpg',
  twitterTitle: 'Talleres Disponibles | Técnicas de Pintura | Soy Gioco',
  twitterDescription:
    'Explora nuestros talleres de acrílico y acuarela. Técnicas profesionales, materiales incluidos. San Ramón, Palmares, Grecia y GAM.'
})
</script>
