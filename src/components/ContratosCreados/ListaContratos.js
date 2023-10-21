import React from 'react'
import {  CContainer,  CRow,  CCol,  CButton,  CTable,  CTableHead,  CTableRow,  CTableHeaderCell,  CTableBody,  CTableDataCell,} from '@coreui/react';
import { Link } from 'react-router-dom';

class ListaContratos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datosCargados: false,
      empleados: [],
    };
  }

  eliminarRegistro = (id) => {
    console.log(id);
    fetch('http://localhost/empleados/?borrar=' + id)
      .then((respuesta) => respuesta.json())
      .then((datosRespuesta) => {
        console.log(datosRespuesta);
        this.cargarDatos();
      })
      .catch(console.log);
  }

  cargarDatos() {
    fetch('http://localhost/empleados/')
      .then((respuesta) => respuesta.json())
      .then((datosRespuesta) => {
        console.log(datosRespuesta);
        this.setState({
          datosCargados: true,
          empleados: datosRespuesta,
        });
      })
      .catch(console.log);
  }

  componentDidMount() {
    this.cargarDatos();
  }

  render() {
    const { datosCargados, empleados } = this.state;
    
    if (!datosCargados) {
      return <div>Cargando...</div>;
    } else {
      return( 
        <CContainer className="mt-3 mb-3">
        <CRow className="justify-content-md-center">
          <CCol>
            <h3 className="text-center">CONTRATOS CREADOS</h3>
            <div className='d-flex justify-content-center m-3'>
            <Link to={"/crearContrato"}>
                  <CButton className="btn btn-success">
                    <i className="fas fa-circle-plus"></i> Crear Contrato
                  </CButton>
              </Link>
            </div>
            <div className="table-responsive">
              <CTable bordered className="m-3">
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                    <CTableHeaderCell scope="col">NOMBRE</CTableHeaderCell>
                    <CTableHeaderCell scope="col">CORREO</CTableHeaderCell>
                    <CTableHeaderCell scope="col">ACCIONES</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {empleados.map((empleado) => (
                    <CTableRow key={empleado.id}>
                      <CTableDataCell>{empleado.id}</CTableDataCell>
                      <CTableDataCell>{empleado.nombre}</CTableDataCell>
                      <CTableDataCell>{empleado.correo}</CTableDataCell>
                      <CTableDataCell>
                        <Link to={"/editarContrato/" + empleado.id}>
                          <CButton color="warning" className="mt-1">
                            <i className="bi bi-pencil"></i> Editar
                          </CButton>
                        </Link>
                        &nbsp;
                        <CButton
                          color="danger"
                          className="mt-1"
                          onClick={() => this.eliminarRegistro(empleado.id)}
                        >
                          <i className="bi bi-trash"></i> Eliminar
                        </CButton>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </div>
          </CCol>
        </CRow>
      </CContainer>
      )
    }
  }
} 
export default ListaContratos;