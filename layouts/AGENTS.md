# Overview and Purpose
Layout templates that wrap page content and provide persistent UI elements like navigation and footers.

# Technical Specifications
- Nuxt 4 loads layouts from this directory; `default.vue` is applied when no other layout is specified
- Layouts typically include Vuetify's `v-app` wrapper and import shared components
- Pages can opt into alternative layouts via `definePageMeta({ layout: 'name' })`

# Usage Examples
```vue
<!-- layouts/default.vue -->
<template>
  <Navbar />
  <v-main>
    <slot />
  </v-main>
  <Footer />
  <WhatsAppButton />
</template>
```

# Best Practices
- Keep layout logic minimal; delegate features to components
- Provide the `v-app` container here so pages and components inherit Vuetify styling
- Create new layout files when a distinct structure is required

# Common Issues and Solutions
- **Missing Vuetify styles**: verify that the layout includes the `v-app` wrapper
- **Layout not applied**: ensure the layout filename matches the value passed to `definePageMeta`

# Related Documentation
- [../AGENTS.md](../AGENTS.md)
- [../components/AGENTS.md](../components/AGENTS.md)
- [../pages/AGENTS.md](../pages/AGENTS.md)
- [../composables/AGENTS.md](../composables/AGENTS.md)

