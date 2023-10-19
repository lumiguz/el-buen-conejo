import FarmCard from '../../Components/FarmCard/Index';
import FarmForm from '../../Components/FarmForm';
import FarmBanner from '../../UI/FarmBanner/index';

const Farms = () => {
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
        <FarmCard />
        <FarmCard />
        <FarmCard />
        <FarmCard />
        <FarmCard />
      </section>
      <FarmForm />
    </div>
  );
};

export default Farms;
