/* eslint-disable react/prop-types */
import React, { useContext } from "react";
// import Footer from "./Footer";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/Auth";
import Navbar from "./Navbar";

export default function Layout({ children }) {
    const { user } = useContext(AuthContext);

    return user ? (
      <Navigate to="/dashboard" />
    ) : (
      <div className="grid min-h-screen grid-rows-[auto_1fr_auto]  ">
        <Navbar />
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
    );
}
