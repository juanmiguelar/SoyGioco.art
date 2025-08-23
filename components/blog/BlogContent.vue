<template>
  <div class="blog-content" v-html="rendered" />
</template>

<script setup lang="ts">
import { marked } from 'marked'
import type { BlogPost } from '~/composables/useBlog'

const props = defineProps<{ post: BlogPost }>()
const rendered = computed(() => marked.parse(props.post.content))
</script>

<style scoped>
.blog-content h2 { border-left: 4px solid var(--v-theme-primary); padding-left: 8px; }
.blog-content img { border-radius: 8px; margin: 20px 0; max-width: 100%; }
.blog-content blockquote { background: #f5f5f5; padding: 16px; }
.blog-content p { line-height: 1.7; margin-bottom: 16px; }
</style>
