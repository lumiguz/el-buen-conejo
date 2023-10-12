import Heading from "../../UI/Heading";
import Button from "../../UI/Button";
import Navbar from "../../Containers/Navbar";
import CardMarket from "../../Components/CardMarket"
const index = () => {
    return (
      <div className="container">
        <Navbar />
        <Heading>Market</Heading>
        <CardMarket/>
      </div>
    );
  };
  
  export default index;