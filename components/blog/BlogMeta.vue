<template>
  <div class="d-flex align-center text-caption ma-2">
    <span class="me-2">{{ new Date(post.created_at).toLocaleDateString('es-CR') }}</span>
    <span>{{ post.reading_time }} min de lectura</span>
  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/composables/useBlog'

defineProps<{ post: BlogPost }>()
</script>
