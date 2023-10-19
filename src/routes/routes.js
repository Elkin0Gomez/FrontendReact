import React from 'react'
const ListaContratos= React.lazy(()=> import('../components/PartidosCreados/ListaContratos'))
const crearContrato= React.lazy(()=> import('../components/PartidosCreados/crearContrato'))
const EditarContrato= React.lazy(()=> import('../components/PartidosCreados/EditarContrato'))
const Colors = React.lazy(() => import('../views/theme/colors/Colors'))
const Accordion = React.lazy(() => import('../views/base/accordion/Accordion'))

const routes = [
  { path: '/', exact: true, name: 'Home'},
  { path: '/listacontratos', name: 'ListaContratos', element: ListaContratos },
  { path: '/crearcontrato', name: 'Crear Contrato', element: crearContrato },
  { path: '/editarContrato/:id', name: 'EditarContrato', element: EditarContrato },
  { path: '/base/accordion', name: 'Accordion', element: Accordion }
]

export default routes
