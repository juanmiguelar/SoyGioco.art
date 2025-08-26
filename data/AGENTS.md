# Overview and Purpose
Static TypeScript modules that provide mock data or constants used throughout the app. Currently used to supply blog posts when the Strapi CMS is unavailable.

# Technical Specifications
- Files export typed data structures for direct import
- `blog-posts.ts` contains an array of article records mirroring the Strapi schema
- Imports use the `~/data` alias for clarity

# Usage Examples
```ts
import blogPosts from '~/data/blog-posts'

console.log(blogPosts.length)
```

# Best Practices
- Keep mock data minimal and representative of real responses
- Update interfaces when the backend schema changes
- Separate large datasets into multiple files if needed

# Common Issues and Solutions
- **Stale mock content**: refresh the data to match current API responses
- **Incorrect import path**: prefix with `~/data` to resolve files properly

# Related Documentation
- [../AGENTS.md](../AGENTS.md)
- [../composables/AGENTS.md](../composables/AGENTS.md)

