import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Themes from "../pages/Themes";
// import Login from "../pages/Authentication/Login";
// import Register from "../pages/Authentication/Register";
// import AccountRecovery from "../pages/Authentication/AccountRecovery";
// import Dashboard from "../pages/Dashboard";
import Layout from "../src/components/Layout";
import { auth } from "../firebase";
import Home from "../src/pages/Home";
import ProtectedRoute from "../src/components/ProtectedRoute";
import Login from "../src/pages/Authentication/Login";
import Dashboard from "../src/pages/Dashboard";
import Signup from "../src/pages/Authentication/Signup";

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
          <Home />
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
    // {
    //   path: "/themes",
    //   element: (
    //     <Layout>
    //       <Themes />
    //     </Layout>
    //   ),
    // },
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
