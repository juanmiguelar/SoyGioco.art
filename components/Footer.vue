<template>
  <v-footer app class="bg-grey-lighten-4">
    <v-container>
      <v-row>
        <v-col cols="12" md="4" class="text-start">
          <strong>Último Artículo</strong>
          <v-list density="compact">
            <v-list-item v-for="post in latest" :key="post.slug" :to="`/blog/${post.slug}`" link>{{ post.title }}</v-list-item>
          </v-list>
          <v-btn to="/blog" variant="text" class="mt-2">Ver todos los artículos</v-btn>
        </v-col>
        <v-col cols="12" md="8" class="text-center d-flex align-center justify-center">
          <span>&copy; {{ new Date().getFullYear() }} SoyGioco. Todos los derechos reservados.</span>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
import { useBlog } from '~/composables/useBlog'

const { all, load } = useBlog()
await load()
const latest = computed(() => [...all.value]
  .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
  .slice(0, 1))
</script>
