import React from 'react';
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
import { useForm } from "react-hook-form";
import { useContratos } from '../../context/ContratosContext';

function CrearContrato() {
  const { register, handleSubmit } = useForm();
  const { createContratos } = useContratos();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) =>{
    createContratos(data);    
    navigate('/listacontratos')
  })
  return (
    <CContainer className="mt-3 mb-3">
    <CRow className="justify-content-center">
      <CCol sm="12" md="8" lg="6">
        <h3 className="text-center">CREAR CONTRATO</h3>
        <CCard className="mt-3">
          <CCardBody>
            <CCardTitle>Datos del empleado</CCardTitle>
            <CForm onSubmit={onSubmit}>
              <CRow>
                <CCol md="6">
                  <CFormInput
                    type="text"
                    label="Nombres"
                    name="nombre"
                    placeholder="Ingresa el nombre"
                    {...register('nombre')}
                    autoFocus
                    
                  />
                </CCol>
                <CCol md="6">
                  <CFormInput
                    label="Apellidos"
                    type="text"
                    name="apellido"
                    placeholder="Ingresa el apellido"
                    {...register('apellido')}
                  />
                </CCol>
                <CCol md="6">
                  <CFormInput
                    label="Documento"
                    type="text"
                    name="documento"
                    placeholder="Ingresa el documento"
                    {...register('documento')}
                  />
                </CCol>
                <CCol md="6">
                  <CFormInput
                    label="Fecha de expedición"
                    type="date"
                    name="fechafechaExpedicion"
                    placeholder="Ingresa la fecha de expedición"
                    {...register('fechaExpedicion')}
                  />
                </CCol>
                <CCol md="6">
                  <CFormInput
                    label="Cargo"
                    type="text"
                    name="cargo"
                    placeholder="Ingresa el cargo"
                    {...register('cargo')}
                  />
                </CCol>
                <CCol md="6">
                  <CFormInput
                    label="Sueldo"
                    type="text"
                    name="sueldo"
                    placeholder="Ingresa el sueldo"
                    {...register('sueldo')}
                  />
                </CCol>
                <CCol md="6">
                  <CFormInput
                    label="Fecha de Inicio"
                    type="date"
                    name="fechaInicio"
                    placeholder="Ingresa la fecha de inicio"
                    {...register('fechaInicio')}
                  />
                </CCol>
                <CCol md="6">
                  <CFormInput
                    label="Fecha de Finalización"
                    type="date"
                    name="fechaFin"
                    placeholder="Ingresa la fecha de fin"
                    {...register('fechaFin')}
                  />
                </CCol>
              </CRow>
                <CRow className="text-center">
                <CCol md="6">
                  <CButton color="success" className="mt-3" type="submit" >
                    <i className="fas fa-plus"></i> Crear Contrato
                  </CButton>
                </CCol>
                <CCol md="6">
                  <Link to="/">
                    <CButton color="danger" className="mt-3" type="button" >
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
