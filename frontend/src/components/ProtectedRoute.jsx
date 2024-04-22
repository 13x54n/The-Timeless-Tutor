import React, { useContext } from "react";
import { AuthContext } from "../contexts/Auth";
import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  return user ? <><Navbar/>{children}</> : <Navigate to="/"/>;
};

export default ProtectedRoute;