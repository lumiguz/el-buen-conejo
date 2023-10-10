import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const AppNavLink = ({ className, children, href }) => {
  return (
    <NavLink to={href} className={className} activeClassName="active">
      {children}
    </NavLink>
  );
};

AppNavLink.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AppNavLink;
