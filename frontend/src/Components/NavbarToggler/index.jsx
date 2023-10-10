import PropTypes from "prop-types";
import Span from "../../UI/Span";

const NavbarToggler = ({
  target = "#navbarSupportedContent",
  ariaControls = "navbarSupportedContent",
  ariaExpanded = false,
  ariaLabel = "Toggle navigation",
}) => {
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target={target}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      aria-label={ariaLabel}
    >
      <Span className="navbar-toggler-icon"></Span>
    </button>
  );
};

NavbarToggler.propTypes = {
  target: PropTypes.string,
  ariaControls: PropTypes.string,
  ariaExpanded: PropTypes.bool,
  ariaLabel: PropTypes.string,
};

export default NavbarToggler;
