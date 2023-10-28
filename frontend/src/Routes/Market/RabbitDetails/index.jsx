import { useEffect, useState } from "react";
import { useHttp } from "../../../hooks/useHttp";
import { useLoaderData } from "react-router-dom";
import Carousel from "../../../Components/Carousel/Carousel";
import MenuRabbitPerfil from "../../../Components/MenuRabbit/MenuRabbitPerfil";
import CardIcon from "../../../Components/CardIcon";
import { apiUrls } from "../../../utils/links";
import ChatContainer from "../../../Components/chat/ChatContainer";
import Modal from "../../../Components/Modal";
import Cookies from "js-cookie";

const RabbitDetails = () => {
  const rabbitId = useLoaderData();
  const [rabbit, setRabbit] = useState(null);
  const { isLoading, error, data, sendRequest, isntOk } = useHttp();
  const [errorFarmData, setErrorFarmData] = useState(null);

  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': Cookies.get('authToken') ? `Bearer ${Cookies.get('authToken')}` : null
  } 

  useEffect(() => {
    sendRequest(`${apiUrls.urlRabbits}${rabbitId}/`);
  }, [sendRequest, rabbitId]);


  useEffect(() => {
    if (!isLoading && data) {
      fetch(`${apiUrls.urlCages}${data.cage_id}`, {headers})
        .then((response) => response.json())
        .then((cageData) =>
          fetch(`${apiUrls.urlFarms}${cageData.farm_id}`, {headers})
            .then((response) => response.json())
            .then((farmData) => {
              console.log(farmData)
              setRabbit({
                ...data,
                farmName: farmData.name,
                farmAddress: farmData.address,
              });
            })
        )
        .catch((error) => {
          console.error("error from fetch cage or farm:", error);
          setErrorFarmData(error.message || "error from fetch cage or farm!");
        });
    }
  }, [isLoading, data]);

  if (isLoading) {
    return <h2 className="text-muted text-center m-5 p-5">Cargando...</h2>;
  }

  let dataInfoRabbit = {};
  const imagesCarousel = rabbit?.photo.split(",");
  const button = (
    <button
      type="button"
      className="btn btn-success mt-3"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Contactar al productor
    </button>
  );

  if (!isLoading && rabbit) {
    dataInfoRabbit = {
      nombre: rabbit.tag,
      raza: rabbit.breed,
      genero: rabbit.genre,
      fechaNacimiento: rabbit.birthday,
      edad: rabbit.age,
      peso: rabbit.weight,
      precio: rabbit.price,
    };
  }

  return (
    <>
      {(error || errorFarmData) && (
        <h2 className="text-danger text-center m-5 p-5">Ha ocurrido un error, intente de nuevo</h2>
      )}
      {!isLoading && rabbit && (
        <section className="bg-body p-3">
          <h2 className="text-center">{rabbit.tag}</h2>
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
                    title={`$ ${rabbit.price}`}
                    text={`Granja: ${rabbit.farmName}, Ubicacion: ${rabbit.farmAddress}`}
                    button={button}
                  />
                </div>
                <Modal id="exampleModal" title="Jhon Doe" chat={true}>
                  <ChatContainer />
                </Modal>
                <div className="col-12 mt-3 w-75 mx-auto">
                  <h5>Productor:</h5>
                  <CardIcon
                    className="bg-light"
                    icon="bi bi-person-circle"
                    title="Jhon Doe"
                    link={{
                      url: "/profile",
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
