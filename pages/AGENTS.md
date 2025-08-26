# Overview and Purpose
Route components that render public pages for the site.

# Technical Specifications
- Files in this directory are automatically registered as routes by Nuxt 4
- Pages compose UI from components and use `<script setup lang="ts">`

# Usage Examples
```vue
<script setup lang="ts">
// page-specific logic
</script>

<template>
  <HeroSection />
</template>
```

# Best Practices
- Keep templates declarative and move complex logic into reusable components or composables
- Use descriptive Spanish file names that map directly to route paths
- Add SEO metadata within the `<head>` helper when required

# Common Issues and Solutions
- **Unexpected route path**: ensure the file name matches the desired URL segment
- **Large pages**: break repeated sections into smaller components to improve maintainability

# Related Documentation
- [../AGENTS.md](../AGENTS.md)
- [../components/AGENTS.md](../components/AGENTS.md)
- [../layouts/AGENTS.md](../layouts/AGENTS.md)

