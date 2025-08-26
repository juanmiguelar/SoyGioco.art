<template>
  <v-row>
    <v-col v-for="n in 3" :key="n" cols="12" md="4">
      <v-skeleton-loader type="image, heading, subtitle" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
</script>
