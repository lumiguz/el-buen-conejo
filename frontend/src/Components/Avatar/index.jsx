import PropTypes from "prop-types";
import avatarImage from "../../assets/blank.png";
import styles from "./Avatar.module.css";

const Avatar = ({ imageUrl }) => {
  imageUrl = imageUrl || avatarImage;
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
          <a className="dropdown-item" href="#/mi-perfil">
            Mi Perfil
          </a>
        </li>
        <li>
          <a className="dropdown-item text-danger" href="#/cerrar-sesion">
            Cerrar Sesión
          </a>
        </li>
      </ul>
    </div>
  );
};

Avatar.propTypes = {};

export default Avatar;
