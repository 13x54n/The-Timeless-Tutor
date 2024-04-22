import React from 'react'
import ReactDOM from 'react-dom/client'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import './index.css'
import AuthProvider from './contexts/Auth.jsx'
import Router from '../utils/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <Router />
    <ToastContainer/>
  </AuthProvider>,
)
