import React from 'react'
const ListaContratos= React.lazy(()=> import('../components/ContratosCreados/ListaContratos'))
const crearContrato= React.lazy(()=> import('../components/ContratosCreados/crearContrato'))
const EditarContrato= React.lazy(()=> import('../components/ContratosCreados/EditarContrato'))
const Register= React.lazy(()=> import('../views/pages/register/Register'))


const routes = [
  { path: '/', exact: true, name: 'Home'},
  { path: '/listacontratos', name: 'Lista de Contratos', element: ListaContratos },
  { path: '/crearcontrato', name: 'Crear Contrato', element: crearContrato },
  { path: '/editarContrato/:id', name: 'Editar Contrato', element: EditarContrato },
  { path: '/register', name: 'Registrar usuario', element: Register },

]

export default routes
