<template>
  <div class="my-4">
    <v-btn
      icon
      color="success"
      :href="`https://wa.me/50670763760?text=${encodeURIComponent(message)}`"
      target="_blank"
    >
      <v-icon>mdi-whatsapp</v-icon>
    </v-btn>
    <v-btn
      icon
      color="blue-darken-2"
      :href="`https://www.facebook.com/sharer/sharer.php?u=${url}`"
      target="_blank"
    >
      <v-icon>mdi-facebook</v-icon>
    </v-btn>
    <v-btn
      icon
      color="blue-lighten-1"
      :href="`https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent(post.title)}`"
      target="_blank"
    >
      <v-icon>mdi-twitter</v-icon>
    </v-btn>
    <v-btn icon :href="`mailto:?subject=${post.title}&body=${url}`">
      <v-icon>mdi-email</v-icon>
    </v-btn>
    <v-btn icon @click="copyLink">
      <v-icon>mdi-link-variant</v-icon>
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { BlogPost } from '~/composables/useBlog'
const props = defineProps<{ post: BlogPost }>()
const url = computed(() => `https://soygioco.art/blog/${props.post.slug}`)
const message = computed(() => `Mira este artículo sobre arte: ${url.value}`)

const copyLink = () => {
  navigator.clipboard?.writeText(url.value)
}
</script>
