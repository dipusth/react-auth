import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from "./components/layouts/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Product from "./pages/Product";
import Analytics from "./pages/Analytics";
import Cart from "./pages/cart/Cart";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register";
import MainLayout from "./components/layouts/MainLayout";
import { Home } from "lucide-react";
import About from "./pages/about/About";
import Compiler from "./pages/compiler/Compiler";
import "./App.css";

function App() {
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
        {
          path: "cart",
          element: <Cart />,
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
  return <RouterProvider router={router} />;
}

export default App;
