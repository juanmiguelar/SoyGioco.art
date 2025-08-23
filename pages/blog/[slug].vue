<template>
  <v-container>
    <v-breadcrumbs :items="breadcrumbs" class="mb-4" />
    <BlogHero :post="post" />
    <BlogMeta :post="post" />
    <BlogShare :post="post" />
    <BlogContent :post="post" />
    <BlogNavigation :prev="prev" :next="next" />
    <BlogRelated :posts="related" />
  </v-container>
</template>

<script setup lang="ts">
import { useBlogSeo } from '~/composables/useBlogSeo'
import { useBlog } from '~/composables/useBlog'

const route = useRoute()
const { all, load } = useBlog()
await load()
const post = computed(() => all.value.find(p => p.slug === route.params.slug))
if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Not found' })
}

useBlogSeo(post.value)

const breadcrumbs = [
  { title: 'Inicio', to: '/' },
  { title: 'Blog', to: '/blog' },
  { title: post.value.category, to: `/blog?category=${encodeURIComponent(post.value.category)}` },
  { title: post.value.title, disabled: true }
]

const index = all.value.findIndex(p => p.slug === post.value!.slug)
const prev = index < all.value.length - 1 ? all.value[index + 1] : null
const next = index > 0 ? all.value[index - 1] : null
const related = all.value
  .filter(p => p.slug !== post.value!.slug && (p.category === post.value!.category || p.tags?.some(t => post.value!.tags?.includes(t))))
  .slice(0, 3)
</script>
