import { useStrapi as useNuxtStrapi, useRuntimeConfig, useState } from '#imports'
import blogPosts from '~/data/blog-posts'

interface FindResponse<T> {
  data: T
}

interface StrapiClient {
  find: (endpoint: string, params?: any) => Promise<FindResponse<any>>
}

export const useStrapiApi = (): StrapiClient => {
  const config = useRuntimeConfig()
  const cache = useState<Record<string, any>>('strapi-cache', () => ({}))

  if (config.public.strapiURL) {
    const client = useNuxtStrapi()

    return {
      async find(endpoint: string, params?: any) {
        const key = endpoint + JSON.stringify(params || {})
        if (cache.value[key]) return cache.value[key]
        try {
          const res = await client.find(endpoint, params)
          cache.value[key] = res
          return res as FindResponse<any>
        } catch (e) {
          console.error('Strapi request failed', e)
          return { data: [] }
        }
      }
    }
  }

  // Mock fallback
  return {
    async find(endpoint: string) {
      if (endpoint === 'articles') {
        return { data: blogPosts }
      }
      return { data: [] }
    }
  }
}
