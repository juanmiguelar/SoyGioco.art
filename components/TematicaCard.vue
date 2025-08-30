<template>
  <v-hover v-slot="{ isHovering, props: hoverProps }">
    <v-card
      v-bind="hoverProps"
      class="transition-smooth d-flex flex-column h-100"
      :elevation="isHovering ? 8 : 2"
      :style="{ transform: isHovering ? 'scale(1.02)' : 'scale(1)' }"
    >
      <v-img
        :src="image"
        :alt="alt"
        height="180"
        cover
      />
      <v-card-item>
        <v-card-title class="text-h6">{{ title }}</v-card-title>
        <v-card-subtitle class="text-body-2">
          {{ description }}
        </v-card-subtitle>
      </v-card-item>
      <v-card-text class="mt-auto">
        <div class="d-flex flex-wrap gap-2 mb-2">
          <v-chip
            v-for="tech in techniques"
            :key="tech"
            size="small"
            color="primary"
            variant="tonal"
          >
            {{ tech }}
          </v-chip>
        </div>
        <div class="text-caption text-medium-emphasis">
          Nivel: {{ difficulty }}
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" variant="text" size="small">
          Ver Talleres de Esta Temática
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Tematica {
  title: string
  description: string
  image: string
  techniques: string[]
  difficulty: string
}

const props = defineProps<Tematica>()
const alt = computed(() => `Arte de la temática ${props.title}`)
</script>
