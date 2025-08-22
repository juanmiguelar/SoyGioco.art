<template>
  <v-container>
    <v-text-field
      v-model="search"
      :placeholder="placeholder"
      prepend-inner-icon="mdi-magnify"
      variant="outlined"
      clearable
    />
  </v-container>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: { type: String, default: '' },
  placeholder: { type: String, default: 'Buscar en preguntas frecuentes...' },
})
const emit = defineEmits(['update:modelValue'])

const search = ref(props.modelValue)

watch(
  () => props.modelValue,
  (val) => {
    if (val !== search.value) search.value = val
  }
)

watch(search, (val) => emit('update:modelValue', val))
</script>
