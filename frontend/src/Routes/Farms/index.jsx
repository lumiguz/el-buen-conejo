import FarmCard from "../../Components/FarmCard/Index";
import FarmForm from "../../Components/FarmForm";
import FarmBanner from "../../UI/FarmBanner/index";
import { useEffect, useState } from "react";
import useHttpGetWithPagination from "../../hooks/useHttpGetWithPagination";

const Farms = () => {
  const { isLoading, data, error, sendRequest } = useHttpGetWithPagination();

  const [farmData, setfarmData] = useState([]);
  useEffect(() => {
    sendRequest(`https://apiebc.online/api/farms/`);
  }, [sendRequest]);

  useEffect(() => {
    if (data) {
      setfarmData(data);
    }
  }, [data]);

  return (
    <div>
      <header className="d-flex flex-column justify-content-center align-items-center">
        <FarmBanner />

        <h4 className="mt-4">Nuestras Granjas</h4>

        <p className="text-center text-wrap">
          Las granjas de conejos son instalaciones donde se crían conejos en un
          entorno controlado. Los conejos se alimentan con una dieta
          equilibrada, reciben atención veterinaria y se reproducen para
          mantener la población. Estas granjas proporcionan carne y pieles de
          conejo como productos principales.
        </p>
      </header>

      <section className="d-flex flex-wrap justify-content-center align-items-center row row-cols-lg-3 row-cols-sm-1 row-cols-md-2">
        {/* for each id will use a farm card */}
        {farmData.length > 0 &&
          farmData.map((farm) => (
            <FarmCard
              key={farm.id}
              name={farm.name}
              description={farm.description}
              address={farm.address}
              photo={farm.photo}
              id={farm.id}
            />
          ))}
      </section>

      <section className="d-flex flex-wrap justify-content-center mt-3 ">
        <h4 className="mt-2">¿Quieres registrar tu granja?</h4>
        <p className="text-center">
          Si deseas registrar tu granja de conejos en nuestra plataforma, puedes
          hacerlo a continuación. Solo debes llenar el formulario con la
          información de tu granja.
        </p>
        {/* send farmData to the form */}
        <FarmForm addFarm={setfarmData} />
      </section>
    </div>
  );
};

export default Farms;
