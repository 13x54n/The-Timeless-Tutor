import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "../src/components/Layout";
import Home from "../src/pages/Home";
import ProtectedRoute from "../src/components/ProtectedRoute";
import Login from "../src/pages/Authentication/Login";
import Dashboard from "../src/pages/Dashboard";
import Signup from "../src/pages/Authentication/Signup";
import Courses from "../src/pages/Courses";
import { useContext } from "react";
import { AuthContext } from "../src/contexts/Auth";

export default function Router() {
  const { user } = useContext(AuthContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: user ? (
        <Navigate to="/dashboard" />
      ) : (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: "/dashboard",
      element: !user ? (
        <Navigate to="/" />
      ) : (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: "/courses",
      element: (
        <Layout>
          <Courses />
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
      path: "/auth/signup",
      element: (
        <Layout>
          <Signup />
        </Layout>
      ),
    },
    // {
    //   path: "/auth/recovery",
    //   element: (
    //     <Layout>
    //       <AccountRecovery />
    //     </Layout>
    //   ),
    // },
    // {
    //   path: "*",
    //   element: <>404 Not Found</>,
    // },
  ]);

  return <RouterProvider router={router} />;
}
