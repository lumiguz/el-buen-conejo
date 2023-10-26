import React, { useState } from "react";
import MenuRabbitPerfil from "./MenuRabbitPerfil";
import styles from "../MenuRabbit/menuRabbit.module.css";
import MenuRabbitNotes from "../MenuRabbit/MenuRabbitNotes"

function PaginatedView({ currentPage, onPageChange }) {
  const pages = [
    { id: "perfil", label: "Perfil" },
    { id: "notes", label: "Notas" },
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

const MenuRabbit = () => {
  const [currentPage, setCurrentPage] = useState("perfil");
  const [perfilActive, setPerfilActive] = useState(true);
  const [notasActive, setNotasActive] = useState(false);

  const handlePageChange = (pageId) => {
    setCurrentPage(pageId);
  };

  let content;
  if (currentPage === "perfil") {
    const rabbitData = {
      estado: "Vivo",
      peso: "8 kg",
      raza: "California",
      edad: "8 meses",
      color: "Blanco",
      genotipo: "-",
      criasVivas: "4",
      totalDeCrias: "14",
    };
    content = (
      <div>
        <MenuRabbitPerfil rabbitData={rabbitData} />
      </div>
    );
  } else if (currentPage === "notes") {
    content = (
      <div>
        <MenuRabbitNotes/>
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

export default MenuRabbit;
