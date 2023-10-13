import Heading from "../../UI/Heading";
import Button from "../../UI/Button";
import Paragraph from "../../UI/Paragraph";
import Navbar from "../../Containers/Navbar";
import Footer from "../../Components/Footer";
import CardIcon from "../../Components/CardIcon";
/**
 * Renders the index page.
 *
 * @return {JSX.Element} The rendered index page.
 */
const Landing = () => {
  const dataCards = [
    {
      className: "text-start",
      icon: "bi bi-camera-video",
      title: "Comunidad",
      text: "Conecta con otros productores, comparte tus expectativas y aprende de los demás.",
      link: {
        url: "/community",
        text: "Ver comunidad",
      },
    },
    {
      className: "text-start",
      icon: "bi bi-handbag",
      title: "Mercado",
      text: "Da a conocer tus conejos y comienza a venderlos en el mercado.",
      link: {
        url: "/market",
        text: "Ver mercado",
      },
    },
    {
      className: "text-start",
      icon: "bi bi-calendar2-event",
      title: "Eventos",
      text: "Mantente al tanto de los eventos importantes, como ferias, conferencias y más.",
      link: {
        url: "/events",
        text: "Ver eventos",
      },
    },
  ];
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
          <Button className="btn-success">Únete al El buen conejo</Button>

          <div className="row mt-3">
            {dataCards.map((card, index) => (
              <div key={index} className="col-sm-4">
                <CardIcon
                  className={card.className}
                  icon={card.icon}
                  title={card.title}
                  text={card.text}
                  link={card.link}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-3 text-center">
        <h2>El aliado perfecto para el cuidado de tus conejos</h2>
        
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
