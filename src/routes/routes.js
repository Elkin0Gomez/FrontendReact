import React from 'react'
const ListaContratos= React.lazy(()=> import('../components/PartidosCreados/ListaContratos'))
const crearContrato= React.lazy(()=> import('../components/PartidosCreados/crearContrato'))
const EditarContrato= React.lazy(()=> import('../components/PartidosCreados/EditarContrato'))
const Register= React.lazy(()=> import('../views/pages/register/Register'))


const routes = [
  { path: '/', exact: true, name: 'Home'},
  { path: '/listacontratos', name: 'ListaContratos', element: ListaContratos },
  { path: '/crearcontrato', name: 'Crear Contrato', element: crearContrato },
  { path: '/editarContrato/:id', name: 'EditarContrato', element: EditarContrato },
  { path: '/register', name: 'EditarContrato', element: Register },

]

export default routes
