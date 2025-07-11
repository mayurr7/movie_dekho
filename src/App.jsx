import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import AppLayout from "./component/layout/AppLayout";
import About from "./pages/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "movie",
          element: <Movie />,
        },
        {
          path: "contact",
          element: <Movie />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
