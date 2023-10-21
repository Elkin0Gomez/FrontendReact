import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
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
} from '@coreui/react';

class ListaContratos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datosCargados: false,
      empleados: [],
      currentPage: 1, 
      itemsPerPage: 5,
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
    const { datosCargados, empleados, currentPage, itemsPerPage } = this.state;

    if (!datosCargados) {
      return <div>Cargando...</div>;
    } else {
      const linkStyle = {
        textDecoration: 'none',
        color: 'black', 
      };
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const empleadosPaginados = empleados.slice(indexOfFirstItem, indexOfLastItem);    

      return (
       <CContainer className="mt-3 mb-3">
          <CRow className="justify-content-center">
            <CCol>
              <h3 className="text-center">CONTRATOS CREADOS</h3>
              <div className='d-flex justify-content-center m-3'>
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
                      <CTableHeaderCell>ID</CTableHeaderCell>
                      <CTableHeaderCell>NOMBRE</CTableHeaderCell>
                      <CTableHeaderCell>CORREO</CTableHeaderCell>
                      <CTableHeaderCell>ACCIONES</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                   {empleadosPaginados.map((empleado) => (
                      <CTableRow key={empleado.id}>
                        <CTableDataCell>
                          <Link to={`/editarContrato/${empleado.id}`} style={linkStyle}>
                            {empleado.id}
                          </Link>
                        </CTableDataCell>
                        <CTableDataCell>
                          <Link to={`/editarContrato/${empleado.id}`} style={linkStyle}>
                            {empleado.nombre}
                          </Link>
                        </CTableDataCell>
                        <CTableDataCell>
                          <Link to={`/editarContrato/${empleado.id}`} style={linkStyle}>
                            {empleado.correo}
                          </Link>
                        </CTableDataCell>
                        <CTableDataCell>
                          <CButton
                            color="primary"
                            className="mt-1"
                            // onClick={() => this.eliminarRegistro(empleado.id)}
                          >
                            <FontAwesomeIcon icon={faDownload} /> Descargar Contrato
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
              <nav aria-label="Page navigation">
                <ul className="pagination">
                  {Array.from({ length: Math.ceil(empleados.length / itemsPerPage) }, (_, index) => (
                    <li key={index} className={currentPage === index + 1 ? 'page-item active' : 'page-item'}>
                      <button
                        className="page-link"
                        onClick={() => this.setState({ currentPage: index + 1 })}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </CCol>
          </CRow>
        </CContainer>
      );
    }
  }
}

export default ListaContratos;

