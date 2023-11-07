import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  const linkStyle = {
    color: 'red', 
  }
  const registerStyle = {
    background: 'red',
    color: 'white', 
    paddingTop: '2px'
  }

  return (
    <div
      className="bg-light d-flex flex-row align-items-center text-center"
      style={{ paddingTop: "20vh" }}
    >
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm
                  onSubmit={handleSubmit(async (values) => {
                    signup(values);
                  })}
                >
                  <h1 className="m-4">Registrar Usuario</h1>
                  {
                    registerErrors.map((error, i) =>(
                      <div style={registerStyle} key={i}>
                        {error}
                      </div>
                    ))
                  }
                  <div className="mb-3">
                    <CInputGroup>
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        type="text"
                        placeholder="Usuario"
                        {...register("username", { required: true })}
                      />
                    </CInputGroup>
                    {errors.username && <p style={linkStyle}>El usuario es requerido</p>}
                  </div>
                  <div className="mb-3">
                    <CInputGroup>
                      <CInputGroupText>@</CInputGroupText>
                      <CFormInput
                        type="email"
                        placeholder="Correo"
                        {...register("email", { required: true })}
                      />
                    </CInputGroup>
                    {errors.email && <p style={linkStyle}>El correo es requerido</p>}
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
                    {errors.password && <p style={linkStyle}>La contraseña es requerida</p>}
                  </div>         
                  <div className="d-grid">
                    <CButton type="submit" color="success">
                      Crear Usuario
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Register;
