import React from "react";
import { useAuth } from "./context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { user, isAuthenticated, loading } = useAuth();
  if (loading) return <h1>Loading...</h1>;
  if (!isAuthenticated && !loading) return <Navigate to="/login" replace />;

  //Outlet es proporcionado por react router dom y me permite seguir a la ruta estipulada en caso de estar loggeado
  return <Outlet />;
};

export default ProtectedRoute;
