import React from "react";
import "../atoms/menuRabbit.css"

const MenuRabbit = () =>{
    return <>
    <div>
    <nav aria-label="Page navigation example">
  <ul className="pagination" id="pagination">
    <li className="page-item"><a className="page-link" href="#">Perfil</a></li>
    <li className="page-item"><a className="page-link" href="#">Camadas</a></li>
    <li className="page-item"><a className="page-link" href="#">Notas</a></li>
  </ul>
</nav>
    </div>
    </>
}

export default MenuRabbit