import { useEffect, useState } from "react";
import { useHttp } from "../../../hooks/useHttp";
import { useLoaderData, useSearchParams } from "react-router-dom";
import Carousel from "../../../Components/Carousel/Carousel";
import MenuRabbitPerfil from "../../../Components/MenuRabbit/MenuRabbitPerfil";
import CardIcon from "../../../Components/CardIcon";
import { apiUrls } from "../../../utils/links";
import ChatContainer from "../../../Components/chat/ChatContainer";
import Modal from "../../../Components/Modal";
import Cookies from "js-cookie";

const RabbitDetails = () => {
  const rabbitId = useLoaderData();
  const [searchParams] = useSearchParams();
  const farmName = decodeURIComponent(searchParams.get("farmName"));
  const farmAddress = decodeURIComponent(searchParams.get("farmAddress"));
  const farmProfileId = decodeURIComponent(searchParams.get("farmProfileId"));
  const { isLoading, error, data, sendRequest } = useHttp();
  const [nameProfile, setNameProfile] = useState(null);

  useEffect(() => {
    sendRequest(`${apiUrls.urlRabbits}${rabbitId}/`);
  }, [sendRequest, rabbitId]);

  useEffect(() => {
    if (data && farmProfileId) {
      fetch(`${apiUrls.urlProfiles}${farmProfileId}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${Cookies.get("authToken")}`,
        },
      })
        .then((response) => response.json())
        .then((profile) => {
          setNameProfile(`${profile.first_name} ${profile.last_name}`);
        });
    }
  });

  if (isLoading) {
    return <h2 className="text-muted text-center m-5 p-5">Cargando...</h2>;
  }

  const imagesCarousel = data?.photo.split(",");
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
      {error && (
        <h2 className="text-danger text-center m-5 p-5">
          Ha ocurrido un error, intente de nuevo
        </h2>
      )}
      {!isLoading && data && (
        <section className="bg-body p-3">
          <h2 className="text-center">{data.tag}</h2>
          <div className="row container">
            <div className="col-12 my-3">
              <Carousel images={imagesCarousel} />
            </div>
            <div className="col-12 col-md-6 my-3">
              <MenuRabbitPerfil rabbitData={dataInfoRabbit()} />
            </div>
            <div className="col-12 col-md-6 my-3">
              <div className="row mt-3">
                <div className="col-12 w-75 mx-auto">
                  <CardIcon
                    className="bg-light"
                    title={`$ ${data.price}`}
                    text={`Granja: ${farmName}, Ubicacion: ${farmAddress}`}
                    button={button}
                  />
                </div>
                <Modal id="exampleModal" title={nameProfile} chat={true}>
                  <ChatContainer />
                </Modal>
                <div className="col-12 mt-3 w-75 mx-auto">
                  <h5>Productor:</h5>
                  <CardIcon
                    className="bg-light"
                    icon="bi bi-person-circle"
                    title={nameProfile}
                    link={{
                      url: "/profile?profileid=" + farmProfileId,
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
