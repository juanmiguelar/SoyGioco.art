export const useInfiniteScroll = (onLoad: () => void) => {
  const target = ref<HTMLElement | null>(null)
  useIntersectionObserver(target, ([entry]) => {
    if (entry.isIntersecting) {
      onLoad()
    }
  })
  return { target }
}
