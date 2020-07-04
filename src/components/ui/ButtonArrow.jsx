import React from 'react';
import PropTypes from 'prop-types';

const ButtonArrow = (props) => {
  const {
    classname, width, height, fill,
  } = props;
  return (
    <svg
      className={classname}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 18 18"
    >
      <path d="M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z" />
    </svg>
  );
};

export default ButtonArrow;

ButtonArrow.propTypes = {
  classname: PropTypes.objectOf(String),
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  fill: PropTypes.string,
};

ButtonArrow.defaultProps = {
  classname: undefined,
  fill: '',
};
