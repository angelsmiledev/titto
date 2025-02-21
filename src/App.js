import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Home from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Home,
      children: [],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
