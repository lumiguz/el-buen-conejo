import { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import { useHttp } from "../../../hooks/useHttp";
import useHttpGetWithPagination from "../../../hooks/useHttpGetWithPagination";
import { apiUrls } from "../../../utils/links";
import styles from "./styles.module.css";
import AppLink from "../../../UI/AppLink";
import Button from "../../../UI/Button";

const FarmDetail = () => {
  const farmId = useLoaderData();
  const location = useLocation();
  const { isLoading, data, error, sendRequest } = useHttp();
  const {
    isLoading: isLoadingCages,
    data: dataCages,
    error: errorCages,
    sendRequest: sendRequestCages,
  } = useHttpGetWithPagination();

  const handleCreateCage = () => {
    sendRequest(`${apiUrls.urlCages}`, "POST", { farm_id: farmId });
    window.location.reload();
  };

  useEffect(() => {
    sendRequestCages(`${apiUrls.urlCages}`);
    sendRequest(`${apiUrls.urlFarms}${farmId}`);
  }, [sendRequest, farmId, sendRequestCages]);

  const [cages, setCages] = useState([dataCages]);

  return (
    <div>
      {data && (
        <div
          className={`d-flex flex-column ${styles.backG} rounded justify-content-end`}
        >
          <Button
            type="button"
            onClick={handleCreateCage}
            className="btn btn-success w-25 align-self-end m-3"
          >
            Crear nueva jaula
          </Button>

          <h2 className="mt-3 d-flex justify-content-center align-items-center ">
            {data.name}
          </h2>

          <img
            src={data.photo}
            alt="farmProfile"
            width={"720"}
            className="img-fluid rounded mx-auto d-block mt-4 "
          />

          <div className="d-flex flex-column justify-content-center align-items-center">
            <p className="mb-4 fst-italic">{data.address}</p>
          </div>

          <p className="text-break lh-sm text-center fs-5">
            {data.description}
          </p>
          <section className="pb-5">
            {dataCages && (
              <div className="d-flex flex-column justify-content-center align-items-center">
                <h4 className="mt-4">Jaulas de {data.name}</h4>
                <div className="d-flex flex-wrap justify-content-center align-items-center">
                  {/* map the cages only matched with farmId */}
                  {dataCages
                    .filter((cages) => cages.farm_id === farmId)
                    .map((cage, index) => (
                      <div
                        key={cage.id}
                        className={`card d-inline-flex flex-column border border-2 border-success-subtle rounded mx-5 mt-4 shadow bg-body-tertiary rounded align-self-center ${styles.maxSize}`}
                      >
                        <AppLink
                          href={`/updateimage/${cage.id}?apiurl=${apiUrls.urlCages}&beforeurl=${location.pathname}`}
                        >
                          <img
                            src={cage.photo}
                            title="Actualizar imagen"
                            alt="cageProfile"
                            className={`card-img-top img-fluid ${styles.imageSize}`}
                          />
                        </AppLink>

                        <div className="card-body">
                          <h5 className="card-title">
                            Jaula número {index + 1}
                          </h5>
                          <p className="card-text">
                            Numero de conejos en la jaula:{" "}
                            <span className="fw-medium">
                              {cage.count_rabbits}
                            </span>
                          </p>
                          <p className="card-text">
                            Precio de la Jaula:{" "}
                            <span className="fw-medium">${cage.price} MXN</span>
                          </p>
                          <p className="card-text">
                            Peso total:{" "}
                            <span className="fw-medium">
                              {cage.total_weight} Kg
                            </span>
                          </p>
                        </div>
                        <AppLink
                          href={`/farms/${farmId}/cages/${cage.id}`}
                          className="btn btn-primary w-50 m-3"
                        >
                          Ver jaula
                        </AppLink>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </section>
        </div>
      )}

      {cages.length === 0 && (
        <h2 className="text-muted text-center m-5 p-5">
          No hay jaulas disponibles
        </h2>
      )}

      {isLoading && (
        <h2 className="text-muted text-center m-5 p-5">Cargando...</h2>
      )}

      {error && (
        <h2 className="text-danger text-center m-5 p-5">
          Ha ocurrido un error, intente de nuevo
        </h2>
      )}

      {isLoadingCages && (
        <h2 className="text-muted text-center m-5 p-5">Cargando...</h2>
      )}

      {errorCages && (
        <h2 className="text-danger text-center m-5 p-5">
          {/* if the error is 404 show "no hay jaulas disponibles en esta granja ):" */}
          No hay jaulas disponibles en esta granja ):
          {console.log(errorCages)}
        </h2>
      )}

      {!isLoadingCages && !errorCages && !dataCages && (
        <h2 className="text-muted text-center m-5 p-5">
          No hay jaulas disponibles
        </h2>
      )}
    </div>
  );
};

export default FarmDetail;
