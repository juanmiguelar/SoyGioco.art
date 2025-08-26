<template>
  <v-card :to="`/blog/${post.slug}`" class="mx-auto" max-width="344">
    <v-img :src="post.featured_image.url" :alt="post.featured_image.alt" height="200" cover />
    <v-card-title>{{ post.title }}</v-card-title>
    <v-card-subtitle>{{ post.description }}</v-card-subtitle>
  </v-card>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/composables/useBlog'

defineProps<{ post: BlogPost }>()
</script>
