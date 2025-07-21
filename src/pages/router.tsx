import { createBrowserRouter } from "react-router-dom";

import { Login } from "./Login/Login";
import { Register } from "./Register";
import MainLayout from "@/components/layouts/MainLayout";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import Dashboard from "./dashboard/Dashboard";
import Product from "./Product";
import Analytics from "./Analytics";
import About from "./about/About";
import Compiler from "./compiler/Compiler";
import Home from "./home/Home";

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
      {
        path: "analytics",
        element: <Analytics />,
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
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/compiler",
        element: <Compiler />,
      },
    ],
  },
]);

export default router;
