<template>
  <v-container>
    <BlogNavigation class="mb-4" />
    <v-skeleton-loader v-if="loading" type="article" />
    <template v-else-if="post">
      <h1 class="text-h4 mb-4">{{ post.title }}</h1>
      <BlogContent :post="post" />
    </template>
    <p v-else>No se encontró el artículo.</p>
  </v-container>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { defineAsyncComponent } from 'vue'
import { useBlog } from '~/composables/useBlog'
import { useSeo } from '~/composables/useSeo'

const BlogContent = defineAsyncComponent(() => import('~/components/blog/BlogContent.vue'))
const BlogNavigation = defineAsyncComponent(() => import('~/components/blog/BlogNavigation.vue'))
const route = useRoute()
const router = useRouter()
const { fetchBlogPost, loading } = useBlog()
const post = ref()

onMounted(async () => {
  const data = await fetchBlogPost(route.params.slug as string)
  if (!data) {
    router.push('/blog')
    return
  }
  post.value = data
  useSeo(data)
})
</script>
