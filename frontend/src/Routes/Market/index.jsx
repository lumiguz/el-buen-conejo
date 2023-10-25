import Heading from "../../UI/Heading";
import { allRabbitBreeds } from "../../utils/market/RabbitData";
import CardImage from "../../Components/CardImage";
import AppLink from "../../UI/AppLink";
import { useHttp } from "../../hooks/useHttp";
import { useEffect } from "react";

const Market = () => {
  const { isLoading, error, data, sendRequest } = useHttp();
  useEffect(() => {
    sendRequest(`http://107.21.219.35/api/rabbits/`);
  }, [sendRequest]);

  return (
    <>
      {isLoading && (
        <h2 className="text-muted text-center m-5 p-5">Cargando...</h2>
      )}
      {error && <h2 className="text-danger text-center m-5 p-5">{error}</h2>}
      {!isLoading && data && (
        <>
          {data.results.length === 0 && (
            <h2 className="text-muted text-center m-5 p-5">
              No hay conejos disponibles
            </h2>
          )}
          {data.results.length !== 0 && (
            <section>
              <div className="d-flex justify-content-between my-2">
                <select className="btn btn-outline-dark p-1">
                  <option value="1">Recientes</option>
                  <option value="2">Conejo 1</option>
                  <option value="3">Conejo 2</option>
                </select>
                <select className="btn btn-outline-dark  p-1">
                  <option value="1">filtrar</option>
                  <option value="2">Conejo 1</option>
                  <option value="3">Conejo 2</option>
                </select>
              </div>

              <div className="row">
                {data.results.map((rabbit) => (
                  <div
                    key={rabbit.id}
                    className="my-2 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center"
                  >
                    <CardImage
                      image={rabbit.photo}
                      title={rabbit.tag}
                      text={rabbit.price}
                      link={{
                        url: `/market/${rabbit.id}`,
                        text: "Ubicación",
                        className: "text-muted",
                      }}
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
};

export default Market;
