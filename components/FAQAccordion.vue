<template>
  <v-container>
    <v-expansion-panels v-model="panel" accordion>
      <FAQItem
        v-for="(faq, index) in filteredFaqs"
        :key="index"
        :faq="faq"
      />
    </v-expansion-panels>
    <p v-if="filteredFaqs.length === 0" class="text-center my-4">
      {{ noResultsMessage }}
    </p>
    <div class="text-center mt-8">
      <p class="mb-4">¿No encontraste la respuesta que buscabas?</p>
      <v-btn :href="whatsAppLink" color="primary" target="_blank">
        <v-icon start icon="mdi-whatsapp" />
        Contáctanos por WhatsApp
      </v-btn>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import FAQItem from './FAQItem.vue'

interface FAQ {
  question: string
  answer: string
  icon: string
}

const props = defineProps({
  search: { type: String, default: '' },
})

const faqs: FAQ[] = [
  {
    question: '¿Los talleres incluyen los materiales?',
    answer:
      'Sí, todos nuestros talleres incluyen todos los materiales necesarios. No necesitas traer nada, nosotros proporcionamos pinturas, pinceles, lienzo y todo lo requerido para tu experiencia artística.',
    icon: 'mdi-palette',
  },
  {
    question: '¿Se necesita experiencia previa?',
    answer:
      'No, todos nuestros talleres están diseñados para principiantes. Nuestros instructores te guiarán paso a paso, sin importar si es tu primera vez pintando o si ya tienes alguna experiencia.',
    icon: 'mdi-account-question',
  },
  {
    question: '¿Cómo reservo mi espacio?',
    answer:
      'Para reservar tu espacio necesitas realizar el pago del 50% del valor total del taller. El 50% restante se paga el día del taller antes de comenzar. No se realizan reembolsos bajo ninguna circunstancia y no es posible reprogramar talleres una vez confirmada la reserva.',
    icon: 'mdi-calendar-check',
  },
  {
    question: '¿Puedo obtener mi factura digital?',
    answer:
      '¡Sí! Puedes solicitar tu factura digital. Solo debes pedirla formalmente y proporcionar tus datos personales para poder elaborarla correctamente.',
    icon: 'mdi-receipt',
  },
  {
    question: '¿Cuánto duran los talleres?',
    answer:
      'Los talleres tienen una duración de 2 a 4 horas, dependiendo de la técnica y complejidad de la obra a realizar. Te informaremos la duración específica al momento de la reserva. Te llevas tu pintura terminada el mismo día del taller.',
    icon: 'mdi-clock-outline',
  },
  {
    question: '¿Hay límite de edad para participar?',
    answer:
      'Los talleres están abiertos para personas mayores de 6 años. Los menores de edad pueden participar si están bajo la supervisión de un adulto responsable.',
    icon: 'mdi-account-group',
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer:
      'Aceptamos los siguientes métodos de pago: SINPE Móvil, transferencias a Banco Nacional y BAC, y efectivo. No se aceptan tarjetas de crédito o débito.',
    icon: 'mdi-credit-card',
  },
  {
    question: '¿Dónde se realizan los talleres?',
    answer:
      'Realizamos talleres en diferentes ubicaciones del GAM y Occidente de Costa Rica, incluyendo: Amón Solar, Mercadito Fénix, Fusion Gourmet, Nectandra, Zona Safari y Velvet Room. Todos los lugares cuentan con parqueo disponible o espacios cercanos para dejar el vehículo.',
    icon: 'mdi-map-marker',
  },
]

const query = computed(() => props.search.toLowerCase())

const filteredFaqs = computed(() =>
  faqs.filter(
    (f) =>
      f.question.toLowerCase().includes(query.value) ||
      f.answer.toLowerCase().includes(query.value)
  )
)

const noResultsMessage = 'No se encontraron preguntas que coincidan con tu búsqueda'
const panel = ref()
const whatsAppLink = 'https://wa.me/50670763760'
</script>
