<template>
  <v-card class="mx-auto" max-width="344">
    <!-- Taller image - suggested 400x300 -->
    <NuxtImg
      :src="image"
      :alt="`Proceso creativo del taller ${title}`"
      width="400"
      height="200"
      format="webp"
      loading="lazy"
    />
    <v-card-item>
      <v-card-title>{{ title }} - {{ technique }}</v-card-title>
      <v-card-subtitle class="py-1">
        <v-chip
          v-for="badge in badges"
          :key="badge"
          size="small"
          color="primary"
          class="mr-1 mb-1"
          variant="tonal"
        >
          {{ badge }}
        </v-chip>
      </v-card-subtitle>
    </v-card-item>
    <v-card-text>
      <div class="text-h6 mb-2">₡{{ price }}</div>
      <div class="mb-2">Ubicaciones: {{ locations.join(', ') }}</div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="primary"
        :href="`https://wa.me/50670763760?text=Hola%20Gioco%21%20Quiero%20reservar%20el%20${encodeURIComponent(title)}`"
        target="_blank"
        rel="noopener noreferrer"
      >
        Reservar Este Taller
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
interface Taller {
  title: string
  technique: string
  image: string
  price: number
  locations: string[]
  badges: string[]
}

const props = defineProps<Taller>()
</script>
