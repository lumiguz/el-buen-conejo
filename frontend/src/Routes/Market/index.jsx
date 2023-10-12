import { useState } from 'react';
import Heading from "../../UI/Heading";
import ButtonRecientes from "../../UI/ButtonRecientes";
import FilterMarket from "../../UI/FilterMarket";
import Navbar from "../../Containers/Navbar";
import CardMarket from "../../Components/CardMarket"
import CardCategory from "../../Components/CardCategory/CardCategory"


const index = () => {
  const AllCategories = ["MiniLop", "Blanc de Hotot", "Conejo Rex", "Gigantes de flandes"]

  const [categories, setCategories] = useState(AllCategories);

  return (
    <div className="container m-5">
      <Navbar />
      <Heading>Buscar por razas</Heading>
      <div className="row grid-1">
        <CardCategory categories={categories} />
      </div>
      <div className='d-flex justify-content-between my-2'>
        <ButtonRecientes />
        <FilterMarket />
      </div>
      <div className="row grid-1">
        <CardMarket />
        <CardMarket />
        <CardMarket />
        <CardMarket />
      </div>
    </div>
  );
};

export default index;