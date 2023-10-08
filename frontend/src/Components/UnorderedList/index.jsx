import PropTypes from "prop-types";

const UnorderedList = ({ children, className }) => {
  return <ul className={className}>{children}</ul>;
};

UnorderedList.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default UnorderedList;
