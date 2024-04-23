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
import Roadmap from "../src/pages/Roadmap";
import Business from "../src/pages/Business";
import AboutUs from "../src/pages/AboutUs";

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
      path: "/roadmap",
      element: (
        <Layout>
          <Roadmap />
        </Layout>
      ),
    },
    {
      path: "/business",
      element: (
        <Layout>
          <Business />
        </Layout>
      ),
    },
    {
      path: "/about-us",
      element: (
        <Layout>
          <AboutUs />
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
