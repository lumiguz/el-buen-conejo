import { useEffect } from "react";
import { useHttp } from "../../../hooks/useHttp";
import { useLoaderData } from "react-router-dom";
import Carousel from "../../../Components/Carousel/Carousel";
import MenuRabbitPerfil from "../../../Components/MenuRabbit/MenuRabbitPerfil";
import CardIcon from "../../../Components/CardIcon";
import { apiUrls } from "../../../utils/links";
import CardImage from "../../../Components/CardImage";

const RabbitDetails = () => {
  const rabbitId = useLoaderData();
  const dataInfoRabbit = {};
  let imagesCarousel = [];
  const { isLoading, error, data, sendRequest } = useHttp();
  useEffect(() => {
    sendRequest(`${apiUrls.urlRabbits}${rabbitId}/`);
  }, [sendRequest, rabbitId]);

  if (!isLoading && data) {
    // Eliminar propiedades
    delete data.created;
    delete data.updated;
    delete data.is_active;
    delete data.id;
    delete data.cage_id;

    dataInfoRabbit.nombre = data.tag;
    dataInfoRabbit.raza = data.breed;
    dataInfoRabbit.genero = data.genre;
    dataInfoRabbit.fechaNacimiento = data.birthday;
    dataInfoRabbit.edad = data.age;
    dataInfoRabbit.peso = data.weight;
    dataInfoRabbit.precio = data.price;

    imagesCarousel = data.photo.split(",");
  }

  return (
    <>
      {isLoading && <h2 className="text-muted">Loading...</h2>}
      {error && (
        <h2 className="text-danger">Ha ocurrido un error, intente de nuevo</h2>
      )}
      {!isLoading && data && (
        <section className="bg-body p-3">
          <h2 className="text-center">{data.tag}</h2>
          <div className="row container">
            <div className="col-12 my-3">
              <Carousel images={imagesCarousel} />
            </div>
            <div className="col-12 col-md-6 my-3">
              <MenuRabbitPerfil rabbitData={dataInfoRabbit} />
            </div>
            <div className="col-12 col-md-6 my-3">
              <div className="row mt-3">
                <div className="col-12 w-75 mx-auto">
                  <CardIcon
                    className="bg-light"
                    title={`$ ${data.price}`}
                    text="Mejor precio del mercado "
                    link={{
                      url: "#",
                      text: "Contactar al productor",
                      className: "btn btn-success mt-3",
                    }}
                  />
                </div>
                <div className="col-12 mt-3 w-75 mx-auto">
                  <h5>Productor:</h5>
                  <CardIcon
                    className="bg-light"
                    icon="bi bi-person-circle"
                    title="Jhon Doe"
                    link={{
                      url: "#",
                      text: "Ver perfil",
                      className: "btn btn-outline-success",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default RabbitDetails;
