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
      <CRow className="justify-content-center">
        <CCol sm="12" md="8" lg="6">
          <h3 className="text-center">EDITAR CONTRATO</h3>
          <CCard className="mt-3">
            <CCardBody>
              <h5 className="card-title">Datos del empleado</h5>
              <CForm onSubmit={actualizarDatos}>
                <CRow>
                  <CCol md="6">
                    <CFormInput
                      type="text"
                      label="Nombres"
                      placeholder="Ingresa el nombre"
                      value={empleado.nombre}
                      onChange={(e) => setEmpleado({ ...empleado, nombre: e.target.value })}
                    />
                  </CCol>
                  <CCol md="6">
                    <CFormInput
                      label="Apellidos"
                      type="text"
                      placeholder="Ingresa el apellido"
                      value={empleado.apellido}
                      onChange={(e) => setEmpleado({ ...empleado, apellido: e.target.value })}
                    />
                  </CCol>
                  <CCol md="6">
                    <CFormInput
                      label="Documento"
                      type="text"
                      placeholder="Ingresa el documento"
                      value={empleado.documento}
                      onChange={(e) => setEmpleado({ ...empleado, documento: e.target.value })}
                    />
                  </CCol>
                  <CCol md="6">
                    <CFormInput
                      label="Fecha de expedición"
                      type="date"
                      placeholder="Ingresa la fecha de expedición"
                      value={empleado.fechaEx}
                      onChange={(e) => setEmpleado({ ...empleado, fechaEx: e.target.value })}
                    />
                  </CCol>
                  <CCol md="6">
                    <CFormInput
                      label="Cargo"
                      type="text"
                      placeholder="Ingresa el cargo"
                      value={empleado.cargo}
                      onChange={(e) => setEmpleado({ ...empleado, cargo: e.target.value })}
                    />
                  </CCol>
                  <CCol md="6">
                    <CFormInput
                      label="Sueldo"
                      type="text"
                      placeholder="Ingresa el sueldo"
                      value={empleado.sueldo}
                      onChange={(e) => setEmpleado({ ...empleado, sueldo: e.target.value })}
                    />
                  </CCol>
                  <CCol md="6">
                    <CFormInput
                      label="Fecha de Inicio"
                      type="date"
                      placeholder="Ingresa la fecha de inicio"
                      value={empleado.fechaIni}
                      onChange={(e) => setEmpleado({ ...empleado, fechaIni: e.target.value })}
                    />
                  </CCol>
                  <CCol md="6">
                    <CFormInput
                      label="Fecha de Finalización"
                      type="date"
                      placeholder="Ingresa la fecha de fin"
                      value={empleado.fechaFin}
                      onChange={(e) => setEmpleado({ ...empleado, fechaFin: e.target.value })}
                    />
                  </CCol>
                </CRow>
                <CRow className="text-center">
                  <CCol md="6">
                    <CButton color="primary" className="mt-3" type="submit" block>
                      <i className="fas fa-edit"></i> Editar Contrato
                    </CButton>
                  </CCol>
                  <CCol md="6">
                    <Link to="/">
                      <CButton color="danger" className="mt-3" type="button" block>
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
}

export default EditarContrato;
