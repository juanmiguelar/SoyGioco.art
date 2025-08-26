<template>
  <v-row class="mb-4" align="center">
    <v-col cols="12" md="6">
      <v-text-field v-model="searchModel" label="Buscar" prepend-inner-icon="mdi-magnify" clearable />
    </v-col>
    <v-col cols="12" md="4">
      <v-select v-model="categoryModel" :items="categories" label="Categoría" clearable />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const props = defineProps<{ search: string; category: string; categories: string[] }>()
const emit = defineEmits<{ (e: 'update:search', value: string): void; (e: 'update:category', value: string): void }>()

const searchModel = computed({
  get: () => props.search,
  set: v => emit('update:search', v)
})

const categoryModel = computed({
  get: () => props.category,
  set: v => emit('update:category', v)
})
</script>
