<template>
  <div>
    <v-img :src="url" :alt="post.featured_image.alt" height="400" class="mb-4" cover />
    <div v-html="html" />
  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/composables/useBlog'
const runtimeConfig = useRuntimeConfig();

const props = defineProps<{ post: BlogPost }>()
const html = ref('')
const url = ref('')

onMounted(async () => {
  const { marked } = await import('marked')
  html.value = marked.parse(props.post.content)
  url.value = runtimeConfig.public.strapiURL + props.post?.featured_image?.url
  console.log(url.value)
})
</script>
