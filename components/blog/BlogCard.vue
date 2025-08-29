<template>
  <v-card
    :to="`/blog/${post.slug}`"
    class="d-flex flex-column h-100"
    :elevation="2"
    rounded="lg"
  >
    <v-img
      :src="url"
      :alt="post.featured_image.alt"
      height="200"
      cover
      class="rounded-t-lg"
    />
    <v-card-item class="pt-4">
      <v-chip color="primary" size="small" class="mb-2" label>
        {{ post.category }}
      </v-chip>
      <v-card-title class="text-h6">{{ post.title }}</v-card-title>
      <v-card-subtitle class="text-body-2 mb-2">
        {{ formattedDate }} · {{ post.reading_time }} min
      </v-card-subtitle>
      <v-card-text class="pt-0 text-body-2">
        {{ truncatedDescription }}
      </v-card-text>
    </v-card-item>
    <v-spacer />
    <v-card-actions class="mt-auto">
      <div class="text-caption">Por {{ author }}</div>
      <v-spacer />
      <v-btn color="primary" variant="flat">Leer Artículo</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/composables/useBlog'

const runtimeConfig = useRuntimeConfig()
const url = ref('')
const author = ref('')

const props = defineProps<{ post: BlogPost }>()

const formattedDate = computed(() =>
  new Date(props.post.created_at).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
)

const truncatedDescription = computed(() => {
  const desc = props.post.description || ''
  return desc.length > 200 ? desc.slice(0, 200) + '…' : desc
})

onMounted(() => {
  url.value = runtimeConfig.public.strapiURL + props.post.featured_image.url
  author.value = props.post.author
})
</script>
