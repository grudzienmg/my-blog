import React from 'react';
import PropTyes from 'prop-types';

import InputContainer from './styles/inputContainer';

const Input = ({label, onChange, textarea, value}) => {
  return (
    <InputContainer>
      <label>{label}:</label>
      {textarea ?
        <textarea onChange={onChange} value={value} /> :
        <input onChange={onChange} value={value}/>
      }
    </InputContainer>
  );
}

Input.propTypes = {
  label: PropTyes.string,
  onChange: PropTyes.func,
  textarea: PropTyes.bool,
  value: PropTyes.string,
};

export default Input;