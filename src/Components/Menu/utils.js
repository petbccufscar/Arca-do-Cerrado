export const menuItems = [
  { label: 'Início', pathname: '/' },
  { label: 'Sobre', pathname: '/sobre' },
  { label: 'Mapa Interativo', pathname: '/mapa' },
  {
    label: 'Blog',
    pathname: '/blog',
    drop: [
      { label: 'Informações extras', pathname: '' },
      { label: 'Notícias', pathname: '' }
    ]
  },
  { label: 'Espécies', pathname: '/especies' },
  { label: 'Agenda', pathname: '/agenda' },
  { label: 'Faça Parte', pathname: '/facaparte' }
]
