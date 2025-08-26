# Overview and Purpose
Nuxt plugins extend the application with global functionality, such as registering libraries or providing injected helpers.

# Technical Specifications
- Files here run in both client and server contexts when named `*.ts`
- `vuetify.ts` instantiates Vuetify with a custom `soygioco` theme and registers it on the Vue app
- Plugins must export a default function created with `defineNuxtPlugin`

# Usage Examples
```ts
// plugins/vuetify.ts
export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    theme: { defaultTheme: 'soygioco' }
  })
  nuxtApp.vueApp.use(vuetify)
})
```

# Best Practices
- Keep each plugin focused on a single responsibility
- Use TypeScript to benefit from Nuxt's typed contexts
- Place reusable logic in plugins rather than duplicating setup in components

# Common Issues and Solutions
- **Plugin not loaded**: ensure the file resides in the `plugins/` directory and exports a default function
- **Theme not applied**: verify that Vuetify is registered before mounting components

# Related Documentation
- [../AGENTS.md](../AGENTS.md)
- [../components/AGENTS.md](../components/AGENTS.md)
- [../layouts/AGENTS.md](../layouts/AGENTS.md)

