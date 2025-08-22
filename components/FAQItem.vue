<template>
  <v-expansion-panel>
    <v-expansion-panel-title>
      <v-icon :icon="faq.icon" class="me-2" />
      {{ faq.question }}
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      {{ faq.answer }}
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script setup lang="ts">
interface FAQ {
  question: string
  answer: string
  icon: string
}

defineProps<{ faq: FAQ }>()
</script>
