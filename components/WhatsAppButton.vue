<template>
  <v-btn
    v-if="!isKeyboardVisible"
    class="whatsapp-btn"
    :class="positionClass"
    :href="whatsAppUrl"
    icon="mdi-whatsapp"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
    :style="{ backgroundColor: '#25D366', color: 'white' }"
  />
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useEventListener, useThrottleFn } from '@vueuse/core'

const whatsAppUrl = 'https://wa.me/50670763760'
const scrolled = ref(false)
const isKeyboardVisible = ref(false)
const scrollThreshold = 100
const keyboardThreshold = 150
const initialHeight = ref(0)

onMounted(() => {
  initialHeight.value = window.innerHeight

  const onScroll = useThrottleFn(() => {
    scrolled.value = window.scrollY > scrollThreshold
  }, 100)

  useEventListener(window, 'scroll', onScroll, { passive: true })

  const resizeHandler = () => {
    const viewportHeight = window.visualViewport?.height ?? window.innerHeight
    isKeyboardVisible.value = initialHeight.value - viewportHeight > keyboardThreshold
  }

  if (window.visualViewport) {
    useEventListener(window.visualViewport, 'resize', resizeHandler)
  } else {
    useEventListener(window, 'resize', resizeHandler)
  }
})

const positionClass = computed(() => (scrolled.value ? 'left' : ''))
</script>

<style scoped>
.whatsapp-btn {
  --whatsapp-size: clamp(48px, 5vw, 56px);
  --whatsapp-bottom: clamp(16px, 2.5vw, 24px);
  --whatsapp-side: clamp(16px, 2.5vw, 24px);
  --whatsapp-translate: 0;
  position: fixed;
  bottom: var(--whatsapp-bottom);
  right: var(--whatsapp-side);
  width: var(--whatsapp-size);
  height: var(--whatsapp-size);
  min-width: var(--whatsapp-size);
  border-radius: 50%;
  z-index: 9999;
  isolation: isolate;
  box-shadow: 0 2px 8px rgba(37, 211, 102, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform: translateX(var(--whatsapp-translate));
  will-change: transform;
  display: flex;
  align-items: center;
  justify-content: center;
}

.whatsapp-btn.left {
  --whatsapp-translate: calc(-100vw + var(--whatsapp-size) + 2 * var(--whatsapp-side));
}

.whatsapp-btn:hover,
.whatsapp-btn:focus-visible {
  transform: translateX(var(--whatsapp-translate)) scale(1.05);
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
}

.whatsapp-btn:focus-visible {
  outline: 2px solid white;
  outline-offset: 2px;
}

.whatsapp-btn .v-icon {
  font-size: 24px;
  color: white;
}

@media (prefers-reduced-motion: reduce) {
  .whatsapp-btn {
    transition: none;
  }
}
</style>
