import { useEffect } from "react";
import useHttpGetWithPagination from "../../../hooks/useHttpGetWithPagination";
import { useLoaderData } from "react-router-dom";
import CardImage from "../../../Components/CardImage";
import AppLink from "../../../UI/AppLink";
import Heading from "../../../UI/Heading";
import { apiUrls } from "../../../utils/links";

const BreedInventory = () => {
  const breedSelected = useLoaderData();
  const { isLoading, error, data, sendRequest } = useHttpGetWithPagination();

  useEffect(() => {
    sendRequest(`${apiUrls.urlRabbits}`);
  }, [sendRequest, breedSelected]);

  const rabbits =
    !isLoading && data
      ? data.filter(
          (breed) => breed.breed === decodeURIComponent(breedSelected)
        )
      : [];

  return (
    <>
      {isLoading && (
        <h2 className="text-muted text-center m-5 p-5">Cargando...</h2>
      )}
      {error && (
        <h2 className="text-danger text-center m-5 p-5">
          Ha ocurrido un error, intente de nuevo
        </h2>
      )}
      {!isLoading && !error && rabbits.length === 0 && (
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
