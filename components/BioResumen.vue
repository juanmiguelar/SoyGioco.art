<template>
  <v-container class="py-12">
    <v-row align="center" justify="center" class="text-center text-sm-left">
      <v-col cols="12" sm="4" md="3">
        <!-- Profile image - suggested 200x200 -->
        <img
          src="/img/gioconda-cerdas.png"
          alt="Gioconda Cerdas sonriendo"
          width="200"
          height="200"
          cover
          class="rounded-circle mx-auto"
        />
      </v-col>
      <v-col cols="12" sm="8" md="7">
        <h2 class="text-h5 font-weight-medium mb-4">Sobre mí</h2>
        <p class="text-body-1 mb-4">
          Soy Gioconda Cerdas y durante más de ocho años he acompañado a
          <strong>300+ estudiantes</strong> en sus primeras pinceladas. Mi pasión
          es crear un ambiente cálido donde cualquier principiante se sienta
          en casa, sin tecnicismos ni presiones. Cada taller está diseñado para
          que descubras tu creatividad a tu propio ritmo.
        </p>
        <v-btn variant="text" color="primary" to="/biografia">
          Conoce más sobre Gioco
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts"></script>
