import PropTypes from "prop-types";

/**
 * Renders an unordered list component.
 *
 * @param {ReactNode} children - The list items to be rendered.
 * @param {string} className - The class name for the unordered list element.
 * @return {ReactElement} - The rendered unordered list component.
 */
const UnorderedList = ({ children, className }) => {
  return <ul className={className}>{children}</ul>;
};

UnorderedList.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default UnorderedList;
