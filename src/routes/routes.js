import React from 'react'
const PartidosCreados= React.lazy(()=> import('../views/pages/PartidosCreados'))
const ListaContratos= React.lazy(()=> import('../components/PartidosCreados/ListaContratos'))
const crearContrato= React.lazy(()=> import('../components/PartidosCreados/crearContrato'))
const Colors = React.lazy(() => import('../views/theme/colors/Colors'))
const Accordion = React.lazy(() => import('../views/base/accordion/Accordion'))

const routes = [
  { path: '/', exact: true, name: 'Home'},
  { path: '/listacontratos', name: 'ListaContratos', element: ListaContratos },
  { path: '/crearcontrato', name: 'Colors', element: crearContrato },
  { path: '/base/accordion', name: 'Accordion', element: Accordion }
]

export default routes
