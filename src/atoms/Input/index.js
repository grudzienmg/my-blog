import React from 'react';

import InputContainer from './styles/inputContainer';

const Input = ({label, onChange, textarea}) => {
  return (
    <InputContainer>
      <label>{label}:</label>
      {textarea ? <textarea onChange={onChange} /> : <input onChange={onChange} />}
    </InputContainer>
  );
}

export default Input;