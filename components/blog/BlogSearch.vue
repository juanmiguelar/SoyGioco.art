<template>
  <div class="mb-4">
    <v-text-field
      v-model="searchModel"
      placeholder="Buscar por título, técnica, tema o palabra clave..."
      prepend-inner-icon="mdi-magnify"
      :append-inner-icon="searchModel ? 'mdi-close' : undefined"
      clearable
      hide-details
      @click:append-inner="searchModel = ''"
    />
    <v-chip-group
      v-model="categoriesModel"
      multiple
      class="d-flex flex-wrap mt-2"
    >
      <v-chip
        v-for="cat in categories"
        :key="cat.name"
        :value="cat.name"
        variant="outlined"
        filter
        class="ma-1"
        :color="categoriesModel.includes(cat.name) ? 'primary' : undefined"
      >
        {{ cat.name }}
        <v-badge :content="cat.count" inline class="ml-1" color="primary" />
      </v-chip>
    </v-chip-group>
    <v-btn
      v-if="categoriesModel.length"
      class="mt-2"
      size="small"
      variant="text"
      @click="categoriesModel = []"
    >
      Limpiar filtros
    </v-btn>
  </div>
</template>

<script setup lang="ts">
interface CategoryItem {
  name: string
  count: number
}

const props = defineProps<{
  search: string
  selectedCategories: string[]
  categories: CategoryItem[]
}>()

const emit = defineEmits<{
  (e: 'update:search', value: string): void
  (e: 'update:selectedCategories', value: string[]): void
}>()

const searchModel = computed({
  get: () => props.search,
  set: v => emit('update:search', v)
})

const categoriesModel = computed({
  get: () => props.selectedCategories,
  set: v => emit('update:selectedCategories', v)
})
</script>
