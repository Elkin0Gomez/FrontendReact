import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import * as XLSX from "xlsx";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
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
import { Pagination } from "react-bootstrap";
import { useContratos } from "../../context/ContratosContext";

function ListaContratos() {
  const { getContratos, contratos, deleteContrato, generarDocumento } =
    useContratos();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    getContratos();
  }, []);

  const Style = {
    textDecoration: "none",
  };

  const confirmarEliminarContrato = async (contratoId) => {
    const result = await Swal.fire({
      icon: "warning",
      title: "¿Estás seguro?",
      text: "Esta acción eliminará el contrato. ¿Deseas continuar?",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      await deleteContrato(contratoId);
      getContratos();
    }
  };

  const filteredContratos = Array.isArray(contratos)
    ? contratos.filter(
        (contrato) =>
          contrato.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
          contrato.apellido.toLowerCase().includes(searchTerm.toLowerCase()) ||
          contrato.documento.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredContratos?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil((filteredContratos?.length || 0) / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const exportToExcel = () => {
    const dataToExport = filteredContratos.map((contrato) => {
      return {
        Nombre: contrato.nombre,
        Apellido: contrato.apellido,
        Documento: contrato.documento,
        FechaExpedicion: contrato.fechaExpedicion,
        Sueldo: contrato.sueldo,
        Cargo: contrato.cargo,
        FechaInicio: contrato.fechaInicio,
        FechaFin: contrato.fechaFin,
      };
    });

    const ws = XLSX.utils.json_to_sheet(dataToExport);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Contratos");
    XLSX.writeFile(wb, "contratos.xlsx");
  };

  return (
    <CContainer className="mt-3 mb-3">
      <CRow className="justify-content-center">
        <CCol>
          <h3 className="text-center">CONTRATOS CREADOS</h3>
          <div className="d-flex justify-content-between align-items-center m-3">
            <div className="d-flex">
              <CButton
                color="primary"
                className="m-1"
                type="button"
                onClick={exportToExcel}
              >
                <FontAwesomeIcon icon={faDownload} /> Exportar Excel
              </CButton>
              <Link to={"/crearContrato"}>
                <CButton color="success" className="m-1">
                  <i className="fas fa-circle-plus"></i> Crear Contrato
                </CButton>
              </Link>
            </div>
            <div className="ml-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
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
                {currentItems && currentItems.length > 0 ? (
                  currentItems.map((contrato) => (
                    <CTableRow key={contrato._id}>
                      <CTableDataCell>
                        <Link
                          to={`/editarContrato/${contrato._id}`}
                          style={Style}
                        >
                          {contrato.nombre}
                        </Link>
                      </CTableDataCell>
                      <CTableDataCell>{contrato.apellido}</CTableDataCell>
                      <CTableDataCell>{contrato.documento}</CTableDataCell>
                      <CTableDataCell>
                        <CButton
                          color="primary"
                          className="m-1"
                          onClick={() => generarDocumento(contrato._id)}
                        >
                          <FontAwesomeIcon icon={faDownload} /> Descargar
                        </CButton>

                        <CButton
                          color="danger"
                          className="m-1"
                          type="button"
                          onClick={() =>
                            confirmarEliminarContrato(contrato._id)
                          }
                        >
                          <i className="fas fa-ban"></i> Eliminar
                        </CButton>
                      </CTableDataCell>
                    </CTableRow>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">No hay contratos disponibles.</td>
                  </tr>
                )}
              </CTableBody>
            </CTable>
          </div>
          {totalPages > 1 && (
            <div className="d-flex justify-content-center">
              <Pagination>
                {Array.from({ length: totalPages }).map((_, index) => (
                  <Pagination.Item
                    key={index + 1}
                    active={index + 1 === currentPage}
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}
              </Pagination>
            </div>
          )}
        </CCol>
      </CRow>
      <CRow className="justify-content-center">
        <CCol lg="1" className="text-center">
          <nav aria-label="Page navigation"></nav>
        </CCol>
      </CRow>
      <ToastContainer />
    </CContainer>
  );
}

export default ListaContratos;
