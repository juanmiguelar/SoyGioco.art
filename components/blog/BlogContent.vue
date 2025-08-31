<template>
  <div>
    <NuxtImg
      :src="url"
      :alt="post.featured_image.alt"
      width="600"
      height="400"
      format="webp"
      priority
      class="mb-4"
    />
    <div class="article-content" v-html="html" />
  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/composables/useBlog'
import { marked } from 'marked'

const runtimeConfig = useRuntimeConfig();

const props = defineProps<{ post: BlogPost }>()

const url = computed(() =>
  props.post?.featured_image?.url
    ? runtimeConfig.public.strapiURL + props.post.featured_image.url
    : '/img/logo.jpg'
)

const html = computed(() => marked.parse(props.post.content))
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
