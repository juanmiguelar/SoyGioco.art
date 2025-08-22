<template>
  <BuscarFAQ v-model="search" />
  <FAQAccordion :search="search" />
</template>

<script setup lang="ts">
const search = ref('')
</script>
