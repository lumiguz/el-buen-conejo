import React from "react";
import ReactDOM from "react-dom/client";
//import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
//import react-router-dom v6
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import components routes
import App from "./App.jsx";
import ErrorPage from "./error-page.jsx";
import Landing from "./Routes/Landing";
import Market from "./Routes/Market";

//implement routes with react-router-dom
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/market",
    element: <Market />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/app",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
