<template>
  <v-container class="py-12">
    <h1 class="text-h4 text-center mb-8">Servicios</h1>
    <v-row>
      <v-col cols="12" md="6">
        <ServicioCard
          title="Talleres compartidos"
          description="Talleres grupales abiertos al público con fechas programadas."
          :features="[
            'Anunciados públicamente por redes sociales',
            'Diversas temáticas y técnicas',
            'Ubicados en GAM y occidente de Costa Rica'
          ]"
          :techniques="['Acuarela', 'Acrílico sobre lienzo']"
          price-info="Rango de precios: ₡12 500 - ₡25 000"
        />
      </v-col>
      <v-col cols="12" md="6">
        <ServicioCard
          title="Talleres privados"
          description="Talleres privados que requieren cotización anticipada."
          :features="[
            'Tamaños de lienzo: 20x20cm y 30x40cm'
          ]"
          :techniques="['Acuarela', 'Acrílico sobre lienzo']"
        >
          <p class="mb-4">Mínimo 1 mes de anticipación.</p>
          <PreciosTable />
          <ul class="pl-4">
            <li>Al precio final cotizado se debe sumar 2% de I.V.A.</li>
            <li>Contrato formal debe ser firmado al momento antes de la reserva.</li>
          </ul>
        </ServicioCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts"></script>
