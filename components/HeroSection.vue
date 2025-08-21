<template>
  <v-container class="py-12 text-center">
    <h1 class="text-h3 font-weight-bold">{{ title }}</h1>
    <p class="text-subtitle-1">{{ subtitle }}</p>
    <v-btn color="primary" class="mt-4" :to="cta.to">{{ cta.label }}</v-btn>
  </v-container>
</template>

<script setup lang="ts">
interface CTA {
  label: string
  to: string
}
const props = defineProps({
  title: { type: String, default: 'Bienvenido' },
  subtitle: { type: String, default: 'Talleres de pintura para todos' },
  cta: { type: Object as () => CTA, default: () => ({ label: 'Contáctanos', to: '/contacto' }) }
})
</script>
