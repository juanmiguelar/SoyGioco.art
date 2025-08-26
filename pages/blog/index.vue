<template>
  <v-container>
    <BlogHero />
    <BlogSearch
      v-model:search="search"
      v-model:category="category"
      :categories="categories"
    />
    <BlogSkeleton v-if="loading" />
    <v-row v-else>
      <v-col v-for="post in paginated" :key="post.id" cols="12" md="4">
        <BlogCard :post="post" />
      </v-col>
    </v-row>
    <div ref="infiniteRef"></div>
  </v-container>
</template>

<script setup lang="ts">
import BlogHero from '~/components/blog/BlogHero.vue'
import BlogSearch from '~/components/blog/BlogSearch.vue'
import BlogCard from '~/components/blog/BlogCard.vue'
import BlogSkeleton from '~/components/blog/BlogSkeleton.vue'
import { useBlog } from '~/composables/useBlog'
import { useBlogSearch } from '~/composables/useBlogSearch'
import { useInfiniteScroll } from '~/composables/useInfiniteScroll'

const { all, loading, fetchBlogPosts } = useBlog()

onMounted(fetchBlogPosts)

const { search, category, categories, paginated, hasMore, loadMorePosts } = useBlogSearch(all)

const { target: infiniteRef } = useInfiniteScroll(() => {
  if (hasMore.value && !loading.value) {
    loadMorePosts()
  }
})
</script>
