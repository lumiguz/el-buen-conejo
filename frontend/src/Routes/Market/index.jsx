import Heading from "../../UI/Heading";
import { allRabbitBreeds } from "../../utils/market/RabbitData";
import CardImage from "../../Components/CardImage";
import AppLink from "../../UI/AppLink";

const Market = () => {
  return (
    <>
      <section>
        <Heading>Buscar por razas</Heading>
        <div className="row">
          {allRabbitBreeds.map((breed, index) => (
            <div
              key={index}
              className="my-2 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center"
            >
              <AppLink href={`/market/${breed}`}>
                <CardImage
                  image="https://th.bing.com/th/id/R.ee0a6c9e58d5ab4cea013664d48478f1?rik=txuJi%2f9D5ENyAA&pid=ImgRaw&r=0&sres=1&sresct=1"
                  title={breed}
                />
              </AppLink>
            </div>
          ))}
        </div>
      </section>
      <hr />

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
          {allRabbitBreeds.map((breed, index) => (
            <div
              key={index}
              className="my-2 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center"
            >
              <CardImage
                image="https://th.bing.com/th/id/OIP.XRlOnjf2ZKcd6OvKLsOazgHaHa?pid=ImgDet&rs=1"
                title="Titulo"
                text="$9.99"
                link={{
                  url: `#/${breed}`,
                  text: "Ubicación",
                  className: "text-muted",
                }}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Market;
