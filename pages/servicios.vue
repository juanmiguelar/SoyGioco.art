<template>
  <v-container class="py-8">
    <h1 class="text-h4 text-center mb-6">Nuestros Servicios de Talleres de Pintura</h1>
  </v-container>
  <ServiciosSection />
  <ContactoCTA />
  <v-container class="text-center mt-8">
    <NuxtLink to="/talleres">Revisa nuestros talleres disponibles</NuxtLink>
  </v-container>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Servicios de Talleres | Acrílico y Acuarela | Soy Gioco',
  description:
    'Talleres compartidos y privados de pintura. Acrílico y acuarela para todos los niveles. Precios desde ₡9,500. Reserva tu espacio.',
  keywords:
    'talleres compartidos, talleres privados, precios, acrílico, acuarela, talleres de pintura Costa Rica, talleres de pintura San Ramón, clases de arte Palmares, talleres de pintura Grecia',
  ogTitle: 'Servicios de Talleres | Acrílico y Acuarela | Soy Gioco',
  ogDescription:
    'Talleres compartidos y privados de pintura. Acrílico y acuarela para todos los niveles. Precios desde ₡9,500. Reserva tu espacio.',
  ogUrl: 'https://soygiocoart.netlify.app/servicios',
  ogImage: '/img/logo.jpg',
  twitterTitle: 'Servicios de Talleres | Acrílico y Acuarela | Soy Gioco',
  twitterDescription:
    'Talleres compartidos y privados de pintura. Acrílico y acuarela para todos los niveles. Precios desde ₡9,500. Reserva tu espacio.'
})
</script>
