<template>
  <div v-if="posts.length">
    <h2 class="text-h5 mb-4">Artículos Relacionados</h2>
    <v-row>
      <v-col v-for="p in posts" :key="p.slug" cols="12" md="4">
        <v-card :to="`/blog/${p.slug}`" elevation="1">
          <v-img :src="p.featured_image" :alt="p.title" height="120" cover loading="lazy" />
          <v-card-title class="text-body-1">{{ p.title }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/composables/useBlog'

defineProps<{ posts: BlogPost[] }>()
</script>
