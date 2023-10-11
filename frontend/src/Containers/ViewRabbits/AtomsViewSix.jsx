import React from "react";
import "../ViewRabbits/atomsViewSix.css"
import Infocard from "./Infocard.jsx"
import CardRabbit from "./CardRabbit.jsx";
import Carousel from "./Carousel"
import MenuRabbit from "./MenuRabbit";
import Navbar from "../Navbar";

const Atom = () => {
    return <>
        <div> 
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1"><Navbar/></span>
  </div>

<div className="container">
    <nav id="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#">Perfil</a></li>
    <li className="breadcrumb-item active" aria-current="page">Biblioteca</li>
    <li className="breadcrumb-item active" aria-current="page">Biblioteca</li>
  </ol>
</nav>
<div className="container">
    <div className="d-flex flex-row">
      <div className="col-md-9 m-2">
          <CardRabbit/>
      </div>
      <div className="col-md-1 m-2">
          <Infocard/>
      </div>
      <div className="col-md-1 m-2">
        <Infocard/>
      </div>
      <div className="col-md-1 m-2">
        <Infocard/>
      </div>
    </div>
</div>
<div className="container mt-2">
  <Carousel/>
</div>
<div className="container mt-4">
  <MenuRabbit/>
</div>
</div>
    
        </div>
    </>
};

export default Atom;