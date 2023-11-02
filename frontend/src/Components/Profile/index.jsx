import { Link } from "react-router-dom";
import LittersProfileButton from "../../UI/LittersProfileButton";
import ProfileStyles from "./ProfileStyles.module.css";
import photoProfile from "../../assets/perfil.svg";

const Profile = () => {
  const name = JSON.parse(localStorage.getItem("logedAccount"));

  return (
    <div
      className={`${ProfileStyles.containerSize}  d-flex align-items-center sm-m-auto `}
    >
      <img src={photoProfile} alt="Foto de perfil" className="img-fluid" />
      <div className="ms-3">
        <h3 className="mb-3">{name}</h3>
        <Link to="/editProfile">
          <LittersProfileButton>Editar perfil</LittersProfileButton>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
