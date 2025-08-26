# Overview and Purpose
Route components that render public pages for the site, including dynamic blog routes.

# Technical Specifications
- Files in this directory are automatically registered as routes by Nuxt 4
- Pages compose UI from components and use `<script setup lang="ts">`
- Blog pages under `/blog` fetch articles from Strapi via composables

# Usage Examples
```vue
<script setup lang="ts">
const { all, fetchBlogPosts } = useBlog()
await fetchBlogPosts()
</script>

<template>
  <BlogCard v-for="post in all" :key="post.id" :post="post" />
</template>
```

# Best Practices
- Keep templates declarative and move complex logic into reusable components or composables
- Use descriptive Spanish file names that map directly to route paths
- Add SEO metadata within the `<head>` helper when required
- Leverage composables like `useBlog` for data fetching

# Common Issues and Solutions
- **Unexpected route path**: ensure the file name matches the desired URL segment
- **Large pages**: break repeated sections into smaller components to improve maintainability

# Related Documentation
- [../AGENTS.md](../AGENTS.md)
- [../components/AGENTS.md](../components/AGENTS.md)
- [../layouts/AGENTS.md](../layouts/AGENTS.md)
- [../composables/AGENTS.md](../composables/AGENTS.md)
- [../data/AGENTS.md](../data/AGENTS.md)

