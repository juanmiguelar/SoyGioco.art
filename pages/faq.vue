<template>
  <v-container class="py-8">
    <h1 class="text-h4 text-center mb-6">Preguntas Frecuentes</h1>
  </v-container>
  <BuscarFAQ v-model="search" />
  <FAQAccordion :search="search" />
  <v-container class="text-center mt-8">
    <NuxtLink to="/contacto">Contáctanos para más información</NuxtLink>
  </v-container>
</template>

<script setup lang="ts">
const search = ref('')

useSeoMeta({
  title: 'Preguntas Frecuentes | Talleres de Pintura | Soy Gioco',
  description:
    'Resuelve tus dudas sobre nuestros talleres de pintura. Materiales incluidos, reservas, métodos de pago y más información útil.',
  keywords:
    'preguntas frecuentes, información talleres, talleres de pintura Costa Rica, materiales incluidos, reservas, métodos de pago',
  ogTitle: 'Preguntas Frecuentes | Talleres de Pintura | Soy Gioco',
  ogDescription:
    'Resuelve tus dudas sobre nuestros talleres de pintura. Materiales incluidos, reservas, métodos de pago y más información útil.',
  ogUrl: 'https://soygiocoart.netlify.app/faq',
  ogImage: '/img/logo.jpg',
  twitterTitle: 'Preguntas Frecuentes | Talleres de Pintura | Soy Gioco',
  twitterDescription:
    'Resuelve tus dudas sobre nuestros talleres de pintura. Materiales incluidos, reservas, métodos de pago y más información útil.'
})
</script>
