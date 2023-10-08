import React from "react";
import "../atoms/atomsViewSix.css"
import Infocard from "../atoms/Infocard.jsx"
import CardRabbit from "../atoms/CardRabbit.jsx";
import Carousel from "../atoms/Carousel"

const Atom = () => {
    return <>
        <div> 
<nav className="navbar bg-light">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">Navbar example</span>
  </div>
</nav>

<div className="container">
    <nav id="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#">Perfil</a></li>
    <li className="breadcrumb-item active" aria-current="page">Biblioteca</li>
    <li className="breadcrumb-item active" aria-current="page">Biblioteca</li>
  </ol>
</nav>
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
  <Carousel/>
</div>
    
        </div>
    </>
};

export default Atom;