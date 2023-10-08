import PropTypes from "prop-types";

const Heading = ({ children, className = "h2" }) => {
  return <h2 className={className}>{children}</h2>;
};

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Heading;
