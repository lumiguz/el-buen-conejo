import Heading from "../../UI/Heading";
import Button from "../../UI/Button";
import Navbar from "../../Containers/Navbar";
/**
 * Renders the index page.
 *
 * @return {JSX.Element} The rendered index page.
 */
const index = () => {
  return (
    <div className="container bg-light">
      <Navbar />
      <Heading>Landing Page</Heading>
      <Button>Botón verde success</Button>
    </div>
  );
};

export default index;
