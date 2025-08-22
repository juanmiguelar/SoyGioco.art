<template>
  <v-card class="mb-8">
    <v-card-title class="text-h6">{{ title }}</v-card-title>
    <v-card-text>
      <p class="mb-4">{{ description }}</p>
      <ul v-if="features && features.length" class="mb-4 pl-4">
        <li v-for="(f, i) in features" :key="i">{{ f }}</li>
      </ul>
      <div v-if="techniques && techniques.length" class="mb-4">
        <strong>Técnicas:</strong>
        <v-chip-group class="mt-2" column>
          <v-chip
            v-for="(t, i) in techniques"
            :key="i"
            class="ma-1"
            color="primary"
            variant="tonal"
            size="small"
          >
            {{ t }}
          </v-chip>
        </v-chip-group>
      </div>
      <p v-if="priceInfo" class="mb-4"><strong>{{ priceInfo }}</strong></p>
      <slot />
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  features: { type: Array as () => string[], default: () => [] },
  techniques: { type: Array as () => string[], default: () => [] },
  priceInfo: { type: String, default: '' },
})
</script>
