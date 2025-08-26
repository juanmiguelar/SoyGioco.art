export interface StrapiArticleMock {
  id: number
  documentId: string
  slug: string
  title: string
  description: string
  content: string
  featured_image: {
    id: number
    url: string
    alternativeText: string
  }
  created_at_date: string
  meta_title: string
  meta_description: string
  categories: Array<{ id: number; name: string }>
  tags: Array<{ id: number; name: string }>
}

export const blogPosts: StrapiArticleMock[] = [
  {
    id: 1,
    documentId: '1',
    slug: 'tecnicas-basicas-acuarela',
    title: 'Técnicas básicas de acuarela',
    description: 'Controla el agua y los pigmentos para efectos vibrantes.',
    content: '# Técnicas básicas de acuarela\nAprende a dominar lavados y degradados.',
    featured_image: {
      id: 1,
      url: 'https://placehold.co/600x400?text=Acuarela',
      alternativeText: 'Técnicas de acuarela'
    },
    created_at_date: '2024-01-05',
    meta_title: 'Técnicas de acuarela',
    meta_description: 'Domina las técnicas básicas de acuarela.',
    categories: [{ id: 1, name: 'Técnicas de Acuarela' }],
    tags: [{ id: 1, name: 'acuarela' }]
  },
  {
    id: 2,
    documentId: '2',
    slug: 'inspiracion-colores-tropicales',
    title: 'Inspiración en colores tropicales',
    description: 'Ideas para paletas inspiradas en la naturaleza costarricense.',
    content: '# Colores tropicales\nDescubre combinaciones frescas para tus obras.',
    featured_image: {
      id: 2,
      url: 'https://placehold.co/600x400?text=Colores',
      alternativeText: 'Colores tropicales'
    },
    created_at_date: '2024-01-12',
    meta_title: 'Paletas tropicales',
    meta_description: 'Inspiración en colores tropicales.',
    categories: [{ id: 2, name: 'Inspiración Artística' }],
    tags: [{ id: 2, name: 'color' }]
  },
  {
    id: 3,
    documentId: '3',
    slug: 'consejos-para-principiantes',
    title: 'Consejos para principiantes',
    description: 'Primeros pasos para iniciar en la acuarela.',
    content: '# Consejos iniciales\nMateriales básicos y ejercicios sencillos.',
    featured_image: {
      id: 3,
      url: 'https://placehold.co/600x400?text=Principiantes',
      alternativeText: 'Consejos para principiantes'
    },
    created_at_date: '2024-01-19',
    meta_title: 'Consejos para principiantes',
    meta_description: 'Primeros pasos para la acuarela.',
    categories: [{ id: 3, name: 'Consejos para Principiantes' }],
    tags: [{ id: 3, name: 'consejos' }]
  },
  {
    id: 4,
    documentId: '4',
    slug: 'seleccion-de-pinceles',
    title: 'Selección de pinceles',
    description: 'Guía para elegir el pincel correcto para cada trazo.',
    content: '# Pinceles adecuados\nTipos de pelo y tamaños para distintas técnicas.',
    featured_image: {
      id: 4,
      url: 'https://placehold.co/600x400?text=Pinceles',
      alternativeText: 'Selección de pinceles'
    },
    created_at_date: '2024-01-26',
    meta_title: 'Materiales y herramientas',
    meta_description: 'Cómo elegir pinceles para acuarela.',
    categories: [{ id: 4, name: 'Materiales y Herramientas' }],
    tags: [{ id: 4, name: 'pinceles' }]
  },
  {
    id: 5,
    documentId: '5',
    slug: 'flujo-de-trabajo-creativo',
    title: 'Flujo de trabajo creativo',
    description: 'Estructura tu proceso creativo para mejores resultados.',
    content: '# Proceso creativo\nOrganiza tus ideas y materiales antes de pintar.',
    featured_image: {
      id: 5,
      url: 'https://placehold.co/600x400?text=Proceso',
      alternativeText: 'Proceso creativo'
    },
    created_at_date: '2024-02-02',
    meta_title: 'Proceso creativo',
    meta_description: 'Organiza tu proceso creativo.',
    categories: [{ id: 5, name: 'Proceso Creativo' }],
    tags: [{ id: 5, name: 'proceso' }]
  },
  {
    id: 6,
    documentId: '6',
    slug: 'arte-en-costa-rica',
    title: 'Arte en Costa Rica',
    description: 'Un vistazo a la escena artística costarricense.',
    content: '# Arte local\nExplora galerías y artistas emergentes.',
    featured_image: {
      id: 6,
      url: 'https://placehold.co/600x400?text=Costa+Rica',
      alternativeText: 'Arte en Costa Rica'
    },
    created_at_date: '2024-02-09',
    meta_title: 'Arte en Costa Rica',
    meta_description: 'La escena artística en Costa Rica.',
    categories: [{ id: 6, name: 'Arte en Costa Rica' }],
    tags: [{ id: 6, name: 'cultura' }]
  },
  {
    id: 7,
    documentId: '7',
    slug: 'mezcla-de-colores-avanzada',
    title: 'Mezcla de colores avanzada',
    description: 'Crea tonos únicos combinando pigmentos.',
    content: '# Mezclas avanzadas\nExperimenta con combinaciones inusuales.',
    featured_image: {
      id: 7,
      url: 'https://placehold.co/600x400?text=Mezclas',
      alternativeText: 'Mezcla de colores'
    },
    created_at_date: '2024-02-16',
    meta_title: 'Mezcla de colores',
    meta_description: 'Aprende mezclas de colores avanzadas.',
    categories: [{ id: 1, name: 'Técnicas de Acuarela' }],
    tags: [{ id: 7, name: 'color' }]
  },
  {
    id: 8,
    documentId: '8',
    slug: 'encontrando-tu-estilo',
    title: 'Encontrando tu estilo',
    description: 'Consejos para desarrollar una voz artística propia.',
    content: '# Estilo personal\nReflexiona sobre tus influencias y preferencias.',
    featured_image: {
      id: 8,
      url: 'https://placehold.co/600x400?text=Estilo',
      alternativeText: 'Encontrando tu estilo'
    },
    created_at_date: '2024-02-23',
    meta_title: 'Estilo artístico',
    meta_description: 'Desarrolla tu estilo artístico.',
    categories: [{ id: 2, name: 'Inspiración Artística' }],
    tags: [{ id: 8, name: 'estilo' }]
  },
  {
    id: 9,
    documentId: '9',
    slug: 'errores-comunes-acuarela',
    title: 'Errores comunes en acuarela',
    description: 'Aprende a evitarlos y mejora tus pinturas.',
    content: '# Errores frecuentes\nIdentifica problemas y soluciones.',
    featured_image: {
      id: 9,
      url: 'https://placehold.co/600x400?text=Errores',
      alternativeText: 'Errores comunes'
    },
    created_at_date: '2024-03-01',
    meta_title: 'Errores en acuarela',
    meta_description: 'Evita errores comunes en acuarela.',
    categories: [{ id: 3, name: 'Consejos para Principiantes' }],
    tags: [{ id: 9, name: 'errores' }]
  },
  {
    id: 10,
    documentId: '10',
    slug: 'papeles-para-acuarela',
    title: 'Papeles para acuarela',
    description: 'Comparativa de texturas y gramajes.',
    content: '# Papeles\nElige el soporte adecuado para tus obras.',
    featured_image: {
      id: 10,
      url: 'https://placehold.co/600x400?text=Papeles',
      alternativeText: 'Papeles para acuarela'
    },
    created_at_date: '2024-03-08',
    meta_title: 'Papeles para acuarela',
    meta_description: 'Texturas y gramajes de papel.',
    categories: [{ id: 4, name: 'Materiales y Herramientas' }],
    tags: [{ id: 10, name: 'papel' }]
  },
  {
    id: 11,
    documentId: '11',
    slug: 'rituales-creativos',
    title: 'Rituales creativos',
    description: 'Rutinas que potencian tu creatividad diaria.',
    content: '# Rituales\nPequeños hábitos que despiertan la inspiración.',
    featured_image: {
      id: 11,
      url: 'https://placehold.co/600x400?text=Rituales',
      alternativeText: 'Rituales creativos'
    },
    created_at_date: '2024-03-15',
    meta_title: 'Rituales creativos',
    meta_description: 'Rutinas para fomentar creatividad.',
    categories: [{ id: 5, name: 'Proceso Creativo' }],
    tags: [{ id: 11, name: 'rituales' }]
  },
  {
    id: 12,
    documentId: '12',
    slug: 'murales-urbanos-cr',
    title: 'Murales urbanos en Costa Rica',
    description: 'Recorrido por los murales más emblemáticos del país.',
    content: '# Murales urbanos\nConoce las historias detrás de estas obras.',
    featured_image: {
      id: 12,
      url: 'https://placehold.co/600x400?text=Murales',
      alternativeText: 'Murales urbanos en Costa Rica'
    },
    created_at_date: '2024-03-22',
    meta_title: 'Murales urbanos',
    meta_description: 'Murales destacados de Costa Rica.',
    categories: [{ id: 6, name: 'Arte en Costa Rica' }],
    tags: [{ id: 12, name: 'murales' }]
  }
]

export default blogPosts
