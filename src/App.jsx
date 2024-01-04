import { useState, useEffect } from "react";
import "./styles/global.scss";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/home/Home";
import Charts from "./pages/charts/Charts";
import Products from "./pages/products/Products";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";

const queryClient = new QueryClient();

function App() {
  const [user, setUser] = useState(null);

  const Layout = () => {
    return (
      <div className="main">
        <Navbar user={!!user} />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute isAllowed={!!user} redirectTo="/login">
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/charts",
          element: <Charts />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login setUser={setUser} />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
