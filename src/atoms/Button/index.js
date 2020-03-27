import React from 'react';

const Button = ({disabled, name, onClick}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
    >{name}</button>
  );
};

export default Button;
