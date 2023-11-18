import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";
import {
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CForm,
  CFormInput,
  CButton,
} from "@coreui/react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { useContratos } from "../../context/ContratosContext";
import { useForm } from "react-hook-form";

function EditarContrato() {
  const { register, handleSubmit, setValue } = useForm();
  const { getContrato, deleteContrato, updateContrato, contratos } =
    useContratos();
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);

  const params = useParams();

  useEffect(() => {
    async function loadContrato() {
      if (params.id) {
        const contrato = await getContrato(params.id);

        const fechaExpedicion = new Date(contrato.fechaExpedicion)
          .toISOString()
          .split("T")[0];
        const fechaInicio = new Date(contrato.fechaInicio)
          .toISOString()
          .split("T")[0];
        const fechaFin = new Date(contrato.fechaFin)
          .toISOString()
          .split("T")[0];

        setValue("nombre", contrato.nombre);
        setValue("apellido", contrato.apellido);
        setValue("documento", contrato.documento);
        setValue("fechaExpedicion", fechaExpedicion);
        setValue("cargo", contrato.cargo);
        setValue("sueldo", contrato.sueldo);
        setValue("fechaInicio", fechaInicio);
        setValue("fechaFin", fechaFin);
      }
    }
    loadContrato(contratos);
  }, []);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setEditing(false);
  };

  const onSubmit = handleSubmit((data) => {
    updateContrato(params.id, data);
    navigate("/listacontratos");
  });

  const confirmarEliminarContrato = async () => {
    const result = await Swal.fire({
      icon: "warning",
      title: "¿Estás seguro?",
      text: "Esta acción eliminará el contrato. ¿Deseas continuar?",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      await deleteContrato(params.id);
      navigate("/listacontratos");
    }
  };

  return (
    <CContainer className="mt-3 mb-3">
      <CRow className="justify-content-center">
        <CCol sm="12" md="8" lg="6">
          <h3 className="text-center">EDITAR CONTRATO</h3>
          <CCard className="mt-3">
            <CCardBody>
              <h5 className="card-title">Datos del empleado</h5>
              <CForm onSubmit={onSubmit}>
                <CRow>
                  <CCol md="6">
                    <CFormInput
                      type="text"
                      label="Nombres"
                      placeholder="Ingresa el nombre"
                      {...register("nombre")}
                      disabled={!editing}
                    />
                  </CCol>
                  <CCol md="6">
                    <CFormInput
                      label="Apellidos"
                      type="text"
                      placeholder="Ingresa el apellido"
                      {...register("apellido")}
                      disabled={!editing}
                    />
                  </CCol>
                  <CCol md="6">
                    <CFormInput
                      label="Documento"
                      type="text"
                      placeholder="Ingresa el documento"
                      {...register("documento")}
                      disabled={!editing}
                    />
                  </CCol>
                  <CCol md="6">
                    <CFormInput
                      label="Fecha de expedición"
                      type="date"
                      placeholder="Ingresa la fecha de expedición"
                      {...register("fechaExpedicion")}
                      disabled={!editing}
                    />
                  </CCol>
                  <CCol md="6">
                    <CFormInput
                      label="Cargo"
                      type="text"
                      placeholder="Ingresa el cargo"
                      {...register("cargo")}
                      disabled={!editing}
                    />
                  </CCol>
                  <CCol md="6">
                    <CFormInput
                      label="Sueldo"
                      type="text"
                      placeholder="Ingresa el sueldo"
                      {...register("sueldo")}
                      disabled={!editing}
                    />
                  </CCol>
                  <CCol md="6">
                    <CFormInput
                      label="Fecha de Inicio"
                      type="date"
                      placeholder="Ingresa la fecha de inicio"
                      {...register("fechaInicio")}
                      disabled={!editing}
                    />
                  </CCol>
                  <CCol md="6">
                    <CFormInput
                      label="Fecha de Finalización"
                      type="date"
                      placeholder="Ingresa la fecha de fin"
                      {...register("fechaFin")}
                      disabled={!editing}
                    />
                  </CCol>
                </CRow>
                <CRow className="justify-content-center">
                {!editing ? (
                  <CCol md="4" className= "">
                    <CButton
                      color="primary"
                      className="mt-3 col-12"
                      type="button"
                      onClick={handleEdit}
                    >
                      <i className="fas fa-edit"></i> Editar
                    </CButton>
                  </CCol>
                ) : (
                  <>
                    <CCol md="4">
                      <CButton
                        color="success"
                        className="mt-3 col-12"
                        type="submit"
                      >
                        <i className="fas fa-check"></i> Actualizar
                      </CButton>
                    </CCol>
                  </>
                )}
                <CCol md="4">
                  <Link to="/">
                    <CButton
                      color="secondary"
                      className="mt-3 col-12"
                      type="button"
                    >
                      <i className="fas fa-ban"></i> Volver
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

export default EditarContrato;
