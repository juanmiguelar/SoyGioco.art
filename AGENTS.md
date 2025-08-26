# Overview and Purpose
SoyGioco.art is a Nuxt 4.0.3 application that showcases artwork, services and community content using Vue 3 and Vuetify for a responsive UI.

# Technical Specifications
- **Framework**: Nuxt 4.0.3 with Vue 3 Composition API
- **UI Library**: Vuetify 3.6.0 with MDI icons
- **Modules**: `@nuxtjs/sitemap` for SEO and `@nuxtjs/strapi` for upcoming CMS integration
- **Configuration**: `nuxt.config.ts` defines site metadata, custom sitemap routes and the Vite Vuetify plugin
- **Plugins**: `plugins/vuetify.ts` registers a custom `soygioco` theme

# Usage Examples
```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/sitemap', '@nuxtjs/strapi']
})
```

# Best Practices
- Write components and pages using `<script setup lang="ts">`
- Keep logic modular and reusable through components and composables
- Update directory-specific `AGENTS.md` files when adding new features

# Common Issues and Solutions
- **Vuetify build errors**: ensure the Vuetify plugin is registered and included in `build.transpile`
- **Missing dependencies**: run `npm install` after modifying `package.json`

# Related Documentation
- [components/AGENTS.md](components/AGENTS.md)
- [pages/AGENTS.md](pages/AGENTS.md)
- [layouts/AGENTS.md](layouts/AGENTS.md)
- [plugins/AGENTS.md](plugins/AGENTS.md)
- [public/AGENTS.md](public/AGENTS.md)

