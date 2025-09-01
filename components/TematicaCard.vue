<template>
  <v-hover v-slot="{ isHovering, props: hoverProps }">
    <v-card
      v-bind="hoverProps"
      :id="props.id"
      class="transition-smooth d-flex flex-column h-100"
      :elevation="isHovering ? 8 : 2"
      :style="{ transform: isHovering ? 'scale(1.02)' : 'scale(1)' }"
    >
      <div class="nuxt-img-container">
        <NuxtImg
          :src="image"
          :alt="alt"
          width="240"
          height="180"
          class="nuxt-img-cover aspect-4-3"
          loading="eager"
          fetchpriority="high"
          decoding="sync"
          sizes="sm:100vw md:50vw lg:400px"
        />
      </div>
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
  id?: string
  featured?: boolean
  title: string
  description: string
  image: string
  techniques: string[]
  difficulty: string
}

const props = withDefaults(
  defineProps<Tematica>(),
  {
    featured: false,
  }
)

const alt = computed(() => `Arte de la temática ${props.title}`)
</script>
