import type { Ref } from 'vue'

export interface BlogPost {
  id: number
  slug: string
  title: string
  description: string
  content: string
  featured_image: { url: string; alt: string }
  category: string
  created_at: string
  reading_time: number
  meta_title?: string
  meta_description?: string
  tags?: string[]
}

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
  categories?: Array<{ id: number; name: string }>
  tags?: Array<{ id: number; name: string }>
}

const transformStrapiArticle = (article: StrapiArticle): BlogPost => ({
  id: article.id,
  slug: article.slug,
  title: article.title,
  description: article.description,
  content: article.content,
  featured_image: {
    url: article.featured_image?.url || '',
    alt: article.featured_image?.alternativeText || ''
  },
  category: article.categories?.[0]?.name || 'General',
  created_at: article.created_at_date,
  reading_time: calculateReadingTime(article.content),
  meta_title: article.meta_title,
  meta_description: article.meta_description,
  tags: article.tags?.map(tag => tag.name) || []
})

const calculateReadingTime = (content: string): number => {
  const wordsPerMinute = 200
  const words = content.split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

export const useBlog = () => {
  const { find } = useStrapiApi()

  const all: Ref<BlogPost[]> = ref([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchBlogPosts = async (params: any = {}) => {
    loading.value = true
    error.value = null
    try {
      const response = await find('articles', {
        populate: ['featured_image', 'categories', 'tags'],
        ...params
      } as any)
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

  const fetchBlogPost = async (slug: string): Promise<BlogPost | null> => {
    loading.value = true
    error.value = null
    try {
      const response = await find('articles', {
        filters: { slug },
        populate: ['featured_image', 'categories', 'tags']
      } as any)
      if (response.data && response.data.length > 0) {
        return transformStrapiArticle(response.data[0] as unknown as StrapiArticle)
      }
      return null
    } catch (err) {
      console.error('Error fetching article by slug:', err)
      error.value = 'Failed to load article'
      return null
    } finally {
      loading.value = false
    }
  }

  return {
    all,
    loading,
    error,
    fetchBlogPosts,
    fetchBlogPost
  }
}
