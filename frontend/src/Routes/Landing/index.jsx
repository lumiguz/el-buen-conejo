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

          <div className="row mt-3">
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light bg-gradient py-3 text-center">
        <h2>El aliado perfecto para el cuidado de tus conejos</h2>
      </section>

      <Footer />
    </div>
  );
};

export default index;
