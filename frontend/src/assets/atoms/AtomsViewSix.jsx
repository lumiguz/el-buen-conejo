import React from "react";
import "../atoms/atomsViewSix.css"

const Atom = () => {
    return <>
        <div> 
<nav className="navbar bg-light">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">Navbar example</span>
  </div>
</nav>

<div container>
    <nav id="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#">Perfil</a></li>
    <li className="breadcrumb-item active" aria-current="page">Biblioteca</li>
    <li className="breadcrumb-item active" aria-current="page">Biblioteca</li>
  </ol>
</nav>
    </div>
    
        </div>
    </>
};

export default Atom;