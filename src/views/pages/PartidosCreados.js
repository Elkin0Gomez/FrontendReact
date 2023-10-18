import {useState, useEffect} from "react"
// import axios from "axios"
// import { PARTIDOSCREADOS_GET_ENDPOINT } from "../../connections/helpers/endpoints";
import { CContainer , CCardBody, CRow, CCol } from '@coreui/react'
import { PartidoCard } from "../../components/PartidosCreados/PartidoCard";
import partidosCreados from '../../connections/datapartidoscreados'; 


const PartidosCreados= ()=>{

    const [partidos, setPartidos] = useState([]);
    const [buscando, setBuscando] = useState(true);

    useEffect(()=>{
        // axios.get(PARTIDOSCREADOS_GET_ENDPOINT)
        // .then(respuesta => {
        //     setPartidos(respuesta.data);
        //     setBuscando(false);
        // }).catch(err => {
        //     console.error(err);
        //     setBuscando(false);
        // })

        setPartidos(partidosCreados);
        setBuscando(false);
    }, []);


    return (
        <CContainer  className="mt-3 mb-3">
            <CRow className="justify-content-md-center">
                <CCol sm="12" md="8" lg="6">
                    <h3 className="text-center">Partidos creados</h3>
                    <CCardBody>
                        {buscando ? "Cargando..." : (partidos.length ===0 && "No hay partidos disponibles")}
                        {partidos.map(partido => <PartidoCard key={partido.idPartido} partido={partido} editable={true}/>)}
                    </CCardBody>
                </CCol>
            </CRow>
        </CContainer >
        )
}

export default PartidosCreados

