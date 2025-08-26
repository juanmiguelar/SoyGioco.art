import type { Ref } from 'vue'

const { find } = useStrapi()

export interface BlogPost {
  id: number
  slug: string
  title: string
  description: string
  content: string
  featured_image: string
  category: string
  created_at: string
  reading_time: number
  meta_title?: string
  meta_description?: string
  tags?: string[]
}

// Updated interface to match Strapi v5 response structure
export interface StrapiArticle {
  id: number
  documentId: string
  slug: string
  title: string
  description: string
  content: string
  featured_image?: {
    id: number
    url: string
    alternativeText?: string
  }
  created_at_date: string
  meta_title?: string
  meta_description?: string
  author?: {
    id: number
    username: string
  }
  categories?: Array<{
    id: number
    name: string
  }>
  tags?: Array<{
    id: number
    name: string
  }>
}

// Helper function to transform Strapi data to BlogPost format
const transformStrapiArticle = (article: StrapiArticle): BlogPost => {
  return {
    id: article.id,
    slug: article.slug,
    title: article.title,
    description: article.description,
    content: article.content,
    featured_image: article.featured_image?.url || '',
    category: article.categories?.[0]?.name || 'General',
    created_at: article.created_at_date,
    reading_time: calculateReadingTime(article.content),
    meta_title: article.meta_title,
    meta_description: article.meta_description,
    tags: article.tags?.map(tag => tag.name) || []
  }
}

// Helper function to calculate reading time (approximate)
const calculateReadingTime = (content: string): number => {
  const wordsPerMinute = 200
  const words = content.split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

export const useBlog = () => {
  const all: Ref<BlogPost[]> = ref([])
  const search = ref('')
  const category = ref('')
  const sort = ref<'recent' | 'old'>('recent')
  const page = ref(1)
  const perPage = 6
  const loading = ref(false)
  const error = ref<string | null>(null)

  const load = async () => {
    loading.value = true
    error.value = null
    
    try {
      // Fetch articles from Strapi with populated relations
      const response = await find('articles', {
        populate: ['featured_image', 'author', 'categories', 'tags']
      } as any)

      // Transform Strapi data to BlogPost format
      if (response.data) {
        all.value = (response.data as unknown as StrapiArticle[]).map(transformStrapiArticle)
      }
    } catch (err) {
      console.error('Error fetching articles:', err)
      error.value = 'Failed to load articles'
      all.value = []
    } finally {
      loading.value = false
    }
  }

  // Get unique categories from all posts
  const categories = computed(() => {
    return Array.from(new Set(all.value.map(p => p.category)))
  })

  // Filter posts based on search term and category
  const filtered = computed(() => {
    let posts = all.value
    
    if (search.value) {
      const term = search.value.toLowerCase()
      posts = posts.filter(p => 
        p.title.toLowerCase().includes(term) || 
        p.description.toLowerCase().includes(term) ||
        p.tags?.some(tag => tag.toLowerCase().includes(term))
      )
    }
    
    if (category.value) {
      posts = posts.filter(p => p.category === category.value)
    }
    
    // Apply sorting
    if (sort.value === 'old') {
      posts = [...posts].sort((a, b) => 
        new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      )
    } else {
      posts = [...posts].sort((a, b) => 
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      )
    }
    
    return posts
  })

  // Paginate results
  const paginated = computed(() => filtered.value.slice(0, page.value * perPage))
  
  const hasMore = computed(() => paginated.value.length < filtered.value.length)
  
  const loadMore = () => {
    if (hasMore.value) {
      page.value++
    }
  }

  // Reset pagination when filters change
  watch([search, category, sort], () => {
    page.value = 1
  })

  // Get single article by slug
  const getBySlug = async (slug: string): Promise<BlogPost | null> => {
    try {
      const response = await find('articles', {
        filters: {
          slug: slug
        },
        populate: ['featured_image', 'author', 'categories', 'tags']
      } as any)

      if (response.data && response.data.length > 0) {
        return transformStrapiArticle(response.data[0] as unknown as StrapiArticle)
      }
      
      return null
    } catch (err) {
      console.error('Error fetching article by slug:', err)
      return null
    }
  }

  return {
    // Data
    all,
    search,
    category,
    sort,
    loading,
    error,
    
    // Computed
    categories,
    filtered,
    paginated,
    hasMore,
    
    // Methods
    load,
    loadMore,
    getBySlug
  }
}