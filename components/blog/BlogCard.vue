<template>
  <v-card class="mb-4" elevation="2">
    <v-row no-gutters>
      <v-col cols="12" md="4">
        <v-img :src="post.featured_image" :alt="post.title" height="200" cover loading="lazy" />
      </v-col>
      <v-col cols="12" md="8">
        <v-card-item>
          <v-chip size="small" class="ma-2">{{ post.category }}</v-chip>
          <v-card-title>
            <NuxtLink :to="`/blog/${post.slug}`">{{ post.title }}</NuxtLink>
          </v-card-title>
          <v-card-subtitle class="text-body-2">
            {{ post.description.slice(0, 150) }}
          </v-card-subtitle>
          <BlogMeta :post="post" />
          <v-card-actions>
            <v-btn :to="`/blog/${post.slug}`" variant="text">Leer Más</v-btn>
          </v-card-actions>
        </v-card-item>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/composables/useBlog'
import BlogMeta from './BlogMeta.vue'

defineProps<{ post: BlogPost }>()
</script>
