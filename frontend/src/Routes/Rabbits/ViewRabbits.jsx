import styles from "../Rabbits/ViewRabbits.module.css";
import Infocard from "../../Components/InfocardRabbit/Infocard.jsx";
import CardRabbit from "../../Components/CardRabbit/CardRabbit.jsx";
import Carousel from "../../Components/Carousel/Carousel";
import MenuRabbit from "../../Components/MenuRabbit/MenuRabbit";
// import RabbitForm from "../../Components/RabbitForm/RabbitForm";
const ViewRabbits = () => {
  return (
    <>
      <div>
        <div className="container">
          <nav id={styles.breadcrumbRabbit}>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#" id={styles.linkBreadcrumbRabbit}>
                  Perfil
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Biblioteca
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Biblioteca
              </li>
            </ol>
          </nav>
          <div className="container">
            <div className="d-flex flex-row">
              <div className="col-md-9 m-2">
                <CardRabbit />
              </div>
              <div className="col-md-1 m-2">
                <Infocard />
              </div>
              <div className="col-md-1 m-2">
                <Infocard />
              </div>
              <div className="col-md-1 m-2">
                <Infocard />
              </div>
            </div>
          </div>
          <div className="container mt-2">
            <Carousel />
          </div>
          <div className="container mt-4">
            <MenuRabbit />
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewRabbits;
