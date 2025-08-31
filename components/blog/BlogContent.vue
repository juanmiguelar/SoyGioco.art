<template>
  <div>
    <div class="nuxt-img-container mb-4">
      <NuxtImg
        :src="url"
        :alt="post.featured_image.alt || 'Imagen'"
        width="600"
        height="400"
        class="nuxt-img-cover aspect-3-2"
        loading="eager"
        fetchpriority="high"
        decoding="sync"
        sizes="sm:100vw md:50vw lg:400px"
      />
    </div>
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
