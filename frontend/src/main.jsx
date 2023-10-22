import React from "react";
import ReactDOM from "react-dom/client";
//import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
//import react-router-dom v6
import { RouterProvider } from "react-router-dom";
//import API Context
import AppContextProvider from "./context/AppContextProvider";
//import routes
import { routes } from "./utils/routes/data";

//implement routes with react-router-dom
const router = routes;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
);
