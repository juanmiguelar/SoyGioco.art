<template>
  <v-container class="py-12 text-center">
    <h2 class="text-h5 font-weight-medium mb-4">¿Listo para empezar?</h2>
    <p class="mb-6">Elige el medio que prefieras para contactarnos.</p>
    <v-row justify="center" class="mb-4">
      <v-col cols="12" sm="4" class="mb-2">
        <v-btn
          color="success"
          block
          href="https://wa.me/50670763760?text=Hola%20Gioco%21%20Quiero%20saber%20m%C3%A1s%20sobre%20los%20talleres"
          target="_blank"
          rel="noopener noreferrer"
          prepend-icon="mdi-whatsapp"
        >
          Consulta por WhatsApp
        </v-btn>
      </v-col>
      <v-col cols="12" sm="4" class="mb-2">
        <v-btn
          color="primary"
          block
          href="https://www.instagram.com/soygioco.cr/"
          target="_blank"
          rel="noopener noreferrer"
          prepend-icon="mdi-instagram"
        >
          Síguenos en Instagram
        </v-btn>
      </v-col>
    </v-row>
    <v-slide-y-transition>
      <v-btn
        v-if="showSticky"
        color="primary"
        class="sticky-cta"
        href="https://wa.me/50670763760?text=Hola%20Gioco%21%20Quiero%20reservar%20mi%20primer%20taller"
        target="_blank"
        rel="noopener noreferrer"
      >
        Reserva Tu Primer Taller
      </v-btn>
    </v-slide-y-transition>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const showSticky = ref(false)

onMounted(() => {
  setTimeout(() => {
    showSticky.value = true
  }, 15000)
})
</script>

<style scoped>
.sticky-cta {
  position: fixed;
  bottom: 80px;
  right: 16px;
}
</style>
