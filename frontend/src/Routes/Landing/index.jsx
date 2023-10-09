import Heading from "../../UI/Heading";
import Button from "../../UI/Button";
import Navbar from "../../Containers/Navbar";
import LittersCards from "../../Components/LittersCards/LittersCards";
const index = () => {
  return (
    <div className="container bg-light">
      <Navbar />
      <Heading>Landing Page</Heading>
      <Button>Botón verde success</Button>
      <LittersCards littersName="Alex y Mary" littersAge="2" littersImage="" littersWeight="10" littersKit="2"/>
    </div>
  );
};

export default index;
