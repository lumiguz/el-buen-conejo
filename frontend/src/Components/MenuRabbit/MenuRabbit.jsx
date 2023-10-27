import React, { useState, useEffect } from "react";
import MenuRabbitPerfil from "./MenuRabbitPerfil";
import styles from "../MenuRabbit/menuRabbit.module.css";
import MenuRabbitNotes from "../MenuRabbit/MenuRabbitNotes"
import { apiUrls } from "../../utils/links"

function PaginatedView({ currentPage, onPageChange }) {
  const pages = [
    { id: "perfil", label: "Perfil" },
    { id: "notes", label: "Notas" },
  ];

  return (
    <div>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page.id}
            className={`page-item ${page.id === currentPage ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
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

const MenuRabbit = ({ selectedRabbitId }) => {
  const [currentPage, setCurrentPage] = useState("perfil");
  const [perfilActive, setPerfilActive] = useState(true);
  const [notasActive, setNotasActive] = useState(false);
  const [selectedRabbitDetails, setSelectedRabbitDetails] = useState(null);

  useEffect(() => {
    // Aquí puedes hacer una llamada a la API para obtener el detalle del conejo seleccionado
    if (selectedRabbitId) {
      fetch(`${apiUrls.urlRabbits}${selectedRabbitId}/`)
        .then((response) => response.json())
        .then((rabbitDetails) => {
          setSelectedRabbitDetails(rabbitDetails);
        })
        .catch((error) => {
          console.error("Error al obtener los detalles del conejo:", error);
        });
    }
  }, [selectedRabbitId]);

  if (currentPage === "perfil") {
    return (
      <div>
        <PaginatedView
          currentPage={currentPage}
          onPageChange={(pageId) => {
            setCurrentPage(pageId);
            if (pageId === "perfil") {
              setPerfilActive(true);
              setNotasActive(false);
            } else if (pageId === "notes") {
              setPerfilActive(false);
              setNotasActive(true);
            }
          }}
        />
        {perfilActive && selectedRabbitDetails ? (
          <MenuRabbitPerfil rabbitData={selectedRabbitDetails} />
        ) : null}
        {notasActive && <MenuRabbitNotes />}
      </div>
    );
  } else if (currentPage === "notes") {
    return (
      <div>
        <PaginatedView
          currentPage={currentPage}
          onPageChange={(pageId) => {
            setCurrentPage(pageId);
            if (pageId === "perfil") {
              setPerfilActive(true);
              setNotasActive(false);
            } else if (pageId === "notes") {
              setPerfilActive(false);
              setNotasActive(true);
            }
          }}
        />
        <MenuRabbitNotes />
      </div>
    );
  }
};

export default MenuRabbit;
