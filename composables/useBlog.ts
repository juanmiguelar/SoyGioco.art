import type { Ref } from 'vue'

export interface BlogPost {
  id: number
  slug: string
  title: string
  description: string
  featured_image: string
  category: string
  created_at: string
  reading_time: number
  meta_title?: string
  meta_description?: string
  tags?: string[]
}

export const useBlog = () => {
  const all: Ref<BlogPost[]> = ref([])
  const search = ref('')
  const category = ref('')
  const sort = ref<'recent' | 'old'>('recent')
  const page = ref(1)
  const perPage = 6
  const loading = ref(false)

  const load = async () => {
    loading.value = true
    const query = queryContent<BlogPost>('blog').sort({ created_at: -1 })
    all.value = await query.find()
    loading.value = false
  }

  const categories = computed(() => Array.from(new Set(all.value.map(p => p.category))))

  const filtered = computed(() => {
    let posts = all.value
    if (search.value) {
      const term = search.value.toLowerCase()
      posts = posts.filter(p => p.title.toLowerCase().includes(term) || p.description.toLowerCase().includes(term))
    }
    if (category.value) {
      posts = posts.filter(p => p.category === category.value)
    }
    if (sort.value === 'old') {
      posts = [...posts].sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
    }
    return posts
  })

  const paginated = computed(() => filtered.value.slice(0, page.value * perPage))
  const hasMore = computed(() => paginated.value.length < filtered.value.length)
  const loadMore = () => {
    if (hasMore.value) page.value++
  }

  return {
    all,
    load,
    search,
    category,
    categories,
    sort,
    paginated,
    hasMore,
    loadMore,
    loading
  }
}
