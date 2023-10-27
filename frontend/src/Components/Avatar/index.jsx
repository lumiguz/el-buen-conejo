import React, { useState } from "react";
import PropTypes from "prop-types";
import avatarImage from "../../assets/blank.png";
import styles from "./Avatar.module.css";
import { usuarios } from "../../utils/database";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Avatar = ({ imageUrl }) => {

  imageUrl = imageUrl || avatarImage;

  const navigate = useNavigate()
  const cuenta = JSON.parse(localStorage.getItem('logedAccount'))
  const userData = usuarios.filter(usuario => usuario?.username === cuenta?.username)

  // const [token, setToken] = useState("")

  // token tiene un valor de un código almacenado en cookies, cuando se hace una petición POST a {{URL}}logout/
  // con {refresh_token: token} se desogea

  const handleLogout = () => {
    localStorage.removeItem('logedAccount')
    setTimeout(() => {
      navigate('/login')
    }, 500);
  }

  return (
    <div className="dropdown ms-2">
      <img
        src={imageUrl}
        className={`img-fluid rounded-circle ${styles.avatar}`}
        id="avatarDropdown"
        data-bs-toggle="dropdown"
        alt="avatar"
      />
      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="avatarDropdown">
        <li>
          <p className="dropdown-item text-primary">{userData[0]?.nombre + " " + userData[0]?.apellido}</p>
          <a className="dropdown-item" href="#/mi-perfil">
            Mi Perfil
          </a>
        </li>
        <li>
          <button className="dropdown-item text-danger" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </li>
      </ul>
    </div>
  );
};

Avatar.propTypes = {
  imageUrl: PropTypes.string,
};

export default Avatar;
