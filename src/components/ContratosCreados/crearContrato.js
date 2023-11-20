import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
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
} from "@coreui/react";
import { useForm } from "react-hook-form";
import { useContratos } from "../../context/ContratosContext";

function CrearContrato() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createContratos } = useContratos();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    createContratos(data);
    navigate("/listacontratos");
  });



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
                      {...register("nombre", {
                        required: "Este campo es requerido",
                      })}
                      autoFocus
                    />
                    {errors.nombre && (
                      <div className="text-danger">{errors.nombre.message}</div>
                    )}
                  </CCol>
                  <CCol md="6">
                    <CFormInput
                      label="Apellidos"
                      type="text"
                      name="apellido"
                      {...register("apellido", {
                        required: "Este campo es requerido",
                      })}
                    />
                    {errors.nombre && (
                      <div className="text-danger">{errors.nombre.message}</div>
                    )}
                  </CCol>
                  <CCol md="6">
                    <CFormInput
                      label="Documento"
                      type="number"
                      name="documento"
                      pattern="/^[0-9.] +$/"
                      onDrop="return false;"
                      onpaste="return false;"
                      {...register("documento", {
                        required: "Este campo es requerido",
                      })}
                    />
                    {errors.nombre && (
                      <div className="text-danger">{errors.nombre.message}</div>
                    )}
                  </CCol>
                  <CCol md="6">
                    <CFormInput
                      label="Fecha de expedición"
                      type="date"
                      name="fechafechaExpedicion"
                      {...register("fechaExpedicion", {
                        required: "Este campo es requerido",
                      })}
                    />
                    {errors.nombre && (
                      <div className="text-danger">{errors.nombre.message}</div>
                    )}
                  </CCol>
                  <CCol md="6">
                    <CFormInput
                      label="Cargo"
                      type="text"
                      name="cargo"
                      {...register("cargo", {
                        required: "Este campo es requerido",
                      })}
                    />
                    {errors.nombre && (
                      <div className="text-danger">{errors.nombre.message}</div>
                    )}
                  </CCol>
                  <CCol md="6">
                    <CFormInput
                      label="Sueldo"
                      type="number"
                      name="sueldo"
                      pattern="/^[0-9.] +$/"
                      onDrop="return false;"
                      onpaste="return false;"
                      {...register("sueldo", {
                        required: "Este campo es requerido",
                      })}
                    />
                    {errors.nombre && (
                      <div className="text-danger">{errors.nombre.message}</div>
                    )}
                  </CCol>
                  <CCol md="6">
                    <CFormInput
                      label="Fecha de Inicio"
                      type="date"
                      name="fechaInicio"
                      {...register("fechaInicio", {
                        required: "Este campo es requerido",
                      })}
                    />
                    {errors.nombre && (
                      <div className="text-danger">{errors.nombre.message}</div>
                    )}
                  </CCol>
                  <CCol md="6">
                    <CFormInput
                      label="Fecha de Finalización"
                      type="date"
                      name="fechaFin"
                      {...register("fechaFin", {
                        required: "Este campo es requerido",
                      })}
                    />
                    {errors.nombre && (
                      <div className="text-danger">{errors.nombre.message}</div>
                    )}
                  </CCol>
                </CRow>
                <CRow className="text-center">
                  <CCol md="6">
                    <Link to="/">
                      <CButton color="secondary" className=" mt-3" type="button">
                        <i className="fas fa-ban"></i> Volver
                      </CButton>
                    </Link>
                  </CCol>
                  <CCol md="6">
                  <CButton
                    color="success"
                    className="mt-3"
                    type="submit"
                    disabled={Object.keys(errors).length > 0}
                  >
                    <i className="fas fa-plus"></i> Crear Contrato
                  </CButton>
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
