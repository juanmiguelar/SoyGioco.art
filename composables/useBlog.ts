import type { Ref } from 'vue'

export interface BlogPost {
  id: number
  slug: string
  title: string
  description: string
  content: string
  featured_image: string
  category: string
  created_at: string
  reading_time: number
  meta_title?: string
  meta_description?: string
  tags?: string[]
}

const initialPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'acuarela-principiantes-guia-completa',
    title: 'Guía Completa de Acuarela para Principiantes',
    description: 'Descubre los secretos de la acuarela con técnicas básicas que transformarán tus primeras obras en verdaderas piezas artísticas.',
    content: `# Introducción a la Acuarela\n\nLa acuarela es una de las técnicas más gratificantes para los artistas. Con pocos materiales puedes crear obras llenas de luz y transparencia.\n\n![Técnicas básicas](https://placehold.co/600x350/38A169/FFFFFF/png?text=Técnicas+Básicas)\n\n## Materiales Esenciales\n\n- Pinceles de cerdas suaves\n- Papel de acuarela 300g\n- Colores primarios de calidad`,
    featured_image: 'https://placehold.co/800x400/2B6CB0/FFFFFF/png?text=Acuarela+Principiantes',
    category: 'Técnicas de Pintura',
    created_at: '2025-01-15T10:00:00Z',
    reading_time: 8,
    meta_title: 'Guía Completa de Acuarela para Principiantes',
    meta_description: 'Descubre los secretos de la acuarela con técnicas básicas para transformar tus primeras obras.',
    tags: ['acuarela', 'principiantes', 'técnicas']
  },
  {
    id: 2,
    slug: 'colores-perfectos-teoria-practica',
    title: 'Cómo Elegir los Colores Perfectos: Teoría y Práctica',
    description: 'La teoría del color aplicada al arte. Aprende a crear paletas armoniosas que transmitan exactamente lo que sientes.',
    content: `# La Magia del Color\n\nElegir colores no es casualidad...\n\n![Círculo cromático](https://placehold.co/600x350/D69E2E/000000/png?text=Círculo+Cromático)\n\n## Colores Primarios vs Secundarios\n\nLa base de toda composición...`,
    featured_image: 'https://placehold.co/800x400/D69E2E/000000/png?text=Teoría+del+Color',
    category: 'Técnicas de Pintura',
    created_at: '2025-01-12T14:30:00Z',
    reading_time: 6,
    meta_title: 'Cómo Elegir los Colores Perfectos',
    meta_description: 'Aprende teoría del color y crea paletas armoniosas.',
    tags: ['color', 'teoría', 'paletas']
  },
  {
    id: 3,
    slug: 'inspiracion-paisajes-costarricenses',
    title: 'Inspiración en Paisajes Costarricenses',
    description: 'Explora cómo los paisajes de Costa Rica pueden inspirar tu próxima obra de arte.',
    content: `# Inspiración en Paisajes Costarricenses\n\nCosta Rica ofrece una variedad de paisajes que despiertan la creatividad.\n\n![Paisaje](https://placehold.co/600x350/2B6CB0/FFFFFF/png?text=Paisaje)`,
    featured_image: 'https://placehold.co/800x400/38A169/FFFFFF/png?text=Paisajes+Costarricenses',
    category: 'Arte en Costa Rica',
    created_at: '2025-01-10T09:00:00Z',
    reading_time: 5,
    meta_title: 'Inspiración en Paisajes Costarricenses',
    meta_description: 'Explora cómo los paisajes de Costa Rica inspiran el arte.',
    tags: ['inspiración', 'paisajes', 'costa-rica']
  },
  {
    id: 4,
    slug: 'tecnicas-mixtas-arte-moderno',
    title: 'Técnicas Mixtas en el Arte Moderno',
    description: 'Combina diferentes materiales y técnicas para crear piezas únicas.',
    content: `# Técnicas Mixtas en el Arte Moderno\n\nExperimentar con materiales abre nuevas posibilidades creativas.`,
    featured_image: 'https://placehold.co/800x400/D69E2E/000000/png?text=Técnicas+Mixtas',
    category: 'Proceso Creativo',
    created_at: '2025-01-08T11:45:00Z',
    reading_time: 7,
    meta_title: 'Técnicas Mixtas en el Arte Moderno',
    meta_description: 'Aprende a combinar materiales y técnicas para obras modernas.',
    tags: ['mixtas', 'moderno']
  },
  {
    id: 5,
    slug: 'historia-del-arte-abstracto',
    title: 'Historia del Arte Abstracto',
    description: 'Un recorrido por los hitos más importantes del arte abstracto.',
    content: `# Historia del Arte Abstracto\n\nDesde sus inicios hasta la actualidad, el arte abstracto ha evolucionado constantemente.`,
    featured_image: 'https://placehold.co/800x400/E53E3E/FFFFFF/png?text=Arte+Abstracto',
    category: 'Historia del Arte',
    created_at: '2025-01-05T16:20:00Z',
    reading_time: 9,
    meta_title: 'Historia del Arte Abstracto',
    meta_description: 'Descubre los hitos del arte abstracto.',
    tags: ['historia', 'abstracto']
  },
  {
    id: 6,
    slug: 'organizar-talleres-exitosos',
    title: 'Cómo Organizar Talleres de Arte Exitosos',
    description: 'Consejos prácticos para planificar y ejecutar talleres que inspiren a tus estudiantes.',
    content: `# Cómo Organizar Talleres de Arte Exitosos\n\nUn buen taller comienza con una planificación detallada y un ambiente creativo.`,
    featured_image: 'https://placehold.co/800x400/2B6CB0/FFFFFF/png?text=Talleres+Exitosos',
    category: 'Talleres y Eventos',
    created_at: '2025-01-03T13:15:00Z',
    reading_time: 6,
    meta_title: 'Cómo Organizar Talleres de Arte Exitosos',
    meta_description: 'Consejos para planificar talleres de arte exitosos.',
    tags: ['talleres', 'eventos']
  },
  {
    id: 7,
    slug: 'materiales-esenciales-para-dibujo',
    title: 'Materiales Esenciales para el Dibujo',
    description: 'Una guía de herramientas indispensables para comenzar a dibujar.',
    content: `# Materiales Esenciales para el Dibujo\n\nConoce las herramientas básicas que necesitas para comenzar a dibujar.`,
    featured_image: 'https://placehold.co/800x400/38A169/FFFFFF/png?text=Materiales+Dibujo',
    category: 'Materiales y Herramientas',
    created_at: '2025-01-02T10:40:00Z',
    reading_time: 4,
    meta_title: 'Materiales Esenciales para el Dibujo',
    meta_description: 'Guía de herramientas indispensables para dibujar.',
    tags: ['materiales', 'dibujo']
  },
  {
    id: 8,
    slug: 'proceso-creativo-idea-obra',
    title: 'Del Sueño a la Realidad: Proceso Creativo',
    description: 'Cómo convertir una idea en una obra terminada paso a paso.',
    content: `# Del Sueño a la Realidad: Proceso Creativo\n\nCada obra de arte comienza con una chispa de inspiración.`,
    featured_image: 'https://placehold.co/800x400/D69E2E/000000/png?text=Proceso+Creativo',
    category: 'Proceso Creativo',
    created_at: '2025-01-01T08:00:00Z',
    reading_time: 7,
    meta_title: 'Del Sueño a la Realidad: Proceso Creativo',
    meta_description: 'Convierte tus ideas en obras terminadas paso a paso.',
    tags: ['proceso', 'creatividad']
  }
]

export const useBlog = () => {
  const all: Ref<BlogPost[]> = ref([])
  const search = ref('')
  const category = ref('')
  const sort = ref<'recent' | 'old'>('recent')
  const page = ref(1)
  const perPage = 6
  const loading = ref(false)

  const load = async () => {
    loading.value = true
    all.value = [...initialPosts]
    loading.value = false
  }

  const categories = computed(() => Array.from(new Set(all.value.map(p => p.category))))

  const filtered = computed(() => {
    let posts = all.value
    if (search.value) {
      const term = search.value.toLowerCase()
      posts = posts.filter(p => p.title.toLowerCase().includes(term) || p.description.toLowerCase().includes(term))
    }
    if (category.value) {
      posts = posts.filter(p => p.category === category.value)
    }
    if (sort.value === 'old') {
      posts = [...posts].sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
    }
    return posts
  })

  const paginated = computed(() => filtered.value.slice(0, page.value * perPage))
  const hasMore = computed(() => paginated.value.length < filtered.value.length)
  const loadMore = () => {
    if (hasMore.value) page.value++
  }

  return {
    all,
    load,
    search,
    category,
    categories,
    sort,
    paginated,
    hasMore,
    loadMore,
    loading
  }
}
