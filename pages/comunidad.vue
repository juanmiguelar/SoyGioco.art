<template>
  <BannerComunidad />
  <ListaBeneficios />
  <BotonRegistro />
  <v-container class="text-center mt-8">
    <NuxtLink to="/talleres">Ver talleres disponibles</NuxtLink>
  </v-container>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Comunidad Artística Exclusiva | Soy Gioco Costa Rica',
  description:
    'Únete a nuestra comunidad exclusiva de más de 90 artistas. Descuentos, talleres virtuales y actividades especiales. Solo para participantes.',
  keywords:
    'comunidad artística, grupo WhatsApp, beneficios, comunidad de arte Costa Rica, talleres de pintura Costa Rica, arte occidente Costa Rica',
  ogTitle: 'Comunidad Artística Exclusiva | Soy Gioco Costa Rica',
  ogDescription:
    'Únete a nuestra comunidad exclusiva de más de 90 artistas. Descuentos, talleres virtuales y actividades especiales. Solo para participantes.',
  ogUrl: 'https://soygiocoart.netlify.app/comunidad',
  ogImage: '/img/logo.jpg',
  twitterTitle: 'Comunidad Artística Exclusiva | Soy Gioco Costa Rica',
  twitterDescription:
    'Únete a nuestra comunidad exclusiva de más de 90 artistas. Descuentos, talleres virtuales y actividades especiales. Solo para participantes.'
})
</script>
