<template>
  <HeroSection />
  <TalleresListaDestacada />
  <GaleriaPreview />
  <BioResumen />
  <TestimoniosCarousel />
  <MultipleContactCTA />
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Talleres de Pintura en Costa Rica | Tu Primera Obra Maestra | Soy Gioco',
  description:
    'Descubre tu artista interior con talleres de acrílico y acuarela en Costa Rica. Sin experiencia necesaria. Materiales incluidos. Reserva en GAM, San Ramón, Palmares y Grecia.',
  keywords:
    'talleres de pintura costa rica, clases de arte principiantes, acrílico acuarela, tu primera obra maestra, talleres creativos, arte para adultos, pintura sin experiencia',
  ogTitle: 'Talleres de Pintura en Costa Rica | Tu Primera Obra Maestra | Soy Gioco',
  ogDescription:
    'Descubre tu artista interior con talleres de acrílico y acuarela en Costa Rica. Sin experiencia necesaria. Materiales incluidos. Reserva en GAM, San Ramón, Palmares y Grecia.',
  ogUrl: 'https://soygioco.art/',
  ogImage: '/img/logo.jpg',
  twitterTitle: 'Talleres de Pintura en Costa Rica | Tu Primera Obra Maestra | Soy Gioco',
  twitterDescription:
    'Descubre tu artista interior con talleres de acrílico y acuarela en Costa Rica. Sin experiencia necesaria. Materiales incluidos. Reserva en GAM, San Ramón, Palmares y Grecia.'
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: 'Soy Gioco',
      url: 'https://soygioco.art/',
      image: 'https://soygioco.art/img/logo.jpg',
      telephone: '+506 7076 3760',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'CR',
      },
    },
    {
      '@type': 'Course',
      name: 'Taller de Acrílico para Principiantes',
      provider: {
        '@type': 'Person',
        name: 'Gioconda Cerdas',
      },
    },
  ],
}

useHead({
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(jsonLd) },
  ],
})
</script>
