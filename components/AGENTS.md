# Overview and Purpose
Reusable Vue components that assemble the application's UI, from navigation to galleries and contact forms.

# Technical Specifications
- Built with Vue 3 `<script setup lang="ts">`
- Styled using Vuetify 3.6.0 components and utility classes
- Auto-registered by Nuxt 4 when placed in this directory

# Usage Examples
```vue
<template>
  <Navbar />
</template>
```

# Best Practices
- Name components in PascalCase and keep them focused on a single responsibility
- Type props and emitted events for maintainability
- Share logic through composables instead of duplicating code

# Common Issues and Solutions
- **Unstyled output**: ensure pages using these components are wrapped in a layout that provides the `v-app` container
- **Component not found**: verify the file resides in the `components/` folder for Nuxt's auto-import to work

# Related Documentation
- [../AGENTS.md](../AGENTS.md)
- [../pages/AGENTS.md](../pages/AGENTS.md)
- [../layouts/AGENTS.md](../layouts/AGENTS.md)
- [../plugins/AGENTS.md](../plugins/AGENTS.md)

