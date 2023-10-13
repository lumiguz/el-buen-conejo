import PropTypes from "prop-types";
import AppLink from "../../UI/AppLink";

/**
 * Creates a card with an icon, title, text, and optional link.
 *
 * @param {string} className - The class name for the card.
 * @param {string} icon - The class name for the icon bootstrap.
 * @param {string} title - The title of the card.
 * @param {string} text - The text content of the card.
 * @param {object} link - The link object with url and text properties.
 * @return {JSX.Element} - The card component.
 */
const CardIcon = ({ className, icon, title, text, link }) => {
  return (
    <div class={`card ${className}`}>
      <div class="card-body">
        <div className="mb-2">
          <span>
            <i class={icon} style={{ fontSize: "2em" }}></i>
          </span>
        </div>
        {title && <h5 className="card-title m-0">{title}</h5>}
        {text && <p className="card-text m-0">{text}</p>}
        {link && (
          <AppLink href={link.url} className="small">
            {link.text}{" "}
            <i class="bi bi-chevron-right" style={{ fontSize: "0.7em" }}></i>
          </AppLink>
        )}
      </div>
    </div>
  );
};

CardIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.object,
  className: PropTypes.string,
};

export default CardIcon;
