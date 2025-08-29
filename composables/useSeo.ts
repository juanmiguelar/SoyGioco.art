import type { BlogPost } from './useBlog'

export const useSeo = (post: BlogPost) => {
  useSeoMeta({
    title: post.meta_title || `${post.title} | Blog Soy Gioco`,
    description: post.meta_description || post.description,
    ogImage: post.featured_image.url,
    ogUrl: `https://soygioco.art/blog/${post.slug}`,
    ogType: 'article',
    twitterCard: 'summary_large_image'
  })
}
