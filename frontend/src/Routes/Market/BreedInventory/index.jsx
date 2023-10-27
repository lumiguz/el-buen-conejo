import { useEffect, useState } from "react";
import useHttpGetWithPagination from "../../../hooks/useHttpGetWithPagination";
import { headers } from "../../../hooks/useHttp";
import { useLoaderData } from "react-router-dom";
import CardImage from "../../../Components/CardImage";
import AppLink from "../../../UI/AppLink";
import Heading from "../../../UI/Heading";
import { apiUrls } from "../../../utils/links";

const BreedInventory = () => {
  const breedSelected = useLoaderData();
  const [rabbits, setRabbits] = useState([]);
  const { isLoading, error, data, sendRequest } = useHttpGetWithPagination();
  //
  const [isDataReady, setIsDataReady] = useState(false);

  useEffect(() => {
    sendRequest(`${apiUrls.urlRabbits}`);
  }, [sendRequest, breedSelected]);

  useEffect(() => {
    if (!isLoading && data) {
      setIsDataReady(false);
      const filteredRabbits = data.filter(
        (breed) => breed.breed === decodeURIComponent(breedSelected)
      );

      Promise.all(
        filteredRabbits.map((rabbit) =>
          fetch(`${apiUrls.urlCages}${rabbit.cage_id}`, { headers })
            .then((response) => response.json())
            .then((cageData) =>
              fetch(`${apiUrls.urlFarms}${cageData.farm_id}`, { headers })
                .then((response) => response.json())
                .then((farmData) => ({
                  ...rabbit,
                  farmName: farmData.name,
                  farmAddress: farmData.address,
                }))
            )
        )
      ).then((rabbitsWithFarmData) => {
        setRabbits(rabbitsWithFarmData);
        setIsDataReady(true);
      });
    }
  }, [isLoading, data, sendRequest, breedSelected]);

  return (
    <>
      {!isDataReady && (
        <h2 className="text-muted text-center m-5 p-5">Cargando...</h2>
      )}
      {error && (
        <h2 className="text-danger text-center m-5 p-5">
          Ha ocurrido un error, intente de nuevo
        </h2>
      )}
      {isDataReady && !error && rabbits.length === 0 && (
        <h2 className="text-muted text-center m-5 p-5">
          No hay conejos disponibles
        </h2>
      )}
      {rabbits.length > 0 && (
        <section>
          <Heading className="text-center m-4">
            {decodeURIComponent(breedSelected)}
          </Heading>
          <div className="row">
            {rabbits.map((rabbit) => (
              <div
                key={rabbit.id}
                className="my-2 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center"
              >
                <AppLink href={`/market/rabbit/${rabbit.id}`}>
                  <CardImage
                    image={rabbit.photo}
                    title={rabbit.tag}
                    text={`$ ${rabbit.price}`}
                    link={{
                      url: "#",
                      className: "text-muted",
                      text: `Granja: ${rabbit.farmName}, Ubicacion: ${rabbit.farmAddress}`,
                    }}
                  />
                </AppLink>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default BreedInventory;
