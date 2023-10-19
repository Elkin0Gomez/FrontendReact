import React from 'react'
import axios from 'axios'
import { CButton } from '@coreui/react'
import { useNavigate } from 'react-router-dom'
import { ELIMINARPARTIDO_DELETE_ENDPOINT } from '../../connections/helpers/endpoints'

function EliminarPartidoButton({id, local, visitante}) {

    const navegar= useNavigate()

    const eliminar= async ()=>{

        axios.delete(`${ELIMINARPARTIDO_DELETE_ENDPOINT}/${id}`)
        .then(respuesta=>{
          navegar("/")
        })
        .catch(err=>{
          console.error(err);
        })

    }

    const crearAlerta= ()=>{

      const titulo= `Eliminar Partido \n ¿Desea eliminar el partido ${local} vs ${visitante}?`

      return (window.confirm(titulo) === true) ? eliminar() : ()=>{}

  }


    return (
      <CButton 
        color="danger"
        size="sm"
        onClick={crearAlerta}>Eliminar</CButton>
    )
}

export {EliminarPartidoButton}

