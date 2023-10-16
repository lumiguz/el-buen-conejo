import React from "react";
import styles from "../Rabbits/ViewRabbits.module.css"
import Infocard from "../../Components/InfocardRabbit/Infocard.jsx"
import CardRabbit from "../../Components/CardRabbit/CardRabbit.jsx";
import Carousel from "../../Components/Carousel/Carousel"
import MenuRabbit from "../../Components/MenuRabbit/MenuRabbit";
import Navbar from "../../Containers/Navbar"
import Footer from '../../Components/Footer';

const ViewRabbits = () => {
    return <>
        <div> 
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1"><Navbar/></span>
  </div>

<div className="container">
    <nav id={styles.breadcrumbRabbit}>
  <ol className="breadcrumb mt-4">
    <li className="breadcrumb-item"><a href="#" id={styles.linkBreadcrumbRabbit}>Perfil</a></li>
    <li className="breadcrumb-item active" aria-current="page">Jaula</li>
    <li className="breadcrumb-item active" aria-current="page">Conejo</li>
  </ol>
</nav>
<div className="container">
    <div className="d-flex flex-row">
      <div className="col-md-9 m-2">
          <CardRabbit/>
      </div>
    <div className="d-flex justify-content-between align-items-center">
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
</div>
<div className="container mt-4">
  <Carousel/>
</div>
<div className="container mt-4 bg-white">
  <MenuRabbit/>
</div>
</div>
        </div>
        <Footer/>  
    </>
};

export default ViewRabbits;