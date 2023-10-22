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
import ViewStepOne from "./Routes/Cage/CageStepOne/ViewStepOne";
import ViewFormOne from "./Routes/Cage/CageStepOne/CageStepOneForm/ViewFormOne";
import ViewStepTwo from "./Routes/Cage/CageStepTwo/ViewStepTwo";
import ViewFormTwo from "./Routes/Cage/CageStepTwo/CageStepTwoForm/ViewFormTwo";
import ViewStepThree from "./Routes/Cage/CageStepThree/ViewStepThree";
import ViewDetails from "./Routes/Cage/CageDetails/ViewDetails";
import ViewCageEdit from "./Routes/Cage/CageDetails/CageEdit/ViewCageEdit";
import Layout from "./Layout";
import Farms from "./Routes/Farms";
import BreedInventory from "./Routes/Market/BreedInventory";

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
    path: "/market/:breed",
    element: (
      <Layout>
        <BreedInventory />
      </Layout>
    ),
    loader: ({ params }) => {
      return params.breed;
    },
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
    path: "/cage/step1",
    element: (
      <Layout>
        <ViewStepOne />
      </Layout>
    ),
  },
  {
    path: "/cage/step1/createcage",
    element: (
      <Layout>
        <ViewFormOne />
      </Layout>
    ),
  },
  {
    path: "/cage/step2",
    element: (
      <Layout>
        <ViewStepTwo />
      </Layout>
    ),
  },
  {
    path: "/cage/step2/addrabbit",
    element: (
      <Layout>
        <ViewFormTwo />
      </Layout>
    ),
  },
  {
    path: "/cage/step3",
    element: (
      <Layout>
        <ViewStepThree />
      </Layout>
    ),
  },
  {
    path: "/cage/details",
    element: (
      <Layout>
        <ViewDetails />
      </Layout>
    ),
  },
  {
    path: "/cage/details/edit",
    element: (
      <Layout>
        <ViewCageEdit />
      </Layout>
    ),
  },
  {
    //stop implementing
    path: "/litters",
    element: <Litters />,
  },
  {
    path: "/farms",
    element: (
      <Layout>
        <Farms />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
);
