import FarmCard from '../../Components/FarmCard/Index';
import FarmForm from '../../Components/FarmForm';
import FarmBanner from '../../UI/FarmBanner/index';

import { useEffect } from 'react';
import { useHttp } from "../../hooks/useHttp";

const Farms = () => {
  const { isLoading, data, error, sendRequest } = useHttp();
  useEffect(() => {
    sendRequest(`https://apiebc.online/api/farms`);
  }, [sendRequest]);
  console.log(data);


  let mockData = [
    {
      id: 1,
      name: "Farm 1",
      address: "address 1",
      description: "Our rabbit farm is a perfect destination for families and animal lovers...",
      image: "https://th.bing.com/th/id/R.fa31cafa6d8b4d403e7504b471cbca48?rik=mkgATWCvr09j8w&pid=ImgRaw&r=0",
    },
    {
      id: 2,
      name: "Farm 2",
      address: "address 2",
      description: "At our rabbit farm, we are committed to sustainable and ethical farming practic...",
      image: "https://th.bing.com/th/id/R.fa31cafa6d8b4d403e7504b471cbca48?rik=mkgATWCvr09j8w&pid=ImgRaw&r=0",
    },
    {
      id: 3,
      name: "Farm 3",
      address: "address 3",
      description: "Discover the world of rabbits like never before at our educational rabbit farm...",
      image: "https://th.bing.com/th/id/R.fa31cafa6d8b4d403e7504b471cbca48?rik=mkgATWCvr09j8w&pid=ImgRaw&r=0",
    },
    {
      id: 4,
      name: "Farm 4",
      address: "address 4",
      description: "We specialize in the breeding and care of Angora rabbits, known for their luxuri...",
      image: "https://th.bing.com/th/id/R.fa31cafa6d8b4d403e7504b471cbca48?rik=mkgATWCvr09j8w&pid=ImgRaw&r=0",
    },
    {
      id: 5,
      name: "Farm 5",
      address: "address 5",
      description: "Need a safe and caring place for your pet rabbit while you re away? Look no furthe...",
      image: "https://th.bing.com/th/id/R.fa31cafa6d8b4d403e7504b471cbca48?rik=mkgATWCvr09j8w&pid=ImgRaw&r=0",
      //https://res.cloudinary.com/deq0czqep/image/upload/v1697685310/farmProfile_fkkin4.jpg
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
        {/* for each id will use a farm card */}

        {data && data.map((farm) => (
          <FarmCard
            key={farm.id}
            name={farm.name}
            description={farm.description}
            address={farm.address}
            photo={farm.photo}
            id={farm.id}
          />
        ))}

        {mockData && mockData.map((farm) => (
          <FarmCard
            key={farm.id}
            name={farm.name}
            description={farm.description}
            address={farm.address}
            photo={farm.image}
            id={farm.id}
          />
        ))}

        {/* <FarmCard name={mockData[0].name} description={mockData[0].description} address={mockData[0].address} photo={mockData[0].image} id={mockData[0].id} />
        <FarmCard name={mockData[1].name} description={mockData[1].description} address={mockData[1].address} photo={mockData[1].image} id={mockData[1].id} />
        <FarmCard name={mockData[2].name} description={mockData[2].description} address={mockData[2].address} photo={mockData[2].image} id={mockData[2].id} />
        <FarmCard name={mockData[3].name} description={mockData[3].description} address={mockData[3].address} photo={mockData[3].image} id={mockData[3].id} />
        <FarmCard name={mockData[4].name} description={mockData[4].description} address={mockData[4].address} photo={mockData[4].image} id={mockData[4].id} /> */}
      </section>
      <section className='d-flex flex-wrap justify-content-center mt-3 '>

        <h4 className='mt-2'>¿Quieres registrar tu granja?</h4>
        <p className='text-center'>
          Si deseas registrar tu granja de conejos en nuestra plataforma, puedes
          hacerlo a continuación. Solo debes llenar el formulario con la
          información de tu granja.
        </p>
        <FarmForm />
      </section>
    </div>
  );
};

export default Farms;
