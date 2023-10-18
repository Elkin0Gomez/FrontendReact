import { CCard, CBadge, CButton, CCardHeader, CCardBody, CCardTitle, CCardText } from '@coreui/react'
import { Link, NavLink } from "react-router-dom"
import moment from 'moment'
import { EliminarPartidoButton } from "./EliminarPartidoBoton"

const PartidoCard= ({partido, editable})=>{

    return(
    <CCard className="mt-3 mb-3">
        <CCardHeader className="mi-card">
            {partido.jugado ? 
                <CBadge className="mi-badge-jugado">Jugado</CBadge> : 
                <CBadge className="mi-badge-pendiente">Pendiente</CBadge>
            }
            { editable ?
                <div>
                    <CButton color="primary" size="sm" className="me-2"
                            as={NavLink} to={`/editarpartido/${partido.idPartido}`}
                    >
                        Editar
                    </CButton>
                    <EliminarPartidoButton id={partido.idPartido} 
                                            local={partido.equipoEntityLocal.nombre} 
                                            visitante={partido.equipoEntityVisitante.nombre}/>
                </div>
                :""
            }
        </CCardHeader>
        <CCardBody>
            <CCardTitle>
                <Link to={`/partido/${partido.idPartido}`}> 
                    {partido.equipoEntityLocal.nombre} vs {partido.equipoEntityVisitante.nombre}
                </Link>
            </CCardTitle>            
            <CCardText>
                Fecha: {moment(partido.fecha).format('D[/]MM[/]YYYY')}
            </CCardText>
            <CCardText>
                Creado por {partido.usuarioEntity.nombre}, {moment(partido.creado).fromNow()}
            </CCardText>
        </CCardBody>
    </CCard>

    )
}

export {PartidoCard}
