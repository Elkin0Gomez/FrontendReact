import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardTitle,
  CForm,
  CFormInput,
  CButton,
} from '@coreui/react';

function CrearContrato() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const navigate = useNavigate();

  const cambioValor = (e) => {
    if (e.target.name === 'nombre') {
      setNombre(e.target.value);
    } else if (e.target.name === 'correo') {
      setCorreo(e.target.value);
    }
  }

  const enviarDatos = (e) => {
    e.preventDefault();
    console.log('formulario enviado...');

    const datosEnviar = {
      nombre: nombre,
      correo: correo
    };

    fetch('http://localhost/empleados/?insertar=1', {
      method: 'POST',
      body: JSON.stringify(datosEnviar)
    })
    .then(respuesta => respuesta.json())
    .then((datosRespuesta) => {
      console.log(datosRespuesta);
      navigate('/');
    })
    .catch(console.log);
  }

  return (
    <CContainer className="mt-3 mb-3">
      <CRow className="justify-content-md-center">
        <CCol sm="12" md="8" lg="6">
          <h3 className="text-center">CREAR CONTRATO</h3>
          <CCard className="mt-3 mb-3">
            <CCardBody>
              <CCardTitle>Datos del empleado</CCardTitle>
              <CForm onSubmit={enviarDatos}>
              <CRow>
                <CCol>
                  <CFormInput
                    type="text"
                    label="Nombre"
                    name="nombre"
                    onChange={cambioValor}
                    value={nombre}
                    placeholder="Ingresa el nombre"
                  />
                </CCol>
                <CCol>
                  <CFormInput
                    label="Correo"
                    type="email"
                    name="correo"
                    onChange={cambioValor}
                    value={correo}
                    placeholder="Ingresa el correo"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <CButton color="success" className="mt-3" type="submit">
                    <i className="fas fa-plus"></i> Crear Contrato
                  </CButton>
                </CCol>
                <CCol>
                  <Link to="/">
                    <CButton color="danger" className="mt-3" type="button">
                      <i className="fas fa-ban"></i> Cancelar
                    </CButton>
                  </Link>
                </CCol>
              </CRow>
            </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  );
}
export default CrearContrato;
