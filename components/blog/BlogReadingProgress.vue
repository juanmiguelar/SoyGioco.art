<template>
  <div class="blog-progress" :style="{ width: progress + '%' }" />
</template>

<script setup lang="ts">
const progress = ref(0)

const update = () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  progress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
}

onMounted(() => {
  update()
  window.addEventListener('scroll', update, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', update)
})
</script>

<style scoped>
.blog-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background-color: var(--v-theme-primary);
  transition: width 0.1s ease-out;
  z-index: 1000;
}
</style>
