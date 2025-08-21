# Overview
Page components mapped to routes. Each file corresponds to a public-facing page of the site.

# Key Files
- `index.vue` – Homepage combining hero, biography preview, workshops, gallery, testimonials, and contact call-to-action.
- `biografia.vue` – Detailed biography with timeline and quote.
- `talleres.vue` – Workshop listings with enrollment modal.
- `servicios.vue`, `portafolio.vue`, `comunidad.vue`, `faq.vue`, `contacto.vue` – Additional pages assembling relevant components.

# Dependencies
- Compose components from the `components/` directory.
- Routing handled automatically by Nuxt's file-based system.

# Notes
- Pages are mostly declarative templates; business logic resides in reused components.
