import  {useState} from "react";

import CardCageProfile from "../cardCageProfile";
import styles from "../MenuProfile/menuProfileJaulas.module.css";

const MenuRabbitCamada = () =>{
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
      };
    
    return<>
    <div className={styles.container}>
    <div className="dropdown">
        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" onClick={toggleDropdown}>
          Todas
        </a>
        <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}
        aria-labelledby="dropdownMenuButton" style={{
            top: '100%', // Coloca el menú debajo del botón
            left: 0, // Alinea el menú a la izquierda
          }}>
          <li><a className="dropdown-item" href="#">Todas</a></li>
          <li><a className="dropdown-item" href="#">Activas</a></li>
          <li><a className="dropdown-item" href="#">Inactivas</a></li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-12 d-flex justify-content-end">
      <button type="button" className="btn btn-success m-1">Crear Jaula</button>
        </div>
      </div>
      <div className="container">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        <div className="col">
          <div className="card">
         <CardCageProfile/>
          </div>
        </div>
        <div className="col">
          <div className="card">
          <CardCageProfile/>
          </div>
        </div>
        <div className="col">
          <div className="card">
          <CardCageProfile/>
          </div>
        </div>
        <div className="col">
          <div className="card">
          <CardCageProfile/>
          </div>
        </div>
        <div className="col">
          <div className="card">
          <CardCageProfile/>
          </div>
        </div>
        <div className="col">
          <div className="card">
          <CardCageProfile/>
          </div>
        </div>
        <div className="col">
          <div className="card">
          <CardCageProfile/>
          </div>
        </div>
        <div className="col">
          <div className="card">
          <CardCageProfile/>
          </div>
        </div>
      
       
        
       
      </div>
    </div>
      {/* <div className="container mt-2">
        <div className="row">
            <div className="col-md-4 mt-2">
              <CardCageProfile/>
            </div>
            <div className="col-md-4 mt-2">
              <CardCageProfile/>
            </div>
            <div className="col-md-4 mt-2">
              <CardCageProfile/>
            </div>
            <div className="col-md-4 mt-2">
            <CardCageProfile/>
            </div>
            <div className="col-md-4 mt-2">
            <CardCageProfile/>
            </div>
            <div className="col-md-4 mt-2">
                <CardCageProfile/>
            </div>
            <div className="col-md-4 mt-2">
                <CardCageProfile/>
            </div>
            <div className="col-md-4 mt-2">
                <CardCageProfile/>
            </div>
        </div>
      </div> */}
    </div>
    </>
}

export default MenuRabbitCamada