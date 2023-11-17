import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked } from "@coreui/icons";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../context/AuthContext";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {signin, errors: signinErrors, isAuthenticated} = useAuth();

  const onSubmit = handleSubmit((data) => {
    signin(data)
  });

  useEffect(()=>{
    if(isAuthenticated) navigate('/listacontratos')
  }, [isAuthenticated])

  const linkStyle = {
    color: "red",
  };
  const registerStyle = {
    background: "red",
    color: "white",
    paddingTop: "2px",
    textAlign: "center",
    margin: "2px",
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody className="d-flex flex-column align-items-center">
                  <CForm onSubmit={onSubmit}>
                    <h1 className="m-4">Iniciar sesion</h1>
                    {
                      signinErrors.map((error, i) =>(
                        <div style={registerStyle} key={i}>
                          {error}
                        </div>
                      ))
                    }
                    <div className="mb-3">
                      <CInputGroup>
                        <CInputGroupText>@</CInputGroupText>
                        <CFormInput
                          type="email"
                          placeholder="Correo"
                          {...register("email", { required: true })}
                        />
                      </CInputGroup>
                      {errors.email && (
                        <p style={linkStyle}>El correo es requerido</p>
                      )}
                    </div>
                    <div className="mb-3">
                      <CInputGroup>
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          type="password"
                          placeholder="Contraseña"
                          {...register("password", { required: true })}
                        />
                      </CInputGroup>
                      {errors.password && (
                        <p style={linkStyle}>La contraseña es requerida</p>
                      )}
                    </div>
                    <p>
                      ¿Aú no tienes cuenta? <Link to={`/registrar`}>Registrase</Link>
                    </p>
                    <div className="d-grid">
                      <CButton type="submit" color="success">
                        Ingresar
                      </CButton>
                    </div>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white bg-danger py-5 d-none d-md-block"
                style={{ width: "44%" }}
              >
                <CCardBody className="text-center">
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src="https://www.fesc.edu.co/portal/images/inicio/pre-inscr%C3%ADbete_FESC.gif"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    ></img>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
