import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import {  CContainer,  CRow,  CCol,  CCard,  CCardBody,  CForm,  CFormInput,  CButton,} from '@coreui/react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function EditarContrato() {
  const { id } = useParams();
  const [datosCargados, setDatosCargados] = useState(false);
  const [empleado, setEmpleado] = useState({ nombre: '', correo: '' });

  const actualizarDatos=(e)=>{
    e.preventDefault();
    console.log('formulario enviado...');
  }

  useEffect(() => {
    fetch(`http://localhost/empleados/?consultar=${id}`)
      .then((respuesta) => respuesta.json())
      .then((datosRespuesta) => {
        console.log(datosRespuesta);
        setDatosCargados(true);
        setEmpleado(datosRespuesta[0] || {});
      })
      .catch(console.log);
  }, [id]);
  
  if(!datosCargados){
    return(
      <div>
        Cargando...
      </div>
    )
  }else{
    return (
        <CContainer className="mt-3 mb-3">
        <CRow className='justify-content-md-center'>
          <CCol sm='12' md='8' lg='6'>
            <h3 className="text-center">EDITAR CONTRATO</h3>
            <CCard className='mt-3 mb-3'>
              <CCardBody>
                <h5 className="card-title">Datos del empleado</h5>
                <CForm onSubmit={actualizarDatos}>
                    <CFormInput
                      label="Nombre"
                      type="text"
                      placeholder="Ingresa el nombre"
                      value={empleado.nombre}
                      onChange={(e) => setEmpleado({ ...empleado, nombre: e.target.value })}
                    />
                    <CFormInput
                      type="text"
                      label="Correo"
                      placeholder="Ingresa el correo"
                      value={empleado.correo}
                      onChange={(e) => setEmpleado({ ...empleado, correo: e.target.value })}
                    />
                  <CButton
                    className='bi bi-pencil m-3'
                    color="primary"
                    type="submit"
                  >
                    Editar contrato
                  </CButton>

                  <CButton
                    className="btn btn-danger m-3"
                    type="button"
                  >
                    <i className="fa-solid fa-ban"></i> Cancelar
                  </CButton>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    );
  }
}

export default EditarContrato;
