<template>
  <div>
    <v-img :src="post.featured_image" :alt="post.title" height="300" cover loading="lazy" class="mb-4" />
    <h1 class="text-h4 text-center">{{ post.title }}</h1>
  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/composables/useBlog'

defineProps<{ post: BlogPost }>()
</script>
