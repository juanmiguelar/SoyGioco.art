import type { Ref } from 'vue'
import type { BlogPost } from './useBlog'

export const useBlogSearch = (posts: Ref<BlogPost[]>) => {
  const search = ref('')
  const category = ref('')
  const sort = ref<'recent' | 'old'>('recent')
  const page = ref(1)
  const perPage = 6

  const categories = computed(() => {
    return Array.from(new Set(posts.value.map(p => p.category)))
  })

  const filtered = computed(() => {
    let result = posts.value
    if (search.value) {
      const term = search.value.toLowerCase()
      result = result.filter(p =>
        p.title.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term) ||
        p.tags?.some(tag => tag.toLowerCase().includes(term))
      )
    }
    if (category.value) {
      result = result.filter(p => p.category === category.value)
    }
    if (sort.value === 'old') {
      result = [...result].sort(
        (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      )
    } else {
      result = [...result].sort(
        (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      )
    }
    return result
  })

  const paginated = computed(() => filtered.value.slice(0, page.value * perPage))
  const hasMore = computed(() => paginated.value.length < filtered.value.length)

  const loadMorePosts = () => {
    if (hasMore.value) page.value++
  }

  const resetFilters = () => {
    search.value = ''
    category.value = ''
    sort.value = 'recent'
    page.value = 1
  }

  watch([search, category, sort], () => {
    page.value = 1
  })

  return {
    search,
    category,
    sort,
    categories,
    paginated,
    hasMore,
    loadMorePosts,
    resetFilters
  }
}
