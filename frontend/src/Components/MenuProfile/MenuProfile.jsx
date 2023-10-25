import React, { useState } from "react";
import MenuProfileJaulas from "./MenuProfileJaulas";
import styles from "../MenuProfile/menuProfile.module.css";
// import MenuRabbitCamada from "./MenuRabbitCamada"
// import MenuRabbitNotes from "./MenuRabbitNotes";

function PaginatedView({ currentPage, onPageChange }) {
  const pages = [
    { id: "misJaulas", label: "Mis Jaulas" },
    { id: "camadas", label: "Camadas" },
    { id: "informes", label: "Informes" },
    { id: "misVideos", label: "Mis videos" },
    { id: "enElMercado", label: "En el mercado" },
  ];

  return (
    <div>
      {/* Paginación personalizada */}
      <ul className="pagination" id={styles.menu}>
        {pages.map((page) => (
          <li
            key={page.id}
            className={`page-item ${page.id === currentPage ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault(); // Previene el comportamiento predeterminado del enlace
              onPageChange(page.id);
            }}
          >
            <a className="page-link" href="#" id={styles.linkPaginationProfile }>
              {page.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const MenuProfile = () => {
  const [currentPage, setCurrentPage] = useState("perfil");

  const handlePageChange = (pageId) => {
    // Actualiza la página actual cuando se hace clic en la paginación personalizada
    setCurrentPage(pageId);
  };

  let content;
  if (currentPage === "misJaulas") {
    content = (
      <div className={styles.containerCages}>
        <MenuProfileJaulas />
      </div>
    );
  } else if (currentPage === "camadas") {
    content = (
      <div>
        <h1>Camadas</h1>
      </div>
    );
  } else if (currentPage === "informes") {
    content = (
      <div>
        <h1>Informes</h1>
      </div>
    );
  } else if (currentPage === "misVideos") {
    content = (
      <div>
        <h1>Mis videos</h1>
      </div>
    );
  } else if (currentPage === "enElMercado") {
    content = (
      <div>
        <h1>En el Mercado</h1>
      </div>
    );
  }

  return (
    <>
      <div>
        <div>
          <PaginatedView
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
        {content}
      </div>
    </>
  );
};

export default MenuProfile;
