import React, {useState} from "react";
import MenuRabbitPerfil from "./MenuRabbitPerfil";
import styles from "../MenuRabbit/menuRabbit.module.css"
import MenuRabbitCamada from "./MenuRabbitCamada"
import MenuRabbitNotes from "./MenuRabbitNotes";

function PaginatedView({ currentPage, onPageChange}){
  const pages = [
    { id: "perfil", label: "Perfil" },
    { id: "camadas", label: "Camadas" },
    { id: "notas", label: "Notas" },
  ];

  return (
    <div>
      {/* Paginación personalizada */}
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page.id}
            className={`page-item ${page.id === currentPage ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault(); // Previene el comportamiento predeterminado del enlace
              onPageChange(page.id);
            }}
          >
            <a className="page-link" href="#" id={styles.linkPaginationRabbit}>
              {page.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const MenuRabbit = () =>{

  const [currentPage, setCurrentPage] = useState("perfil");

  const handlePageChange = (pageId) => {
    // Actualiza la página actual cuando se hace clic en la paginación personalizada
    setCurrentPage(pageId);
  };

  let content;
  if (currentPage === "perfil") {
    content = <div>
      <MenuRabbitPerfil/>
    </div>;
  } else if (currentPage === "camadas") {
    content = <div><MenuRabbitCamada/></div>;
  } else if (currentPage === "notas") {
    content = <div><MenuRabbitNotes/></div>;
  }

    return <>
    <div>
      <div>
        <PaginatedView currentPage={currentPage} onPageChange={handlePageChange} />
       </div>
       {content}
    </div>
    </>
}

export default MenuRabbit