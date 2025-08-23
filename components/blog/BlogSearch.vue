<template>
  <v-row class="mb-4" align="center">
    <v-col cols="12" md="4">
      <v-text-field :model-value="search" @update:model-value="v => emit('update:search', v)" label="Buscar" prepend-inner-icon="mdi-magnify" clearable />
    </v-col>
    <v-col cols="12" md="4">
      <v-select :items="categories" :model-value="category" @update:model-value="v => emit('update:category', v)" label="Categoría" clearable />
    </v-col>
    <v-col cols="12" md="4">
      <v-select :items="sortItems" :model-value="sort" @update:model-value="v => emit('update:sort', v)" label="Ordenar" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const props = defineProps<{ search: string; category: string; sort: string; categories: string[] }>()
import { toRefs } from "vue"
const emit = defineEmits(['update:search', 'update:category', 'update:sort'])
const { search, category, sort, categories } = toRefs(props)
const sortItems = [
  { title: 'Más recientes', value: 'recent' },
  { title: 'Más antiguos', value: 'old' }
]
</script>
