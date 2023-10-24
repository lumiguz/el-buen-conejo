import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useHttp } from "../../../hooks/useHttp";
import CardImage from "../../../Components/CardImage";
import AppLink from "../../../UI/AppLink";

const BreedInventory = () => {
  const breed = useLoaderData();
  console.log(decodeURIComponent(breed));

  /* 
  const { isLoading, error, data, sendRequest } = useHttp();
  useEffect(() => {
    sendRequest(`https://jsonplaceholder.typicode.com/users/${breed}`);
  }, [breed, sendRequest]); 
  */

  //demo
  const error = null;
  const isLoading = false;
  const data = [
    {
      id: 1,
      name: "Conejo 1",
      image:
        "https://th.bing.com/th/id/OIP.XRlOnjf2ZKcd6OvKLsOazgHaHa?pid=ImgDet&rs=1",
    },
    {
      id: 2,
      name: "Conejo 2",
      image:
        "https://th.bing.com/th/id/OIP.XRlOnjf2ZKcd6OvKLsOazgHaHa?pid=ImgDet&rs=1",
    },
  ];

  return (
    <>
      {isLoading && <h2 className="text-muted">Loading...</h2>}
      {error && <h2 className="text-danger">{error}</h2>}
      {!isLoading && data && (
        <section>
          <h2>{decodeURIComponent(breed)}</h2>
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
            {data.map((rabbit) => (
              <div
                key={rabbit.id}
                className="my-2 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center"
              >
                <AppLink href={`/market/rabbit/${rabbit.id}`}>
                  <CardImage
                    image={rabbit.image}
                    title="Titulo"
                    text="$9.99"
                    link={{
                      url: `#/${rabbit.name}`,
                      text: "Ubicación",
                      className: "text-muted",
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
