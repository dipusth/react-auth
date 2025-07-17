import { createBrowserRouter } from "react-router-dom";

import { Login } from "./Login";
import { Register } from "./Register";
import { Home } from "./Home";
import DashboardLayout from "@/components/layouts/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
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
