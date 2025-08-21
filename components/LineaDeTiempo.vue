<template>
  <v-container class="py-8">
    <h2 class="text-h5 font-weight-medium mb-6">Experiencia</h2>
    <v-timeline side="end">
      <v-timeline-item
        v-for="(event, i) in events"
        :key="i"
        dot-color="primary"
        fill-dot
      >
        <template #opposite>
          <strong>{{ event.year }}</strong>
        </template>
        <div class="text-subtitle-1 font-weight-medium">
          {{ event.title }}
        </div>
        <div class="text-body-2">
          {{ event.description }}
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script setup lang="ts">
interface TimelineEvent {
  year: string
  title: string
  description: string
}

const events: TimelineEvent[] = [
  {
    year: '2024 - Actualidad',
    title: 'International Christian School',
    description:
      'Profesora de Artes para todos los niveles y coordinadora de exposiciones en preescolar.'
  },
  {
    year: '2024 - Actualidad',
    title: 'Soy Gioco - Talleres de Arte',
    description:
      'Planificación de talleres de acuarela y acrílico, diseño de material didáctico y organización de eventos privados.'
  },
  {
    year: '2023 - 2024',
    title: 'Centro Educativo Niño Jesús de Belén',
    description:
      'Profesora de Artes en II y III ciclo; coordinó la participación en el Festival Estudiantil de las Artes 2023.'
  },
  {
    year: '2022 - 2024',
    title: 'Living Hope',
    description:
      'Coordinadora del Festival Estudiantil de las Artes 2023 y proyectos artístico-culturales.'
  },
  {
    year: '2019 - 2023',
    title: 'Sistema Educativo San Lorenzo',
    description:
      'Dirigió clubes de arte y promovió la participación en concursos y exposiciones.'
  },
  {
    year: '2017',
    title:
      'Centros de Desarrollo Humano La Cometa y La Casa del Pueblo',
    description:
      'Profesora de pintura en técnicas de dibujo, color, acuarela y acrílico con exposiciones de cierre.'
  }
]
</script>
