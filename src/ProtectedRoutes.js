import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { CSpinner } from "@coreui/react";

function ProtectedRoutes() {
  const { loading, isAuthenticated } = useAuth();

  if (loading)
    return (
      <div
        className="d-flex justify-content-center align-items-center vh-50"
        style={{ marginTop: "15%" }}
      >
        <CSpinner
          size="sm"
          variant="grow"
          style={{ width: "10rem", height: "10rem" }}
        />
      </div>
    );
  if (!loading && !isAuthenticated) return <Navigate to="/login" replace />;
  return <Outlet />;
}
export default ProtectedRoutes;
