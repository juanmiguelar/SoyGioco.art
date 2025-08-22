<template>
  <v-container class="py-12 text-center">
    <h1 class="text-h3 font-weight-bold">{{ title }}</h1>
    <p class="text-subtitle-1">{{ subtitle }}</p>
    <ContactoCTA />
  </v-container>
</template>

<script setup lang="ts">
const props = defineProps({
  title: { type: String, default: 'Bienvenido' },
  subtitle: { type: String, default: 'Talleres de pintura para todos' },
})
</script>
