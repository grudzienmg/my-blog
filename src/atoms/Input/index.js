import React from 'react';

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

export default Input;