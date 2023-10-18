import PropTypes from "prop-types";
import avatarImage from "../../assets/blank.png";
import styles from "./Avatar.module.css";
import { usuarios } from "../../utils/database";
import { useNavigate } from "react-router-dom";

const Avatar = ({ imageUrl }) => {

  imageUrl = imageUrl || avatarImage;

  const navigate = useNavigate()
  const cuenta = JSON.parse(localStorage.getItem('logedAccount'))
  const userData = usuarios.filter(usuario => usuario?.email === cuenta?.email)

  const handleLogout = () => {
    localStorage.removeItem('logedAccount')
    setTimeout(() => {
      navigate('/login')
    }, 2000);
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

Avatar.propTypes = {};

export default Avatar;
