import React from "react";
import { useLoaderData } from "react-router-dom";
import Carousel from "../../../Components/Carousel/Carousel";
import MenuRabbitPerfil from "../../../Components/MenuRabbit/MenuRabbitPerfil";
import CardIcon from "../../../Components/CardIcon";

const RabbitDetails = () => {
  const rabbitId = useLoaderData();
  const data = {
    estado: "Vivo",
    peso: "8 kg",
    raza: "California",
    edad: "8 meses",
    color: "Blanco",
    genotipo: "-",
    criasVivas: "4",
    totalDeCrias: "14",
  };
  const error = null;
  const isLoading = false;
  return (
    <>
      {isLoading && <h2 className="text-muted">Loading...</h2>}
      {error && <h2 className="text-danger">{error}</h2>}
      {!isLoading && data && (
        <section className="bg-body p-3">
          <h2 className="text-center">Conejo {rabbitId}</h2>
          <div className="row container">
            <div className="col-12 my-3">
              <Carousel
                images={[
                  "https://www.acws.cl/wp-content/uploads/2021/04/nota_conejo_abril.jpeg",
                ]}
              />
            </div>
            <div className="col-12 col-md-6 my-3">
              <MenuRabbitPerfil rabbitData={data} />
            </div>
            <div className="col-12 col-md-6 my-3">
              <div className="row mt-3">
                <div className="col-12 w-75 mx-auto">
                  <CardIcon
                    className="bg-light"
                    //icon="bi bi-currency-dollar"
                    title="$ 9.99"
                    text={`Ciudad de Mexico D.F.`}
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
