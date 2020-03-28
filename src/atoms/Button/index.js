import React from 'react';
import PropTypes from 'prop-types';

const Button = ({disabled, name, onClick}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
    >{name}</button>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
