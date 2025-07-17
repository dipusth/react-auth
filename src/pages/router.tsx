import { createBrowserRouter } from "react-router-dom";

import { Login } from "./Login";
import { Register } from "./Register";

import DashboardLayout from "@/components/layouts/DashboardLayout";
import Dashboard from "./dashboard/Dashboard";
import Product from "./Product";
import { Home } from "./Home";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true, // default for /dashboard
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <Product />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
