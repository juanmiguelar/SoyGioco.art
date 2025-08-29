<template>
  <div>
    <v-img
      :src="url"
      :alt="post.featured_image.alt"
      height="400"
      class="mb-4"
      cover
      loading="lazy"
    />
    <div class="article-content" v-html="html" />
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
})
</script>

<style scoped>
.article-content {
  line-height: 1.7;
  font-size: 18px;
}
.article-content p {
  margin-bottom: 1.5em;
}
.article-content img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 16px auto;
}
.article-content h2 {
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}
</style>
