import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from "./components/layouts/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Product from "./pages/Product";
import Analytics from "./pages/Analytics";
import Cart from "./pages/cart/Cart";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register";
import MainLayout from "./components/layouts/MainLayout";
import About from "./pages/about/About";
import "./App.css";
import Home from "./pages/home/Home";
import Features from "./pages/features/Features";
import Blog from "./pages/blog/Blog";
import Support from "./pages/support/Support";
import { useState } from "react";
import type { ProductType } from "./types/PostType";

function App() {
  const [selectedProducts, setSelectedProducts] = useState<ProductType[]>([]);
  console.log("selectedProducts in App", selectedProducts);
  const router = createBrowserRouter([
    {
      path: "/dashboard",
      element: (
        <DashboardLayout
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        />
      ),
      children: [
        {
          index: true, // default for /dashboard
          element: <Dashboard />,
        },
        {
          path: "products",
          element: (
            <Product
              selectedProducts={selectedProducts}
              setSelectedProducts={setSelectedProducts}
            />
          ),
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
          path: "about",
          element: <About />,
        },
        {
          path: "features",
          element: <Features />,
        },
        {
          path: "support",
          element: <Support />,
        },
        {
          path: "Blog",
          element: <Blog />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
