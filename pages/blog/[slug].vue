<template>
  <div>
    <BlogReadingProgress />
    <v-container class="py-0" style="max-width: 680px">
      <BlogNavigation class="mb-4" />
      <v-skeleton-loader v-if="loading" type="article" />
      <template v-else-if="post">
        <BlogArticleHeader :post="post" class="mb-6" />
        <BlogContent :post="post" />
        <BlogShare :post="post" class="my-6" />
        <BlogRelated :posts="related" class="my-8" />
        <div class="text-center my-8">
          <v-btn to="/blog" color="primary">Ver Más Artículos del Blog</v-btn>
        </div>
      </template>
      <p v-else>No se encontró el artículo.</p>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { defineAsyncComponent } from 'vue'
import { useBlog } from '~/composables/useBlog'
import { useSeo } from '~/composables/useSeo'
import type { BlogPost } from '~/composables/useBlog'

const BlogContent = defineAsyncComponent(() => import('~/components/blog/BlogContent.vue'))
const BlogNavigation = defineAsyncComponent(() => import('~/components/blog/BlogNavigation.vue'))
const BlogReadingProgress = defineAsyncComponent(() => import('~/components/blog/BlogReadingProgress.vue'))
const BlogArticleHeader = defineAsyncComponent(() => import('~/components/blog/BlogArticleHeader.vue'))
const BlogShare = defineAsyncComponent(() => import('~/components/blog/BlogShare.vue'))
const BlogRelated = defineAsyncComponent(() => import('~/components/blog/BlogRelated.vue'))

const route = useRoute()
const router = useRouter()
const { fetchBlogPost, fetchBlogPosts, loading, all } = useBlog()
const post = ref<BlogPost>()
const related = ref<BlogPost[]>([])

onMounted(async () => {
  const data = await fetchBlogPost(route.params.slug as string)
  if (!data) {
    router.push('/blog')
    return
  }
  post.value = data
  useSeo(data)
  await fetchBlogPosts()
  related.value = all.value
    .filter(p => p.slug !== data.slug && (p.category === data.category || p.tags?.some(tag => data.tags?.includes(tag))))
    .slice(0, 3)
})
</script>
