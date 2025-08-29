# Overview and Purpose
Reusable logic and state management functions built with the Vue 3 Composition API. They coordinate data fetching, SEO metadata, and cross-component state.

# Technical Specifications
- Implemented as TypeScript modules returning functions that can be used in components and pages
- `useStrapiApi` wraps `@nuxtjs/strapi` to fetch CMS content with caching
- `useBlog` exposes helpers for retrieving blog posts and articles
- Other helpers like `useSeo` manage meta tags for SEO

# Usage Examples
```ts
<script setup lang="ts">
const { all, fetchBlogPosts } = useBlog()
await fetchBlogPosts()
</script>
```

# Best Practices
- Prefix files with `use` and keep them focused on a single responsibility
- Return reactive state via `ref`/`computed` and expose only necessary values
- Handle network errors gracefully and provide fallbacks

# Common Issues and Solutions
- **`undefined` runtime config**: check that required environment variables like `STRAPI_URL` are set
- **State not updating**: ensure reactive values are created with `ref` or `reactive`

# Related Documentation
- [../AGENTS.md](../AGENTS.md)
- [../components/AGENTS.md](../components/AGENTS.md)
- [../pages/AGENTS.md](../pages/AGENTS.md)
- [../data/AGENTS.md](../data/AGENTS.md)

