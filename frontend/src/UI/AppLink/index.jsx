import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AppLink = ({ className, children, href = "#" }) => {
  return (
    <Link to={href} className={`text-decoration-none ${className}`}>
      {children}
    </Link>
  );
};

AppLink.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AppLink;
