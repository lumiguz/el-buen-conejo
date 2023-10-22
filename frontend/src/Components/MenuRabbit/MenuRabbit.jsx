import React, { useState, useEffect } from "react";
import MenuRabbitPerfil from "./MenuRabbitPerfil";
import styles from "../MenuRabbit/menuRabbit.module.css";
import MenuRabbitCamada from "./MenuRabbitCamada";
import MenuRabbitNotes from "./MenuRabbitNotes";

function PaginatedView({ currentPage, onPageChange }) {
  const pages = [
    { id: "perfil", label: "Perfil" },
    // { id: "camadas", label: "Camadas" },
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
  const [perfilActive, setPerfilActive] = useState(true);
  const [notasActive, setNotasActive] = useState(false);

  useEffect(() => {
    // Cargar el estado desde el LocalStorage
    const storedPaginationState = JSON.parse(
      localStorage.getItem("paginationState")
    );
    if (storedPaginationState) {
      setPerfilActive(storedPaginationState.perfilActive);
      setNotasActive(storedPaginationState.notasActive);
    }
  }, []);

  useEffect(() => {
    // Guardar el estado en el LocalStorage
    localStorage.setItem(
      "paginationState",
      JSON.stringify({ perfilActive, notasActive })
    );
  }, [perfilActive, notasActive]);

  const handlePageChange = (pageId) => {
    if (pageId === "perfil") {
      setPerfilActive(true);
      setNotasActive(false);
    } else if (pageId === "notes") {
      setPerfilActive(false);
      setNotasActive(true);
    }
  };

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

  return (
    <>
      <div>
        <div>
          <PaginatedView
            currentPage={perfilActive ? "perfil" : "notes"}
            onPageChange={handlePageChange}
          />
        </div>
        {perfilActive && <MenuRabbitPerfil rabbitData={rabbitData} />}
        {notasActive && <MenuRabbitNotes />}
      </div>
    </>
  );
};

export default MenuRabbit;
