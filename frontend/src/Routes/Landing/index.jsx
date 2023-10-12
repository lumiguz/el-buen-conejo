import Heading from "../../UI/Heading";
import Button from "../../UI/Button";
import Paragraph from "../../UI/Paragraph";
import Navbar from "../../Containers/Navbar";
import Footer from "../../Components/Footer";
/**
 * Renders the index page.
 *
 * @return {JSX.Element} The rendered index page.
 */
const index = () => {
  return (
    <div className="container">
      <Navbar />
      <section className="bg-light py-3">
        <div className="text-center">
          <Heading>La Herramienta para controlar su granja</Heading>
          <Paragraph>
            Leva un registro completo de tus conejos y gestiona tu granja de
            manera eficiente
          </Paragraph>
          <Button>Únete al El buen conejo</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default index;
