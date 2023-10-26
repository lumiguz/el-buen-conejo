import FarmCard from '../../Components/FarmCard/Index';
import FarmForm from '../../Components/FarmForm';
import FarmBanner from '../../UI/FarmBanner/index';

import { useHttp } from "../../hooks/useHttp";
import { useEffect } from 'react';

const Farms = () => {
  const { isLoading, data, error, sendRequest } = useHttp();
  useEffect(() => {
    sendRequest(`http://107.21.219.35/api/farms`);
  }, [sendRequest]);


  let mockData = [
    {
      id: 1,
      name: "Farm 1",
      address: "address 1",
      description: "Description 1",
      image: "https://res.cloudinary.com/deq0czqep/image/upload/v1697685310/farmProfile_fkkin4.jpg",
    },
    {
      id: 2,
      name: "Farm 2",
      address: "address 2",
      description: "Description 2",
      image: "https://res.cloudinary.com/deq0czqep/image/upload/v1697685310/farmProfile_fkkin4.jpg",
    },
    {
      id: 3,
      name: "Farm 3",
      address: "address 3",
      description: "Description 3",
      image: "https://res.cloudinary.com/deq0czqep/image/upload/v1697685310/farmProfile_fkkin4.jpg",
    },
    {
      id: 4,
      name: "Farm 4",
      address: "address 4",
      description: "Description 4",
      image: "https://res.cloudinary.com/deq0czqep/image/upload/v1697685310/farmProfile_fkkin4.jpg",
    },
    {
      id: 5,
      name: "Farm 5",
      address: "address 5",
      description: "Description 5",
      image: "https://res.cloudinary.com/deq0czqep/image/upload/v1697685310/farmProfile_fkkin4.jpg",
    }
  ];
  return (
    <div>
      <header className='d-flex flex-column justify-content-center align-items-center'>
        <FarmBanner />

        <h4 className='mt-4'>Nuestras Granjas</h4>

        <p className='text-center'>
          Las granjas de conejos son instalaciones donde se crían conejos en un
          entorno controlado. Los conejos se alimentan con una dieta
          equilibrada, reciben atención veterinaria y se reproducen para
          mantener la población. Estas granjas proporcionan carne y pieles de
          conejo como productos principales.
        </p>
      </header>

      <section className='d-flex flex-wrap justify-content-center row row-cols-lg-3 row-cols-sm-1 row-cols-md-2'>
        <FarmCard name={mockData[0].name} description={mockData[0].description} address={mockData[0].address} photo={mockData[0].image} id={mockData[0].id} />
        <FarmCard name={mockData[1].name} description={mockData[1].description} address={mockData[1].address} photo={mockData[1].image} id={mockData[1].id} />
        <FarmCard name={mockData[2].name} description={mockData[2].description} address={mockData[2].address} photo={mockData[2].image} id={mockData[2].id} />
        <FarmCard name={mockData[3].name} description={mockData[3].description} address={mockData[3].address} photo={mockData[3].image} id={mockData[3].id} />
        <FarmCard name={mockData[4].name} description={mockData[4].description} address={mockData[4].address} photo={mockData[4].image} id={mockData[4].id} />
      </section>
      <FarmForm />
    </div>
  );
};

export default Farms;
