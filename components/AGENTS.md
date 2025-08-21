# Overview
Collection of reusable Vue components that build the site's UI, from navigation and galleries to forms and carousels.

# Key Files
- `Navbar.vue` – Main navigation bar with responsive drawer.
- `Footer.vue` – Site footer displayed on all pages.
- `HeroSection.vue` – Intro section with title, subtitle and call-to-action.
- `BioResumen.vue` / `BioCompleta.vue` – Summaries and full biography content.
- `LineaDeTiempo.vue` – Timeline showcasing professional and teaching milestones.
- `CitaDestacada.vue` – Highlighted quote from the biography section.
- `ContactoCTA.vue` – Reusable call-to-action linking to the contact page.
- `GaleriaPreview.vue` / `GaleriaObras.vue` – Image gallery components.
- `FormularioContacto.vue` – Placeholder for contact form.
- `TallerCard.vue` and `TallerDetalleModal.vue` – Workshop listing and detail modal.
- `WhatsAppButton.vue` – Floating action button linking to WhatsApp.

# Dependencies
- Uses Vuetify components for layout and styling.
- Components are imported by pages and layouts to assemble each route.

# Notes
- All components use `<script setup lang="ts">` for concise TypeScript logic.
- Add new components here to keep pages slim and modular.
