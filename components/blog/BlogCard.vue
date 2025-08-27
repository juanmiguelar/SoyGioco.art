<template>
  <v-card :to="`/blog/${post.slug}`" class="mx-auto" max-width="344">
    <v-img :src="url" :alt="post.featured_image.alt" height="200" cover />
    <v-card-title>{{ post.title }}</v-card-title>
    <v-card-subtitle>{{ post.description }}</v-card-subtitle>
  </v-card>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/composables/useBlog'
const runtimeConfig = useRuntimeConfig();
const url = ref('')

const props = defineProps<{ post: BlogPost }>()

onMounted(async ()=> {
  url.value = runtimeConfig.public.strapiURL + props.post.featured_image.url
})
</script>
