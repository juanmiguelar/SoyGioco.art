<template>
  <div>
    <v-img :src="post.featured_image.url" :alt="post.featured_image.alt" height="400" class="mb-4" cover />
    <div v-html="html" />
  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/composables/useBlog'

const props = defineProps<{ post: BlogPost }>()
const html = ref('')

onMounted(async () => {
  const { marked } = await import('marked')
  html.value = marked.parse(props.post.content)
})
</script>
