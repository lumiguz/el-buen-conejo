import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useHttp } from "../../../hooks/useHttp";

const BreedInventory = () => {
  const breed = useLoaderData();
  console.log(decodeURIComponent(breed));
  const { isLoading, error, data, sendRequest } = useHttp();

  useEffect(() => {
    sendRequest(`https://jsonplaceholder.typicode.com/users/${breed}`);
  }, [breed, sendRequest]);

  return (
    <>
      {isLoading && <h2 className="text-muted">Loading...</h2>}
      {error && <h2 className="text-danger">{error}</h2>}
      {!isLoading && data && (
        <section>
          <h2>{}</h2>
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
            {data.map((rabbit, index) => (
              <div
                key={index}
                className="my-2 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center"
              >
                <CardImage
                  image="https://th.bing.com/th/id/OIP.XRlOnjf2ZKcd6OvKLsOazgHaHa?pid=ImgDet&rs=1"
                  title="Titulo"
                  text="$9.99"
                  link={{
                    url: `#/${rabbit}`,
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
  );
};

export default BreedInventory;
