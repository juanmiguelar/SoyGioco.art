<template>
  <v-app-bar app>
    <v-app-bar-nav-icon class="d-sm-none" @click="drawer = !drawer" />
    <v-toolbar-title>
          <NuxtLink to="/">
        <v-img src="/img/logo.jpg" alt="SoyGioco Logo" style="height: 40px;" />
      </NuxtLink>
    </v-toolbar-title>
    <v-spacer />
    <v-btn
      v-for="item in items"
      :key="item.to"
      :to="item.to"
      variant="text"
      class="d-none d-sm-flex"
    >{{ item.title }}</v-btn>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" temporary>
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.to"
        :to="item.to"
        link
      >{{ item.title }}</v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
const drawer = ref(false)
const items = [
  { title: 'Inicio', to: '/' },
  { title: 'Biografía', to: '/biografia' },
  { title: 'Talleres', to: '/talleres' },
  { title: 'Servicios', to: '/servicios' },
  { title: 'Portafolio', to: '/portafolio' },
  { title: 'Comunidad', to: '/comunidad' },
  { title: 'FAQ', to: '/faq' },
]
</script>
