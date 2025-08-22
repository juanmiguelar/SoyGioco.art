<template>
  <v-container class="py-12">
    <h2 class="text-h5 text-center mb-8">Beneficios Exclusivos</h2>
    <v-row>
      <v-col
        v-for="benefit in benefits"
        :key="benefit.title"
        cols="12"
        sm="6"
        lg="4"
        class="d-flex"
      >
        <v-card class="pa-4 text-center flex-grow-1">
          <v-icon :icon="benefit.icon" size="36" color="primary" />
          <h3 class="text-h6 font-weight-medium mt-3 mb-2">{{ benefit.title }}</h3>
          <p class="text-body-2">{{ benefit.description }}</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
interface Benefit {
  title: string
  description: string
  icon: string
}

const benefits: Benefit[] = [
  {
    title: 'Descuentos Especiales',
    description: 'Acceso a descuentos exclusivos en talleres y productos',
    icon: 'mdi-percent',
  },
  {
    title: 'Acceso Anticipado',
    description: 'Inscríbete a talleres 1 día antes que el público general',
    icon: 'mdi-clock-fast',
  },
  {
    title: 'Actividades Exclusivas',
    description:
      'Desayunos con pintura, tours de arte, visitas a museos y eventos especiales',
    icon: 'mdi-account-group',
  },
  {
    title: 'Talleres Virtuales Gratuitos',
    description: 'Sesiones en línea exclusivas cada tres meses',
    icon: 'mdi-video',
  },
  {
    title: 'Noticias de Arte Nacional',
    description: 'Mantente al día con el mundo artístico costarricense',
    icon: 'mdi-newspaper',
  },
]
</script>
