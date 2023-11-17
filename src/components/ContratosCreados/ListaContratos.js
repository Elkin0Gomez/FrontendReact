import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CContainer,
  CRow,
  CCol,
  CTable,
  CTableHead,
  CTableRow,
  CButton,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
    
} from "@coreui/react";
import { useContratos } from "../../context/ContratosContext";

function ListaContratos() {
  const { getContratos, contratos, deleteContrato } = useContratos();

  useEffect(() => {
    getContratos();
  }, []);

  const Style = {
    textDecoration: "none",
  };

  return (
    <CContainer className="mt-3 mb-3">
      <CRow className="justify-content-center">
        <CCol>
          <h3 className="text-center">CONTRATOS CREADOS</h3>
          <div className="d-flex justify-content-center m-3">
            <Link to={"/crearContrato"}>
              <CButton color="success">
                <i className="fas fa-circle-plus"></i> Crear Contrato
              </CButton>
            </Link>
          </div>
          <div className="table-responsive">
            <CTable bordered striped hover className="m-3">
              <CTableHead color="dark">
                <CTableRow>
                  <CTableHeaderCell>NOMBRE</CTableHeaderCell>
                  <CTableHeaderCell>APELLIDO</CTableHeaderCell>
                  <CTableHeaderCell>DOCUMENTO</CTableHeaderCell>
                  <CTableHeaderCell>ACCIONES</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {contratos &&
                  contratos.map((contrato) => (
                    <CTableRow key={contrato._id}>
                      <CTableDataCell>
                        <Link to={`/editarContrato/${contrato._id}`} style={Style}>
                          {contrato.nombre}
                        </Link>
                      </CTableDataCell>
                      <CTableDataCell>{contrato.apellido}</CTableDataCell>
                      <CTableDataCell>{contrato.documento}</CTableDataCell>
                      <CTableDataCell>
                        <CButton
                          color="primary"
                          className="mt-1"
                          // onClick={() => this.eliminarRegistro(empleado.id)}
                        >
                          <FontAwesomeIcon icon={faDownload} /> Descargar
                          Contrato
                        </CButton>
                        <CButton
                          color="danger"
                          className="mt-1"
                          onClick={() => {
                            deleteContrato(contrato._id)
                          }}
                        >
                          Eliminar
                        </CButton>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
              </CTableBody>
            </CTable>
          </div>
        </CCol>
      </CRow>
      <CRow className="justify-content-center">
        <CCol lg="1" className="text-center">
          <nav aria-label="Page navigation"></nav>
        </CCol>
      </CRow>
    </CContainer>
  );
}

export default ListaContratos;
