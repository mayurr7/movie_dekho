import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import AppLayout from "./component/layout/AppLayout";
import About from "./pages/About";
import ErrorPage from "./component/ErrorPage";
import getApidata from "./API/GetApiData";
import MovieDetails from "./component/UI/MovieDetails";
import getMovieData from "./API/GetMovieData";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
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
          loader: getApidata, // Fetch data for the Movie page
        },
        {
          path: "/movie/:movieId",
          element: <MovieDetails />,
          loader: getMovieData, // Fetch data for the Movie page
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
