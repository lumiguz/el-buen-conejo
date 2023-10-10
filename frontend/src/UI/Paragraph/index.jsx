import PropTypes from "prop-types";

const Paragraph = ({ children, className = "h2" }) => {
  return <p className={className}>{children}</p>;
};

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Paragraph;
