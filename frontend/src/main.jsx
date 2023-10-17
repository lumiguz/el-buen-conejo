import React from "react";
import ReactDOM from "react-dom/client";
//import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
//import react-router-dom v6
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import components routes
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
import ViewCage from "./Routes/Cage/ViewCage";
import Layout from "./Layout";

//implement routes with react-router-dom
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Landing />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/market",
    element: (
      <Layout>
        <Market />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: "/register",
    element: (
      <Layout>
        <Register />
      </Layout>
    ),
  },
  {
    path: "/forgot",
    element: (
      <Layout>
        <Forgot />
      </Layout>
    ),
  },
  {
    path: "/changepass",
    element: (
      <Layout>
        <ChangePass />
      </Layout>
    ),
  },
  {
    path: "/rabbits",
    element: (
      <Layout>
        <ViewRabbits />
      </Layout>
    ),
  },
  {
    path: "/cage",
    element: (
      <Layout>
        <ViewCage />
      </Layout>
    ),
  },
  {
    //stop implementing
    path: "/litters",
    element: <Litters />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
);
