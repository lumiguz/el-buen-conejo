// import LittersCard from '../../Components/LittersCards/LittersCard';
// import LittersProfileButton from '../../UI/LittersProfileButton/LittersProfileButton';
import LittersForm from '../../Components/LittersForm/LittersForm';
import LittersRabbitsCard from '../../Components/LittersRabbitsCard/LittersRabbitsCard';

const Litters = () => {
  return (
    <div className='m-4'>
      {/* Litters
      <LittersCard
        littersName='{nombre example}'
        littersAge='2'
        littersImage=''
        littersWeight='10'
        littersKit='2'
      />
      <LittersProfileButton>Ver Perfil</LittersProfileButton> */}

      <LittersForm />

      <LittersRabbitsCard  rabbitName='Mario' rabbitPhoto='' rabbitBreed='California' rabbitWeight='10' rabbitAge='2' sold={true}/>
    </div>
  );
};

export default Litters;
