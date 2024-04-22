/* eslint-disable react/prop-types */
import React, { useContext } from "react";
// import Footer from "./Footer";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/Auth";

export default function Layout({ children }) {
    const { user } = useContext(AuthContext);

    return user ? (
      <Navigate to="/dashboard" />
    ) : (
      <div className="grid min-h-screen grid-rows-[auto_1fr_auto]  ">
        <Navbar />
        <main className="my-8 mx-[5vw] mb-10">{children}</main>
        {/* <Footer /> */}
      </div>
    );
}
