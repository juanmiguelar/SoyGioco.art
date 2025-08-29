<template>
  <header>
    <v-breadcrumbs :items="items" class="mb-2" />
    <h1 class="text-h4 mb-2">{{ post.title }}</h1>
    <BlogMeta :post="post" />
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { BlogPost } from '~/composables/useBlog'
const props = defineProps<{ post: BlogPost }>()

const items = computed(() => [
  { title: 'Inicio', to: '/' },
  { title: 'Blog', to: '/blog' },
  { title: props.post.category, to: `/blog?category=${encodeURIComponent(props.post.category)}` },
  { title: props.post.title }
])
</script>
