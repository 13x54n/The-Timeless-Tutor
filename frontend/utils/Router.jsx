import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { auth } from "../../firebase";
import Landing from "../pages/Landing";
import Themes from "../pages/Themes";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import AccountRecovery from "../pages/Authentication/AccountRecovery";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "../components/ProtectedRoute";
import Layout from "../src/components/Layout";

export default function Router() {
  auth.onAuthStateChanged((user) => {
    if (user) {
      //   setIsAuthenticated(true);
    } else {
      //   setIsAuthenticated(false);
    }
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Landing />
        </Layout>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: "/themes",
      element: (
        <Layout>
          <Themes />
        </Layout>
      ),
    },
    {
      path: "/auth/login",
      element: (
        <Layout>
          <Login />
        </Layout>
      ),
    },
    {
      path: "/auth/register",
      element: (
        <Layout>
          <Register />
        </Layout>
      ),
    },
    {
      path: "/auth/recovery",
      element: (
        <Layout>
          <AccountRecovery />
        </Layout>
      ),
    },
    {
      path: "*",
      element: <>404 Not Found</>,
    },
  ]);

  return <RouterProvider router={router} />;
}