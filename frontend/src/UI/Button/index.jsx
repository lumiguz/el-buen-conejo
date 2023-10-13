import PropTypes from "prop-types";

const Button = ({
  children,
  onClick = () => {},
  type = "button",
  className = "btn-danger",
}) => {
  return (
    <button type={type} onClick={onClick} className={`btn ${className}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
