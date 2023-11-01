import { useEffect } from "react";
import { useHttp } from "../../hooks/useHttp";
import { useLoaderData, useLocation } from "react-router-dom";
import { apiUrls } from "../../utils/links";
import styles from "../Rabbits/ViewRabbits.module.css";
import Infocard from "../../Components/InfocardRabbit/Infocard.jsx";
import CardRabbit from "../../Components/CardRabbit/CardRabbit.jsx";
import Carousel from "../../Components/Carousel/Carousel";
import MenuRabbit from "../../Components/MenuRabbit/MenuRabbit";
// import RabbitForm from "../../Components/RabbitForm/RabbitForm";
const ViewRabbits = () => {
  const rabbitId = useLocation().pathname.split("/").pop();
  const { isLoading, error, data, sendRequest } = useHttp();

  useEffect(() => {
    sendRequest(`${apiUrls.urlRabbits}${rabbitId}/`);
  }, [sendRequest, rabbitId]);

  console.log(rabbitId.pathname)

  if (isLoading) {
    return <h2 className="text-muted text-center m-5 p-5">Cargando...</h2>;
  }

  const imagesCarousel = data?.photo.split(",");

    const dataInfoRabbit = () => {
    if (!isLoading && data) {
      return {
        nombre: data.tag,
        raza: data.breed,
        genero: data.genre,
        fechaNacimiento: data.birthday,
        edad: data.age,
        peso: data.weight,
        precio: data.price,
      };
    }
    return {};
  };

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
            <Carousel
              images={imagesCarousel}
            />
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
