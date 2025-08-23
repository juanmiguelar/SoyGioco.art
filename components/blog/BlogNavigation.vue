<template>
  <div class="d-flex justify-space-between my-8">
    <div v-if="prev">
      <v-btn :to="`/blog/${prev.slug}`" variant="text">← {{ prev.title }}</v-btn>
    </div>
    <div v-if="next">
      <v-btn :to="`/blog/${next.slug}`" variant="text">{{ next.title }} →</v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/composables/useBlog'

defineProps<{ prev?: BlogPost; next?: BlogPost }>()
</script>
