import "../assets/css/App.css";
import "../scss/style.scss";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../states/store";
import { AuthProvider } from "../context/AuthContext.js";
import { ContratosProvider } from "../context/ContratosContext.js";
import ProtectedRoutes from "../ProtectedRoutes.js";

const DefaultLayout = React.lazy(() => import("../layout/DefaultLayout"));
const Login = React.lazy(() => import("../views/pages/login/Login"));
const Page404 = React.lazy(() => import("../views/pages/page404/Page404"));
const Registrer = React.lazy(() => import("../views/pages/register/Register"));

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ContratosProvider>
          <BrowserRouter>
            <Suspense fallback={loading}>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/registrar" element={<Registrer />} />
                <Route path="/404" element={<Page404 />} />
                <Route element={<ProtectedRoutes />}>
                  <Route path="*" name="Home" element={<DefaultLayout />} />
                </Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
        </ContratosProvider>
      </AuthProvider>
    </Provider>
  );
}

export default App;
