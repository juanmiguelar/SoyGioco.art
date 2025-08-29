import type { Ref } from 'vue'
import type { BlogPost } from './useBlog'

export const useBlogSearch = (posts: Ref<BlogPost[]>) => {
  const search = ref('')
  const selectedCategories = ref<string[]>([])
  const sort = ref<'recent' | 'old'>('recent')
  const page = ref(1)
  const perPage = 6

  const categories = computed(() => {
    const map = new Map<string, number>()
    posts.value.forEach(p => {
      map.set(p.category, (map.get(p.category) || 0) + 1)
    })
    return Array.from(map.entries()).map(([name, count]) => ({ name, count }))
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
    if (selectedCategories.value.length) {
      result = result.filter(p => selectedCategories.value.includes(p.category))
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
    selectedCategories.value = []
    sort.value = 'recent'
    page.value = 1
  }

  watch([search, selectedCategories, sort], () => {
    page.value = 1
  })

  return {
    search,
    selectedCategories,
    sort,
    categories,
    filtered,
    paginated,
    hasMore,
    loadMorePosts,
    resetFilters
  }
}
