<template>
  <v-container class="py-8 py-md-12">
    <v-row align="center" justify="center">
      <!-- Imagen - Responsive -->
      <v-col cols="12" md="6" class="text-center">
        <div
          class="nuxt-img-container mx-auto rounded-lg"
          :style="{ maxWidth: $vuetify.display.mobile ? '200px' : '400px' }"
        >
          <NuxtImg
            src="/img/logo.jpg"
            alt="Comunidad Soy Gioco"
            :width="$vuetify.display.mobile ? 200 : 400"
            :height="$vuetify.display.mobile ? 200 : 300"
            class="nuxt-img-contain"
            :style="{ aspectRatio: $vuetify.display.mobile ? '1/1' : '4/3' }"
            loading="eager"
            fetchpriority="high"
            decoding="sync"
          />
        </div>
      </v-col>
      
      <!-- Contenido de texto -->
      <v-col cols="12" md="6" class="text-center text-md-left">
        <h1 class="text-h5 text-md-h4 font-weight-bold mb-3">
          Comunidad Exclusiva Soy Gioco
        </h1>
        <p class="text-body-1 mb-3">
          Comunidad cerrada para participantes de talleres. Acceso gratuito y exclusivo para
          quienes han asistido al menos a un taller.
        </p>
        <v-chip
          color="primary"
          size="small"
          variant="outlined"
          class="mb-2"
        >
          <v-icon start icon="mdi-account-group"></v-icon>
          Más de 90 miembros activos
        </v-chip>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
// No se necesita lógica adicional para este componente
</script>

<style scoped>
/* Estilos adicionales para mejor responsive */
@media (max-width: 960px) {
  .v-container {
    padding-left: 16px !important;
    padding-right: 16px !important;
  }
}

</style>