import React from "react";
import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import { auth } from "../../firebase";

const ProtectedRoute = ({ children }) => {
  const user = auth.currentUser

  return user ? <><Navbar/>{children}</> : <Navigate to="/"/>;
};

export default ProtectedRoute;