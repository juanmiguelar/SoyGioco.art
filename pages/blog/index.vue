<template>
  <v-container>
    <BlogSearch
      :search="search"
      :category="category"
      :sort="sort"
      :categories="categories"
      @update:search="search = $event"
      @update:category="category = $event"
      @update:sort="sort = $event"
    />
    <BlogCard v-for="post in paginated" :key="post.slug" :post="post" />
    <BlogSkeleton v-for="n in (loading ? 3 : 0)" :key="`skeleton-${n}`" />
    <div ref="infinite" />
    <p v-if="!hasMore && !loading" class="text-center my-4">Has visto todos nuestros artículos</p>
  </v-container>
</template>

<script setup lang="ts">
import { useBlog } from '~/composables/useBlog'
import { useInfiniteScroll } from '~/composables/useInfiniteScroll'

const { search, category, sort, categories, paginated, hasMore, load, loadMore, loading } = useBlog()
await load()
const { target: infinite } = useInfiniteScroll(() => {
  if (hasMore.value && !loading.value) {
    loadMore()
  }
})
</script>
