import PropTypes from "prop-types";
import AppNavLink from "../../UI/AppNavLink";

const NavItem = ({ href, className="", children }) => {
  return (
    <li className="nav-item">
      <AppNavLink className={`nav-link ${className}`} href={href}>
        {children}
      </AppNavLink>
    </li>
  );
};

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default NavItem;
