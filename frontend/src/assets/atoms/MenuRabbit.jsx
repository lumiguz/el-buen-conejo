import React, {useState} from "react";
import MenuRabbitPerfil from "./MenuRabbitPerfil";
import "../atoms/menuRabbit.css"

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
            onClick={() => onPageChange(page.id)}
          >
            <a className="page-link" href="#">
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
    content = <div>Contenido de la página 2</div>;
  } else if (currentPage === "notas") {
    content = <div>Contenido de la página 3</div>;
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