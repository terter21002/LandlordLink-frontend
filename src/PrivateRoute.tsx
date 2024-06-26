import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute: React.FC<{ path: string; element: React.ReactNode }> = ({
  path,
  element,
}) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/" replace />
  );
};

export default PrivateRoute;
