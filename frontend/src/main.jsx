import React from "react";
import ReactDOM from "react-dom/client";
//import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
//import react-router-dom v6
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import components routes
import App from "./App";
import ErrorPage from "./error-page";
import Landing from "./Routes/Landing";
import Login from "./Routes/Login";
import Register from "./Routes/Register";
import Forgot from "./Routes/Forgot";
import ChangePass from "./Routes/ChangePass";
import Litters from "./Routes/Litters";
import ViewRabbits from "./Routes/Rabbits/ViewRabbits";
import Market from "./Routes/Market";
import AppContextProvider from "./context/AppContextProvider";


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
  },
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/litters",
    element: <Litters />,
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
    path: "/forgot",
    element: <Forgot />,
  },
  {
    path: "/changepass",
    element: <ChangePass />,
  },
  {
    path: "/rabbits",
    element: <ViewRabbits />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <AppContextProvider> */}
      <RouterProvider router={router} />
    {/* </AppContextProvider> */}
  </React.StrictMode>
);
