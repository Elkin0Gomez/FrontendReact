import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Card, Col, Row } from 'react-bootstrap';
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
      <Container className="mt-3 mb-3">
        <Row className='justify-content-md-center'>
          <Col sm='12' md='8' lg='6'>
            <h3 className="text-center">EDITAR CONTRATO</h3>
            <Card className='mt-3 mb-3'>
              <Card.Body>
                <Card.Title>Datos del empleado</Card.Title>
                <Form onSubmit={actualizarDatos}>
                  <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Ingresa el nombre" 
                      value={empleado.nombre} 
                      onChange={(e) => setEmpleado({ ...empleado, nombre: e.target.value })} />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Correo</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Ingresa el correo" 
                      value={empleado.correo} 
                      onChange={(e) => setEmpleado({ ...empleado, correo: e.target.value })}/>
                  </Form.Group>
                  <Button 
                    className='bi bi-pencil m-3' 
                    variant="primary" 
                    type="submit"
                  >
                      Editar contrato
                  </Button>
                  <Link to={"/"}>
                      <Button 
                      className="btn btn-danger m-3 " 
                      type="button"
                      >
                        <i className="fa-solid fa-ban"></i>
                         Cancelar
                      </Button>
                    </Link>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EditarContrato;
