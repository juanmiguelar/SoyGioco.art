<template>
  <v-container>
    <BlogHero />
    <BlogSearch
      v-model:search="search"
      v-model:selectedCategories="selectedCategories"
      :categories="categories"
    />
    <v-alert v-if="!loading" variant="tonal" class="mb-4">
      {{ filtered.length }} resultados encontrados
    </v-alert>
    <BlogSkeleton v-if="loading" />
    <div v-else>
      <v-alert v-if="filtered.length === 0" type="warning" class="mb-4">
        No se encontraron resultados. Intenta ajustar tu búsqueda o filtros.
      </v-alert>
      <v-row v-else>
        <v-col v-for="post in paginated" :key="post.id" cols="12" sm="6" md="4" lg="3">
          <BlogCard :post="post" />
        </v-col>
      </v-row>
    </div>
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

const { search, selectedCategories, categories, filtered, paginated, hasMore, loadMorePosts } = useBlogSearch(all)

const { target: infiniteRef } = useInfiniteScroll(() => {
  if (hasMore.value && !loading.value) {
    loadMorePosts()
  }
})
</script>
