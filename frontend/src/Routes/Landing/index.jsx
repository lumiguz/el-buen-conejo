import Heading from "../../UI/Heading";
import Button from "../../UI/Button";
import Paragraph from "../../UI/Paragraph";
import Navbar from "../../Containers/Navbar";
import Footer from "../../Components/Footer";
import CardIcon from "../../Components/CardIcon";
import styles from "./Landing.module.css";
import mobile from "../../assets/mobile.svg";
import AppLink from "../../UI/AppLink";

/**
 * Renders the index page.
 *
 * @return {JSX.Element} The rendered index page.
 */
const Landing = () => {
  const cardsWithLink = [
    {
      className: "text-start mb-2",
      icon: "bi bi-camera-video",
      iconAbove: true,
      title: "Comunidad",
      text: "Conecta con otros productores, comparte tus expectativas y aprende de los demás.",
      link: {
        url: "/community",
        text: "Ver comunidad",
      },
    },
    {
      className: "text-start mb-2",
      icon: "bi bi-handbag",
      iconAbove: true,
      title: "Mercado",
      text: "Da a conocer tus conejos y comienza a venderlos en el mercado.",
      link: {
        url: "/market",
        text: "Ver mercado",
      },
    },
    {
      className: "text-start mb-2",
      icon: "bi bi-calendar2-event",
      iconAbove: true,
      title: "Eventos",
      text: "Mantente al tanto de los eventos importantes: ferias, conferencias y más.",
      link: {
        url: "/events",
        text: "Ver eventos",
      },
    },
  ];

  const cardsTools = [
    {
      className: "text-start border-0 bg-transparent",
      icon: `bi bi-calendar2-month-fill ${styles.text_orange}`,
      iconAbove: true,
      title: "Ahorrar tiempo",
      text: "Solo tienes que concentrarte en lo que mejor sabes hacer y El buen conejo hace el resto.",
    },
    {
      className: "text-start border-0 bg-transparent",
      icon: `bi bi-person-fill-gear ${styles.text_purple}`,
      iconAbove: true,
      title: "Maximizar su eficiencia",
      text: "Con todas las funcionalidades de El buen conejo tendrás tu granja bien organizada y optimizada.",
    },
    {
      className: "text-start border-0 bg-transparent",
      icon: `bi bi-clipboard-data-fill ${styles.text_yellow}`,
      iconAbove: true,
      title: "Tomar desiciones basadas en datos",
      text: "Recibe reportes y obtén información relevante para estar al día con la granja.",
    },
  ];

  const cardsSteps = [
    {
      className: "text-start mb-3",
      icon: `bi bi-1-circle-fill text-secondary`,
      title: "Crea tu cuenta",
      text: "Necesitas registrarte como productor para automatizar la gestión de tu granja.",
    },
    {
      className: "text-start mb-3",
      icon: `bi bi-2-circle-fill text-secondary`,
      title: "Agrega tus conejos",
      text: "Agrega tus conejos a jaulas y dales una descripción detallada, como su raza, edad, entre otros datos.",
    },
    {
      className: "text-start mb-3",
      icon: `bi bi-3-circle-fill text-secondary`,
      title: "Recibe informes",
      text: "Por último mantén la información de tus conejos actualizada para recibir informes y estar al día con tu granja.",
    },
  ];

  return (
    <div className="container">
      <Navbar />
      <section className="bg-info bg-opacity-10 pt-3">
        <header className="text-center">
          <Heading>La Herramienta para controlar su granja</Heading>
          <Paragraph>
            Leva un registro completo de tus conejos y gestiona tu granja de
            manera eficiente
          </Paragraph>
          <Button className="btn-success">Únete al El buen conejo</Button>
        </header>
        <article className="row mt-3 p-4">
          {cardsWithLink.map((card, index) => (
            <div key={index} className="col-sm-4">
              <CardIcon
                className={card.className}
                icon={card.icon}
                iconAbove={card.iconAbove}
                title={card.title}
                text={card.text}
                link={card.link}
              />
            </div>
          ))}
        </article>
      </section>

      <section className="bg-success bg-opacity-10 pt-5">
        <header className="text-center px-3">
          <Heading className="h4">
            El aliado perfecto para el cuidado de tus conejos
          </Heading>
          <Paragraph>
            El buen conejo es una solución práctica para agricultores, granjeros
            y familias
          </Paragraph>
        </header>
        <article className="row mt-3 ps-4">
          {cardsTools.map((card, index) => (
            <div key={index} className="col-sm-4">
              <CardIcon
                className={card.className}
                icon={card.icon}
                iconAbove={card.iconAbove}
                title={card.title}
                text={card.text}
                link={card.link}
              />
            </div>
          ))}
        </article>
        <div className="row mt-4">
          <main className="col-12 col-md-6 text-center ps-3 ps-md-5">
            <header>
              <Heading className="h4 mb-4">Comienza a ser productor</Heading>
            </header>
            <article>
              {cardsSteps.map((card, index) => (
                <div key={index} className="">
                  <CardIcon
                    className={card.className}
                    icon={card.icon}
                    title={card.title}
                    text={card.text}
                    link={card.link}
                  />
                </div>
              ))}
              <AppLink href="/register" className="btn btn-success w-100 mt-2 mb-4">
                Abre tu cuenta ahora
              </AppLink>
            </article>
          </main>

          <figure className="col-6 text-center d-none d-md-block mt-2">
            <img src={mobile} className="img-fluid" alt="view mobile" />
          </figure>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
