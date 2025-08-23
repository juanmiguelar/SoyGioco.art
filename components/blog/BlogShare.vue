<template>
  <div class="my-4">
    <v-btn icon :href="`https://wa.me/?text=${encodeURIComponent(`Mira este artículo sobre arte: ${url}`)}`" target="_blank">
      <v-icon>mdi-whatsapp</v-icon>
    </v-btn>
    <v-btn icon :href="`https://www.facebook.com/sharer/sharer.php?u=${url}`" target="_blank">
      <v-icon>mdi-facebook</v-icon>
    </v-btn>
    <v-btn icon :href="`https://twitter.com/intent/tweet?url=${url}`" target="_blank">
      <v-icon>mdi-twitter</v-icon>
    </v-btn>
    <v-btn icon :href="`mailto:?subject=${post.title}&body=${url}`">
      <v-icon>mdi-email</v-icon>
    </v-btn>
    <v-btn icon href="https://instagram.com/soygioco.cr" target="_blank">
      <v-icon>mdi-instagram</v-icon>
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { BlogPost } from '~/composables/useBlog'
const props = defineProps<{ post: BlogPost }>()
const url = computed(() => `https://soygioco.art/blog/${props.post.slug}`)
</script>
