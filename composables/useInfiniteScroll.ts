import { onMounted, onBeforeUnmount, ref } from 'vue'

export const useInfiniteScroll = (onLoad: () => void) => {
  const target = ref<HTMLElement | null>(null)
  let observer: IntersectionObserver | null = null

  const observe = () => {
    if (!target.value) return
    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        onLoad()
      }
    })
    observer.observe(target.value)
  }

  onMounted(observe)

  onBeforeUnmount(() => {
    observer?.disconnect()
  })

  return { target }
}
